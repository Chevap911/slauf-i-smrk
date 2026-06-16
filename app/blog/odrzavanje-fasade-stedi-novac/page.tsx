import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Zašto neredovito održavanje fasade na kraju košta puno više | Šlauf i Šmrk',
    description: 'Zelena mrlja koju ignorirate godinu dana postane saniranje žbuke za nekoliko tisuća eura. Kako zapuštena fasada poskupljuje i koliko košta da do toga ne dođe.',
    alternates: { canonical: '/blog/odrzavanje-fasade-stedi-novac' },
    openGraph: {
        title: 'Zašto neredovito održavanje fasade na kraju košta puno više',
        description: 'Alge i vlaga koje se ignoriraju godinama prelaze iz pranja od nekoliko stotina eura u sanaciju žbuke i bojanje od nekoliko tisuća.',
        url: 'https://slaufismrk.com/blog/odrzavanje-fasade-stedi-novac',
        type: 'article',
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Održavanje fasade i troškovi', item: 'https://slaufismrk.com/blog/odrzavanje-fasade-stedi-novac' },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Zašto neredovito održavanje fasade na kraju košta puno više',
        description: 'Kako zapuštena fasada od jeftinog pranja postaje skupa sanacija, koji su rani znakovi i koliko košta redovito održavanje fasade u Zagrebu.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-06-16',
        dateModified: '2026-06-16',
        image: 'https://slaufismrk.com/prije-poslje/pranje-zida-terase-zagreb-poslje.jpeg',
        url: 'https://slaufismrk.com/blog/odrzavanje-fasade-stedi-novac',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Koliko često treba prati fasadu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Za većinu kuća u Zagrebu dovoljno je pranje svake dvije do tri godine, a sjeverne i zasjenjene strane koje sporo suše češće. Najbolji pokazatelj je sama fasada, čim se pojave zelene ili tamne mrlje, vrijeme je za pranje.',
                },
            },
            {
                '@type': 'Question',
                name: 'Mogu li alge i vlaga oštetiti fasadu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Da. Alge i gljivice zadržavaju vlagu u žbuci, a stalna vlaga vodi do pucanja, ljuštenja boje i na kraju do odvajanja žbuke. Tada pranje više nije dovoljno nego treba sanacija i bojanje, što je višestruko skuplje.',
                },
            },
            {
                '@type': 'Question',
                name: 'Je li pranje fasade jeftinije od bojanja?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Znatno. Pranje fasade kreće od 5 €/m², dok obnova s ličenjem ide nekoliko puta više po kvadratu i traži skele i materijal. Redovito pranje produžava vijek fasade i odgađa skupu obnovu.',
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
                        <h1>Zašto neredovito održavanje fasade na kraju košta puno više</h1>
                        <p className={styles.meta}>Objavljeno 16. lipnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Fasada rijetko propadne odjednom. Krene s jednom zelenkastom sjenom u kutu koju nitko ne primijeti.
                            Sljedeće godine je mrlja veća i tamnija. Treće godine boja na tom dijelu počne otpadati, a vlasnik
                            tek tada nazove, kad problem više nije pranje nego popravak. Vidimo taj scenarij stalno, i gotovo
                            uvijek se mogao izbjeći s pranjem koje košta djelić sanacije.
                        </p>
                        <p>
                            Logika odgađanja je razumljiva. Mrlja u kutu ne smeta dovoljno da se nešto poduzme, a svaka godina
                            čekanja djeluje kao ušteda. Problem je što se trošak ne briše, samo se gomila i seli u skuplju
                            kategoriju.
                        </p>

                        <h2>Kako mala mrlja postane velik račun</h2>
                        <p>
                            Zelena prevlaka na fasadi su alge i gljivice. One ne stoje samo na površini, one zadržavaju vlagu uz
                            žbuku. Žbuka koja je stalno vlažna ne diše kako treba. Kroz zime se ta vlaga smrzava i širi u
                            mikropukotinama, pa one postaju veće pukotine. Boja se počne ljuštiti, a onda se i sama žbuka počne
                            odvajati od podloge.
                        </p>
                        <p>
                            U toj točki čišćenje više ne rješava problem. Treba skinuti oštećenu žbuku, sanirati podlogu,
                            gletati i bojati, najčešće uz skele. To je posao od nekoliko tisuća eura. Da je ista fasada oprana
                            dok je bila samo zelena, koštalo bi nekoliko stotina.
                        </p>

                        <h2>Brojke koje to čine očitim</h2>
                        <p>
                            Uzmimo kuću s oko 200 m² fasade. Pranje kreće od 5 €/m², dakle red veličine od oko 1.000 € da se
                            fasada vrati u red i zaštiti. Obnova s saniranjem žbuke, skelama, materijalom i ličenjem ide
                            višestruko više po kvadratu. Razlika između ta dva scenarija je razlika između toga jeste li reagirali
                            na vrijeme ili ste čekali da problem dozrije.
                        </p>
                        <p>
                            Detaljnu razradu cijena imate u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link>, a samu uslugu na
                            stranici <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link>.
                        </p>

                        <h2>Rani znakovi koje ne treba ignorirati</h2>
                        <p>
                            Fasada obično najavi problem prije nego što nastane šteta. Vrijedi reagirati kad primijetite nešto
                            od ovoga:
                        </p>
                        <ul>
                            <li>Zelene ili crne mrlje, najčešće na sjevernoj i zasjenjenoj strani</li>
                            <li>Tamne pruge ispod prozorskih klupčica i oko žljebova</li>
                            <li>Bijele praškaste naslage, znak da vlaga izlazi kroz žbuku</li>
                            <li>Boja koja se na dodir kruni ili blago ljušti</li>
                            <li>Dio fasade koji nakon kiše ostaje vlažan puno duže od ostatka</li>
                        </ul>
                        <p>
                            O tome detaljnije pišemo u tekstu{' '}
                            <Link href="/blog/znakovi-da-fasadi-treba-pranje">5 znakova da fasadi treba pranje</Link>, a kako
                            uklanjamo alge i gljivice do korijena objašnjeno je u{' '}
                            <Link href="/blog/ciscenje-fasade-od-algi-i-gljivica">čišćenje fasade od algi i gljivica</Link>.
                        </p>

                        <h2>Održavanje je jeftino jer odgađa skupo</h2>
                        <p>
                            Pranje fasade nije trošak u prazno. Svaki put kad skinete alge i nanesete zaštitu, produžite vijek
                            žbuke i boje i odgađate dan kad treba puna obnova. Za većinu kuća u Zagrebu to znači pranje svake
                            dvije do tri godine, češće na stranama koje sporo suše. To je par stotina eura periodično umjesto
                            jednog velikog računa koji dođe kad fasada propadne.
                        </p>
                        <p>
                            Ista logika vrijedi i za terasu, tlakavce i okućnicu. Naslage koje se redovito skidaju ne uspiju
                            uništiti podlogu, fuge i zaštitni sloj.
                        </p>

                        <h2>Niste sigurni u kojoj je fazi vaša fasada?</h2>
                        <p>
                            Ako imate mrlje, ali ne znate je li dovoljno pranje ili je već kasno za to, pošaljite nam dvije,
                            tri fotografije na WhatsApp. Recimo vam pošteno treba li samo pranje ili nešto više i koliko bi
                            koštalo. Bolje provjeriti sad nego sljedeće zime.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Fasada vam pokazuje prve znakove?</h3>
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
