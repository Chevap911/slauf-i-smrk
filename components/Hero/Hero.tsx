'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.wrapper}>
                    <motion.div
                        className={styles.content}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className={styles.title}>
                            Pranje fasada i okućnica - <span className={styles.highlight}>Zagreb</span>
                        </h1>
                        <p className={styles.description}>
                            Vaš dom zaslužuje blistav prvi dojam. Ekipa <strong>Šlauf i Šmrk</strong> profesionalno čisti fasade, dvorišta i kamen uz <strong>visokotlačno čišćenje</strong> koje uklanja mahovinu i tvrdokornu nečistoću - brzo, sigurno i efikasno.
                        </p>
                        <div className={styles.actions}>
                            <a href="#kontakt" className="btn btn-primary">
                                Zatražite Besplatnu Procjenu
                                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </a>
                            <a href="#usluge" className="btn btn-secondary" style={{ backgroundColor: 'transparent', border: '1px solid var(--secondary)', color: 'var(--secondary)' }}>
                                Naše Usluge
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.imageContainer}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        <div className={styles.mascotWrapper}>
                            <Image
                                src="/assets/brand-mascots.png"
                                alt="Šlauf i Šmrk Maskote"
                                width={800}
                                height={800}
                                className={styles.mascotImg}
                                priority
                                sizes="(max-width: 768px) 100vw, 50vw"
                                fetchPriority="high"
                            />
                            <div className={styles.floatingTag}>
                                <span>15% POPUSTA NA PRVO ČIŠĆENJE</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
