'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, ArrowRight, ArrowLeft, Check, Sparkles, Trees, Sofa, Building, Car, PocketIcon as Pool } from 'lucide-react';
import Confetti from 'react-confetti';
import styles from './Contact.module.css';

const SERVICE_TYPES = [
    { id: 'yard', name: 'Čišćenje okućnice', description: 'Uređenje i pranje vanjskog prostora', icon: Trees },
    { id: 'carpet', name: 'Tepisi i garniture', description: 'Kemijsko čišćenje namještaja i tepiha', icon: Sofa },
    { id: 'facade', name: 'Čišćenje fasade', description: 'Visokotlačno pranje (prizemnice i kuće do 5m)', icon: Building },
    { id: 'pool', name: 'Pranje bazena', description: 'Temeljito čišćenje bazena pred sezonu', icon: Pool },
    { id: 'car', name: 'Pranje automobila', description: 'Vanjsko i dubinsko kemijsko čišćenje vozila', icon: Car },
];

const PRICE_FACTORS = {
    yard: { maintained: 2, average: 2.5, neglected: 3 },
    carpet: { rug: 5, sofa: 12 },
    facade: 5,
    pool: { small: 400, medium: 600, large: 800 },
    car: { exterior: 25, interior: 50, complete: 70 }
};

export default function Contact() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(25);
    const [showConfetti, setShowConfetti] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form data state
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        service: 'yard',

        // Yard
        yardSize: 50,
        yardCondition: 'average',

        // Carpet
        carpetType: 'sofa',
        carpetSize: 1, // Number of seats or m2

        // Facade
        facadeSize: 100,
        facadeFloors: '1',

        // Pool
        poolSize: 'medium',

        // Car
        carPackage: 'complete',

        message: ''
    });

    const updateForm = (field: string, value: string | number) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    // Calculate price as derived state
    let minPrice = 0;
    let maxPrice = 0;

    if (formData.service === 'yard') {
        const factor = PRICE_FACTORS.yard[formData.yardCondition as keyof typeof PRICE_FACTORS.yard] || 2.5;
        minPrice = formData.yardSize * factor;
        maxPrice = minPrice * 1.2;
    } else if (formData.service === 'carpet') {
        if (formData.carpetType === 'rug') {
            minPrice = formData.carpetSize * PRICE_FACTORS.carpet.rug;
        } else {
            minPrice = formData.carpetSize * PRICE_FACTORS.carpet.sofa;
        }
        maxPrice = minPrice * 1.2;
    } else if (formData.service === 'facade') {
        minPrice = formData.facadeSize * PRICE_FACTORS.facade;
        maxPrice = minPrice * 1.3;
    } else if (formData.service === 'pool') {
        minPrice = PRICE_FACTORS.pool[formData.poolSize as keyof typeof PRICE_FACTORS.pool];
        maxPrice = minPrice; // Fixed prices for pools generally
    } else if (formData.service === 'car') {
        minPrice = PRICE_FACTORS.car[formData.carPackage as keyof typeof PRICE_FACTORS.car];
        maxPrice = minPrice;
    }

    // Apply a safety floor
    if (minPrice < 15) { minPrice = 15; maxPrice = 20; }

    const estimatedPrice = { min: Math.round(minPrice), max: Math.round(maxPrice) };

    const handleNext = () => {
        // Simple validation
        if (step === 1 && (!formData.name || !formData.email || !formData.phone)) {
            alert('Molimo ispunite sva obavezna polja (Ime, Email, Telefon).');
            return;
        }

        const newStep = step + 1;
        setStep(newStep);
        setProgress(Math.min(100, (newStep / 4) * 100));
    };

    const handleBack = () => {
        const newStep = step - 1;
        setStep(newStep);
        setProgress(Math.max(25, (newStep / 4) * 100));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ formData, estimatedPrice }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            setStep(4);
            setProgress(100);
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 8000);
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Došlo je do greške prilikom slanja upita. Molimo pokušajte ponovno ili nas nazovite.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="kontakt" className={styles.contact}>
            {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

            <div className="container">
                <div className={styles.wrapper}>

                    {/* Left Info Column */}
                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.title}>Spremni za <span className={styles.yellow}>čišćenje</span>?</h2>
                        <p className={styles.text}>
                            Stvorili smo brz i jednostavan način da dobijete neobvezujuću informativnu procjenu cijene. Ispunite naš brzi obrazac i naš tim će vam se javiti s točnim detaljima i slobodnim terminima.
                        </p>

                        <div className={styles.contactDetails}>
                            <a href="tel:+385958442806" className={styles.detailItem}>
                                <div className={styles.iconCircle}><Phone size={24} /></div>
                                <div>
                                    <span className={styles.label}>Nazovite nas za hitne slučajeve</span>
                                    <span className={styles.value}>+385 95 844 2806</span>
                                </div>
                            </a>

                            <a href="mailto:info@slaufismrk.com" className={styles.detailItem}>
                                <div className={styles.iconCircle}><Mail size={24} /></div>
                                <div>
                                    <span className={styles.label}>Trebate specifičnu uslugu?</span>
                                    <span className={styles.value}>info@slaufismrk.com</span>
                                </div>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Form Wizard Column */}
                    <div className={styles.formWrapper}>
                        <div className={styles.progressContainer}>
                            <div className={styles.progressHeader}>
                                <span>Korak {Math.min(step, 3)} od 3</span>
                                <span>{progress}% dovršeno</span>
                            </div>
                            <div className={styles.progressBar}>
                                <div className={styles.progressFill} style={{ width: `${progress}%` }}></div>
                            </div>
                        </div>

                        <div className={styles.formBox}>
                            <AnimatePresence mode="wait">

                                {/* STEP 1: CONTACT INFO */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={styles.stepTitle}>Osobni podaci</h3>
                                        <p className={styles.stepDesc}>Recite nam tko ste kako bismo vas mogli kontaktirati s ponudom.</p>

                                        <div className={styles.formGrid}>
                                            <div className={styles.inputGroup}>
                                                <label>Ime i prezime *</label>
                                                <input
                                                    type="text"
                                                    className={styles.inputField}
                                                    placeholder="Vaše ime"
                                                    value={formData.name}
                                                    onChange={e => updateForm('name', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.inputGroup}>
                                                <label>Email adresa *</label>
                                                <input
                                                    type="email"
                                                    className={styles.inputField}
                                                    placeholder="vas@email.com"
                                                    value={formData.email}
                                                    onChange={e => updateForm('email', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.inputGroup}>
                                                <label>Broj telefona *</label>
                                                <input
                                                    type="tel"
                                                    className={styles.inputField}
                                                    placeholder="09X XXX XXXX"
                                                    value={formData.phone}
                                                    onChange={e => updateForm('phone', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.inputGroup}>
                                                <label>Mesto / Grad</label>
                                                <input
                                                    type="text"
                                                    className={styles.inputField}
                                                    placeholder="Npr. Zagreb, Karlovac..."
                                                    value={formData.city}
                                                    onChange={e => updateForm('city', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className={`${styles.btnGroup} ${styles.right}`}>
                                            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleNext}>
                                                Odabir usluge <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 2: SERVICE SELECTION */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={styles.stepTitle}>Koja usluga vam je potrebna?</h3>
                                        <p className={styles.stepDesc}>Odaberite primarnu uslugu za danas.</p>

                                        <div className={styles.servicesGrid}>
                                            {SERVICE_TYPES.map(service => {
                                                const Icon = service.icon;
                                                const isActive = formData.service === service.id;
                                                return (
                                                    <div
                                                        key={service.id}
                                                        className={`${styles.serviceCard} ${isActive ? styles.serviceCardActive : ''}`}
                                                        onClick={() => updateForm('service', service.id)}
                                                    >
                                                        <div className={styles.serviceIcon}>
                                                            <Icon size={24} />
                                                        </div>
                                                        <div>
                                                            <h4 className={styles.serviceName}>{service.name}</h4>
                                                            <p className={styles.serviceCardDesc}>{service.description}</p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        <div className={styles.btnGroup}>
                                            <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleBack}>
                                                <ArrowLeft size={20} /> Povratak
                                            </button>
                                            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleNext}>
                                                Detalji i procjena <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 3: SERVICE DETAILS & ESTIMATE */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={styles.stepTitle}>Konfigurirajte uslugu</h3>
                                        <p className={styles.stepDesc}>Unesite par detalja kako izračunali informativnu ponudu.</p>

                                        {/* YARD DETAILS */}
                                        {formData.service === 'yard' && (
                                            <div className={`${styles.formGrid} ${styles.full}`}>
                                                <div className={styles.inputGroup}>
                                                    <div className={styles.sliderLabel}>
                                                        <span>Okvirna površina okućnice</span>
                                                        <span className={styles.sliderValue}>{formData.yardSize} m²</span>
                                                    </div>
                                                    <input
                                                        type="range" min="10" max="500" step="10"
                                                        className={styles.rangeInput}
                                                        value={formData.yardSize}
                                                        onChange={e => updateForm('yardSize', Number(e.target.value))}
                                                    />
                                                </div>
                                                <div className={styles.inputGroup} style={{ marginTop: '1rem' }}>
                                                    <label>Trenutno stanje terena</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.yardCondition}
                                                        onChange={e => updateForm('yardCondition', e.target.value)}
                                                    >
                                                        <option value="maintained">Redovno održavano (samo lagano ispiranje)</option>
                                                        <option value="average">Srednje (nataložena zemlja/prašina)</option>
                                                        <option value="neglected">Zapušteno (tvrdokorna prljavština s algama)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        )}

                                        {/* CARPET DETAILS */}
                                        {formData.service === 'carpet' && (
                                            <div className={`${styles.formGrid} ${styles.full}`}>
                                                <div className={styles.inputGroup}>
                                                    <label>Što čistimo?</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.carpetType}
                                                        onChange={e => updateForm('carpetType', e.target.value)}
                                                    >
                                                        <option value="sofa">Kutna garnitura, trosjed, fotelje...</option>
                                                        <option value="rug">Klasični tepisi</option>
                                                    </select>
                                                </div>
                                                <div className={styles.inputGroup} style={{ marginTop: '1rem' }}>
                                                    <div className={styles.sliderLabel}>
                                                        <span>{formData.carpetType === 'sofa' ? 'Broj sjedećih mjesta' : 'Površina tepiha (m²)'}</span>
                                                        <span className={styles.sliderValue}>{formData.carpetSize} {formData.carpetType === 'sofa' ? 'mjesta' : 'm²'}</span>
                                                    </div>
                                                    <input
                                                        type="range" min="1" max={formData.carpetType === 'sofa' ? '12' : '30'} step="1"
                                                        className={styles.rangeInput}
                                                        value={formData.carpetSize}
                                                        onChange={e => updateForm('carpetSize', Number(e.target.value))}
                                                    />
                                                </div>
                                            </div>
                                        )}

                                        {/* FACADE DETAILS */}
                                        {formData.service === 'facade' && (
                                            <div className={`${styles.formGrid} ${styles.full}`}>
                                                <div className={styles.inputGroup}>
                                                    <div className={styles.sliderLabel}>
                                                        <span>Površina fasade koja se čisti</span>
                                                        <span className={styles.sliderValue}>{formData.facadeSize} m²</span>
                                                    </div>
                                                    <input
                                                        type="range" min="20" max="400" step="10"
                                                        className={styles.rangeInput}
                                                        value={formData.facadeSize}
                                                        onChange={e => updateForm('facadeSize', Number(e.target.value))}
                                                    />
                                                </div>
                                                <div className={styles.inputGroup} style={{ marginTop: '1rem' }}>
                                                    <label>Visina objekta</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.facadeFloors}
                                                        onChange={e => updateForm('facadeFloors', e.target.value)}
                                                    >
                                                        <option value="1">Samo prizemlje i niski dijelovi (do 3m)</option>
                                                        <option value="2">Prizemlje + jedan kat (do 5m visine)</option>
                                                        <option value="3" disabled>Veće od 5m (trenutno ne pokrivamo)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        )}

                                        {/* POOL DETAILS */}
                                        {formData.service === 'pool' && (
                                            <div className={`${styles.formGrid} ${styles.full}`}>
                                                <div className={styles.inputGroup}>
                                                    <label>Veličina bazena</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.poolSize}
                                                        onChange={e => updateForm('poolSize', e.target.value)}
                                                    >
                                                        <option value="small">Mali bazen (do 15m² vodene površine)</option>
                                                        <option value="medium">Srednji bazen (15 - 30m²)</option>
                                                        <option value="large">Veliki kompleksni bazeni (iznad 30m²)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        )}

                                        {/* CAR DETAILS */}
                                        {formData.service === 'car' && (
                                            <div className={`${styles.formGrid} ${styles.full}`}>
                                                <div className={styles.inputGroup}>
                                                    <label>Paket čišćenja automobila</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.carPackage}
                                                        onChange={e => updateForm('carPackage', e.target.value)}
                                                    >
                                                        <option value="exterior">Samo vanjsko temeljito pranje (od 25€)</option>
                                                        <option value="interior">Kemijsko čišćenje unutrašnjosti (od 50€)</option>
                                                        <option value="complete">Komplet: izvana + dubinsko unutra (od 70€)</option>
                                                    </select>
                                                </div>
                                            </div>
                                        )}

                                        {/* MESSAGE */}
                                        <div className={`${styles.inputGroup} ${styles.full}`} style={{ marginTop: '1rem' }}>
                                            <label>Dodatna poruka (neobavezno)</label>
                                            <textarea
                                                className={styles.inputField}
                                                rows={2}
                                                placeholder="Npr. Ima puno mrlja od ulja..."
                                                value={formData.message}
                                                onChange={e => updateForm('message', e.target.value)}
                                            ></textarea>
                                        </div>

                                        {/* PRICE ESTIMATE BOX */}
                                        <div className={styles.priceBox}>
                                            <h4 className={styles.priceTitle}>Informativna procijenjena cijena</h4>
                                            <div className={styles.priceAmount}>
                                                {estimatedPrice?.min === estimatedPrice?.max
                                                    ? `${estimatedPrice?.min} €`
                                                    : `${estimatedPrice?.min} - ${estimatedPrice?.max} €`}
                                            </div>
                                            <p className={styles.priceDisclaimer}>
                                                Prikazana cijena je okvirnog karaktera temeljena na prosječnim procjenama i može varirati naknadnim uvidom stanja uživo.
                                            </p>
                                        </div>

                                        <div className={styles.btnGroup}>
                                            <button className={`${styles.btn} ${styles.btnSecondary}`} onClick={handleBack}>
                                                <ArrowLeft size={20} /> Promijeni uslugu
                                            </button>
                                            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleSubmit} disabled={isSubmitting}>
                                                {isSubmitting ? 'Slanje...' : <><Sparkles size={20} /> Zatraži pravu ponudu</>}
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* STEP 4: SUCCESS */}
                                {step === 4 && (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className={styles.successStep}
                                    >
                                        <div className={styles.successIcon}>
                                            <Check size={40} />
                                        </div>
                                        <h3 className={styles.successTitle}>Upit uspješno poslan!</h3>
                                        <p className={styles.successText}>
                                            Hvala vam {formData.name}, primili smo vaš upit sa postavkama. Kontaktirat ćemo vas na {formData.phone} ili {formData.email} u najkraćem roku sa idućim koracima.
                                        </p>

                                        <button className={`${styles.btn} ${styles.btnSecondary}`} style={{ margin: '0 auto' }} onClick={() => {
                                            setStep(1); setProgress(25);
                                        }}>
                                            Pošalji novi upit
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

