import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Kako oprati fasadu: vodič korak po korak | Šlauf i Šmrk',
    description: 'Kako oprati fasadu bez oštećenja: koji tlak, koje sredstvo i zašto kućni perač griješi na stiropor fasadi. Plus cijena pranja u Zagrebu.',
    alternates: { canonical: '/blog/kako-oprati-fasadu' },
    openGraph: {
        title: 'Kako oprati fasadu: vodič korak po korak',
        description: 'Koji tlak i sredstvo za koju fasadu, najčešće greške s kućnim peračem i kada se isplati zvati profesionalce.',
        url: 'https://slaufismrk.com/blog/kako-oprati-fasadu',
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
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Kako oprati fasadu',
            item: 'https://slaufismrk.com/blog/kako-oprati-fasadu',
        },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Kako oprati fasadu: vodič korak po korak i kada zvati profesionalce',
        description: 'Koji tlak i sredstvo za koju fasadu, kako oprati fasadu bez oštećenja i zašto kućni perač često stvara skuplji problem. Cijena pranja fasade u Zagrebu.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-06-01',
        dateModified: '2026-06-01',
        image: 'https://slaufismrk.com/prije-poslje/fasada-poslje.png',
        url: 'https://slaufismrk.com/blog/kako-oprati-fasadu',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Mogu li sam oprati fasadu kućnim peračem?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Na betonu, kamenu ili opeci uz pažljiv rad to je izvedivo. Na stiropor (ETICS) fasadi nije preporučljivo. Kućni perač ima previsok tlak za tanki završni sloj žbuke i lako ga probije, čime otvara put vlazi u izolaciju. U tom slučaju popravak košta višestruko više od čišćenja.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koji tlak je dobar za pranje fasade?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ne postoji jedan tlak za sve. Stiropor i tanke žbuke peru se softwash metodom (nizak tlak, sličan vrtnoj cijevi, uz biocidno sredstvo). Kamen, beton i opeka podnose viši tlak. Tlak se uvijek bira prema materijalu, ne obrnuto.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koje sredstvo se koristi za pranje fasade?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Za alge, gljivice i mahovinu koristi se biocidno sredstvo koje se nanese, ostavi 15 do 30 minuta da uništi organizme do korijena, pa ispere. Obična voda skida samo površinsku prljavštinu, ali ne uništava spore u porama, pa se naslage brzo vrate.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta pranje fasade u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cijena se kreće od 5 €/m². Za obiteljsku kuću od 200 m² to je okvirno od 1.000 €, ovisno o stupnju zaprljanosti, tipu fasade i visini objekta. Za točnu cijenu dolazimo na besplatnu procjenu.',
                },
            },
            {
                '@type': 'Question',
                name: 'U koje doba godine je najbolje oprati fasadu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Od proljeća do jeseni, kad su temperature iznad 5 stupnjeva i nema opasnosti od smrzavanja. Biocidnim sredstvima treba suho vrijeme da odrade posao, pa se izbjegavaju dani s kišom.',
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
                        <h1>Kako oprati fasadu: vodič korak po korak i kada zvati profesionalce</h1>
                        <p className={styles.meta}>Objavljeno 1. lipnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Pitanje „kako oprati fasadu“ obično dolazi s kućnim peračem u ruci i najboljom namjerom.
                            Problem je što fasada nije pločnik. Pogrešan tlak na pogrešnom materijalu napravi štetu
                            koju ne vidite odmah, a platite je za godinu dana. Evo kako se fasada pere ispravno,
                            koje greške koštaju i kada se isplati nazvati nekoga tko to radi svaki dan.
                        </p>

                        <h2>Prvo odredite koji tip fasade imate</h2>
                        <p>
                            Cijeli postupak ovisi o materijalu. Tri najčešća slučaja na kućama u Zagrebu:
                        </p>
                        <ul>
                            <li><strong>Stiropor (ETICS):</strong> najčešća kod kuća građenih ili obnovljenih nakon 2000. Završni sloj žbuke je debeo 1,5 do 3 mm. Osjetljiv na tlak.</li>
                            <li><strong>Klasična žbuka:</strong> stariji objekti, deblja i tvrđa podloga, ali boja i dalje može stradati od previsokog tlaka.</li>
                            <li><strong>Kamen, beton ili opeka:</strong> najotporniji, podnose viši tlak i mehaničko čišćenje.</li>
                        </ul>
                        <p>
                            Niste sigurni što imate? Lagano pritisnite fasadu. Ako popušta ili zvuči šuplje,
                            radi se o stiropor sustavu i tu kućni perač otpada. Više detalja u vodiču{' '}
                            <Link href="/blog/pranje-fasade-stiropor-etics">pranje fasade stiropor i ETICS</Link>.
                        </p>

                        <h2>Kako oprati fasadu: postupak korak po korak</h2>
                        <p>
                            Ispravan postupak ima isti redoslijed bez obzira radi li ga vlasnik ili profesionalac.
                            Razlika je u opremi i iskustvu s tlakom.
                        </p>

                        <div className={styles.comparisonTable}>
                            <div className={styles.comparisonHeader}>
                                <span>Korak</span>
                                <span>Što se radi</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>1. Priprema</strong></span>
                                <span>Zaštita prozora, vrata, rasvjete i biljaka uz fasadu. Zatvaranje otvora da voda ne uđe.</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>2. Nanošenje sredstva</strong></span>
                                <span>Biocidno sredstvo na alge i gljivice, ostaviti 15 do 30 min da djeluje do korijena.</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>3. Pranje</strong></span>
                                <span>Ispiranje odozgo prema dolje, tlakom prilagođenim materijalu fasade.</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>4. Kontrola</strong></span>
                                <span>Pregled cijele plohe, dodatni tretman na tvrdokornim mjestima, ispiranje ostataka.</span>
                            </div>
                        </div>

                        <h2>Koji tlak za koju fasadu</h2>
                        <p>
                            Ovo je dio gdje se najviše griješi. Tlak se bira prema materijalu, a ne prema tome
                            koliko je perač jak.
                        </p>
                        <ul>
                            <li><strong>Stiropor i tanke žbuke:</strong> softwash, nizak tlak sličan vrtnoj cijevi. Posao odrađuje sredstvo, ne sila vode.</li>
                            <li><strong>Klasična žbuka:</strong> umjeren tlak s razmakom od zida, oprezno oko rubova i pukotina.</li>
                            <li><strong>Kamen, beton, opeka:</strong> viši tlak je u redu, uz pravu mlaznicu i razmak.</li>
                        </ul>
                        <p>
                            Detaljnu usporedbu metoda pročitajte u vodiču{' '}
                            <Link href="/blog/softwash-ili-visokotlacno-pranje-fasade">softwash ili visokotlačno pranje fasade</Link>.
                        </p>

                        <h2>Najčešće greške pri samostalnom pranju fasade</h2>
                        <p>
                            Svake sezone saniramo posljedice ovih poteza. Izgledaju kao prečac, a stvore veći trošak:
                        </p>
                        <ul>
                            <li><strong>Kućni perač na stiroporu:</strong> probije završni sloj i otvori put vlazi u izolaciju.</li>
                            <li><strong>Pranje samo vodom:</strong> skine prašinu, ali spore algi i gljivica ostaju u porama i vrate se za godinu.</li>
                            <li><strong>Pranje odozdo prema gore:</strong> prljava voda curi po već opranom dijelu i ostavlja tragove.</li>
                            <li><strong>Previše izbjeljivača:</strong> izblijedi boju i nagrize metalne dijelove oko prozora.</li>
                            <li><strong>Rad na ljestvama s peračem:</strong> trzaj mlaznice na visini je čest uzrok padova.</li>
                        </ul>

                        <h2>Kada se isplati oprati fasadu sam, a kada zvati profesionalce</h2>
                        <p>
                            Sami se možete uhvatiti niske, lako dostupne i otporne površine: betonski sokl,
                            ogradni zid, kameni dio fasade u prizemlju. Profesionalca se isplati zvati kad je
                            fasada stiropor, kad je objekt viši od prizemlja, kad su prisutne gljivice koje
                            prodiru u dubinu ili kad želite da rezultat traje, a ne da se alge vrate sljedeće sezone.
                        </p>
                        <p>
                            Računica je jednostavna. Najam perača, sredstvo i dan posla nisu besplatni, a rizik
                            od oštećenja stiropora pretvara uštedu u veliki trošak. Profesionalno pranje fasade
                            u Zagrebu kreće od 5 €/m², s pravim tlakom, biocidnim tretmanom i fotografijama prije i poslije.
                        </p>

                        <h2>Koliko košta pranje fasade u Zagrebu</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Manje od 100 m²</span>
                                <strong>od 500 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>100 – 200 m² (obiteljska kuća)</span>
                                <strong>600 – 1.200 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>200 – 300 m²</span>
                                <strong>od 1.500 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>300 m²+ / poslovni objekti</span>
                                <strong>po procjeni</strong>
                            </div>
                        </div>
                        <p>
                            Razradu faktora koji utječu na cijenu pogledajte u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link>,
                            a cijelu uslugu na stranici{' '}
                            <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link>.
                        </p>

                        <h2>Česta pitanja o pranju fasade</h2>

                        <h3>Mogu li sam oprati fasadu kućnim peračem?</h3>
                        <p>
                            Na betonu, kamenu ili opeci uz oprez da. Na stiropor fasadi nije preporučljivo jer
                            kućni perač probije tanki završni sloj i otvori put vlazi u izolaciju.
                        </p>

                        <h3>Koji tlak je dobar za pranje fasade?</h3>
                        <p>
                            Stiropor i tanke žbuke peru se softwash metodom (nizak tlak uz biocidno sredstvo).
                            Kamen, beton i opeka podnose viši tlak. Tlak se bira prema materijalu.
                        </p>

                        <h3>Koje sredstvo se koristi za pranje fasade?</h3>
                        <p>
                            Biocidno sredstvo koje se nanese, ostavi 15 do 30 minuta i ispere. Ono uništava
                            alge i gljivice do korijena, što obična voda ne može.
                        </p>

                        <h3>U koje doba godine je najbolje oprati fasadu?</h3>
                        <p>
                            Od proljeća do jeseni, uz temperature iznad 5 stupnjeva i suho vrijeme da sredstvo odradi posao.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Ne želite riskirati sa stiropor fasadom?</h3>
                            <p>
                                Pošaljite 2-3 slike fasade na WhatsApp i javimo okvirnu cijenu bez dolaska.
                                Za veće objekte dolazimo na besplatnu procjenu i dajemo pisanu ponudu.
                            </p>
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
