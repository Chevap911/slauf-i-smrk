import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import ArticleQuote from '@/components/ArticleQuote/ArticleQuote';

// Fotke i video s testa 15. 9. 2026. Marko 2026-10-05: lokacija se ne spominje, samo
// tehnika, što smo radili i da je pranje vrućom vodom sada u ponudi.
const SLUG = '/blog/pranje-vrucom-vodom-ulje-zvakace';
const IMG = '/blog/pranje-vrucom-vodom';
const OG = {
    url: `${IMG}/og-pranje-vrucom-vodom.jpg`,
    width: 1200,
    height: 630,
    alt: 'Kameni pod prije i poslije pranja vrućom vodom pod visokim tlakom',
};

export const metadata: Metadata = {
    title: 'Pranje vrućom vodom: ulje i žvakaće s betona | Šlauf i Šmrk',
    description:
        'Stroj od 500 bara grije vodu do 130 °C i skida masne mrlje i prljavštinu s betona i kamena. Pogledajte test prije i poslije. Besplatna procjena.',
    keywords: [
        'pranje vrućom vodom',
        'visokotlačno pranje vrućom vodom',
        'čišćenje ulja s betona',
        'mrlje od ulja na betonu',
        'uklanjanje žvakaćih guma',
        'pranje poslovnih prostora Zagreb',
    ],
    alternates: { canonical: SLUG },
    openGraph: {
        title: 'Ulje i žvakaće s kamenog poda: pranje vrućom vodom od 130 °C',
        description:
            'Test stroja od 500 bara s vrućom vodom na kamenom podu punom ulja i žvakaćih. Stvarne fotografije prije i poslije.',
        url: `https://slaufismrk.com${SLUG}`,
        type: 'article',
        images: [OG],
    },
};

