'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import styles from './StickyCtaBanner.module.css';

export default function StickyCtaBanner() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const contactSection = document.getElementById('kontakt');

            // Show after scrolling 600px
            if (scrollY > 600 && !dismissed) {
                // But hide when contact section is visible
                if (contactSection) {
                    const rect = contactSection.getBoundingClientRect();
                    setVisible(rect.top > window.innerHeight);
                } else {
                    setVisible(true);
                }
            } else {
                setVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [dismissed]);

    const handleDismiss = () => {
        setDismissed(true);
        setVisible(false);
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className={styles.banner}
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                    <div className={styles.inner}>
                        <span className={styles.text}>
                            Trebate čišćenje? Nazovite nas!
                        </span>
                        <a href="tel:+385916400247" className={styles.phoneBtn}>
                            <Phone size={18} />
                            <span>(091) 6400-247</span>
                        </a>
                        <a href="#kontakt" className={styles.ctaBtn}>
                            Besplatna procjena
                        </a>
                        <button
                            className={styles.closeBtn}
                            onClick={handleDismiss}
                            aria-label="Zatvori"
                        >
                            <X size={16} />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
