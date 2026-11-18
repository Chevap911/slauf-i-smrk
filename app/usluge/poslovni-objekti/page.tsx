import type { Metadata } from 'next';
import Link from 'next/link';
import { Building2, Moon, Flame, FileText, ClipboardList, Bus, ParkingSquare, Store, Home, ShieldCheck } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { OG_IMAGE } from '@/lib/seo';

// 16.11.2026.: jedna B2B stranica. Bivša /usluge/komercijalno-ciscenje preusmjerava ovamo
// (next.config.ts). Ponuda je po odluci od 10.11.2026.: pranje vanjskih površina vrućom vodom
// (podovi, fasade, zidovi, stepeništa). Tvrdnje samo iz stvarnih poslova i opreme.
export const metadata: Metadata = {
    title: 'Pranje vanjskih površina vrućom vodom, Zagreb i okolica',
    description: 'Za tvrtke i ustanove peremo podove, fasade, zidove i stepeništa vrućom vodom, noću, bez zatvaranja prostora. Referenca: autobusni kolodvor Samobor.',
    alternates: { canonical: '/usluge/poslovni-objekti' },
    openGraph: {
        title: 'Pranje vanjskih površina vrućom vodom | Šlauf i Šmrk',
        description: 'Podovi, fasade, zidovi i stepeništa za tvrtke i ustanove u Zagrebu i okolici. Radimo noću. Referenca: autobusni kolodvor Samobor.',
        url: 'https://slaufismrk.com/usluge/poslovni-objekti',
        images: [OG_IMAGE],
    },
};

