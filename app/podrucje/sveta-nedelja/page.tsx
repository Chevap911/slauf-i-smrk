import type { Metadata } from 'next';
import Link from 'next/link';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

// 16.11.2026.: lokalni dio opisuje samo stvarne poslove. Gdje posla iz grada nema, tekst to
// kaže i vodi na najbliži dokumentirani posao. Ništa se ne izmišlja.
export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Sveta Nedelja | Šlauf i Šmrk',
    description: 'Pranje fasada, okućnica, terasa i prilaza u Svetoj Nedelji, Rakitju, Strmcu i Novakima. Za tvrtke pranje vrućom vodom noću. Okvirna cijena prema slikama.',
    alternates: { canonical: '/podrucje/sveta-nedelja' },
    openGraph: {
        title: 'Pranje fasade i okućnice Sveta Nedelja | Šlauf i Šmrk',
        description: 'Fasade, okućnice, terase i prilazi u Svetoj Nedelji i okolici. Za tvrtke pranje vrućom vodom noću.',
        url: 'https://slaufismrk.com/podrucje/sveta-nedelja',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Sveta Nedelja"
            slug="sveta-nedelja"
            intro="U Svetoj Nedelji peremo fasade, okućnice, terase i prilaze kuća, od Rakitja do Strmca. Tvrtkama u poslovnim zonama peremo podove, zidove i stepeništa vrućom vodom, noću."
            neighborhoods={['Rakitje', 'Strmec', 'Bestovje', 'Novaki', 'Kerestinec', 'Brezje', 'Srebrnjak', 'Jagnjić Dol']}
            localSection={
                <>
                    <h2>Najbliži posao s fotografijama: kolodvor u Samoboru</h2>
                    <p>
                        Posao iz Svete Nedelje s fotografijama prije i poslije još nemamo na webu. Najbliži je
                        nekoliko kilometara zapadno: u listopadu 2026. oprali smo pod autobusnog kolodvora u
                        Samoboru, noću, rotacijskim čistačem i vrućom vodom. Fotografije i video su na stranici{' '}
                        <Link href="/podrucje/samobor">pranje poda kolodvora u Samoboru</Link>.
                    </p>
                    <p>
                        Za tvrtke i ustanove u Svetoj Nedelji vrijedi isti postupak: obilazak, probni dio, pa
                        ponuda. Više na stranici{' '}
                        <Link href="/usluge/poslovni-objekti">pranje vanjskih površina vrućom vodom</Link>.
                    </p>
                </>
            }
        />
    );
}
