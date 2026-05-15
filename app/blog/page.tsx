import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import styles from './blog.module.css';

export const metadata: Metadata = {
    title: 'Blog — Savjeti za Čišćenje | Šlauf i Šmrk',
    description: 'Savjeti, vodiči kroz cijene i korisne informacije o pranju fasade, čišćenju okućnice, terasa, tlakavaca i održavanju doma. Blog Šlauf i Šmrk.',
    alternates: { canonical: '/blog' },
    openGraph: {
        title: 'Blog — Savjeti za Čišćenje | Šlauf i Šmrk',
        description: 'Savjeti, vodiči kroz cijene i korisne informacije o pranju fasade, čišćenju okućnice, terasa i tlakavaca.',
        url: 'https://slaufismrk.com/blog',
    },
};

const articles = [
    {
        title: 'Koliko košta pranje terase u Zagrebu? Čišćenje terase cijena 2026.',
        excerpt: 'Konkretne cifre za pranje betonskih, keramičkih i drvenih terasa u Zagrebu. Bez zaokruživanja prema gore i bez skrivenih stavki u ponudi.',
        slug: '/blog/koliko-kosta-pranje-terase-zagreb',
        date: '2026-05-15',
        category: 'Cijene',
    },
    {
        title: 'Koliko košta pranje okućnice i tlakavaca? Čišćenje okućnice cijena 2026.',
        excerpt: 'Transparentan vodič kroz cijene pranja dvorišta, tlakavaca i betonskih kocki u Zagrebu. Pokriva i upite poput čišćenje okućnice cijena i pranje tlakavaca cijena.',
        slug: '/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb',
        date: '2026-04-17',
        category: 'Cijene',
    },
    {
        title: '5 znakova da vašoj fasadi hitno treba dubinsko pranje',
        excerpt: 'Zelene mrlje, tamne pruge, bijeli praškasti sloj — fasada vam govori nešto. Otkrijte 5 jasnih znakova da je vrijeme za profesionalno pranje.',
        slug: '/blog/znakovi-da-fasadi-treba-pranje',
        date: '2026-04-13',
        category: 'Savjeti',
    },
    {
        title: 'Koliko košta pranje fasade? Čišćenje fasade cijena 2026.',
        excerpt: 'Sve o cijenama pranja fasade u Zagrebu — uključujući upite pranje fasade cijena i čišćenje fasade cijena, faktore ponude i što usluga uključuje.',
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
