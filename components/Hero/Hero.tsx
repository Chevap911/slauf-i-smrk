'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, MapPin, PhoneCall } from 'lucide-react';
import brandLogo from '@/Media/Logo.png';
import styles from './Hero.module.css';

const trustPoints = [
    'Pranje fasada, okućnica, terasa i prilaza',
    'Besplatna procjena na lokaciji',
    'Siguran pristup osjetljivim površinama',
];

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
                        <span className={styles.eyebrow}>Profesionalno visokotlačno čišćenje za Zagreb i okolicu</span>
                        <h1 className={styles.title}>
                            Pranje <span className={styles.highlight}>fasada, okućnica i terasa</span> koje vraća prvi dojam
                        </h1>
                        <p className={styles.description}>
                            Ekipa <strong>Šlauf i Šmrk</strong> čisti fasade, tlakavce, prilaze i terase uz
                            profesionalnu opremu, prilagođen tlak i jasnu procjenu prije početka radova.
                            Fokus nam je da površina izgleda bolje, a ne da je samo prijeđemo kućnim peračem pod pritiskom.
                        </p>

                        <div className={styles.trustList}>
                            {trustPoints.map((point) => (
                                <div key={point} className={styles.trustItem}>
                                    <CheckCircle2 size={18} />
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className={styles.actions}>
                            <a href="#kontakt" className="btn btn-primary">
                                Zatražite Besplatnu Procjenu
                                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                            </a>
                            <a href="tel:+385958442806" className={styles.phoneBtn}>
                                <PhoneCall size={18} />
                                +385 95 844 2806
                            </a>
                        </div>

                        <div className={styles.metaRow}>
                            <div className={styles.metaCard}>
                                <MapPin size={18} />
                                <div>
                                    <strong>Zagreb i okolica</strong>
                                    <span>Brz dolazak za kuće, terase i prilaze</span>
                                </div>
                            </div>
                            <div className={styles.metaCard}>
                                <CheckCircle2 size={18} />
                                <div>
                                    <strong>Rezultati prije i poslije</strong>
                                    <span>Stvarni projekti i jasan dogovor prije početka</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        className={styles.visual}
                        initial={{ opacity: 0, scale: 0.9, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                    >
                        <div className={styles.brandLogoCard}>
                            <Image
                                src={brandLogo}
                                alt="Logo Šlauf i Šmrk"
                                className={styles.brandLogoImage}
                                sizes="(max-width: 576px) 240px, (max-width: 992px) 320px, 360px"
                            />
                        </div>

                        <div className={styles.visualStage}>
                            <div className={styles.mainImageCard}>
                                <Image
                                    src="/prije-poslje/fasada-poslje.png"
                                    alt="Očišćena fasada obiteljske kuće u Zagrebu nakon profesionalnog pranja"
                                    fill
                                    className={styles.mainImage}
                                    priority
                                    sizes="(max-width: 992px) 100vw, 50vw"
                                    fetchPriority="high"
                                />
                                <div className={styles.resultBadge}>
                                    <span>Stvarni rezultat</span>
                                    <strong>Pranje fasade u Zagrebu</strong>
                                </div>
                            </div>

                            <div className={styles.beforeCard}>
                                <div className={styles.beforeCardImage}>
                                    <Image
                                        src="/prije-poslje/fasada-prije.jpeg"
                                        alt="Fasada prije čišćenja s algama i tamnim naslagama"
                                        fill
                                        className={styles.beforeImage}
                                        sizes="(max-width: 992px) 50vw, 18vw"
                                    />
                                </div>
                                <div className={styles.beforeCardCopy}>
                                    <span>Prije zahvata</span>
                                    <strong>Alge, pruge i sivi sloj prljavštine</strong>
                                </div>
                            </div>

                            <div className={styles.calloutCard}>
                                <span className={styles.calloutLabel}>Najtraženije usluge</span>
                                <ul>
                                    <li>Pranje fasade</li>
                                    <li>Čišćenje okućnice i tlakavaca</li>
                                    <li>Pranje terasa i prilaza</li>
                                </ul>
                                <a href="#usluge" className={styles.calloutLink}>
                                    Pogledajte sve usluge
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
