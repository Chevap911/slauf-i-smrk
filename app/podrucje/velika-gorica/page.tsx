import type { Metadata } from 'next';
import Link from 'next/link';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

// 16.11.2026.: lokalni dio opisuje samo stvarne poslove. Gdje posla iz grada nema, tekst to
// kaže i vodi na najbliži dokumentirani posao. Ništa se ne izmišlja.
export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Velika Gorica | Šlauf i Šmrk',
    description: 'Pranje fasada, dvorišta, prilaza i tlakavaca u Velikoj Gorici i Turopolju: Kurilovec, Pleso, Velika Mlaka, Mraclin. Okvirna cijena prema slikama.',
    alternates: { canonical: '/podrucje/velika-gorica' },
    openGraph: {
        title: 'Pranje fasade i okućnice Velika Gorica | Šlauf i Šmrk',
        description: 'Fasade, dvorišta, prilazi i tlakavci u Velikoj Gorici i Turopolju. Okvirna cijena prema slikama.',
        url: 'https://slaufismrk.com/podrucje/velika-gorica',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Velika Gorica"
            slug="velika-gorica"
            intro="U Velikoj Gorici i Turopolju prevladavaju kuće s velikim dvorištima, prilazima i tlakavcima. Peremo fasade, dvorišta i terase po cijelom gradu i okolnim mjestima, od Velike Mlake do Mraclina."
            neighborhoods={['Kurilovec', 'Pleso', 'Lukavec', 'Mraclin', 'Velika Mlaka', 'Buševec', 'Šćitarjevo', 'Turopolje']}
            localSection={
                <>
                    <h2>Najbliži posao s fotografijama: fasada u Hrašću</h2>
                    <p>
                        Posao iz Velike Gorice s fotografijama prije i poslije još nemamo na webu. Najbliži je
                        fasada kuće u Hrašću, na južnom rubu Zagreba prema Velikoj Gorici. Na obojenoj fasadi
                        vidjeli su se tamni tragovi i naslage, a prali smo je teleskopskom lancom, s tla.
                    </p>
                    <p>
                        Fotografije te fasade prije i poslije su na stranici{' '}
                        <Link href="/usluge/pranje-fasade">pranje fasade: cijena i postupak</Link>. Za kuću u
                        Velikoj Gorici pošaljite dvije do tri slike na WhatsApp i javimo okvirnu cijenu.
                    </p>
                </>
            }
        />
    );
}
