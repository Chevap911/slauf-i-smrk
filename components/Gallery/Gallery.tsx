'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';
import styles from './Gallery.module.css';

const comparisons = [
    {
        before: "/assets/before1.png",
        after: "/assets/after1.png",
        label: "Čišćenje kamenih površina - Stol i klupe"
    },
    {
        before: "/assets/before2.png",
        after: "/assets/after2.png",
        label: "Pranje prilaza i zida - Okućnica"
    }
];

const projectImages = [
    { src: "/assets/gallery-1.jpg", alt: "Profesionalno čišćenje vanjskih površina, projekt Šlauf i Šmrk Zagreb" },
    { src: "/assets/gallery-2.png", alt: "Visokotlačno pranje okućnice, projekt Šlauf i Šmrk Zagreb" },
    { src: "/assets/gallery-3.jpg", alt: "Čišćenje betona i tlakavaca, referentni projekt Zagreb" },
    { src: "/assets/gallery-4.jpg", alt: "Pranje fasade i vanjskih površina, projekt Šlauf i Šmrk" },
    { src: "/assets/gallery-5.jpg", alt: "Dubinsko čišćenje i pranje, rezultat Šlauf i Šmrk Zagreb" },
    { src: "/assets/gallery-6.jpg", alt: "Kemijsko čišćenje namještaja, projekt Šlauf i Šmrk" },
    { src: "/assets/gallery-7.jpg", alt: "Pranje terasa i okućnica, projekt Šlauf i Šmrk Zagreb" },
    { src: "/assets/gallery-8.png", alt: "Visokotlačno pranje betona, Šlauf i Šmrk Zagreb" },
    { src: "/assets/gallery-9.jpg", alt: "Profesionalno čišćenje vanjskih površina Zagreb" },
    { src: "/projekti/projekt-1.jpeg", alt: "Čišćenje terase kafića Leggiero, poslije pranja betonskih kocki Zagreb" },
    { src: "/projekti/projekt-2.jpeg", alt: "Pranje terase kavane Ravnice, čiste pločice poslije visokotlačnog čišćenja" },
    { src: "/projekti/projekt-3.jpeg", alt: "Kemijsko čišćenje garniture, sofa poslije dubokog čišćenja Zagreb" },
    { src: "/projekti/projekt-4.jpeg", alt: "Kemijsko čišćenje garniture, sofa prije dubokog čišćenja Zagreb" },
    { src: "/projekti/projekt-5.jpeg", alt: "Profesionalno čišćenje vanjskih površina, projekt Šlauf i Šmrk Zagreb" },
    { src: "/projekti/projekt-6.jpeg", alt: "Visokotlačno pranje okućnice i dvorišta, projekt Šlauf i Šmrk" },
    { src: "/projekti/projekt-7.jpeg", alt: "Pranje vanjskih površina, referentni projekt Zagreb" },
    { src: "/projekti/projekt-8.jpeg", alt: "Profesionalno čišćenje terase i okućnice, rezultat Šlauf i Šmrk" },
    { src: "/projekti/projekt-9.jpeg", alt: "Visokotlačno pranje betona i tlakavaca, projekt Šlauf i Šmrk Zagreb" },
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
                    <h2 className={styles.title}>Rezultati koji govore sami za sebe</h2>
                    <p className={styles.subtitle}>Povucite klizač lijevo-desno i pogledajte transformacije!</p>
                </motion.div>

                <div className={styles.sliderGrid}>
                    {comparisons.map((item, index) => (
                        <BeforeAfterSlider
                            key={index}
                            beforeSrc={item.before}
                            afterSrc={item.after}
                            label={item.label}
                        />
                    ))}
                </div>

                <div className={styles.projectsSection}>
                    <h3 className={styles.label}>Naši ostali projekti</h3>
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
