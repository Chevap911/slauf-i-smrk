#!/usr/bin/env node
// Objava cjenika u CSV-u po Odluci o objavi cjenika proizvoda i usluga (NN 101/2026).
//
//   npm run cjenik
//
// Pokreni nakon svake promjene cijene u lib/cjenik.ts, pa deploy najkasnije do
// 8:00 na dan kad nova cijena vrijedi. Skripta nikad ne briše stare datoteke:
// prethodni cjenici moraju ostati javno dostupni najmanje 30 dana.
//
// Naziv datoteke prati obrazac iz pojašnjenja Ministarstva gospodarstva:
// oblik objekta_adresa_oznaka objekta_broj pohrane_datum_vrijeme slanja.
// Razmaci i dvotočka su zamijenjeni crticom da URL i datoteka rade svugdje.

import { mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CJENIK } from '../lib/cjenik.ts';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const DIR = join(ROOT, 'public', 'cjenik');
const PREFIKS = 'servis_Primostenska-11-Zagreb_U-01';
const SIDRENI_DATUM_CSV = '10.09.2026';

const broj = (n) => n.toFixed(2).replace('.', ',');
const jedinica = (j) => ({ m2: 'm2', usluga: 'usluga', komad: 'komad' })[j];
const tekst = (iznos, j) => {
    const po = j === 'm2' ? ' EUR/m2' : ' EUR';
    if (iznos.max === undefined) return `od ${broj(iznos.min)}${po}`;
    if (iznos.max === iznos.min) return `${broj(iznos.min)}${po}`;
    return `${broj(iznos.min)}-${broj(iznos.max)}${po}`;
};
const polje = (v) => {
    const s = String(v ?? '');
    return /[";\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

const ZAGLAVLJE = [
    'naziv_usluge',
    'kategorija',
    'jedinica_mjere',
    'maloprodajna_cijena',
    'cijena_od_eur',
    'cijena_do_eur',
    'posebni_oblik_prodaje',
    'naziv_posebnog_oblika_prodaje',
    'sidrena_cijena',
    'sidrena_cijena_od_eur',
    'sidrena_cijena_do_eur',
    'datum_sidrene_cijene',
    'napomena',
];

const redovi = CJENIK.flatMap((k) =>
    k.stavke.map((s) => [
        s.naziv,
        k.naziv,
        jedinica(s.jedinica),
        tekst(s.cijena, s.jedinica),
        broj(s.cijena.min),
        s.cijena.max === undefined ? '' : broj(s.cijena.max),
        'NE',
        '',
        tekst(s.sidrena, s.jedinica),
        broj(s.sidrena.min),
        s.sidrena.max === undefined ? '' : broj(s.sidrena.max),
        SIDRENI_DATUM_CSV,
        s.napomena ?? '',
    ]),
);

const sadrzaj = [ZAGLAVLJE, ...redovi].map((r) => r.map(polje).join(';')).join('\r\n') + '\r\n';

mkdirSync(DIR, { recursive: true });
const postojece = readdirSync(DIR).filter((f) => f.startsWith(PREFIKS) && f.endsWith('.csv')).sort();

// Isti sadržaj kao zadnja objava = nema promjene cijene, nema nove datoteke.
const zadnja = postojece.at(-1);
if (zadnja && readFileSync(join(DIR, zadnja), 'utf8').replace(/^﻿/, '') === sadrzaj && !process.argv.includes('--force')) {
    console.log(`Nema promjene cijena, zadnji cjenik ostaje: public/cjenik/${zadnja}`);
    process.exit(0);
}

const sada = new Intl.DateTimeFormat('hr-HR', {
    timeZone: 'Europe/Zagreb',
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23',
}).formatToParts(new Date());
const d = Object.fromEntries(sada.map((p) => [p.type, p.value]));
const brojPohrane = String(postojece.length + 1).padStart(3, '0');
const naziv = `${PREFIKS}_${brojPohrane}_${d.day}.${d.month}.${d.year}_${d.hour}-${d.minute}.csv`;

// BOM da Excel ispravno prikaže č, ć, š, ž kad inspektor otvori datoteku.
writeFileSync(join(DIR, naziv), '﻿' + sadrzaj);
console.log(`Novi cjenik: public/cjenik/${naziv} (${redovi.length} usluga)`);
