'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Sparkles, X } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import styles from './QuoteFab.module.css';

// Usluga s forme na stranici (data-service na QuoteCard), da modal na stranici za grobove ne krene od fasade
const uslugaSaStranice = () => document.getElementById('procjena')?.dataset.service;

export default function QuoteFab() {
    const [open, setOpen] = useState(false);
    const [service, setService] = useState<string | undefined>();
    const pathname = usePathname();

    const otvori = () => {
        setService(uslugaSaStranice());
        setOpen(true);
    };

    // StickyCtaBanner otvara ovaj modal na stranicama bez forme
    useEffect(() => {
        const naDogadaj = () => {
            setService(uslugaSaStranice());
            setOpen(true);
        };
        window.addEventListener('slauf:otvori-procjenu', naDogadaj);
        return () => window.removeEventListener('slauf:otvori-procjenu', naDogadaj);
    }, []);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
    }, [open]);

    // Landing stranice za oglase imaju svoju formu u vrhu i svoju traku na dnu
    if (pathname?.startsWith('/lp')) return null;

    return (
        <>
            <button
                type="button"
                className={styles.fab}
                onClick={otvori}
                aria-label="Zatražite besplatnu procjenu"
            >
                <Sparkles size={18} />
                <span>Besplatna procjena</span>
            </button>

            {open && (
                <div className={styles.overlay} onClick={() => setOpen(false)} role="dialog" aria-modal="true">
                    <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                        <button type="button" className={styles.close} onClick={() => setOpen(false)} aria-label="Zatvori">
                            <X size={22} />
                        </button>
                        <QuoteForm idPrefix="fab" initialService={service} />
                    </div>
                </div>
            )}
        </>
    );
}
