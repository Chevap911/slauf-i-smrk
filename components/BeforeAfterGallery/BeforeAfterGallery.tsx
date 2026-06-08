'use client';

import { motion } from 'framer-motion';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';
import styles from './BeforeAfterGallery.module.css';

const pairs = [
    {
        before: '/prije-poslje/pranje-zida-terase-zagreb-prije.jpeg',
        after: '/prije-poslje/pranje-zida-terase-zagreb-poslje.jpeg',
        beforeAlt: 'Zid terase prije pranja, alge, mahovina i tamne naslage Zagreb',
        afterAlt: 'Zid terase poslije pranja pod tlakom, čista žbuka Zagreb',
        label: 'Pranje zida terase, alge i mahovina',
    },
    {
        before: '/prije-poslje/ciscenje-poda-terase-zagreb-prije.jpeg',
        after: '/prije-poslje/ciscenje-poda-terase-zagreb-poslje.jpeg',
        beforeAlt: 'Pod terase prije čišćenja, prljave i sive pločice Zagreb',
        afterAlt: 'Pod terase poslije čišćenja, čiste pločice Zagreb',
        label: 'Čišćenje poda terase, pločice',
    },
    {
        before: '/prije-poslje/terasa-leggiero-prije-1.jpeg',
        after: '/prije-poslje/terasa-leggiero-poslje-1.jpeg',
        beforeAlt: 'Terasa kafića prije čišćenja, mahovina i prljavština na betonskim kockama',
        afterAlt: 'Terasa kafića poslije čišćenja, blistave betonske kocke Zagreb',
        label: 'Pranje terase, kafić Leggiero',
    },
    {
        before: '/prije-poslje/terasa-leggiero-prije-2.jpeg',
        after: '/prije-poslje/terasa-leggiero-poslje-2.jpeg',
        beforeAlt: 'Vanjska terasa prije čišćenja, zarasle fuge i korov',
        afterAlt: 'Vanjska terasa poslije profesionalnog pranja tlakavaca Zagreb',
        label: 'Pranje okućnice, tlakavci',
    },
    {
        before: '/prije-poslje/fasada-prije.jpeg',
        after: '/prije-poslje/fasada-poslje.png',
        beforeAlt: 'Fasada kuće prije čišćenja, zelene alge i mahovine Zagreb',
        afterAlt: 'Fasada kuće poslije visokotlačnog pranja, čista bijela fasada Zagreb',
        label: 'Pranje fasade, alge i mahovina',
    },
    {
        before: '/assets/before1.png',
        after: '/assets/after1.png',
        beforeAlt: 'Kameni stol i klupe prije čišćenja, naslage i mahovina',
        afterAlt: 'Kameni stol i klupe poslije čišćenja, vraćen prirodni kamen Zagreb',
        label: 'Čišćenje kamenih površina, stol i klupe',
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
                    viewport={{ once: true, margin: '0px 0px 200px 0px' }}
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
                            className={i === pairs.length - 1 && pairs.length % 2 === 1 ? styles.fullWidth : undefined}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px 200px 0px' }}
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

                <motion.div
                    style={{ textAlign: 'center', marginTop: '2.5rem' }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                    transition={{ duration: 0.5 }}
                >
                    <a href="#kontakt" className="btn btn-primary">
                        Zatražite besplatnu procjenu
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
