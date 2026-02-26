import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './blog.module.css';

export const metadata: Metadata = {
    title: 'Blog — Savjeti za Čišćenje | Šlauf i Šmrk',
    description: 'Korisni savjeti i informacije o visokotlačnom čišćenju, kemijskom čišćenju i održavanju doma. Blog Šlauf i Šmrk.',
};

const articles = [
    {
        title: 'Koliko košta visokotlačno pranje fasade?',
        excerpt: 'Sve o cijenama pranja fasade u Zagrebu — od čega ovisi cijena, što uključuje usluga i kako uštedjeti.',
        slug: '/blog/koliko-kosta-pranje-fasade',
        date: '2026-02-26',
        category: 'Cijene',
    },
];

export default function BlogIndex() {
    return (
        <div className={styles.page}>
            <section className={styles.hero}>
                <div className="container">
                    <h1>Blog</h1>
                    <p>Savjeti, upute i korisne informacije o čišćenju i održavanju vašeg doma</p>
                </div>
            </section>

            <section className={styles.articles}>
                <div className="container">
                    <div className={styles.grid}>
                        {articles.map((article, i) => (
                            <Link key={i} href={article.slug} className={styles.card}>
                                <span className={styles.category}>{article.category}</span>
                                <h2>{article.title}</h2>
                                <p>{article.excerpt}</p>
                                <div className={styles.cardFooter}>
                                    <span className={styles.date}>
                                        <Calendar size={14} /> {new Date(article.date).toLocaleDateString('hr-HR')}
                                    </span>
                                    <span className={styles.readMore}>
                                        Pročitajte <ArrowRight size={14} />
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
