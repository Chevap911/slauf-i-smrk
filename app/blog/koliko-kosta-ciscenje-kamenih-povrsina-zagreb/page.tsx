import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import ArticleQuote from '@/components/ArticleQuote/ArticleQuote';
import { OG_IMAGE } from '@/lib/seo';

const SLUG = 'koliko-kosta-ciscenje-kamenih-povrsina-zagreb';
const IMG = '/blog/kamena-terasa-sljeme';

export const metadata: Metadata = {
    title: 'Koliko košta čišćenje kamena u Zagrebu 2026 | Šlauf i Šmrk',
    description: 'Čišćenje kamene terase, staze i stepenica: 5 do 7 €/m² (na 10. 9. 2026.: 5 do 7 €/m²). Što ulazi u cijenu, od čega ovisi i što pranje ne može.',
    alternates: { canonical: `/blog/${SLUG}` },
    openGraph: {
        title: 'Koliko košta čišćenje kamena u Zagrebu? Cijene 2026.',
        description: 'Cijena po m² za kamenu terasu, stazu i stepenice, primjer računice i što pranje kamena ne može popraviti.',
        url: `https://slaufismrk.com/blog/${SLUG}`,
        type: 'article',
        images: [OG_IMAGE],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Koliko košta čišćenje kamena u Zagrebu', item: `https://slaufismrk.com/blog/${SLUG}` },
    ],
};

// FAQ: isti tekst stoji vidljivo na dnu stranice (site-check provjerava da se podudaraju).
const FAQ = [
    {
        q: 'Koliko košta čišćenje kamene terase od 50 m²?',
        a: 'Od 250 do 350 € (cijena na 10. 9. 2026.: 250 do 350 €), po 5 do 7 € po m². Točnu cijenu potvrđujemo nakon fotografije terase, jer ovisi o vrsti kamena i debljini naslage.',
    },
    {
        q: 'Mogu li kamen oprati kućnim peračem?',
        a: 'Možete, ali s udaljenosti i širokim mlazom. Preblizu i pod jakim tlakom perač izbija površinu i fuge, a na mekom kamenu poput vapnenca ostaju trajne pruge. Ako niste sigurni koji je kamen, pošaljite nam fotografiju.',
    },
    {
        q: 'Treba li kamen nakon pranja impregnirati?',
        a: 'Ne mora, ali sa zaštitom se naslage sporije vraćaju. Impregnaciju radimo po želji, a cijenu dajemo u ponudi jer ovisi o površini i upojnosti kamena.',
    },
    {
        q: 'Koliko često treba prati kamenu terasu?',
        a: 'Na sunčanoj terasi dovoljno je svake dvije do tri godine. U sjeni i uz zelenilo kamen se sporije suši, pa naslage rastu brže i pranje se isplati jednom godišnje.',
    },
];

