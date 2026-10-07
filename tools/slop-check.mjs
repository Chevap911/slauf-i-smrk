#!/usr/bin/env node
/*
 * Slop gate za RENDERANI tekst. Par uz audit-copy.mjs, koji gleda source.
 *
 * audit-copy.mjs  → source (config/components/app), owner-facing copy + SEO struktura
 * slop-check.mjs  → renderani tekst stranice, AI tellovi (SlopMonster)
 *
 * Oba moraju proći prije deploya. Razlog za ovaj: Davidov živi sajt je prošao
 * audit i četiri kruga ručne revizije, pa i dalje imao 11 rule-of-three lista.
 *
 *   npm run slop                          # SVE stranice iz sitemapa, localhost na portu iz package.json dev
 *   npm run slop -- https://x.vercel.app  # deployani preview
 *   npm run slop -- out/index.html        # lokalni HTML
 *
 * Exit 1 ako bilo koja stranica padne ispod 5/5.
 */
import { execFileSync } from "node:child_process";
import { writeFileSync, existsSync, mkdtempSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { homedir } from "node:os";

const SCORER = process.env.SLOPMONSTER
  || join(homedir(), "Desktop", "Claude assistant", "Skills", "slopmonster", "tools", "deslop.py");

if (!existsSync(SCORER)) {
  console.error(`\n  SlopMonster nije nađen na:\n    ${SCORER}\n  Postavi SLOPMONSTER=/put/do/deslop.py ili provjeri Skills/slopmonster/.\n`);
  process.exit(1);
}

let targets = process.argv.slice(2);
if (targets.length === 0) {
  // Derive the port from this repo's own dev script instead of hardcoding the
  // template's. Every client repo has a different fixed port (hitech is 3102),
  // and a hardcoded default silently scored the wrong site, or nothing.
  let port = "3105";
  try {
    const pkg = JSON.parse(readFileSync(new URL("../package.json", import.meta.url), "utf8"));
    const m = (pkg.scripts?.dev || "").match(/-p\s+(\d+)/);
    if (m) port = m[1];
  } catch { /* fall through to the default */ }
  // Every page in the sitemap, not just the homepage. Until 2026-10-05 the
  // default scored only "/", so a blog post carrying a banned claim passed the
  // gate without ever being read.
  // Šlauf (2026-10-06): SITE_BASE pušta gate na produkcijski build (next start).
  const base = (process.env.SITE_BASE || `http://localhost:${port}`).replace(/\/$/, "");
  try {
    const sm = await (await fetch(`${base}/sitemap.xml`)).text();
    targets = [...sm.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => base + new URL(m[1]).pathname);
  } catch { /* fall through */ }
  if (targets.length === 0) targets = [`${base}/`];
}

const tmp = mkdtempSync(join(tmpdir(), "slop-"));
const results = [];

for (const t of targets) {
  let file = t;
  if (/^https?:\/\//.test(t)) {
    try {
      const res = await fetch(t, { redirect: "follow" });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      file = join(tmp, encodeURIComponent(t).slice(-60) + ".html");
      writeFileSync(file, await res.text());
    } catch (e) {
      console.error(`  ✗ ${t}  (${e.message})`);
      results.push({ t, score: 0, out: String(e.message) });
      continue;
    }
  }
  let out = "", score = 0, ok = true;
  try {
    out = execFileSync("python3", [SCORER, file], { encoding: "utf8" });
  } catch (e) {
    out = (e.stdout || "") + (e.stderr || "");
    ok = false;
  }
  const m = out.match(/score\s+(\d)\/5/);
  score = m ? Number(m[1]) : (ok ? 5 : 0);
  results.push({ t, score, out });
}

console.log("\n  SLOP GATE  (" + results.length + " stranica)\n  " + "─".repeat(48));
for (const r of results) {
  const mark = r.score === 5 ? "✓" : "✗";
  console.log(`\n  ${mark} ${r.score}/5  ${r.t}`);
  if (r.score < 5) {
    const body = r.out.split("\n").filter((l) => /·|rule-|vocabulary|construction|claim|punctuation/.test(l));
    for (const l of body.slice(0, 12)) console.log("     " + l.trim());
  }
}
const fails = results.filter((r) => r.score < 5);
console.log("\n  " + "─".repeat(48));
console.log(`  ${fails.length} od ${results.length} pada.` + (fails.length ? "  NE deployati.\n" : "  Čisto.\n"));
process.exit(fails.length ? 1 : 0);
