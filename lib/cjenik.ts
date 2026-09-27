/**
 * Cjenik usluga, jedini izvor za /cjenik stranicu i CSV datoteku u public/cjenik/.
 *
 * Od 1. 10. 2026. vrijede dvije Vladine odluke (NN 101/2026):
 * - Odluka o isticanju dodatne cijene: uz svaku istaknutu cijenu (web, letci,
 *   oglasi) stoji i cijena koja je vrijedila 10. 9. 2026. ("sidrena"), i onda
 *   kad je jednaka trenutnoj. Na istom mjestu, ne na posebnom cjeniku.
 * - Odluka o objavi cjenika: cjenik se objavljuje na webu kao .csv. Nova
 *   datoteka ide najkasnije do 8:00 na dan promjene cijene, a prethodne ostaju
 *   javno dostupne najmanje 30 dana.
 *
 * Kad se cijena promijeni: mijenja se samo `cijena`, `sidrena` ostaje ista
 * zauvijek (to je stanje na 10. 9. 2026.). Zatim `npm run cjenik` napravi novu
 * CSV datoteku, a istu promjenu treba napraviti i u tekstovima na webu
 * (grep "cijena na 10. 9. 2026." pokazuje sva mjesta).
 *
 * Datoteka namjerno nema importe, čita je i `tools/cjenik-csv.mjs` kroz Node.
 */

export const SIDRENI_DATUM = '10. 9. 2026.';

export type Jedinica = 'm2' | 'usluga' | 'komad';

export type Iznos = {
    min: number;
    /** Gornja granica raspona. Bez nje se cijena ispisuje kao "od X €". */
    max?: number;
};

export type Stavka = {
    naziv: string;
    jedinica: Jedinica;
    cijena: Iznos;
    /** Cijena na dan 10. 9. 2026. Ne mijenja se kad se mijenja `cijena`. */
    sidrena: Iznos;
    napomena?: string;
};

export type Kategorija = {
    naziv: string;
    stavke: Stavka[];
};

const isto = (min: number, max?: number): Pick<Stavka, 'cijena' | 'sidrena'> => ({
    cijena: { min, max },
    sidrena: { min, max },
});

export const CJENIK: Kategorija[] = [
    {
        naziv: 'Vanjske površine (cijena po m²)',
        stavke: [
            { naziv: 'Pranje fasade (žbuka, ETICS i stiropor)', jedinica: 'm2', ...isto(5, 7), napomena: 'konačna cijena ovisi o zaprljanosti, visini objekta i pristupu' },
            { naziv: 'Pranje okućnice i dvorišta', jedinica: 'm2', ...isto(4, 6), napomena: 'površine do 50 m²: od 200 €' },
            { naziv: 'Pranje terase', jedinica: 'm2', ...isto(4, 6), napomena: 'površine do 50 m²: od 200 €' },
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
            { naziv: 'Čišćenje dvostrukog groba ili grobnice', jedinica: 'usluga', ...isto(300) },
            { naziv: 'Poliranje kamena', jedinica: 'usluga', ...isto(150), napomena: 'uz čišćenje' },
            { naziv: 'Impregnacija kamena', jedinica: 'usluga', ...isto(50), napomena: 'uz čišćenje' },
            { naziv: 'Čišćenje, poliranje i impregnacija (komplet)', jedinica: 'usluga', ...isto(400) },
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
    return iznos.max === undefined
        ? `od ${broj(iznos.min)}${po}`
        : `${broj(iznos.min)}–${broj(iznos.max)}${po}`;
}
