import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Paintbrush, ThermometerSun, Building2, CheckCircle2 } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, TreeDeciduous, Sofa } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje fasade Zagreb | Čišćenje algi i cijena | Šlauf i Šmrk',
    description: 'Pranje i čišćenje fasade u Zagrebu: uklanjanje algi, mahovine i tamnih tragova uz prilagođen tlak za žbuku i ETICS fasade. Cijena od 5 €/m² i jasna procjena prije rada.',
    alternates: { canonical: '/usluge/pranje-fasade' },
    openGraph: {
        title: 'Pranje fasade Zagreb | Čišćenje algi i cijena | Šlauf i Šmrk',
        description: 'Profesionalno pranje i čišćenje fasade u Zagrebu i okolici. Uklanjamo alge, mahovinu i tamne naslage za kuće, zgrade i poslovne objekte.',
        url: 'https://slaufismrk.com/usluge/pranje-fasade',
        images: [
            {
                url: '/prije-poslje/fasada-poslje.png',
                width: 1200,
                height: 630,
                alt: 'Fasada kuće nakon profesionalnog pranja i uklanjanja algi u Zagrebu',
            },
        ],
    },
};

const serviceOfferSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://slaufismrk.com/usluge/pranje-fasade#service-offer',
    name: 'Pranje fasade u Zagrebu',
    serviceType: 'Pranje i čišćenje fasade',
    description: 'Profesionalno pranje i čišćenje fasada za kuće, zgrade i poslovne objekte u Zagrebu i okolici. Uklanjanje algi, mahovine, gljivica i tamnih tragova uz prilagođen tlak.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Šlauf i Šmrk',
        url: 'https://slaufismrk.com',
        telephone: '+385958442806',
        areaServed: ['Zagreb', 'Zagrebačka županija', 'Velika Gorica', 'Samobor', 'Zaprešić'],
    },
    areaServed: ['Zagreb', 'Zagrebačka županija'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: '5',
        highPrice: '7',
        unitText: 'm2',
    },
};



const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: "Koliko košta visokotlačno pranje fasade?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Cijena ovisi o površini i stupnju zaprljanosti. Okvirni raspon je od 5 €/m². Za fasadu od 200 m² to je okvirno od 1.000 €. Za točnu cijenu dolazimo na procjenu lokacije.",
            },
        },
        {
            '@type': 'Question',
            name: "Hoće li visokotlačno pranje oštetiti moju fasadu?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Ne, koristimo profesionalnu opremu s prilagodljivim tlakom. ETICS fasade tretiramo nižim tlakom od žbukanih ili kamenih. Svaki tip fasade procjenjujemo individualno.",
            },
        },
        {
            '@type': 'Question',
            name: "Koliko često trebam prati fasadu?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Preporučujemo pranje svake 2–3 godine, ovisno o položaju objekta i izloženosti vlazi. Sjevernije strane i objekti u sjeni drveća obično trebaju češće čišćenje.",
            },
        },
        {
            '@type': 'Question',
            name: "Koje dijelove Zagreba pokrivate?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Pokrivamo cijeli Zagreb i bližu okolicu, Špansko, Jarun, Trešnjevku, Maksimir, Dubravu, Sesvete, kao i Veliku Goricu, Samobor i Zaprešić.",
            },
        },
        {
            '@type': 'Question',
            name: "Trebam li nešto pripremiti prije vašeg dolaska?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Najvažnije je da imamo slobodan pristup fasadi te priključak za vodu i struju. Ostalu opremu i sredstva donosimo mi.",
            },
        },
        {
            '@type': 'Question',
            name: "Mogu li kombinirati pranje fasade s drugim uslugama?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da. Većina klijenata kombinira pranje fasade s čišćenjem okućnice, tlakavaca ili kamenih površina. Nudimo paketne cijene za kombinirane usluge u jednom terminu.",
            },
        },
        {
            '@type': 'Question',
            name: "Radite li pranje fasada na poslovnim objektima i zgradama?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da. Radimo kuće, manje zgrade, poslovne prostore i veće objekte, ovisno o pristupu i sigurnim uvjetima rada. Za veće fasade dolazimo na procjenu i dogovaramo izvedbu prema površini i složenosti objekta.",
            },
        },
        {
            '@type': 'Question',
            name: "Možete li oprati fasadu od 300 m² ili više?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da, veće fasade procjenjujemo individualno. Kod takvih objekata gledamo pristup, visinu, vrstu fasade, stupanj zaprljanosti i mogućnost kombiniranja s pranjem okućnice, prilaza ili terasa.",
            },
        },
        {
            '@type': 'Question',
            name: "Perete li ETICS fasade?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da, ali takve fasade zahtijevaju pažljiv pristup. Ne koristi se isti tlak za svaku površinu, tlak i sredstva prilagođavamo stanju fasade kako bismo smanjili rizik od oštećenja.",
            },
        },
        {
            '@type': 'Question',
            name: "Skida li pranje fasade alge i mahovinu?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da, uklanjamo zelene naslage, mahovinu, gljivice i tamne tragove koji se najčešće pojavljuju na vlažnim i sjenovitim stranama objekta.",
            },
        },
        {
            '@type': 'Question',
            name: "Treba li mi voda i struja na lokaciji?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Najčešće nam treba pristup vodi i struji. Ako uvjeti nisu standardni, najlakše je poslati slike i osnovne informacije pa ćemo reći što je potrebno za izvedbu.",
            },
        },
        {
            '@type': 'Question',
            name: "Radite li izvan Zagreba?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da, za veće objekte i komercijalne poslove izlazimo i izvan Zagrebačke županije, ovisno o veličini i isplativosti posla.",
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
            name: 'Pranje fasade',
            item: 'https://slaufismrk.com/usluge/pranje-fasade',
        }
    ],
};

