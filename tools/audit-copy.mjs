#!/usr/bin/env node
/*
 * AUDIT: izvorni kod, prva noga `npm run gate`.   npm run audit
 *
 *   audit-copy.mjs  izvorni kod, s datotekom i retkom
 *   slop-check.mjs  AI tragovi u renderanom tekstu (SlopMonster)
 *   site-check.mjs  ono što Google i posjetitelj stvarno dobiju, stranica po stranica
 *
 * Šlaufova verzija BudemAI client-template/tools/audit-copy.mjs (2026-10-06). Iz
 * templatea su zadržane opće provjere: pravila iz config/copy-rules.json, AI fraze,
 * zaostali placeholderi, sirovi mediji i GPS u public/, prisutnost schema tipova.
 * Izbačene su provjere vezane uz američki template: config/client.ts, engleski
 * naslov s "Pressure Washing", PhoneClickTracker i pageMeta(). Šlauf ih nema po
 * dizajnu; site-check provjerava isti ishod (vlastita kartica za dijeljenje po
 * stranici) na renderanim stranicama.
 *
 * Izlaz 1 (blokira deploy) na bilo koji FAIL. Bez ovisnosti (Node ESM).
 */
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, relative, extname } from "node:path";

const ROOT = process.cwd();
const SCAN_DIRS = ["config", "components", "app", "lib"];
const EXTS = new Set([".ts", ".tsx"]);

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    if (name === "node_modules" || name === ".next" || name.startsWith(".")) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, acc);
    else if (EXTS.has(extname(name))) acc.push(p);
  }
  return acc;
}
const files = SCAN_DIRS.flatMap((d) => walk(join(ROOT, d)));

