'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Phone,
    Mail,
    ArrowRight,
    ArrowLeft,
    Check,
    Sparkles,
    Trees,
    Sofa,
    Building,
    Car,
    Droplets,
    Waves,
    CarFront,
    TreeDeciduous,
    HeartHandshake,
    Home
} from 'lucide-react';
import Confetti from 'react-confetti';
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
import styles from './Contact.module.css';

type ServiceId =
    | 'facade'
    | 'yard'
    | 'terrace'
    | 'pavers'
    | 'driveway'
    | 'stone'
    | 'wood'
    | 'chemical'
    | 'car'
    | 'pool'
    | 'grave';

interface FormState {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    service: ServiceId | '';
    surfaceSize: string;
    facadeHeight: string;
    chemicalType: string;
    chemicalQuantity: string;
    poolSize: string;
    carPackage: string;
    graveScope: string;
    additionalServices: ServiceId[];
    additionalServiceConfigs: Partial<Record<ServiceId, {
        size?: string;
        option?: string;
        quantity?: string;
        note?: string;
    }>>;
    marketingConsent: boolean;
    message: string;
}

const SERVICE_TYPES: { id: ServiceId; name: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { id: 'facade', name: 'Pranje fasade', icon: Building },
    { id: 'yard', name: 'Pranje okućnice', icon: Trees },
    { id: 'terrace', name: 'Pranje terasa', icon: Waves },
    { id: 'pavers', name: 'Pranje tlakavaca', icon: Home },
    { id: 'driveway', name: 'Pranje prilaza', icon: CarFront },
    { id: 'stone', name: 'Kamene površine', icon: TreeDeciduous },
    { id: 'wood', name: 'Drvene površine', icon: TreeDeciduous },
    { id: 'chemical', name: 'Kemijsko čišćenje', icon: Sofa },
    { id: 'car', name: 'Detailing automobila', icon: Car },
    { id: 'pool', name: 'Pranje bazena', icon: Droplets },
    { id: 'grave', name: 'Grobna mjesta', icon: HeartHandshake },
];

const SURFACE_SERVICE_RATES: Record<
    Exclude<ServiceId, 'chemical' | 'car' | 'pool' | 'grave'>,
    { min: number; max: number }
> = {
    facade: { min: 4, max: 6 },
    yard: { min: 2, max: 4 },
    terrace: { min: 3, max: 5 },
    pavers: { min: 2, max: 4 },
    driveway: { min: 2, max: 4 },
    stone: { min: 4, max: 6 },
    wood: { min: 5, max: 8 },
};

const CHEMICAL_TYPE_OPTIONS = [
    { value: 'rug', label: 'Tepih', min: 5, max: 6, unit: 'm²' },
    { value: 'trosjed', label: 'Trosjed', min: 40, max: 55, unit: 'kom' },
    { value: 'dvosjed', label: 'Dvosjed', min: 30, max: 40, unit: 'kom' },
    { value: 'fotelja', label: 'Fotelja', min: 20, max: 30, unit: 'kom' },
    { value: 'set', label: 'Kompletna garnitura (3+2+1)', min: 80, max: 110, unit: 'kom' },
    { value: 'mattress-single', label: 'Madrac jednostruki', min: 30, max: 40, unit: 'kom' },
    { value: 'mattress-double', label: 'Madrac bračni', min: 40, max: 55, unit: 'kom' },
    { value: 'car-seats', label: 'Autosjedala', min: 60, max: 90, unit: 'kom' },
];

const CAR_PACKAGE_OPTIONS = [
    { value: 'interior-basic', label: 'Interijer basic', min: 80, max: 100 },
    { value: 'interior-full', label: 'Interijer full', min: 120, max: 150 },
    { value: 'exterior', label: 'Eksterijer', min: 60, max: 80 },
    { value: 'complete', label: 'Kompletni detailing', min: 150, max: 220 },
];

const POOL_OPTIONS = [
    { value: 'standard', label: 'Standardni bazen', min: 600, max: 700 },
    { value: 'large', label: 'Veći bazen ili veći obod', min: 800, max: 1000 },
    { value: 'complex', label: 'Zahtjevniji bazen i kompletan okoliš', min: 1000, max: 1400 },
];

const GRAVE_OPTIONS = [
    { value: 'basic', label: 'Osnovno čišćenje i uređenje', min: 100, max: 130 },
    { value: 'extended', label: 'Detaljnije čišćenje i više posla', min: 140, max: 180 },
    { value: 'regular', label: 'Opsežnije ili redovno održavanje', min: 180, max: 250 },
];

