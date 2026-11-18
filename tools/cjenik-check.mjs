#!/usr/bin/env node
// Gate za cjenik (NN 132/2026-1584): pada ako fali matični broj, ako neka
// stavka nema baznu cijenu, ako važeći CSV ne odgovara lib/cjenik.ts ili ako
// fali neka arhivska datoteka (stare se ne brišu).
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { DIR, buildCsv, filePrefix, loadManifest, validate, redovi } from './cjenik-lib.mjs';

const err = validate();
const m = loadManifest();
if (!m?.vazeci) err.push('nema public/cjenik/manifest.json s važećim cjenikom, pokreni npm run cjenik');
else {
    const f = join(DIR, m.vazeci.datoteka);
    if (!existsSync(f)) err.push(`fali datoteka public/cjenik/${m.vazeci.datoteka}`);
    else if (readFileSync(f, 'utf8') !== buildCsv() || !m.vazeci.datoteka.startsWith(filePrefix() + '_'))
        err.push('važeći CSV ne odgovara lib/cjenik.ts, pokreni npm run cjenik');
    for (const a of m.arhiva) if (!existsSync(join(DIR, a.datoteka))) err.push(`fali arhivska datoteka public/cjenik/${a.datoteka}`);
}

if (err.length) {
    console.error('\n  CJENIK GATE PAO\n' + err.map((e) => '    - ' + e).join('\n') + '\n');
    process.exit(1);
}
console.log(`  cjenik: ${redovi().length} redaka, svaki s baznom cijenom, važeći ${m.vazeci.datoteka}, arhiva ${m.arhiva.length}`);
