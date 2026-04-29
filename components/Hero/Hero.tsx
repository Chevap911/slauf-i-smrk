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
                        <div className={styles.photoCard}>
                            <Image
                                src="/prije-poslje/fasada-poslje.png"
                                alt="Očišćena fasada obiteljske kuće u Zagrebu nakon profesionalnog pranja"
                                fill
                                className={styles.photoImg}
                                priority
                                sizes="(max-width: 576px) 55vw, (max-width: 992px) 60vw, 38vw"
                                fetchPriority="high"
                                quality={90}
                            />
                        </div>
                        <div className={styles.mascotCard}>
                            <Image
                                src={brandLogo}
                                alt="Logo Šlauf i Šmrk"
                                className={styles.mascotImg}
                                sizes="(max-width: 576px) 40vw, (max-width: 992px) 38vw, 22vw"
                                priority
                                fetchPriority="high"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