const createInitialFormData = (): FormState => ({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    service: '',
    surfaceSize: '',
    facadeHeight: '5',
    chemicalType: 'rug',
    chemicalQuantity: '1',
    poolSize: 'standard',
    carPackage: 'complete',
    graveScope: 'basic',
    additionalServices: [],
    additionalServiceConfigs: {},
    marketingConsent: false,
    message: '',
});

const parseNumber = (value: string) => {
    const normalized = value.replace(',', '.').trim();
    const parsed = Number(normalized);
    return Number.isFinite(parsed) ? parsed : 0;
};

const roundPrice = (value: number) => Math.round(value);
const ADD_ON_DISCOUNT = 0.9;

const formatPriceRange = (min: number, max: number) => {
    if (min <= 0 && max <= 0) {
        return 'Unesite podatke za procjenu';
    }

    if (min === max) {
        return `${min} €`;
    }

    return `${min} - ${max} €`;
};

const serviceNeedsSurfaceSize = (service: ServiceId | '') =>
    service === 'facade' ||
    service === 'yard' ||
    service === 'terrace' ||
    service === 'pavers' ||
    service === 'driveway' ||
    service === 'stone' ||
    service === 'wood';

const getEstimatedPrice = (formData: FormState) => {
    if (!formData.service) {
        return { min: 0, max: 0 };
    }

    if (serviceNeedsSurfaceSize(formData.service)) {
        const area = parseNumber(formData.surfaceSize);
        if (area <= 0) {
            return { min: 0, max: 0 };
        }

        const rate = SURFACE_SERVICE_RATES[formData.service];

        return {
            min: roundPrice(area * rate.min),
            max: roundPrice(area * rate.max),
        };
    }

    if (formData.service === 'chemical') {
        const selectedType = CHEMICAL_TYPE_OPTIONS.find((option) => option.value === formData.chemicalType);
        const quantity = Math.max(1, parseNumber(formData.chemicalQuantity) || 1);

        if (!selectedType) {
            return { min: 0, max: 0 };
        }

        return {
            min: roundPrice(selectedType.min * quantity),
            max: roundPrice(selectedType.max * quantity),
        };
    }

    if (formData.service === 'car') {
        const selectedPackage = CAR_PACKAGE_OPTIONS.find((option) => option.value === formData.carPackage);
        return selectedPackage
            ? { min: selectedPackage.min, max: selectedPackage.max }
            : { min: 0, max: 0 };
    }

    if (formData.service === 'pool') {
        const selectedPool = POOL_OPTIONS.find((option) => option.value === formData.poolSize);
        return selectedPool ? { min: selectedPool.min, max: selectedPool.max } : { min: 0, max: 0 };
    }

    if (formData.service === 'grave') {
        const selectedScope = GRAVE_OPTIONS.find((option) => option.value === formData.graveScope);
        return selectedScope ? { min: selectedScope.min, max: selectedScope.max } : { min: 0, max: 0 };
    }

    return { min: 0, max: 0 };
};

const getAddOnEstimate = (
    serviceId: ServiceId,
    config?: { size?: string; option?: string; quantity?: string; note?: string }
) => {
    if (!config) {
        return { min: 0, max: 0 };
    }

    if (serviceNeedsSurfaceSize(serviceId)) {
        const area = parseNumber(config.size || '');
        if (area <= 0) {
            return { min: 0, max: 0 };
        }

        const rate = SURFACE_SERVICE_RATES[serviceId];
        return {
            min: roundPrice(area * rate.min * ADD_ON_DISCOUNT),
            max: roundPrice(area * rate.max * ADD_ON_DISCOUNT),
        };
    }

    if (serviceId === 'chemical') {
        const selectedType = CHEMICAL_TYPE_OPTIONS.find((option) => option.value === config.option);
        const quantity = Math.max(1, parseNumber(config.quantity || '') || 1);

        if (!selectedType) {
            return { min: 0, max: 0 };
        }

        return {
            min: roundPrice(selectedType.min * quantity * ADD_ON_DISCOUNT),
            max: roundPrice(selectedType.max * quantity * ADD_ON_DISCOUNT),
        };
    }

    if (serviceId === 'car') {
        const selectedPackage = CAR_PACKAGE_OPTIONS.find((option) => option.value === config.option);
        return selectedPackage
            ? {
                min: roundPrice(selectedPackage.min * ADD_ON_DISCOUNT),
                max: roundPrice(selectedPackage.max * ADD_ON_DISCOUNT),
            }
            : { min: 0, max: 0 };
    }

    if (serviceId === 'pool') {
        const selectedPool = POOL_OPTIONS.find((option) => option.value === config.option);
        return selectedPool
            ? {
                min: roundPrice(selectedPool.min * ADD_ON_DISCOUNT),
                max: roundPrice(selectedPool.max * ADD_ON_DISCOUNT),
            }
            : { min: 0, max: 0 };
    }

    return { min: 0, max: 0 };
};

