'use client';

import { useState, useEffect } from 'react';
import styles from '../../LandingPage.module.css';

interface FormState {
    facilityType: string;
    surfaceArea: string;
    frequency: string;
    companyName: string;
    contactName: string;
    phone: string;
    city: string;
    notes: string;
    honeypot: string;
}

export default function LeadForm() {
    const [form, setForm] = useState<FormState>({
        facilityType: '',
        surfaceArea: '',
        frequency: '',
        companyName: '',
        contactName: '',
        phone: '',
        city: '',
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
            setValidationError('Unesite ispravan broj mobitela ili telefona.');
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
            `Tip objekta: ${form.facilityType || 'Nije navedeno'}`,
            `Površina: ${form.surfaceArea || 'Nije navedeno'}`,
            `Učestalost: ${form.frequency || 'Nije navedeno'}`,
            `Firma: ${form.companyName || 'Nije navedeno'}`,
            `Grad/lokacija: ${form.city || 'Nije navedeno'}`,
            `Napomene: ${form.notes || 'Nema'}`,
        ];

        const payload = {
            mode: 'final',
            formData: {
                name: form.contactName || form.companyName || 'N/A',
                email: 'lp-b2b@slaufismrk.com',
                phone: form.phone,
                city: form.city || 'N/A',
                service: 'b2b_commercial',
                message: messageParts.join(' | '),
                ...utmData,
                lead_type: 'Google Ads B2B landing page',
                landing_page: '/lp/poslovni-objekti',
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
                    service: 'B2B poslovni objekti',
                    landing_page: '/lp/poslovni-objekti',
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
            <div className={styles.formCard} id="ponuda">
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1rem' }}>
                        Zaprimili smo vaš upit.
                    </h3>
                    <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontWeight: 500 }}>
                        Javljamo se u najkraćem roku s okvirnom ponudom ili prijedlogom termina za procjenu na lokaciji.
                    </p>

                    <a
                        href="https://wa.me/385958442806?text=Bok%2C%20upravo%20sam%20poslao%2Fla%20B2B%20upit%20za%20čišćenje%20poslovnog%20objekta."
                        className={styles.btnPrimary}
                        onClick={() => {
                            // @ts-ignore
                            window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'success_state' });
                        }}
                    >
                        📲 Nastavite razgovor na WhatsApp
                    </a>

                    <a
                        href="tel:+385958442806"
                        className={styles.btnSecondary}
                        onClick={() => {
                            // @ts-ignore
                            window.dataLayer?.push({ event: 'call_click', cta_location: 'success_state' });
                        }}
                    >
                        📞 Nazovite odmah
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formCard} id="ponuda">
            <h2 className={styles.formTitle}>Zatražite ponudu za vaš objekt</h2>

            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Tip objekta</label>
                    <select
                        className={styles.select}
                        value={form.facilityType}
                        onChange={(e) => setForm({ ...form, facilityType: e.target.value })}
                    >
                        <option value="">— Odaberite tip —</option>
                        <option>Skladište / logistički centar</option>
                        <option>Uredska zgrada / poslovni park</option>
                        <option>Maloprodajni objekt / showroom</option>
                        <option>Industrijska hala</option>
                        <option>Hotel / ugostiteljski objekt</option>
                        <option>Stambena zgrada</option>
                        <option>Više lokacija</option>
                        <option>Ostalo</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Okvirna površina vanjskih površina (m²)</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="npr. 500 m² parkirište + 300 m² fasada"
                        value={form.surfaceArea}
                        onChange={(e) => setForm({ ...form, surfaceArea: e.target.value })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Željena učestalost čišćenja</label>
                    <select
                        className={styles.select}
                        value={form.frequency}
                        onChange={(e) => setForm({ ...form, frequency: e.target.value })}
                    >
                        <option value="">— Odaberite —</option>
                        <option>Jednokratno</option>
                        <option>2× godišnje</option>
                        <option>4× godišnje (sezonski)</option>
                        <option>Mjesečno</option>
                        <option>Po dogovoru</option>
                    </select>
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Naziv firme</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Naziv vaše tvrtke (opcionalno)"
                        value={form.companyName}
                        onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Kontakt osoba</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="Vaše ime (opcionalno)"
                        autoComplete="name"
                        value={form.contactName}
                        onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Telefon / mobitel *</label>
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
                    <label className={styles.label}>Lokacija objekta</label>
                    <input
                        type="text"
                        className={styles.input}
                        placeholder="npr. Jankomir, Žitnjak, Sesvete..."
                        autoComplete="address-level2"
                        value={form.city}
                        onChange={(e) => setForm({ ...form, city: e.target.value })}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Napomene</label>
                    <textarea
                        className={styles.input}
                        rows={3}
                        placeholder="Opišite što trebate očistiti, posebne zahtjeve, preferirani termin..."
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
                    {status === 'submitting' ? 'Šaljem upit...' : 'Pošalji upit — javimo se'}
                </button>
                <p className={styles.subtext}>Javljamo se s okvirnom ponudom ili prijedlogom za procjenu na lokaciji.</p>

                <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '1rem', lineHeight: 1.4 }}>
                    Slanjem upita pristajete da vas kontaktiramo vezano uz ponudu. Vaše podatke ne koristimo za newsletter.
                </p>
            </form>
        </div>
    );
}