export default function PranjeFasadePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceOfferSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ServicePage
                title="Pranje fasade u Zagrebu"
                titleHighlight="fasade"
                canonicalPath="/usluge/pranje-fasade"
                description="Profesionalno pranje i čišćenje fasada za kuće, zgrade i poslovne objekte u Zagrebu i okolici. Uklanjamo alge, mahovinu, gljivice, crne tragove i nakupljenu prljavštinu uz prilagođen tlak za žbukane, ETICS i druge fasadne površine. Za okvirnu cijenu možete poslati slike fasade na WhatsApp, za veće objekte dolazimo na lokaciju i dajemo jasnu procjenu bez obaveza."
                priceHint="od 5 €/m²"
                heroImage="/seo-results/pranje-fasade/poslije.png"
                heroImageAlt="Fasada kuće nakon profesionalnog čišćenja i uklanjanja algi u Zagrebu"
                heroHighlights={[
                    'Čišćenje algi, mahovine i tamnih tragova',
                    'Siguran tlak za žbukane i ETICS fasade',
                    'Kuće, zgrade i poslovni objekti',
                ]}
                resultsShowcase={{
                    beforeSrc: '/seo-results/pranje-fasade/prije.jpeg',
                    afterSrc: '/seo-results/pranje-fasade/poslije.png',
                    beforeAlt: 'Fasada kuće prije čišćenja s vidljivim algama i tamnim naslagama u Zagrebu',
                    afterAlt: 'Fasada kuće poslije profesionalnog pranja i čišćenja u Zagrebu',
                    title: 'Fasada prije i poslije pranja',
                    description: 'Projekt: pranje fasade obiteljske kuće u Zagrebu. Problem: alge, sivi sloj prljavštine i tamni tragovi. Metoda: prilagođen tlak i sredstvo za fasadu. Rezultat: vidljivo svjetlija i čišća fasada nakon jednog tretmana.',
                }}
                processSteps={[
                    {
                        title: 'Procjena',
                        description: 'Pošaljite 2–3 slike fasade na WhatsApp i javljamo vam okvirnu cijenu bez dolaska na lokaciju. Za veće objekte dolazimo osobno, pregledamo fasadu i dajemo jasnu ponudu prije nego krenemo s radom.',
                    },
                    {
                        title: 'Priprema',
                        description: 'Zaštićujemo prozore, vrata i okolne biljke. Pripremamo opremu i biramo odgovarajući tlak za vaš tip fasade.',
                    },
                    {
                        title: 'Čišćenje',
                        description: 'Profesionalnim peračem i ekološkim sredstvima uklanjamo alge, mahovinu, gljivice i tamne tragove. Svaki dio fasade pažljivo obrađujemo.',
                    },
                    {
                        title: 'Završna kontrola',
                        description: 'Pregledavamo cijelu opranu fasadu, ispremo ostatke sredstva i fotografiramo prije i poslije, da razliku vidite odmah.',
                    },
                ]}
                detailedContent={
                    <>
                        <h2>Zašto je pranje fasade važno?</h2>
                        <p>
                            Fasada je prvi dojam vašeg objekta. S vremenom se na njoj nakupljaju alge, mahovina, plijesni i
                            zagađenja iz zraka koji ne samo da narušavaju estetiku, nego mogu uzrokovati <strong>trajna oštećenja
                            fasadne boje i materijala</strong>. Zelene i crne mrlje postupno prodiru u površinu žbuke, a u
                            kombinaciji s vlagom mogu dovesti do ljuštenja boje i raspucavanja.
                        </p>
                        <p>
                            Redovito čišćenje fasade može pomoći u <strong>očuvanju fasadne boje i površinskog sloja</strong> jer
                            se alge, mahovina i prljavština uklanjaju prije nego što se dublje vežu za podlogu. Time se može
                            odgoditi potreba za bojanjem ili većom obnovom, ovisno o stanju fasade i uvjetima na lokaciji.
                            Naši klijenti u Zagrebu primjećuju kako čista fasada podiže ukupni dojam nekretnine, posebno
                            kod prodaje, iznajmljivanja ili poslovnih prostora.
                        </p>

                        <h2>Koji tipovi fasade se mogu prati?</h2>
                        <p>
                            Naš tim ima iskustvo s <strong>raznim tipovima fasada</strong> koje se koriste u Hrvatskoj:
                        </p>
                        <ul>
                            <li><strong>Žbukana fasada</strong>, najčešći tip u Zagrebu. Zahtijeva pažljivo podešavanje tlaka da se ne ošteti sloj žbuke.</li>
                            <li><strong>Stiropor (ETICS) fasada</strong>, termoizolacijski sustav zahtijeva posebnu pažnju i prilagođen tlak. Ne tretiramo ga na isti način kao beton ili kamen.</li>
                            <li><strong>Kamena fasada</strong>, prirodni kamen, travertin, obložni kamen. Za dublje čišćenje kamena pogledajte našu uslugu <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenja kamenih površina</Link>.</li>
                            <li><strong>Drvena fasada</strong>, oblaganje drvenim daskama zahtijeva niži tlak i specijalna sredstva. Više na stranici <Link href="/usluge/ciscenje-drvenih-povrsina">čišćenja drvenih površina</Link>.</li>
                        </ul>

                        <h2>Koliko košta pranje fasade?</h2>
                        <p>
                            Cijena pranja fasade ovisi o <strong>površini, stupnju zaprljanosti, visini objekta i pristupačnosti</strong>.
                            Okvirne cijene za Zagreb i okolicu:
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0 1.5rem' }}>
                            <thead>
                                <tr style={{ background: 'var(--color-surface, #f4f4f4)' }}>
                                    <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Površina fasade</th>
                                    <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Okvirna cijena</th>
                                    <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Napomena</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { size: '100 m²', price: 'od 500 €', note: 'manji objekti i dijelovi fasade' },
                                    { size: '200 m²', price: 'od 1.000 €', note: 'obiteljske kuće' },
                                    { size: '300 m²', price: 'od 1.500 €', note: 'veće kuće i objekti' },
                                    { size: '500 m²+', price: 'po procjeni', note: 'zgrade i poslovni objekti' },
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '10px 14px', fontWeight: 600 }}>{row.size}</td>
                                        <td style={{ padding: '10px 14px' }}>{row.price}</td>
                                        <td style={{ padding: '10px 14px', color: '#666', fontSize: '0.9em' }}>{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>
                            Cijena može varirati ovisno o visini objekta, pristupu vodi i struji, količini algi i mahovine,
                            vrsti fasade i potrebi za dodatnom zaštitom okolnih površina. Za točnu cijenu nudimo <strong>procjenu
                            na lokaciji</strong> bez obaveza. Detaljan pregled faktora koji utječu na cijenu pogledajte u
                            vodiču <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade u Zagrebu</Link>.
                        </p>

                        <h2>Radimo fasade svih veličina, od kuća do poslovnih objekata</h2>
                        <p>
                            Radimo fasade obiteljskih kuća, manjih zgrada, poslovnih prostora i većih objekata, ovisno o
                            pristupu i sigurnim uvjetima rada. Za veće komercijalne objekte dolazimo na procjenu i
                            dogovaramo izvedbu prema opsegu posla.
                        </p>

                        <h2>Pranje fasada za poslovne objekte, zgrade i veće površine</h2>
                        <p>
                            Osim obiteljskih kuća, čistimo fasade poslovnih prostora, lokala, stambenih zgrada,
                            ugostiteljskih objekata i većih privatnih nekretnina. Kod većih objekata najprije pregledamo
                            površinu, procijenimo pristup, stupanj zaprljanosti i potrebnu metodu čišćenja. Nakon toga
                            dajemo jasnu ponudu i dogovaramo termin koji što manje ometa korištenje objekta.
                        </p>
                        <ul>
                            <li>fasade poslovnih prostora i lokala</li>
                            <li>stambene zgrade i ulazi</li>
                            <li>kuće, vile i veće privatne nekretnine</li>
                            <li>objekti s algama, mahovinom i tamnim tragovima</li>
                            <li>kombinacija fasade, <Link href="/usluge/pranje-okucnice">okućnice</Link>, <Link href="/usluge/pranje-terasa">terasa</Link> i prilaza</li>
                            <li>mogućnost rada za veće klijente izvan Zagrebačke županije</li>
                        </ul>

                        <h2>Paket: pranje fasade, okućnice i prilaza</h2>
                        <p>
                            Ako želite kompletno osvježiti izgled nekretnine, fasadu možemo kombinirati s{' '}
                            <Link href="/usluge/pranje-okucnice">pranjem tlakavaca, okućnice</Link>, prilaza, terasa,
                            stepenica i kamenih površina. Ovo je najčešći izbor kod kuća, vila, poslovnih prostora i
                            objekata koji žele jak prije/poslije rezultat u jednom terminu, bez dodatnih termina i
                            organizacije. Za kombinirane usluge nudimo paketne cijene.
                        </p>
                        <p>
                            <Link href="/#kontakt">Zatražite paketnu procjenu</Link>
                        </p>

                        <h2>Koliko često trebam prati fasadu?</h2>
                        <p>
                            Preporučujemo profesionalno pranje fasade <strong>svake 2–3 godine</strong>. Učestalost ovisi o
                            nekoliko faktora:
                        </p>
                        <ul>
                            <li><strong>Orijentacija objekta</strong>, sjevernije strane brže akumuliraju mahovinu i alge jer dobivaju manje sunca.</li>
                            <li><strong>Blizina drveća</strong>, objekti u sjeni drveća trebaju češće čišćenje.</li>
                            <li><strong>Lokacija</strong>, objekti uz prometnice izloženiji su čaði i prašini.</li>
                            <li><strong>Boja fasade</strong>, svijetle fasade brže pokazuju prljavštinu.</li>
                        </ul>

                        <h2>Je li fasadu bolje oprati ili bojati?</h2>
                        <p>
                            Ako je fasada konstrukcijski zdrava, ali je vizualno zaprljana algama, mahovinom, crnim
                            tragovima ili prašinom, <strong>pranje je često prvi i isplativiji korak</strong> prije bojanja.
                            Nakon čišćenja se jasno vidi stvarno stanje površine i lakše je odlučiti treba li fasadu
                            samo oprati ili kasnije dodatno bojati.
                        </p>
                        <p><strong>Pranje fasade ima smisla kada:</strong></p>
                        <ul>
                            <li>fasada nije ispucala</li>
                            <li>boja se ne ljušti jako</li>
                            <li>problem su alge, mahovina, plijesan ili prljavština</li>
                            <li>želite brzo osvježiti izgled objekta</li>
                        </ul>
                        <p><strong>Bojanje je bolje kada:</strong></p>
                        <ul>
                            <li>fasada ima veća oštećenja</li>
                            <li>boja se ljušti na velikim površinama</li>
                            <li>postoje pukotine ili oštećenja završnog sloja</li>
                            <li>želite potpuno promijeniti boju objekta</li>
                        </ul>

                        <h2>Ekološki pristup čišćenju</h2>
                        <p>
                            Koristimo <strong>isključivo biorazgradiva sredstva za čišćenje</strong> koja su sigurna za
                            vrt, djecu i kućne ljubimce. Naša sredstva ne oštećuju biljke niti zagađuju tlo.
                            Visokotlačno pranje s ekološkim sredstvima jednako je učinkovito kao agresivna kemija,
                            ali bez štetnog utjecaja na okoliš.
                        </p>

                        <h2>Pranje fasade u Zagrebu i okolici</h2>
                        <p>
                            Najčešće radimo na području Zagreba i Zagrebačke županije. Brzo dolazimo u sve dijelove
                            grada, a za veće objekte i komercijalne projekte dogovaramo izlazak i izvan Zagrebačke
                            županije, ovisno o veličini i opsegu posla.
                        </p>
                        <ul>
                            <li><strong>Zapadni Zagreb:</strong> Špansko, Stenjevec, Podsused, Črnomerec, Jarun</li>
                            <li><strong>Centar i širi centar:</strong> Trešnjevka, Trnje, Maksimir</li>
                            <li><strong>Istočni Zagreb:</strong> Dubrava, Sesvete</li>
                            <li><strong>Južni Zagreb:</strong> Novi Zagreb, Velika Gorica</li>
                            <li><strong>Okolica:</strong> Samobor, Zaprešić</li>
                        </ul>

                        <h2>Zašto klijenti biraju Šlauf i Šmrk za pranje fasade?</h2>
                        <ul>
                            <li><strong>Stvarne prije/poslije fotografije</strong>, pokazujemo rezultate naših izvedbi, ne stock fotografije</li>
                            <li><strong>Procjena prije početka</strong>, nema rada napamet ni nejasne cijene</li>
                            <li><strong>Prilagođen tlak za tip fasade</strong>, ne tretiramo ETICS kao beton</li>
                            <li><strong>Brz odgovor na upite</strong>, odgovaramo u najkraćem roku</li>
                            <li><strong>Mogućnost paketne usluge</strong>, fasada, okućnica, prilaz i terasa u jednom terminu</li>
                            <li><strong>Zagreb i okolica</strong>, za veće objekte moguć dogovor i izvan županije</li>
                        </ul>
                    </>
                }
                features={[
                    {
                        title: 'Uklanjanje algi i mahovine',
                        description: 'Temeljito čistimo zelene naslage, alge i mahovinu koje se nakupljaju na sjevernim stranama fasade te uzrokuju dugoročna oštećenja.',
                        icon: <Droplets size={24} />,
                    },
                    {
                        title: 'Zaštita materijala',
                        description: 'Koristimo prilagođene tlakove i ekološka sredstva koja ne oštećuju fasadne boje, žbuku ni izolaciju.',
                        icon: <ShieldCheck size={24} />,
                    },
                    {
                        title: 'Brza izvedba',
                        description: 'Prosječnu obiteljsku kuću očistimo u jednom danu. Dolazimo s kompletnom opremom, a na lokaciji trebamo pristup vodi i struji.',
                        icon: <Clock size={24} />,
                    },
                    {
                        title: 'Ekološki pristup',
                        description: 'Naša sredstva za čišćenje potpuno su biorazgradiva i sigurna za vrt, djecu i kućne ljubimce.',
                        icon: <Leaf size={24} />,
                    },
                ]}
                commonProblems={[
                    {
                        title: 'Zelene naslage na fasadi',
                        description: 'Alge i mahovina koje rastu na vlažnim i sjenovitim dijelovima fasade. Posebno česte na sjevernoj strani objekta.',
                        icon: <Bug size={24} />,
                    },
                    {
                        title: 'Crne mrlje i plijesni',
                        description: 'Tamne mrlje uzrokovane gljivicama i zagađenjem iz zraka. Mogu se proširiti i uzrokovati trajne štete na žbuki.',
                        icon: <AlertTriangle size={24} />,
                    },
                    {
                        title: 'Ljuštenje boje',
                        description: 'Fasadna boja se ljušti zbog vlage zarobljene ispod sloja algi i prljavštine. Čišćenje je prvi korak prije ponovnog bojanja.',
                        icon: <Paintbrush size={24} />,
                    },
                    {
                        title: 'Kišne mrlje i potoci',
                        description: 'Tragovi curenja vode koji ostavljaju bijele ili sive mrlje na fasadi, posebno ispod prozorskih klupica.',
                        icon: <ThermometerSun size={24} />,
                    },
                ]}
                faq={[
                    {
                        question: 'Koliko košta visokotlačno pranje fasade?',
                        answer: 'Cijena ovisi o površini i stupnju zaprljanosti. Okvirni raspon je od 5 €/m². Za fasadu od 200 m² to je okvirno od 1.000 €. Za točnu cijenu dolazimo na procjenu lokacije.',
                    },
                    {
                        question: 'Hoće li visokotlačno pranje oštetiti moju fasadu?',
                        answer: 'Ne, koristimo profesionalnu opremu s prilagodljivim tlakom. ETICS fasade tretiramo nižim tlakom od žbukanih ili kamenih. Svaki tip fasade procjenjujemo individualno.',
                    },
                    {
                        question: 'Koliko često trebam prati fasadu?',
                        answer: 'Preporučujemo pranje svake 2–3 godine, ovisno o položaju objekta i izloženosti vlazi. Sjevernije strane i objekti u sjeni drveća obično trebaju češće čišćenje.',
                    },
                    {
                        question: 'Koje dijelove Zagreba pokrivate?',
                        answer: 'Pokrivamo cijeli Zagreb i bližu okolicu, Špansko, Jarun, Trešnjevku, Maksimir, Dubravu, Sesvete, kao i Veliku Goricu, Samobor i Zaprešić.',
                    },
                    {
                        question: 'Trebam li nešto pripremiti prije vašeg dolaska?',
                        answer: 'Najvažnije je da imamo slobodan pristup fasadi te priključak za vodu i struju. Ostalu opremu i sredstva donosimo mi.',
                    },
                    {
                        question: 'Mogu li kombinirati pranje fasade s drugim uslugama?',
                        answer: 'Da. Većina klijenata kombinira pranje fasade s čišćenjem okućnice, tlakavaca ili kamenih površina. Nudimo paketne cijene za kombinirane usluge u jednom terminu.',
                    },
                    {
                        question: 'Radite li pranje fasada na poslovnim objektima i zgradama?',
                        answer: 'Da. Radimo kuće, manje zgrade, poslovne prostore i veće objekte, ovisno o pristupu i sigurnim uvjetima rada. Za veće fasade dolazimo na procjenu i dogovaramo izvedbu prema površini i složenosti objekta.',
                    },
                    {
                        question: 'Možete li oprati fasadu od 300 m² ili više?',
                        answer: 'Da, veće fasade procjenjujemo individualno. Kod takvih objekata gledamo pristup, visinu, vrstu fasade, stupanj zaprljanosti i mogućnost kombiniranja s pranjem okućnice, prilaza ili terasa.',
                    },
                    {
                        question: 'Perete li ETICS fasade?',
                        answer: 'Da, ali takve fasade zahtijevaju pažljiv pristup. Ne koristi se isti tlak za svaku površinu, tlak i sredstva prilagođavamo stanju fasade kako bismo smanjili rizik od oštećenja.',
                    },
                    {
                        question: 'Skida li pranje fasade alge i mahovinu?',
                        answer: 'Da, uklanjamo zelene naslage, mahovinu, gljivice i tamne tragove koji se najčešće pojavljuju na vlažnim i sjenovitim stranama objekta.',
                    },
                    {
                        question: 'Treba li mi voda i struja na lokaciji?',
                        answer: 'Najčešće nam treba pristup vodi i struji. Ako uvjeti nisu standardni, najlakše je poslati slike i osnovne informacije pa ćemo reći što je potrebno za izvedbu.',
                    },
                    {
                        question: 'Radite li izvan Zagreba?',
                        answer: 'Da, za veće objekte i komercijalne poslove izlazimo i izvan Zagrebačke županije, ovisno o veličini i isplativosti posla.',
                    },
                ]}
                serviceAreas={[
                    'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                    'Stenjevec', 'Črnomerec', 'Trnje', 'Novi Zagreb', 'Podsused',
                    'Velika Gorica', 'Samobor', 'Zaprešić',
                ]}
                relatedServices={[
                    { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                    { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                    { title: 'Kemijsko čišćenje', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={18} /> },
                ]}
            />
        </>
    );
}
