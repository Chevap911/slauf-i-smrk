import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import ArticleQuote from '@/components/ArticleQuote/ArticleQuote';

const SLUG = '/blog/obnova-kamene-terase-bez-zamjene-ploca';
const IMG = '/blog/kamena-terasa-sljeme';
const OG = {
    url: `${IMG}/og-kamena-terasa-sljeme.jpg`,
    width: 1200,
    height: 630,
    alt: 'Svijetla kamena terasa kuće podno Sljemena nakon pranja, s betonskim teglama uz ogradu',
};

export const metadata: Metadata = {
    title: 'Kamena terasa: čišćenje umjesto zamjene | Šlauf i Šmrk',
    description:
        'Vlasnica kuće iz 80-ih podno Sljemena htjela je mijenjati ploče na terasi. Oprali smo kamen, stepenice i stazu. Pogledajte prije i poslije.',
    keywords: [
        'čišćenje kamene terase',
        'pranje kamene terase',
        'obnova stare terase',
        'čišćenje kamenih ploča',
        'pranje kamenih stepenica',
        'čišćenje kamena Zagreb',
    ],
    alternates: { canonical: SLUG },
    openGraph: {
        title: 'Htjela je mijenjati ploče. Terasu smo oprali i izgleda kao prije 40 godina',
        description:
            'Kamena terasa, stepenice i staza uz kuću iz 80-ih podno Sljemena. Stvarne fotografije prije i poslije pranja.',
        url: `https://slaufismrk.com${SLUG}`,
        type: 'article',
        images: [OG],
    },
};

const faq = [
    {
        q: 'Može li se stara kamena terasa očistiti bez zamjene ploča?',
        a: 'U većini slučajeva da. Tamni sloj na svijetlom kamenu je naslaga prljavštine, mahovine i lišajeva, a ne boja samog kamena. Kad se ta naslaga skine, kamen se vrati na izvornu boju. Zamjena ima smisla tek kad su ploče napukle, klimaju se ili su mrlje ušle duboko u kamen.',
    },
    {
        q: 'Koliko košta čišćenje kamene terase?',
        a: 'Čišćenje kamenih površina kod nas je 5–7 €/m² (cijena na 10. 9. 2026.: 5–7 €/m²). Gdje ste unutar raspona ovisi o zaprljanosti, pristupu i veličini površine, a točnu cijenu potvrđujemo nakon besplatne procjene.',
    },
    {
        q: 'Hoće li pranje pod tlakom oštetiti kamen?',
        a: 'Neće ako je tlak prilagođen kamenu. Prvo nanosimo sredstvo koje otpušta naslagu, a tek onda peremo, pa ne treba jak mlaz. Previsok tlak može izbiti površinu mekšeg kamena, zato ga ne koristimo.',
    },
    {
        q: 'Kako da kamena terasa ostane svijetla nakon pranja?',
        a: 'Pomaže impregnacija nakon pranja jer zatvori pore i usporava ponovni rast mahovine. Na sjenovitim terasama isplati se pranje jednom godišnje, prije nego se naslaga stigne uvući u pore.',
    },
];

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Kamena terasa: čišćenje umjesto zamjene', item: `https://slaufismrk.com${SLUG}` },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Kamena terasa iz 80-ih: čišćenje umjesto zamjene ploča',
    description:
        'Stvarni posao podno Sljemena. Kamena terasa, stepenice i staza uz kuću iz 80-ih bile su potamnjele, vlasnica je planirala zamjenu ploča. Pranjem smo vratili izvornu boju kamena.',
    author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
    publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
    datePublished: '2026-09-27',
    dateModified: '2026-09-27',
    image: `https://slaufismrk.com${IMG}/kamena-terasa-poslije-ciscenja-sljeme.jpg`,
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

