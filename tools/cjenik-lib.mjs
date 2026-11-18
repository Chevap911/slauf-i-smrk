// Zajednički dio za cjenik-csv.mjs (generira) i cjenik-check.mjs (gate).
// Uzor: GT Salon (05 Web i dizajn/BudemAI/Clients/GT-salon/web-repo/tools/cjenik-lib.mjs).
//
// Pravilnik o načinu objave cjenika, NN 132/2026-1584 (na snazi od 17. 11. 2026.):
//   čl. 3 st. 3-4: stupci za usluge redom: naziv usluge; maloprodajna cijena i
//                  podatak o posebnom obliku prodaje; bazna cijena
//   čl. 3 st. 5:   izmijenjen cjenik objavljen najkasnije do 11:00 na dan izmjene
//   čl. 3 st. 6:   prethodni cjenik dostupan 15 dana nakon zamjene
//   čl. 6 st. 2:   izmijenjena datoteka na istom mjestu i URL-u (/cjenik.csv)
//   čl. 6 st. 3:   naziv: matični broj (obrt) ili OIB (pravna osoba), prodajno
//                  mjesto, adresa i oznaka, roba/usluge, broj pohrane, GGGGMMDD_SSMM
//   čl. 6 st. 6-7: UTF-8, separator ";"
//
// Cijene i podaci o obrtu dolaze samo iz lib/cjenik.ts.
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { CJENIK, TRGOVAC } from '../lib/cjenik.ts';

export { CJENIK, TRGOVAC };
export const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
export const DIR = join(ROOT, 'public', 'cjenik');
export const MANIFEST = join(DIR, 'manifest.json');
export const ID_NEDOSTAJE = 'MATICNI-BROJ-NEDOSTAJE';

export const ZAGLAVLJE = 'Naziv usluge;Maloprodajna cijena (EUR);Posebni oblik prodaje;Bazna cijena (EUR)';

// Naziv usluge mora stajati sam za sebe ("Detailing automobila, vanjsko pranje", ne "Vanjsko pranje").
const PREFIKS_KATEGORIJE = {
    'Kemijsko čišćenje namještaja': 'Kemijsko čišćenje namještaja',
    'Detailing automobila': 'Detailing automobila',
    'Grobna mjesta': 'Grobno mjesto',
};

const eur = (n) => n.toFixed(2).replace('.', ',');

/** Isti smisao kao na webu: "od 5,00", "250,00", "5,00-7,00". */
export function iznos(i) {
    if (i.max === undefined) return `od ${eur(i.min)}`;
    if (i.max === i.min) return eur(i.min);
    return `${eur(i.min)}-${eur(i.max)}`;
}

export function nazivUsluge(kat, s) {
    const prefiks = PREFIKS_KATEGORIJE[kat.naziv];
    const naziv = prefiks && !s.naziv.toLowerCase().includes('grob')
        ? `${prefiks}, ${s.naziv.charAt(0).toLowerCase()}${s.naziv.slice(1)}`
        : s.naziv;
    return s.jedinica === 'm2' ? `${naziv} (po m2)` : naziv;
}

export function redovi() {
    const out = [];
    for (const kat of CJENIK) {
        for (const s of kat.stavke) {
            out.push([nazivUsluge(kat, s), iznos(s.cijena), 'NE', iznos(s.sidrena)]);
            // Najniži iznos narudžbe je i sam istaknuta cijena ("površine do 50 m²: od 200 €").
            if (s.minimum) {
                out.push([
                    `${nazivUsluge(kat, { ...s, jedinica: 'usluga' })}, najniži iznos narudžbe`,
                    iznos({ min: s.minimum.cijena }),
                    'NE',
                    iznos({ min: s.minimum.sidrena }),
                ]);
            }
        }
    }
    return out.map((r) => r.map((v) => String(v).replace(/[;\r\n]+/g, ', ')));
}

export function buildCsv() {
    const lines = [ZAGLAVLJE, ...redovi().map((r) => r.join(';'))];
    // BOM da Excel ispravno prikaže č, ć, š, ž kad inspektor otvori datoteku. I dalje je UTF-8.
    return '﻿' + lines.join('\r\n') + '\r\n';
}

export function maticniBroj() {
    return String(TRGOVAC.maticniBroj ?? '').trim();
}

export function filePrefix() {
    const id = maticniBroj() || ID_NEDOSTAJE;
    return `${id}_${TRGOVAC.prodajnoMjesto}_${TRGOVAC.adresa}_${TRGOVAC.oznaka}_usluge`;
}

const zagreb = (d) =>
    Object.fromEntries(
        new Intl.DateTimeFormat('en-GB', {
            timeZone: 'Europe/Zagreb', year: 'numeric', month: '2-digit', day: '2-digit',
            hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
        }).formatToParts(d).map((x) => [x.type, x.value]),
    );

/** GGGGMMDD_SSMM po zagrebačkom vremenu. */
export function stamp(d = new Date()) {
    const p = zagreb(d);
    return `${p.year}${p.month}${p.day}_${p.hour}${p.minute}`;
}

/** "2026-11-18T09:30" po zagrebačkom vremenu, za manifest i stranicu /cjenik. */
export function lokalno(d = new Date()) {
    const p = zagreb(d);
    return `${p.year}-${p.month}-${p.day}T${p.hour}:${p.minute}`;
}

export function loadManifest() {
    return existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : null;
}

export function validate() {
    const err = [];
    const mb = maticniBroj();
    if (!mb) err.push('TRGOVAC.maticniBroj u lib/cjenik.ts je prazan (obrt: matični broj obrta iz obrtnice, 8 znamenki)');
    else if (!/^\d{8}$/.test(mb)) err.push(`matični broj "${mb}" nema 8 znamenki`);
    for (const k of ['prodajnoMjesto', 'adresa', 'oznaka']) {
        if (!TRGOVAC[k] || /[\s/\\;:]/.test(TRGOVAC[k])) err.push(`TRGOVAC.${k} je prazan ili ima razmak ili znak koji ne ide u naziv datoteke`);
    }
    for (const kat of CJENIK) {
        for (const s of kat.stavke) {
            if (!(s.cijena?.min > 0)) err.push(`${kat.naziv} / ${s.naziv}: nema cijene`);
            if (!(s.sidrena?.min > 0)) err.push(`${kat.naziv} / ${s.naziv}: nema bazne cijene (10. 9. 2026.)`);
            if (s.minimum && !(s.minimum.sidrena > 0)) err.push(`${kat.naziv} / ${s.naziv}: minimum nema baznu cijenu`);
        }
    }
    return err;
}
