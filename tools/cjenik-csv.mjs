#!/usr/bin/env node
// Strojno čitljiv cjenik po Pravilniku o načinu objave cjenika (NN 132/2026-1584).
//
//   npm run cjenik
//
// Pokreni nakon svake promjene cijene u lib/cjenik.ts, pa deploy najkasnije do
// 11:00 na dan kad nova cijena vrijedi. Ako se ništa nije promijenilo, ne radi
// ništa. Ako jest: nova datoteka s brojem pohrane +1 i vremenom GGGGMMDD_SSMM,
// prethodna ide u arhivu u manifestu. Arhivske datoteke se nikad ne brišu
// (moraju ostati dostupne najmanje 15 dana). /cjenik.csv uvijek vodi na važeću.
//
// Bez matičnog broja nastaje nacrt s nazivom MATICNI-BROJ-NEDOSTAJE_..., gate
// (cjenik-check) tada pada, a prvo pravo pokretanje nacrt briše.
import { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { DIR, MANIFEST, ID_NEDOSTAJE, buildCsv, filePrefix, stamp, lokalno, loadManifest, redovi } from './cjenik-lib.mjs';

mkdirSync(DIR, { recursive: true });
const csv = buildCsv();
const prefix = filePrefix();

// Prvo pokretanje: CSV-ovi po rujanskim odlukama (NN 101/2026) postaju arhiva.
// Nazivi su im "servis_..._NNN_DD.MM.GGGG_SS-MM.csv".
function pocetniManifest() {
    const arhiva = readdirSync(DIR)
        .map((datoteka) => ({ datoteka, m: datoteka.match(/_(\d{3})_(\d{2})\.(\d{2})\.(\d{4})_(\d{2})-(\d{2})\.csv$/) }))
        .filter((x) => x.m)
        .map(({ datoteka, m }) => ({ datoteka, broj: Number(m[1]), objavljen: `${m[4]}-${m[3]}-${m[2]}T${m[5]}:${m[6]}` }))
        .sort((a, b) => b.broj - a.broj);
    return { vazeci: null, arhiva };
}

const m = loadManifest() ?? pocetniManifest();

if (m.vazeci && !process.argv.includes('--force')) {
    const cur = join(DIR, m.vazeci.datoteka);
    if (existsSync(cur) && readFileSync(cur, 'utf8') === csv && m.vazeci.datoteka.startsWith(prefix + '_')) {
        console.log(`  cjenik nepromijenjen: public/cjenik/${m.vazeci.datoteka}`);
        process.exit(0);
    }
}

// Nacrt bez matičnog broja nikad nije smio biti objavljen: briše se, ne arhivira.
if (m.vazeci?.datoteka.startsWith(ID_NEDOSTAJE)) {
    const f = join(DIR, m.vazeci.datoteka);
    if (existsSync(f)) unlinkSync(f);
    m.vazeci = null;
}

const sada = new Date();
const broj = Math.max(m.vazeci?.broj ?? 0, ...m.arhiva.map((a) => a.broj)) + 1;
const datoteka = `${prefix}_${String(broj).padStart(3, '0')}_${stamp(sada)}.csv`;
writeFileSync(join(DIR, datoteka), csv);

if (m.vazeci) m.arhiva.unshift({ ...m.vazeci, zamijenjen: lokalno(sada) });
m.vazeci = { datoteka, broj, objavljen: lokalno(sada) };
writeFileSync(MANIFEST, JSON.stringify(m, null, 2) + '\n');
console.log(`  novi cjenik: public/cjenik/${datoteka} (${redovi().length} redaka)`);
if (datoteka.startsWith(ID_NEDOSTAJE)) console.log('  NACRT: upiši TRGOVAC.maticniBroj u lib/cjenik.ts i pokreni ponovno, gate do tada pada.');