const getTotalEstimate = (formData: FormState) =>
    formData.additionalServices.reduce(
        (acc, serviceId) => {
            const addOnEstimate = getAddOnEstimate(serviceId, formData.additionalServiceConfigs[serviceId]);
            return {
                min: acc.min + addOnEstimate.min,
                max: acc.max + addOnEstimate.max,
            };
        },
        getEstimatedPrice(formData)
    );

const getServiceValidationError = (formData: FormState) => {
    if (!formData.service) {
        return 'Odaberite uslugu kako bismo mogli izračunati procjenu.';
    }

    if (serviceNeedsSurfaceSize(formData.service) && parseNumber(formData.surfaceSize) <= 0) {
        return 'Upišite okvirnu kvadraturu kako bismo mogli izračunati procjenu.';
    }

    if (formData.service === 'facade') {
        const height = parseNumber(formData.facadeHeight);
        if (height <= 0 || height > 20) {
            return 'Upišite visinu fasade između 1 i 20 m.';
        }
    }

    if (formData.service === 'chemical' && parseNumber(formData.chemicalQuantity) <= 0) {
        return 'Upišite količinu ili kvadraturu za kemijsko čišćenje.';
    }

    const missingAdditionalDetails = formData.additionalServices.find((serviceId) => {
        const config = formData.additionalServiceConfigs[serviceId];

        if (!config) {
            return true;
        }

        if (serviceNeedsSurfaceSize(serviceId)) {
            return parseNumber(config.size || '') <= 0;
        }

        if (serviceId === 'chemical') {
            return !config.option || parseNumber(config.quantity || '') <= 0;
        }

        if (serviceId === 'car' || serviceId === 'pool') {
            return !config.option;
        }

        return false;
    });

    if (missingAdditionalDetails) {
        return 'Za svaku dodatnu uslugu upišite potrebne podatke kako bismo mogli izračunati ukupnu procjenu.';
    }

    return null;
};

const getAdditionalServiceOptions = (primaryService: ServiceId | '') =>
    SERVICE_TYPES.filter((service) => service.id !== 'grave' && service.id !== primaryService);