const faq = [
    {
        q: 'Može li vruća voda od 130 °C oštetiti beton ili kamen?',
        a: 'Beton i tvrde kamene ploče podnose i temperaturu i tlak. Kod mekšeg kamena, starih fuga i premaza smanjujemo tlak, a prije posla operemo mali probni dio. Ako površina ne podnosi pranje, to vam kažemo prije početka.',
    },
    {
        q: 'Skida li pranje vrućom vodom žvakaće gume?',
        a: 'Vruća voda omekša žvakaću pa većina ide već s pranjem. Stare, zgažene žvakaće ponekad ostave svijetli trag. Za njih testiramo posebna sredstva i na probnom dijelu vam pokažemo što se može postići.',
    },
    {
        q: 'Mogu li se skinuti stare mrlje od ulja s betona u garaži?',
        a: 'Svježe mrlje i masnoća na površini idu dobro. Ulje koje je godinama ulazilo u beton često ostane kao svjetlija sjena, pa potpuno uklanjanje takvih mrlja ne obećavamo.',
    },
    {
        q: 'Koliko košta pranje vrućom vodom?',
        a: 'Ovisi o površini, vrsti mrlja i pristupu vodi i struji. Za manje površine okvirnu cijenu javimo po slikama, a za veće prvo operemo probni dio. Procjena je besplatna.',
    },
];

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Pranje vrućom vodom: ulje i žvakaće s betona', item: `https://slaufismrk.com${SLUG}` },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Pranje vrućom vodom pod visokim tlakom: ulje i žvakaće s betona',
    description:
        'Test stroja od 500 bara koji grije vodu do 130 °C na kamenom podu s mrljama od ulja i žvakaćim gumama. Kako smo radili i što ova metoda može, a što ne.',
    author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
    publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
    datePublished: '2026-10-05',
    dateModified: '2026-10-10',
    image: `https://slaufismrk.com${IMG}/pranje-vrucom-vodom-rotacijski-cistac.jpg`,
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
                        <span className={styles.category}>Naš posao</span>
                        <h1>Pranje vrućom vodom pod visokim tlakom: ulje i žvakaće s betona</h1>
                        <p className={styles.meta}>Objavljeno 5. listopada 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Masna mrlja na betonu, u garaži ili na{' '}
                            <Link href="/usluge/pranje-prilaza">prilazu kući</Link>, teško ide s hladnom vodom, koliko
                            god jak bio mlaz. Voda klizi preko masnoće, razmaže je i ostavi istu tamnu sjenu. Isto je sa
                            žvakaćim gumama koje su se godinama gazile u kamene ploče. Zato smo uveli <strong>pranje vrućom vodom pod visokim tlakom</strong>:
                            stroj radi do 500 bara i grije vodu do 130 °C. Prvi veći test napravili smo na kamenom podu
                            punom ulja, prljavštine i žvakaćih. Ovdje su fotografije prije i poslije, kako smo radili i što
                            ova metoda može, a što ne.
                        </p>

                        <figure className={styles.figure}>
                            <Image
                                src={`${IMG}/pranje-vrucom-vodom-rotacijski-cistac.jpg`}
                                alt="Rotacijski čistač s vrućom vodom pere kamene ploče, iz poklopca izlazi para"
                                width={901}
                                height={1600}
                                className={styles.figureImg}
                                priority
                            />
                            <figcaption>Rotacijski čistač s vrućom vodom. Iza njega ostaje svijetla, čista ploča.</figcaption>
                        </figure>

                        <h2>Zašto hladna voda ne skida ulje</h2>
                        <p>
                            Ulje i mast ne vole vodu. Hladan mlaz ih pomakne s jednog mjesta na drugo, a dio ostane u
                            porama betona ili kamena. Vruća voda ih omekša i odvoji od podloge, pa ih mlaz može odnijeti.
                            Na 130 °C to ide brzo: masnoća se otopi, prljavština popusti, a za isti rezultat treba manje
                            kemije.
                        </p>
                        <p>
                            Žvakaća guma se ponaša slično. Hladna je tvrda i drži se za kamen, a vruća voda je omekša pa
                            se lakše odvoji od ploče. U garaži je to mrlja ispod auta, na terasi kafića masnoća ispod
                            stolova, a na ulazu u trgovinu žvakaće koje svi gaze.
                        </p>

                        <ArticleQuote
                            location="blog-vruca-voda"
                            // Bez izračuna po m²: cijena pranja vrućom vodom ovisi o mrljama, javlja se po slikama (FAQ ispod)
                            service=""
                            variant="diy"
                            title="Ulje ili žvakaće na podu? Pošaljite fotku"
                            whatsappText="Pozdrav, imam mrlje od ulja i žvakaće na podu. Šaljem slike za procjenu."
                        />

                        <h2>Stroj od 500 bara i 130 °C</h2>
                        <p>
                            Kućni perači najčešće rade na 100 do 150 bara, i to s hladnom vodom. Naš stroj radi do 500
                            bara i grije vodu do 130 °C. Pun tlak ne koristimo svugdje: na mekšem kamenu, starim fugama
                            ili žbuci previše tlaka može oštetiti površinu, pa ga uvijek prilagodimo podlozi. Na tvrdom
                            betonu i kamenim pločama koje podnose jak mlaz razlika se vidi odmah.
                        </p>

                        <h2>Kako smo radili test</h2>
                        <p>
                            Test smo radili noću. Zonu smo ogradili trakom i prošli pod rotacijskim čistačem. To je
                            okrugli poklopac s mlaznicama koje se vrte ispod njega i cijelo vrijeme stoje na istoj visini
                            od poda. Pod ispadne ujednačen, bez pruga kakve ostavlja ručna mlaznica, a voda i nečistoća ne
                            prskaju po zidovima i staklu. Para koju vidite na fotografijama je vruća voda koja isparava čim
                            izađe iz mlaznica.
                        </p>

                        <div className={styles.imageRow}>
                            <figure className={styles.figure}>
                                <Image
                                    src={`${IMG}/kamene-ploce-prije-pranja-vrucom-vodom.jpg`}
                                    alt="Kamene podne ploče prije pranja, tamne mrlje od ulja i žvakaće gume"
                                    width={901}
                                    height={1600}
                                    className={styles.figureImg}
                                    loading="lazy"
                                />
                                <figcaption>Prije. Tamne mrlje su ulje i prljavština, crne točke su žvakaće.</figcaption>
                            </figure>
                            <figure className={styles.figure}>
                                <Image
                                    src={`${IMG}/kamene-ploce-poslije-pranja-vrucom-vodom.jpg`}
                                    alt="Iste kamene ploče nakon pranja vrućom vodom pod visokim tlakom"
                                    width={901}
                                    height={1600}
                                    className={styles.figureImg}
                                    loading="lazy"
                                />
                                <figcaption>Isti pod nakon pranja vrućom vodom.</figcaption>
                            </figure>
                        </div>

                        <h2>Što pranje vrućom vodom skida, a što ne</h2>
                        <p>
                            Skida masne mrlje s površine, sivi sloj prljavštine koji se skuplja na podovima s puno koraka i
                            većinu žvakaćih. Na fotografiji poslije tamne mrlje su nestale, a ploče su vratile svoju boju.
                        </p>
                        <p>
                            Dvije stvari ne obećavamo. Ulje koje se godinama upijalo duboko u beton može ostati kao
                            svjetlija sjena. Stare, zgažene žvakaće ponekad ostave bijeli trag, pa za njih testiramo
                            posebna sredstva i po potrebi radimo drugi prolaz. Zato za veće površine prvo operemo probni
                            dio i pokažemo vam rezultat. Ponudu dajemo kad oboje vidimo što se može postići.
                        </p>

                        <figure className={styles.figure}>
                            <Image
                                src={`${IMG}/para-od-vruce-vode-na-kamenom-podu.jpg`}
                                alt="Svjetliji krug na kamenom podu gdje je prošao rotacijski čistač s vrućom vodom"
                                width={900}
                                height={1600}
                                className={styles.figureImg}
                                loading="lazy"
                            />
                            <figcaption>Gdje je čistač prošao, ploča je odmah svjetlija.</figcaption>
                        </figure>

                        <h2>Gdje sada radimo pranje vrućom vodom</h2>
                        <p>
                            Pranje vrućom vodom od sada je u našoj ponudi za Zagreb i okolicu, od Sesveta do Zaprešića i
                            Velike Gorice. Najviše smisla ima ondje gdje se skupljaju ulje, masnoća i žvakaće:
                        </p>
                        <ul>
                            <li>
                                garaže i <Link href="/usluge/pranje-prilaza">prilazi</Link> s mrljama od auta
                            </li>
                            <li>parkirališta, autoservisi i benzinske postaje</li>
                            <li>
                                <Link href="/usluge/pranje-terasa">terase</Link> kafića i restorana na koje kaplje masnoća
                            </li>
                            <li>ulazi u zgrade, trgovine i pješačke zone sa žvakaćim gumama</li>
                            <li>
                                podovi skladišta i hala, vidi <Link href="/usluge/poslovni-objekti">pranje poslovnih objekata</Link>
                            </li>
                        </ul>
                        <p>
                            Za poslovne prostore radimo i izvan radnog vremena, noću ili vikendom, da posao ne stoji. Za
                            obične tlakavce i okućnice bez ulja i dalje je dovoljno klasično pranje, a cijene su u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb">koliko košta pranje okućnice i tlakavaca</Link>.
                        </p>

                        <h2>Kako izgleda dogovor</h2>
                        <p>
                            Pošaljete nam par slika i okvirnu površinu. Za garažu ili prilaz okvirnu cijenu javimo po
                            slikama. Za veće prostore dođemo, operemo probni dio i tek onda šaljemo ponudu. Procjena je
                            besplatna, a slike nam je najlakše poslati na WhatsApp, +385 95 844 2806.
                        </p>

                        <h2>Česta pitanja</h2>
                        {faq.map(({ q, a }) => (
                            <div key={q}>
                                <h3>{q}</h3>
                                <p>{a}</p>
                            </div>
                        ))}

                        <div className={styles.ctaBox}>
                            <h3>Ulje ili žvakaće na podu?</h3>
                            <p>
                                Pošaljite nam par slika. Za garaže i prilaze okvirnu cijenu javimo po slikama, a za veće
                                prostore prvo operemo probni dio.
                            </p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={16} /> +385 95 844 2806
                                </a>
                                <Link href="/usluge/poslovni-objekti" className={styles.ctaBtnSecondary}>
                                    Pranje poslovnih objekata <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
