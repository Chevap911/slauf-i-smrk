// Članci s bloga uz svaku uslugu (audit 10/2026: mnogi članci imali su samo 1 do 3
// stranice koje linkaju na njih). Samo postojeći članci; novi slug prvo mora imati
// svoju stranicu u app/blog/.

export interface ServiceGuide {
    title: string;
    href: string;
}

// Naslovi su skraćeni H1 članka
const GUIDES = {
    'koliko-kosta-pranje-fasade': 'Koliko košta pranje fasade po m²',
    'ciscenje-fasade-od-algi-i-gljivica': 'Čišćenje fasade od algi i gljivica',
    'pranje-fasade-stiropor-etics': 'Pranje fasade od stiropora (ETICS)',
    'crne-fleke-na-fasadi': 'Crne fleke na fasadi: kuća na Jarunu',
    'koliko-kosta-pranje-okucnice-tlakavaca-zagreb': 'Koliko košta pranje okućnice i tlakavaca',
    'korov-izmedju-tlakavaca': 'Korov između tlakavaca: dvorište u Velikoj Gorici',
    'pranje-vrucom-vodom-ulje-zvakace': 'Ulje i žvakaće s betona: pranje vrućom vodom',
    'koliko-kosta-pranje-terase-zagreb': 'Koliko košta pranje terase u Zagrebu',
    'ciscenje-terasa-zagreb': 'Alge, mahovina i crne naslage na terasi',
    'obnova-kamene-terase-bez-zamjene-ploca': 'Kamena terasa iz 80-ih: čišćenje umjesto zamjene ploča',
    'salitra-i-kamenac-na-kamenoj-fasadi': 'Salitra i kamenac na kamenoj fasadi',
    'ciscenje-drvene-terase': 'Drvena terasa: pranje ili brušenje i koliko košta',
    'koliko-kosta-ciscenje-grobnog-mjesta': 'Koliko košta čišćenje grobnog mjesta',
    'koliko-kosta-kemijsko-ciscenje-namjestaja': 'Koliko košta kemijsko čišćenje namještaja',
    'uklanjanje-grafita-zagreb': 'Uklanjanje grafita u Zagrebu',
} as const;

type GuideSlug = keyof typeof GUIDES;

const guides = (...slugs: GuideSlug[]): ServiceGuide[] =>
    slugs.map((slug) => ({ title: GUIDES[slug], href: `/blog/${slug}` }));

// Ključ je canonicalPath stranice usluge
export const SERVICE_GUIDES: Record<string, ServiceGuide[]> = {
    '/usluge/pranje-fasade': guides(
        'koliko-kosta-pranje-fasade',
        'ciscenje-fasade-od-algi-i-gljivica',
        'pranje-fasade-stiropor-etics',
        'crne-fleke-na-fasadi',
    ),
    '/usluge/pranje-okucnice': guides(
        'koliko-kosta-pranje-okucnice-tlakavaca-zagreb',
        'korov-izmedju-tlakavaca',
        'pranje-vrucom-vodom-ulje-zvakace',
    ),
    '/usluge/pranje-terasa': guides(
        'koliko-kosta-pranje-terase-zagreb',
        'ciscenje-terasa-zagreb',
        'obnova-kamene-terase-bez-zamjene-ploca',
    ),
    '/usluge/pranje-tlakavaca': guides(
        'korov-izmedju-tlakavaca',
        'koliko-kosta-pranje-okucnice-tlakavaca-zagreb',
        'pranje-vrucom-vodom-ulje-zvakace',
    ),
    '/usluge/pranje-prilaza': guides(
        'pranje-vrucom-vodom-ulje-zvakace',
        'koliko-kosta-pranje-okucnice-tlakavaca-zagreb',
    ),
    '/usluge/ciscenje-kamenih-povrsina': guides(
        'obnova-kamene-terase-bez-zamjene-ploca',
        'salitra-i-kamenac-na-kamenoj-fasadi',
    ),
    '/usluge/ciscenje-drvenih-povrsina': guides('ciscenje-drvene-terase'),
    '/usluge/odrzavanje-grobnih-mjesta': guides('koliko-kosta-ciscenje-grobnog-mjesta'),
    '/usluge/kemijsko-ciscenje-namjestaja': guides('koliko-kosta-kemijsko-ciscenje-namjestaja'),
    '/usluge/poslovni-objekti': guides(
        'uklanjanje-grafita-zagreb',
        'pranje-vrucom-vodom-ulje-zvakace',
    ),
};
