import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Bijela fasada posivjela: kako smo je vratili | Šlauf i Šmrk',
    description: 'Bijela fasada s godinama posivi od algi i prašine. Na stvarnom poslu u Zagrebu pokazujemo kako je vraćamo bez bojanja i koliko to košta.',
    alternates: { canonical: '/blog/bijela-fasada-posivjela' },
    openGraph: {
        title: 'Bijela fasada na kući posivjela: kako smo je vratili na Maksimiru',
        description: 'Stvarni posao iz Zagreba: zašto bijela fasada posivi i kako je čišćenjem vraćamo bez bojanja.',
        url: 'https://slaufismrk.com/blog/bijela-fasada-posivjela',
        type: 'article',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Bijela fasada posivjela', item: 'https://slaufismrk.com/blog/bijela-fasada-posivjela' },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Bijela fasada na kući posivjela: kako smo je vratili na Maksimiru',
        description: 'Stvarni posao iz Zagreba. Zašto bijela fasada posivi i kako je čišćenjem vraćamo bez bojanja, uz cijenu.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-06-01',
        dateModified: '2026-06-01',
        image: 'https://slaufismrk.com/prije-poslje/fasada-poslje.png',
        url: 'https://slaufismrk.com/blog/bijela-fasada-posivjela',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Zašto bijela fasada posivi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Bijela fasada posivi od tankog sloja algi, prašine i onečišćenja iz zraka koji se s godinama uhvati u pore. Sivilo je najjače na sjevernim stranama i u sjeni, gdje fasada sporije suši.',
                },
            },
            {
                '@type': 'Question',
                name: 'Mora li se posivjela fasada bojati ili je dovoljno pranje?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ako boja nije ispucana i ne ljušti se, pranje je dovoljno i vraća bijelu boju za pola do trećinu cijene bojanja. Bojanje ima smisla tek kad je fasada mehanički oštećena ili kad želite promjenu boje.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta vraćanje bijele fasade u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pranje fasade kreće od 5 €/m². Za kuću od 200 m² to je okvirno od 1.000 €, dok bojanje iste kuće obično iznosi nekoliko tisuća eura. Dolazimo na besplatnu procjenu.',
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
                        <h1>Bijela fasada na kući posivjela: kako smo je vratili na Maksimiru</h1>
                        <p className={styles.meta}>Objavljeno 1. lipnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Kuća na Maksimiru, izvorno bijela fasada koja je s godinama postala prljavo siva. Vlasnik je već
                            tražio ponude za bojanje kad nas je zvao za drugo mišljenje. Pogledali smo fasadu i rekli mu ono
                            što nije očekivao: ne treba ti bojanje, treba ti pranje.
                        </p>

                        <h2>Zašto bijela fasada posivi</h2>
                        <p>
                            Bijela najjasnije pokazuje prljavštinu. Ono što izgleda kao izblijedjela boja zapravo je tanki
                            sloj algi, prašine i onečišćenja iz zraka koji se s godinama uhvati u pore žbuke. Na ovoj kući
                            sivilo je bilo najjače na sjevernoj strani i ispod krovnog vijenca, klasično za fasade u sjeni.
                            Boja ispod svega toga bila je potpuno u redu.
                        </p>

                        <h2>Kako smo vratili bijelu boju</h2>
                        <p>
                            Nanijeli smo sredstvo koje razgrađuje alge i organski sloj, ostavili da odradi, pa isprali
                            prilagođenim tlakom. Već nakon prvog prolaza vidjela se razlika između opranog i neopranog dijela,
                            kao da su dvije različite kuće. Fasada od oko 160 m² bila je gotova u jednom danu i izgledala je
                            kao da je tek obojana, a nije ni dotaknuta kistom.
                        </p>

                        <h2>Pranje ili bojanje</h2>
                        <p>
                            Ovo je odluka koja vlasnicima štedi puno novca. Ako boja nije ispucana i ne ljušti se na velikim
                            površinama, pranje vraća izgled za pola do trećinu cijene bojanja. Bojanje ima smisla tek kad je
                            fasada mehanički oštećena ili kad želite promijeniti boju. Na Maksimiru je vlasnik umjesto nekoliko
                            tisuća eura za bojanje platio djelić toga za pranje.
                        </p>

                        <h2>Koliko to košta</h2>
                        <p>
                            Pranje fasade kreće od 5 €/m². Za kuću od 200 m² to je okvirno od 1.000 €. Pregled cijena imate u
                            vodiču <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link>, a usluga je
                            opisana na stranici <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link>. Ako se uz
                            fasadu nakupila i prljavština po dvorištu, isplati se kombinirati i{' '}
                            <Link href="/usluge/pranje-okucnice">pranje okućnice</Link> u istom dolasku.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Fasada vam je posivjela?</h3>
                            <p>Pošaljite slike na WhatsApp i recimo vam treba li pranje ili bojanje. Dolazimo na besplatnu procjenu.</p>
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