export default function Contact() {
    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(25);
    const [showConfetti, setShowConfetti] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [leadId, setLeadId] = useState<string | null>(null);
    const [formData, setFormData] = useState<FormState>(createInitialFormData);

    const updateForm = <K extends keyof FormState>(field: K, value: FormState[K]) => {
        setFormData((prev) => ({ ...prev, [field]: value }));
    };

    const toggleAdditionalService = (serviceId: ServiceId) => {
        setFormData((prev) => {
            const isSelected = prev.additionalServices.includes(serviceId);

            if (isSelected) {
                const nextDetails = { ...prev.additionalServiceConfigs };
                delete nextDetails[serviceId];

                return {
                    ...prev,
                    additionalServices: prev.additionalServices.filter((id) => id !== serviceId),
                    additionalServiceConfigs: nextDetails,
                };
            }

            return {
                ...prev,
                additionalServices: [...prev.additionalServices, serviceId],
                additionalServiceConfigs: {
                    ...prev.additionalServiceConfigs,
                    [serviceId]: serviceNeedsSurfaceSize(serviceId)
                        ? { size: '' }
                        : serviceId === 'chemical'
                            ? { option: 'rug', quantity: '1', note: '' }
                            : serviceId === 'car'
                                ? { option: 'complete', note: '' }
                                : serviceId === 'pool'
                                    ? { option: 'standard', note: '' }
                                    : { note: '' },
                },
            };
        });
    };

    const updateAdditionalServiceConfig = (
        serviceId: ServiceId,
        field: 'size' | 'option' | 'quantity' | 'note',
        value: string
    ) => {
        setFormData((prev) => ({
            ...prev,
            additionalServiceConfigs: {
                ...prev.additionalServiceConfigs,
                [serviceId]: {
                    ...prev.additionalServiceConfigs[serviceId],
                    [field]: value,
                },
            },
        }));
    };

    const setPrimaryService = (serviceId: ServiceId) => {
        setFormData((prev) => {
            const nextAdditionalServices = prev.additionalServices.filter((id) => id !== serviceId);
            const nextDetails = { ...prev.additionalServiceConfigs };
            delete nextDetails[serviceId];

            return {
                ...prev,
                service: serviceId,
                additionalServices: nextAdditionalServices,
                additionalServiceConfigs: nextDetails,
            };
        });
    };

    const estimatedPrice = getTotalEstimate(formData);

    const savePartialLead = async () => {
        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                mode: 'partial',
                leadId,
                formData,
                estimatedPrice,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to save partial lead');
        }

        const data = await response.json();
        if (data?.leadId) {
            setLeadId(data.leadId);
        }
    };

    const handleNext = async () => {
        if (step === 1 && (!formData.name || !formData.email || !formData.phone || !formData.city)) {
            alert('Molimo ispunite sva obavezna polja: ime, email, telefon i grad.');
            return;
        }

        if (step === 1) {
            try {
                await savePartialLead();
            } catch (error) {
                console.error('Partial lead save failed:', error);
            }
        }

        if (step === 2 && !formData.service) {
            alert('Odaberite uslugu prije nastavka.');
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

    const resetForm = () => {
        setStep(1);
        setProgress(25);
        setLeadId(null);
        setFormData(createInitialFormData());
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const validationError = getServiceValidationError(formData);
        if (validationError) {
            alert(validationError);
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    mode: 'final',
                    leadId,
                    formData,
                    estimatedPrice,
                }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit form');
            }

            // GTM Konverzija - Data Layer Push
            if (typeof window !== 'undefined') {
                (window as any).dataLayer = (window as any).dataLayer || [];
                (window as any).dataLayer.push({
                    event: 'form_submit',
                    form_name: 'Glavna kontakt forma',
                    service_type: formData.service,
                    estimated_value: estimatedPrice?.min || 0,
                    currency: 'EUR'
                });
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

    const chemicalType = CHEMICAL_TYPE_OPTIONS.find((option) => option.value === formData.chemicalType);
    const additionalServiceOptions = getAdditionalServiceOptions(formData.service);

    return (
        <section id="kontakt" className={styles.contact}>
            {showConfetti && <Confetti recycle={false} numberOfPieces={300} />}

            <div className="container">
                <div className={styles.wrapper}>

                    <motion.div
                        className={styles.info}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className={styles.title}>Spremni za <span className={styles.yellow}>čišćenje</span>?</h2>
                        <p className={styles.text}>
                            Ispunite brzi obrazac i dobit ćete informativnu procjenu cijene. Čim prijeđete prvi korak,
                            spremamo osnovne podatke vašeg upita kako bismo vas mogli lakše kontaktirati i nastaviti ponudu.
                        </p>

                        <div className={styles.contactDetails}>
                            <a href="tel:+385958442806" className={styles.detailItem}>
                                <div className={styles.iconCircle}><Phone size={24} /></div>
                                <div>
                                    <span className={styles.label}>Nazovite nas za hitne slučajeve</span>
                                    <span className={styles.value}>+385 95 844 2806</span>
                                </div>
                            </a>

                            <a href="mailto:slauf.i.smrk@gmail.com" className={styles.detailItem}>
                                <div className={styles.iconCircle}><Mail size={24} /></div>
                                <div>
                                    <span className={styles.label}>Trebate specifičnu uslugu?</span>
                                    <span className={styles.value}>slauf.i.smrk@gmail.com</span>
                                </div>
                            </a>
                        </div>

                        <HomepageMascot
                            src={homepageMascots.contact.src}
                            alt={homepageMascots.contact.alt}
                            className={styles.contactMascot}
                        />
                    </motion.div>

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
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={styles.stepTitle}>Osobni podaci</h3>
                                        <p className={styles.stepDesc}>Upišite kontakt kako bismo vam mogli poslati ponudu i slobodne termine.</p>

                                        <div className={styles.formGrid}>
                                            <div className={styles.inputGroup}>
                                                <label>Ime i prezime *</label>
                                                <input
                                                    type="text"
                                                    className={styles.inputField}
                                                    placeholder="Vaše ime i prezime"
                                                    value={formData.name}
                                                    onChange={(e) => updateForm('name', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.inputGroup}>
                                                <label>Email adresa *</label>
                                                <input
                                                    type="email"
                                                    className={styles.inputField}
                                                    placeholder="vas@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => updateForm('email', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.inputGroup}>
                                                <label>Broj telefona *</label>
                                                <input
                                                    type="tel"
                                                    className={styles.inputField}
                                                    placeholder="09X XXX XXXX"
                                                    value={formData.phone}
                                                    onChange={(e) => updateForm('phone', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.inputGroup}>
                                                <label>Mjesto / Grad *</label>
                                                <input
                                                    type="text"
                                                    className={styles.inputField}
                                                    placeholder="Npr. Zagreb"
                                                    value={formData.city}
                                                    onChange={(e) => updateForm('city', e.target.value)}
                                                />
                                            </div>
                                            <div className={styles.inputGroup}>
                                                <label>Adresa</label>
                                                <input
                                                    type="text"
                                                    className={styles.inputField}
                                                    placeholder="Ulica i kućni broj"
                                                    value={formData.address}
                                                    onChange={(e) => updateForm('address', e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className={styles.consentBox}>
                                            <label className={styles.consentRow}>
                                                <input
                                                    type="checkbox"
                                                    checked={formData.marketingConsent}
                                                    onChange={(e) => updateForm('marketingConsent', e.target.checked)}
                                                />
                                                <span>Želim povremeno primati korisne ponude i obavijesti emailom.</span>
                                            </label>
                                            <p className={styles.helperText}>
                                                Ova privola je odvojena od samog upita. Osnovne podatke spremamo kad prijeđete na sljedeći korak kako vaš upit ne bi propao ako prekinete ispunjavanje.
                                            </p>
                                        </div>

                                        <div className={`${styles.btnGroup} ${styles.right}`}>
                                            <button className={`${styles.btn} ${styles.btnPrimary}`} onClick={handleNext}>
                                                Odabir usluge <ArrowRight size={20} />
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={styles.stepTitle}>Odabir usluge</h3>
                                        <p className={styles.stepDesc}>Odaberite uslugu za koju želite procjenu.</p>

                                        <div className={styles.servicesGrid}>
                                            {SERVICE_TYPES.map((service) => {
                                                const Icon = service.icon;
                                                const isActive = formData.service === service.id;

                                                return (
                                                    <button
                                                        key={service.id}
                                                        type="button"
                                                        className={`${styles.serviceCard} ${isActive ? styles.serviceCardActive : ''}`}
                                                        onClick={() => setPrimaryService(service.id)}
                                                    >
                                                        <div className={styles.serviceIcon}>
                                                            <Icon size={24} />
                                                        </div>
                                                        <span className={styles.serviceName}>{service.name}</span>
                                                    </button>
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

                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className={styles.stepTitle}>Detalji usluge</h3>
                                        <p className={styles.stepDesc}>Unesite osnovne podatke kako bismo složili informativnu procjenu.</p>

                                        {serviceNeedsSurfaceSize(formData.service) && (
                                            <div className={styles.formGrid}>
                                                <div className={styles.inputGroup}>
                                                    <label>Okvirna kvadratura (m²) *</label>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        inputMode="decimal"
                                                        className={styles.inputField}
                                                        placeholder="Npr. 120"
                                                        value={formData.surfaceSize}
                                                        onChange={(e) => updateForm('surfaceSize', e.target.value)}
                                                    />
                                                    <p className={styles.helperText}>Upišite procijenjenu površinu koju treba oprati.</p>
                                                </div>

                                                {formData.service === 'facade' && (
                                                    <div className={styles.inputGroup}>
                                                        <label>Visina fasade (m) *</label>
                                                        <input
                                                            type="number"
                                                            min="1"
                                                            max="20"
                                                            inputMode="decimal"
                                                            className={styles.inputField}
                                                            placeholder="Npr. 8"
                                                            value={formData.facadeHeight}
                                                            onChange={(e) => updateForm('facadeHeight', e.target.value)}
                                                        />
                                                        <p className={styles.helperText}>Radimo fasade do 20 m visine.</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {formData.service === 'chemical' && (
                                            <div className={styles.formGrid}>
                                                <div className={styles.inputGroup}>
                                                    <label>Što čistimo?</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.chemicalType}
                                                        onChange={(e) => updateForm('chemicalType', e.target.value)}
                                                    >
                                                        {CHEMICAL_TYPE_OPTIONS.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                                <div className={styles.inputGroup}>
                                                    <label>
                                                        {chemicalType?.unit === 'm²' ? 'Kvadratura (m²) *' : 'Količina *'}
                                                    </label>
                                                    <input
                                                        type="number"
                                                        min="1"
                                                        inputMode="decimal"
                                                        className={styles.inputField}
                                                        placeholder={chemicalType?.unit === 'm²' ? 'Npr. 12' : 'Npr. 1'}
                                                        value={formData.chemicalQuantity}
                                                        onChange={(e) => updateForm('chemicalQuantity', e.target.value)}
                                                    />
                                                    <p className={styles.helperText}>
                                                        {chemicalType?.unit === 'm²'
                                                            ? 'Za tepihe upišite približnu kvadraturu.'
                                                            : 'Za komadne stavke upišite broj komada.'}
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {formData.service === 'car' && (
                                            <div className={styles.formGrid}>
                                                <div className={styles.inputGroup}>
                                                    <label>Paket detailinga</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.carPackage}
                                                        onChange={(e) => updateForm('carPackage', e.target.value)}
                                                    >
                                                        {CAR_PACKAGE_OPTIONS.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <p className={styles.helperText}>
                                                        Cijena je informativna. Vozila veće vrijednosti i zahtjevniji zahvati procjenjuju se individualno zbog rizika i osiguranja.
                                                    </p>
                                                </div>
                                            </div>
                                        )}

                                        {formData.service === 'pool' && (
                                            <div className={styles.formGrid}>
                                                <div className={styles.inputGroup}>
                                                    <label>Vrsta zahvata</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.poolSize}
                                                        onChange={(e) => updateForm('poolSize', e.target.value)}
                                                    >
                                                        {POOL_OPTIONS.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        )}

                                        {formData.service === 'grave' && (
                                            <div className={styles.formGrid}>
                                                <div className={styles.inputGroup}>
                                                    <label>Opseg održavanja</label>
                                                    <select
                                                        className={styles.selectField}
                                                        value={formData.graveScope}
                                                        onChange={(e) => updateForm('graveScope', e.target.value)}
                                                    >
                                                        {GRAVE_OPTIONS.map((option) => (
                                                            <option key={option.value} value={option.value}>
                                                                {option.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        )}

                                        <div className={`${styles.inputGroup} ${styles.full}`}>
                                            <label>Dodatna poruka</label>
                                            <textarea
                                                className={styles.inputField}
                                                rows={3}
                                                placeholder="Npr. pristup je otežan, postoje masne mrlje, treba hitan termin..."
                                                value={formData.message}
                                                onChange={(e) => updateForm('message', e.target.value)}
                                            ></textarea>
                                        </div>

                                        {formData.service !== 'grave' && additionalServiceOptions.length > 0 && (
                                            <div className={styles.addOnSection}>
                                                <div className={styles.addOnHeader}>
                                                    <h4>Dodajte još uz isti dolazak</h4>
                                                    <p>Odaberite dodatne usluge koje želite spojiti s ovim dolaskom. Za svaku označenu stavku upišite kratki detalj ili okvirnu kvadraturu.</p>
                                                </div>

                                                <div className={styles.addOnGrid}>
                                                    {additionalServiceOptions.map((service) => {
                                                        const Icon = service.icon;
                                                        const isSelected = formData.additionalServices.includes(service.id);
                                                        const addOnConfig = formData.additionalServiceConfigs[service.id];

                                                        return (
                                                            <div key={service.id} className={styles.addOnCardWrap}>
                                                                <button
                                                                    type="button"
                                                                    className={`${styles.serviceCard} ${isSelected ? styles.serviceCardActive : ''}`}
                                                                    onClick={() => toggleAdditionalService(service.id)}
                                                                >
                                                                    <div className={styles.serviceIcon}>
                                                                        <Icon size={24} />
                                                                    </div>
                                                                    <span className={styles.serviceName}>{service.name}</span>
                                                                </button>

                                                                {isSelected && (
                                                                    <div className={styles.addOnDetailBox}>
                                                                        {serviceNeedsSurfaceSize(service.id) && (
                                                                            <>
                                                                                <label className={styles.addOnLabel}>Okvirna kvadratura (m²)</label>
                                                                                <input
                                                                                    type="number"
                                                                                    min="1"
                                                                                    inputMode="decimal"
                                                                                    className={styles.inputField}
                                                                                    placeholder="Npr. 40"
                                                                                    value={addOnConfig?.size || ''}
                                                                                    onChange={(e) => updateAdditionalServiceConfig(service.id, 'size', e.target.value)}
                                                                                />
                                                                            </>
                                                                        )}

                                                                        {service.id === 'chemical' && (
                                                                            <div className={styles.addOnFieldGroup}>
                                                                                <label className={styles.addOnLabel}>Vrsta čišćenja</label>
                                                                                <select
                                                                                    className={styles.selectField}
                                                                                    value={addOnConfig?.option || 'rug'}
                                                                                    onChange={(e) => updateAdditionalServiceConfig(service.id, 'option', e.target.value)}
                                                                                >
                                                                                    {CHEMICAL_TYPE_OPTIONS.map((option) => (
                                                                                        <option key={option.value} value={option.value}>
                                                                                            {option.label}
                                                                                        </option>
                                                                                    ))}
                                                                                </select>

                                                                                <label className={styles.addOnLabel}>Količina / kvadratura</label>
                                                                                <input
                                                                                    type="number"
                                                                                    min="1"
                                                                                    inputMode="decimal"
                                                                                    className={styles.inputField}
                                                                                    placeholder="Npr. 12"
                                                                                    value={addOnConfig?.quantity || ''}
                                                                                    onChange={(e) => updateAdditionalServiceConfig(service.id, 'quantity', e.target.value)}
                                                                                />
                                                                            </div>
                                                                        )}

                                                                        {service.id === 'car' && (
                                                                            <div className={styles.addOnFieldGroup}>
                                                                                <label className={styles.addOnLabel}>Paket detailinga</label>
                                                                                <select
                                                                                    className={styles.selectField}
                                                                                    value={addOnConfig?.option || 'complete'}
                                                                                    onChange={(e) => updateAdditionalServiceConfig(service.id, 'option', e.target.value)}
                                                                                >
                                                                                    {CAR_PACKAGE_OPTIONS.map((option) => (
                                                                                        <option key={option.value} value={option.value}>
                                                                                            {option.label}
                                                                                        </option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>
                                                                        )}

                                                                        {service.id === 'pool' && (
                                                                            <div className={styles.addOnFieldGroup}>
                                                                                <label className={styles.addOnLabel}>Vrsta bazena</label>
                                                                                <select
                                                                                    className={styles.selectField}
                                                                                    value={addOnConfig?.option || 'standard'}
                                                                                    onChange={(e) => updateAdditionalServiceConfig(service.id, 'option', e.target.value)}
                                                                                >
                                                                                    {POOL_OPTIONS.map((option) => (
                                                                                        <option key={option.value} value={option.value}>
                                                                                            {option.label}
                                                                                        </option>
                                                                                    ))}
                                                                                </select>
                                                                            </div>
                                                                        )}
                                                                    </div>
                                                                )}
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        )}

                                        <div className={styles.priceBox}>
                                            <h4 className={styles.priceTitle}>Informativna procijenjena cijena</h4>
                                            <div className={styles.priceAmount}>
                                                {formatPriceRange(estimatedPrice.min, estimatedPrice.max)}
                                            </div>
                                            <p className={styles.priceDisclaimer}>
                                                {formData.additionalServices.length > 0
                                                    ? 'Procjena uključuje glavnu uslugu i dodatne usluge, uz 10% popusta na svaku dodatnu uslugu jer se radovi izvode u istom dolasku.'
                                                    : 'Procjena je okvirna i može se promijeniti nakon uvida u stvarno stanje, pristup i opseg radova.'}
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
                                        <h3 className={styles.successTitle}>Upit uspješno poslan</h3>
                                        <p className={styles.successText}>
                                            Hvala vam {formData.name}. Zaprimili smo vaš upit i javit ćemo vam se na {formData.phone}
                                            {formData.email ? ` ili ${formData.email}` : ''} u najkraćem roku.
                                        </p>

                                        <button
                                            className={`${styles.btn} ${styles.btnSecondary}`}
                                            style={{ margin: '0 auto' }}
                                            onClick={resetForm}
                                        >
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
