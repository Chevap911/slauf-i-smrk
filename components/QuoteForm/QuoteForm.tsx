'use client';

import { useState } from 'react';
import { MessageCircle, Phone, Check } from 'lucide-react';
import styles from './QuoteForm.module.css';

export const QUOTE_SERVICES = [
    { id: 'facade', label: 'Pranje fasade' },
    { id: 'yard', label: 'Pranje okućnice' },
    { id: 'terrace', label: 'Pranje terase' },
    { id: 'pavers', label: 'Pranje tlakavaca' },
    { id: 'driveway', label: 'Pranje prilaza' },
    { id: '', label: 'Ostalo / nisam siguran' },
];

export const QUOTE_WHATSAPP =
    'https://wa.me/385958442806?text=Pozdrav%2C%20%C5%A1aljem%20slike%20povr%C5%A1ine%20za%20procjenu%20%C4%8Di%C5%A1%C4%87enja.';

// Kanonske stope €/m² (vidi Šlauf i Šmrk/overview.md)
const RATES: Record<string, [number, number]> = {
    facade: [5, 7],
    yard: [4, 6],
    terrace: [4, 6],
    pavers: [4, 6],
    driveway: [4, 6],
};

function computeEstimate(service: string, size: string): { min: number; max: number } | null {
    const rate = RATES[service];
    const area = parseFloat((size || '').replace(',', '.'));
    if (!rate || !area || area <= 0) return null;
    return { min: Math.round(area * rate[0]), max: Math.round(area * rate[1]) };
}

export default function QuoteForm({ idPrefix = 'qf', hideHeading = false }: { idPrefix?: string; hideHeading?: boolean }) {
    const [sent, setSent] = useState(false);
    const [sentEstimate, setSentEstimate] = useState<{ min: number; max: number } | null>(null);
    const [submitting, setSubmitting] = useState(false);
    const [service, setService] = useState('facade');
    const [contact, setContact] = useState('');
    const [size, setSize] = useState('');
    const [error, setError] = useState('');

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const phone = contact.trim();
        if (phone.replace(/\D/g, '').length < 6) {
            setError('Upišite ispravan broj mobitela da vas možemo nazvati.');
            return;
        }
        const est = computeEstimate(service, size);
        setSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mode: 'final',
                    formData: {
                        name: 'Brzi upit (web)',
                        email: '',
                        phone,
                        city: '',
                        service,
                        surfaceSize: size,
                        message: `Brzi upit s forme. Površina: ${size || 'nije navedeno'} m².${est ? ` Okvirna cijena prikazana korisniku: ${est.min} - ${est.max} €.` : ''}`,
                        marketingConsent: false,
                    },
                    estimatedPrice: est || { min: 0, max: 0 },
                }),
            });
            if (!res.ok) throw new Error('fail');
            setSentEstimate(est);
            setSent(true);
        } catch {
            setError('Greška pri slanju. Nazovite nas na 095 844 2806 ili WhatsApp.');
        } finally {
            setSubmitting(false);
        }
    };

    if (sent) {
        return (
            <div className={styles.success}>
                <div className={styles.successIcon}><Check size={30} /></div>
                <h3 className={styles.title}>Upit zaprimljen!</h3>
                {sentEstimate ? (
                    <>
                        <div className={styles.estimate}>
                            <span className={styles.estimateLabel}>Okvirna cijena za vašu površinu</span>
                            <strong className={styles.estimateValue}>{sentEstimate.min} – {sentEstimate.max} €</strong>
                            <span className={styles.estimateNote}>Informativno, konačnu cijenu potvrđujemo nakon besplatne procjene.</span>
                        </div>
                        <p className={styles.sub}>Javimo vam se u najkraćem roku. Za brži odgovor pošaljite slike na WhatsApp.</p>
                    </>
                ) : (
                    <p className={styles.sub}>Javimo vam se u najkraćem roku s okvirnom cijenom. Za brži odgovor pošaljite slike na WhatsApp.</p>
                )}
                <a href={QUOTE_WHATSAPP} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
                    <MessageCircle size={18} /> Pošaljite slike na WhatsApp
                </a>
            </div>
        );
    }

    return (
        <div className={styles.wrap}>
            {!hideHeading && (
                <>
                    <h3 className={styles.title}>Zatražite besplatnu procjenu</h3>
                    <p className={styles.sub}>Ispunite kratki obrazac i odmah vidite okvirnu cijenu. Bez obveze.</p>
                </>
            )}

            <form onSubmit={submit} className={styles.form}>
                <label className={styles.field}>
                    <span>Što treba očistiti?</span>
                    <select value={service} onChange={(e) => setService(e.target.value)}>
                        {QUOTE_SERVICES.map((s) => <option key={s.label} value={s.id}>{s.label}</option>)}
                    </select>
                </label>

                <label className={styles.field}>
                    <span>Broj mobitela</span>
                    <input
                        id={`${idPrefix}-contact`}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="npr. 095 123 4567"
                        required
                    />
                </label>

                <label className={styles.field}>
                    <span>Okvirna kvadratura (nije obavezno)</span>
                    <input
                        type="number"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
                        placeholder="npr. 150"
                        min="0"
                    />
                </label>

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.submit} disabled={submitting}>
                    {submitting ? 'Šaljem...' : 'Pošalji upit'}
                </button>
            </form>

            <div className={styles.divider}><span>imate slike?</span></div>
            <a href={QUOTE_WHATSAPP} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
                <MessageCircle size={18} /> Pošaljite slike na WhatsApp
            </a>
            <a href="tel:+385958442806" className={styles.callLine}>
                <Phone size={15} /> ili nazovite 095 844 2806
            </a>
        </div>
    );
}
