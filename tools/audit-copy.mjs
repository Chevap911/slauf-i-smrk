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
import { execSync } from "node:child_process";

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
// 17. 11. 2026. (Marko: "Da, dopusti video"): jedina iznimka je očišćeni .mp4 u public/video/,
// do 5 MB i bez ijednog traga lokacije. .mov, .heic i ostalo s mobitela i dalje pada.
// Lokacija u mp4 stoji kao ključ (©xyz, "location", Appleov ISO6709) ili kao sama koordinata
// "+45.8015+015.7105/", pa se traži i ključ i oblik koordinate.
const VIDEO_LOCATION = ["©xyz", "location", "ISO6709", "GPSLatitude", "GPS"];
const ISO6709 = /[+-]\d{2}\.\d{2,}[+-]\d{3}\.\d{2,}/;
function cleanWebVideo(f, ext) {
  if (ext !== ".mp4" || !relative(ROOT, f).startsWith(join("public", "video") + "/")) return false;
  if (statSync(f).size > 5 * 1024 * 1024) return false;
  const buf = readFileSync(f);
  if (VIDEO_LOCATION.some((m) => buf.includes(Buffer.from(m, "utf8")))) return false;
  return !ISO6709.test(buf.toString("latin1"));
}
for (const f of walkAll(join(ROOT, "public"))) {
  const ext = extname(f).toLowerCase();
  if (RAW_MEDIA.has(ext) && cleanWebVideo(f, ext)) continue;
  if (RAW_MEDIA.has(ext))
    struct.push({ level: "FAIL", label: "Sirovi medij u public/ (javno dostupan)", detail: `${relative(ROOT, f)}. Premjesti ga izvan public/.` });
  else if (IMAGE.has(ext) && hasLocation(readFileSync(f), ext))
    struct.push({ level: "FAIL", label: "Fotka u public/ nosi GPS lokaciju", detail: `${relative(ROOT, f)}. Očisti metapodatke prije deploya.` });
}

