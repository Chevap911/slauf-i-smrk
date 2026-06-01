'use client';

import Link from 'next/link';
import { Camera, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

const highlights = [
    {
        icon: CheckCircle2,
        text: 'Besplatna procjena na lokaciji prije početka radova',
    },
    {
        icon: Camera,
        text: 'Fotografije prije i poslije za veće zahvate',
    },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h3 className={styles.brandTitle}>Šlauf i Šmrk</h3>
                        <p className={styles.brandTagline}>
                            Pranje fasada, okućnica, terasa i prilaza u Zagrebu i okolici.
                            Fokus nam je siguran pristup, čista procjena i rezultat koji se stvarno vidi.
                        </p>

                        <div className={styles.highlights}>
                            {highlights.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <div key={item.text} className={styles.highlightItem}>
                                        <Icon size={18} />
                                        <span>{item.text}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <Link href="/#kontakt" className={styles.brandCta}>
                            Zatražite procjenu
                        </Link>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Usluge</h4>
                        <ul className={styles.list}>
                            <li><Link href="/usluge/pranje-fasade">Pranje fasada</Link></li>
                            <li><Link href="/usluge/pranje-okucnice">Pranje okućnice</Link></li>
                            <li><Link href="/usluge/pranje-terasa">Pranje terasa</Link></li>
                            <li><Link href="/usluge/pranje-tlakavaca">Pranje tlakavaca</Link></li>
                            <li><Link href="/usluge/pranje-prilaza">Pranje prilaza</Link></li>
                            <li><Link href="/usluge/ciscenje-kamenih-povrsina">Kamene površine</Link></li>
                            <li><Link href="/usluge/ciscenje-drvenih-povrsina">Drvene površine</Link></li>
                            <li><Link href="/usluge/kemijsko-ciscenje-namjestaja">Kemijsko čišćenje</Link></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Sadržaj</h4>
                        <ul className={styles.list}>
                            <li><Link href="/o-nama">O nama</Link></li>
                            <li><Link href="/podrucje/zagreb">Zagreb i okolica</Link></li>
                            <li><Link href="/podrucje/sesvete">Sesvete</Link></li>
                            <li><Link href="/podrucje/velika-gorica">Velika Gorica</Link></li>
                            <li><Link href="/podrucje/samobor">Samobor</Link></li>
                            <li><Link href="/podrucje/zapresic">Zaprešić</Link></li>
                            <li><Link href="/blog">Blog i vodiči o cijenama</Link></li>
                            <li><Link href="/blog/koliko-kosta-pranje-fasade">Pranje fasade cijena</Link></li>
                            <li><Link href="/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb">Pranje okućnice i tlakavaca cijena</Link></li>
                            <li><Link href="/#usluge">Sve usluge</Link></li>
                            <li><Link href="/#recenzije">Dojmovi klijenata</Link></li>
                        </ul>
                    </div>

                    <div className={styles.section}>
                        <h4 className={styles.sectionTitle}>Kontakt</h4>
                        <ul className={styles.list}>
                            <li className={styles.contactItem}>
                                <Phone size={18} />
                                <a 
                                    href="tel:+385958442806"
                                    onClick={() => {
                                        // @ts-ignore
                                        window.dataLayer?.push({ event: 'call_click', cta_location: 'footer' });
                                    }}
                                >
                                    +385 95 844 2806
                                </a>
                            </li>
                            <li className={styles.contactItem}>
                                <Mail size={16} />
                                <a href="mailto:slauf.i.smrk@gmail.com">slauf.i.smrk@gmail.com</a>
                            </li>
                            <li className={styles.contactItem}>
                                <MapPin size={16} />
                                <span>Zagreb i okolica</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Šlauf i Šmrk. Sva prava pridržana. | <Link href="/politika-privatnosti">Politika privatnosti</Link></p>
                </div>
            </div>
        </footer>
    );
}
