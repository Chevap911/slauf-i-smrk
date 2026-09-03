import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, RefreshCw, Building2, FileText, Zap, AlertTriangle } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, TreeDeciduous, Waves } from 'lucide-react';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Pranje poslovnih objekata Zagreb, skladišta i hale',
    description: 'Vanjsko čišćenje poslovnih objekata u Zagrebu: fasade, parkirališta, skladišta i hale. Redoviti ugovori i rad izvan radnog vremena.',
    alternates: { canonical: '/usluge/poslovni-objekti' },
    openGraph: {
        title: 'Pranje Poslovnih Objekata Zagreb | Šlauf i Šmrk',
        description: 'Vanjsko čišćenje poslovnih objekata: fasade, parkirališta, skladišta i hale. Redoviti ugovori i račun za tvrtke.',
        url: 'https://slaufismrk.com/usluge/poslovni-objekti',
        images: [OG_IMAGE],
    },
};

const serviceOfferSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://slaufismrk.com/usluge/poslovni-objekti#service-offer',
    name: 'Pranje poslovnih objekata u Zagrebu',
    serviceType: 'Vanjsko čišćenje poslovnih objekata',
    description: 'Profesionalno vanjsko čišćenje poslovnih objekata u Zagrebu: fasade, parkirišta, skladišta, hale i uredske zgrade. Redoviti ugovori za klijente koji trebaju stalan uredan izgled.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Šlauf i Šmrk',
        url: 'https://slaufismrk.com',
        telephone: '+385958442806',
        address: {
            '@type': 'PostalAddress',
            streetAddress: 'Primoštenska ulica 11',
            addressLocality: 'Zagreb',
            postalCode: '10000',
            addressRegion: 'Zagreb',
            addressCountry: 'HR',
        },
        areaServed: ['Zagreb', 'Zagrebačka županija', 'Velika Gorica', 'Samobor', 'Zaprešić'],
    },
    areaServed: ['Zagreb', 'Zagrebačka županija'],
};



const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: "Radite li za tvrtke s više poslovnih lokacija?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da. Možemo pokriti više lokacija jednim ugovorom. Dogovaramo jedinstvene uvjete, raspored i fakturiranje za sve objekte.",
            },
        },
        {
            '@type': 'Question',
            name: "Možete li raditi izvan radnog vremena ili vikendom?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da. Planiramo dolazak prema vašem rasporedu, rano ujutro, navečer ili vikendom. Nema potrebe za angažiranjem vašeg osoblja.",
            },
        },
        {
            '@type': 'Question',
            name: "Izdajete li račun za tvrtke?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da, svim poslovnim klijentima izdajemo račun koji možete koristiti kao poslovni trošak. Obrt smo izvan sustava PDV-a, pa na računu nema PDV-a. Uvjete plaćanja dogovaramo individualno.",
            },
        },
        {
            '@type': 'Question',
            name: "Koliko košta čišćenje poslovnog objekta?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Cijena ovisi o tipu i veličini objekta, površinama koje treba čistiti i učestalosti. Za konkretnu ponudu dolazimo na procjenu ili je možete zatražiti putem WhatsAppa.",
            },
        },
        {
            '@type': 'Question',
            name: "Koliko često preporučujete čišćenje?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Za većinu poslovnih objekata preporučujemo 2 do 4 puta godišnje, ovisno o lokaciji, prometu i vrsti djelatnosti. Logistika i industrija obično trebaju češće čišćenje od uredskih parkova.",
            },
        },
        {
            '@type': 'Question',
            name: "Čistite li i unutarnje površine?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Naša specijalizacija su vanjske površine, fasade, parkirišta, rampe i eksterijeri. Za unutarnja čišćenja hala i podova javite nam se s detaljima pa ćemo vidjeti što možemo ponuditi.",
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
            name: 'Čišćenje poslovnih objekata',
            item: 'https://slaufismrk.com/usluge/poslovni-objekti',
        }
    ],
};

