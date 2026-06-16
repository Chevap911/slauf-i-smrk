import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Uklanjanje grafita u Zagrebu: zašto se isplati i kako to radimo | Šlauf i Šmrk',
    description: 'Zagreb je pun grafita po fasadama, izlozima i kamenu. Objašnjavamo zašto ih treba maknuti odmah, kako se skidaju bez oštećenja podloge i koliko košta.',
    alternates: { canonical: '/blog/uklanjanje-grafita-zagreb' },
    openGraph: {
        title: 'Uklanjanje grafita u Zagrebu: zašto se isplati i kako to radimo',
        description: 'Grafiti na fasadi snižavaju vrijednost zgrade i privlače nove. Kako ih skidamo s žbuke, kamena i stakla bez oštećenja podloge.',
        url: 'https://slaufismrk.com/blog/uklanjanje-grafita-zagreb',
        type: 'article',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Uklanjanje grafita u Zagrebu', item: 'https://slaufismrk.com/blog/uklanjanje-grafita-zagreb' },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Uklanjanje grafita u Zagrebu: zašto se isplati i kako to radimo',
        description: 'Zašto grafiti na fasadi nisu samo estetski problem, kako se sigurno skidaju s različitih podloga i koliko košta uklanjanje grafita u Zagrebu.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-06-16',
        dateModified: '2026-06-16',
        image: 'https://slaufismrk.com/prije-poslje/pranje-zida-terase-zagreb-poslje.jpeg',
        url: 'https://slaufismrk.com/blog/uklanjanje-grafita-zagreb',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Može li se grafit skinuti bez oštećenja fasade?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Može, ako se metoda prilagodi podlozi. Na žbuci i kamenu koristimo namjenska sredstva za otapanje boje i kontrolirani tlak ili toplu vodu, nikad puni tlak na osjetljivu žbuku. Cilj je izvući boju iz pora, a ostaviti podlogu netaknutu.',
                },
            },
            {
                '@type': 'Question',
                name: 'Vraćaju li se grafiti na isto mjesto?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Često da. Očišćen, vidljiv zid je meta za nove tagove. Zato nakon čišćenja nanosimo antigrafitni zaštitni premaz koji sljedeći put omogućuje brzo pranje bez ponovnog skupog tretmana.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta uklanjanje grafita u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cijena ovisi o veličini, podlozi, vrsti boje i visini. Najtočnije je da nam pošaljete fotografije na WhatsApp pa javimo okvirnu cijenu, a za veće plohe dolazimo na besplatnu procjenu.',
                },
            },
        ],
    };

    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Savjeti</span>
                        <h1>Uklanjanje grafita u Zagrebu: zašto se isplati i kako to radimo</h1>
                        <p className={styles.meta}>Objavljeno 16. lipnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Prošećite Trnjem, Trešnjevkom ili dijelom donjeg grada i teško je naći ulaz, trafostanicu ili
                            bočni zid bez nekog taga. Neki grafiti su murali koje je netko platio i koji imaju smisla. Većina
                            nije. Većina su nažvrljani potpisi preko fasade koju je netko prije par godina platio da se obnovi.
                            Vlasnik to gleda svaki dan, susjedi se naviknu, i onda zid godinama stoji ispisan.
                        </p>
                        <p>
                            Razumijemo zašto se odgađa. Ljudi pretpostave da je skidanje grafita skupo, da će ostati mrlja ili
                            da će se ionako brzo vratiti. Nešto od toga je točno, ali ne sve. Evo kako mi na to gledamo i zašto
                            ima smisla reagirati ranije nego kasnije.
                        </p>

                        <h2>Grafit nije samo ružan, on poziva nove</h2>
                        <p>
                            Postoji jednostavna logika koju vidimo stalno. Čim je jedan zid otagan i ostane takav, na njega
                            dođe drugi, pa treći. Ispisana fasada šalje poruku da se za zgradu nitko ne brine, a to je upravo
                            ono što traže oni koji crtaju po tuđem. Čist zid s zaštitom puno rjeđe postaje meta.
                        </p>
                        <p>
                            Za poslovni prostor to je još konkretnije. Izlog ili ulaz prekriven tagovima radi mušteriji prvi
                            dojam prije nego što je išla unutra. Za zgradu sa stanovima to je pitanje vrijednosti nekretnine,
                            čista, uredna fasada nosi drugačiju cijenu od one ispisane sprejom.
                        </p>

                        <h2>Zašto se grafit ne skida običnim pranjem</h2>
                        <p>
                            Sprej za grafite je napravljen da se uhvati i ostane. Boja uđe duboko u pore žbuke, kamena ili
                            betona. Ako uperite obični perač u zid, dobijete blijedu sjenu boje razmazanu po većoj površini i
                            oštećenu žbuku ispod. Zato grafit traži drugačiji pristup od obične prljavštine ili algi.
                        </p>
                        <p>
                            Posao se radi u koracima. Prvo se odredi podloga i vrsta boje, jer sprej, marker i lak se ne skidaju
                            isto. Onda se nanosi namjensko sredstvo koje otapa boju i izvlači je iz pora. Tek nakon toga ide
                            ispiranje, na osjetljivoj žbuci toplom vodom i nižim tlakom da se podloga ne ošteti, na tvrđem kamenu
                            jačim tlakom. Cilj je da nestane boja, a ne komad fasade s njom.
                        </p>

                        <h2>Antigrafitna zaštita: čistiš jednom, ne svake godine</h2>
                        <p>
                            Ovo je dio koji većina preskoči, a najviše štedi. Nakon što je zid čist, na njega se može nanijeti
                            zaštitni antigrafitni premaz. On stvori sloj koji sprej ne probija do podloge. Kad netko sljedeći
                            put nažvrlja po tom zidu, grafit se skida brzim pranjem, bez ponovnog skupog tretmana i bez rizika
                            za žbuku.
                        </p>
                        <p>
                            Za fasade uz prometne ulice, prizemlja zgrada i poslovne ulaze koji su stalna meta, zaštita se
                            isplati gotovo uvijek. Jednom platiš čišćenje i premaz, a poslije održavanje košta djelić toga.
                        </p>

                        <h2>Stambene zgrade u Zagrebu: dio troška se može vratiti</h2>
                        <p>
                            Za zgrade u zaštićenoj gradskoj jezgri postoji gradski program sufinanciranja uklanjanja grafita i
                            antigrafitne zaštite. Predstavnik suvlasnika ili upravitelj angažira izvođača, posao se plati iz
                            pričuve, a dio troška se vraća kroz program Grada. Ako ste predstavnik suvlasnika i zgrada vam je
                            ispisana, javite se pa vidimo zajedno što se može i kako to ide.
                        </p>

                        <h2>Koliko košta uklanjanje grafita</h2>
                        <p>
                            Iskreno, ne postoji jedna cijena za sve. Mali tag na glatkom zidu i cijela ispisana fasada od
                            grube žbuke su dva različita posla. Na cijenu utječe veličina, podloga, vrsta boje i visina na
                            kojoj je grafit. Najbrži put do točne brojke je da nam pošaljete dvije, tri fotografije na WhatsApp.
                            Javimo okvirnu cijenu isti dan, a za veće plohe dođemo na besplatnu procjenu.
                        </p>
                        <p>
                            Ako vas zanima kako pristupamo čišćenju različitih podloga, pogledajte i{' '}
                            <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje kamenih površina</Link> te{' '}
                            <Link href="/usluge/pranje-fasade">pranje fasade</Link>, jer se grafit najčešće nalazi upravo na
                            tim podlogama.
                        </p>

                        <h2>Imate grafit koji vam smeta?</h2>
                        <p>
                            Što duže grafit stoji, to dublje boja uđe i to teže ide dolje. Ako vam je zgrada, izlog ili
                            ograda ispisana, slikajte i pošaljite nam. Recimo vam pošteno može li se skinuti čisto i koliko bi
                            koštalo.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Grafit na fasadi ili izlogu?</h3>
                            <p>Pošaljite slike na WhatsApp i javimo okvirnu cijenu. Za veće plohe i zgrade dolazimo na besplatnu procjenu.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={16} /> 095 844 2806
                                </a>
                                <Link href="/usluge/pranje-fasade" className={styles.ctaBtnSecondary}>
                                    Pogledajte pranje fasade <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
