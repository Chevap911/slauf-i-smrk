import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Samobor | Šlauf i Šmrk',
    description: 'Visokotlačno pranje fasada, okućnica i terasa u Samoboru. Vlažan i brežuljkast teren znači više algi, mi ih skidamo. Besplatna procjena.',
    alternates: { canonical: '/podrucje/samobor' },
    openGraph: {
        title: 'Pranje fasade i okućnice Samobor | Šlauf i Šmrk',
        description: 'Visokotlačno čišćenje fasada, okućnica i terasa u Samoboru i okolici.',
        url: 'https://slaufismrk.com/podrucje/samobor',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Samobor"
            slug="samobor"
            intro="Samobor je brežuljkast i vlažan, pa se na sjevernim stranama fasada brzo hvataju alge i zelene naslage. Specijalizirani smo za upravo takve fasade, plus okućnice i terase, s besplatnom procjenom na licu mjesta."
            neighborhoods={['Bregana', 'Rakov Potok', 'Sveta Nedelja', 'Galgovo', 'Domaslovec', 'Kerestinec', 'Samoborski Otok', 'Rude']}
        />
    );
}
