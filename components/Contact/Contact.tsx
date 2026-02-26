'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="kontakt" className={styles.contact}>
            <div className="container">
                <div className={styles.wrapper}>
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.title}>Spremni za <span className={styles.yellow}>čišćenje</span>?</h2>
                        <p className={styles.text}>
                            Javite nam se s povjerenjem. Tu smo da odgovorimo na sva vaša pitanja i dogovorimo termin koji vam najbolje odgovara.
                        </p>

                        <div className={styles.contactDetails}>
                            <a href="tel:+385916400247" className={styles.detailItem}>
                                <div className={styles.iconCircle}><Phone size={24} /></div>
                                <div>
                                    <span className={styles.label}>Nazovite nas</span>
                                    <span className={styles.value}>+385 91 6400 247</span>
                                </div>
                            </a>

                            <a href="mailto:info@slaufismrk.com" className={styles.detailItem}>
                                <div className={styles.iconCircle}><Mail size={24} /></div>
                                <div>
                                    <span className={styles.label}>Pošaljite upit</span>
                                    <span className={styles.value}>info@slaufismrk.com</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.formWrapper}
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Ime i prezime</label>
                                <input type="text" id="name" placeholder="Vaše ime" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="vaš@email.com" className={styles.input} />
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="service">Usluga</label>
                                <select id="service" className={styles.input}>
                                    <option>Pranje fasade</option>
                                    <option>Pranje okućnice</option>
                                    <option>Detailing auta</option>
                                    <option>Ostalo</option>
                                </select>
                            </div>
                            <div className={styles.formGroup}>
                                <label htmlFor="message">Poruka</label>
                                <textarea id="message" rows={4} placeholder="Kako vam možemo pomoći?" className={styles.input}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
                                Pošalji Upit
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
