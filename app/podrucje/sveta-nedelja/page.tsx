import type { Metadata } from 'next';
import AreaPage from '@/components/AreaPage/AreaPage';

export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Sveta Nedelja | Šlauf i Šmrk',
    description: 'Visokotlačno pranje fasada, okućnica, terasa i tlakavaca u Svetoj Nedelji i okolici. Besplatna procjena, jasna cijena prije rada i rezultat prije/poslije.',
    alternates: { canonical: '/podrucje/sveta-nedelja' },
    openGraph: {
        title: 'Pranje fasade i okućnice Sveta Nedelja | Šlauf i Šmrk',
        description: 'Visokotlačno čišćenje fasada, okućnica i terasa u Svetoj Nedelji i okolici.',
        url: 'https://slaufismrk.com/podrucje/sveta-nedelja',
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Sveta Nedelja"
            slug="sveta-nedelja"
            intro="U Svetoj Nedelji i okolnim naseljima peremo fasade, okućnice, terase i prilaze. Skidamo alge, mahovinu i sivilo koje se nakupi kroz sezone, uz dolazak na besplatnu procjenu."
            neighborhoods={['Rakitje', 'Strmec', 'Bestovje', 'Novaki', 'Kerestinec', 'Brezje', 'Srebrnjak', 'Jagnjić Dol']}
        />
    );
}
