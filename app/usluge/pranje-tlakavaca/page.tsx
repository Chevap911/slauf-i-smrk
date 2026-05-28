import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Ruler } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, CarFront, Waves } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje tlakavaca Zagreb | Čišćenje behatona i betonskih kocki',
    description: 'Profesionalno pranje tlakavaca u Zagrebu. Čistimo behaton, betonske kocke i opločene površine, uklanjamo mahovinu, korov i mrlje od ulja te vraćamo uredan izgled dvorištu i prilazu.',
    alternates: { canonical: '/usluge/pranje-tlakavaca' },
    openGraph: {
        title: 'Pranje tlakavaca Zagreb | Čišćenje behatona i betonskih kocki',
        description: 'Profesionalno čišćenje tlakavaca, behatona i betonskih kocki u Zagrebu.',
        url: 'https://slaufismrk.com/usluge/pranje-tlakavaca',
        images: [
            {
                url: '/blog/pranje-okucnice/terasa-leggiero-poslije.jpeg',
                width: 1200,
                height: 900,
                alt: 'Tlakavci nakon profesionalnog pranja u Zagrebu',
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
            name: "Koliko košta pranje tlakavaca u Zagrebu?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Okvirna cijena za pranje tlakavaca kreće se od od 4 €/m², a konačna ponuda ovisi o kvadraturi, stanju fuga i prisutnosti korova ili mrlja.",
            },
        },
        {
            '@type': 'Question',
            name: "Uključuje li pranje tlakavaca i ponovno fugiranje pijeskom?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Osnovno pranje ne uključuje automatski ponovno fugiranje, ali ga možemo preporučiti i dogovoriti kao dodatnu stavku kad je potrebno.",
            },
        },
        {
            '@type': 'Question',
            name: "Mogu li mrlje od ulja potpuno nestati?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "To ovisi o starosti mrlje i koliko je duboko ušla u podlogu. Često ih možemo značajno smanjiti, a svježe mrlje uklanjaju se puno uspješnije.",
            },
        },
        {
            '@type': 'Question',
            name: "Koliko često treba prati tlakavce?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Najčešće jednom godišnje, a na sjenovitim i vlažnim lokacijama i češće, posebno ako se korov brzo vraća u fuge.",
            },
        },
        {
            '@type': 'Question',
            name: "Čistite li i manje terase s betonskim kockama?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da. Radimo i manje terase, dvorišta i okućnice ako postoji smislen pristup i ako je rezultat vrijedan zahvata.",
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
            name: 'Pranje tlakavaca',
            item: 'https://slaufismrk.com/usluge/pranje-tlakavaca',
        }
    ],
};

