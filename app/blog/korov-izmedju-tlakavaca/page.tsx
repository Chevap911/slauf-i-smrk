import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Korov i trava između kocki i tlakavaca: rješenje | Šlauf i Šmrk',
    description: 'Korov između betonskih kocki se uvijek vraća ako se samo počupa. Pokazujemo na stvarnom poslu kako čistimo fuge i čime usporavamo ponovni rast.',
    alternates: { canonical: '/blog/korov-izmedju-tlakavaca' },
    openGraph: {
        title: 'Korov između kocki i tlakavaca: čišćenje dvorišta u Velikoj Gorici',
        description: 'Stvarni posao: kako čistimo korov i mahovinu iz fuga tlakavaca i čime usporavamo da se vrati.',
        url: 'https://slaufismrk.com/blog/korov-izmedju-tlakavaca',
        type: 'article',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Korov između tlakavaca', item: 'https://slaufismrk.com/blog/korov-izmedju-tlakavaca' },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Korov između kocki i tlakavaca: kako smo očistili dvorište u Velikoj Gorici',
        description: 'Stvarni posao iz okolice Zagreba. Kako čistimo korov i mahovinu iz fuga tlakavaca i čime usporavamo ponovni rast.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-06-01',
        dateModified: '2026-06-01',
        image: 'https://slaufismrk.com/prije-poslje/ciscenje-poda-terase-zagreb-poslje.jpeg',
        url: 'https://slaufismrk.com/blog/korov-izmedju-tlakavaca',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Kako trajno ukloniti korov između betonskih kocki?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Čupanje korova rješava problem na par tjedana. Mi ispiremo fuge visokim tlakom da izvadimo korijen i zemlju, a zatim preporučujemo novi kvarcni pijesak u fuge koji usporava ponovni rast. Za jaču zarazu dodajemo tretman prije pranja.',
                },
            },
            {
                '@type': 'Question',
                name: 'Zašto se korov vraća između tlakavaca?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Korov raste iz sjemena i zemlje koja se nakupi u fugama. Ako se fuge isprazne i ostanu otvorene, sjeme se ponovno uhvati. Zato fuge nakon pranja punimo kvarcnim pijeskom, to je zaštitni sloj koji otežava rast.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta pranje tlakavaca i dvorišta u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pranje tlakavaca i okućnice kreće od 4 €/m². Fugiranje kvarcnim pijeskom je dodatna stavka, okvirno 1,50 do 2,50 €/m². Točnu cijenu dajemo nakon procjene.',
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
                        <span className={styles.category}>Naš posao</span>
                        <h1>Korov između kocki i tlakavaca: kako smo očistili dvorište u Velikoj Gorici</h1>
                        <p className={styles.meta}>Objavljeno 1. lipnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Dvorište u Velikoj Gorici, betonske kocke položene prije osam godina. Vlasnica nam je rekla da
                            svako proljeće čupa korov iz fuga, a do ljeta je sve opet zeleno. Kad smo došli, fuge su bile
                            pune trave, mahovine i zemlje, a na sjevernoj strani uz ogradu kocke su bile potpuno sive.
                        </p>

                        <h2>Zašto čupanje korova ne pomaže</h2>
                        <p>
                            Korov između kocki ne raste iz betona nego iz zemlje i sjemena koje se s godinama nakupi u fugama.
                            Kad ga počupate, korijen i zemlja ostaju, pa novo sjeme odmah ima gdje. Zato se vraća svake sezone.
                            Da bi prestalo, fuga mora biti čista do dna, a onda zatvorena.
                        </p>

                        <h2>Kako smo očistili dvorište</h2>
                        <p>
                            Prvo smo prošli cijelu površinu visokim tlakom i isprali fuge do dna, izvadili korijen, mahovinu i
                            staru zemlju. Tu izađe nevjerojatna količina prljavštine, voda je bila smeđa. Kocke su se ispod
                            sivila vratile na originalnu boju, vlasnica nije mogla vjerovati da je to isti beton.
                        </p>
                        <p>
                            Nakon što se površina osušila, napunili smo fuge novim kvarcnim pijeskom. To je ključan korak koji
                            mnogi preskoče. Prazne fuge znače da se korov vraća dvostruko brže. Pijesak zatvara fugu i
                            usporava rast. Dvorište od oko 90 m² bilo je gotovo u jednom danu.
                        </p>

                        <h2>Što preporučujemo da korov ne dođe tako brzo</h2>
                        <p>
                            Uvijek savjetujemo fugiranje kvarcnim pijeskom uz svako veće čišćenje. Nije obavezno i ne želi ga
                            svatko, ali razlika je velika. Bez novog pijeska čistili biste ponovno za godinu, s pijeskom
                            površina ostaje uredna puno dulje.
                        </p>

                        <h2>Koliko to košta</h2>
                        <p>
                            Pranje tlakavaca i okućnice kreće od 4 €/m². Fugiranje kvarcnim pijeskom je dodatna stavka,
                            okvirno 1,50 do 2,50 €/m². Detaljan pregled imate u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb">koliko košta pranje okućnice i tlakavaca</Link>,
                            a uslugu na stranici <Link href="/usluge/pranje-tlakavaca">pranje tlakavaca</Link> i{' '}
                            <Link href="/usluge/pranje-okucnice">pranje okućnice</Link>.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Korov i sivilo u dvorištu?</h3>
                            <p>Pošaljite slike dvorišta na WhatsApp i javimo okvirnu cijenu. Dolazimo na besplatnu procjenu.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={16} /> 095 844 2806
                                </a>
                                <Link href="/usluge/pranje-tlakavaca" className={styles.ctaBtnSecondary}>
                                    Usluga pranja tlakavaca <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
