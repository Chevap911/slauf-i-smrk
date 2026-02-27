'use client';

import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Phone, X } from 'lucide-react';
import styles from './StickyCtaBanner.module.css';

export default function StickyCtaBanner() {
    const [visible, setVisible] = useState(false);
    const [dismissed, setDismissed] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (dismissed) return;

        const contactSection = document.getElementById('kontakt');

        // Show after scrolling 600px
        if (latest > 600) {
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
    });

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
                        <a href="tel:+385958442806" className={styles.phoneBtn}>
                            <Phone size={18} />
                            <span>(095) 844-2806</span>
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
