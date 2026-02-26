'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: "Mateja Ž.",
        text: "“Njihov pristup poslu je izvanredan - fasada mi nikada nije izgledala bolje! Momci su nasmijani, profesionalni i brzi. Je....na ekipa :)!\"",
        rating: 5
    },
    {
        name: "Iva K.",
        text: "\"Super su očistili fasadu i okućnicu, kad su došli sam i žicala da mi i auto usput operu pa su mi i to uskočili odradit.\"",
        rating: 5
    },
    {
        name: "Denijal J.",
        text: "\"Šlauf i Šmrk hahah. Super ekipa, super delaju. \"",
        rating: 5
    }
];

export default function Testimonials() {
    return (
        <section id="recenzije" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Što klijenti misle?</h2>
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
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
