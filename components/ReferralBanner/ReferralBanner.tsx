import Link from 'next/link';
import { Gift } from 'lucide-react';
import styles from './ReferralBanner.module.css';

export default function ReferralBanner() {
    return (
        <section className={styles.section}>
            <div className={styles.inner}>
                <div>
                    <span className={styles.label}>Program preporuke</span>
                    <h2 className={styles.title}>
                        Preporučite nas i zaradite{' '}
                        <span className={styles.highlight}>10% popusta</span>
                    </h2>
                    <p className={styles.description}>
                        Za svakog novog klijenta kojeg nam uputite dobivate <strong>10% popusta na svoju sljedeću uslugu</strong>.
                        Popust vrijedi tek kada preporučeni klijent <strong>dogovori i obavi uslugu</strong> kod nas.
                        Možete skupiti do <strong>50% popusta ukupno</strong> kombiniranjem više preporuka.
                    </p>
                    <Link href="/#kontakt" className={styles.cta}>
                        <Gift size={20} />
                        Naručite i saznajte više
                    </Link>
                </div>

                <div className={styles.steps}>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>1</div>
                        <div className={styles.stepText}>
                            <strong>Naručite našu uslugu</strong>
                            <span>Pranje fasade, okućnice, terasa ili bilo što drugo. Postanete naš klijent.</span>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>2</div>
                        <div className={styles.stepText}>
                            <strong>Preporučite nas nekome</strong>
                            <span>Recite susjedu, prijatelju ili kolegi da nas nazove ili pošalje upit. Neka nas spomne vaše ime.</span>
                        </div>
                    </div>
                    <div className={styles.step}>
                        <div className={styles.stepNumber}>3</div>
                        <div className={styles.stepText}>
                            <strong>Dobivate 10% popusta</strong>
                            <span>Kada preporučeni klijent dogovori i <em>obavi</em> uslugu kod nas, vi dobivate 10% na sljedeći termin. Možete skupiti do 50% ukupno.</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
