import Image from 'next/image';
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
                        <div className={styles.brandLogoCard}>
                            <Image
                                src={brandLogo}
                                alt="Logo Šlauf i Šmrk"
                                className={styles.brandLogoImage}
                                sizes="(max-width: 576px) 240px, (max-width: 992px) 320px, 360px"
                                priority
                                fetchPriority="high"
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
                                    sizes="(max-width: 992px) 100vw, 42vw"
                                    fetchPriority="high"
                                    quality={90}
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
                    </div>
                </div>
            </div>
        </section>
    );
}
