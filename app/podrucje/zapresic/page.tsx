import type { Metadata } from 'next';
import Link from 'next/link';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

// 16.11.2026.: lokalni dio opisuje samo stvarne poslove. Gdje posla iz grada nema, tekst to
// kaže i vodi na najbliži dokumentirani posao. Ništa se ne izmišlja.
export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Zaprešić | Šlauf i Šmrk',
    description: 'Pranje fasada, okućnica, terasa i prilaza u Zaprešiću, Brdovcu, Bistri i Pojatnom. Pošaljite slike površine na WhatsApp i javimo okvirnu cijenu.',
    alternates: { canonical: '/podrucje/zapresic' },
    openGraph: {
        title: 'Pranje fasade i okućnice Zaprešić | Šlauf i Šmrk',
        description: 'Fasade, okućnice, terase i prilazi u Zaprešiću i okolnim mjestima. Okvirna cijena prema slikama.',
        url: 'https://slaufismrk.com/podrucje/zapresic',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Zaprešić"
            slug="zapresic"
            intro="U Zaprešiću i mjestima uz Savu i Krapinu peremo fasade, okućnice, terase i prilaze. Dolazimo i u Brdovec, Bistru i Pojatno."
            neighborhoods={['Bistra', 'Brdovec', 'Pojatno', 'Šibice', 'Lužnica', 'Marija Gorica', 'Kupljenovo', 'Jablanovec']}
            localSection={
                <>
                    <h2>Poslovi iz Zaprešića još nisu na webu</h2>
                    <p>
                        Posao iz Zaprešića s fotografijama prije i poslije još nemamo na webu, pa ga ovdje ne
                        prikazujemo. Fasade, zidove, terase i podove koje smo oprali u Zagrebu, Samoboru i Dugom
                        Selu možete vidjeti u <Link href="/galerija">galeriji odrađenih poslova</Link>.
                    </p>
                    <p>
                        Za kuću u Zaprešiću pošaljite dvije do tri slike fasade ili dvorišta na WhatsApp. Okvirnu
                        cijenu javimo prema slikama, a točnu nakon što vidimo površinu.
                    </p>
                </>
            }
        />
    );
}
