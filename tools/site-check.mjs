#!/usr/bin/env node
/*
 * SITE CHECK: the rendered-page gate. Third leg of `npm run gate`.
 *
 *   audit-copy.mjs  source code, with file:line
 *   slop-check.mjs  AI tells in the rendered copy (SlopMonster)
 *   site-check.mjs  what Google and a visitor actually receive, page by page
 *
 * WHY THIS EXISTS. On 2026-10-05 an outside audit of a live client site found,
 * after three rounds of manual review: claims the owner had explicitly banned,
 * British spellings he had asked to remove, 24 of 27 pages sharing the
 * homepage's share card, FAQ answers that were in the schema but not in the
 * HTML, a breadcrumb pointing at a 404, and two competing business entities in
 * the structured data. Every rule was written down. None was measured. This
 * script measures them, so they fail the gate instead of waiting for a person
 * to notice.
 *
 * Crawls every URL in the sitemap (plus /terms and /privacy) on the local dev
 * server and checks:
 *   1. Client copy rules (config/copy-rules.json): banned claims and British
 *      spellings, in visible text, <title>, meta description, Open Graph tags
 *      and JSON-LD. Verbatim customer reviews are exempt.
 *   2. Title <= 60 and meta description <= 165 characters (indexable pages).
 *   3. Open Graph: every indexable page has its own og:title (not the
 *      homepage's), an og:url equal to its canonical, and an og:image.
 *   4. FAQ: every answer in FAQPage schema is present in the visible HTML.
 *   5. Schema: one business entity per page, carrying an @id. Other nodes
 *      reference it rather than re-declaring the business.
 *   6. Breadcrumbs: every BreadcrumbList item resolves to a 200.
 *
 *   npm run site-check                      # localhost, port from package.json dev
 *   npm run site-check -- http://localhost:3102
 *
 * Exit 1 on any FAIL. Dependency-free (Node 18+ ESM).
 */
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = process.cwd();

// ── Target ──────────────────────────────────────────────────────────────────
// Šlauf (2026-10-06): SITE_BASE pušta gate na produkcijski build (next start), ne samo na dev.
let BASE = process.argv[2] || process.env.SITE_BASE;
if (!BASE) {
  let port = "3105";
  try {
    const pkg = JSON.parse(readFileSync(join(ROOT, "package.json"), "utf8"));
    const m = (pkg.scripts?.dev || "").match(/-p\s+(\d+)/);
    if (m) port = m[1];
  } catch { /* default */ }
  BASE = `http://localhost:${port}`;
}
BASE = BASE.replace(/\/$/, "");

// ── Rules ───────────────────────────────────────────────────────────────────
const rulesPath = join(ROOT, "config/copy-rules.json");
if (!existsSync(rulesPath)) {
  console.error("\n  config/copy-rules.json not found. Every client site needs one, even if its banned list is short.\n");
  process.exit(1);
}
const rules = JSON.parse(readFileSync(rulesPath, "utf8"));
const BRITISH = rules.americanEnglish === false ? [] : (rules.britishSpellings || []);
const BRITISH_RE = BRITISH.length ? new RegExp(`\\b(${BRITISH.join("|")})\\b`, "gi") : null;
const CLAIMS = (rules.bannedClaims || []).map((c) => ({ re: new RegExp(c.pattern, "gi"), why: c.why, pattern: c.pattern }));

