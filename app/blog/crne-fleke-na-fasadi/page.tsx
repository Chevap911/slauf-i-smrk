import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Crne fleke na fasadi: kako smo ih skinuli na Jarunu',
    description: 'Crne fleke na fasadi nisu prljavština nego gljivice i biofilm. Pokazujemo na stvarnom poslu u Zagrebu kako ih skidamo do korijena i koliko košta.',
    alternates: { canonical: '/blog/crne-fleke-na-fasadi' },
    openGraph: {
        title: 'Crne fleke na fasadi: kako smo ih skinuli na kući na Jarunu',
        description: 'Stvarni posao iz Zagreba: što su crne fleke na fasadi, zašto se vraćaju i kako ih trajno uklanjamo.',
        url: 'https://slaufismrk.com/blog/crne-fleke-na-fasadi',
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
        { '@type': 'ListItem', position: 3, name: 'Crne fleke na fasadi', item: 'https://slaufismrk.com/blog/crne-fleke-na-fasadi' },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Crne fleke na fasadi: kako smo ih skinuli na kući na Jarunu',
        description: 'Stvarni posao iz Zagreba. Što su crne fleke na fasadi, zašto nisu obična prljavština i kako ih uklanjamo do korijena.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-06-01',
        dateModified: '2026-06-01',
        image: 'https://slaufismrk.com/prije-poslje/pranje-zida-terase-zagreb-poslje.jpeg',
        url: 'https://slaufismrk.com/blog/crne-fleke-na-fasadi',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Što su crne fleke na fasadi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Crne fleke na fasadi najčešće su gljivice i crni biofilm, kombinacija gljivica, bakterija i prašine koja se hvata u pore žbuke. Nisu obična prljavština i ne skidaju se običnim pranjem vodom jer korijen ostaje u podlozi.',
                },
            },
            {
                '@type': 'Question',
                name: 'Zašto se crne fleke vraćaju nakon pranja?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ako se fleke samo isperu vodom ili tlakom, spore ostaju u porama i kolonija se obnovi za godinu dana. Zato nanosimo biocidno sredstvo koje uništava gljivice do korijena, pa tek onda ispiremo prilagođenim tlakom.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta uklanjanje crnih fleka s fasade u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cijena pranja fasade kreće se od 5 €/m². Za kuću od 200 m² to je okvirno od 1.000 €, ovisno o stupnju zaraženosti i visini objekta. Dolazimo na besplatnu procjenu.',
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
                        <h1>Crne fleke na fasadi: kako smo ih skinuli na kući na Jarunu</h1>
                        <p className={styles.meta}>Objavljeno 1. lipnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Prošli tjedan zvao nas je vlasnik kuće na Jarunu. Sjeverni zid fasade bio mu je pun crnih fleka,
                            a susjedi su počeli pitati kad je zadnji put bojao kuću. Boja je bila u redu, problem su bile fleke.
                            Otišli smo na procjenu i odmah vidjeli o čemu se radi.
                        </p>

                        <h2>Crne fleke nisu prljavština</h2>
                        <p>
                            Većina ljudi misli da su crne fleke prašina ili da je fasada samo zaprljana. Nije tako.
                            U devet od deset slučajeva to su gljivice i crni biofilm, kombinacija gljivica, bakterija i
                            prašine koja se uhvati u pore žbuke. Na kući na Jarunu fleke su bile koncentrirane na sjevernoj
                            strani i u kutu uz susjedovo drvo, točno tamo gdje fasada najsporije suši nakon kiše.
                        </p>
                        <p>
                            To je važno jer mijenja način čišćenja. Da smo samo uperili tlak u zid, fleke bi nestale na dan
                            ili dva, a za godinu dana bi se vratile jače. Korijen gljivice ostaje u podlozi.
                        </p>

                        <h2>Kako smo to riješili</h2>
                        <p>
                            Posao smo odradili u dvije faze. Prvo smo nanijeli biocidno sredstvo po cijeloj zahvaćenoj plohi
                            i ostavili ga da djeluje petnaestak minuta. Sredstvo ne skida fleku odmah, nego ubija gljivicu do
                            korijena u porama. Tek onda smo isprali fasadu prilagođenim tlakom, niže na rubovima i oko prozora
                            da ne diramo brtve.
                        </p>
                        <p>
                            Na kraju smo nanijeli zaštitni premaz koji usporava ponovni rast. Cijela kuća, oko 180 m², bila je
                            gotova u jednom danu. Vlasnik je dobio fotografije prije i poslije za svoju evidenciju.
                        </p>

                        <h2>Zašto se crne fleke uvijek vraćaju na isto mjesto</h2>
                        <p>
                            Gljivice vole sjenu i vlagu. Sjeverne i sjeverozapadne strane, kutovi uz drveće i dijelovi ispod
                            začepljenog žlijeba su prvi na udaru. Ako uklonite samo ono što se vidi, bez tretmana koji ide u
                            dubinu, fleka se vraća. Zato uvijek tretiramo cijelu plohu, ne samo vidljivu mrlju.
                        </p>

                        <h2>Koliko to košta</h2>
                        <p>
                            Pranje fasade kod nas kreće od 5 €/m². Za kuću od 200 m² to je okvirno od 1.000 €, ovisno o
                            stupnju zaraženosti i visini objekta. Detaljan pregled cijena imate u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link>, a cijelu uslugu na
                            stranici <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link>.
                        </p>

                        <h2>Imate crne fleke na svojoj fasadi?</h2>
                        <p>
                            Ako vidite tamne mrlje koje se šire, najbolje je reagirati prije nego prodru dublje u žbuku.
                            Pošaljite nam 2-3 slike fasade na WhatsApp i javimo okvirnu cijenu. Za veće objekte dolazimo na
                            besplatnu procjenu.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Crne fleke na fasadi?</h3>
                            <p>Pošaljite slike na WhatsApp i javimo okvirnu cijenu. Za veće objekte dolazimo na besplatnu procjenu.</p>
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
