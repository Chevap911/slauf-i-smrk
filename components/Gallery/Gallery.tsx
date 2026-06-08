'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import styles from './Gallery.module.css';

const projectImages = [
    { src: "/projekti/projekt-1.jpeg", alt: "Čišćenje terase kafića Leggiero, poslije pranja betonskih kocki Zagreb" },
    { src: "/projekti/projekt-2.jpeg", alt: "Pranje terase kavane Ravnice, čiste pločice poslije visokotlačnog čišćenja" },
    { src: "/projekti/projekt-3.jpeg", alt: "Kemijsko čišćenje garniture, sofa poslije dubokog čišćenja Zagreb" },
    { src: "/projekti/projekt-5.jpeg", alt: "Profesionalno čišćenje vanjskih površina, projekt Šlauf i Šmrk Zagreb" },
    { src: "/projekti/projekt-6.jpeg", alt: "Visokotlačno pranje okućnice i dvorišta, projekt Šlauf i Šmrk" },
    { src: "/projekti/projekt-7.jpeg", alt: "Pranje vanjskih površina, referentni projekt Zagreb" },
    { src: "/projekti/projekt-8.jpeg", alt: "Profesionalno čišćenje terase i okućnice, rezultat Šlauf i Šmrk" },
    { src: "/projekti/projekt-9.jpeg", alt: "Visokotlačno pranje betona i tlakavaca, projekt Šlauf i Šmrk Zagreb" },
    { src: "/assets/gallery-6.jpg", alt: "Kemijsko čišćenje namještaja, projekt Šlauf i Šmrk" },
];

export default function Gallery() {
    const [activeImg, setActiveImg] = useState<{ src: string; alt: string } | null>(null);

    useEffect(() => {
        if (!activeImg) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveImg(null);
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [activeImg]);

    return (
        <section id="galerija" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                >
                    <h2 className={styles.title}>Naši projekti</h2>
                    <p className={styles.subtitle}>Nedavni zahvati u Zagrebu i okolici. Kliknite na sliku za povećani prikaz.</p>
                </motion.div>

                <div className={styles.projectsSection}>
                    <div className={styles.projectGrid}>
                        {projectImages.map((item, index) => (
                            <motion.button
                                type="button"
                                key={index}
                                className={styles.projectImageWrapper}
                                onClick={() => setActiveImg(item)}
                                aria-label={`Povećaj sliku: ${item.alt}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: Math.min(index, 6) * 0.06 }}
                                viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={300}
                                    className={styles.projectImg}
                                />
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {activeImg && (
                <div
                    className={styles.lightbox}
                    onClick={() => setActiveImg(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Pregled slike"
                >
                    <button
                        type="button"
                        className={styles.lightboxClose}
                        onClick={() => setActiveImg(null)}
                        aria-label="Zatvori"
                    >
                        <X size={28} />
                    </button>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                        src={activeImg.src}
                        alt={activeImg.alt}
                        className={styles.lightboxImg}
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}
        </section>
    );
}