export default function PoslovniObjektiPage() {
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
                title="Pranje poslovnih objekata u Zagrebu"
                titleHighlight="poslovnih objekata"
                canonicalPath="/usluge/poslovni-objekti"
                description="Vanjsko čišćenje poslovnih objekata, skladišta, hala i uredskih zgrada u Zagrebu i okolici. Čistimo fasade, parkirišta, rampe, istovarne zone i sve vanjske površine. Nudimo redovite ugovore za klijente kojima je stalan uredan izgled prioritet, bez potrebe za internom organizacijom i praćenjem termina."
                priceHint="po dogovoru"
                processSteps={[
                    {
                        title: 'Procjena objekta',
                        description: 'Dolazimo na lokaciju, procjenjujemo sve vanjske površine i opseg radova. Nudimo jednu jasnu ponudu bez skrivenih stavki.',
                    },
                    {
                        title: 'Dogovor termina',
                        description: 'Radimo po dogovoru, izvan radnog vremena, vikendom ili kada vam najmanje smeta. Nema potrebe za prisutnošću vašeg osoblja.',
                    },
                    {
                        title: 'Čišćenje',
                        description: 'Profesionalnom opremom čistimo sve dogovorene površine: fasadu, parkirište, rampe, terase, ploče i ostale vanjske elemente.',
                    },
                    {
                        title: 'Izvještaj i faktura',
                        description: 'Nakon svakog čišćenja šaljemo fotografije rezultata i račun za tvrtke. Redoviti klijenti imaju fiksni raspored bez potrebe za ponovnim dogovorom.',
                    },
                ]}
                detailedContent={
                    <>
                        <h2>Vanjsko čišćenje kao redovna usluga za firme</h2>
                        <p>
                            Poslovni objekti zahtijevaju redovito vanjsko čišćenje, ne jednom u nekoliko godina, nego
                            <strong> sezonski ili po dogovorenom rasporedu</strong>. Fasade, parkirišta, rampe i ulazne
                            površine direktno utječu na prvi dojam koji objekt ostavlja na vaše klijente, partnere i zaposlenike.
                        </p>
                        <p>
                            Šlauf i Šmrk nudi <strong>redovite ugovore za čišćenje vanjskih površina</strong> poslovnih
                            objekata u Zagrebu i Zagrebačkoj županiji. Radimo s vlasnicima objekata, property menadžerima,
                            facility menadžerima i upraviteljima nekretnina koji trebaju pouzdanog partnera s kojim jednom
                            dogovore uvjete, i onda nema brige.
                        </p>

                        <h2>Što čistimo na poslovnim objektima?</h2>
                        <ul>
                            <li><strong>Fasade</strong>, uredske zgrade, poslovni centri, maloprodajni objekti. Uklanjamo alge, mahovinu i zagađenja.</li>
                            <li><strong>Parkirišta i prometne površine</strong>, uklanjamo ulja, gume, boje i dugotrajne naslage.</li>
                            <li><strong>Istovarne zone i rampe</strong>, skladišne rampe, betonske ploče, žljebovi i drenaže.</li>
                            <li><strong>Hale i industrijski objekti</strong>, vanjske zidove, podove ispred hale, cestovne pristupne površine.</li>
                            <li><strong>Ulazi, terase i hodnike</strong>, reprezentativni ulazi, vanjski hodnici i zajednički prostori zgrada.</li>
                            <li><strong>Kamene i betonske površine</strong>, popločavanja, tlakavci, kameni elementi oko objekta.</li>
                        </ul>
                        <p>
                            Više o specifičnim uslugama: <Link href="/usluge/pranje-fasade">pranje fasada</Link>, <Link href="/usluge/pranje-okucnice">čišćenje okućnice i parkirišta</Link>, <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje kamenih površina</Link>.
                        </p>

                        <h2>Redoviti ugovor, bez organizacije s vaše strane</h2>
                        <p>
                            Jednom dogovorimo raspored, uvjete i cijenu, a onda mi dolazimo po rasporedu, bez potrebe
                            za vašim angažmanom. Redoviti klijenti dobivaju:
                        </p>
                        <ul>
                            <li><strong>Fiksni raspored</strong> čišćenja (2× godišnje, 4× godišnje ili po dogovoru)</li>
                            <li><strong>Prioritetne termine</strong>, vaš objekt ima prednost u zakazivanju</li>
                            <li><strong>Konzistentne cijene</strong>, bez iznenađenja i naknadnih troškova</li>
                            <li><strong>Automatsko slanje računa</strong> nakon svake usluge</li>
                            <li><strong>Foto-dokumentacija</strong> rezultata za vašu evidenciju</li>
                        </ul>

                        <h2>Radimo kada vama odgovara</h2>
                        <p>
                            Znamo da poslovni objekti moraju funkcionirati. Zato radimo <strong>izvan vašeg radnog
                            vremena</strong>, rano ujutro, navečer ili vikendom. Nema potrebe da zaustavljate operacije,
                            premiještate automobile ili organizirate osoblje za nadzor.
                        </p>

                        <h2>Račun za tvrtke i poslovni trošak</h2>
                        <p>
                            Svim poslovnim klijentima izdajemo <strong>račun za tvrtke</strong> koji možete koristiti kao poslovni
                            trošak. Obrt smo izvan sustava PDV-a, pa na računu nema PDV-a. Za redovite ugovore dogovaramo
                            uvjete plaćanja prema potrebama vaše firme.
                        </p>

                        <h2>Koje vrste poslovnih objekata opslužujemo?</h2>
                        <ul>
                            <li>Logistički centri i skladišta</li>
                            <li>Poslovni i uredski parkovi</li>
                            <li>Maloprodajni centri i showroomi</li>
                            <li>Industrijska postrojenja i hale</li>
                            <li>Benzinske postaje i autoservisi</li>
                            <li>Hoteli, restorani i ugostiteljski objekti</li>
                            <li>Stambene zgrade i zajednički prostori</li>
                            <li>Property menadžment, više objekata na jednom ugovoru</li>
                        </ul>

                        <h2>Zašto firme u Zagrebu biraju Šlauf i Šmrk?</h2>
                        <ul>
                            <li><strong>Pouzdanost</strong>, dolazimo u dogovoreno vrijeme, bez potrebe za podsjetnicima</li>
                            <li><strong>Transparentnost</strong>, procjena, izvedba i faktura bez skrivenih troškova</li>
                            <li><strong>Rezultati</strong>, šaljemo fotografije prije i poslije svakog čišćenja</li>
                            <li><strong>Fleksibilnost</strong>, radimo vikendom i izvan radnog vremena</li>
                            <li><strong>Pokrivamo cijeli Zagreb i Zagrebačku županiju</strong></li>
                        </ul>

                        <h2>Kako dogovoriti čišćenje poslovnog objekta?</h2>
                        <p>
                            Najbrže putem WhatsApp poruke s opisom objekta i željenom učestalošću, ili ispunite kratki
                            upit i mi se javljamo. Za veće objekte dolazimo na besplatnu procjenu.
                        </p>
                        <p>
                            Ako vas zanima landing page s detaljima za B2B klijente koji traže konkretnu ponudu, pogledajte{' '}
                            <Link href="/lp/poslovni-objekti">ponudu za poslovne objekte</Link>.
                        </p>
                    </>
                }
                features={[
                    {
                        title: 'Redoviti ugovori',
                        description: 'Jednom dogovorimo uvjete i raspored, vi ne razmišljate više o organizaciji čišćenja. Mi dolazimo po planu.',
                        icon: <RefreshCw size={24} />,
                    },
                    {
                        title: 'Račun za tvrtke',
                        description: 'Izdajemo poslovne račune prikladne kao poslovni trošak. Fiksne cijene bez naknadnih iznenađenja.',
                        icon: <FileText size={24} />,
                    },
                    {
                        title: 'Rad izvan radnog vremena',
                        description: 'Radimo rano ujutro, navečer i vikendom, bez ometanja operacija, premještanja vozila ili angažiranja osoblja.',
                        icon: <Clock size={24} />,
                    },
                    {
                        title: 'Foto-dokumentacija',
                        description: 'Nakon svake usluge šaljemo fotografije rezultata. Imate trajnu evidenciju stanja objekta.',
                        icon: <Droplets size={24} />,
                    },
                    {
                        title: 'Veliki kapacitet',
                        description: 'Opremljeni smo za čišćenje velikih površina, parking, hale, istovarne zone i vanjske fasade zgrada.',
                        icon: <Building2 size={24} />,
                    },
                    {
                        title: 'Brz odgovor na upite',
                        description: 'Odgovaramo na poslovne upite u najkraćem roku. Za hitne slučajeve nazovite direktno.',
                        icon: <Zap size={24} />,
                    },
                ]}
                commonProblems={[
                    {
                        title: 'Zaprljana fasada poslovnog objekta',
                        description: 'Alge, sivi slojevi i zagađenja na fasadi šalju loš signal klijentima i posjetiteljima. Redovito čišćenje osigurava stalan profesionalan izgled.',
                        icon: <Building2 size={24} />,
                    },
                    {
                        title: 'Parkirišta s uljnim mrljama',
                        description: 'Ulja, gume i dugotrajne naslage na parkirištu i istarnim zonama stvaraju sigurnosni i estetski problem.',
                        icon: <AlertTriangle size={24} />,
                    },
                    {
                        title: 'Skladišne rampe i istovarne zone',
                        description: 'Visoko prometne zone brzo akumuliraju nečistoće koje se teško uklanjaju bez profesionalne opreme.',
                        icon: <ShieldCheck size={24} />,
                    },
                    {
                        title: 'Neredovito i neplanirano čišćenje',
                        description: 'Bez dogovorenog partnera, čišćenje se odgađa dok problem ne postane vidljiv. Redoviti ugovor to rješava.',
                        icon: <RefreshCw size={24} />,
                    },
                ]}
                faq={[
                    {
                        question: 'Radite li za tvrtke s više poslovnih lokacija?',
                        answer: 'Da. Možemo pokriti više lokacija jednim ugovorom. Dogovaramo jedinstvene uvjete, raspored i fakturiranje za sve objekte.',
                    },
                    {
                        question: 'Možete li raditi izvan radnog vremena ili vikendom?',
                        answer: 'Da. Planiramo dolazak prema vašem rasporedu, rano ujutro, navečer ili vikendom. Nema potrebe za angažiranjem vašeg osoblja.',
                    },
                    {
                        question: 'Izdajete li račun za tvrtke?',
                        answer: 'Da, svim poslovnim klijentima izdajemo račun koji možete koristiti kao poslovni trošak. Obrt smo izvan sustava PDV-a, pa na računu nema PDV-a. Uvjete plaćanja dogovaramo individualno.',
                    },
                    {
                        question: 'Koliko košta čišćenje poslovnog objekta?',
                        answer: 'Cijena ovisi o tipu i veličini objekta, površinama koje treba čistiti i učestalosti. Za konkretnu ponudu dolazimo na procjenu ili je možete zatražiti putem WhatsAppa.',
                    },
                    {
                        question: 'Koliko često preporučujete čišćenje?',
                        answer: 'Za većinu poslovnih objekata preporučujemo 2 do 4 puta godišnje, ovisno o lokaciji, prometu i vrsti djelatnosti. Logistika i industrija obično trebaju češće čišćenje od uredskih parkova.',
                    },
                    {
                        question: 'Čistite li i unutarnje površine?',
                        answer: 'Naša specijalizacija su vanjske površine, fasade, parkirišta, rampe i eksterijeri. Za unutarnja čišćenja hala i podova javite nam se s detaljima pa ćemo vidjeti što možemo ponuditi.',
                    },
                ]}
                serviceAreas={[
                    'Jankomir', 'Žitnjak', 'Lučko', 'Buzin', 'Sesvete', 'Rugvica',
                    'Velika Gorica', 'Zaprešić', 'Samobor', 'Dugo Selo', 'Črnkovec',
                    'Remetinec', 'Novi Zagreb', 'Zagreb, Industrijska zona',
                ]}
                relatedServices={[
                    { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Building2 size={18} /> },
                    { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                    { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                    { title: 'Pranje bazena', href: '/usluge/pranje-bazena', icon: <Waves size={18} /> },
                ]}
            />
        </>
    );
}
