'use client';

import { useState, useEffect } from 'react';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);

    // Provide a simple mock for gtag so TS doesn't complain,
    // though gtag should be globally available from layout.tsx
    const updateConsent = (granted: boolean) => {
        const consentValue = granted ? 'granted' : 'denied';
        
        if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
            (window as any).gtag('consent', 'update', {
                'ad_storage': consentValue,
                'ad_user_data': consentValue,
                'ad_personalization': consentValue,
                'analytics_storage': consentValue,
            });
        }
    };

    useEffect(() => {
        const consentCookie = localStorage.getItem('cookie_consent');
        if (!consentCookie) {
            setShowBanner(true);
        } else if (consentCookie === 'granted') {
            updateConsent(true);
        }
        // If 'denied', we do nothing because default is already 'denied' in layout.tsx
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie_consent', 'granted');
        updateConsent(true);
        setShowBanner(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookie_consent', 'denied');
        updateConsent(false);
        setShowBanner(false);
    };

    if (!showBanner) return null;

    return (
        <div className={styles.banner}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <div className={styles.title}>Postavke privatnosti i kolačića</div>
                    <div className={styles.description}>
                        Koristimo kolačiće kako bismo vam pružili najbolje iskustvo na našoj web stranici, analizirali promet i prikazivali personalizirane oglase. 
                        Klikom na "Prihvaćam sve", pristajete na upotrebu svih kolačića. 
                        Možete odabrati "Samo nužni" ako ne želite kolačiće za praćenje.
                    </div>
                </div>
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
