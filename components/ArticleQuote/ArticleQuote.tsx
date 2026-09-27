'use client';

import { MessageCircle, Phone, Star } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import styles from './ArticleQuote.module.css';

/**
 * Upit usred članka, odmah uz odgovor na "koliko košta".
 *
 * Većina organskog prometa ulazi na blog, a upit je do sada bio tek na dnu
 * članka i vodio na dugu formu na naslovnici. Mehanizam je preuzet iz
 * HomeAdvisor vodiča o cijenama: cijena i upit stoje zajedno, rano na stranici.
 * Vizualno je ista kartica kao hero forma (tamno plavo zaglavlje, bijelo tijelo).
 */

type Usluga = 'facade' | 'yard' | 'terrace' | 'pavers' | 'driveway' | '';

type Props = {
    /** Kratki kod za GTM i id polja, npr. "blog-fasada-cijena". */
    location: string;
    title: string;
    /** Usluga u formi. Bez nje se prikazuju samo WhatsApp i poziv (grobovi, namještaj). */
    service?: Usluga;
    whatsappText: string;
    whatsappLabel?: string;
};

const PHONE = '+385958442806';

const track = (event: 'whatsapp_click' | 'call_click', location: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, cta_location: location });
};

export default function ArticleQuote({ location, title, service, whatsappText, whatsappLabel = 'Pošaljite slike na WhatsApp' }: Props) {
    const waHref = `https://wa.me/385958442806?text=${encodeURIComponent(whatsappText)}`;
    const withForm = service !== undefined;

    return (
        <aside className={styles.card} aria-label="Besplatna procjena" id="procjena" data-service={service}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>Besplatna procjena</span>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>
                    {withForm
                        ? 'Upišite mobitel i kvadraturu. Okvirnu cijenu vidite čim pošaljete, a točnu potvrđujemo nakon besplatne procjene.'
                        : 'Pošaljite sliku i recite nam gdje je. Javljamo okvirnu cijenu, a točnu potvrđujemo prije početka.'}
                </p>
                <p className={styles.trust}>
                    <Star size={14} fill="currentColor" aria-hidden="true" /> 5,0 na Googleu, 40 recenzija · Zagreb i okolica
                </p>
            </div>
            <div className={styles.body}>
                {withForm ? (
                    <QuoteForm idPrefix={location} hideHeading initialService={service} whatsappText={whatsappText} />
                ) : (
                    <div className={styles.actions}>
                        <a
                            href={waHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.whatsapp}
                            onClick={() => track('whatsapp_click', location)}
                        >
                            <MessageCircle size={18} /> {whatsappLabel}
                        </a>
                        <a href={`tel:${PHONE}`} className={styles.call} onClick={() => track('call_click', location)}>
                            <Phone size={18} /> 095 844 2806
                        </a>
                    </div>
                )}
            </div>
        </aside>
    );
}
