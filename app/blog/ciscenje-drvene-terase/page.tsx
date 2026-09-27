import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import ArticleQuote from '@/components/ArticleQuote/ArticleQuote';
import { OG_IMAGE } from '@/lib/seo';

const SLUG = '/blog/ciscenje-drvene-terase';

export const metadata: Metadata = {
    title: 'Čišćenje drvene terase: pranje ili brušenje? | Šlauf i Šmrk',
    description:
        'Posivjela drvena terasa najčešće ne treba brušenje. Kada je dovoljno pranje i koliko košta: 6–8 €/m² (na 10. 9. 2026.: 6–8 €/m²).',
    keywords: [
        'čišćenje drvene terase',
        'održavanje drvene terase',
        'brušenje drvene terase',
        'posivjela drvena terasa',
        'pranje drvene terase Zagreb',
    ],
    alternates: { canonical: SLUG },
    openGraph: {
        title: 'Čišćenje drvene terase: kada je dovoljno pranje, a kada treba brusiti',
        description: 'Zašto drvo posivi, kako ga čistimo niskim tlakom, što napraviti nakon čišćenja i koliko to košta.',
        url: `https://slaufismrk.com${SLUG}`,
        type: 'article',
        images: [OG_IMAGE],
    },
};

const faq = [
    {
        q: 'Koliko košta čišćenje drvene terase?',
        a: 'Čišćenje drvenih površina kod nas je 6–8 €/m² (cijena na 10. 9. 2026.: 6–8 €/m²). Cijena ovisi o vrsti drva, stanju i zaprljanosti, a točnu potvrđujemo nakon besplatne procjene.',
    },
    {
        q: 'Hoće li pranje pod tlakom oštetiti drvenu terasu?',
        a: 'Ne ako se radi kako treba. Drvo peremo niskim tlakom od 60 do 80 bara i mekanom četkom, uz sredstvo za drvo. Visoki tlak otvara drvena vlakna i zato ga na drvu ne koristimo.',
    },
    {
        q: 'Treba li drvenu terasu brusiti ili je dovoljno oprati?',
        a: 'Ako je drvo samo sivo, zeleno ili klizavo, dovoljno je pranje. Brušenje ima smisla kad je površina hrapava i puna iverja ili kad se stari lak ljušti i mora se skinuti do kraja.',
    },
    {
        q: 'Što napraviti s drvenom terasom nakon čišćenja?',
        a: 'Nauljiti je ili lazurirati unutar 48 sati od čišćenja, dok su pore drva otvorene i upijaju zaštitu. Tako boja i zaštita traju puno dulje.',
    },
    {
        q: 'Čistite li i WPC terase?',
        a: 'Da. WPC, kompozit drva i plastike, čistimo prilagođenim tlakom. Treba manje održavanja od prirodnog drva, ali i on s vremenom skuplja prljavštinu i mahovinu.',
    },
];

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Čišćenje drvene terase', item: `https://slaufismrk.com${SLUG}` },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Čišćenje drvene terase: pranje ili brušenje i koliko košta',
    description:
        'Zašto drvena terasa posivi, kada je dovoljno pranje, a kada brušenje, kako čistimo drvo niskim tlakom i što napraviti nakon čišćenja.',
    author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
    publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
    datePublished: '2026-09-27',
    dateModified: '2026-09-27',
    url: `https://slaufismrk.com${SLUG}`,
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
    })),
};