// Verbatim customer reviews may not be edited, so they cannot fail the gate.
// Šlauf: recenzije stoje u komponentama (rules.reviewFiles), ključ text ili tekst, oba navodnika.
const reviewFiles = ["config/reviews.ts", ...(rules.reviewFiles || [])];
const REVIEW_TEXTS = reviewFiles
  .filter((f) => existsSync(join(ROOT, f)))
  .flatMap((f) => [...readFileSync(join(ROOT, f), "utf8").matchAll(/\b(?:text|tekst):\s*(["'])((?:(?!\1)[^\\]|\\.)*)\1/g)])
  .map((m) => m[2].replace(/\\(["'])/g, "$1"));

// ── HTML helpers ────────────────────────────────────────────────────────────
const decode = (s) => s
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#x2F;/g, "/");
const norm = (s) => decode(s).replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/\s+/g, " ").trim();
const visibleText = (html) => norm(html
  .replace(/<script\b[\s\S]*?<\/script>/gi, " ")
  .replace(/<style\b[\s\S]*?<\/style>/gi, " ")
  .replace(/<!--[\s\S]*?-->/g, " ")
  .replace(/<[^>]+>/g, " "));
const metaContent = (html, attr, name) => {
  const re = new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"|<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`, "i");
  const m = html.match(re);
  return m ? decode(m[1] ?? m[2]) : null;
};
const titleOf = (html) => { const m = html.match(/<title>([\s\S]*?)<\/title>/i); return m ? decode(m[1]).trim() : null; };
const canonicalOf = (html) => { const m = html.match(/<link[^>]*rel="canonical"[^>]*href="([^"]*)"/i); return m ? decode(m[1]) : null; };
const jsonLd = (html) => {
  const out = [];
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)) {
    try { out.push(JSON.parse(m[1])); } catch { /* malformed block is reported by Google's own tools */ }
  }
  return out;
};
const walk = (node, fn) => {
  if (Array.isArray(node)) return node.forEach((n) => walk(n, fn));
  if (node && typeof node === "object") { fn(node); Object.values(node).forEach((v) => walk(v, fn)); }
};
const types = (node) => [].concat(node["@type"] || []);
const isBusiness = (node) => types(node).some((t) => /LocalBusiness|Business$/.test(String(t)));
const stringsIn = (node, acc = []) => {
  if (typeof node === "string") acc.push(node);
  else if (Array.isArray(node)) node.forEach((n) => stringsIn(n, acc));
  else if (node && typeof node === "object") Object.entries(node).forEach(([k, v]) => { if (!k.startsWith("@")) stringsIn(v, acc); });
  return acc;
};
const sameUrl = (a, b) => (a || "").replace(/\/$/, "") === (b || "").replace(/\/$/, "");
const toLocal = (u) => { const x = new URL(u, BASE); return `${BASE}${x.pathname}${x.search}`; };

async function get(url) {
  const res = await fetch(url, { redirect: "follow" });
  return { status: res.status, html: await res.text() };
}

// ── Pages ───────────────────────────────────────────────────────────────────
let sitemap;
try {
  const r = await get(`${BASE}/sitemap.xml`);
  if (r.status !== 200) throw new Error(`HTTP ${r.status}`);
  sitemap = r.html;
} catch (e) {
  console.error(`\n  Could not read ${BASE}/sitemap.xml (${e.message}). Is the dev server running?\n`);
  process.exit(1);
}
const pages = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => ({ path: new URL(m[1]).pathname, indexable: true }));
for (const p of rules.extraPages || ["/terms", "/privacy"]) if (!pages.some((x) => x.path === p)) pages.push({ path: p, indexable: false });

const fails = [];
const warns = [];
const fail = (path, label, detail) => fails.push({ path, label, detail });
const warn = (path, label, detail) => warns.push({ path, label, detail });
const snippet = (text, index, len) => "…" + text.slice(Math.max(0, index - 45), index + len + 45) + "…";

const fetched = new Map();
const statusCache = new Map();
async function statusOf(url) {
  const local = toLocal(url.split("#")[0]);
  if (!statusCache.has(local)) {
    try { statusCache.set(local, (await fetch(local, { redirect: "manual" })).status); }
    catch { statusCache.set(local, 0); }
  }
  return statusCache.get(local);
}

process.stdout.write(`\n  SITE CHECK  ${BASE}  (${pages.length} pages)\n  `);
for (const page of pages) {
  const { status, html } = await get(`${BASE}${page.path}`);
  process.stdout.write(".");
  if (status !== 200) { fail(page.path, "Page does not load", `HTTP ${status}`); continue; }
  fetched.set(page.path, html);
}
console.log("\n  " + "─".repeat(48));

const homeOgTitle = metaContent(fetched.get("/") || "", "property", "og:title");

for (const page of pages) {
  const html = fetched.get(page.path);
  if (!html) continue;
  const { path, indexable } = page;
  const ld = jsonLd(html);
  const visible = visibleText(html);

  // 1. Copy rules over everything a reader or a search engine sees.
  const corpusParts = [
    visible,
    titleOf(html) || "",
    metaContent(html, "name", "description") || "",
    metaContent(html, "property", "og:title") || "",
    metaContent(html, "property", "og:description") || "",
    ...ld.flatMap((d) => stringsIn(d)),
  ];
  let corpus = norm(corpusParts.join(" ‖ "));
  for (const t of REVIEW_TEXTS) corpus = corpus.split(norm(t)).join(" ");
  if (BRITISH_RE) for (const m of corpus.matchAll(BRITISH_RE))
    fail(path, "British spelling", `"${m[0]}"  ${snippet(corpus, m.index, m[0].length)}`);
  for (const c of CLAIMS) for (const m of corpus.matchAll(c.re))
    fail(path, "Banned claim", `"${m[0]}"  ${snippet(corpus, m.index, m[0].length)}\n         rule: ${c.why}`);

  if (indexable) {
    // 2. Lengths Google actually displays.
    const title = titleOf(html) || "";
    const desc = metaContent(html, "name", "description") || "";
    if (!title) fail(path, "Missing <title>", "");
    else if (title.length > 60) fail(path, "Title over 60 characters", `${title.length}: ${title}`);
    if (!desc) fail(path, "Missing meta description", "");
    else if (desc.length > 165) fail(path, "Meta description over 165 characters", `${desc.length}: ${desc}`);

    // 3. Each page its own share card.
    const ogTitle = metaContent(html, "property", "og:title");
    const ogUrl = metaContent(html, "property", "og:url");
    const ogImage = metaContent(html, "property", "og:image");
    const canonical = canonicalOf(html);
    if (!ogTitle) fail(path, "Missing og:title", "");
    else if (path !== "/" && ogTitle === homeOgTitle) fail(path, "Share card inherits the homepage", `og:title "${ogTitle}". Build metadata with pageMeta() from lib/seo.ts.`);
    if (!ogUrl) fail(path, "Missing og:url", "");
    else if (canonical && !sameUrl(ogUrl, canonical)) fail(path, "og:url differs from canonical", `${ogUrl}  vs  ${canonical}`);
    if (!ogImage) fail(path, "Missing og:image", "");
  }

  // 4. FAQ answers the schema claims must be on the page.
  walk(ld, (n) => {
    if (!types(n).includes("FAQPage")) return;
    for (const q of [].concat(n.mainEntity || [])) {
      const answer = norm(String(q?.acceptedAnswer?.text || ""));
      if (!answer) continue;
      const probe = answer.slice(0, 60);
      if (!visible.includes(probe))
        fail(path, "FAQ answer in schema but not in the HTML", `"${q.name}"  answer starts "${probe}…"`);
    }
  });

  // 5. One business, declared once, referenced everywhere else.
  const businesses = [];
  walk(ld, (n) => { if (isBusiness(n) && Object.keys(n).some((k) => !k.startsWith("@"))) businesses.push(n); });
  if (businesses.length > 1)
    fail(path, "More than one business entity in schema", businesses.map((b) => `${types(b).join("/")} url=${b.url || "-"} @id=${b["@id"] || "none"}`).join("  |  "));
  for (const b of businesses) if (!b["@id"])
    fail(path, "Business entity without @id", `${types(b).join("/")} url=${b.url || "-"}. Give it "@id" so other nodes can reference it.`);
  const businessId = businesses[0]?.["@id"];
  walk(ld, (n) => {
    if (Object.keys(n).length === 1 && n["@id"] && businessId && n["@id"] !== businessId)
      warn(path, "Schema reference to an unknown @id", n["@id"]);
  });

  // 6. Breadcrumbs must lead somewhere real.
  const crumbs = [];
  walk(ld, (n) => {
    if (!types(n).includes("BreadcrumbList")) return;
    for (const it of [].concat(n.itemListElement || [])) {
      const u = typeof it.item === "string" ? it.item : it.item?.["@id"];
      if (u) crumbs.push(u);
    }
  });
  for (const u of crumbs) {
    const s = await statusOf(u);
    if (s !== 200) fail(path, "Breadcrumb points at a non-200 page", `${u}  →  HTTP ${s}`);
  }
}

// ── Report ──────────────────────────────────────────────────────────────────
const groupBy = (arr, k) => arr.reduce((m, x) => ((m[x[k]] ||= []).push(x), m), {});
function print(title, items) {
  if (!items.length) return;
  console.log(`\n  ${title}\n`);
  for (const [label, hits] of Object.entries(groupBy(items, "label"))) {
    console.log(`   • ${label} (${hits.length})`);
    for (const h of hits.slice(0, 12)) console.log(`       ${h.path}  ${h.detail}`);
    if (hits.length > 12) console.log(`       … and ${hits.length - 12} more`);
  }
}
print("FAIL (must fix before deploy):", fails);
print("WARN (review):", warns);
if (!fails.length && !warns.length) console.log("\n  ✓ Every page passed.");
console.log("\n  " + "─".repeat(48));
console.log(`  ${fails.length} fail, ${warns.length} warn across ${fetched.size} pages.` + (fails.length ? "  Do NOT deploy.\n" : "  Ready.\n"));
process.exit(fails.length ? 1 : 0);
