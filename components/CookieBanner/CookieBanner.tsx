'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
    // Banner dolazi već u HTML-u sa servera pa se iscrta sa stranicom, a ne tek
    // nakon JavaScripta (inače ga PageSpeed uzme za LCP i on ispadne 4-11 s).
    // Tko je već odabrao, tome ga skripta u <head> skrije prije prvog iscrtavanja
    // (html[data-consent]), a ovdje se samo makne iz DOM-a.
    const [showBanner, setShowBanner] = useState(true);

    // Provide a simple mock for gtag so TS doesn't complain,
    // though gtag should be globally available from layout.tsx
    const updateConsent = (granted: boolean) => {
        const consentValue = granted ? 'granted' : 'denied';
        
        if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
            window.gtag('consent', 'update', {
                'ad_storage': consentValue,
                'ad_user_data': consentValue,
                'ad_personalization': consentValue,
                'analytics_storage': consentValue,
            });
        }
    };

    useEffect(() => {
        // 'granted' Googleu javlja već skripta u <head> (layout.tsx), prije GTM-a
        let consentCookie: string | null = null;
        try {
            consentCookie = localStorage.getItem('cookie_consent');
        } catch {
            // blokiran storage: banner ostaje, izbor vrijedi samo za ovaj posjet
        }
        if (consentCookie) {
            // localStorage postoji tek u pregledniku, pa se odluka čita tek nakon mounta
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setShowBanner(false);
        }
    }, []);

    const saveChoice = (value: 'granted' | 'denied') => {
        try {
            localStorage.setItem('cookie_consent', value);
        } catch {
            // blokiran storage
        }
        updateConsent(value === 'granted');
        setShowBanner(false);
    };

    const handleAccept = () => saveChoice('granted');

    const handleReject = () => saveChoice('denied');

    if (!showBanner) return null;

    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                {/* Do 4. 10. 2026. naslov i tri rečenice; na mobitelu je banner pokrivao ~40 % ekrana */}
                <p className={styles.description}>
                    Kolačiće za analitiku i oglase koristimo samo uz vaš pristanak.{' '}
                    <Link href="/politika-privatnosti">Politika privatnosti</Link>
                </p>
                <div className={styles.actions}>
                    <button onClick={handleReject} className={`${styles.btn} ${styles.btnReject}`}>
                        Samo nužni
                    </button>
                    <button onClick={handleAccept} className={`${styles.btn} ${styles.btnAccept}`}>
                        Prihvaćam sve
                    </button>
                </div>
            </div>
        </div>
    );
}
