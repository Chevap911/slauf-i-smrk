import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Building2, Moon, Flame, FileText, ClipboardList, Bus, ParkingSquare, Store, Home, TreeDeciduous } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { OG_IMAGE } from '@/lib/seo';

// Landing za velike i javne prostore (kolodvori, trgovi, garaže, tržnice). Referenca je
// autobusni kolodvor u Samoboru, ime smije javno (Marko, 12. 10. 2026.). Cijene se ovdje ne
// pišu: svaka ponuda ide nakon procjene, pa nema ni sidrene cijene (CLAUDE.md pravilo 6).
// Fotke iz Media/Samobor kolodvor, okrenute i spremljene bez EXIF-a (GPS), bez lica i natpisa.

export const metadata: Metadata = {
    title: 'Komercijalno čišćenje velikih i javnih prostora Zagreb',
    description: 'Strojno pranje podova kolodvora, trgova, garaža i parkirališta vrućom vodom i parom. Radimo noću, kad prostor ne radi. Referenca: kolodvor Samobor.',
    alternates: { canonical: '/usluge/komercijalno-ciscenje' },
    openGraph: {
        title: 'Komercijalno čišćenje velikih i javnih prostora | Šlauf i Šmrk',
        description: 'Kolodvori, trgovi, garaže i parkirališta: strojno pranje vrućom vodom i parom, noću. Referenca: autobusni kolodvor u Samoboru.',
        url: 'https://slaufismrk.com/usluge/komercijalno-ciscenje',
        images: [OG_IMAGE],
    },
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://slaufismrk.com/usluge/komercijalno-ciscenje#service',
    name: 'Komercijalno čišćenje velikih i javnih prostora',
    serviceType: 'Strojno pranje javnih i komercijalnih površina',
    description: 'Strojno pranje kamenih, betonskih i asfaltnih površina kolodvora, trgova, garaža, parkirališta i tržnica vrućom vodom i parom, izvan radnog vremena prostora.',
    url: 'https://slaufismrk.com/usluge/komercijalno-ciscenje',
    provider: { '@id': 'https://slaufismrk.com/#business' },
    areaServed: ['Zagreb', 'Zagrebačka županija'],
};

export default function KomercijalnoCiscenjePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
            />
            <ServicePage
                title="Komercijalno čišćenje velikih i javnih prostora"
                titleHighlight="velikih i javnih prostora"
                canonicalPath="/usluge/komercijalno-ciscenje"
                quoteService="b2b_commercial"
                quoteTitle="Pošaljite podatke o prostoru"
                description="Peremo podove kolodvora, trgova, garaža, parkirališta i tržnica, u Zagrebu i okolici. Površinski čistač, vruća voda i para skidaju ulje, žvakaće i nagaženu prljavštinu s kamena i betona. Dolazimo noću ili kad je prostor zatvoren, pa ga ne treba zatvarati zbog nas."
                priceHint="po ponudi nakon procjene"
                heroHighlights={['Rad noću', 'Vruća voda i para', 'Račun za tvrtke i ustanove']}
                heroImage="/projekti/kolodvor-samobor-pola-poda-ociscen.jpg"
                heroImageAlt="Pod autobusnog kolodvora u Samoboru, lijevo prljave kamene ploče, desno očišćene"
                resultsShowcase={{
                    combinedSrc: '/projekti/kolodvor-samobor-prije-poslije.jpg',
                    combinedAlt: 'Ista klupa na autobusnom kolodvoru u Samoboru prije i poslije strojnog pranja poda',
                    eyebrow: 'Referenca: autobusni kolodvor u Samoboru',
                    title: 'Isti pod, ista klupa, jedna noć razlike',
                    description: 'Kamene ploče na natkrivenom dijelu kolodvora, gdje ljudi čekaju autobus. Prvo smo u rujnu oprali probni dio, a u listopadu cijeli pod, noću, dok je promet bio najmanji.',
                }}
                processSteps={[
                    {
                        title: 'Obilazak i probni dio',
                        description: 'Dođemo na lokaciju i operemo komad poda. Vidite rezultat na svom kamenu ili betonu prije nego išta potpišete.',
                    },
                    {
                        title: 'Ponuda i plan rada',
                        description: 'Ponuda je jedna, s opsegom, terminima i brojem noći. Plan dogovaramo s upraviteljem prostora ili komunalnim poduzećem.',
                    },
                    {
                        title: 'Rad izvan radnog vremena',
                        description: 'Radimo noću ili kad je prostor zatvoren, dio po dio. Mokri dio ogradimo trakom da nitko ne prolazi po njemu.',
                    },
                    {
                        title: 'Fotke i račun',
                        description: 'Nakon posla šaljemo fotke prije i poslije za vašu evidenciju te račun za tvrtku ili ustanovu.',
                    },
                ]}
                detailedContent={
                    <>
                        <h2>Za koga radimo komercijalno čišćenje</h2>
                        <p>
                            Za one koji vode prostor kroz koji svaki dan prođe puno ljudi: komunalna poduzeća,
                            gradove i općine, upravitelje trgovačkih centara i garaža, autobusne kolodvore,
                            tržnice i sportske objekte. Takav pod se ne može oprati &quot;usput&quot; danju, a
                            ručno ribanje ne skida nagaženu prljavštinu iz pora kamena.
                        </p>

                        <h2>Što peremo na velikim i javnim prostorima</h2>
                        <ul>
                            <li><strong>Peroni i čekaonice kolodvora</strong>, kamene i betonske ploče, rubovi uz klupe i koševe.</li>
                            <li><strong>Trgovi, pješačke zone i tržnice</strong>, popločenje s mrljama od ulja, pića i žvakaćih.</li>
                            <li><strong>Garaže i parkirališta</strong>, ulje i guma na betonu i asfaltu, rampe i ulazi.</li>
                            <li><strong>Ulazi trgovačkih centara</strong> i natkriveni prilazi, vanjski dio do vrata.</li>
                            <li><strong>Sportski i školski objekti</strong>, vanjske staze, tribine i igrališta s tvrdom podlogom.</li>
                        </ul>

                        <h2>Kako je izgledao posao na kolodvoru u Samoboru</h2>
                        <p>
                            Natkriveni dio autobusnog kolodvora u Samoboru ima svijetle kamene ploče koje su s
                            godinama potamnjele od nagažene prljavštine, pepela i prolivenih pića. Prvi dolazak
                            bio je probni: oprali smo dio uz klupu da se vidi može li se kamen vratiti. Na fotki
                            iznad je ta klupa prije i poslije.
                        </p>
                        <figure>
                            <Image
                                src="/projekti/kolodvor-samobor-povrsinski-cistac.jpg"
                                alt="Površinski čistač na mokrim kamenim pločama autobusnog kolodvora u Samoboru, noću"
                                width={1500}
                                height={1000}
                                sizes="(max-width: 768px) 100vw, 760px"
                                style={{ width: '100%', height: 'auto', borderRadius: '1rem' }}
                            />
                            <figcaption>Površinski čistač na kolodvoru: voda ne prska po ljudima i staklu jer se mlaz vrti ispod poklopca.</figcaption>
                        </figure>
                        <p>
                            Glavni posao išao je kroz nekoliko noći u listopadu. Radili smo{' '}
                            <strong>površinskim čistačem</strong> (mlaz se vrti ispod poklopca, pa voda ne prska
                            po ljudima, staklima i autobusima), <strong>vrućom vodom i parom</strong> za masne
                            mrlje i žvakaće, i ručnom mlaznicom za rubove uz zidove i klupe. Mokri dio smo
                            ogradili trakom, a kolodvor je radio dalje.
                        </p>
                        <p>
                            Zašto vruća voda: hladnom vodom se ulje i žvakaća razmažu, a vruća ih omekša i podigne.
                            Više o tome u članku{' '}
                            <Link href="/blog/pranje-vrucom-vodom-ulje-zvakace">pranje vrućom vodom: ulje i žvakaće</Link>.
                        </p>

                        <h2>Zašto noću</h2>
                        <p>
                            Javni prostor ne može stati zbog čišćenja. Noću je prolaza najmanje, pod se do jutra
                            osuši, a putnici i kupci ujutro dođu na čist kamen. Termin prilagođavamo vašem
                            rasporedu: noć, rano jutro, nedjelja ili dan kad je objekt zatvoren.
                        </p>

                        <h2>Vanjski dio poslovnih zgrada</h2>
                        <p>
                            Ako trebate oprati fasadu, rampe ili skladište svoje firme, to je na stranici{' '}
                            <Link href="/usluge/poslovni-objekti">pranje poslovnih objekata</Link>. Za grafite na
                            javnim zidovima pogledajte{' '}
                            <Link href="/blog/uklanjanje-grafita-zagreb">uklanjanje grafita u Zagrebu</Link>.
                        </p>
                    </>
                }
                features={[
                    {
                        title: 'Površinski čistač',
                        description: 'Ravnomjerno pere velike plohe bez pruga, a voda ostaje ispod poklopca, ne na staklu i ljudima.',
                        icon: <ClipboardList size={24} />,
                    },
                    {
                        title: 'Vruća voda i para',
                        description: 'Omekša ulje, mast i žvakaće koje hladna voda samo razmaže po kamenu.',
                        icon: <Flame size={24} />,
                    },
                    {
                        title: 'Rad noću',
                        description: 'Dolazimo kad je prostor zatvoren ili prazan. Mokri dio ogradimo, pod se do jutra osuši.',
                        icon: <Moon size={24} />,
                    },
                    {
                        title: 'Račun i dokumentacija',
                        description: 'Račun za tvrtku ili ustanovu i fotke prije i poslije, spremne za izvještaj nadređenima.',
                        icon: <FileText size={24} />,
                    },
                ]}
                commonProblems={[
                    {
                        title: 'Kolodvori i stanice',
                        description: 'Tamne ploče oko klupa, koševa i ulaza u autobus, mrlje od pića i pepela.',
                        icon: <Bus size={24} />,
                    },
                    {
                        title: 'Garaže i parkirališta',
                        description: 'Ulje i guma na betonu, prljave rampe i ulazi koje kupci prvi vide.',
                        icon: <ParkingSquare size={24} />,
                    },
                    {
                        title: 'Trgovi i tržnice',
                        description: 'Popločenje s mrljama koje ostanu i nakon ručnog pranja i kiše.',
                        icon: <Store size={24} />,
                    },
                    {
                        title: 'Ulazi velikih objekata',
                        description: 'Natkriveni prilazi trgovačkih centara i ustanova gdje kiša ne opere ništa.',
                        icon: <Building2 size={24} />,
                    },
                ]}
                faq={[
                    {
                        question: 'Koliko košta komercijalno čišćenje velikog prostora?',
                        answer: 'Ovisi o površini, materijalu, zaprljanosti i broju noći. Ponudu dajemo nakon obilaska i probnog dijela, kad oboje vidimo kako se vaš pod pere.',
                    },
                    {
                        question: 'Možete li raditi dok je prostor otvoren?',
                        answer: 'Da, dio po dio. Mokri dio ogradimo trakom, a površinski čistač ne prska. Kolodvor u Samoboru je radio cijelo vrijeme dok smo prali pod.',
                    },
                    {
                        question: 'Treba li nam struja ili voda na lokaciji?',
                        answer: 'Voda nam treba, priključak ili hidrant po dogovoru s vama. Opremu, crijeva i grijač vode donosimo na prikolici.',
                    },
                    {
                        question: 'Radite li za komunalna poduzeća i gradove?',
                        answer: 'Da. Autobusni kolodvor u Samoboru je takav posao. Izdajemo račun za tvrtke i ustanove i šaljemo fotke prije i poslije za vašu evidenciju.',
                    },
                    {
                        question: 'Radite li dnevno održavanje ureda i unutarnjih prostora?',
                        answer: 'Ne. Mi strojno peremo tvrde podove i vanjske površine. Dnevno brisanje ureda i sanitarija nije naš posao.',
                    },
                ]}
                serviceAreas={[
                    'Zagreb', 'Samobor', 'Velika Gorica', 'Zaprešić', 'Sveta Nedelja',
                    'Dugo Selo', 'Sesvete', 'Jankomir', 'Žitnjak', 'Lučko',
                ]}
                relatedServices={[
                    { title: 'Poslovni objekti', href: '/usluge/poslovni-objekti', icon: <Building2 size={18} /> },
                    { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                    { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                ]}
            />
        </>
    );
}
