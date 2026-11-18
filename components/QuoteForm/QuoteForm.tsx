'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Phone, Check } from 'lucide-react';
import { formatIznos, sidrenaTekst } from '@/lib/cjenik';
import { contactFields } from '@/lib/contact';
import { QUOTE_SERVICES, FURNITURE, computeEstimate, isPerM2Service, priceItem, quoteSummary, whatsappHref, formatRange, sidrenaUkupno } from '@/lib/quote';
import styles from './QuoteForm.module.css';
export { QUOTE_SERVICES, QUOTE_WHATSAPP, isPerM2Service, type QuoteServiceId } from '@/lib/quote';

type Props = { idPrefix?: string; hideHeading?: boolean; initialService?: string; whatsappText?: string; offerLater?: boolean; expanded?: boolean; compact?: boolean };
function track(event: string, location: string, service?: string) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, cta_location: location, form_location: location, service_type: service });
}

export default function QuoteForm({ idPrefix = 'qf', hideHeading = false, initialService = 'facade', whatsappText, offerLater = false, expanded = false, compact = false }: Props) {
    const [service, setService] = useState(initialService);
    const [size, setSize] = useState('100');
    const [furniture, setFurniture] = useState('garnitura');
    const [contact, setContact] = useState('');
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [message, setMessage] = useState('');
    const [honeypot, setHoneypot] = useState('');
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [offSeason, setOffSeason] = useState(false);
    const [later, setLater] = useState(false);
    useEffect(() => {
        if (offerLater) setOffSeason([9,10,11,0,1].includes(new Date().getMonth()));
    }, [offerLater]);
    const perM2 = isPerM2Service(service);
    const grave = service === 'grave';
    const item = priceItem(service, furniture);
    const estimate = computeEstimate(service, size);
    const summary = quoteSummary(service, size, furniture);
    const wa = whatsappHref(`${whatsappText ? `${whatsappText} ` : ''}${summary}`);
    const showLater = offerLater && offSeason && (perM2 || service === 'pool');
    const laterChosen = showLater && later;
    const changeService = (value: string) => { setService(value); setError(''); };

    async function submit(e: React.FormEvent) {
        e.preventDefault();
        if (submitting) return;
        setError('');
        const fields = contactFields(contact);
        if (!fields) { setError('Upišite ispravan broj mobitela ili e-mail.'); return; }
        if (perM2 && size.trim() && !estimate) { setError('Provjerite kvadraturu ili ostavite prazno ako je ne znate.'); return; }
        setSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST', headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mode: 'final', formData: {
                    name: name.trim() || 'Brzi upit (web)', ...fields, city: city.trim(),
                    service: service || 'other', surfaceSize: perM2 ? size : '',
                    furniture: service === 'chemical' ? furniture : '',
                    message: [summary, message.trim(), grave ? 'Prijava na listu interesa, bez rezervacije termina.' : '', laterChosen ? 'Javiti se početkom sezone u ožujku.' : ''].filter(Boolean).join('\n'),
                    landing_page: window.location.pathname, form_location: idPrefix, honeypot, marketingConsent: false,
                }, estimatedPrice: estimate?.cijena || (item && !perM2 ? {min:item.cijena.min} : null) }),
            });
            if (!res.ok) throw new Error('Slanje nije potvrđeno');
            track('form_submit', idPrefix, service);
            setSent(true);
        } catch {
            setError('Upit nije potvrđen. Pokušajte ponovno ili nas kontaktirajte na WhatsApp.');
        } finally { setSubmitting(false); }
    }

    if (sent) return <div className={styles.success} role="status">
        <div className={styles.successIcon}><Check size={28} /></div>
        <h3 className={styles.title}>{grave ? 'Prijava zaprimljena' : 'Upit zaprimljen!'}</h3>
        <p className={styles.sub}>{grave ? 'Javit ćemo se kad ponovno budemo primali grobna mjesta. Ovo nije rezervacija termina.' : laterChosen ? 'Javit ćemo se početkom sezone u ožujku.' : 'Javit ćemo vam se za dogovor i točnu ponudu.'}</p>
        <p className={styles.sub}>{summary}</p>

        <a className={styles.whatsapp} href={wa} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click',idPrefix,service)}><MessageCircle size={18}/>Pošaljite fotografije na WhatsApp</a>
    </div>;

    return <div className={styles.wrap}>
        {!hideHeading && <><h3 className={styles.title}>Izračunajte početnu cijenu</h3><p className={styles.sub}>Odaberite uslugu. Za točnu ponudu pošaljite fotografije.</p></>}
        <div className={compact ? `${styles.form} ${styles.compact}` : styles.form}>
            {expanded ? <fieldset className={styles.serviceFieldset}><legend>Što treba očistiti?</legend><div className={styles.serviceGrid}>
                {QUOTE_SERVICES.map(s => <button key={s.id} type="button" className={styles.pick} aria-pressed={service === s.id} onClick={() => changeService(s.id)}>{s.label}</button>)}
            </div></fieldset> : <label className={styles.field}><span>Što treba očistiti?</span><select value={service} onChange={e => changeService(e.target.value)}>{QUOTE_SERVICES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}</select></label>}
            {service === 'chemical' && <label className={styles.field}><span>Koji komad namještaja?</span><select value={furniture} onChange={e => setFurniture(e.target.value)}>{FURNITURE.map(s => <option value={s.id} key={s.id}>{s.label}</option>)}</select></label>}
            {perM2 && <div className={styles.areaRow}>
                <label className={styles.field}><span>Površina u m²</span><input id={`${idPrefix}-size`} aria-label="Površina u m²" type="text" inputMode="decimal" value={size} onChange={e => setSize(e.target.value)} placeholder="Ako ne znate, ostavite prazno" maxLength={8} /></label>
                {expanded && <label className={styles.field}><span>Brzi odabir: 20 do 500 m²</span><input aria-label="Brzi odabir kvadrature" type="range" min="20" max="500" step="5" value={Math.min(500, Math.max(20, Number(size.replace(',','.')) || 20))} onChange={e => setSize(e.target.value)} /></label>}
            </div>}
            <div className={styles.estimate} aria-live="polite" aria-atomic="true">
                {grave ? <><strong className={styles.estimateRate}>Trenutačno samo lista interesa</strong><span className={styles.estimateNote}>Grobna mjesta trenutačno ne čistimo. Prijavite se pa ćemo vam javiti kad ponovno krenemo.</span></> : item ? <>
                    <span className={styles.estimateLabel}>{estimate ? `Početno za ${size} m²` : 'Cijena iz cjenika'}</span>
                    <strong className={styles.estimateValue}>{estimate ? formatRange(estimate.cijena) : formatIznos(item.cijena, item.jedinica)}</strong>
                    <span className={`sidrena ${styles.anchor}`}>{estimate ? sidrenaUkupno(estimate.sidrena) : sidrenaTekst(item)}</span>
                    <span className={styles.estimateNote}>{perM2 && size && !estimate ? 'Upišite ispravnu kvadraturu za izračun ukupne cijene. ' : ''}Početni iznos nije konačna ponuda. Cijena ovisi o zaprljanosti, pristupu i opsegu posla; potvrđujemo je prije rada.</span>
                    {!estimate && item.minimum && <span className={styles.estimateNote}>Najmanje {item.minimum.cijena} € po poslu (cijena na 10. 9. 2026.: {item.minimum.sidrena} €).</span>}
                </> : <><strong className={styles.estimateRate}>Cijena po ponudi</strong><span className={styles.estimateNote}>{service === 'b2b_commercial' ? 'Pošaljite opis i fotografije prostora. Za veće površine dogovaramo besplatan probni dio.' : 'Pošaljite opis i fotografije za procjenu.'}</span></>}
            </div>
            <a className={styles.whatsapp} href={wa} target="_blank" rel="noopener noreferrer" onClick={() => track('whatsapp_click',idPrefix,service)}><MessageCircle size={18}/>Pošaljite fotografije na WhatsApp</a>
            <details className={styles.contactDetails}><summary>{grave ? 'Prijavite se na listu interesa' : 'Pošaljite upit ili zatražite poziv'}</summary>
                <form onSubmit={submit} className={styles.form}>
                    <label className={styles.field}><span>Ime (nije obavezno)</span><input autoComplete="name" value={name} onChange={e => setName(e.target.value)} maxLength={100} /></label>
                    <label className={styles.field}><span>Mobitel ili e-mail</span><input id={`${idPrefix}-contact`} type="text" autoComplete="off" required value={contact} onChange={e => setContact(e.target.value)} placeholder="Vaš mobitel ili e-mail" aria-describedby={error ? `${idPrefix}-error` : undefined} maxLength={254} /></label>
                    <label className={styles.field}><span>Lokacija (nije obavezno)</span><input autoComplete="address-level2" value={city} onChange={e => setCity(e.target.value)} maxLength={150} /></label>
                    <label className={styles.field}><span>Poruka (nije obavezno)</span><textarea value={message} onChange={e => setMessage(e.target.value)} rows={2} maxLength={1500} /></label>
                    <div className={styles.honeypot} aria-hidden="true"><label>Ostavite prazno<input tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} /></label></div>
                    {showLater && <label className={styles.later}><input type="checkbox" checked={later} onChange={e => setLater(e.target.checked)} /><span>Javite mi se početkom sezone u ožujku</span></label>}
                    {error && <p id={`${idPrefix}-error`} role="alert" className={styles.error}>{error}</p>}
                    <button className={styles.submit} type="submit" disabled={submitting}>{submitting ? 'Šaljem...' : grave ? 'Pošalji prijavu' : 'Pošalji upit'}</button>
                    <p className={styles.estimateNote}>Kontakt koristimo za odgovor na upit. <a href="/politika-privatnosti">Politika privatnosti</a></p>
                </form>
            </details>
        </div>
        <p className={styles.reply}>Odgovaramo u roku od sat vremena.</p>
        <a href="tel:+385958442806" className={styles.callLine} onClick={() => track('call_click',idPrefix,service)}><Phone size={15}/>Nazovite +385 95 844 2806</a>
    </div>;
}
