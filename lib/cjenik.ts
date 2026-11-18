/**
 * Cjenik usluga, jedini izvor za /cjenik stranicu, kalkulator i CSV datoteku u public/cjenik/.
 *
 * Od 17. 11. 2026. vrijede dva pravilnika (NN 132/2026, zamijenili su NN 101/2026 i 110/2026):
 * - Pravilnik o isticanju bazne cijene (NN 132/2026-1583): uz svaku istaknutu cijenu
 *   (web, letci, oglasi) stoji i cijena koja je vrijedila 10. 9. 2026. ("sidrena",
 *   u pravilniku "bazna"), i onda kad je jednaka trenutnoj. Na istom mjestu.
 * - Pravilnik o načinu objave cjenika (NN 132/2026-1584): cjenik je na webu kao .csv
 *   (UTF-8, separator ";"), uvijek na istom URL-u (/cjenik.csv). Izmijenjen cjenik ide
 *   najkasnije do 11:00 na dan promjene cijene, prethodni ostaje dostupan najmanje
 *   15 dana (kod nas se stare datoteke ne brišu). Naziv datoteke traži TRGOVAC ispod.
 *
 * Javne cijene su početne, "od X" bez gornje granice (Marko, 1. 11. 2026.).
 * Sidrena je raspon koji je stajao na webu 10. 9. 2026. (Marko, 17. 11. 2026.: "Da, vrati sidrene").
 *
 * Kad se cijena promijeni: mijenja se samo `cijena`, `sidrena` ostaje ista
 * zauvijek. Zatim `npm run cjenik` napravi novu CSV datoteku, a istu promjenu
 * treba napraviti i u tekstovima na webu (grep "10. 9. 2026." pokazuje sva mjesta).
 *
 * Datoteka namjerno nema importe, čitaju je `tools/cjenik-csv.mjs` i `tools/cjenik-check.mjs` kroz Node.
 */
export const SIDRENI_DATUM = '10. 9. 2026.';

/**
 * Podaci za naziv CSV datoteke (NN 132/2026-1584, čl. 6 st. 3): matični broj obrta
 * (fizička osoba, ne OIB), vrsta prodajnog mjesta, adresa i oznaka prodajnog mjesta.
 * Bez razmaka, jer idu u naziv datoteke. Prazan matični broj = `npm run cjenik` radi
 * nacrt, a `npm run gate` pada.
 */
export const TRGOVAC = {
    /** Matični broj obrta Šlauf i Šmrk iz obrtnice (8 znamenki). */
    maticniBroj: '99112752',
    prodajnoMjesto: 'servis',
    adresa: 'Primostenska-11-Zagreb',
    oznaka: 'U-01',
};

export type Jedinica = 'm2' | 'usluga' | 'komad';

export type Iznos = {
    min: number;
    /** Gornja granica raspona. Bez nje se cijena ispisuje kao "od X €", a kad je jednaka min, kao fiksna cijena. */
    max?: number;
};

export type Stavka = {
    naziv: string;
    jedinica: Jedinica;
    cijena: Iznos;
    /** Cijena na dan 10. 9. 2026. Ne mijenja se kad se mijenja `cijena`. */
    sidrena: Iznos;
    minimum?: { cijena: number; sidrena: number };
    napomena?: string;
    /** Kad napomena sadrži cijenu ("do 50 m²: od 200 €"), njena cijena na 10. 9. 2026. Ide samo na
     *  stranicu /cjenik, ne u CSV, pa dodavanje ne traži novi CSV. */
    napomenaSidrena?: string;
};

/** Usluga koja se nudi, ali bez istaknute cijene: cijena se daje u ponudi. Nema broja, pa nema ni sidrene, i ne ide u CSV. */
export type PoDogovoru = {
    naziv: string;
    napomena?: string;
};

export type Kategorija = {
    naziv: string;
    stavke: Stavka[];
    poDogovoru?: PoDogovoru[];
};

const isto = (min: number, max?: number): Pick<Stavka, 'cijena' | 'sidrena'> => ({
    cijena: { min },
    sidrena: { min, max },
});

