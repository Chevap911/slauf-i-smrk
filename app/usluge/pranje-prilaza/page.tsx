import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, CarFront, Fuel, Ruler } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, BrushCleaning, ShieldAlert } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje prilaza Zagreb | Čišćenje betonskih i kamenih prilaza',
    description: 'Profesionalno pranje prilaza u Zagrebu. Čistimo betonske, kamene i opločene prilaze, uklanjamo ulje, tragove guma, hrđu, mahovinu i tvrdokornu prljavštinu uz besplatnu procjenu.',
    alternates: { canonical: '/usluge/pranje-prilaza' },
    openGraph: {
        title: 'Pranje prilaza Zagreb | Čišćenje betonskih i kamenih prilaza',
        description: 'Profesionalno čišćenje garažnih, dvorišnih i parkirnih prilaza u Zagrebu.',
        url: 'https://slaufismrk.com/usluge/pranje-prilaza',
        images: [
            {
                url: '/assets/after2.png',
                width: 1200,
                height: 900,
                alt: 'Očišćen prilaz i zid nakon profesionalnog pranja u Zagrebu',
            },
        ],
    },
};



const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: "Koliko košta pranje prilaza u Zagrebu?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Okvirna cijena za pranje prilaza kreće se od od 4 €/m², a točna ponuda ovisi o materijalu, veličini i stupnju zaprljanosti.",
            },
        },
        {
            '@type': 'Question',
            name: "Možete li ukloniti tragove motornog ulja s betonskog prilaza?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Često možemo postići jako veliko poboljšanje, posebno kod svježijih mrlja. Kod starih i duboko upijenih mrlja rezultat ovisi o stanju podloge.",
            },
        },
        {
            '@type': 'Question',
            name: "Čistite li i ulaze u garažu i rubove uz zid?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da. Čistimo cijeli prilazni sklop, uključujući ulaz u garažu, rubove uz zid, prijelaze prema okućnici i parkirna mjesta.",
            },
        },
        {
            '@type': 'Question',
            name: "Je li bolje čistiti prilaz samostalno ili u paketu s okućnicom?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Ako je prilaz dio većeg dvorišta, gotovo uvijek se više isplati čistiti ga zajedno s okućnicom ili tlakavcima jer dobijete cjelovit rezultat.",
            },
        },
        {
            '@type': 'Question',
            name: "Koliko često treba prati prilaz?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Najčešće jednom godišnje, a kod jako opterećenih prilaza i češće, posebno ako su izloženi vozilima, ulju i vlazi.",
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
            name: 'Pranje prilaza',
            item: 'https://slaufismrk.com/usluge/pranje-prilaza',
        }
    ],
};

