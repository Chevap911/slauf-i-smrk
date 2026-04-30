import Image from 'next/image';
import { MapPin, CheckCircle2 } from 'lucide-react';
import brandLogo from '@/Media/Logo.png';
import HeroAnimatedContent from './HeroAnimatedContent';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className="container">
                <div className={styles.wrapper}>
                    <HeroAnimatedContent />

                    <div className={styles.visual}>
                        <div className={styles.mascotCard}>
                            <Image
                                src={brandLogo}
                                alt="Logo Šlauf i Šmrk"
                                style={{ height: '130px', width: 'auto' }}
                                className={styles.mascotImg}
                                priority
                                fetchPriority="high"
                            />
                        </div>
                        <div className={styles.photosRow}>
                            <div className={styles.photoCard}>
                                <span className={styles.photoLabel}>Prije</span>
                                <Image
                                    src="/prije-poslje/fasada-prije.jpeg"
                                    alt="Fasada prije profesionalnog pranja"
                                    fill
                                    className={styles.photoImg}
                                    priority
                                    sizes="(max-width: 576px) 45vw, (max-width: 992px) 45vw, 20vw"
                                    quality={85}
                                />
                            </div>
                            <div className={styles.photoCard}>
                                <span className={styles.photoLabel}>Poslije</span>
                                <Image
                                    src="/prije-poslje/fasada-poslje.png"
                                    alt="Fasada poslije profesionalnog pranja"
                                    fill
                                    className={styles.photoImg}
                                    priority
                                    sizes="(max-width: 576px) 45vw, (max-width: 992px) 45vw, 20vw"
                                    fetchPriority="high"
                                    quality={90}
                                />
                            </div>
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
                    </div>
                </div>
            </div>
        </section>
    );
}
