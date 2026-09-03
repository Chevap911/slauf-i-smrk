import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Sparkles, Wind } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Sofa, Home, TreeDeciduous } from 'lucide-react';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Detailing i pranje auta uz dolazak, Zagreb | Šlauf i Šmrk',
    description: 'Peremo auto iznutra i izvana dok smo već na vašoj lokaciji. Vanjsko pranje, kemijsko čišćenje sjedala i interijer, bez putnog troška.',
    alternates: { canonical: '/usluge/detailing-automobila' },
    openGraph: {
        title: 'Pranje Auta Uz Dolazak | Šlauf i Šmrk',
        description: 'Peremo auto iznutra i izvana dok smo već na vašoj lokaciji. Bez dodatnog putnog troška.',
        url: 'https://slaufismrk.com/usluge/detailing-automobila',
        images: [OG_IMAGE],
    },
};



const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: "Mogu li naručiti samo pranje auta bez druge usluge?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Možete, ali cijena uključuje poseban dolazak. Puno isplativije je dogovoriti auto uz dolazak za pranje fasade, okućnice ili neku drugu uslugu.",
            },
        },
        {
            '@type': 'Question',
            name: "Koliko traje čišćenje automobila?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Vanjsko pranje traje sat do sat i pol. Kemijsko čišćenje sjedala + interijer 2 do 3 sata, ovisno o stanju vozila.",
            },
        },
        {
            '@type': 'Question',
            name: "Čistite li i kožne interijere?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da, koristimo specijalizirana sredstva za kožu koja čiste bez oštećivanja materijala.",
            },
        },
        {
            '@type': 'Question',
            name: "Je li kemijsko čišćenje sjedala sigurno za tkaninu?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da. Koristimo istu opremu i sredstva kao za kemijsko čišćenje namještaja u kući. Prilagođavamo tlak i sredstvo prema vrsti materijala.",
            },
        },
        {
            '@type': 'Question',
            name: "Dolazite li i van Zagreba?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da, pokrivamo cijelo područje Grada Zagreba i bližu okolicu. Pranje auta dogovaramo uz dolazak za drugu uslugu.",
            },
        }
    ],
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Početna',
            item: 'https://slaufismrk.com/',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Detailing automobila',
            item: 'https://slaufismrk.com/usluge/detailing-automobila',
        }
    ],
};

