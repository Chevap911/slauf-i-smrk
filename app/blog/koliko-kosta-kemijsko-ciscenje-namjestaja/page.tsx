import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Koliko košta kemijsko čišćenje namještaja? Cijene garniture, trosjeda i madraca 2026 | Šlauf i Šmrk',
    description:
        'Kemijsko čišćenje garniture od 80 €, trosjed od 40 €, madrac od 30 €, tepih od 5 €/m². Realne cijene dubinskog čišćenja namještaja u Zagrebu i što sve ulazi u uslugu.',
    alternates: { canonical: '/blog/koliko-kosta-kemijsko-ciscenje-namjestaja' },
    openGraph: {
        title: 'Koliko košta kemijsko čišćenje namještaja? Cijene 2026.',
        description:
            'Realne cijene kemijskog (dubinskog) čišćenja garniture, trosjeda, madraca i tepiha u Zagrebu, bez skrivenih troškova.',
        url: 'https://slaufismrk.com/blog/koliko-kosta-kemijsko-ciscenje-namjestaja',
        type: 'article',
        images: [
            {
                url: '/projekti/projekt-3.jpeg',
                width: 1200,
                height: 1600,
                alt: 'Garnitura nakon kemijskog dubinskog čišćenja, Zagreb',
            },
        ],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Početna',
            item: 'https://slaufismrk.com/',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://slaufismrk.com/blog',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Koliko košta kemijsko čišćenje namještaja',
            item: 'https://slaufismrk.com/blog/koliko-kosta-kemijsko-ciscenje-namjestaja',
        },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Koliko košta kemijsko čišćenje namještaja? Cijene garniture, trosjeda i madraca 2026.',
        description:
            'Transparentan vodič kroz cijene kemijskog i dubinskog čišćenja garniture, trosjeda, fotelja, madraca i tepiha u Zagrebu.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-07-06',
        dateModified: '2026-07-06',
        image: 'https://slaufismrk.com/projekti/projekt-3.jpeg',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Koliko košta kemijsko čišćenje garniture u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Kompletna garnitura (trosjed, dvosjed i fotelja) kreće se od 80 €. Pojedinačno: trosjed od 40 €, dvosjed od 30 €, fotelja od 20 €. Točna cijena ovisi o veličini, materijalu i zaprljanosti, a potvrđujemo je besplatnom procjenom prije početka.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko često treba dubinski čistiti garnituru?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Preporuka je svakih 12 do 18 mjeseci za prosječno kućanstvo. Ako imate malu djecu ili kućne ljubimce, svakih 6 do 12 mjeseci. Madrace je dobro dubinski očistiti barem jednom godišnje zbog grinja i znoja.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko dugo se suši namještaj nakon kemijskog čišćenja?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nakon ekstrakcijskog čišćenja namještaj je prohodan za 4 do 8 sati, ovisno o tkanini i prozračivanju prostorije. Madraci se obično suše preko noći. Ne ostavljamo natopljen namještaj, stroj izvlači najveći dio vlage odmah.',
                },
            },
            {
                '@type': 'Question',
                name: 'Mogu li se ukloniti mrlje od kave, vina ili kućnih ljubimaca?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Svježe mrlje od kave, vina i hrane uklanjamo u velikoj većini slučajeva. Stare mrlje koje su ušle duboko u vlakna mogu se značajno izblijediti, ali ne garantiramo potpuno uklanjanje. Na procjeni ćemo vam iskreno reći što je realno.',
                },
            },
            {
                '@type': 'Question',
                name: 'Dolazite li na adresu i što trebam pripremiti?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Da, čistimo kod vas doma, u Zagrebu i okolici. Trebamo samo pristup utičnici i prostor oko namještaja. Sve ostalo, strojeve, kemiju i zaštitu poda, donosimo mi.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
                        <h1>Koliko košta kemijsko čišćenje namještaja?</h1>
                        <p className={styles.meta}>Objavljeno 6. srpnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Ako tražite <strong>&quot;kemijsko čišćenje garniture&quot;</strong>, <strong>&quot;dubinsko čišćenje trosjeda&quot;</strong> ili
                            cijenu čišćenja madraca u Zagrebu, ovdje imate konkretan cjenik i objašnjenje što za taj novac dobivate.
                        </p>
                        <p>
                            Garnitura na kojoj se godinama sjedi, jede i gleda televizija upije znoj, prašinu i mrlje koje usisavač ne
                            dira. Presvlake koje se ne skidaju ne možete strpati u perilicu. Tu nastupa dubinsko ekstrakcijsko čišćenje.
                        </p>
                        <p>
                            Odgovor na pitanje cijene nije &quot;ovisi&quot; bez objašnjenja. Evo konkretnih brojki, što na njih utječe i
                            što je realno očekivati od mrlja.
                        </p>

                        <h2>Cjenik kemijskog čišćenja u Zagrebu (2026.)</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Kompletna garnitura (3+2+1)</span>
                                <strong>od 80 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Trosjed</span>
                                <strong>od 40 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Dvosjed</span>
                                <strong>od 30 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Fotelja</span>
                                <strong>od 20 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Madrac (jednostruki)</span>
                                <strong>od 30 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Madrac (bračni)</span>
                                <strong>od 40 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Tepih</span>
                                <strong>od 5 € po m²</strong>
                            </div>
                        </div>
                        <p>
                            Cijene su početne i vrijede za standardne veličine i uobičajenu zaprljanost. Kutne garniture, sjedeće
                            garniture od osjetljivih tkanina i jače zaprljani komadi idu po procjeni. Procjena je besplatna i cijena
                            koju dogovorimo je fiksna, na fakturi nema iznenađenja.
                        </p>
                        <p>
                            Detalje o samoj usluzi imate na stranici{' '}
                            <Link href="/usluge/kemijsko-ciscenje-namjestaja" className={styles.inlineLink}>
                                kemijsko čišćenje namještaja
                            </Link>
                            .
                        </p>

                        <div className={styles.beforeAfter}>
                            <div className={styles.beforeAfterItem}>
                                <Image
                                    src="/projekti/projekt-3.jpeg"
                                    alt="Garnitura nakon kemijskog dubinskog čišćenja ekstrakcijskim strojem, Zagreb"
                                    title="Garnitura nakon dubinskog čišćenja"
                                    width={700}
                                    height={933}
                                    className={styles.beforeAfterImg}
                                />
                                <span className={styles.beforeAfterLabel}>Naš rad</span>
                            </div>
                        </div>

                        <h2>Od čega ovisi konačna cijena?</h2>

                        <h3>1. Materijal i tip tkanine</h3>
                        <p>
                            Mikrofibra i standardne tkanine čiste se najbrže. Prirodni materijali poput pamuka, lana i vune traže
                            nježniju kemiju i niže temperature, pa rad traje duže. Za osjetljive tkanine prvo testiramo sredstvo na
                            skrivenom dijelu.
                        </p>

                        <h3>2. Stupanj zaprljanosti i vrsta mrlja</h3>
                        <p>
                            Redovito održavana garnitura i garnitura s pet godina mrlja od kave, dječjih ruku i kućnih ljubimaca nisu
                            isti posao. Tvrdokorne mrlje traže predtretman, dodatne prolaze i više vremena.
                        </p>

                        <h3>3. Veličina i konfiguracija</h3>
                        <p>
                            Kutna garnitura od šest sjedećih mjesta ima dvostruko više površine od trosjeda. Skidivi jastuci čiste se
                            s obje strane, što je temeljitije, ali i dulje.
                        </p>

                        <h3>4. Madraci i grinje</h3>
                        <p>
                            Madrac upija znoj svake noći i s vremenom postaje dom grinjama. Dubinsko čišćenje s ekstrakcijom uklanja
                            i nečistoću i alergene. Ako imate alergije ili se budite začepljeni, madrac je prvi kandidat, ne garnitura.
                        </p>

                        <h2>Kako izgleda dubinsko čišćenje?</h2>
                        <p>
                            Koristimo ekstrakcijsku metodu: otopina se pod tlakom utisne u tkaninu, razgradi nečistoću, a stroj u istom
                            prolazu izvuče vodu zajedno s prljavštinom. Vidite točno što je izašlo iz vašeg &quot;čistog&quot; trosjeda,
                            voda u spremniku obično bude smeđa.
                        </p>
                        <p>
                            Postupak po komadu namještaja traje 30 do 60 minuta. Namještaj je prohodan za 4 do 8 sati, madraci se suše
                            preko noći.
                        </p>

                        <h2>Koliko često dubinski čistiti garnituru?</h2>
                        <p>
                            Prosječno kućanstvo: svakih 12 do 18 mjeseci. S malom djecom ili kućnim ljubimcima: svakih 6 do 12 mjeseci.
                            Madraci: jednom godišnje. Ako se na garnituri vide masne fleke na naslonima za ruke ili tkanina mijenja boju
                            na sjedištima, rok je već prošao.
                        </p>
                        <p>
                            Isti stroj i istu kemiju koristimo i za unutrašnjost automobila, pa ako vas zanima sjedala i tepisi u autu,
                            pogledajte{' '}
                            <Link href="/usluge/detailing-automobila" className={styles.inlineLink}>
                                dubinsko čišćenje automobila
                            </Link>
                            .
                        </p>

                        <h2>Često postavljana pitanja</h2>

                        <div className={styles.faq}>
                            <div className={styles.faqItem}>
                                <h3>Koliko košta kemijsko čišćenje garniture u Zagrebu?</h3>
                                <p>
                                    Kompletna garnitura (trosjed, dvosjed i fotelja) od 80 €. Pojedinačno: trosjed od 40 €, dvosjed od
                                    30 €, fotelja od 20 €. Točnu cijenu potvrđujemo besplatnom procjenom.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Koliko često treba dubinski čistiti garnituru?</h3>
                                <p>
                                    Svakih 12 do 18 mjeseci za prosječno kućanstvo, svakih 6 do 12 mjeseci ako imate djecu ili kućne
                                    ljubimce. Madrace barem jednom godišnje.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Koliko dugo se suši namještaj?</h3>
                                <p>
                                    4 do 8 sati, ovisno o tkanini i prozračivanju. Madraci preko noći. Stroj izvlači najveći dio vlage
                                    odmah, ništa ne ostaje natopljeno.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Mogu li se ukloniti mrlje od kave, vina ili ljubimaca?</h3>
                                <p>
                                    Svježe mrlje u velikoj većini slučajeva da. Stare, duboko upijene mrlje značajno blijede, ali potpuno
                                    uklanjanje ne garantiramo. Na procjeni dobivate iskren odgovor prije nego što platite išta.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Dolazite li na adresu?</h3>
                                <p>
                                    Da, čistimo kod vas doma, u Zagrebu i okolici. Trebamo samo utičnicu i prostor oko namještaja, sve
                                    ostalo donosimo mi.
                                </p>
                            </div>
                        </div>

                        <p className={styles.closing}>
                            Nema skrivenih troškova. Pošaljete nam fotku garniture ili madraca na WhatsApp, dobijete cijenu, dogovorimo
                            termin. Ako se ne dogovorimo, nema frke.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Zatražite besplatnu procjenu</h3>
                            <p>Pošaljite fotku namještaja i dobit ćete točnu cijenu, bez obaveze.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> 095 844 2806
                                </a>
                                <Link href="/#kontakt" className={styles.ctaBtnSecondary}>
                                    Ispunite formu <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.relatedPosts}>
                            <h3>Možda vas zanima i:</h3>
                            <ul>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb">
                                        Koliko košta pranje okućnice i tlakavaca? Cijene 2026. <ArrowRight size={14} />
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
