import Image from 'next/image';
import HeroAnimatedContent from './HeroAnimatedContent';
import HeroVisualMotion from './HeroVisualMotion';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bgSplit} aria-hidden="true">
                <div className={styles.bgHalf}>
                    <Image
                        src="/prije-poslje/fasada-prije.jpeg"
                        alt=""
                        fill
                        priority
                        sizes="35vw"
                        quality={75}
                        className={styles.bgImg}
                    />
                    <span className={styles.bgLabel}>Prije</span>
                </div>
                <div className={styles.bgHalf}>
                    <Image
                        src="/prije-poslje/fasada-poslje.png"
                        alt=""
                        fill
                        priority
                        sizes="70vw"
                        quality={75}
                        className={styles.bgImg}
                    />
                    <span className={`${styles.bgLabel} ${styles.bgLabelAfter}`}>Poslije</span>
                </div>
                <div className={styles.bgDivider} />
                <div className={styles.bgOverlay} />
            </div>

            <div className="container">
                <div className={styles.wrapper}>
                    <HeroAnimatedContent />

                    <HeroVisualMotion className={styles.formCol}>
                        <div className={styles.formGlow} />
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