function Par({ prije, poslije }: { prije: [string, string, string]; poslije: [string, string, string] }) {
    return (
        <div className={styles.imageRow}>
            <figure className={styles.figure}>
                <Image src={`${IMG}/${prije[0]}.jpg`} alt={prije[1]} width={901} height={1600} className={styles.figureImg} loading="lazy" />
                <figcaption>{prije[2]}</figcaption>
            </figure>
            <figure className={styles.figure}>
                <Image src={`${IMG}/${poslije[0]}.jpg`} alt={poslije[1]} width={901} height={1600} className={styles.figureImg} loading="lazy" />
                <figcaption>{poslije[2]}</figcaption>
            </figure>
        </div>
    );
}

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
                        <span className={styles.category}>Naš posao</span>
                        <h1>Kamena terasa iz 80-ih: čišćenje umjesto zamjene ploča</h1>
                        <p className={styles.meta}>Objavljeno 27. rujna 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Kuća iz 80-ih, podno Sljemena. Terasa od svijetlog kamena koja je nekad bila gotovo bijela,
                            a s godinama je potamnila u sivo. Vlasnica je donijela odluku: mijenjamo ploče. Prije nego
                            što je zvala kamenoresca, javila se nama.
                        </p>

                        <figure className={styles.figure}>
                            <Image
                                src={`${IMG}/kamena-terasa-poslije-ciscenja-sljeme.jpg`}
                                alt="Svijetla kamena terasa s betonskim teglama nakon pranja, kuća podno Sljemena"
                                width={1600}
                                height={901}
                                className={styles.figureImg}
                                priority
                            />
                            <figcaption>Ista terasa nakon pranja. Nijedna ploča nije zamijenjena.</figcaption>
                        </figure>

                        <h2>Kako je izgledalo prije</h2>
                        <p>
                            Tamni sloj ležao je preko cijele terase, stepenica i staze uz kuću. Na nekim pločama se već
                            ljuštio, pa se ispod vidio svijetli kamen i sve je izgledalo šareno. Tu je bio odgovor na
                            pitanje treba li mijenjati ploče. Kamen ispod bio je zdrav, samo prekriven.
                        </p>

                        <Par
                            prije={['kamene-stepenice-prije-ciscenja', 'Tamne i fleškave kamene stepenice uz potporni zid prije čišćenja', 'Stepenice prije. Sivi sloj preko cijele površine.']}
                            poslije={['kamene-stepenice-poslije-ciscenja', 'Iste kamene stepenice nakon čišćenja, svijetle i ujednačene', 'Iste stepenice poslije. Boja kamena je vraćena.']}
                        />

                        <ArticleQuote
                            location="blog-kamena-terasa"
                            service="terrace"
                            title="Stara terasa? Saznajte cijenu prije nego mijenjate ploče"
                            whatsappText="Pozdrav, imam staru kamenu terasu. Šaljem slike za procjenu."
                        />

                        <h2>Zašto svijetli kamen potamni</h2>
                        <p>
                            Svijetli kamen je porozan. U pore ulazi prašina, a na mjestima gdje dugo ostaje vlažno počnu
                            rasti mahovina i lišajevi. Ova terasa ima sjenu od palmi i visokog potpornog zida, pa se kamen
                            sporo suši i naslaga se svake godine malo podebljala. Nakon četrdeset godina to više ne izgleda
                            kao prljavština nego kao boja kamena.
                        </p>
                        <p>
                            Zato je važno razlikovati naslagu od oštećenja. Naslaga se pere. Oštećen kamen se mijenja.
                        </p>

                        <Par
                            prije={['kamena-staza-uz-kucu-prije-ciscenja', 'Kamena staza uz crvenu fasadu kuće, tamna s bijelim mrljama prije čišćenja', 'Staza uz kuću prije. Bijele mrlje su mjesta gdje je naslaga već otpala.']}
                            poslije={['kamena-staza-uz-kucu-poslije-ciscenja', 'Ista kamena staza uz kuću nakon čišćenja, svijetla i jednolična', 'Ista staza poslije. Kamen je jednolične boje od ruba do ruba.']}
                        />

                        <h2>Što smo radili</h2>
                        <p>
                            Kod kamena radimo uvijek istim redom. Prvo pogledamo kakav je kamen i koliko podnosi. Onda
                            nanesemo sredstvo koje otpušta naslagu, pustimo ga da djeluje i tek onda peremo tlakom
                            prilagođenim tom kamenu. Dovoljno jako za naslagu, dovoljno nježno da ne izbije površinu.
                            Sredstva su biorazgradiva, pa biljkama oko terase ne štete.
                        </p>
                        <p>
                            Osim terase oprali smo stepenice, stazu uz kuću, asfaltnu stazu do ulaza i betonske tegle.
                            Kad je sve oko terase čisto, razlika se vidi s ulice.
                        </p>

                        <figure className={styles.figure}>
                            <Image
                                src={`${IMG}/kamena-terasa-tijekom-pranja.jpg`}
                                alt="Kamena terasa tijekom pranja, voda nosi tamnu naslagu s ploča"
                                width={901}
                                height={1600}
                                className={styles.figureImg}
                                loading="lazy"
                            />
                            <figcaption>Terasa tijekom pranja. Voda nosi sloj koji se skupljao godinama.</figcaption>
                        </figure>

                        <Par
                            prije={['kut-kamene-terase-prije-ciscenja', 'Kut kamene terase uz kameni zid, sive ploče prije čišćenja', 'Kut uz zid prije. Najviše sjene, najdeblji sloj.']}
                            poslije={['kut-kamene-terase-poslije-ciscenja', 'Isti kut kamene terase nakon čišćenja, svijetle ploče u sjeni palme', 'Isti kut poslije.']}
                        />

                        <Par
                            prije={['betonska-tegla-prije-ciscenja', 'Betonska tegla s narančastim i crnim naslagama tijekom pranja', 'Betonska tegla prije.']}
                            poslije={['betonska-tegla-poslije-ciscenja', 'Ista betonska tegla nakon čišćenja, svijetla', 'Ista tegla poslije.']}
                        />

                        <h2>Rečenica koju pamtimo</h2>
                        <p>
                            Kad je vlasnica izašla na terasu, rekla je: „Skoro me šlag strefil.“ Terasa je izgledala kao
                            onda kad je napravljena, prije četrdeset godina. Za nas nema bolje recenzije od toga.
                        </p>

                        <h2>Mijenjati ili prati: računica</h2>
                        <p>
                            Zamjena znači skidanje starih ploča, novi kamen, ljepilo, fugiranje, majstore i nekoliko dana
                            bez terase. Pranje je jedan dolazak. Čišćenje kamenih površina kod nas je 5–7 €/m² (cijena na
                            10. 9. 2026.: 5–7 €/m²), a točnu cijenu za vašu terasu potvrđujemo nakon besplatne procjene.
                            Sve cijene su u <Link href="/cjenik">cjeniku</Link>.
                        </p>

                        <h2>Kad pranje nije dovoljno</h2>
                        <p>
                            Pranje skida ono što je na kamenu, ali ne popravlja kamen. Ako su ploče napukle, ako se klimaju
                            ili je voda godinama stajala ispod njih, zamjena ili popravak su pravi posao. Isto vrijedi za
                            mrlje od ulja ili hrđe koje su ušle duboko u kamen. Zato prije ponude pogledamo stanje i
                            kažemo vam što pranje može, a što ne može.
                        </p>

                        <h2>Kako da terasa ostane svijetla</h2>
                        <p>
                            Nakon pranja preporučujemo impregnaciju. Ona zatvori pore kamena, pa se prljavština i mahovina
                            teže hvataju. Na sjenovitim terasama poput ove isplati se pranje jednom godišnje, prije nego
                            se naslaga stigne uvući u pore. Više o postupku piše na stranici{' '}
                            <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje kamenih površina</Link>, a o terasama u
                            vodiču <Link href="/blog/koliko-kosta-pranje-terase-zagreb">koliko košta pranje terase</Link>.
                        </p>

                        <h2>Česta pitanja</h2>
                        {faq.map(({ q, a }) => (
                            <div key={q}>
                                <h3>{q}</h3>
                                <p>{a}</p>
                            </div>
                        ))}

                        <div className={styles.ctaBox}>
                            <h3>Planirate mijenjati ploče?</h3>
                            <p>
                                Pošaljite nam prvo par slika. Ako je kamen zdrav, pranje je puno jeftinije od zamjene, a
                                procjena je besplatna.
                            </p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={16} /> 095 844 2806
                                </a>
                                <Link href="/usluge/ciscenje-kamenih-povrsina" className={styles.ctaBtnSecondary}>
                                    Čišćenje kamenih površina <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
