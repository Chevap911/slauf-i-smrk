'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
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
                <div className={styles.header}>
                    <h2 className={styles.title}>Rezultati koji govore sami za sebe</h2>
                    <p className={styles.subtitle}>Pogledajte transformacije koje smo ostvarili za naše klijente.</p>
                </div>

                <div className={styles.grid}>
                    {comparisons.map((item, index) => (
                        <div key={index} className={styles.comparisonWrapper}>
                            <h3 className={styles.label}>{item.label}</h3>
                            <div className={styles.comparisonGrid}>
                                <motion.div
                                    className={styles.imageBox}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <span className={styles.badge}>PRIJE</span>
                                    <Image src={item.before} alt="Prije čišćenja" width={600} height={400} className={styles.img} />
                                </motion.div>
                                <motion.div
                                    className={styles.imageBox}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                >
                                    <span className={styles.badgeSolid}>POSLIJE</span>
                                    <Image src={item.after} alt="Poslije čišćenja" width={600} height={400} className={styles.img} />
                                </motion.div>
                            </div>
                        </div>
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
                                transition={{ delay: index * 0.1 }}
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
