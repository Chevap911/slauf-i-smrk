import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Salitra na fasadi: bijele naslage i kako ih riješiti | Šlauf i Šmrk',
    description: 'Bijele praškaste naslage na fasadi su salitra (eflorescencija). Pokazujemo na stvarnom poslu u Zagrebu odakle dolaze, kako ih skidamo i na što paziti.',
    alternates: { canonical: '/blog/salitra-na-fasadi' },
    openGraph: {
        title: 'Salitra na fasadi: bijele naslage na kući u Španskom i kako smo ih riješili',
        description: 'Stvarni posao iz Zagreba: što je salitra na fasadi, odakle dolazi i kako je uklanjamo.',
        url: 'https://slaufismrk.com/blog/salitra-na-fasadi',
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
        { '@type': 'ListItem', position: 3, name: 'Salitra na fasadi', item: 'https://slaufismrk.com/blog/salitra-na-fasadi' },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Salitra na fasadi: bijele naslage na kući u Španskom i kako smo ih riješili',
        description: 'Stvarni posao iz Zagreba. Što je salitra na fasadi, odakle dolaze bijele praškaste naslage i kako ih uklanjamo bez oštećenja.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-06-01',
        dateModified: '2026-06-01',
        image: 'https://slaufismrk.com/prije-poslje/pranje-zida-terase-zagreb-poslje.jpeg',
        url: 'https://slaufismrk.com/blog/salitra-na-fasadi',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Što je salitra na fasadi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Salitra ili eflorescencija su bijele praškaste naslage koje izbiju na površinu kad vlaga iz zida na izlasku ostavi soli iz materijala. Najčešće se javlja na vlažnim zidovima, soklu i mjestima gdje voda ulazi u fasadu.',
                },
            },
            {
                '@type': 'Question',
                name: 'Može li se salitra samo oprati vodom?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Voda salitru samo privremeno makne, a kako se zid suši ona ponovno izbije. Naslagu skidamo mehanički i odgovarajućim sredstvom, ali ako je uzrok stalna vlaga, prvo treba riješiti izvor vode, inače se vraća.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta čišćenje fasade od salitre u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Čišćenje fasade kreće od 5 €/m². Salitra zahtijeva pažljiviji rad i procjenu uzroka vlage, pa cijenu dajemo nakon izlaska na lokaciju.',
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
                        <h1>Salitra na fasadi: bijele naslage na kući u Španskom i kako smo ih riješili</h1>
                        <p className={styles.meta}>Objavljeno 1. lipnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Na kući u Španskom vlasnik je mislio da mu fasada plijesni. Kad smo došli, vidjeli smo da to nije
                            plijesan nego salitra, bijele praškaste naslage koje su izbile na soklu i uz donji rub zida.
                            Tip problema koji se rješava drugačije od algi i gljivica, pa je dobro znati razliku.
                        </p>

                        <h2>Što je zapravo salitra</h2>
                        <p>
                            Salitra, stručno eflorescencija, su soli koje vlaga iznese iz materijala na površinu. Voda uđe u
                            zid, putuje kroz žbuku i na izlasku ispari, a soli koje je nosila ostanu na površini kao bijeli
                            prah. Zato se salitra najčešće vidi na soklu, uz tlo i na mjestima gdje fasada upija vlagu.
                        </p>
                        <p>
                            Razlika prema algama je jednostavna. Alge i gljivice su zelene ili crne i žive na površini.
                            Salitra je bijela, suha i dolazi iznutra. Ako je tretirate kao alge, samo gubite vrijeme.
                        </p>
                        <p>
                            Na kamenim i pločastim oblogama ista se stvar javlja u obliku bijelih curaka koji izlaze iz
                            fuga. Kako to izgleda i kako smo to skidali opisali smo u tekstu{' '}
                            <Link href="/blog/salitra-i-kamenac-na-kamenoj-fasadi">
                                salitra i kamenac na kamenoj fasadi
                            </Link>
                            .
                        </p>

                        <h2>Kako smo to riješili</h2>
                        <p>
                            Prvo smo pregledali odakle dolazi vlaga. Na ovoj kući uzrok je bio sokl koji je upijao vodu od
                            tla i loše riješen rub uz terasu. Naslagu smo skinuli mehanički i odgovarajućim sredstvom,
                            bez jakog tlaka jer bi visok tlak na vlažnoj žbuci napravio više štete.
                        </p>
                        <p>
                            Vlasniku smo jasno rekli ono što govorimo svima sa salitrom: čišćenje vraća izgled, ali ako se ne
                            riješi izvor vlage, salitra će se s vremenom vratiti. Zato uz čišćenje preporučujemo i sanaciju
                            uzroka vode tamo gdje je to moguće.
                        </p>

                        <h2>Zašto je važno ne čekati</h2>
                        <p>
                            Salitra je znak da u zidu ima vlage. Sama naslaga je estetski problem, ali vlaga koja je stvara s
                            vremenom razara žbuku i boju iznutra. Što prije se uzrok smiri, manja je šteta na fasadi.
                        </p>

                        <h2>Koliko to košta</h2>
                        <p>
                            Čišćenje fasade kreće od 5 €/m². Salitra traži pažljiviji pristup i procjenu uzroka vlage, pa
                            cijenu dajemo nakon izlaska na lokaciju. Više o cijenama imate u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link>, a uslugu na
                            stranici <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link>.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Bijele naslage na fasadi?</h3>
                            <p>Pošaljite slike na WhatsApp i recimo vam je li salitra ili alge i kako to riješiti. Dolazimo na besplatnu procjenu.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={16} /> 095 844 2806
                                </a>
                                <Link href="/usluge/pranje-fasade" className={styles.ctaBtnSecondary}>
                                    Usluga pranja fasade <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
