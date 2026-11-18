import Image from 'next/image';
import HeroAnimatedContent from './HeroAnimatedContent';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import styles from './Hero.module.css';

// Hero fotka (Marko potvrdio 17. 11. 2026.: "Da, novi hero"):
// true  = Ivan i Marko uz stroj Falch 500 bar na kolodvoru u Samoboru,
// false = stara fotka (Ivan s leđa pere terasu noću). Povratak je ova jedna linija.
const TIMSKA_FOTKA = true;

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.bg} aria-hidden="true">
                {!TIMSKA_FOTKA && (
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
                )}
                {!TIMSKA_FOTKA && <div className={styles.bgOverlay} />}
            </div>

            <div className="container">
                <div className={styles.wrapper}>
                    <HeroAnimatedContent team={TIMSKA_FOTKA} />

                    {/* Timska fotka (18. 11. 2026.): na desktopu stoji apsolutno
                        lijevo iza teksta, mekano stopljena u navy. Na mobitelu je u istoj
                        ćeliji grida kao tekst, malo prozirna: H1 i opis stoje preko nje,
                        lica odmah ispod opisa ostaju cijela. Na tabletu prozor iznad forme. */}
                    {TIMSKA_FOTKA && (
                        <div className={styles.bgTeam} aria-hidden="true">
                            <Image
                                src="/hero-foto/ivan-i-marko-uniforme-500-bar.jpg"
                                alt=""
                                fill
                                priority
                                sizes="(max-width: 992px) 210vw, 50vw"
                                quality={75}
                                className={styles.bgTeamImg}
                            />
                        </div>
                    )}

                    <div className={`${styles.formCol} ${styles.enterForm}`}>
                        <div className={styles.formCard} id="procjena">
                            <div className={styles.formHeader}>
                                <span className={styles.formEyebrow}>Besplatna procjena</span>
                                <h2 className={styles.formTitle}>Saznajte cijenu pranja odmah</h2>
                                <p className={styles.formSubtitle}>
                                    Odaberite uslugu i površinu. Početnu cijenu vidite odmah, bez ostavljanja kontakta.
                                </p>
                            </div>
                            <div className={styles.formBody}>
                                <QuoteForm idPrefix="hero" hideHeading compact />
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
                    </div>
                </div>
            </div>
        </section>
    );
}
