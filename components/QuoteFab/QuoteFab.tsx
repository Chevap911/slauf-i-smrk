'use client';

import { useState, useEffect } from 'react';
import { Sparkles, X } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import styles from './QuoteFab.module.css';

export default function QuoteFab() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
    }, [open]);

    return (
        <>
            <button
                type="button"
                className={styles.fab}
                onClick={() => setOpen(true)}
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
                        <QuoteForm idPrefix="fab" />
                    </div>
                </div>
            )}
        </>
    );
}