export const CJENIK: Kategorija[] = [
    {
        naziv: 'Vanjske površine (cijena po m²)',
        stavke: [
            { naziv: 'Pranje fasade (žbuka, ETICS i stiropor)', jedinica: 'm2', ...isto(5, 7), napomena: 'konačna cijena ovisi o zaprljanosti, visini objekta i pristupu' },
            { naziv: 'Pranje okućnice i dvorišta', jedinica: 'm2', ...isto(4, 6), minimum: { cijena: 200, sidrena: 200 }, napomena: 'površine do 50 m²: od 200 €', napomenaSidrena: 'od 200 €' },
            { naziv: 'Pranje terase', jedinica: 'm2', ...isto(4, 6), minimum: { cijena: 200, sidrena: 200 }, napomena: 'površine do 50 m²: od 200 €', napomenaSidrena: 'od 200 €' },
            { naziv: 'Pranje tlakavaca', jedinica: 'm2', ...isto(4, 6) },
            { naziv: 'Pranje prilaza', jedinica: 'm2', ...isto(4, 6) },
            { naziv: 'Čišćenje kamenih površina', jedinica: 'm2', ...isto(5, 7) },
            { naziv: 'Čišćenje drvenih površina i drvenih terasa', jedinica: 'm2', ...isto(6, 8) },
            { naziv: 'Fugiranje kvarcnim pijeskom', jedinica: 'm2', ...isto(1.5, 2.5), napomena: 'dodatna stavka uz pranje' },
        ],
    },
    {
        naziv: 'Grobna mjesta',
        stavke: [
            { naziv: 'Čišćenje jednostrukog groba', jedinica: 'usluga', ...isto(250) },
            { naziv: 'Poliranje kamena', jedinica: 'usluga', ...isto(150), napomena: 'uz čišćenje' },
        ],
        // Marko 28. 9. 2026.: ove stavke idu po dogovoru, cijena je u ponudi (CRM). Do tada su na webu
        // bile dvostruki od 300 €, impregnacija 100 € (10. 9.: od 50 €) i komplet od 400 €; stari CSV-ovi to čuvaju.
        poDogovoru: [
            { naziv: 'Čišćenje dvostrukog groba ili grobnice', napomena: 'ovisi o veličini' },
            { naziv: 'Impregnacija groba', napomena: 'uz čišćenje' },
            { naziv: 'Čišćenje, poliranje i impregnacija (komplet)' },
            { naziv: 'Kulir', napomena: 'bijeli ukrasni kamen umjesto zemlje i korova' },
        ],
    },
    {
        naziv: 'Kemijsko čišćenje namještaja',
        stavke: [
            { naziv: 'Kompletna garnitura (3+2+1)', jedinica: 'komad', ...isto(80) },
            { naziv: 'Trosjed', jedinica: 'komad', ...isto(40) },
            { naziv: 'Dvosjed', jedinica: 'komad', ...isto(30) },
            { naziv: 'Fotelja', jedinica: 'komad', ...isto(20) },
            { naziv: 'Madrac (jednostruki)', jedinica: 'komad', ...isto(30) },
            { naziv: 'Madrac (bračni)', jedinica: 'komad', ...isto(40) },
            { naziv: 'Tepih', jedinica: 'm2', ...isto(5) },
        ],
    },
    {
        naziv: 'Detailing automobila',
        stavke: [
            { naziv: 'Vanjsko pranje', jedinica: 'usluga', ...isto(60) },
            { naziv: 'Interijer (basic)', jedinica: 'usluga', ...isto(80) },
            { naziv: 'Kemijsko čišćenje sjedala', jedinica: 'usluga', ...isto(60) },
            { naziv: 'Komplet (unutra i vani)', jedinica: 'usluga', ...isto(130) },
        ],
    },
    {
        naziv: 'Bazeni',
        stavke: [
            { naziv: 'Pranje bazena', jedinica: 'usluga', ...isto(600), napomena: 'konačna cijena ovisi o veličini bazena i obodu' },
        ],
    },
];

const broj = (n: number) =>
    n.toLocaleString('hr-HR', {
        minimumFractionDigits: Number.isInteger(n) ? 0 : 2,
        maximumFractionDigits: 2,
    });

/** "5–7 €/m²", "od 250 €", "1,50–2,50 €/m²" */
export function formatIznos(iznos: Iznos, jedinica: Jedinica): string {
    const po = jedinica === 'm2' ? ' €/m²' : ' €';
    if (iznos.max === undefined) return `od ${broj(iznos.min)}${po}`;
    if (iznos.max === iznos.min) return `${broj(iznos.min)}${po}`;
    return `${broj(iznos.min)}–${broj(iznos.max)}${po}`;
}

/** "Cijena na 10. 9. 2026.: 5–7 €/m²" uz svaku istaknutu cijenu stavke. */
export const sidrenaTekst = (s: Pick<Stavka, 'sidrena' | 'jedinica'>): string =>
    `Cijena na ${SIDRENI_DATUM}: ${formatIznos(s.sidrena, s.jedinica)}`;
