'use client';

import { MessageCircle, Phone, Star } from 'lucide-react';
import QuoteForm, { isPerM2Service, type QuoteServiceId } from '@/components/QuoteForm/QuoteForm';
import styles from './ArticleQuote.module.css';

/**
 * Upit usred članka, odmah uz odgovor na "koliko košta".
 *
 * Većina organskog prometa ulazi na blog, a upit je do sada bio tek na dnu
 * članka i vodio na dugu formu na naslovnici. Mehanizam je preuzet iz
 * HomeAdvisor vodiča o cijenama: cijena i upit stoje zajedno, rano na stranici.
 * Vizualno je ista kartica kao hero forma (tamno plavo zaglavlje, bijelo tijelo).
 *
 * Varijanta 'diy' je za članke "kako sami": čitatelj još ne zna treba li mu
 * stroj, pa mu nudimo savjet po fotki umjesto cijene.
 */

type Props = {
    /** Kratki kod za GTM i id polja, npr. "blog-fasada-cijena". */
    location: string;
    title: string;
    /** Usluga u formi. Bez nje se prikazuju samo WhatsApp i poziv. */
    service?: QuoteServiceId;
    /** 'price' za članke o cijeni (zadano), 'diy' za članke "kako sami". */
    variant?: 'price' | 'diy';
    whatsappText: string;
    whatsappLabel?: string;
};

const PHONE = '+385958442806';

const track = (event: 'whatsapp_click' | 'call_click', location: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, cta_location: location });
};

function podnaslov(variant: 'price' | 'diy', service: QuoteServiceId | undefined): string {
    if (variant === 'diy') {
        return 'Ostavite mobitel ili pošaljite fotku na WhatsApp. Iskreno vam kažemo možete li sami ili treba stroj.';
    }
    if (service === undefined) {
        return 'Pošaljite sliku i recite nam gdje je. Javljamo okvirnu cijenu, a točnu potvrđujemo prije početka.';
    }
    return isPerM2Service(service)
        ? 'Upišite mobitel i veličinu. Okvirnu cijenu vidite čim pošaljete, a točnu potvrđujemo nakon besplatne procjene.'
        : 'Ostavite mobitel i javimo vam se s cijenom. Brže ide ako pošaljete sliku na WhatsApp.';
}

export default function ArticleQuote({ location, title, service, variant = 'price', whatsappText, whatsappLabel = 'Pošaljite slike na WhatsApp' }: Props) {
    const waHref = `https://wa.me/385958442806?text=${encodeURIComponent(whatsappText)}`;
    const withForm = service !== undefined;
    const eyebrow = variant === 'diy' ? 'Besplatna procjena po fotki' : 'Besplatna procjena';

    return (
        <aside className={styles.card} aria-label={eyebrow} id="procjena" data-service={service}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>{eyebrow}</span>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{podnaslov(variant, service)}</p>
                <p className={styles.trust}>
                    <Star size={14} fill="currentColor" aria-hidden="true" /> 5,0 na Googleu, 40 recenzija · Zagreb i okolica
                </p>
            </div>
            <div className={styles.body}>
                {withForm ? (
                    // Blog čitaju i zimi: tko još ne treba termin, može se prijaviti za ožujak
                    <QuoteForm idPrefix={location} hideHeading initialService={service} whatsappText={whatsappText} offerLater />
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
                            <Phone size={18} /> +385 95 844 2806
                        </a>
                    </div>
                )}
            </div>
        </aside>
    );
}
