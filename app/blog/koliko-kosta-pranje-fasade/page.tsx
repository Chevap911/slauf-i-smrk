import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Koliko košta pranje fasade? Čišćenje fasade cijena 2026 | Šlauf i Šmrk',
    description: 'Tražite pranje fasade cijena ili čišćenje fasade cijena? Donosimo aktualne cijene za Zagreb, faktore koji utječu na ponudu i što je uključeno u uslugu 2026.',
    alternates: { canonical: '/blog/koliko-kosta-pranje-fasade' },
    openGraph: {
        title: 'Koliko košta pranje fasade? Čišćenje fasade cijena 2026',
        description: 'Aktualne cijene za pranje i čišćenje fasade u Zagrebu, uz pregled faktora koji najviše utječu na ponudu.',
        url: 'https://slaufismrk.com/blog/koliko-kosta-pranje-fasade',
        type: 'article',
    },
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Koliko košta pranje fasade? Vodič kroz cijene čišćenja fasade',
        description: 'Detaljan vodič o cijenama pranja i čišćenja fasade u Zagrebu: raspon cijena, faktori, usluga i savjeti.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-02-26',
        dateModified: '2026-04-21',
    };

    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Cijene</span>
                        <h1>Koliko košta pranje fasade?</h1>
                        <p className={styles.meta}>Objavljeno 26. veljače 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Ako tražite pojmove poput <strong>&quot;pranje fasade cijena&quot;</strong> ili <strong>&quot;čišćenje fasade cijena&quot;</strong>,
                            ovdje ćete dobiti jasan pregled raspona cijena, što utječe na ponudu i kada se profesionalno pranje fasade isplati.
                        </p>
                        <p>
                            Fasada je osobna iskaznica vašeg doma. S vremenom se na njoj nakupljaju alge, mahovine, prljavština i zagađenje
                            iz zraka koji narušavaju izgled, ali i oštećuju materijal. Visokotlačno pranje fasade najučinkovitiji je način
                            vraćanja izvornog izgleda — ali koliko to zapravo košta?
                        </p>

                        <h2>Okvirne cijene pranja fasade u Zagrebu (2026.)</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Manja fasada (do 80 m²)</span>
                                <strong>320 – 480 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Srednja fasada (80–150 m²)</span>
                                <strong>320 – 900 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Veća fasada (150+ m²)</span>
                                <strong>od 600 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Cijena po m²</span>
                                <strong>4 – 6 €/m²</strong>
                            </div>
                        </div>

                        <h2>Od čega ovisi cijena?</h2>
                        <ul>
                            <li><strong>Veličina fasade</strong> — Veće površine znače više rada i vremena, ali cijena po m² obično je niža.</li>
                            <li><strong>Stupanj zaprljanosti</strong> — Fasade s gustom mahovinom i algama zahtijevaju više prolaza i sredstava za čišćenje.</li>
                            <li><strong>Tip fasade</strong> — Različiti materijali (žbuka, kamen, drvo) zahtijevaju različite pristupe i opremu.</li>
                            <li><strong>Pristupačnost</strong> — Veća visina ili teže dostupna područja mogu povećati cijenu zbog dodatne opreme.</li>
                            <li><strong>Lokacija</strong> — U udaljenim mjestima može se zaračunati putni trošak.</li>
                        </ul>

                        <h2>Što uključuje cijena usluge?</h2>
                        <p>Kod nas, cijena visokotlačnog pranja fasade uključuje:</p>
                        <ul>
                            <li>Dolazak s kompletnom profesionalnom opremom</li>
                            <li>Ekološka sredstva za čišćenje (biorazgradiva)</li>
                            <li>Temeljito uklanjanje algi, mahovine i prljavštine</li>
                            <li>Ispiranje čistom vodom</li>
                            <li>Odvoz otpadnih voda (po potrebi)</li>
                        </ul>
                        <p>
                            Ako želite odmah vidjeti kako izgleda sama usluga i što sve radimo na terenu, otvorite i našu glavnu stranicu za{' '}
                            <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link>.
                        </p>

                        <h2>Trebam li profesionalno čišćenje fasade?</h2>
                        <p>
                            Da, ako primijetite zelene naslage, tamne mrlje ili općenito prljav izgled fasade. Profesionalnim čišćenjem:
                        </p>
                        <ul>
                            <li>Sprječavate oštećenja koje uzrokuju alge i mahovine</li>
                            <li>Produžujete životni vijek fasadne boje</li>
                            <li>Podižete estetsku i tržišnu vrijednost nekretnine</li>
                            <li>Osiguravate zdraviji životni prostor</li>
                        </ul>

                        <h2>Koliko često trebam prati fasadu?</h2>
                        <p>
                            Preporučujemo pranje svake <strong>2–3 godine</strong>. Fasade okrenute prema sjeveru ili u sjeni drveća
                            trebaju češće čišćenje jer su podložnije rastu algi i mahovine.
                        </p>
                        <p>
                            Ako uz fasadu želite urediti i kompletan vanjski dio kuće, često se isplati kombinirati{' '}
                            <Link href="/usluge/pranje-okucnice">pranje okućnice</Link> i prilaza u istom dolasku.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Zatražite besplatnu procjenu</h3>
                            <p>Javite nam se i dobit ćete točnu cijenu za vašu fasadu — bez obaveze.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> +385 95 844 2806
                                </a>
                                <Link href="/#kontakt" className={styles.ctaBtnSecondary}>
                                    Ispunite formu <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
