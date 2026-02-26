import Link from 'next/link';
import { Phone } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navWrapper}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.brandName}>ŠLAUF <span className={styles.brandAmp}>i</span> ŠMRK</span>
                    </Link>

                    <div className={styles.links}>
                        <Link href="#usluge" className={styles.link}>Usluge</Link>
                        <Link href="#zasto-mi" className={styles.link}>O nama</Link>
                        <Link href="#recenzije" className={styles.link}>Recenzije</Link>
                        <Link href="#kontakt" className={styles.link}>Kontakt</Link>
                    </div>

                    <div className={styles.cta}>
                        <a href="tel:+385916400247" className="btn btn-primary">
                            <Phone size={18} style={{ marginRight: '8px' }} />
                            Nazovite nas
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
