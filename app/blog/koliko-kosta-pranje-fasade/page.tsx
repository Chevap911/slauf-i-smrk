import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Koliko Košta Visokotlačno Pranje Fasade? Cijena 2026 — Šlauf i Šmrk',
    description: 'Sve o cijenama visokotlačnog pranja fasade u Zagrebu. Faktori koji utječu na cijenu, što uključuje usluga, i savjeti kako uštedjeti. Aktualne cijene 2026.',
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Koliko košta visokotlačno pranje fasade?',
        description: 'Detaljan vodič o cijenama pranja fasade u Zagrebu — faktori, usluga, savjeti.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-02-26',
        dateModified: '2026-02-26',
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
                        <h1>Koliko Košta Visokotlačno Pranje Fasade?</h1>
                        <p className={styles.meta}>Objavljeno 26. veljače 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Fasada je osobna iskaznica vašeg doma. S vremenom se na njoj nakupljaju alge, mahovine, prljavština i zagađenje
                            iz zraka koji narušavaju izgled, ali i oštećuju materijal. Visokotlačno pranje fasade najučinkovitiji je način
                            vraćanja izvornog izgleda — ali koliko to zapravo košta?
                        </p>

                        <h2>Okvirne cijene pranja fasade u Zagrebu (2026.)</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Manja fasada (do 80 m²)</span>
                                <strong>400 – 600 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Srednja fasada (80–150 m²)</span>
                                <strong>600 – 1.000 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Veća fasada (150+ m²)</span>
                                <strong>od 1.000 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Cijena po m²</span>
                                <strong>od 5 €/m²</strong>
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

                        <div className={styles.ctaBox}>
                            <h3>Zatražite besplatnu procjenu</h3>
                            <p>Javite nam se i dobit ćete točnu cijenu za vašu fasadu — bez obaveze.</p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385916400247" className={styles.ctaBtn}>
                                    <Phone size={18} /> +385 91 6400 247
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
