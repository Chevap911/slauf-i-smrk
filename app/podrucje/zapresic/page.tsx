import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Zaprešić | Šlauf i Šmrk',
    description: 'Visokotlačno pranje fasada, okućnica, terasa i tlakavaca u Zaprešiću i okolici. Besplatna procjena, jasna cijena prije rada i rezultat prije/poslije.',
    alternates: { canonical: '/podrucje/zapresic' },
    openGraph: {
        title: 'Pranje fasade i okućnice Zaprešić | Šlauf i Šmrk',
        description: 'Visokotlačno čišćenje fasada, okućnica i terasa u Zaprešiću i okolici.',
        url: 'https://slaufismrk.com/podrucje/zapresic',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Zaprešić"
            slug="zapresic"
            intro="U Zaprešiću i naseljima uz Savu peremo fasade, okućnice, terase i prilaze. Skidamo alge, sivilo i naslage koje se nakupe kroz sezone, uz dolazak na besplatnu procjenu."
            neighborhoods={['Bistra', 'Brdovec', 'Pojatno', 'Šibice', 'Lužnica', 'Marija Gorica', 'Kupljenovo', 'Jablanovec']}
        />
    );
}
