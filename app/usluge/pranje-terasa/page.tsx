import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Footprints, Sun, Waves } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, BrushCleaning, TreeDeciduous } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Čišćenje terasa Zagreb | Profesionalno pranje terasa i pločica 2026.',
    description: 'Profesionalno čišćenje terasa u Zagrebu. Uklanjamo alge, mahovinu i crne naslage s keramičkih, kamenih i betonskih terasa. Besplatna procjena na lokaciji.',
    alternates: { canonical: '/usluge/pranje-terasa' },
    openGraph: {
        title: 'Čišćenje terasa Zagreb | Profesionalno pranje terasa i pločica 2026.',
        description: 'Profesionalno čišćenje vanjskih terasa, balkona, keramike i kamena u Zagrebu. Uklanjamo alge, mahovinu i crne naslage.',
        url: 'https://slaufismrk.com/usluge/pranje-terasa',
        images: [
            {
                url: '/prije-poslje/terasa-leggiero-poslje-2.jpeg',
                width: 1200,
                height: 900,
                alt: 'Čista terasa nakon profesionalnog pranja u Zagrebu',
            },
        ],
    },
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
            name: 'Pranje terasa',
            item: 'https://slaufismrk.com/usluge/pranje-terasa',
        }
    ],
};

export default function PranjeTerasaPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Koliko košta čišćenje terasa u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cijena čišćenja terasa u Zagrebu kreće se od 4 €/m². Za terasu do 50 m² to je okvirno od 200 €, a za terasu 50-100 m² iznosi od 400 €. Točna cijena ovisi o materijalu i zaprljanosti.',
                },
            },
            {
                '@type': 'Question',
                name: 'Možete li oprati terasu bez oštećenja fuga i pločica?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Da. Koristimo profesionalnu opremu i prilagođen tlak kako bismo očistili površinu bez nepotrebnog oštećenja fuga ili završnog sloja pločica.',
                },
            },
            {
                '@type': 'Question',
                name: 'Čistite li i balkone i manje gradske terase?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Da, čistimo i manje gradske terase, balkone i lođe ako postoji siguran pristup i mogućnost izvođenja radova.',
                },
            },
            {
                '@type': 'Question',
                name: 'Što ako je terasa od drva ili WPC-a?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Drvene terase i WPC podloge čistimo posebnim pristupom s niskim tlakom i specijalnim sredstvima za drvo. Za njih pogledajte našu zasebnu uslugu čišćenja drvenih površina.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko često treba čistiti vanjsku terasu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Najčešće jednom godišnje, a na sjenovitim i vlažnijim lokacijama i češće, ovisno o rastu algi i količini prljavštine.',
                },
            },
        ],
    };

    return (
        <>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
        <ServicePage
            title="Pranje terasa u Zagrebu"
            titleHighlight="terasa"
            canonicalPath="/usluge/pranje-terasa"
            description="Profesionalno pranje terasa vraća čistoću i sigurnost vanjskom prostoru. Uklanjamo alge, mahovinu, crne naslage, klizavi biofilm i tvrdokornu prljavštinu s keramičkih, kamenih i betonskih terasa u Zagrebu i okolici."
            priceHint="od 4 €/m²"
            heroImage="/seo-results/pranje-terasa/poslije-2.jpeg"
            heroImageAlt="Vanjska terasa nakon profesionalnog pranja i uklanjanja naslaga"
            heroHighlights={[
                'Čišćenje kamenih, keramičkih i betonskih terasa',
                'Uklanjanje klizavih algi i tamnih naslaga',
                'Besplatna procjena za Zagreb i okolicu',
            ]}
            resultsShowcase={{
                beforeSrc: '/seo-results/pranje-terasa/prije-2.jpeg',
                afterSrc: '/seo-results/pranje-terasa/poslije-2.jpeg',
                beforeAlt: 'Terasa prije čišćenja s tamnim naslagama i prljavim fugama',
                afterAlt: 'Terasa poslije čišćenja s vidljivo svježom i čistom površinom',
                title: 'Terasa prije i poslije čišćenja',
                description: 'Na terasama se razlika najbrže vidi na fugama, rubovima i cijeloj boji podloge nakon uklanjanja algi i biofilma.',
            }}
            processSteps={[
                {
                    title: 'Procjena',
                    description: 'Pošaljite 2–3 slike terase na WhatsApp i javljamo vam okvirnu cijenu. Za veće terase dolazimo na lokaciju, pregledamo materijal, fuge i stupanj zaprljanosti te odmah vidimo treba li predtretman.',
                },
                {
                    title: 'Predtretman naslaga',
                    description: 'Na tvrdokornim dijelovima nanosimo sredstvo koje omekšava mahovinu, crne tragove i biofilm prije visokotlačnog čišćenja.',
                },
                {
                    title: 'Ravnomjerno pranje',
                    description: 'Profesionalnom opremom čistimo cijelu površinu tako da terasa izgleda ujednačeno, bez slučajnih tragova i prejakih prijelaza.',
                },
                {
                    title: 'Završna kontrola',
                    description: 'Na kraju provjeravamo rubove, odvode i spojeve uz zid ili ogradu kako bi cijela terasa izgledala uredno i bila sigurna za korištenje.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto je pranje terasa važno?</h2>
                    <p>
                        Vanjske terase prvi su prostor na kojem se vidi utjecaj kiše, vlage, sjenovitih dijelova i
                        svakodnevnog korištenja. Na njima se nakupljaju <strong>alge, mahovina, crne naslage i
                            klizavi biofilm</strong> koji ne kvare samo izgled, nego stvaraju i ozbiljan rizik od
                        proklizavanja.
                    </p>
                    <p>
                        Profesionalno čišćenje terasa posebno je važno prije sezone korištenja u proljeće i ljeto,
                        ali i nakon jeseni kada vlaga i lišće ubrzaju propadanje fuga i površinskih premaza.
                    </p>

                    <h2>Koje terase čistimo?</h2>
                    <ul>
                        <li><strong>Keramičke terase</strong>, pločice na balkonima, lođama i dvorišnim terasama.</li>
                        <li><strong>Kamene terase</strong>, prirodni kamen, granitne ploče, travertin i slični materijali.</li>
                        <li><strong>Betonske i opločene terase</strong>, betonske ploče, grublje vanjske podloge i površine oko kuće.</li>
                        <li><strong>Terase s tlakavcima</strong>, za detaljniji fokus pogledajte i <Link href="/usluge/pranje-tlakavaca">pranje tlakavaca</Link>.</li>
                        <li><strong>Drvene terase</strong>, za osjetljivije drvene i WPC podloge imamo posebnu uslugu <Link href="/usluge/ciscenje-drvenih-povrsina">čišćenja drvenih površina</Link>.</li>
                    </ul>

                    <h2>Koliko košta pranje terasa?</h2>
                    <p>
                        Cijena ovisi o kvadraturi, materijalu i tome koliko su duboko ušle alge i crne naslage.
                        Okvirne cijene za Zagreb i okolicu:
                    </p>
                    <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0 1.5rem' }}>
                        <thead>
                            <tr style={{ background: 'var(--color-surface, #f4f4f4)' }}>
                                <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Površina</th>
                                <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Okvirna cijena</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { size: 'Do 50 m²', price: 'od 200 €' },
                                { size: '50 – 100 m²', price: 'od 400 €' },
                                { size: '100 – 200 m²', price: 'od 800 €' },
                                { size: '200 m²+', price: 'po procjeni' },
                            ].map((row, i) => (
                                <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                    <td style={{ padding: '10px 14px', fontWeight: 600 }}>{row.size}</td>
                                    <td style={{ padding: '10px 14px' }}>{row.price}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <p>
                        Ako je terasa dio šireg dvorišta, klijenti je često kombiniraju s <Link href="/usluge/pranje-okucnice">pranjem okućnice</Link> ili
                        <Link href="/usluge/pranje-prilaza"> pranjem prilaza</Link>, što je često isplativije nego naručivati odvojene dolaske.
                    </p>

                    <h2>Kada je najbolje prati terasu?</h2>
                    <p>
                        Najčešće preporučujemo pranje terasa u <strong>proljeće</strong>, prije intenzivnog korištenja,
                        ili u <strong>jesen</strong>, nakon sezone. Terase koje su u sjeni ili ispod drveća trebaju
                        češće čišćenje jer na njima brže rastu mahovina i alge.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Uklanjanje algi i biofilma',
                    description: 'Skidamo klizavi sloj zbog kojeg terasa izgleda tamno i postaje opasna nakon kiše.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Prilagođen pristup materijalu',
                    description: 'Tlak i nastavke biramo prema vrsti pločice, kamena ili betona kako ne bismo oštetili površinu.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Brzo vraćanje u funkciju',
                    description: 'Većinu terasa očistimo u istom danu, tako da prostor vrlo brzo opet izgleda uredno i spreman je za korištenje.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Sigurna sredstva za vanjske prostore',
                    description: 'Koristimo biorazgradiva sredstva sigurna za kućanstvo, vrt i okolne biljke.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Klizava terasa poslije kiše',
                    description: 'Alge i biofilm stvaraju opasan sloj zbog kojeg se terasa sjaji i postaje skliska.',
                    icon: <Footprints size={24} />,
                },
                {
                    title: 'Crne naslage u fugama',
                    description: 'Vlaga, prašina i organski ostaci u fugama daju dojam trajno prljave terase.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Izblijedjela i zamrljana površina',
                    description: 'Sunce i nečistoće neravnomjerno mijenjaju boju pločica, kamena ili betonskih elemenata.',
                    icon: <Sun size={24} />,
                },
                {
                    title: 'Zadržavanje vode i prljavštine',
                    description: 'Prljavština uz rubove, odvode i spojeve zadržava vlagu i potiče novi rast algi.',
                    icon: <Waves size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta pranje terase u Zagrebu?',
                    answer: 'Okvirna cijena za pranje terasa kreće se od 4 €/m². Točna ponuda ovisi o materijalu, kvadraturi i zaprljanosti.',
                },
                {
                    question: 'Možete li oprati terasu bez oštećenja fuga i pločica?',
                    answer: 'Da. Koristimo profesionalnu opremu i prilagođen tlak kako bismo očistili površinu bez nepotrebnog oštećenja fuga ili završnog sloja.',
                },
                {
                    question: 'Čistite li i balkone i manje gradske terase?',
                    answer: 'Da, čistimo i manje gradske terase, balkone i lođe ako postoji siguran pristup i mogućnost izvođenja radova.',
                },
                {
                    question: 'Što ako je terasa od drva ili WPC-a?',
                    answer: 'Takve površine čistimo posebnim pristupom. Za njih pogledajte našu zasebnu uslugu čišćenja drvenih površina.',
                },
                {
                    question: 'Koliko često treba prati vanjsku terasu?',
                    answer: 'Najčešće jednom godišnje, a na sjenovitim i vlažnijim lokacijama i češće, ovisno o rastu algi i količini prljavštine.',
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
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
            ]}
        />
        </>
    );
}