export default function DetailingAutoPage() {
    return (
        <ServicePage
            title="Pranje Auta Uz Dolazak"
            titleHighlight="Uz Dolazak"
            canonicalPath="/usluge/detailing-automobila"
            description="Dok smo već kod vas zbog fasade, okućnice ili neke druge usluge, peremo i auto. Iznutra i izvana, uključujući kemijsko čišćenje sjedala. Bez dodatnog putnog troška jer smo već tu."
            priceHint="od 60 € (vanjsko) · od 80 € (interijer) · od 130 € (komplet)"
            processSteps={[
                {
                    title: 'Dogovor uz ostalu uslugu',
                    description: 'Kad naručujete pranje fasade, okućnice ili drugu uslugu, samo najavite da želite i auto. Nema posebnog dolaska ni putnog troška.',
                },
                {
                    title: 'Usisavanje i predtretman',
                    description: 'Dok naš tim radi na fasadi ili okućnici, temeljito usisavamo interijer i tretiramo mrlje na sjedalima.',
                },
                {
                    title: 'Kemijsko čišćenje sjedala',
                    description: 'Injektirno-ekstrakcijskim strojem dubinski čistimo sjedala i podove. Ista oprema kao za čišćenje namještaja.',
                },
                {
                    title: 'Vanjsko pranje',
                    description: 'Ručno peremo karoseriju i čistimo felge i gume. Auto je čist iznutra i izvana do kraja radnog dana.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto pratiti auto uz dolazak?</h2>
                    <p>
                        Već smo na vašoj adresi, već smo raspakirali opremu, već smo tu. To je idealan trenutak da riješite i auto
                        koji čeka čišćenje. <strong>Nema posebnog dolaska, nema dodatnog putnog troška</strong>, samo dogovorite
                        unaprijed kada naručujete glavnu uslugu.
                    </p>
                    <p>
                        Ovu opciju posebno vole klijenti koji nas naručuju za <Link href="/usluge/pranje-okucnice">pranje okućnice</Link> ili{' '}
                        <Link href="/usluge/pranje-fasade">pranje fasade</Link>, dok mi radimo vani, auto se čisti u garaži ili na dvorištu.
                    </p>

                    <h2>Što uključuje pranje auta?</h2>
                    <p>Nudimo tri paketa, a možete ih kombinirati kako god želite:</p>
                    <ul>
                        <li><strong>Vanjsko pranje</strong>: ručno pranje karoserije, čišćenje felgi i guma od kočione prašine i cestovne prljavštine.</li>
                        <li><strong>Interijer (basic)</strong>: usisavanje, brisanje instrument ploče, plastike i vrata. Brzo i uredno.</li>
                        <li><strong>Kemijsko čišćenje sjedala</strong>: injektirno-ekstrakcijskim strojem izvlačimo mrlje, znoj i alergene iz dubine sjedala i podnih tepiha. Ista oprema kao za <Link href="/usluge/kemijsko-ciscenje-namjestaja">kemijsko čišćenje garniture</Link>.</li>
                    </ul>

                    <h2>Cijene (uz dolazak za drugu uslugu)</h2>
                    <ul>
                        <li><strong>Vanjsko pranje</strong>: od 60 €</li>
                        <li><strong>Interijer (basic)</strong>: od 80 € (usisavanje i brisanje unutrašnjosti)</li>
                        <li><strong>Kemijsko čišćenje sjedala</strong>: od 60 € (uz ostale unutarnje površine)</li>
                        <li><strong>Komplet (unutra i vani)</strong>: od 130 €</li>
                        <li><strong>SUV / kombi</strong>: +20 do 30% na sve pakete</li>
                    </ul>
                    <p>
                        Cijene vrijede <strong>isključivo uz drugu naručenu uslugu</strong> (pranje fasade, okućnice, terase i sl.)
                        jer nema posebnog putnog troška. Za samostalan dolazak samo zbog auta javite nam se za ponudu.
                    </p>

                    <h2>Što ako nemam drugu uslugu?</h2>
                    <p>
                        Ako trebate samo auto, i to je u redu. Javite nam se pa dogovorimo poseban termin. Cijena može biti
                        nešto viša jer uključuje poseban dolazak, ali u svakom slučaju radimo bez skrivenih troškova i dajemo jasnu ponudu unaprijed.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Bez putnog troška',
                    description: 'Dolazimo već zbog fasade ili okućnice. Auto čistite uz dolazak bez ikakve doplate za put.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Kemijsko čišćenje sjedala',
                    description: 'Injektirno-ekstrakcijskim strojem dubinski čistimo sjedala, podne tepihe i prtljažnik.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Vanjsko pranje',
                    description: 'Ručno peremo karoseriju i čistimo felge od kočione prašine. Bez ogrebotina na laku.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Neutralizacija mirisa',
                    description: 'Uklanjamo mirise cigareta, hrane i vlage enzimskim sredstvima.',
                    icon: <Wind size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Mrlje od kave na sjedalima',
                    description: 'Kava, sokovi i hrana ostavljaju tvrdokorne mrlje na tkanini sjedala koje se ne mogu ukloniti usisavačem.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Miris cigareta',
                    description: 'Dim cigareta prodire u svaku poru tkanine i plastike. Površinsko čišćenje ne pomaže, potrebno je dubinsko.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Dlake kućnih ljubimaca',
                    description: 'Dlake pasa i mačaka zabijaju se duboko u tkaninu i tepih automobila. Uklanjamo ih posebnim četkama i ekstrakcijom.',
                    icon: <Sparkles size={24} />,
                },
                {
                    title: 'Kočiona prašina na felgama',
                    description: 'Tamna prašina od kočnica koja se taloži na felgama i postaje sve teže za ukloniti s vremenom.',
                    icon: <Leaf size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Mogu li naručiti samo pranje auta bez druge usluge?',
                    answer: 'Možete, ali cijena uključuje poseban dolazak. Puno isplativije je dogovoriti auto uz dolazak za pranje fasade, okućnice ili neku drugu uslugu.',
                },
                {
                    question: 'Koliko traje čišćenje automobila?',
                    answer: 'Vanjsko pranje traje sat do sat i pol. Kemijsko čišćenje sjedala + interijer 2 do 3 sata, ovisno o stanju vozila.',
                },
                {
                    question: 'Čistite li i kožne interijere?',
                    answer: 'Da, koristimo specijalizirana sredstva za kožu koja čiste bez oštećivanja materijala.',
                },
                {
                    question: 'Je li kemijsko čišćenje sjedala sigurno za tkaninu?',
                    answer: 'Da. Koristimo istu opremu i sredstva kao za kemijsko čišćenje namještaja u kući. Prilagođavamo tlak i sredstvo prema vrsti materijala.',
                },
                {
                    question: 'Dolazite li i van Zagreba?',
                    answer: 'Da, pokrivamo cijelo područje Grada Zagreba i bližu okolicu. Pranje auta dogovaramo uz dolazak za drugu uslugu.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Novi Zagreb', 'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Kemijsko čišćenje', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
            ]}
        />
    );
}
