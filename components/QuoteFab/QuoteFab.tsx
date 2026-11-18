'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { Calculator, X } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import { serviceForPath } from '@/lib/quote';
import styles from './QuoteFab.module.css';

export default function QuoteFab() {
    const [openPath, setOpenPath] = useState<string | null>(null);
    const [service, setService] = useState('facade');
    const dialog = useRef<HTMLDialogElement>(null);
    const trigger = useRef<HTMLElement | null>(null);
    const pathname = usePathname();
    const open = openPath === pathname;
    const excluded = pathname.startsWith('/lp') || pathname.startsWith('/admin');

    useEffect(() => {
        if (excluded) return;
        const show = (event: Event) => {
            const detail = (event as CustomEvent<{service?: string}>).detail;
            trigger.current = document.activeElement as HTMLElement;
            setService(detail?.service ?? document.getElementById('procjena')?.dataset.service ?? serviceForPath(pathname));
            setOpenPath(pathname);
        };
        const onLink = (event: MouseEvent) => {
            if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
            const anchor = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
            if (!anchor) return;
            const url = new URL(anchor.href, window.location.href);
            if (url.origin !== window.location.origin || url.hash !== '#procjena' || (url.pathname !== pathname && url.pathname !== '/')) return;
            event.preventDefault();
            show(new CustomEvent('slauf:otvori-procjenu', { detail: { service: anchor.dataset.service } }));
        };
        window.addEventListener('slauf:otvori-procjenu', show);
        document.addEventListener('click', onLink);
        return () => { window.removeEventListener('slauf:otvori-procjenu', show); document.removeEventListener('click', onLink); };
    }, [pathname, excluded]);

    // 18. 11. 2026.: dok se forma #procjena vidi na ekranu, plutajući gumb je suvišan,
    // a na mobitelu je prekrivao "Pošaljite upit" u hero formi. Pojavi se kad forma izađe.
    const [formVisible, setFormVisible] = useState(false);
    useEffect(() => {
        const form = document.getElementById('procjena');
        if (excluded || !form || !('IntersectionObserver' in window)) return;
        const observer = new IntersectionObserver(([entry]) => setFormVisible(entry.isIntersecting));
        observer.observe(form);
        return () => { observer.disconnect(); setFormVisible(false); };
    }, [pathname, excluded]);

    useEffect(() => {
        if (!open || excluded) return;
        const modal = dialog.current;
        const overflow = document.body.style.overflow;
        modal?.showModal();
        document.body.style.overflow = 'hidden';
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'calculator_open', service_type: service, page_path: pathname });
        return () => { modal?.close(); document.body.style.overflow = overflow; trigger.current?.focus(); };
    }, [open, excluded, pathname, service]);

    if (excluded) return null;
    return <>
        {!formVisible && <button type="button" className={styles.fab} aria-label="Otvori kalkulator cijene" aria-haspopup="dialog" aria-expanded={open}
            onClick={() => window.dispatchEvent(new Event('slauf:otvori-procjenu'))}>
            <span className={styles.fabLabel}>Izračunajte cijenu</span><span className={styles.fabIcon}>{open ? <X size={25}/> : <Calculator size={25}/>}</span>
        </button>}
        <dialog ref={dialog} className={styles.modal} aria-labelledby="calculator-title" onClose={() => setOpenPath(null)} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
            {open && <div className={styles.inner}>
                <header className={styles.header}><div><span className={styles.eyebrow}>Šlauf i Šmrk</span><h2 id="calculator-title">Koliko bi koštalo?</h2></div>
                    <button autoFocus type="button" className={styles.close} onClick={() => dialog.current?.close()} aria-label="Zatvori kalkulator"><X size={22}/></button>
                </header>
                <QuoteForm idPrefix="kalkulator" initialService={service} hideHeading expanded />
            </div>}
        </dialog>
    </>;
}
