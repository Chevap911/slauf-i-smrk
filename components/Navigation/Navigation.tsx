'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Phone, Menu, X } from 'lucide-react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileOpen(!isMobileOpen);
    };

    const closeMenu = () => {
        setIsMobileOpen(false);
    };

    return (
        <nav className={styles.nav}>
            <div className="container">
                <div className={styles.navWrapper}>
                    <Link href="/" className={styles.logo}>
                        <span className={styles.brandName}>ŠLAUF <span className={styles.brandAmp}>i</span> ŠMRK</span>
                    </Link>

                    <div className={styles.links}>
                        <div className={styles.dropdown}>
                            <Link href="/#usluge" className={styles.link}>Usluge</Link>
                            <div className={styles.dropdownMenu}>
                                <Link href="/usluge/pranje-fasade">Pranje fasade</Link>
                                <Link href="/usluge/pranje-okucnice">Pranje okućnice</Link>
                                <Link href="/usluge/kemijsko-ciscenje-namjestaja">Kemijsko čišćenje</Link>
                                <Link href="/usluge/ciscenje-kamenih-povrsina">Kamene površine</Link>
                                <Link href="/usluge/ciscenje-drvenih-povrsina">Drvene površine</Link>
                                <Link href="/usluge/detailing-automobila">Detailing auta</Link>
                                <Link href="/usluge/pranje-bazena">Pranje bazena</Link>
                                <Link href="/usluge/odrzavanje-grobnih-mjesta">Grobna mjesta</Link>
                            </div>
                        </div>
                        <Link href="/#zasto-mi" className={styles.link}>O nama</Link>
                        <Link href="/blog" className={styles.link}>Blog</Link>
                        <Link href="/#kontakt" className={styles.link}>Kontakt</Link>
                    </div>

                    <div className={styles.cta}>
                        <a href="tel:+385916400247" className="btn btn-primary">
                            <Phone size={18} style={{ marginRight: '8px' }} />
                            Nazovite nas
                        </a>
                    </div>

                    <button
                        className={styles.mobileToggle}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileOpen && (
                <div className={styles.mobileOverlay}>
                    <div className={styles.mobileLinks}>
                        <div className={styles.mobileDropdown}>
                            <span className={styles.mobileLinkTitle}>Usluge</span>
                            <div className={styles.mobileDropdownItems}>
                                <Link href="/usluge/pranje-fasade" onClick={closeMenu}>Pranje fasade</Link>
                                <Link href="/usluge/pranje-okucnice" onClick={closeMenu}>Pranje okućnice</Link>
                                <Link href="/usluge/kemijsko-ciscenje-namjestaja" onClick={closeMenu}>Kemijsko čišćenje</Link>
                                <Link href="/usluge/ciscenje-kamenih-povrsina" onClick={closeMenu}>Kamene površine</Link>
                                <Link href="/usluge/ciscenje-drvenih-povrsina" onClick={closeMenu}>Drvene površine</Link>
                                <Link href="/usluge/detailing-automobila" onClick={closeMenu}>Detailing auta</Link>
                                <Link href="/usluge/pranje-bazena" onClick={closeMenu}>Pranje bazena</Link>
                                <Link href="/usluge/odrzavanje-grobnih-mjesta" onClick={closeMenu}>Grobna mjesta</Link>
                            </div>
                        </div>
                        <Link href="/#zasto-mi" className={styles.mobileLink} onClick={closeMenu}>O nama</Link>
                        <Link href="/blog" className={styles.mobileLink} onClick={closeMenu}>Blog</Link>
                        <Link href="/#kontakt" className={styles.mobileLink} onClick={closeMenu}>Kontakt</Link>

                        <a href="tel:+385916400247" className={`btn btn-primary ${styles.mobileCtaBtn}`}>
                            <Phone size={18} style={{ marginRight: '8px' }} />
                            Nazovite nas
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}