// Komentari van, broj redaka ostaje. `//` je komentar samo na početku retka ili
// iza razmaka, da https:// preživi.
function stripComments(src) {
  src = src.replace(/\/\*[\s\S]*?\*\//g, (m) => m.replace(/[^\n]/g, " "));
  src = src.replace(/(^|[ \t])\/\/[^\n]*/gm, (_m, p1) => p1);
  return src;
}
const stripped = new Map(files.map((f) => [f, stripComments(readFileSync(f, "utf8"))]));

// ── Zabranjene fraze ────────────────────────────────────────────────────────
const META = [
  "lead capture", "lead generation", "this system", "website system", "seo pages",
  "this preview", "website preview", "before production",
];
// Em dash je u config/copy-rules.json (s razlogom), pa ga ovdje nema da se ne prijavljuje dvaput.
const AIISMS = [
  "not just", "in today's", "vibrant", "stunning", "breathtaking", "moreover", "furthermore",
  "u ovom članku", "važno je napomenuti", "valja napomenuti", "u današnjem svijetu", "u današnje vrijeme",
];
const PLACEHOLDERS = ["lorem ipsum", "placehold.co", "example.vercel.app", "your business name"];

const results = [];
function scan(label, list) {
  for (const f of files) {
    stripped.get(f).split("\n").forEach((ln, i) => {
      const low = ln.toLowerCase();
      for (const ph of list) {
        if (low.includes(ph.toLowerCase()))
          results.push({ level: "FAIL", label, file: relative(ROOT, f), line: i + 1, hit: ph, text: ln.trim().slice(0, 110) });
      }
    });
  }
}
scan("Tekst za vlasnika umjesto za kupca", META);
scan("AI fraza", AIISMS);
scan("Zaostali placeholder", PLACEHOLDERS);

// ── Schema: jedan posao (bilo koji LocalBusiness podtip), usluge, FAQ, breadcrumbs ─
const struct = [];
const allSrc = files.map((f) => readFileSync(f, "utf8")).join("\n");
const SCHEMA = [
  ["posao (LocalBusiness ili podtip, npr. HomeAndConstructionBusiness)", "[A-Za-z]*Business"],
  ["Service", "Service"],
  ["FAQPage", "FAQPage"],
  ["BreadcrumbList", "BreadcrumbList"],
];
for (const [label, t] of SCHEMA) {
  if (!new RegExp('@type["\']?\\s*:\\s*\\[?\\s*["\']' + t + '["\']').test(allSrc))
    struct.push({ level: "FAIL", label: "Nedostaje schema", detail: `Nema ${label} (@type) nigdje u kodu.` });
}

// ── Pravila za tekst (config/copy-rules.json) ───────────────────────────────
const rulesPath = join(ROOT, "config/copy-rules.json");
if (!existsSync(rulesPath)) {
  struct.push({ level: "FAIL", label: "Nema config/copy-rules.json", detail: "Šlaufova pravila za tekst moraju biti podaci, ne proza." });
} else {
  const rules = JSON.parse(readFileSync(rulesPath, "utf8"));
  const claims = (rules.bannedClaims || []).map((c) => ({ re: new RegExp(c.pattern, "i"), why: c.why }));
  const reviewFiles = new Set(rules.reviewFiles || []);
  const targets = [...stripped.entries()];
  const llms = join(ROOT, "public/llms.txt");
  if (existsSync(llms)) targets.push([llms, readFileSync(llms, "utf8")]);
  for (const [f, src] of targets) {
    const rel = relative(ROOT, f);
    src.split("\n").forEach((ln, i) => {
      if (/^\s*import\s/.test(ln)) return;
      // Doslovne recenzije kupaca se ne uređuju, pa ne mogu pasti gate
      if (reviewFiles.has(rel) && /\b(text|tekst):\s*["']/.test(ln)) return;
      const copy = ln.replace(/className=("[^"]*"|\{`[^`]*`\})/g, "");
      for (const c of claims) {
        const m = copy.match(c.re);
        if (m) results.push({ level: "FAIL", label: `Zabranjeno: ${c.why}`, file: rel, line: i + 1, hit: m[0], text: ln.trim().slice(0, 110) });
      }
    });
  }
}

// ── Ništa u public/ ne smije nositi lokaciju ────────────────────────────────
// Sve u public/ je javno, original i kad next/image na stranici servira očišćenu
// kopiju. Fotke s mobitela nose GPS mjesta snimanja, za ovaj posao kuću kupca.
const RAW_MEDIA = new Set([".mov", ".mp4", ".m4v", ".avi", ".heic", ".heif", ".dng"]);
const IMAGE = new Set([".jpg", ".jpeg", ".png", ".webp"]);
function tiffHasGps(buf, start) {
  if (start + 8 > buf.length) return false;
  const le = buf.toString("ascii", start, start + 2) === "II";
  const u16 = (o) => (le ? buf.readUInt16LE(o) : buf.readUInt16BE(o));
  const u32 = (o) => (le ? buf.readUInt32LE(o) : buf.readUInt32BE(o));
  const ifd = start + u32(start + 4);
  if (ifd + 2 > buf.length) return false;
  const n = u16(ifd);
  for (let i = 0; i < n; i++) {
    const e = ifd + 2 + i * 12;
    if (e + 2 > buf.length) break;
    if (u16(e) === 0x8825) return true; // GPSInfo
  }
  return false;
}
function hasLocation(buf, ext) {
  if (buf.includes("GPSLatitude") || buf.includes("exif:GPS")) return true;
  if (ext === ".jpg" || ext === ".jpeg") {
    let o = 2;
    while (o + 4 < buf.length && buf[o] === 0xff) {
      const marker = buf[o + 1];
      const len = buf.readUInt16BE(o + 2);
      if (marker === 0xe1 && buf.toString("ascii", o + 4, o + 10) === "Exif\0\0" && tiffHasGps(buf, o + 10)) return true;
      if (marker === 0xda) break;
      o += 2 + len;
    }
  } else if (ext === ".png") {
    let o = 8;
    while (o + 8 < buf.length) {
      const len = buf.readUInt32BE(o);
      const type = buf.toString("ascii", o + 4, o + 8);
      if (type === "eXIf" && tiffHasGps(buf, o + 8)) return true;
      if (type === "IEND") break;
      o += 12 + len;
    }
  } else if (ext === ".webp") {
    const i = buf.indexOf("EXIF");
    if (i > 0 && tiffHasGps(buf, i + 8)) return true;
  }
  return false;
}
function walkAll(dir, acc = []) {
  if (!existsSync(dir)) return acc;
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walkAll(p, acc);
    else acc.push(p);
  }
  return acc;
}
for (const f of walkAll(join(ROOT, "public"))) {
  const ext = extname(f).toLowerCase();
  if (RAW_MEDIA.has(ext))
    struct.push({ level: "FAIL", label: "Sirovi medij u public/ (javno dostupan)", detail: `${relative(ROOT, f)}. Premjesti ga izvan public/.` });
  else if (IMAGE.has(ext) && hasLocation(readFileSync(f), ext))
    struct.push({ level: "FAIL", label: "Fotka u public/ nosi GPS lokaciju", detail: `${relative(ROOT, f)}. Očisti metapodatke prije deploya.` });
}

// ── Izvještaj ───────────────────────────────────────────────────────────────
const fails = [...results.filter((r) => r.level === "FAIL"), ...struct.filter((s) => s.level === "FAIL")];
const warns = [...results.filter((r) => r.level === "WARN"), ...struct.filter((s) => s.level === "WARN")];

console.log("\n  AUDIT TEKSTA, SCHEME I MEDIJA  (" + files.length + " datoteka)\n  " + "─".repeat(48));
if (!fails.length && !warns.length) console.log("  ✓ Sve provjere prolaze.\n");

const groupBy = (arr, k) => arr.reduce((m, x) => ((m[x[k]] ||= []).push(x), m), {});
function printGroup(title, items) {
  if (!items.length) return;
  console.log("\n  " + title + "\n");
  for (const [label, hits] of Object.entries(groupBy(items, "label"))) {
    console.log("   • " + label);
    for (const h of hits) {
      if (h.file) console.log(`       ${h.file}:${h.line}  [${h.hit}]  ${h.text}`);
      else console.log(`       ${h.detail}`);
    }
  }
}
printGroup("FAIL (popravi prije deploya):", fails);
printGroup("WARN (pregledaj):", warns);

console.log("\n  " + "─".repeat(48));
console.log(`  ${fails.length} fail, ${warns.length} warn.` + (fails.length ? "  Ne deployati.\n" : "  Spremno.\n"));
process.exit(fails.length ? 1 : 0);
