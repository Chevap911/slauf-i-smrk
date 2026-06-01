import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage/AreaPage';

export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Velika Gorica | Šlauf i Šmrk',
    description: 'Visokotlačno pranje fasada, okućnica, terasa i tlakavaca u Velikoj Gorici i Turopolju. Besplatna procjena, jasna cijena prije rada i rezultat prije/poslije.',
    alternates: { canonical: '/podrucje/velika-gorica' },
    openGraph: {
        title: 'Pranje fasade i okućnice Velika Gorica | Šlauf i Šmrk',
        description: 'Visokotlačno čišćenje fasada, okućnica i terasa u Velikoj Gorici i okolici.',
        url: 'https://slaufismrk.com/podrucje/velika-gorica',
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Velika Gorica"
            slug="velika-gorica"
            intro="U Velikoj Gorici i Turopolju dominiraju kuće s velikim dvorištima, prilazima i tlakavcima. Peremo fasade, dvorišta i terase po cijelom gradu i okolnim mjestima, s dolaskom na besplatnu procjenu."
            neighborhoods={['Kurilovec', 'Pleso', 'Lukavec', 'Mraclin', 'Velika Mlaka', 'Buševec', 'Šćitarjevo', 'Turopolje']}
        />
    );
}
