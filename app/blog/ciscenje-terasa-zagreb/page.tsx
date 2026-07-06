import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Čišćenje terasa Zagreb: alge, mahovina, crne naslage | Šlauf i Šmrk',
    description: 'Zašto terasa pozeleni i što stvarno uklanja alge, mahovinu i crne naslage s pločica. Vodič kroz profesionalno čišćenje terasa u Zagrebu, s primjerima.',
    alternates: { canonical: '/blog/ciscenje-terasa-zagreb' },
    openGraph: {
        title: 'Čišćenje terasa u Zagrebu: alge, mahovina i crne naslage (2026.)',
        description: 'Što stvarno uklanja alge i mahovinu s terase, zašto kućni perač nije dovoljan i kako izgleda profesionalno čišćenje terasa u Zagrebu.',
        url: 'https://slaufismrk.com/blog/ciscenje-terasa-zagreb',
        type: 'article',
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
            name: 'Čišćenje terasa Zagreb',
            item: 'https://slaufismrk.com/blog/ciscenje-terasa-zagreb',
        }
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Čišćenje terasa u Zagrebu: alge, mahovina i crne naslage (2026.)',
        description: 'Vodič o profesionalnom čišćenju vanjskih terasa u Zagrebu: što se skuplja na terasama, kako se čiste različiti materijali i zašto kućni perač ne rješava problem.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-05-18',
        dateModified: '2026-05-18',
        image: 'https://slaufismrk.com/prije-poslje/terasa-leggiero-poslje-1.jpeg',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Kako se čisti terasa od algi i mahovine?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Profesionalno čišćenje terasa od algi i mahovine uključuje predtretman biorazgradivim sredstvom koje omekšava naslage, potom visokotlačno pranje rotacijskim surface cleanerom koji ravnomjerno pere cijelu površinu bez zebra-efekta. Kućni aparat može ukloniti gornji sloj, ali ne uništava korijen algi u fugama.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko traje čišćenje terase?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Terasu do 60 m² čistimo za 2 sata. Veće terase ili jako zaprljane površine s dubokim algama u fugama mogu trajati 3-4 sata zbog predtretmana.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta čišćenje terasa u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cijena čišćenja terasa u Zagrebu kreće se od 200 € za terase do 100 m², ovisno o materijalu i stupnju zaprljanosti. Drvene terase su nešto skuplje (6-8 €/m²) zbog posebnog tretmana.',
                },
            },
            {
                '@type': 'Question',
                name: 'Mogu li se čistiti keramičke pločice na terasi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Da. Keramičke pločice čistimo prilagođenim tlakom i kemijom koja uklanja naslage bez oštećenja glazure. Posebnu pažnju posvećujemo fugama gdje se skuplja najviše prljavštine i algi.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko često treba čistiti vanjsku terasu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Jednom godišnje za terase na suncu, a svake 6-8 mjeseci za sjenovite terase ili terase ispod drveća gdje alge i mahovina rastu brže zbog vlage.',
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
                        <h1>Čišćenje terasa u Zagrebu: alge, mahovina i crne naslage</h1>
                        <p className={styles.meta}>Objavljeno 18. svibnja 2026. &bull; Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Zeleni sloj na rubu pločice. Crne pruge u fugama. Terasa koja je bila svijetla, a sad izgleda kao da
                            nikad nije ni bila čista. To nisu kozmetički problemi, to su alge, mahovina i biofilm koji rastu
                            svake sezone i jedini način da ih se stvarno riješi je profesionalno čišćenje terasa.
                        </p>
                        <p>
                            Ovo je vodič o tome što se skuplja na terasama, zašto kućni perač nije dovoljan i kako izgleda
                            pravo <Link href="/usluge/pranje-terasa">čišćenje terasa</Link> u Zagrebu.
                        </p>

                        <h2>Što se skuplja na terasama i zašto</h2>
                        <p>
                            Vanjska terasa izložena je kiši, prašini, UV zrakama i organskom materijalu koji donosi vjetar.
                            Na poroznim podlogama kao što su kamen, beton i fuge između pločica, ti se elementi zadržavaju
                            i stvaraju idealne uvjete za rast živih organizama.
                        </p>
                        <p>
                            Najčešći problemi koje vidimo na terasama u Zagrebu i okolici:
                        </p>
                        <ul>
                            <li><strong>Zelene alge</strong>, tanki sloj koji se javlja na svim vrstama podloge, posebno u sjeni i uz zidove</li>
                            <li><strong>Mahovina</strong>, raste u vlažnijim fugama i na sjenovitim dijelovima, puno teže se uklanja od algi</li>
                            <li><strong>Crni biofilm</strong>, kombinacija bakterija, gljivica i prašine koja se taloži u porama materijala</li>
                            <li><strong>Naslage od grila i hrane</strong>, masne mrlje koje privlače dodatnu prljavštinu</li>
                            <li><strong>Vapnenačke naslage</strong>, bijeli talog od kišnice na tamnim pločicama</li>
                        </ul>

                        <h2>Zašto kućni perač ne rješava problem</h2>
                        <p>
                            Standardni kućni aparati rade s protokom 8-10 litara vode u minuti. Dovoljno da smočiš površinu i
                            makneš labave naslage. Nije dovoljno da ubiješ korijen algi u porama materijala ili duboko u fugama.
                        </p>
                        <p>
                            Naša profesionalna oprema radi s protokom 15-25 litara u minuti, s rotacijskim surface cleanerom
                            koji pere ravnomjerno. Rezultat vidite odmah: terasa je uniformno čista, bez zebra-efekta koji
                            ostavljaju kućni aparati, i bez prskanja prljavštine po fasadi i staklu.
                        </p>
                        <p>
                            Uz to, za terase s dubokim algama u fugama radimo predtretman biorazgradivim sredstvom koje
                            omekšava naslage prije pranja. Bez tog koraka, visoki tlak ukloni vidljivi sloj, ali alge se
                            vraćaju za 3-4 tjedna.
                        </p>

                        <h2>Kako izgleda profesionalno čišćenje terasa</h2>

                        <h3>Procjena materijala i zaprljanosti</h3>
                        <p>
                            Svaka terasa je drugačija. Keramičke pločice, prirodni kamen, beton i drvo zahtijevaju različit
                            pritisak i različitu kemiju. Na procjeni gledamo tip materijala, stanje fuga, prisutnost algi i
                            biofilma, te dostupnost površine. Tek tada određujemo cijenu.
                        </p>

                        <h3>Predtretman naslaga</h3>
                        <p>
                            Na tvrdokornim algama, mahovini i crnim naslagama nanosimo sredstvo koje razgrađuje organske
                            naslage. Kontaktno vrijeme je 10-20 minuta, ovisno o debljini sloja. Ovaj korak odlučuje
                            koliko dugo ostaje čisto nakon pranja.
                        </p>

                        <h3>Visokotlačno pranje</h3>
                        <p>
                            Surface cleaner (rotacijska glava) peru ravnomjerno cijelu površinu bez pruga. Za rubove,
                            fuge i spojeve uz zid koristimo odgovarajuće nastavke koji čiste precizno bez oštećenja.
                        </p>

                        <h3>Završna kontrola</h3>
                        <p>
                            Provjeravamo odvode, spojeve i rubove uz ogradu. Na kraju fotografiramo rezultat.
                        </p>

                        <h2>Čišćenje terasa po materijalu</h2>

                        <h3>Keramičke pločice</h3>
                        <p>
                            Najčešći materijal na balkonima i terasama u stanovima i kućama. Čiste se prilagođenim tlakom
                            koji ne oštećuje glazuru. Poseban fokus na fuge gdje se skuplja 80% prljavštine.
                        </p>

                        <h3>Kamene terase</h3>
                        <p>
                            Prirodni kamen (travertin, granit, pješčenjak) je porozan i osjetljiviji od keramike. Previsoki
                            tlak otvara pore i ubrzava upijanje buduće prljavštine. Koristimo nižu temperaturu i duže
                            kontaktno sredstvo za čišćenje.
                        </p>

                        <h3>Betonske terase i opločnici</h3>
                        <p>
                            Beton i betonske ploče su otporni na visoki tlak. Alge i mahovina se uklanjaju brže nego na
                            kamenu, ali je važno posvijestiti fugiranje nakon pranja jer isprani pijesak treba biti zamijenjen.
                        </p>

                        <h3>Drvene i WPC terase</h3>
                        <p>
                            Drvo je jedini materijal na kojem visoki tlak radikalno šteti, otvara vlakna i ubrzava
                            propadanje. Za drvene terase i WPC podloge koristimo poseban pristup s niskim tlakom i
                            specijalnim sredstvima za drvo. Detalje o tome nalazite na stranici{' '}
                            <Link href="/usluge/ciscenje-drvenih-povrsina">čišćenja drvenih površina</Link>.
                        </p>

                        <h2>Koliko dugo ostaje čisto nakon profesionalnog čišćenja</h2>
                        <p>
                            Na sunčanim terasama, uz redovito brisanje i bez zadržavanja vlage: 12-18 mjeseci.
                            Na sjenovitim terasama ispod drveća ili uz vlažne zidove: 6-9 mjeseci.
                        </p>
                        <p>
                            Naslage se vraćaju brže ako fuge ostanu prazne nakon pranja. Preporučujemo fugiranje kvarcnim
                            pijeskom uz svako veće čišćenje, to je zaštitni sloj koji usporava rast algi i mahovine.
                        </p>

                        <h2>Čišćenje terase kao dio uređenja okućnice</h2>
                        <p>
                            Većina klijenata kombinira čišćenje terase s{' '}
                            <Link href="/usluge/pranje-okucnice">pranjem okućnice</Link> ili{' '}
                            <Link href="/usluge/pranje-fasade">pranjem fasade</Link> u jednom dolasku.
                            Logistika se dijeli, cijena po uslugu pada, a cijeli vanjski prostor izgleda uredno odjednom.
                        </p>
                        <p>
                            Ako vas zanima samo cijena po kvadraturi, sve detalje nalazite u postu{' '}
                            <Link href="/blog/koliko-kosta-pranje-terase-zagreb">koliko košta pranje terase u Zagrebu</Link>.
                        </p>

                        <h2>Često postavljana pitanja</h2>

                        <h3>Kako se čisti terasa od algi i mahovine?</h3>
                        <p>
                            Predtretmanom biorazgradivim sredstvom koji omekšava naslage, potom visokotlačnim pranjem
                            rotacijskim surface cleanerom. Kućni aparat može ukloniti gornji sloj, ali ne uništava
                            korijen u fugama, zato se alge brzo vraćaju.
                        </p>

                        <h3>Koliko traje čišćenje terase?</h3>
                        <p>
                            Terasu do 60 m² čistimo za 2 sata. Jako zaprljane terase s dubokim algama u fugama
                            mogu trajati 3-4 sata zbog predtretmana.
                        </p>

                        <h3>Mogu li se čistiti keramičke pločice na terasi?</h3>
                        <p>
                            Da. Keramičke pločice čistimo prilagođenim tlakom koji ne oštećuje glazuru.
                            Posebno se fokusiramo na fuge gdje se skuplja najviše naslaga.
                        </p>

                        <h3>Koliko često treba čistiti vanjsku terasu?</h3>
                        <p>
                            Jednom godišnje za terase na suncu. Svake 6-8 mjeseci za sjenovite terase ili
                            terase ispod drveća gdje alge rastu brže zbog stalne vlage.
                        </p>

                        <h3>Čistite li i balkone u stambenim zgradama?</h3>
                        <p>
                            Da. Balkoni i terase u zgradama redovit su dio posla. Za više stanova u zgradi
                            postoji grupna ponuda s nižom cijenom po stanu.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Zatražite besplatnu procjenu</h3>
                            <p>Dolazimo, pregledamo terasu i damo točnu cijenu. Bez obaveze.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> 095 844 2806
                                </a>
                                <Link href="/#kontakt" className={styles.ctaBtnSecondary}>
                                    Ispunite formu <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.related}>
                            <h3>Možda vas zanima i:</h3>
                            <ul>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-terase-zagreb">
                                        Koliko košta pranje terase u Zagrebu? Cijena 2026.
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-fasade">
                                        Koliko košta pranje fasade? Čišćenje fasade cijena 2026.
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/znakovi-da-fasadi-treba-pranje">
                                        5 znakova da vašoj fasadi hitno treba dubinsko pranje
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
