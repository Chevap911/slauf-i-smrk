import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Sesvete | Šlauf i Šmrk',
    description: 'Visokotlačno pranje fasada, okućnica, terasa i tlakavaca u Sesvetama i okolnim naseljima. Besplatna procjena, jasna cijena prije rada i rezultat prije/poslije.',
    alternates: { canonical: '/podrucje/sesvete' },
    openGraph: {
        title: 'Pranje fasade i okućnice Sesvete | Šlauf i Šmrk',
        description: 'Visokotlačno čišćenje fasada, okućnica i terasa u Sesvetama i okolici.',
        url: 'https://slaufismrk.com/podrucje/sesvete',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Sesvete"
            slug="sesvete"
            intro="Sesvete su pune obiteljskih kuća s fasadama i okućnicama koje godinama skupljaju alge i sivilo. Peremo fasade, dvorišta, terase i tlakavce po Sesvetama i okolnim naseljima, s dolaskom na besplatnu procjenu."
            neighborhoods={['Sesvetski Kraljevec', 'Sesvetska Sela', 'Kašina', 'Soblinec', 'Đurđekovec', 'Novi Jelkovec', 'Dumovec', 'Dugo Selo (okolica)']}
        />
    );
}
