'use client';

import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';
import styles from './BeforeAfterGallery.module.css';

const pairs = [
    {
        before: '/prije-poslje/terasa-leggiero-prije-1.jpeg',
        after: '/prije-poslje/terasa-leggiero-poslje-1.jpeg',
        beforeAlt: 'Terasa kafića prije čišćenja — mahovina i prljavština na betonskim kockama',
        afterAlt: 'Terasa kafića poslije čišćenja — blistave betonske kocke Zagreb',
        label: 'Pranje terase — kafić Leggiero',
    },
    {
        before: '/prije-poslje/terasa-leggiero-prije-2.jpeg',
        after: '/prije-poslje/terasa-leggiero-poslje-2.jpeg',
        beforeAlt: 'Vanjska terasa před čišćenjem — zarasle fuge i korov',
        afterAlt: 'Vanjska terasa poslije profesionalnog pranja tlakavaca Zagreb',
        label: 'Pranje okućnice — tlakavci',
    },
    {
        before: '/prije-poslje/fasada-prije.jpeg',
        after: '/prije-poslje/fasada-poslje.png',
        beforeAlt: 'Fasada kuće prije čišćenja — zelene alge i mahovine Zagreb',
        afterAlt: 'Fasada kuće poslije visokotlačnog pranja — čista bijela fasada Zagreb',
        label: 'Pranje fasade — alge i mahovina',
    },
];

export default function BeforeAfterGallery() {
    return (
        <section className={styles.section}>
            <div className="container">
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.eyebrow}>Rezultati govore sami za sebe</span>
                    <h2>Prije i poslije</h2>
                    <p>Povucite klizač i vidite razliku profesionalnog čišćenja na djelu.</p>
                </motion.div>

                <div className={styles.grid}>
                    {pairs.map((pair, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.15 }}
                        >
                            <BeforeAfterSlider
                                beforeSrc={pair.before}
                                afterSrc={pair.after}
                                beforeAlt={pair.beforeAlt}
                                afterAlt={pair.afterAlt}
                                label={pair.label}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
