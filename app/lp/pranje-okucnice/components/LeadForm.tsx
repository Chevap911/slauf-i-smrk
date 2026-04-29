'use client';

import { useState, useEffect } from 'react';
import styles from '../../LandingPage.module.css';

interface FormState {
    facadeType: string;
    area: string;
    unknownArea: boolean;
    name: string;
    phone: string;
    city: string;
    hasPhotos: boolean;
    honeypot: string;
}

export default function LeadForm() {
    const [form, setForm] = useState<FormState>({
        facadeType: 'Ne znam / nisam siguran',
        area: '',
        unknownArea: false,
        name: '',
        phone: '',
        city: '',
        hasPhotos: false,
        honeypot: '',
    });

    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [priceRange, setPriceRange] = useState<{ min: number; max: number } | null>(null);
    const [validationError, setValidationError] = useState<string>('');

    // Load UTM params
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const paramsToSave = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'gbraid', 'wbraid'];
        
        let hasNewParams = false;
        paramsToSave.forEach(param => {
            if (urlParams.has(param)) {
                sessionStorage.setItem(param, urlParams.get(param)!);
                hasNewParams = true;
            }
        });
    }, []);

    // Price calculation
    useEffect(() => {
        if (form.unknownArea || !form.area || isNaN(Number(form.area)) || Number(form.area) <= 0) {
            setPriceRange(null);
            return;
        }

        const area = Number(form.area);
        let minRate = 2;
        let maxRate = 4;

        switch (form.facadeType) {
            case 'Tlakavci':
                minRate = 2; maxRate = 4; break;
            case 'Beton / Asfalt':
                minRate = 2; maxRate = 3; break;
            case 'Kamene ploče':
                minRate = 3; maxRate = 5; break;
            case 'Cijela okućnica':
                minRate = 2; maxRate = 4; break;
            default:
                minRate = 2; maxRate = 4; break;
        }

        setPriceRange({
            min: area * minRate,
            max: area * maxRate,
        });
    }, [form.area, form.facadeType, form.unknownArea]);

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
        
        if (form.honeypot) return; // Basic spam protection
        
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
            `Vrsta podloge: ${form.facadeType}`,
            `Površina: ${form.unknownArea ? 'Nepoznato' : `${form.area} m²`}`,
            `Ima slike: ${form.hasPhotos ? 'Da' : 'Ne'}`
        ];

        const payload = {
            mode: 'final',
            formData: {
                name: form.name || 'N/A',
                email: 'lp-upit@slaufismrk.com', // Dummy for backend requirement if needed
                phone: form.phone,
                city: form.city || 'N/A',
                service: 'yard',
                message: messageParts.join(' | '),
                ...utmData,
                lead_type: "Google Ads landing page",
                landing_page: "/lp/pranje-okucnice",
                timestamp: new Date().toISOString()
            },
            estimatedPrice: priceRange,
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
                    event: "lead_form_submit",
                    event_category: "google_ads_landing_page",
                    service: "Pranje fasade",
                    landing_page: "/lp/pranje-fasade",
                    cta_location: "form"
                });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className={styles.formCard} id="procjena">
                <div style={{ textAlign: 'center', padding: '1rem 0' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1rem' }}>
                        Hvala! Zaprimili smo upit.
                    </h3>
                    <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontWeight: 500 }}>
                        Javit ćemo vam se u najkraćem roku.
                    </p>
                    <div style={{ background: 'var(--surface)', padding: '1rem', borderRadius: '0.5rem', marginBottom: '1.5rem' }}>
                        <p style={{ fontSize: '0.9rem', color: '#374151', fontWeight: 600 }}>
                            Ako imate slike fasade, pošaljite ih odmah na WhatsApp kako bismo vam brže dali točniju procjenu.
                        </p>
                    </div>
                    
                    <a 
                        href={`https://wa.me/385958442806?text=Bok%2C%20poslao%2Fsla%20sam%20upit%20za%20pranje%20okucnice.%20Šaljem%20slike.`}
                        className={styles.btnPrimary}
                        onClick={() => {
                            // @ts-ignore
                            window.dataLayer?.push({ event: "whatsapp_click", cta_location: "success_state" });
                        }}
                    >
                        📲 Pošalji slike na WhatsApp
                    </a>
                    
                    <a 
                        href="tel:+385958442806"
                        className={styles.btnSecondary}
                        onClick={() => {
                            // @ts-ignore
                            window.dataLayer?.push({ event: "call_click", cta_location: "success_state" });
                        }}
                    >
                        📞 Nazovi odmah
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.formCard} id="procjena">
            <h2 className={styles.formTitle}>Zatražite brzu procjenu</h2>
            
            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label className={styles.label}>Vrsta podloge</label>
                    <select 
                        className={styles.select}
                        value={form.facadeType}
                        onChange={(e) => setForm({...form, facadeType: e.target.value})}
                    >
                        <option>Ne znam / nisam siguran</option>
                        <option>Tlakavci</option>
                        <option>Beton / Asfalt</option>
                        <option>Kamene ploče</option>
                        <option>Cijela okućnica</option>
                    </select>
                </div>

                {!form.unknownArea && (
                    <div className={styles.inputGroup}>
                        <label className={styles.label}>Okvirna površina podloge (m²)</label>
                        <input 
                            type="number"
                            className={styles.input}
                            placeholder="npr. 150"
                            value={form.area}
                            onChange={(e) => setForm({...form, area: e.target.value})}
                        />
                    </div>
                )}

                <div className={styles.inputGroup}>
                    <label className={styles.checkboxGroup}>
                        <input 
                            type="checkbox" 
                            className={styles.checkbox}
                            checked={form.unknownArea}
                            onChange={(e) => setForm({...form, unknownArea: e.target.checked})}
                        />
                        <span className={styles.checkboxLabel}>Ne znam točnu površinu</span>
                    </label>
                    {form.unknownArea && (
                        <p style={{ fontSize: '0.85rem', color: '#4b5563', marginTop: '0.5rem', background: '#f3f4f6', padding: '0.5rem', borderRadius: '0.25rem' }}>
                            Nema problema, procijenit ćemo prema slikama i lokaciji.
                        </p>
                    )}
                </div>

                {priceRange && (
                    <div className={styles.priceEstimate}>
                        <div className={styles.priceValue}>Okvirni raspon: {priceRange.min} – {priceRange.max} €</div>
                        <div className={styles.priceNote}>Konačna cijena ovisi o stanju podloge, stupnju zaprljanosti i pristupu.</div>
                    </div>
                )}

                <div className={styles.inputGroup}>
                    <label className={styles.label}>Ime</label>
                    <input 
                        type="text"
                        className={styles.input}
                        placeholder="Vaše ime (opcionalno)"
                        autoComplete="name"
                        value={form.name}
                        onChange={(e) => setForm({...form, name: e.target.value})}
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
                    <label className={styles.label}>Kvart ili grad</label>
                    <input 
                        type="text"
                        className={styles.input}
                        placeholder="npr. Zagreb, Trešnjevka (opcionalno)"
                        autoComplete="address-level2"
                        value={form.city}
                        onChange={(e) => setForm({...form, city: e.target.value})}
                    />
                </div>

                <div className={styles.inputGroup}>
                    <label className={styles.checkboxGroup}>
                        <input 
                            type="checkbox" 
                            className={styles.checkbox}
                            checked={form.hasPhotos}
                            onChange={(e) => setForm({...form, hasPhotos: e.target.checked})}
                        />
                        <span className={styles.checkboxLabel}>Imam slike okućnice i mogu ih poslati na WhatsApp</span>
                    </label>
                    <p style={{ fontSize: '0.8rem', color: '#6b7280', marginTop: '0.25rem', marginLeft: '2rem' }}>
                        Najbržu procjenu dobivate ako nam pošaljete 2–3 slike dvorišta na WhatsApp.
                    </p>
                </div>

                {/* Honeypot */}
                <input 
                    type="text" 
                    style={{ display: 'none' }} 
                    tabIndex={-1} 
                    autoComplete="off"
                    value={form.honeypot}
                    onChange={(e) => setForm({...form, honeypot: e.target.value})}
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
                    {status === 'submitting' ? 'Šaljem upit...' : 'Pošalji upit, javimo se'}
                </button>
                <p className={styles.subtext}>Bez obveze. Javljamo se s okvirnom procjenom.</p>
                
                <p style={{ fontSize: '0.75rem', color: '#9ca3af', textAlign: 'center', marginTop: '1rem', lineHeight: 1.4 }}>
                    Slanjem upita pristajete da vas kontaktiramo vezano uz procjenu. Vaše podatke ne koristimo za newsletter.
                </p>
            </form>
        </div>
    );
}
