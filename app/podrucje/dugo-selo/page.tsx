import type { Metadata } from 'next';
import Link from 'next/link';
import AreaPage from '@/components/AreaPage/AreaPage';
import { OG_IMAGE } from '@/lib/seo';

// 16.11.2026.: lokalni dio opisuje samo stvarne poslove. Gdje posla iz grada nema, tekst to
// kaže i vodi na najbliži dokumentirani posao. Ništa se ne izmišlja.
export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Dugo Selo | Šlauf i Šmrk',
    description: 'Pranje fasada, okućnica, terasa i ogradnih zidova u Dugom Selu. Pogledajte ogradni zid koji smo oprali u lipnju 2026. Pošaljite slike i javimo okvirnu cijenu.',
    alternates: { canonical: '/podrucje/dugo-selo' },
    openGraph: {
        title: 'Pranje fasade i okućnice Dugo Selo | Šlauf i Šmrk',
        description: 'Fasade, okućnice, terase i ogradni zidovi u Dugom Selu. Fotografije prije i poslije s posla iz lipnja 2026.',
        url: 'https://slaufismrk.com/podrucje/dugo-selo',
        images: [OG_IMAGE],
    },
};

export default function Page() {
    return (
        <AreaPage
            city="Dugo Selo"
            slug="dugo-selo"
            intro="U Dugom Selu i okolnim mjestima peremo fasade, okućnice, terase, tlakavce i ogradne zidove. U lipnju 2026. ovdje smo oprali ogradni zid od kulira, a fotografije prije i poslije su niže na stranici."
            neighborhoods={['Leprovica', 'Puhovo', 'Lukarišće', 'Donje Dvorišće', 'Prozorje', 'Kozinščak', 'Ostrna', 'Velika Ostrna']}
            extraFaq={[
                {
                    question: 'Jeste li već radili u Dugom Selu?',
                    answer: 'Da. U lipnju 2026. oprali smo ogradni zid od kulira uz ulicu i parkiralište. Fotografije prije i poslije su na ovoj stranici.',
                },
            ]}
            localSection={
                <>
                    <h2>Pranje ogradnog zida u Dugom Selu</h2>
                    <p>
                        Krajem lipnja 2026. oprali smo ogradni zid od kulira uz ulicu i parkirna mjesta. Zid su
                        prekrivale tamne naslage. Prali smo ga dio po dio i svaki dio fotografirali prije i
                        poslije, isti dan. Tri usporedbe su u odrađenim poslovima iznad.
                    </p>
                    <p>
                        Imate sličan zid, ogradu ili potporni zid? Pošaljite dvije do tri slike na WhatsApp i
                        javimo okvirnu cijenu. Kako peremo kulir i kamen, piše na stranici{' '}
                        <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje kamenih površina</Link>.
                    </p>
                </>
            }
        />
    );
}
