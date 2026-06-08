'use client';

import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink } from 'lucide-react';
import styles from './Testimonials.module.css';

// TODO: zamijenite ovaj URL s točnim linkom na vaš Google profil / recenzije
// (npr. "Napiši recenziju" link iz Google Business profila ili g.page link).
const GOOGLE_REVIEWS_URL =
    'https://www.google.com/maps/search/?api=1&query=%C5%A0lauf+i+%C5%A0mrk+Zagreb';

const testimonials = [
    {
        name: "Bogdan Janjanin",
        context: "Pranje pročelja i prilaza",
        text: "Naručio sam čišćenje pročelja kuće i prilaza. Dečki su mrak. Mladi, brzi i odgovorni. Odrade sve po dogovoru, čak i više. Cijena i više nego pristupačna. Preporučujem svima.",
        rating: 5
    },
    {
        name: "Kuki Baldo",
        context: "Pranje terase (80 m²)",
        text: "Imam cca 80 m² terase uglavnom beton i pločice. Mislio sam da nije bila prljava. Ipak sam naručio čišćenje. Nakon što su je dečki očistili vidio sam koliko sam bio u krivu. Zahvalan sam na učinjenom poslu i toplo ih mogu preporučiti.",
        rating: 5
    },
    {
        name: "Andrej Maroš",
        context: "Pranje okućnice",
        text: "Dečki su brzi, ali efikasni. Okućnica nam je kao nova. Skinuli su i mrlje koje godinama nismo mogli ukloniti.",
        rating: 5
    },
    {
        name: "Ivan Matak",
        context: "Kemijsko čišćenje namještaja",
        text: "Napravljeno vrhunsko čišćenje svog namještaja (trosjed, stolice, taburet) u kući, koji je bio star 20 godina, nakon toga izgledalo je sve kao novo.",
        rating: 5
    },
    {
        name: "Senka Zadro",
        context: "Kauč + detailing auta",
        text: "Više puta sam koristila ove usluge i svaki put sam baš ugodno iznenađena. Prali su mi i kauč i auto i stvarno odrade top posao svaki put.",
        rating: 5
    },
    {
        name: "Hana Janjanin",
        context: "Pranje terase",
        text: "Odlična usluga i obavljen posao. Angažirala sam ih za čišćenje terase i sve je obavljeno brzo i profesionalno. Sve pohvale!",
        rating: 5
    },
    {
        name: "Jasminka Kosalec",
        context: "Tepih i tapeciran namještaj",
        text: "Savršeno odrađeno čišćenje tepiha i tapeciranog namještaja. Brzi, točni i efikasni.",
        rating: 5
    },
    {
        name: "Nina Cvijanović",
        context: "Čišćenje",
        text: "Sve pohvale za detaljno čišćenje i brz dogovor oko termina! Sve preporuke za ekipu.",
        rating: 5
    },
];

export default function Testimonials() {
    return (
        <section id="recenzije" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.googleBadge}
                    >
                        <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden="true">
                            <path fill="#FFC107" d="M43.6 20.1H42V20H24v8h11.3C33.7 32.6 29.3 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 7.9 3L37.5 9.4C34.2 6.3 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.6-.4-3.9z" />
                            <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.6 16 19 13 24 13c3.1 0 5.8 1.1 7.9 3l5.7-5.7C34.2 6.3 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" />
                            <path fill="#4CAF50" d="M24 44c5.2 0 9.9-1.9 13.5-5.1l-6.2-5.2C29.6 35.6 26.9 37 24 37c-5.3 0-9.7-3.4-11.3-8H6.3C9.6 38.4 16.3 44 24 44z" />
                            <path fill="#1976D2" d="M43.6 20.1H42V20H24v8h11.3c-.8 2.2-2.2 4.1-4.1 5.5l6.2 5.2C37.2 38.7 44 33 44 24c0-1.3-.1-2.6-.4-3.9z" />
                        </svg>
                        <span>5,0 · 40 Google recenzija</span>
                    </a>
                    <h2 className={styles.title}>Dojmovi naših klijenata</h2>
                    <p className={styles.subtitle}>Stvarne recenzije s Google Mapsa, neobrađene, kakve su stigle.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                            transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.06 }}
                        >
                            <div className={styles.quoteIcon}>
                                <Quote size={24} fill="var(--primary)" color="var(--primary)" />
                            </div>
                            <p className={styles.text}>{item.text}</p>
                            <div className={styles.footer}>
                                <div className={styles.stars}>
                                    {[...Array(item.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />
                                    ))}
                                </div>
                                <span className={styles.name}>{item.name}</span>
                                <span className={styles.context}>{item.context}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.ctaRow}>
                    <a
                        href={GOOGLE_REVIEWS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.allReviewsLink}
                    >
                        Pogledaj sve recenzije na Google-u
                        <ExternalLink size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}