export default function PoslovniObjektiPage() {
    return (
        <ServicePage
            title="Pranje vanjskih površina vrućom vodom u Zagrebu i okolici"
            titleHighlight="vrućom vodom"
            quoteService="b2b_commercial"
            quoteTitle="Pošaljite podatke o prostoru"
            canonicalPath="/usluge/poslovni-objekti"
            description="Tvrtkama i ustanovama peremo podove, fasade, zidove i stepeništa. Stroj do 500 bara, voda do 130 °C i rotacijski čistač skidaju ulje, žvakaće i nagaženu prljavštinu s kamena i betona. Dolazimo noću ili kad je prostor zatvoren, pa ga zbog nas ne trebate zatvarati."
            priceHint="po ponudi nakon procjene"
            heroHighlights={['Rad noću', 'Vruća voda do 130 °C', 'Račun za tvrtke i ustanove']}
            heroImage="/projekti/samobor/kolodvor-samobor-opran-pod.webp"
            heroImageAlt="Opran pod autobusnog kolodvora u Samoboru nakon noćnog pranja vrućom vodom"
            processSteps={[
                {
                    title: 'Obilazak i probni dio',
                    description: 'Dođemo na lokaciju i operemo komad površine. Rezultat vidite na svom kamenu ili betonu prije nego što išta potpišete.',
                },
                {
                    title: 'Ponuda i plan rada',
                    description: 'Ponuda je jedna, s opsegom, terminima i brojem noći. Plan dogovaramo s osobom koja upravlja prostorom.',
                },
                {
                    title: 'Rad izvan radnog vremena',
                    description: 'Peremo noću ili kad je prostor zatvoren, dio po dio. Mokri dio ogradimo trakom da nitko ne hoda po njemu.',
                },
                {
                    title: 'Fotografije i račun',
                    description: 'Nakon posla šaljemo fotografije prije i poslije za vašu evidenciju te račun za tvrtku ili ustanovu.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Kome je namijenjeno pranje vrućom vodom</h2>
                    <p>
                        Komunalnim poduzećima, gradovima i općinama, upraviteljima trgovačkih centara i garaža,
                        autobusnim kolodvorima, tržnicama i lokalima. Zajedničko im je da kroz prostor svaki dan prođe
                        puno ljudi, a zatvoriti ga se ne može.
                    </p>

                    <h2>Što peremo: podovi, fasade, zidovi i stepeništa</h2>
                    <ul>
                        <li><strong>Podovi:</strong> peroni i čekaonice, trgovi, ulazi u zgrade, garaže i parkirališta.</li>
                        <li><strong>Fasade i zidovi:</strong> crni tragovi od ispušnih plinova, alge i zelene naslage, potporni zidovi uz parkirališta.</li>
                        <li><strong>Stepeništa:</strong> vanjske stepenice i rampe, gdje se prljavština nagazi u rubove i fuge.</li>
                        <li><strong>Terase lokala:</strong> masnoća i mrlje od pića na kamenu i betonu ispred ugostiteljskih objekata.</li>
                    </ul>
                    <p>
                        Hladna voda prljavštinu razmaže, vruća je otopi. Zato se ulje, masnoća i žvakaće skidaju vodom
                        zagrijanom do 130 °C. Stare, duboko upijene mrlje od ulja posvijetle, ali ne obećavamo da će
                        nestati bez traga. Što se može skinuti, pokaže probni dio. Više o tome piše u vodiču{' '}
                        <Link href="/blog/pranje-vrucom-vodom-ulje-zvakace">pranje vrućom vodom: ulje i žvakaće</Link>.
                    </p>

                    <h2>Kako je izgledao posao na autobusnom kolodvoru u Samoboru</h2>
                    <p>
                        Svijetle podne ploče pod nadstrešnicom, gdje ljudi čekaju autobus, potamnjele su od godina
                        prometa. U rujnu smo došli na probu i oprali dio poda uz klupu. Nakon toga je dogovoren cijeli pod.
                    </p>
                    <p>
                        Glavni posao radili smo u listopadu, kroz nekoliko noći, dok je promet bio najmanji. Otvoreni pod
                        prošli smo rotacijskim čistačem i vrućom vodom, a rubove uz stupove i klupe ručnom mlaznicom. Mokri
                        dio bio je ograđen trakom, a kolodvor je cijelo vrijeme radio.
                    </p>
                    <figure style={{ margin: '1.5rem auto', maxWidth: '360px' }}>
                        <video
                            controls
                            preload="none"
                            playsInline
                            muted
                            poster="/video/kolodvor-samobor-pranje-vrucom-vodom-poster.webp"
                            width={720}
                            height={1280}
                            style={{ width: '100%', height: 'auto', borderRadius: '1rem', display: 'block', background: '#0b1b2b' }}
                            aria-label="Video: pranje poda autobusnog kolodvora u Samoboru rotacijskim čistačem i vrućom vodom"
                        >
                            <source src="/video/kolodvor-samobor-pranje-vrucom-vodom.mp4" type="video/mp4" />
                        </video>
                        <figcaption style={{ marginTop: '0.6rem', fontSize: '0.9rem', lineHeight: 1.5, textAlign: 'center', opacity: 0.8 }}>
                            Samobor, listopad 2026. Ivan rotacijskim čistačem pere pod kolodvora noću. Video traje 12 sekundi.
                        </figcaption>
                    </figure>
                    <p>
                        Fotografije istog poda prije i poslije, granica opranog i neopranog dijela i stroj na prikolici
                        nalaze se u odrađenim poslovima na vrhu ove stranice.
                    </p>

                    <h2>Zašto radimo noću</h2>
                    <p>
                        Danju po kolodvoru, trgu ili garaži hodaju ljudi i voze vozila. Noću je prostor prazan, pa pod
                        operemo u komadu i do jutra se osuši. Vi ne zatvarate ulaz, ne postavljate obilazak i ne
                        objašnjavate korisnicima zašto ne mogu proći.
                    </p>

                    <h2>Grafiti na fasadi ili zidu</h2>
                    <p>
                        Grafiti traže drugačiji postupak nego prljavština, a rezultat ovisi o podlozi i boji. Kako to
                        ide na žbuci, kamenu i betonu, piše u vodiču{' '}
                        <Link href="/blog/uklanjanje-grafita-zagreb">uklanjanje grafita u Zagrebu</Link>. Za fasadu
                        obiteljske kuće pogledajte <Link href="/usluge/pranje-fasade">pranje fasade</Link>.
                    </p>
                </>
            }
            features={[
                {
                    icon: <ClipboardList size={24} />,
                    title: 'Rotacijski čistač',
                    description: 'Pere pod ravnomjerno, bez pruga, i ne prska okolo. Zato možemo raditi uz izloge, klupe i ulaze.',
                },
                {
                    icon: <Flame size={24} />,
                    title: 'Voda do 130 °C',
                    description: 'Stroj do 500 bara s grijačem vode. Vruća voda otapa ulje, masnoću i žvakaće koje hladna samo razmaže.',
                },
                {
                    icon: <Moon size={24} />,
                    title: 'Rad noću',
                    description: 'Dolazimo kad je promet najmanji ili kad je prostor zatvoren. Ujutro je pod suh i prohodan.',
                },
                {
                    icon: <FileText size={24} />,
                    title: 'Račun i fotografije',
                    description: 'Izdajemo račun za tvrtke i ustanove i šaljemo fotografije prije i poslije za vašu evidenciju.',
                },
            ]}
            commonProblems={[
                {
                    icon: <Bus size={32} />,
                    title: 'Kolodvori i stajališta',
                    description: 'Pod na peronima i u čekaonicama potamni od prometa, a oko klupa ostaju žvakaće i mrlje od pića.',
                },
                {
                    icon: <ParkingSquare size={32} />,
                    title: 'Garaže i parkirališta',
                    description: 'Mrlje od ulja na parkirnim mjestima i crni tragovi guma na rampama.',
                },
                {
                    icon: <Store size={32} />,
                    title: 'Trgovi i tržnice',
                    description: 'Kamen i beton po kojem se svaki dan hoda, jede i prolijeva.',
                },
                {
                    icon: <Building2 size={32} />,
                    title: 'Ulazi, zidovi i stepeništa',
                    description: 'Prvo što posjetitelj vidi: potamnjele stepenice, zeleni zid i fasada sa crnim tragovima.',
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta pranje vanjskih površina vrućom vodom?',
                    answer: 'Ovisi o površini, materijalu, zaprljanosti i broju noći. Ponudu dajemo nakon obilaska i probnog dijela, jednu, s opsegom i terminima.',
                },
                {
                    question: 'Možete li raditi dok je prostor otvoren?',
                    answer: 'Da, dio po dio. Mokri dio ogradimo trakom, a rotacijski čistač ne prska. Kolodvor u Samoboru radio je cijelo vrijeme dok smo prali pod.',
                },
                {
                    question: 'Treba li nam struja ili voda na lokaciji?',
                    answer: 'Voda nam treba, priključak ili hidrant po dogovoru s vama. Stroj, crijeva i grijač vode dovozimo na prikolici.',
                },
                {
                    question: 'Skidate li žvakaće i stare mrlje od ulja?',
                    answer: 'Žvakaće i svježu masnoću vruća voda skida. Stare, duboko upijene mrlje od ulja posvijetle, ali ne obećavamo da nestanu bez traga. Zato prvo operemo probni dio.',
                },
                {
                    question: 'Radite li za komunalna poduzeća i gradove?',
                    answer: 'Da. Autobusni kolodvor u Samoboru je takav posao. Izdajemo račun za tvrtke i ustanove i šaljemo fotografije prije i poslije za vašu evidenciju.',
                },
                {
                    question: 'Radite li i dnevno održavanje, čišćenje ureda i sanitarija?',
                    answer: 'Ne. Strojno peremo tvrde podove i vanjske površine. Dnevno brisanje ureda i sanitarija nije naš posao.',
                },
            ]}
            serviceAreas={['Zagreb', 'Samobor', 'Velika Gorica', 'Zaprešić', 'Sveta Nedelja', 'Dugo Selo', 'Sesvete', 'Jankomir', 'Žitnjak', 'Lučko']}
            relatedServices={[
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <ShieldCheck size={24} /> },
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Building2 size={24} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={24} /> },
            ]}
        />
    );
}
