'use client';

import { useState, useEffect } from 'react';
import styles from '../../LandingPage.module.css';

interface FormState {
    cemetery: string;
    graveLocation: string;
    name: string;
    phone: string;
    notes: string;
    honeypot: string;
}

export default function LeadForm() {
    const [form, setForm] = useState<FormState>({
        cemetery: '',
        graveLocation: '',
        name: '',
        phone: '',
        notes: '',
        honeypot: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [validationError, setValidationError] = useState<string>('');

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramsToSave = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'];
        paramsToSave.forEach(param => {
            if (urlParams.has(param)) {
                sessionStorage.setItem(param, urlParams.get(param)!);
            }
        });
    }, []);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, phone: e.target.value });
        if (validationError) setValidationError('');
    };

    const validatePhone = (phone: string) => {
        const clean = phone.replace(/[\s\+]/g, '');
        return clean.length >= 8 && /^\d+$/.test(clean);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (form.honeypot) return;

        if (!validatePhone(form.phone)) {
            setValidationError('Unesite ispravan broj mobitela.');
            return;
        }

        setStatus('submitting');

        const utmData = {
            utm_source: sessionStorage.getItem('utm_source'),
            utm_medium: sessionStorage.getItem('utm_medium'),
            utm_campaign: sessionStorage.getItem('utm_campaign'),
            utm_term: sessionStorage.getItem('utm_term'),
            utm_content: sessionStorage.getItem('utm_content'),
            gclid: sessionStorage.getItem('gclid'),
            gbraid: sessionStorage.getItem('gbraid'),
            wbraid: sessionStorage.getItem('wbraid'),
        };

        const messageParts = [
            `Groblje: ${form.cemetery || 'Nije odabrano'}`,
            `Lokacija groba: ${form.graveLocation || 'Nije uneseno'}`,
            `Napomene: ${form.notes || 'Nema'}`,
        ];

        const payload = {
            mode: 'final',
            formData: {
                name: form.name || 'N/A',
                email: 'lp-upit@slaufismrk.com',
                phone: form.phone,
                city: form.cemetery || 'N/A',
                service: 'grave_maintenance',
                message: messageParts.join(' | '),
                ...utmData,
                lead_type: 'Google Ads landing page',
                landing_page: '/lp/odrzavanje-grobnih-mjesta',
                timestamp: new Date().toISOString(),
            },
        };

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            if (res.ok) {
                setStatus('success');
                // @ts-ignore
                window.dataLayer?.push({
                    event: 'lead_form_submit',
                    event_category: 'google_ads_landing_page',
                    service: 'Održavanje grobnih mjesta',
                    landing_page: '/lp/odrzavanje-grobnih-mjesta',
                    cta_location: 'form',
                });
            } else {
                setStatus('error');
            }
        } catch {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.formCard} id="prijava">
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1rem' }}>
                        Hvala! Zaprimili smo vašu prijavu.
                    </h3>
                    <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontWeight: 500 }}>
                        Kontaktirat ćemo vas čim termin za vaše groblje bude zakazan.
                    </p>
                    <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                        <p style={{ fontSize: '0.9rem', color: '#374151', fontWeight: 600 }}>
                            Javite nam se i na WhatsApp s lokacijom grobnog mjesta (polje, red, broj) kako bismo sve pripremili.
                        </p>
                    </div>

                    <a
                        href="https://wa.me/385958442806?text=Bok%2C%20upravo%20sam%20poslao%2Fla%20upit%20za%20čišćenje%20grobnog%20mjesta.%20Lokacija:%20"
                        className={styles.btnPrimary}
                        onClick={() => {
                            // @ts-ignore
                            window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'success_state' });
                        }}
                    >
                        📲 Pošalji lokaciju na WhatsApp
                    </a>

                    <a
                        href="tel:+385958442806"
                        className={styles.btnSecondary}
                        onClick={() => {
                            // @ts-ignore
                            window.dataLayer?.push({ event: 'call_click', cta_location: 'success_state' });
                        }}
                    >
                        📞 Nazovi odmah
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formCard} id="prijava">
            <h2 className={styles.formTitle}>Prijavite grobno mjesto</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Groblje *</label>
                    <select
                        className={styles.select}
                        value={form.cemetery}
                        required
                        onChange={(e) => setForm({ ...form, cemetery: e.target.value })}
                    >
                        <option value="">— Odaberite groblje —</option>
                        <option>Mirogoj</option>
                        <option>Miroševac</option>
                        <option>Markovo Polje</option>
                        <option>Brestje</option>
                        <option>Krematorij</option>
                        <option>Drugo</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Lokacija groba (polje, red, broj)</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="npr. Polje 21, red 5, grob 12"
                        value={form.graveLocation}
                        onChange={(e) => setForm({ ...form, graveLocation: e.target.value })}
                    />
                    <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem' }}>
                        Ako ne znate točno, navedite što više možete — dogovorit ćemo detalje.
                    </p>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Ime i prezime</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Vaše ime (opcionalno)"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Broj mobitela *</label>
                    <input
                        type="tel"
                        inputMode="tel"
                        className={styles.input}
                        placeholder="npr. 091 234 5678"
                        autoComplete="tel"
                        required
                        value={form.phone}
                        onChange={handlePhoneChange}
                        style={validationError ? { borderColor: '#ef4444' } : {}}
                    />
                    {validationError && <p className={styles.errorText}>{validationError}</p>}
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Napomene</label>
                    <textarea
                        className={styles.input}
                        rows={3}
                        placeholder="npr. Posebne napomene, vrsta kamena, što biste željeli posebno očistiti..."
                        value={form.notes}
                        onChange={(e) => setForm({ ...form, notes: e.target.value })}
                        style={{ resize: 'vertical' }}
                    />
                </div>

                {/* Honeypot */}
                <input
                    type="text"
                    style={{ display: 'none' }}
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
                />

                {status === 'error' && (
                    <div style={{ background: '#fef2f2', border: '1px solid #fecaca', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1rem' }}>
                        <p className={styles.errorText} style={{ marginTop: 0, fontWeight: 600 }}>
                            Nešto je pošlo po krivu. Pokušajte ponovno ili nas nazovite.
                        </p>
                        <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.75rem' }}>
                            <a href="tel:+385958442806" className={styles.btnSecondary} style={{ minHeight: '40px', fontSize: '0.9rem', marginBottom: 0 }}>📞 Nazovi</a>
                            <a href="https://wa.me/385958442806" className={styles.btnSecondary} style={{ minHeight: '40px', fontSize: '0.9rem', marginBottom: 0 }}>📲 WhatsApp</a>
                        </div>
                    </div>
                )}

                <button
                    type="submit"
                    className={styles.btnPrimary}
                    disabled={status === 'submitting'}
                    style={{ marginTop: '1rem' }}
                >
                    {status === 'submitting' ? 'Šaljem prijavu...' : 'Prijavite grobno mjesto'}
                </button>
                <p className={styles.subtext}>Bez obveze. Kontaktiramo vas s potvrdom termina i uputama za predujam.</p>

                <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '1rem', lineHeight: 1.4 }}>
                    Slanjem prijave pristajete da vas kontaktiramo vezano uz uslugu. Vaše podatke ne koristimo za newsletter.
                </p>
            </form>
        </div>
    );
}
