export const GUIDES = [
    { title: 'Koliko košta pranje fasade', href: '/blog/koliko-kosta-pranje-fasade' },
    { title: 'Kako oprati fasadu, vodič', href: '/blog/kako-oprati-fasadu' },
    { title: 'Crne fleke na fasadi', href: '/blog/crne-fleke-na-fasadi' },
    { title: 'Korov između tlakavaca', href: '/blog/korov-izmedju-tlakavaca' },
];

export const ALL_AREAS = [
    { city: 'Zagreb', slug: 'zagreb' },
    { city: 'Sesvete', slug: 'sesvete' },
    { city: 'Velika Gorica', slug: 'velika-gorica' },
    { city: 'Samobor', slug: 'samobor' },
    { city: 'Zaprešić', slug: 'zapresic' },
    { city: 'Sveta Nedelja', slug: 'sveta-nedelja' },
    { city: 'Dugo Selo', slug: 'dugo-selo' },
];

// Hrvatski deklinira grad po padežu, "u {grad}" treba lokativ, "oko {grad}" treba genitiv.
// Nominativ (city prop) ne radi iza tih prijedloga, zato eksplicitna mapa za svih 7 gradova.
export const CITY_LOCATIVE: Record<string, string> = {
    'Zagreb': 'Zagrebu',
    'Sesvete': 'Sesvetama',
    'Velika Gorica': 'Velikoj Gorici',
    'Samobor': 'Samoboru',
    'Zaprešić': 'Zaprešiću',
    'Sveta Nedelja': 'Svetoj Nedelji',
    'Dugo Selo': 'Dugom Selu',
};

export const CITY_GENITIVE: Record<string, string> = {
    'Zagreb': 'Zagreba',
    'Sesvete': 'Sesveta',
    'Velika Gorica': 'Velike Gorice',
    'Samobor': 'Samobora',
    'Zaprešić': 'Zaprešića',
    'Sveta Nedelja': 'Svete Nedelje',
    'Dugo Selo': 'Dugog Sela',
};
