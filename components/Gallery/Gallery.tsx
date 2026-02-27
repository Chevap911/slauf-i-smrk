'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
    "/assets/gallery-1.jpg",
    "/assets/gallery-2.png",
    "/assets/gallery-3.jpg",
    "/assets/gallery-4.jpg",
    "/assets/gallery-5.jpg",
    "/assets/gallery-6.jpg",
    "/assets/gallery-7.jpg",
    "/assets/gallery-8.png",
    "/assets/gallery-9.jpg"
];

export default function Gallery() {
    return (
        <section id="galerija" className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
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
                        {projectImages.map((src, index) => (
                            <motion.div
                                key={index}
                                className={styles.projectImageWrapper}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                viewport={{ once: true }}
                            >
                                <Image
                                    src={src}
                                    alt={`Projekt ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className={styles.projectImg}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