export default function BlogArticle() {
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
                        <span className={styles.category}>Vodič</span>
                        <h1>Čišćenje drvene terase: pranje ili brušenje i koliko košta</h1>
                        <p className={styles.meta}>Objavljeno 27. rujna 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Posivjela drvena terasa izgleda kao da je treba brusiti. Najčešće ne treba. Sivilo je tanki
                            površinski sloj, a ispod njega je drvo iste boje kao kad je terasa postavljena. Kad se taj
                            sloj opere, drvo se vrati bez skidanja ijednog milimetra materijala.
                        </p>

                        <h2>Koliko košta čišćenje drvene terase</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Čišćenje drvene terase, ograde ili pergole</span>
                                <strong>6–8 €/m²<span className="sidrena">Cijena na 10. 9. 2026.: 6–8 €/m²</span></strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Procjena na lokaciji</span>
                                <strong>besplatna</strong>
                            </div>
                        </div>
                        <p>
                            Gdje ste unutar raspona ovisi o vrsti drva, stanju i koliko je terasa zarasla. Sve naše cijene
                            su u <Link href="/cjenik">cjeniku</Link>.
                        </p>

                        <ArticleQuote
                            location="blog-drvena-terasa"
                            service="terrace"
                            title="Koliko bi čišćenje vaše drvene terase koštalo?"
                            whatsappText="Pozdrav, zanima me čišćenje drvene terase. Šaljem slike za procjenu."
                        />

                        <h2>Zašto drvo posivi i pozeleni</h2>
                        <p>
                            Sunce razgrađuje prirodna ulja u drvu, pa površina gubi boju i postaje siva. Na mjestima gdje
                            se drvo sporo suši, u sjeni i uz zid, rastu alge i mahovina. Tada terasa postaje zelena i
                            klizava po kiši, a vlaga koja stoji u drvu ubrzava truljenje.
                        </p>

                        <h2>Pranje ili brušenje</h2>
                        <p>Pranje je dovoljno kad je drvo:</p>
                        <ul>
                            <li>sivo, ali glatko pod rukom</li>
                            <li>zeleno od algi ili mahovine</li>
                            <li>klizavo kad je mokro</li>
                        </ul>
                        <p>
                            Brušenje ima smisla kad je površina hrapava i puna iverja ili kad se stari lak ljušti i mora se
                            skinuti do kraja prije novog premaza. Čišćenje ne skida sloj drva, brušenje skida. Zato je
                            čišćenje brže, jeftinije i poštuje izvorne dimenzije dasaka. Treba li vašoj terasi brušenje,
                            reći ćemo vam na procjeni.
                        </p>

                        <h2>Kako čistimo drvenu terasu</h2>
                        <p>
                            Prvo prepoznamo vrstu drva i stanje terase, pa biramo tlak i sredstvo. Peremo niskim tlakom od
                            60 do 80 bara i mekanom četkom, uz sredstvo za drvo koje skida sivilo i biološke naslage.
                            Visoki tlak na drvu ne koristimo jer otvara vlakna i ubrzava propadanje, čak i kad odmah
                            izgleda dobro. Na kraju sve temeljito isperemo čistom vodom. Sredstva su biorazgradiva, pa ne
                            štete travi ni biljkama uz terasu.
                        </p>
                        <p>
                            Čistimo i ograde, pergole, vrtni namještaj i WPC terase. Cijelu uslugu opisali smo na stranici{' '}
                            <Link href="/usluge/ciscenje-drvenih-povrsina">čišćenje drvenih površina</Link>.
                        </p>

                        <h2>Nakon čišćenja: ulje ili lazura</h2>
                        <p>
                            Očišćeno drvo je spremno za zaštitu. Preporučujemo nauljivanje ili lazuriranje unutar 48 sati,
                            dok su pore otvorene i upijaju sredstvo. Ako ga preskočite, terasa će brže ponovno posivjeti.
                            Možemo vam preporučiti ulje ili lazuru za vašu vrstu drva.
                        </p>

                        <h2>Koliko često</h2>
                        <p>
                            Jednom godišnje, najbolje u proljeće, prije sezone. Tako se alge i mahovina ne stignu uvući
                            duboko u drvo, a svako sljedeće čišćenje je kraće. Ako terasa nije drvena nego kamena ili
                            betonska, pogledajte vodič{' '}
                            <Link href="/blog/koliko-kosta-pranje-terase-zagreb">koliko košta pranje terase</Link>.
                        </p>

                        <h2>Česta pitanja</h2>
                        {faq.map(({ q, a }) => (
                            <div key={q}>
                                <h3>{q}</h3>
                                <p>{a}</p>
                            </div>
                        ))}

                        <div className={styles.ctaBox}>
                            <h3>Posivjela drvena terasa?</h3>
                            <p>Pošaljite par slika i reći ćemo vam treba li pranje ili brušenje. Procjena je besplatna.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> +385 95 844 2806
                                </a>
                                <Link href="/usluge/ciscenje-drvenih-povrsina" className={styles.ctaBtnSecondary}>
                                    Čišćenje drvenih površina <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
