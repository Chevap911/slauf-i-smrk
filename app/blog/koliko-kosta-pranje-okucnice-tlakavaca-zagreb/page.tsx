import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Koliko košta pranje okućnice i tlakavaca? Čišćenje okućnice cijena 2026 | Šlauf i Šmrk',
    description: 'Tražite čišćenje okućnice cijena ili pranje tlakavaca cijena? Donosimo realne cijene za Zagreb, faktore koji utječu na ponudu i što dobivate u usluzi 2026.',
    alternates: { canonical: '/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb' },
    openGraph: {
        title: 'Koliko košta pranje okućnice i tlakavaca? Cijene 2026.',
        description: 'Realne cijene za pranje okućnice, tlakavaca i betonskih kocki u Zagrebu, bez nejasnih raspona i skrivenih troškova.',
        url: 'https://slaufismrk.com/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb',
        type: 'article',
        images: [
            {
                url: '/blog/pranje-okucnice/terasa-leggiero-poslije.jpeg',
                width: 1200,
                height: 800,
                alt: 'Pranje terase - rezultat čišćenja tlakavaca Zagreb',
            },
        ],
    },
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Koliko košta pranje okućnice i tlakavaca? Vodič kroz cijene čišćenja okućnice 2026.',
        description: 'Transparentan vodič kroz cijene pranja i čišćenja okućnice, tlakavaca i betonskih kocki u Zagrebu.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-04-17',
        dateModified: '2026-04-21',
        image: 'https://slaufismrk.com/blog/pranje-okucnice/terasa-leggiero-poslije.jpeg',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Koliko košta pranje okućnice po kvadratnom metru u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cijena pranja okućnice u Zagrebu kreće se od 2 do 4 € po m² ovisno o veličini površine, stupnju zaprljanosti i količini korova u fugama. Manja dvorišta i terase obično ulaze u početni raspon od 100 do 200 €.',
                },
            },
            {
                '@type': 'Question',
                name: 'Uključuje li pranje tlakavaca i ponovno fugiranje pijeskom?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Osnovna cijena pranja ne uključuje kvarcni pijesak i fugiranje jer to ne žele svi klijenti. Međutim, toplo ga preporučujemo — bez novog pijeska, korov se vraća brže. Usluga fugiranja naplaćuje se dodatno, okvirno 1,50 do 2,50 € po m².',
                },
            },
            {
                '@type': 'Question',
                name: 'Mogu li mrlje od motornog ulja s betonskog prilaza potpuno nestati?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Svježe mrlje od ulja uklanjamo u gotovo 100% slučajeva uz specijalizirane odmašćivače i vruću vodu. Stare, duboko upijene mrlje na poroznom betonu mogu se značajno izblijediti, ali 100% garancija ovisi o starosti mrlje i tipu betona.',
                },
            },
            {
                '@type': 'Question',
                name: 'Trebam li biti kod kuće dok perete dvorište?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nije nužno. Dovoljno je da nam osigurate pristup dvorištu i priključku za vodu. Javit ćemo vam se kad završimo i fotografirati rezultat.',
                },
            },
        ],
    };

    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Cijene</span>
                        <h1>Koliko košta pranje okućnice i tlakavaca?</h1>
                        <p className={styles.meta}>Objavljeno 17. travnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Ako tražite <strong>&quot;čišćenje okućnice cijena&quot;</strong>, <strong>&quot;pranje tlakavaca cijena&quot;</strong> ili želite znati
                            koliko košta profesionalno čišćenje dvorišta u Zagrebu, ovdje imate pregled stvarnih raspona cijena i usluga.
                        </p>
                        <p>
                            Dvorište koje je godinama skupljalo mahovinu, korov između betonskih kocki i mrlje od auta — poznata slika.
                            U jednom trenutku to više ne možete ignorirati, i počnete tražiti: koliko to zapravo košta profesionalno oprati?
                        </p>
                        <p>
                            Odgovor nije &quot;ovisi&quot; bez objašnjenja. U ovom vodiču dajemo konkretne cijene, razlažemo što na njih
                            utječe i govorimo vam iskreno što možete očekivati — bez skrivenih troškova.
                        </p>

                        <h2>Okvirne cijene pranja okućnice u Zagrebu (2026.)</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Manja dvorišta i prilazi (do 50 m²)</span>
                                <strong>100 – 200 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Srednja dvorišta (50 – 100 m²)</span>
                                <strong>2 – 4 € po m²</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Veće površine (preko 100 m²)</span>
                                <strong>2 – 4 € po m²</strong>
                            </div>
                        </div>
                        <p>
                            Veće površine imaju nižu cijenu po kvadratu jer se oprema jednom doveze i postavi, a rad se amortizira na više
                            kvadrata. Za manja dvorišta ima smisla paušalna cijena.
                        </p>
                        <p>
                            Ako želite pregled po specifičnoj podlozi, otvorite i zasebne stranice za{' '}
                            <Link href="/usluge/pranje-tlakavaca" className={styles.inlineLink}>
                                pranje tlakavaca
                            </Link>
                            ,{' '}
                            <Link href="/usluge/pranje-terasa" className={styles.inlineLink}>
                                pranje terasa
                            </Link>{' '}
                            i{' '}
                            <Link href="/usluge/pranje-prilaza" className={styles.inlineLink}>
                                pranje prilaza
                            </Link>
                            .
                        </p>

                        {/* Slika PRIJE / POSLIJE */}
                        <div className={styles.beforeAfter}>
                            <div className={styles.beforeAfterItem}>
                                <Image
                                    src="/blog/pranje-okucnice/terasa-leggiero-prije.jpeg"
                                    alt="Terasa Leggiero Family Mall prije čišćenja — zarasle betonske kocke, mahovina i prljavština"
                                    title="Terasa prije profesionalnog pranja tlakavaca"
                                    width={700}
                                    height={467}
                                    className={styles.beforeAfterImg}
                                />
                                <span className={styles.beforeAfterLabel}>Prije</span>
                            </div>
                            <div className={styles.beforeAfterItem}>
                                <Image
                                    src="/blog/pranje-okucnice/terasa-leggiero-poslije.jpeg"
                                    alt="Terasa Leggiero Family Mall poslije čišćenja — čiste i blistave betonske kocke Zagreb"
                                    title="Terasa poslije profesionalnog pranja tlakavaca"
                                    width={700}
                                    height={467}
                                    className={styles.beforeAfterImg}
                                />
                                <span className={styles.beforeAfterLabel}>Poslije</span>
                            </div>
                        </div>

                        <h2>Od čega ovisi konačna cijena?</h2>

                        <h3>1. Stanje površine i vrsta prljavštine</h3>
                        <p>
                            Nije isto peremo li prašinu s asfalta ili uklanjamo debele slojeve mahovine, stare mrlje od motornog ulja i
                            zarasli korov. Tvrdokorne mrlje zahtijevaju specijaliziranu kemiju, više prolaza i više vremena — što se
                            odražava na cijenu.
                        </p>

                        <h3>2. Količina korova u fugama</h3>
                        <p>
                            Ako su vaše betonske kocke zarasle u korov, proces traje znatno dulje. Oprema mora izbiti sav korov i stari
                            prljavi pijesak iz fuga prije nego kreće pranje. Kod teže zaraslih dvorišta u Sesvetama ili Velikoj Gorici gdje
                            su kuće starije, ovo zna biti i 30–40% dodatnog vremena. Ako ste na{' '}
                            <Link href="/podrucje/zagreb" className={styles.inlineLink}>
                                području Zagreba i okolice
                            </Link>
                            , dolazimo bez putnih troškova.
                        </p>

                        <h3>3. Potreba za ponovnim fugiranjem</h3>
                        <p>
                            Kad visokotlačnim peračem izbijemo korov i mahovinu, izbijemo i stari pijesak. Bez novog kvarcnog pijeska, fuge
                            ostaju prazne i korov se vraća dvostruko brže. Fugiranje se naplaćuje dodatno — okvirno 1,50 do 2,50 € po m²
                            ovisno o širini fuga.
                        </p>

                        <h3>4. Dostupnost vode i odvodnja</h3>
                        <p>
                            U 99% slučajeva spajamo se na vaš priključak za vodu. Ako je pristup otežan ili odvodnja problematična, to
                            može blago utjecati na cijenu.
                        </p>

                        <h2>Što dobivate u cijenu usluge?</h2>
                        <p>
                            Kad naša ekipa dođe na{' '}
                            <Link href="/usluge/pranje-okucnice" className={styles.inlineLink}>
                                pranje okućnice
                            </Link>
                            , u cijenu je uračunato:
                        </p>
                        <ul>
                            <li>Dolazak s kompletnom profesionalnom opremom (rotacijski surface cleaneri, profesionalni visokotlačni perač)</li>
                            <li>Biorazgradiva kemija prilagođena vašoj vrsti površine</li>
                            <li>Temeljito uklanjanje mahovine, korova, mrlja i nakupljene prljavštine</li>
                            <li>Ravnomjerno pranje bez &quot;zebra efekta&quot; koji ostavljaju kućni aparati</li>
                            <li>Fotografija rezultata na kraju</li>
                        </ul>
                        <p>Fugiranje kvarcnim pijeskom nije uključeno u osnovnu cijenu, ali preporučujemo ga uz svako pranje tlakavaca.</p>

                        <h2>Zašto ne koristiti kućni visokotlačni perač?</h2>
                        <p>
                            Razumijemo logiku — kupite aparat za 400 € i oprete sami. Ali postoji razlika između <strong>pritiska</strong>{' '}
                            i <strong>protoka vode</strong>. Kućni aparati imaju visok pritisak, ali mali protok (litara u minuti). Naša
                            profesionalna oprema ima višestruko veći protok i rotacijske čistače koji peru ravnomjerno, bez prskanja
                            prljavštine po fasadi i prozorima.
                        </p>
                        <p>
                            Rezultat: dvorište od 80 m² mi operemo za 2–3 sata. S kućnim aparatom — cijeli vikend, bolna leđa i
                            &quot;šareni&quot; rezultat.
                        </p>
                        <p>
                            Ako vas zanima detaljna usporedba opreme, pročitajte naš post o{' '}
                            <Link href="/usluge/pranje-fasade" className={styles.inlineLink}>
                                visokotlačnom pranju fasade
                            </Link>{' '}
                            gdje objašnjavamo razliku u pritiscima i protocima.
                        </p>

                        <h2>Radimo i na komercijalnim objektima</h2>
                        <p>
                            Osim privatnih dvorišta, redovito čistimo terase restorana, kafića i tržnih centara. Na fotografijama iznad
                            prikazujemo primjer terase Leggiero kafića u Family Mallu — godinama su se nakupljale masne mrlje i mahovina,
                            a nakon jedne intervencije terasa je blistala kao nova.
                        </p>
                        <p>
                            Za zasebne objekte ili kombinirane radove često radimo zajedno{' '}
                            <Link href="/usluge/pranje-fasade" className={styles.inlineLink}>
                                pranje fasade
                            </Link>{' '}
                            i čišćenje dvorišta kako bi cijeli eksterijer bio usklađen.
                        </p>
                        <p>
                            Uz pranje tlakavaca, nudimo i{' '}
                            <Link href="/usluge/ciscenje-kamenih-povrsina" className={styles.inlineLink}>
                                čišćenje kamenih površina
                            </Link>{' '}
                            — prirodni kamen, granitne ploče i mramor zahtijevaju drugačiji pristup i niži tlak kako se površina ne bi
                            oštetila.
                        </p>

                        <h2>Često postavljana pitanja</h2>

                        <div className={styles.faq}>
                            <div className={styles.faqItem}>
                                <h3>Koliko košta pranje okućnice po kvadratnom metru u Zagrebu?</h3>
                                <p>
                                    Cijena pranja okućnice kreće se od 2 do 4 € po m² ovisno o veličini površine, stupnju
                                    zaprljanosti i količini korova u fugama. Manja dvorišta i terase obično ulaze u početni raspon od
                                    100 do 200 €.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Uključuje li pranje tlakavaca i ponovno fugiranje pijeskom?</h3>
                                <p>
                                    Osnovna cijena pranja ne uključuje kvarcni pijesak i fugiranje jer to ne žele svi klijenti.
                                    Međutim, toplo ga preporučujemo — bez novog pijeska, korov se vraća brže. Usluga fugiranja
                                    naplaćuje se dodatno, okvirno 1,50 do 2,50 € po m².
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Mogu li mrlje od motornog ulja s betonskog prilaza potpuno nestati?</h3>
                                <p>
                                    Svježe mrlje od ulja uklanjamo u gotovo 100% slučajeva uz specijalizirane odmašćivače i vruću vodu.
                                    Stare, duboko upijene mrlje mogu se značajno izblijediti, ali 100% garancija ovisi o starosti mrlje
                                    i tipu betona.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Trebam li biti kod kuće dok perete dvorište?</h3>
                                <p>
                                    Nije nužno. Dovoljno je da nam osigurate pristup dvorištu i priključku za vodu. Javit ćemo vam se
                                    kad završimo i fotografirati rezultat.
                                </p>
                            </div>
                        </div>

                        <p className={styles.closing}>
                            Nema skrivenih troškova ni iznenađenja. Dolazimo na besplatnu procjenu, vidimo stanje, dajemo točnu cijenu.
                            Ako se dogovorimo — super. Ako ne — nema frke.
                        </p>
                        <p className={styles.discount}>
                            🎉 <strong>Za prve klijente: 15% popusta na prvo čišćenje.</strong>
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Zatražite besplatnu procjenu</h3>
                            <p>Javite nam se i dobit ćete točnu cijenu za vaše dvorište — bez obaveze.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> 095 844 2806
                                </a>
                                <Link href="/kontakt" className={styles.ctaBtnSecondary}>
                                    Ispunite formu <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.relatedPosts}>
                            <h3>Možda vas zanima i:</h3>
                            <ul>
                                <li>
                                    <Link href="/blog/znakovi-da-fasadi-treba-pranje">
                                        5 znakova da vašoj fasadi hitno treba dubinsko pranje <ArrowRight size={14} />
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-fasade">
                                        Koliko košta pranje fasade? Čišćenje fasade cijena 2026. <ArrowRight size={14} />
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
