import Link from 'next/link';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3 className={styles.brandTitle}>Šlauf i Šmrk</h3>
                        <p className={styles.brandTagline}>Vaš dom zaslužuje blistav prvi dojam. Brzo, sigurno i efikasno čišćenje.</p>
                        <div className={styles.socials}>
                            <a href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={20} /></a>
                            <a href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={20} /></a>
                        </div>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Usluge</h4>
                        <ul className={styles.list}>
                            <li><Link href="/usluge/pranje-fasade">Pranje fasada</Link></li>
                            <li><Link href="/usluge/pranje-okucnice">Pranje okućnica</Link></li>
                            <li><Link href="/usluge/kemijsko-ciscenje-namjestaja">Kemijsko čišćenje</Link></li>
                            <li><Link href="/usluge/detailing-automobila">Detailing automobila</Link></li>
                            <li><Link href="/usluge/ciscenje-drvenih-povrsina">Drvene površine</Link></li>
                            <li><Link href="/usluge/odrzavanje-grobnih-mjesta">Grobna mjesta</Link></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Područja</h4>
                        <ul className={styles.list}>
                            <li><Link href="/podrucje/zagreb">Zagreb</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Kontakt</h4>
                        <ul className={styles.list}>
                            <li className={styles.contactItem}>
                                <Phone size={16} />
                                <a href="tel:+385916400247">+385 91 6400 247</a>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={16} />
                                <a href="mailto:info@slaufismrk.com">info@slaufismrk.com</a>
                            </li>
                            <li className={styles.contactItem}>
                                <MapPin size={16} />
                                <span>Zagreb i okolica</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Šlauf i Šmrk. Sva prava pridržana.</p>
                </div>
            </div>
        </footer>
    );
}

