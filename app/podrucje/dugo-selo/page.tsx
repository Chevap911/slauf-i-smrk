import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Dugo Selo | Šlauf i Šmrk',
    description: 'Visokotlačno pranje fasada, okućnica, terasa i tlakavaca u Dugom Selu i okolici. Besplatna procjena, jasna cijena prije rada i rezultat prije/poslije.',
    alternates: { canonical: '/podrucje/dugo-selo' },
    openGraph: {
        title: 'Pranje fasade i okućnice Dugo Selo | Šlauf i Šmrk',
        description: 'Visokotlačno čišćenje fasada, okućnica i terasa u Dugom Selu i okolici.',
        url: 'https://slaufismrk.com/podrucje/dugo-selo',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Dugo Selo"
            slug="dugo-selo"
            intro="U Dugom Selu i okolnim mjestima peremo fasade, okućnice, terase i tlakavce. Uklanjamo alge, mahovinu i korov iz fuga, s dolaskom na besplatnu procjenu na licu mjesta."
            neighborhoods={['Leprovica', 'Puhovo', 'Lukarišće', 'Donje Dvorišće', 'Prozorje', 'Kozinščak', 'Ostrna', 'Velika Ostrna']}
        />
    );
}