export default function PranjePrilazaPage() {
    return (
        <ServicePage
            title="Pranje prilaza u Zagrebu"
            titleHighlight="prilaza"
            canonicalPath="/usluge/pranje-prilaza"
            description="Pranje prilaza vraća uredan i siguran izgled ulazu u dvorište, kuću ili garažu. Uklanjamo uljne mrlje, tragove guma, hrđu, mahovinu i duboku prljavštinu s betonskih, kamenih i opločenih prilaza u Zagrebu i okolici."
            priceHint="od 4 €/m²"
            heroImage="/seo-results/pranje-prilaza/poslije.png"
            heroImageAlt="Betonski prilaz nakon profesionalnog čišćenja u Zagrebu"
            heroHighlights={[
                'Čišćenje garažnih, kućnih i parkirnih prilaza',
                'Uklanjanje ulja, guma, hrđe i algi',
                'Idealno u kombinaciji s okućnicom i tlakavcima',
            ]}
            resultsShowcase={{
                beforeSrc: '/seo-results/pranje-prilaza/prije.png',
                afterSrc: '/seo-results/pranje-prilaza/poslije.png',
                beforeAlt: 'Prilaz prije čišćenja s tamnim naslagama i vidljivom zaprljanošću',
                afterAlt: 'Prilaz poslije čišćenja s ujednačenom i čistom površinom',
                title: 'Prilaz prije i poslije čišćenja',
                description: 'Kod prilaza se odmah vidi koliko profesionalno pranje poboljša prvi dojam ulaza u kuću ili garažu.',
            }}
            processSteps={[
                {
                    title: 'Pregled vrste prilaza',
                    description: 'Provjeravamo radi li se o betonu, kamenu, asfaltu ili opločenoj podlozi te gdje su najproblematičnija mjesta.',
                },
                {
                    title: 'Tretman mrlja',
                    description: 'Masne mrlje, tragove guma i hrđu tretiramo ciljano prije glavnog čišćenja kako bi rezultat bio ravnomjerniji.',
                },
                {
                    title: 'Profesionalno pranje',
                    description: 'Ravnomjerno čistimo cijeli prilaz, uključujući rubove, spojeve uz zid, garažu i odvodne dijelove.',
                },
                {
                    title: 'Završna provjera',
                    description: 'Na kraju pregledamo pristupna mjesta, ulaz u garažu i prijelaze prema dvorištu kako bi cijeli ulazni dio izgledao uredno.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto je pranje prilaza posebno važno?</h2>
                    <p>
                        Prilaz je jedna od najopterećenijih vanjskih površina oko kuće. Preko njega svakodnevno
                        prolaze vozila, obuća, bicikli i sve što unosimo u dvorište ili garažu. Zato se na njemu
                        brzo nakupljaju <strong>ulje, tragovi guma, hrđa, alge i fina cestovna prljavština</strong>.
                    </p>
                    <p>
                        Ako se prilaz ne održava, ulazni dio kuće vrlo brzo izgleda zapušteno, a mokra površina može
                        postati klizava i neugodna za hodanje. Profesionalno pranje prilaza posebno dolazi do izražaja
                        kod betona, betonskih kocki i parkirnih mjesta uz garažu.
                    </p>

                    <h2>Koje prilaze čistimo?</h2>
                    <ul>
                        <li><strong>Betonske prilaze</strong> — ulazi u garažu, parkirna mjesta, staze uz kuću.</li>
                        <li><strong>Opločene prilaze</strong> — betonske kocke, tlakavci i behaton. Za detaljniji fokus pogledajte <Link href="/usluge/pranje-tlakavaca">pranje tlakavaca</Link>.</li>
                        <li><strong>Kamene prilaze</strong> — prirodni kamen i masivnije ploče uz kuću i vrt.</li>
                        <li><strong>Asfaltne prilaze</strong> — uz prilagođen pristup i očekivanja vezana uz vrstu podloge.</li>
                    </ul>

                    <h2>Koliko košta pranje prilaza?</h2>
                    <p>
                        Cijena najčešće ovisi o materijalu, kvadraturi i tome ima li puno ulja i tragova od vozila.
                        Okvirno:
                    </p>
                    <ul>
                        <li><strong>Cijena po m²</strong>: od 4 €/m²</li>
                        <li><strong>Konačna cijena</strong>: ovisi o materijalu, veličini prilaza te prisutnosti ulja, hrđe i tragova guma.</li>
                    </ul>
                    <p>
                        Prilaz se vrlo često isplati čistiti zajedno s <Link href="/usluge/pranje-okucnice">okućnicom</Link> ili
                        <Link href="/usluge/pranje-fasade"> fasadom</Link>, jer tako cijeli ulazni dojam kuće izgleda usklađeno i svježe.
                    </p>

                    <h2>Što je najteže ukloniti s prilaza?</h2>
                    <p>
                        Najzahtjevnije su <strong>stare mrlje od motornog ulja</strong>, tragovi hrđe i duboko upijena
                        prljavština na poroznom betonu. Ne možemo pošteno obećati da će svaka stara mrlja nestati 100 %,
                        ali profesionalnim tretmanom se najčešće vidi velika razlika u odnosu na početno stanje.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Uklanjanje tragova vozila',
                    description: 'Ciljano čistimo ulje, tragove guma i prljavštinu koja se zadržava na ulazu u garažu i parkirnim mjestima.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Prilagođen pristup podlozi',
                    description: 'Drugačije čistimo beton, drugačije tlakavce, a drugačije kamen kako bi rezultat bio što bolji i sigurniji.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Brzo sređivanje ulaznog dojma',
                    description: 'Čist prilaz trenutačno podiže prvi dojam kuće, dvorišta ili poslovnog ulaza.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Sigurna i učinkovita sredstva',
                    description: 'Koristimo biorazgradiva sredstva i profesionalnu opremu koja daje bolji rezultat od kućnih perača.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Mrlje od motornog ulja',
                    description: 'Najčešći problem na prilazima i ulazima u garaže, posebno kad vozilo dugo stoji na istom mjestu.',
                    icon: <Fuel size={24} />,
                },
                {
                    title: 'Tragovi guma i parkiranja',
                    description: 'Stalni prolaz kotača ostavlja tamne linije i zone habanja koje se običnim ispiranjem ne skidaju lako.',
                    icon: <CarFront size={24} />,
                },
                {
                    title: 'Klizavi ulaz nakon kiše',
                    description: 'Alge i fina prljavština stvaraju sklizak sloj baš na najfrekventnijem dijelu ulaza u dvorište ili kuću.',
                    icon: <ShieldAlert size={24} />,
                },
                {
                    title: 'Neujednačen izgled cijelog ulaza',
                    description: 'Različite mrlje, boje i zone zaprljanosti čine da prilaz izgleda starije i zapuštenije nego ostatak kuće.',
                    icon: <Ruler size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta pranje prilaza u Zagrebu?',
                    answer: 'Okvirna cijena za pranje prilaza kreće se od od 4 €/m², a točna ponuda ovisi o materijalu, veličini i stupnju zaprljanosti.',
                },
                {
                    question: 'Možete li ukloniti tragove motornog ulja s betonskog prilaza?',
                    answer: 'Često možemo postići jako veliko poboljšanje, posebno kod svježijih mrlja. Kod starih i duboko upijenih mrlja rezultat ovisi o stanju podloge.',
                },
                {
                    question: 'Čistite li i ulaze u garažu i rubove uz zid?',
                    answer: 'Da. Čistimo cijeli prilazni sklop, uključujući ulaz u garažu, rubove uz zid, prijelaze prema okućnici i parkirna mjesta.',
                },
                {
                    question: 'Je li bolje čistiti prilaz samostalno ili u paketu s okućnicom?',
                    answer: 'Ako je prilaz dio većeg dvorišta, gotovo uvijek se više isplati čistiti ga zajedno s okućnicom ili tlakavcima jer dobijete cjelovit rezultat.',
                },
                {
                    question: 'Koliko često treba prati prilaz?',
                    answer: 'Najčešće jednom godišnje, a kod jako opterećenih prilaza i češće, posebno ako su izloženi vozilima, ulju i vlazi.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Črnomerec', 'Trnje', 'Novi Zagreb', 'Podsused',
                'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Pranje tlakavaca', href: '/usluge/pranje-tlakavaca', icon: <BrushCleaning size={18} /> },
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Home size={18} /> },
            ]}
        />
    );
}
