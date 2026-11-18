import type { Metadata } from 'next';
import Link from 'next/link';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

// 16.11.2026.: lokalni dio opisuje samo stvarne poslove. Gdje posla iz grada nema, tekst to
// kaže i vodi na najbliži dokumentirani posao. Ništa se ne izmišlja.
export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Samobor | Šlauf i Šmrk',
    description: 'Pranje fasada, okućnica i terasa u Samoboru i okolici. Referenca: pod autobusnog kolodvora u Samoboru, opran noću vrućom vodom. Pošaljite slike za cijenu.',
    alternates: { canonical: '/podrucje/samobor' },
    openGraph: {
        title: 'Pranje fasade i okućnice Samobor | Šlauf i Šmrk',
        description: 'Fasade, okućnice i terase u Samoboru i okolici. Pogledajte pod autobusnog kolodvora koji smo oprali u listopadu 2026.',
        url: 'https://slaufismrk.com/podrucje/samobor',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Samobor"
            slug="samobor"
            intro="Samobor je brežuljkast i vlažan, pa se na sjevernim stranama fasada brzo hvataju alge i zelene naslage. Peremo fasade, okućnice i terase, a u listopadu 2026. oprali smo i pod autobusnog kolodvora u Samoboru."
            neighborhoods={['Bregana', 'Rakov Potok', 'Sveta Nedelja', 'Galgovo', 'Domaslovec', 'Kerestinec', 'Samoborski Otok', 'Rude']}
            extraFaq={[
                {
                    question: 'Jeste li već radili u Samoboru?',
                    answer: 'Da. U listopadu 2026. oprali smo pod autobusnog kolodvora u Samoboru, noću, rotacijskim čistačem i vrućom vodom. Fotografije i video s tog posla su na ovoj stranici.',
                },
            ]}
            localSection={
                <>
                    <h2>Pranje poda autobusnog kolodvora u Samoboru</h2>
                    <p>
                        Pod ispod nadstrešnice, gdje se čeka autobus, s godinama je potamnio, a oko klupa i
                        stupova ostale su mrlje. U rujnu 2026. oprali smo za probu komad poda uz klupu. Nakon
                        toga je dogovoren cijeli pod.
                    </p>
                    <p>
                        Radili smo noću, kroz nekoliko noći u listopadu, jer je tada na peronima najmanje ljudi.
                        Otvoreni pod išao je rotacijskim čistačem i vrućom vodom, a rubovi uz stupove i klupe
                        ručnom mlaznicom. Dio koji se pere ogradili smo trakom, pa je kolodvor radio cijelo vrijeme.
                    </p>
                    <figure>
                        <video
                            controls
                            preload="none"
                            playsInline
                            muted
                            poster="/video/kolodvor-samobor-pranje-vrucom-vodom-poster.webp"
                            width={720}
                            height={1280}
                            aria-label="Video: pranje poda autobusnog kolodvora u Samoboru rotacijskim čistačem i vrućom vodom"
                        >
                            <source src="/video/kolodvor-samobor-pranje-vrucom-vodom.mp4" type="video/mp4" />
                        </video>
                        <figcaption>
                            Samobor, listopad 2026. Ivan rotacijskim čistačem pere pod kolodvora noću. Video traje 12 sekundi.
                        </figcaption>
                    </figure>
                    <p>
                        Vodite tvrtku ili ustanovu u Samoboru? Kako ide probni dio, ponuda i rad noću, piše na
                        stranici <Link href="/usluge/poslovni-objekti">pranje vanjskih površina vrućom vodom</Link>.
                    </p>
                </>
            }
        />
    );
}
