import Image from 'next/image';
import Link from 'next/link';
import QuoteLink from '@/components/QuoteLink/QuoteLink';
import styles from './HomeSections.module.css';

// Stvarne fotke s naših poslova, sve uspravne (3:4), da parovi stoje u istoj mreži
const PAROVI = [
    {
        prije: '/prije-poslje/fasada-prije.jpeg',
        poslije: '/prije-poslje/fasada-poslje.png',
        prijeAlt: 'Fasada obiteljske kuće prije pranja, alge i sivilo na žbuci, Zagreb',
        poslijeAlt: 'Očišćena bijela fasada obiteljske kuće nakon visokotlačnog pranja, Zagreb',
        opis: 'Fasada obiteljske kuće, Zagreb',
    },
    {
        prije: '/prije-poslje/terasa-leggiero-prije-1.jpeg',
        poslije: '/prije-poslje/terasa-leggiero-poslje-1.jpeg',
        prijeAlt: 'Terasa kafića prije čišćenja, mahovina i sive naslage na pločicama, Zagreb',
        poslijeAlt: 'Očišćena terasa kafića nakon visokotlačnog pranja pločica, Zagreb',
        opis: 'Terasa kafića uz Family Mall, Zagreb',
    },
    {
        prije: '/prije-poslje/ciscenje-poda-terase-zagreb-prije.jpeg',
        poslije: '/prije-poslje/ciscenje-poda-terase-zagreb-poslje.jpeg',
        prijeAlt: 'Pod terase prije čišćenja, prljave i sive pločice, Zagreb',
        poslijeAlt: 'Pod terase poslije čišćenja, čiste pločice, Zagreb',
        opis: 'Pod terase, Zagreb',
    },
];

const SIZES = '(max-width: 900px) 46vw, 200px';

export default function ProofPairs() {
    return (
        <section className={styles.section} id="prije-poslije">
            <div className="container">
                <div className={styles.head}>
                    <span className={styles.eyebrow}>Stvarni poslovi</span>
                    <h2 className={styles.title}>Prije i poslije pranja u Zagrebu</h2>
                    <p className={styles.lead}>Fotografije s naših poslova, snimljene prije i poslije pranja.</p>
                </div>

                <div className={styles.pairs}>
                    {PAROVI.map((par) => (
                        <figure key={par.opis} className={styles.pair}>
                            <div className={styles.pairImgs}>
                                <div className={styles.shot}>
                                    <span className={styles.tag}>Prije</span>
                                    <Image src={par.prije} alt={par.prijeAlt} fill sizes={SIZES} className={styles.shotImg} />
                                </div>
                                <div className={styles.shot}>
                                    <span className={`${styles.tag} ${styles.tagAfter}`}>Poslije</span>
                                    <Image src={par.poslije} alt={par.poslijeAlt} fill sizes={SIZES} className={styles.shotImg} />
                                </div>
                            </div>
                            <figcaption className={styles.caption}>{par.opis}</figcaption>
                        </figure>
                    ))}
                </div>

                <div className={styles.cta}>
                    <QuoteLink className="btn btn-primary">Zatražite besplatnu procjenu</QuoteLink>
                    <Link href="/galerija" className={styles.textLink}>
                        Više fotografija u galeriji
                    </Link>
                </div>
            </div>
        </section>
    );
}
