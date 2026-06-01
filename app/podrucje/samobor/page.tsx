import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage/AreaPage';

export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Samobor | Šlauf i Šmrk',
    description: 'Visokotlačno pranje fasada, okućnica i terasa u Samoboru i okolici. Brežuljkast i vlažan teren znači više algi na fasadama, mi ih skidamo. Besplatna procjena prije rada.',
    alternates: { canonical: '/podrucje/samobor' },
    openGraph: {
        title: 'Pranje fasade i okućnice Samobor | Šlauf i Šmrk',
        description: 'Visokotlačno čišćenje fasada, okućnica i terasa u Samoboru i okolici.',
        url: 'https://slaufismrk.com/podrucje/samobor',
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
