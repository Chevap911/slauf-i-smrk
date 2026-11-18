import type { Metadata } from 'next';
import Link from 'next/link';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

// 16.11.2026.: lokalni dio opisuje samo stvarne poslove. Gdje posla iz grada nema, tekst to
// kaže i vodi na najbliži dokumentirani posao. Ništa se ne izmišlja.
export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Sesvete | Šlauf i Šmrk',
    description: 'Pranje fasada, dvorišta, terasa i tlakavaca u Sesvetama, Sesvetskom Kraljevcu, Kašini i okolici. Pošaljite dvije do tri slike i javimo okvirnu cijenu.',
    alternates: { canonical: '/podrucje/sesvete' },
    openGraph: {
        title: 'Pranje fasade i okućnice Sesvete | Šlauf i Šmrk',
        description: 'Fasade, dvorišta, terase i tlakavci u Sesvetama i okolnim naseljima. Okvirna cijena prema slikama.',
        url: 'https://slaufismrk.com/podrucje/sesvete',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Sesvete"
            slug="sesvete"
            intro="Sesvete su pune obiteljskih kuća s fasadama i okućnicama koje godinama skupljaju alge i sivilo. Peremo fasade, dvorišta, terase i tlakavce po Sesvetama i okolnim naseljima, od Kašine do Sesvetskog Kraljevca."
            neighborhoods={['Sesvetski Kraljevec', 'Sesvetska Sela', 'Kašina', 'Soblinec', 'Đurđekovec', 'Novi Jelkovec', 'Dumovec', 'Dugo Selo (okolica)']}
            localSection={
                <>
                    <h2>Najbliži posao s fotografijama: Dugo Selo</h2>
                    <p>
                        Posao iz Sesveta s fotografijama prije i poslije još nemamo na webu. Najbliži je desetak
                        kilometara istočno: u lipnju 2026. oprali smo ogradni zid od kulira u Dugom Selu.
                        Pogledajte <Link href="/podrucje/dugo-selo">pranje ogradnog zida u Dugom Selu</Link>.
                    </p>
                    <p>
                        Za kuću u Sesvetama pošaljite dvije do tri slike fasade ili dvorišta na WhatsApp. Okvirnu
                        cijenu javimo prema slikama, a točnu nakon što vidimo površinu.
                    </p>
                </>
            }
        />
    );
}