const figure = { margin: 0 } as const;
const img = { width: '100%', height: 'auto', borderRadius: '0.75rem' } as const;
const cap = { fontSize: '0.85rem', color: '#666', marginTop: '0.35rem' } as const;
const pair = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', margin: '1.25rem 0 2rem' } as const;

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Koliko košta čišćenje kamena u Zagrebu? Terase, staze i stepenice (2026.)',
        description: 'Cijena čišćenja kamenih površina po m², od čega ovisi, što je uključeno i što pranje kamena ne može popraviti.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-10-20',
        dateModified: '2026-10-20',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    };

    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Cijene</span>
                        <h1>Koliko košta čišćenje kamena u Zagrebu? Terase, staze i stepenice (2026.)</h1>
                        <p className={styles.meta}>Objavljeno 20. listopada 2026. · Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Čišćenje kamenih površina kod nas košta <strong>5 do 7 € po m²</strong> (cijena na 10. 9. 2026.:
                            5 do 7 € po m²). Kamena terasa od 40 m² je tako 200 do 280 €. Konačnu cijenu potvrđujemo nakon
                            besplatne procjene po fotografiji, jer ovisi o vrsti kamena i debljini naslage.
                        </p>

                        <h2>Okvirne cijene čišćenja kamena</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>20 m² (staza uz kuću, stepenice)</span>
                                <strong>100 do 140 €<span className="sidrena">Cijena na 10. 9. 2026.: 100 do 140 €</span></strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>40 m² (manja terasa)</span>
                                <strong>200 do 280 €<span className="sidrena">Cijena na 10. 9. 2026.: 200 do 280 €</span></strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>80 m² (terasa s okolišem)</span>
                                <strong>400 do 560 €<span className="sidrena">Cijena na 10. 9. 2026.: 400 do 560 €</span></strong>
                            </div>
                        </div>
                        <p>
                            Iznosi su izračunati iz cijene po m² iz našeg <Link href="/cjenik" className={styles.inlineLink}>cjenika</Link>.
                            Ako uz kamen perete i druge površine, pogledajte{' '}
                            <Link href="/blog/koliko-kosta-pranje-terase-zagreb" className={styles.inlineLink}>koliko košta pranje terase</Link>.
                        </p>

                        <ArticleQuote
                            location="blog-kamen-cijena"
                            service="stone"
                            title="Koliko bi čišćenje vašeg kamena koštalo?"
                            whatsappText="Pozdrav, zanima me čišćenje kamena. Šaljem slike za procjenu."
                        />

                        <h2>Zašto je kamen skuplji od betona</h2>
                        <p>
                            Beton i tlakavci kod nas su 4 do 6 € po m², kamen 5 do 7 €. Razlika je u načinu rada. Kamen je
                            porozan i osjetljiv, pa ga ne smijemo prati jakim tlakom. Radimo nižim tlakom, sredstvo mora duže
                            djelovati, a posao traje dulje nego na betonu iste površine.
                        </p>

                        <h2>Od čega ovisi konačna cijena</h2>
                        <p>
                            <strong>Vrsta kamena.</strong> Granit podnosi više, dok vapnenac i pješčenjak peremo
                            najnježnije. Mramor ne smije doći u dodir s kiselim sredstvima.
                        </p>
                        <p>
                            <strong>Što je na kamenu.</strong> Tanak sloj prašine i alge skidamo brzo. Debela naslaga
                            mahovine i lišaja, nastala u sjeni godinama, traži predtretman i više vremena. Bijele naslage
                            koje izlaze iz fuga (salitra, kamenac) su posebna priča, o njima piše u tekstu{' '}
                            <Link href="/blog/salitra-i-kamenac-na-kamenoj-fasadi" className={styles.inlineLink}>
                                salitra i kamenac na kamenoj fasadi
                            </Link>
                            .
                        </p>
                        <p>
                            <strong>Pristup i oblik.</strong> Ravna terasa je jedno, a stepenice, potporni zid i uski prolazi
                            uz kuću drugo. Zato procjenu radimo po fotografiji, a ne po površini na papiru.
                        </p>
                        <p>
                            <strong>Fuge.</strong> Ako su zarasle u korov, izbijamo ih prije pranja. Fugiranje kvarcnim
                            pijeskom je dodatna stavka, 1,50 do 2,50 € po m² (cijena na 10. 9. 2026.: 1,50 do 2,50 € po m²).
                        </p>

                        <div style={pair}>
                            <figure style={figure}>
                                <Image src={`${IMG}/kamene-stepenice-prije-ciscenja.jpg`} alt="Tamne kamene stepenice uz kameni potporni zid prije čišćenja, s bijelim mrljama po pločama" width={901} height={1600} style={img} sizes="(max-width: 768px) 50vw, 400px" />
                                <figcaption style={cap}>Prije: sive stepenice s mrljama</figcaption>
                            </figure>
                            <figure style={figure}>
                                <Image src={`${IMG}/kamene-stepenice-poslije-ciscenja.jpg`} alt="Iste kamene stepenice nakon čišćenja, svijetle bež boje" width={901} height={1600} style={img} sizes="(max-width: 768px) 50vw, 400px" />
                                <figcaption style={cap}>Poslije: iste stepenice, boja kamena vraćena</figcaption>
                            </figure>
                        </div>

                        <h2>Što je uključeno u cijenu</h2>
                        <p>
                            Prije posla pogledamo koji je to kamen i koliko podnosi. Zatim nanesemo sredstvo koje otpušta
                            naslagu i peremo tlakom prilagođenim tom kamenu. Sredstva su biorazgradiva i ne štete biljkama uz
                            terasu. Na kraju šaljemo fotografije rezultata. Postupak je opisan na stranici{' '}
                            <Link href="/usluge/ciscenje-kamenih-povrsina" className={styles.inlineLink}>
                                čišćenje kamenih površina
                            </Link>
                            .
                        </p>

                        <div style={pair}>
                            <figure style={figure}>
                                <Image src={`${IMG}/kamena-staza-uz-kucu-prije-ciscenja.jpg`} alt="Siva kamena staza uz crvenu fasadu s bijelim mrljama i tamnim točkicama prije čišćenja" width={901} height={1600} style={img} sizes="(max-width: 768px) 50vw, 400px" />
                                <figcaption style={cap}>Prije: staza uz kuću, tamna i fleškava</figcaption>
                            </figure>
                            <figure style={figure}>
                                <Image src={`${IMG}/kamena-staza-uz-kucu-poslije-ciscenja.jpg`} alt="Ista kamena staza uz crvenu fasadu nakon čišćenja, svijetla uz sjenu palme" width={901} height={1600} style={img} sizes="(max-width: 768px) 50vw, 400px" />
                                <figcaption style={cap}>Poslije: ista staza, ujednačena boja</figcaption>
                            </figure>
                        </div>

                        <h2>Što pranje kamena ne može</h2>
                        <p>
                            Pranje skida ono što leži na kamenu, ali ne popravlja kamen. Napukle ploče, ploče koje se klimaju i
                            mrlje od ulja ili hrđe koje su ušle duboko u pore ostaju vidljive i nakon pranja, a to vam kažemo
                            prije ponude. Naslage se s vremenom vraćaju, samo sporije kad je kamen zaštićen. Kad je pitanje
                            hoće li se isplatiti čistiti ili mijenjati ploče, odgovor smo pokazali na kući ispod Sljemena:{' '}
                            <Link href="/blog/obnova-kamene-terase-bez-zamjene-ploca" className={styles.inlineLink}>
                                kamena terasa, čišćenje umjesto zamjene ploča
                            </Link>
                            .
                        </p>

                        <h2>Impregnacija nakon pranja</h2>
                        <p>
                            Po želji kamen nakon pranja zaštitimo impregnacijom, pa se prljavština i mahovina teže hvataju.
                            Cijena nije u cjeniku jer ovisi o površini i upojnosti kamena, pa je dajemo u ponudi, uz cijenu
                            čišćenja.
                        </p>

                        <h2>Često postavljana pitanja</h2>
                        <div className={styles.faq}>
                            {FAQ.map(({ q, a }) => (
                                <div className={styles.faqItem} key={q}>
                                    <h3>{q}</h3>
                                    <p>{a}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.closing}>
                            <p>
                                Najbrži put do prave cijene je fotografija. Pošaljite sliku kamene površine na WhatsApp i
                                javimo vam okvirnu cijenu, a točnu potvrđujemo prije početka.
                            </p>
                        </div>

                        <div className={styles.ctaBox}>
                            <h3>Zatražite cijenu za čišćenje kamena</h3>
                            <p>Pošaljite fotografije i recite gdje je površina. Procjena je besplatna i bez obveze.</p>
                            <div className={styles.ctaButtons}>
                                <a href="https://wa.me/385958442806?text=Pozdrav%2C%20zanima%20me%20%C4%8Di%C5%A1%C4%87enje%20kamena.%20%C5%A0aljem%20slike%20za%20procjenu." target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                                    WhatsApp upit
                                </a>
                                <a href="tel:+385958442806" className={styles.ctaBtnSecondary}>
                                    <Phone size={16} /> +385 95 844 2806
                                </a>
                            </div>
                        </div>

                        <div className={styles.relatedPosts}>
                            <h3>Povezano</h3>
                            <ul>
                                <li>
                                    <Link href="/usluge/ciscenje-kamenih-povrsina">
                                        <ArrowRight size={14} /> Čišćenje kamenih površina u Zagrebu
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-terase-zagreb">
                                        <ArrowRight size={14} /> Koliko košta pranje terase u Zagrebu?
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/obnova-kamene-terase-bez-zamjene-ploca">
                                        <ArrowRight size={14} /> Kamena terasa: čišćenje umjesto zamjene
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