// ── Obavijest o upitu (docs/upiti-dostava.md) ───────────────────────────────
// 12. 10. 2026.: Resend SDK ne baca grešku kad odbije mail, nego vraća { error }. Slanje ide
// samo kroz lib/upiti/obavijest.ts, koji provjerava rezultat. Forma ne smije podmetati
// izmišljenu adresu kao e-mail kupca.
const OBAVIJEST = "lib/upiti/obavijest.ts";
for (const [f, src] of stripped) {
  const rel = relative(ROOT, f);
  src.split("\n").forEach((ln, i) => {
    if (rel !== OBAVIJEST && /\.emails\.send\s*\(/.test(ln)) {
      results.push({ level: "FAIL", label: `Mail se šalje mimo ${OBAVIJEST} (rezultat se ne provjerava)`, file: rel, line: i + 1, hit: "emails.send(", text: ln.trim().slice(0, 110) });
    }
    if (/\bemail:\s*['"`][^'"`]*@slaufismrk\.com['"`]/.test(ln)) {
      results.push({ level: "FAIL", label: "Izmišljena adresa kao e-mail kupca (potvrda bi odbijala na našoj domeni)", file: rel, line: i + 1, hit: "@slaufismrk.com", text: ln.trim().slice(0, 110) });
    }
  });
}
if (!existsSync(join(ROOT, OBAVIJEST))) {
  struct.push({ level: "FAIL", label: "Nema modula za obavijest o upitu", detail: `${OBAVIJEST} mora postojati (slanje maila s provjerom rezultata).` });
}

// ── Jedan broj na webu (CLAUDE.md pravilo 7, Marko 2026-10-12) ──────────────
// Na webu smije stajati samo +385 95 844 2806 (tel:+385958442806, wa.me/385958442806). Bilo koji
// drugi hrvatski mobilni ili fiksni broj u kodu stranica pada, i kao primjer u polju forme.
const KANONSKI = /\+385 95 844 2806|\+?385958442806/g;
const DRUGI_BROJ = /(?:\+385|00385|\b385|\b0)[\s/-]?(?:\(0\)\s?)?(?:9[1-9]|1|[2-5][0-9])[\s/.-]?\d{3}[\s/.-]?\d{3,4}\b/;
for (const [f, src] of stripped) {
  const rel = relative(ROOT, f);
  if (rel.startsWith("components/emails/")) continue; // mail nama nosi broj kupca, ne ide na web
  src.split("\n").forEach((ln, i) => {
    const bez = ln.replace(KANONSKI, "");
    const m = bez.match(DRUGI_BROJ);
    if (m) results.push({ level: "FAIL", label: "Drugi broj telefona na webu (jedini dopušten je +385 95 844 2806)", file: rel, line: i + 1, hit: m[0], text: ln.trim().slice(0, 110) });
  });
}

// ── Sidrena cijena uz svaku cijenu (CLAUDE.md pravilo 6, NN 101/2026, obveza od 17. 11. 2026.) ─
// Svaki iznos u eurima na webu mora imati cijenu na 10. 9. 2026. u istom ili susjednom retku
// (±2): tekst "10. 9. 2026.", prop priceAnchor, polje anchor ili SIDRENI_DATUM. Admin, API i
// mailovi nama nisu web. Cijene koje nisu naša ponuda (sanacija fasade, aparat u trgovini)
// stoje u TUDJE_CIJENE s razlogom. Provjera gleda susjedstvo, ne broji iznose: uz novu cijenu
// u retku koji već ima sidrenu za drugi iznos, sidrena se dodaje ručno.
const IZNOS = /\d[\d.,]*\s*(?:[–-]\s*\d[\d.,]*\s*)?€/;
const SIDRENA = /10\. 9\. 2026|SIDRENI_DATUM|priceAnchor|\banchor:|sidren/i;
const BEZ_SIDRENE = [/^app\/admin\//, /^app\/api\//, /^components\/emails\//, /^lib\/cjenik\.ts$/, /^lib\/quote\.ts$/];
const TUDJE_CIJENE = [
  { re: /15\.000/, zasto: "cijena sanacije ETICS fasade, nije naša usluga" },
  { re: /aparat za \d+ €/, zasto: "cijena aparata u trgovini" },
];
const sCijenama = [...stripped.entries()];
if (existsSync(join(ROOT, "public/llms.txt"))) sCijenama.push([join(ROOT, "public/llms.txt"), readFileSync(join(ROOT, "public/llms.txt"), "utf8")]);
for (const [f, src] of sCijenama) {
  const rel = relative(ROOT, f);
  if (BEZ_SIDRENE.some((r) => r.test(rel))) continue;
  const L = src.split("\n");
  L.forEach((ln, i) => {
    if (/^\s*import\s/.test(ln) || !IZNOS.test(ln)) return;
    if (TUDJE_CIJENE.some((t) => t.re.test(ln))) return;
    const okolo = L.slice(Math.max(0, i - 2), i + 3).join("\n");
    if (SIDRENA.test(okolo)) return;
    results.push({ level: "FAIL", label: "Cijena bez cijene na 10. 9. 2026. (obveza od 17. 11. 2026., kazna 1.000 do 20.000 €)", file: rel, line: i + 1, hit: ln.match(IZNOS)[0], text: ln.trim().slice(0, 110) });
  });
}

// ── Tajne u repou (repo je javan) ───────────────────────────────────────────
// 12. 10. 2026.: pravi Resend ključ je od 9. 6. stajao u test-resend.js na javnom GitHubu.
// Ključevi idu samo u Vercel (Settings → Environment Variables). Gleda sve praćene datoteke.
const TAJNE = [
  { re: /\bre_[A-Za-z0-9_]{20,}/, sto: "Resend API ključ" },
  { re: /eyJhbGciOi[A-Za-z0-9_-]{20,}\.[A-Za-z0-9_-]{20,}/, sto: "JWT (Supabase ključ)" },
  { re: /\b(sk|rk)_live_[A-Za-z0-9]{10,}/, sto: "Stripe ključ" },
  { re: /\b[0-9]{8,10}:[A-Za-z0-9_-]{35}\b/, sto: "Telegram bot token" },
  { re: /\bAKIA[0-9A-Z]{16}\b/, sto: "AWS ključ" },
];
let pracene = [];
try {
  pracene = execSync("git ls-files -z", { cwd: ROOT, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 }).split("\0").filter(Boolean);
} catch { /* nije git repo */ }
for (const rel of pracene) {
  if (/\.(png|jpe?g|webp|gif|ico|pdf|mp4|mov|zip|woff2?|ttf|svg)$/i.test(rel) || rel === "package-lock.json") continue;
  const p = join(ROOT, rel);
  if (!existsSync(p) || statSync(p).size > 2 * 1024 * 1024) continue;
  readFileSync(p, "utf8").split("\n").forEach((ln, i) => {
    for (const t of TAJNE) {
      if (t.re.test(ln)) results.push({ level: "FAIL", label: `Tajna u repou: ${t.sto}. Makni je, opozovi ključ i stavi novi samo u Vercel`, file: rel, line: i + 1, hit: t.sto, text: "(vrijednost skrivena)" });
    }
  });
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
