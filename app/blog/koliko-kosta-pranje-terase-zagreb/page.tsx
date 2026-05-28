import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Koliko košta pranje terase u Zagrebu? Čišćenje terase cijena 2026 | Šlauf i Šmrk',
    description: 'Tražite pranje terase cijena ili koliko košta pranje terase Zagreb? Konkretne cifre za betonske, keramičke i drvene terase, bez skrivenih troškova.',
    alternates: { canonical: '/blog/koliko-kosta-pranje-terase-zagreb' },
    openGraph: {
        title: 'Koliko košta pranje terase u Zagrebu? Čišćenje terase cijena 2026',
        description: 'Aktualne cijene pranja terase u Zagrebu uz pregled faktora koji utječu na ponudu i što je uključeno u uslugu.',
        url: 'https://slaufismrk.com/blog/koliko-kosta-pranje-terase-zagreb',
        type: 'article',
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
            name: 'Koliko košta pranje terase Zagreb',
            item: 'https://slaufismrk.com/blog/koliko-kosta-pranje-terase-zagreb',
        }
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Koliko košta pranje terase u Zagrebu? Čišćenje terase cijena 2026.',
        description: 'Detaljan vodič o cijenama pranja terase u Zagrebu: raspon cijena po materijalu, faktori, što je uključeno i kad se isplati kombinirati s fasadom.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-05-15',
        dateModified: '2026-05-15',
        image: 'https://slaufismrk.com/prije-poslje/terasa-leggiero-poslje-1.jpeg',
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

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Cijene</span>
                        <h1>Koliko košta pranje terase u Zagrebu? (2026.)</h1>
                        <p className={styles.meta}>Objavljeno 15. svibnja 2026. &bull; Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Ako tražite <strong>&quot;pranje terase cijena&quot;</strong> ili <strong>&quot;koliko košta pranje terase Zagreb&quot;</strong>,
                            ovdje imate konkretne cifre, bez zaokruživanja prema gore i bez skrivenih stavki u ponudi.
                        </p>
                        <p>
                            Terasa je površina koja skuplja sve: prljavštinu od grila, zelenilo od kiše, mrlje od cvijetnjaka, masnoće od stolova.
                            I godinama izgleda &quot;dovoljno dobro&quot; -- sve dok jednog jutra ne primijetite da je postala siva.
                            Onda je pitanje samo jedno: koliko to košta oprati profesionalno?
                        </p>

                        <h2>Okvirne cijene pranja terase u Zagrebu (2026.)</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Do 50 m²</span>
                                <strong>od 200 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>50 – 100 m²</span>
                                <strong>od 250 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>100 – 200 m²</span>
                                <strong>od 450 €</strong>
                            </div>
                        </div>
                        <p>
                            Cijene se odnose na betonske, keramičke i kamene terase. Drvene terase imaju zasebnu kalkulaciju (detalji niže).
                            Sve informacije o samoj usluzi, opremi i procesu nalazite na stranici{' '}
                            <Link href="/usluge/pranje-terasa">pranje terasa u Zagrebu</Link>.
                        </p>

                        <h2>Od čega ovisi konačna cijena?</h2>

                        <h3>1. Materijal terase</h3>
                        <p>
                            Betonska ploča, keramičke pločice i kamen peru se na različitim pritiscima s različitom kemijom.
                            Kamen je najosjetljiviji -- previsok pritisak oštećuje površinu, pa koristimo niži tlak s dužim kontaktnim vremenom.
                            Cijena je slična, ali rad traje malo dulje.
                        </p>

                        <h3>2. Stanje površine</h3>
                        <p>
                            Terasa s tankim slojem prašine i terasa s trima sezonama zelenih naslaga, mrljama od grila i algama u fugama
                            -- to nisu isti posao. Tvrdokorne organske naslage zahtijevaju biorazgradivi tretman kemijom prije pranja.
                            Kod jako zaprljanih terasa taj korak dodaje 20-30% vremena.
                        </p>

                        <h3>3. Fuge i korov</h3>
                        <p>
                            Ako su fuge između ploča zarasle u korov ili zelene naslage, moramo izbiti sve to prije pranja.
                            Nuspojava: izbijemo i stari pijesak. Bez novog kvarcnog pijeska fuge ostaju prazne i korov se vraća za sezonu.
                            Fugiranje je dodatna stavka (1,50 -- 2,50 €/m²) i preporučujemo ga uz svaki veći zahvat.
                        </p>

                        <h3>4. Pristupačnost i kat</h3>
                        <p>
                            Za prizemne i niske terase vrijedi standardna cijena. Za terase na višim katovima bez direktnog pristupa
                            ponekad treba poseban pristup ili zaštita fasade ispod. Kažemo vam to na procjeni, ne na fakturi.
                        </p>

                        <h3>5. Kombiniranje s drugim radovima</h3>
                        <p>
                            Kad smo već na lokaciji,{' '}
                            <Link href="/usluge/pranje-okucnice">pranje stubišta i okolnih površina</Link> ili{' '}
                            <Link href="/usluge/pranje-prilaza">čišćenje prilaza</Link> košta manje nego zasebni dolazak.
                            Logistika se dijeli, cijena pada.
                        </p>

                        <h2>Drvene terase -- poseban slučaj</h2>
                        <p>
                            Drvo je jedina površina na kojoj ne koristimo visoki pritisak. Visokotlačni perač otvara drvena vlakna
                            i ubrzava propadanje, čak i ako je efekt odmah vizualno dobar.
                        </p>
                        <p>
                            Za drvene terase, balkonske podove i pergole koristimo kombinaciju niske temperature, niskog pritiska i
                            specijalnog sredstva za drvo koje uklanja sivilo i biološke naslage bez oštećenja vlakana. Više o tome na stranici{' '}
                            <Link href="/usluge/ciscenje-drvenih-povrsina">čišćenje drvenih površina</Link>.
                        </p>
                        <p>
                            Cijena drvenih terasa: <strong>5 -- 8 €/m²</strong>. Nešto skuplje od betona, ali zahvat traje dulje
                            i zahtijeva drugačiju opremu i kemiju.
                        </p>

                        <h2>Što je uključeno u cijenu?</h2>
                        <p>Kad naša ekipa dođe na pranje terase, bez dodatnih troškova dobivate:</p>
                        <ul>
                            <li>Dolazak s profesionalnom opremom (rotacijski surface cleaneri, visokotlačni agregat s velikim protocima)</li>
                            <li>Biorazgradiva kemija prilagođena materijalu</li>
                            <li>Uklanjanje algi, mahovine, mrlja, zelenila i nakupljene prljavštine</li>
                            <li>Ravnomjerno pranje bez &quot;zebra efekta&quot; koji ostavljaju kućni aparati</li>
                            <li>Fotografija rezultata</li>
                        </ul>
                        <p>
                            Fugiranje kvarcnim pijeskom i zaštitna impregnacija su zasebne stavke, ali možete ih dodati u istom dolasku.
                        </p>

                        <h2>Zašto je razlika između kućnog i profesionalnog perača tolika?</h2>
                        <p>
                            Kućni aparati imaju pritisak 100-130 bara, ali mali protok (8-10 litara/minuti).
                            Naša oprema radi na 150-200 bara s protokom 15-25 litara/minuti.
                            Rotacijski surface cleaneri peru ravnomjerno i bez prskanja prljavštine po fasadi, staklu i namještaju.
                        </p>
                        <p>
                            Praktičan prijevod: terasu od 60 m² peremo za 2 sata. S kućnim aparatom i standardnom mlaznicom
                            -- pola dana, mokre cipele i pruge po cijeloj ploči.
                        </p>

                        <h2>Isplati li se kombinirati terasu i fasadu u jednom dolasku?</h2>
                        <p>
                            Da, i to jako. Kad smo već na lokaciji s opremom i ekipom,{' '}
                            <Link href="/usluge/pranje-fasade">pranje fasade</Link> dodajemo uz znatno manji trošak nego da
                            dolaze zasebno. Jedan dolazak, jedan dogovor, cijeli eksterijer sredi se u jednom danu.
                        </p>
                        <p>
                            Isti princip vrijedi za{' '}
                            <Link href="/usluge/pranje-okucnice">pranje okućnice i tlakavaca</Link> -- ako imate dvorište uz terasu,
                            ima smisla obuhvatiti sve u jednoj posjeti.
                        </p>

                        <h2>Često postavljana pitanja</h2>

                        <h3>Koliko često treba prati terasu?</h3>
                        <p>
                            Za terase u Zagrebu i okolici jednom godišnje ili svake dvije godine, ovisno o izloženosti.
                            Terase okrenute prema sjeveru, u sjeni ili uz zelenilo trebaju češće pranje jer vlaga i hlad potiču rast algi.
                        </p>

                        <h3>Mogu li pranje terase kombinirati s pranjem fasade?</h3>
                        <p>
                            Da, i preporučujemo to. Kad smo na lokaciji, dolazni trošak dijeli se na oba zahvata.
                            Ekipa završi fasadu, spusti se i opere terasu. Jedan posjet, jedan dogovor.
                        </p>

                        <h3>Trebam li ukloniti namještaj s terase?</h3>
                        <p>
                            Zamolimo vas da uklonite sitni namještaj i dekoracije. Teže komade (vrtni setovi, cvijetnjaci)
                            možemo pomaknuti sami uz dogovor. Kažite nam na procjeni što imate.
                        </p>

                        <h3>Radite li i na terasama stambenih zgrada?</h3>
                        <p>
                            Da. Balkoni i terase u zgradama redovit su dio našeg posla. Ako planirate organizirati pranje
                            za više stanova u zgradi, kontaktirajte nas za grupnu ponudu.
                        </p>

                        <h3>Što se dogodi s vodom koja se skuplja za pranja?</h3>
                        <p>
                            Otpadna voda ide u najbliži odvod ili kanalizacijski otvor. Kemija koju koristimo je biorazgradiva
                            i sigurna za odvod. Za terase bez direktne odvodnje dogovaramo rješenje unaprijed.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Zatražite besplatnu procjenu</h3>
                            <p>Dolazimo na procjenu, vidimo površinu i tip materijala, dajemo točnu cijenu. Bez obaveze.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> 095 844 2806
                                </a>
                                <Link href="/#kontakt" className={styles.ctaBtnSecondary}>
                                    Ispunite formu <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.related}>
                            <h3>Možda vas zanima i:</h3>
                            <ul>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-fasade">
                                        Koliko košta pranje fasade? Čišćenje fasade cijena 2026.
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb">
                                        Koliko košta pranje okućnice i tlakavaca? Čišćenje okućnice cijena 2026.
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/znakovi-da-fasadi-treba-pranje">
                                        5 znakova da vašoj fasadi hitno treba dubinsko pranje
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
