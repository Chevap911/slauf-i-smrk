import Image from 'next/image';
import HeroAnimatedContent from './HeroAnimatedContent';
import HeroVisualMotion from './HeroVisualMotion';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bg} aria-hidden="true">
                <div className={styles.bgPhoto}>
                    <Image
                        src="/hero-foto/ivan-pranje-terase-nocu.jpg"
                        alt=""
                        fill
                        priority
                        sizes="(max-width: 992px) 100vw, 67vw"
                        quality={75}
                        className={styles.bgImg}
                    />
                </div>
                <div className={styles.bgOverlay} />
            </div>

            <div className="container">
                <div className={styles.wrapper}>
                    <HeroAnimatedContent />

                    <HeroVisualMotion className={styles.formCol}>
                        <div className={styles.formCard}>
                            <div className={styles.formHeader}>
                                <span className={styles.formEyebrow}>Besplatna procjena</span>
                                <h2 className={styles.formTitle}>Dobijte cijenu odmah</h2>
                                <p className={styles.formSubtitle}>
                                    Ispunite kratki obrazac i odmah dobijete okvirnu cijenu. Bez obveze.
                                </p>
                            </div>
                            <div className={styles.formBody}>
                                <QuoteForm idPrefix="hero" hideHeading />
                            </div>
                        </div>

                        <div className={styles.mascotChip}>
                            <Image
                                src={homepageMascots.heroBuddy.src}
                                alt="Šmrk pozdravlja"
                                width={126}
                                height={169}
                                className={styles.mascotChipImg}
                            />
                            <span className={styles.mascotChipText}>5,0 na Google-u</span>
                        </div>
                    </HeroVisualMotion>
                </div>
            </div>
        </section>
    );
}
