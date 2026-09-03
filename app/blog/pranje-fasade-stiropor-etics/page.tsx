import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Pranje fasade stiropor i ETICS: što smijete i cijena',
    description: 'Stiropor fasada (ETICS) ne podnosi visoki tlak. Jedina sigurna metoda čišćenja, cijena i kako prepoznati je li vaša fasada ETICS.',
    alternates: { canonical: '/blog/pranje-fasade-stiropor-etics' },
    openGraph: {
        title: 'Pranje fasade stiropor i ETICS: što smijete, što ne i cijena',
        description: 'ETICS fasada ne podnosi visoki tlak. Jedina sigurna metoda čišćenja, cijena i savjeti za vlasnike stiropor fasada u Zagrebu.',
        url: 'https://slaufismrk.com/blog/pranje-fasade-stiropor-etics',
        type: 'article',
        images: [OG_IMAGE],
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
            name: 'Blog',
            item: 'https://slaufismrk.com/blog',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Pranje fasade stiropor i ETICS',
            item: 'https://slaufismrk.com/blog/pranje-fasade-stiropor-etics',
        }
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Pranje fasade stiropor i ETICS: što smijete, što ne i cijena',
        description: 'Vodič za sigurno čišćenje stiropor fasada (ETICS sustav). Zašto visoki tlak oštećuje ETICS, koja je jedina ispravna metoda i koliko košta u Zagrebu.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-05-26',
        dateModified: '2026-05-26',
        image: 'https://slaufismrk.com/prije-poslje/fasada-poslje.png',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Može li se stiropor fasada prati visokotlačnim peračem?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ne. Visoki tlak iznad 50 bara može probiti završni sloj žbuke debljine svega 1,5 do 3 mm. Jednom kad vlaga uđe u stiropor, slijedi skuplja sanacija. Za ETICS fasade jedina sigurna metoda je softwash, tj. nisko-tlačno kemijsko čišćenje.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta pranje stiropor fasade u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pranje ETICS fasade u Zagrebu kreće se od 5 €/m². Za obiteljsku kuću od 200 m² fasade to je od 1.000 €. Točna cijena ovisi o stupnju zaraženosti algama ili gljivicama i dostupnosti površine.',
                },
            },
            {
                '@type': 'Question',
                name: 'Kako prepoznati je li moja fasada ETICS (stiropor)?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Kucnite šakom lagano po fasadi. Ako čujete šuplji zvuk, fasada je ETICS. Ako zvuči punim i teškim zvukom, radi se o klasičnoj žbuci ili kamenu. Kuće građene od 1995. nadalje u velikoj su većini ETICS sustav.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko dugo traje čišćenje ETICS fasade softwash metodom?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Obiteljska kuća od 200 m² fasade obično se odradi za 4 do 6 sati. Uključuje nanošenje biocidnog sredstva, čekanje 15 do 30 minuta i ispiranje niskim tlakom.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko dugo ostaje ETICS fasada čista nakon softwash tretmana?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Na fasadama koje nisu u trajnoj sjeni ili uz drveće, rezultat traje 3 do 5 godina. Fasade na sjevernoj strani ili uz guste grmove mogu trebati tretman svakih 2 do 3 godine.',
                },
            },
            {
                '@type': 'Question',
                name: 'Je li opasno čistiti ETICS fasadu samome?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Rent-a-car visokotlačni perači rade 80 do 150 bara, što je previše za ETICS. Greška se možda neće odmah vidjeti, ali vlaga koja uđe u stiropor počne raditi štetu kroz zimu. Sanacija probijene ETICS fasade na kući od 150 m2 može koštati od 15.000 €.',
                },
            },
        ],
    };

    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Savjeti</span>
                        <h1>Pranje fasade stiropor i ETICS: što smijete, što ne i cijena</h1>
                        <p className={styles.meta}>Objavljeno 26. svibnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Stiropor fasada izgleda čvrsto, ali završni sloj koji vidite debeo je svega 1,5 do 3 mm.
                            Rent-a-car visokotlačni perač radi 80 do 150 bara. To su loše vijesti za vašu izolaciju.
                            Evo što smijete raditi, što ne i koliko košta ispravno čišćenje.
                        </p>

                        <h2>Što je ETICS sustav i zašto je osjetljiv?</h2>
                        <p>
                            ETICS (External Thermal Insulation Composite System) je toplinska izolacija prilijepljena
                            izvana na zid, najčešće stiropor debljine 8 do 12 cm, presvučena armirnom mrežicom i
                            tankim završnim slojem dekorativne žbuke. U Hrvatskoj je ovaj sustav standard u gradnji
                            od sredine 1990-ih. Obnova energetske učinkovitosti kojom su se preuređivali stari
                            stambeni blokovi gotovo isključivo je rađena ETICS sustavom.
                        </p>
                        <p>
                            Problem je taj završni sloj. Akrilatna, silikonska ili silikatna žbuka kojom je fasada
                            presvučena ima debljinu sličnu debeloj kartonskoj kutiji. Pod visokim tlakom puca,
                            raspuca se ili se odljušti. Jednom kad vlaga prodre do stiropore, led koji se formira
                            zimi širi pukotine i ubrzava raspad. Ono što je trebalo biti čišćenje postaje uvod u
                            sanaciju vrijednu desetaka tisuća eura.
                        </p>

                        <h2>Jedina sigurna metoda: softwash</h2>
                        <p>
                            Softwash je nisko-tlačno kemijsko čišćenje. Pumpa radi na 20 do 50 bara, otprilike kao
                            jači vrtni crijevo, ali kombinirana je s biocidnim sredstvima koja ubijaju alge, gljivice
                            i mahovinu do korijena. Sredstvo se nanosi na fasadu, ostavi da djeluje 15 do 30 minuta,
                            potom ispere.
                        </p>
                        <p>
                            Ključna prednost nije samo sigurnost za ETICS. Softwash uklanja organizam s korijenom,
                            ne samo s površine. Fasada ostaje čista 3 do 5 godina, dok mehanički oprana fasada
                            počne zeleniti za godinu-dvije jer spore ostaju u porama žbuke.
                        </p>
                        <p>
                            Više o razlici između softwash i visokotlačnog pranja pišemo u zasebnom vodiču:{' '}
                            <Link href="/blog/softwash-ili-visokotlacno-pranje-fasade">
                                softwash ili visokotlačno pranje fasade
                            </Link>.
                        </p>

                        <h2>Kako prepoznati je li vaša fasada ETICS?</h2>
                        <p>
                            Kucnite šakom lagano po fasadi na više mjesta. Šuplje, mekše "bum" zvuk znači ETICS.
                            Puni, tvrdi zvuk znači klasična žbuka na ciglarskom ili betonskom zidu.
                        </p>
                        <p>
                            Drugi znak: pogledajte prozorske okvire. Na ETICS fasadama prozori su često "utonuli"
                            u zid za 10-tak centimetara jer izolacijski sloj izlazi pred originalnu građevinu.
                            Na klasičnoj žbuci prozori su u ravnini s fasadom ili blago izbočeni.
                        </p>
                        <p>
                            Kuće i zgrade građene od 1995. nadalje po urbanim zonama Zagreba, Sesveta, Zaprešića
                            i Velike Gorice u velikoj su većini ETICS. Starije kuće iz 1970-ih ili 1980-ih obično
                            imaju klasičnu žbuku, osim ako su prošle energetsku obnovu.
                        </p>

                        <h2>Usporedba: ETICS fasada vs. klasična žbuka</h2>
                        <div className={styles.comparisonTable}>
                            <div className={styles.comparisonHeader}>
                                <span>Karakteristika</span>
                                <span>ETICS (stiropor)</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Završni sloj</span>
                                <strong>1,5 do 3 mm žbuke</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Maksimalni tlak pranja</span>
                                <strong>Max 50 bara</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Preporučena metoda</span>
                                <strong>Isključivo softwash</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Rizik od oštećenja</span>
                                <strong>Visok pri pogrešnoj metodi</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Sanacija ako se ošteti</span>
                                <strong>15.000 do 40.000 € za kuću</strong>
                            </div>
                        </div>

                        <h2>Što radimo na stiropor fasadama korak po korak?</h2>
                        <p>
                            Svaki posao počinje pregledom fasade. Provjerimo debljinu završnog sloja, stupanj
                            zaraženosti algama ili gljivicama i stanje u kritičnim zonama oko olukovnih cijevi
                            i prozorskih klupica gdje se vlaga najdulje zadržava. Više o pristupu i cijenama
                            pogledajte na stranici o{' '}
                            <Link href="/usluge/pranje-fasade">pranju fasade u Zagrebu</Link>.
                        </p>
                        <p>
                            Biocidno sredstvo koje koristimo certificirano je za primjenu na ETICS sustavima.
                            Nakon nanošenja i aktivnog djelovanja, fasada se ispere na 30 do 40 bara. Za
                            obiteljsku kuću od 200 m² cijeli posao traje 4 do 6 sati.
                        </p>
                        <p>
                            Ako postoje oštećeni dijelovi završnog sloja koja je otkrio vizualni pregled,
                            kažemo to vlasniku odmah. Čišćenje na oštećenoj površini produbljuje problem.
                            U tom slučaju preporučamo sanaciju prije pranja.
                        </p>

                        <h2>Cijena pranja stiropor fasade</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>ETICS fasada (softwash)</span>
                                <strong>od 5 €/m²</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Obiteljska kuća 150 m² fasade</span>
                                <strong>od 750 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Obiteljska kuća 250 m² fasade</span>
                                <strong>od 1.250 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Besplatna procjena na licu mjesta</span>
                                <strong>Uključeno</strong>
                            </div>
                        </div>
                        <p>
                            Točna cijena ovisi o stupnju zaraženosti, visini objekta i dostupnosti površine.
                            Za detaljan vodič kroz sve cijene pogledajte{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link>.
                        </p>

                        <h2>Što se dogodi ako koristite pogrešnu metodu?</h2>
                        <p>
                            Greška se ne mora odmah vidjeti. Sitne pukotine u završnom sloju nastaju tek pod
                            povećalom. Vlaga uđe u stiropor, a led koji se formira prve zime širi mikro-otvore.
                            Sljedećeg proljeća vidite mjehure i odljušćivanje. Treće godine dolazi ekipa
                            za sanaciju fasade, ne za čišćenje.
                        </p>
                        <p>
                            Sanacija ETICS fasade na obiteljskoj kući od 150 m² iznosi 15.000 do 40.000 €,
                            ovisno o tome koliko slojeva treba skinuti i jesu li u igri i termička oštećenja
                            stiropore ispod. Softwash tretman koji košta od 750 € postaje iznimno isplativa
                            prevencija.
                        </p>

                        <h2>Često postavljana pitanja</h2>

                        <h3>Može li se stiropor fasada prati visokotlačnim peračem?</h3>
                        <p>
                            Ne. Visoki tlak iznad 50 bara može probiti završni sloj žbuke debljine svega
                            1,5 do 3 mm. Jednom kad vlaga uđe u stiropor, slijedi skuplja sanacija. Za
                            ETICS fasade jedina sigurna metoda je softwash.
                        </p>

                        <h3>Koliko košta pranje stiropor fasade?</h3>
                        <p>
                            Pranje ETICS fasade kreće se od 5 €/m². Za obiteljsku kuću od 200 m² fasade
                            to je od 1.000 €. Točna cijena ovisi o stupnju zaraženosti i dostupnosti površine.
                        </p>

                        <h3>Kako prepoznati je li moja fasada ETICS?</h3>
                        <p>
                            Kucnite šakom lagano po fasadi. Šuplje, mekše zvuk znači ETICS. Puni tvrdi zvuk
                            znači klasična žbuka. Kuće građene od 1995. nadalje su u velikoj većini ETICS sustav.
                        </p>

                        <h3>Koliko dugo ostaje čisto?</h3>
                        <p>
                            Na fasadama koje nisu u trajnoj sjeni, softwash tretman drži 3 do 5 godina.
                            Sjever ili sjenovite lokacije mogu trebati tretman svakih 2 do 3 godine.
                        </p>

                        <h3>Je li opasno čistiti ETICS fasadu samome?</h3>
                        <p>
                            Rent-a-car perači rade 80 do 150 bara, što je previše za ETICS. Šteta možda
                            neće biti vidljiva odmah, ali vlaga koja uđe u stiropor radi kroz zimu. Sanacija
                            probijene ETICS fasade na kući od 150 m² može koštati od 15.000 €.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Imate stiropor fasadu i ne znate odakle krenuti?</h3>
                            <p>Dođemo, pogledamo i kažemo vam točno što je potrebno. Besplatna procjena, bez obveze.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> +385 95 844 2806
                                </a>
                                <Link href="/#kontakt" className={styles.ctaBtnSecondary}>
                                    Ispunite formu <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
