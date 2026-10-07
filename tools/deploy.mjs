#!/usr/bin/env node
/*
 * DEPLOY: jedini put do produkcije.   npm run deploy
 *
 * Šlaufova verzija BudemAI client-template/tools/deploy.mjs (2026-10-06). Pravilo je
 * isto: produkcija je uvijek commit koji postoji na GitHubu. Razlika: Šlauf se deploya
 * iz GitHuba (Vercel Git integracija, push na main = produkcija), a ovaj repo nije
 * lokalno vezan na Vercel. Templateov `npx vercel --prod --yes` bi ovdje napravio
 * novi Vercel projekt umjesto da deploya postojeći, zato ovdje samo pushamo.
 *
 *   1. Radno stablo mora biti čisto: ništa izmijenjeno, staged ni nepraćeno.
 *   2. Grana ne smije biti iza origina.
 *   3. `npm run audit` mora proći. Renderirani gate (slop, site-check) treba server,
 *      pa `npm run gate` ide PRIJE ovoga.
 *   4. git push. Na mainu Vercel deploya produkciju, na drugoj grani samo pregled.
 */
import { execSync } from "node:child_process";

const sh = (cmd) => execSync(cmd, { encoding: "utf8" }).trim();
const run = (cmd) => execSync(cmd, { stdio: "inherit" });
const stop = (msg) => { console.error(`\n  DEPLOY ODBIJEN\n  ${msg}\n`); process.exit(1); };

// 1. Čisto stablo
const dirty = sh("git status --porcelain");
if (dirty) stop(`Ima necommitanih ili nepraćenih datoteka. Commitaj ih ili ih dodaj u .gitignore:\n\n${dirty.split("\n").map((l) => "    " + l).join("\n")}`);

// 2. U koraku s originom
const branch = sh("git rev-parse --abbrev-ref HEAD");
try { sh("git fetch --quiet origin"); } catch { stop("Origin nije dostupan. Produkcija mora odgovarati GitHubu, pa nema deploya bez usporedbe."); }
let upstream;
try { upstream = sh("git rev-parse --abbrev-ref --symbolic-full-name @{u}"); }
catch { stop(`Grana "${branch}" nema upstream na originu. Prvo: git push -u origin ${branch}`); }
const behind = Number(sh(`git rev-list --count HEAD..${upstream}`));
const ahead = Number(sh(`git rev-list --count ${upstream}..HEAD`));
if (behind > 0) stop(`${branch} je ${behind} commit(a) iza ${upstream}. Netko je pushao. Povuci promjene i ponovi gate.`);

// 3. Izvorni gate
console.log("\n  Audit izvornog koda…");
try { run("npm run --silent audit"); } catch { stop("npm run audit pada. Popravi, commitaj i ponovi."); }

// 4. Push, Vercel deploya iz GitHuba
const sha = sh("git rev-parse --short HEAD");
if (ahead === 0) {
  console.log(`\n  ${branch}@${sha} je već na GitHubu, nema što pushati. Vercel je već deployao taj commit.\n`);
  process.exit(0);
}
console.log(`\n  Pusham ${ahead} commit(a) na ${upstream}…\n`);
run("git push --quiet");
console.log(branch === "main"
  ? `\n  ${branch}@${sha} je na GitHubu. Vercel sad deploya produkciju (slaufismrk.com). Provjeri na domeni prije nego kažeš da je gotovo.\n`
  : `\n  ${branch}@${sha} je na GitHubu. Na grani koja nije main Vercel radi samo pregled, ne produkciju.\n`);