export default function PranjeTlakavacaPage() {
    return (
        <ServicePage
            title="Pranje tlakavaca u Zagrebu"
            titleHighlight="tlakavaca"
            canonicalPath="/usluge/pranje-tlakavaca"
            description="Profesionalno pranje tlakavaca uklanja mahovinu, korov iz fuga, crne naslage i mrlje od ulja s betonskih kocki i behatona. Vraćamo ujednačenu boju i čist izgled dvorištu, terasi i prilazu u Zagrebu i okolici."
            priceHint="od 4 €/m²"
            heroImage="/seo-results/pranje-tlakavaca/prije-poslije.jpg"
            heroImageAlt="Prikaz prije i poslije čišćenja tlakavaca"
            heroHighlights={[
                'Čišćenje behatona i betonskih kocki',
                'Uklanjanje korova, mahovine i crnih fuga',
                'Opcionalno ponovno fugiranje pijeskom',
            ]}
            resultsShowcase={{
                combinedSrc: '/seo-results/pranje-tlakavaca/prije-poslije.jpg',
                combinedAlt: 'Prije i poslije rezultat čišćenja tlakavaca i betonskih kocki',
                title: 'Tlakavci prije i poslije čišćenja',
                description: 'Na ovoj usluzi imaš gotovu prije i poslije kompoziciju koja jasno pokazuje koliko se behaton i fuge vizualno osvježe nakon zahvata.',
            }}
            processSteps={[
                {
                    title: 'Procjena tlakavaca',
                    description: 'Provjeravamo vrstu kocke, stanje fuga i postoji li problem s mrljama od ulja, hrđe ili korovom između elemenata.',
                },
                {
                    title: 'Predtretman problematičnih mjesta',
                    description: 'Tvrdokorne mrlje, masnoće i guste naslage tretiramo prije glavnog pranja kako bi se skinule ravnomjernije i dublje.',
                },
                {
                    title: 'Rotirajuće i visokotlačno čišćenje',
                    description: 'Profesionalnom opremom čistimo cijelu površinu tako da tlakavci dobiju ravnomjeran, uredan izgled bez slučajnih tragova.',
                },
                {
                    title: 'Savjet za fuge',
                    description: 'Po potrebi preporučujemo i ponovno fugiranje kvarcnim pijeskom kako bi površina bila stabilnija i otpornija na novi rast korova.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto se tlakavci tako brzo zaprljaju?</h2>
                    <p>
                        Tlakavci i betonske kocke imaju puno fuga, rubova i sitnih pora u kojima se zadržavaju
                        <strong> prašina, zemlja, mahovina i korov</strong>. Zbog toga i relativno novo dvorište može
                        u kratkom roku izgledati sivo, tamno i zapušteno.
                    </p>
                    <p>
                        Najčešći problem kod behatona nije samo površinska prljavština, nego i to što se
                        <strong> fuge ispune organskim materijalom</strong>, pa korov i alge izbijaju iznutra.
                        Upravo zato profesionalno pranje tlakavaca daje puno bolji rezultat od običnog kućnog perača.
                    </p>

                    <h2>Što sve uključuje čišćenje tlakavaca?</h2>
                    <ul>
                        <li><strong>Pranje betonskih kocki i behatona</strong> — dvorišta, terase, staze i manji prilazi.</li>
                        <li><strong>Uklanjanje mahovine i korova iz fuga</strong> — posebno važno na sjenovitim mjestima.</li>
                        <li><strong>Čišćenje crnih i tamnih naslaga</strong> — biofilm, vlaga i nataložena prljavština.</li>
                        <li><strong>Uklanjanje masnih i uljnih tragova</strong> — ovisno o starosti mrlje i upijenosti podloge.</li>
                        <li><strong>Savjet za ponovno fugiranje</strong> — uz preporuku za kvarcni pijesak nakon pranja.</li>
                    </ul>

                    <h2>Koliko košta pranje tlakavaca?</h2>
                    <p>
                        Okvirna cijena za Zagreb najčešće se kreće ovako:
                    </p>
                    <ul>
                        <li><strong>Cijena po m²</strong>: od 4 €/m²</li>
                        <li><strong>Konačna cijena</strong>: ovisi o kvadraturi, stanju fuga, korovu i eventualnim mrljama od ulja.</li>
                    </ul>
                    <p>
                        Ako je površina dio veće cjeline, često preporučujemo kombinaciju s <Link href="/usluge/pranje-prilaza">pranjem prilaza</Link> ili
                        <Link href="/usluge/pranje-okucnice"> pranjem okućnice</Link> jer se tako dobiva cjelovit rezultat i bolji omjer cijene.
                    </p>

                    <h2>Treba li ponovno fugirati pijeskom?</h2>
                    <p>
                        U mnogim slučajevima da. Nakon jačeg pranja dio starog materijala iz fuga se ispere, pa je
                        <strong> ponovno fugiranje kvarcnim pijeskom</strong> logičan sljedeći korak ako želite stabilniju
                        površinu i sporiji povrat korova. To nije uvijek obavezno, ali ga često preporučujemo.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Dubinsko čišćenje fuga',
                    description: 'Skidamo mahovinu, korov i tamne naslage iz fuga koje kvare cijeli izgled tlakavaca.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Ravnomjeran rezultat',
                    description: 'Profesionalna oprema daje ujednačeniji rezultat od klasičnog kućnog perača pod pritiskom.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Brza izvedba',
                    description: 'Većinu standardnih dvorišta i terasa s tlakavcima odradimo unutar jednog radnog dana.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Sigurna sredstva i pristup',
                    description: 'Koristimo biorazgradiva sredstva i pristup prilagođen betonskim kockama i okolnim biljkama.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Korov između kocki',
                    description: 'Najčešći znak da su fuge prepune zemlje i organskog materijala koji treba temeljito očistiti.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Crni i zeleni spojevi',
                    description: 'Tamne fuge i zelene naslage čine da tlakavci izgledaju starije i prljavije nego što stvarno jesu.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Neravnomjerna boja behatona',
                    description: 'Različiti dijelovi površine izgledaju sivo, crno ili žuto zbog različite zaprljanosti i habanja.',
                    icon: <Ruler size={24} />,
                },
                {
                    title: 'Masne mrlje uz parkirno mjesto',
                    description: 'Ulje i tragovi od vozila čest su problem kod tlakavaca na prilazima i parkirnim mjestima.',
                    icon: <CarFront size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta pranje tlakavaca u Zagrebu?',
                    answer: 'Okvirna cijena za pranje tlakavaca kreće se od od 4 €/m², a konačna ponuda ovisi o kvadraturi, stanju fuga i prisutnosti korova ili mrlja.',
                },
                {
                    question: 'Uključuje li pranje tlakavaca i ponovno fugiranje pijeskom?',
                    answer: 'Osnovno pranje ne uključuje automatski ponovno fugiranje, ali ga možemo preporučiti i dogovoriti kao dodatnu stavku kad je potrebno.',
                },
                {
                    question: 'Mogu li mrlje od ulja potpuno nestati?',
                    answer: 'To ovisi o starosti mrlje i koliko je duboko ušla u podlogu. Često ih možemo značajno smanjiti, a svježe mrlje uklanjaju se puno uspješnije.',
                },
                {
                    question: 'Koliko često treba prati tlakavce?',
                    answer: 'Najčešće jednom godišnje, a na sjenovitim i vlažnim lokacijama i češće, posebno ako se korov brzo vraća u fuge.',
                },
                {
                    question: 'Čistite li i manje terase s betonskim kockama?',
                    answer: 'Da. Radimo i manje terase, dvorišta i okućnice ako postoji smislen pristup i ako je rezultat vrijedan zahvata.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Črnomerec', 'Trnje', 'Novi Zagreb', 'Podsused',
                'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Pranje prilaza', href: '/usluge/pranje-prilaza', icon: <CarFront size={18} /> },
                { title: 'Pranje terasa', href: '/usluge/pranje-terasa', icon: <Waves size={18} /> },
            ]}
        />
    );
}
