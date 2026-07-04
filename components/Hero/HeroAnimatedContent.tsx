'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import styles from './Hero.module.css';

const trustPoints = [
    '5,0 ★ · 40+ Google recenzija',
    'Besplatna procjena na lokaciji',
    'Prilagođen tlak za svaki materijal',
];

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
};

const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function HeroAnimatedContent() {
    return (
        <motion.div
            className={styles.content}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            <motion.span variants={item} className={styles.eyebrow}>Profesionalno visokotlačno čišćenje za Zagreb i okolicu</motion.span>

            <motion.div variants={item} className={styles.textGroup}>
                <h1 className={styles.title}>
                    Visokotlačno pranje <span className={styles.highlight}>fasada, okućnica i terasa</span> u Zagrebu
                </h1>
                <p className={styles.description}>
                    Profesionalni servis za čišćenje fasada, tlakavaca i popločanih površina.
                    Dolazimo na lokaciju, besplatno procjenjujemo i dajemo točnu cijenu - bez iznenađenja.
                </p>
            </motion.div>

            <motion.div variants={item} className={styles.trustList}>
                {trustPoints.map((point) => (
                    <div key={point} className={styles.trustItem}>
                        <CheckCircle2 size={15} />
                        <span>{point}</span>
                    </div>
                ))}
            </motion.div>

            <motion.div variants={item} className={styles.actions}>
                <a href="#kontakt" className="btn btn-primary">
                    Zatražite besplatnu procjenu
                    <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                </a>
                <a
                    href="https://wa.me/385958442806?text=Bok!%20Zanima%20me%20procjena%20za%20pranje..."
                    className={styles.whatsappBtn}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                        // @ts-ignore
                        window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'pocetna_hero' });
                    }}
                >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    WhatsApp upit
                </a>
            </motion.div>

            <motion.div variants={item} className={styles.photosRow}>
                <div className={styles.photoCard}>
                    <Image
                        src="/prije-poslje/fasada-prije.jpeg"
                        alt="Prljava fasada obiteljske kuće prije visokotlačnog pranja, Zagreb"
                        fill
                        priority
                        sizes="(max-width: 992px) 50vw, 30vw"
                        quality={75}
                        className={styles.photoImg}
                    />
                    <span className={styles.photoLabel}>Prije</span>
                </div>
                <div className={styles.photoCard}>
                    <Image
                        src="/prije-poslje/fasada-poslje.png"
                        alt="Očišćena fasada nakon profesionalnog visokotlačnog pranja, Zagreb"
                        fill
                        priority
                        sizes="(max-width: 992px) 50vw, 30vw"
                        quality={75}
                        className={styles.photoImg}
                    />
                    <span className={`${styles.photoLabel} ${styles.photoLabelAfter}`}>Poslije</span>
                </div>
            </motion.div>

        </motion.div>
    );
}
