'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: "Mateja Ž.",
        context: "Pranje fasade",
        text: "Fasada je nakon pranja izgledala osjetno svjetlije i urednije. Ekipa je došla na vrijeme, zaštitila okolinu i sve ostavila čisto.",
        rating: 5
    },
    {
        name: "Iva K.",
        context: "Čišćenje okućnice",
        text: "Tlakavci i terasa bili su puni mahovine, a razlika nakon čišćenja bila je ogromna. Posebno mi je značilo što je procjena bila jasna odmah na početku.",
        rating: 5
    },
    {
        name: "Denijal J.",
        context: "Fasada + prilaz",
        text: "Dogovor je bio brz, komunikacija uredna, a rezultat točno onakav kakav smo očekivali. Preporučujem za fasade i vanjske površine.",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="recenzije" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Dojmovi nakon čišćenja</h2>
                    <p className={styles.subtitle}>Najviše nam znače preporuke nakon završenog posla i vidljive razlike na terenu.</p>
                </div>

                <div className={styles.grid}>
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
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
            </div>
        </section>
    );
}
