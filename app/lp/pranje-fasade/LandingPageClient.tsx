'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle2, MessageCircle, ArrowRight, Zap, Target, ThumbsUp, MapPin, Package } from 'lucide-react';
import styles from './LandingPage.module.css';
import LeadForm from './components/LeadForm';
import FaqAccordion from './components/FaqAccordion';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';

export default function LandingPageClient() {
    return (
        <div className={styles.page}>
            {/* Header */}
            <header className={styles.header}>
                <div 
                    className={styles.logo} 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <span>ŠLAUF <span style={{color: 'var(--primary)'}}>i</span> ŠMRK</span>
                </div>
                <a 
                    href="tel:+385958442806" 
                    className={styles.phoneIcon}
                    aria-label="Nazovi odmah"
                >
                    <Phone size={24} />
                </a>
            </header>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.trustBar}>
                        ⭐ 5.0 Google ocjena · Brz odgovor · Zagreb i okolica
                    </div>
                    
                    <h1 className={styles.title}>
                        Pranje <span className={styles.highlight}>fasade</span> u Zagrebu
                    </h1>
                    
                    <p className={styles.subtitle}>
                        Uklanjamo alge, mahovinu, gljivice i crne tragove s fasada kuća, zgrada i poslovnih objekata. Pošaljite slike fasade — javimo vam okvirnu cijenu.
                    </p>

                    <ul className={styles.bullets}>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Procjena po slikama ili dolazak na lokaciju</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Prilagođen tlak za sve vrste fasada</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Mogućnost paketa: fasada + okućnica + prilaz</span>
                        </li>
                    </ul>

                    <div style={{ marginTop: '2rem' }}>
                        <a 
                            href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20pranje%20fasade.%20Mogu%20poslati%20slike%20za%20okvirnu%20procjenu.%20Lokacija:%20" 
                            className={styles.btnPrimary}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: "whatsapp_click", cta_location: "hero" });
                            }}
                        >
                            <MessageCircle size={22} />
                            Pošalji slike na WhatsApp
                        </a>
                        <a 
                            href="tel:+385958442806" 
                            className={styles.btnSecondary}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: "call_click", cta_location: "hero" });
                            }}
                        >
                            <Phone size={22} />
                            Nazovi odmah
                        </a>
                        <p className={styles.subtext}>Ili ispunite kratki upit i javimo se mi vama ↓</p>
                    </div>

                    <LeadForm />
                </div>
            </section>

            {/* Prije / Poslije */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Fasada prije i poslije pranja
                    </h2>
                    
                    <BeforeAfterSlider 
                        beforeSrc="/seo-results/pranje-fasade/prije.jpeg"
                        afterSrc="/seo-results/pranje-fasade/poslije.png"
                        beforeAlt="Fasada prije pranja s tamnim mrljama"
                        afterAlt="Fasada poslije visokotlačnog pranja"
                    />

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <a 
                            href="#procjena" 
                            className={styles.btnPrimary}
                            style={{ display: 'inline-flex', width: 'auto', minWidth: '250px' }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: "quote_cta_click", cta_location: "before_after" });
                            }}
                        >
                            Želim ovakav rezultat
                        </a>
                    </div>
                </div>
            </section>

            {/* Kako funkcionira */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Kako do procjene?
                    </h2>
                    
                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Pošaljite slike</h3>
                                <p>Pošaljite 2–3 slike fasade i lokaciju na WhatsApp ili ispunite kratki upit.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Dobivate cijenu</h3>
                                <p>Javljamo okvirni raspon. Za veće objekte dolazimo na procjenu.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Dogovaramo termin</h3>
                                <p>Potvrđujemo termin i dolazimo opremljeni.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zašto Mi */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Zašto klijenti biraju Šlauf i Šmrk?
                    </h2>
                    
                    <div className={styles.grid}>
                        <div className={styles.featureCard}>
                            <Zap className={styles.featureIcon} size={28} />
                            <span>Brz odgovor</span>
                        </div>
                        <div className={styles.featureCard}>
                            <ThumbsUp className={styles.featureIcon} size={28} />
                            <span>Stvarni prije/poslije rezultati</span>
                        </div>
                        <div className={styles.featureCard}>
                            <Target className={styles.featureIcon} size={28} />
                            <span>Prilagođen tlak za svaki tip fasade</span>
                        </div>
                        <div className={styles.featureCard}>
                            <MessageCircle className={styles.featureIcon} size={28} />
                            <span>Jasna procjena bez skrivenih troškova</span>
                        </div>
                        <div className={styles.featureCard}>
                            <MapPin className={styles.featureIcon} size={28} />
                            <span>Zagreb i cijela okolica</span>
                        </div>
                        <div className={styles.featureCard}>
                            <Package className={styles.featureIcon} size={28} />
                            <span>Paket fasada + okućnica + prilaz</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cijena */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Koliko košta pranje fasade?
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center' }}>
                        Cijena ovisi o površini, vrsti fasade, visini objekta i stupnju zaprljanosti.
                    </p>
                    
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td>100 m²</td>
                                <td>400 – 600 €</td>
                            </tr>
                            <tr>
                                <td>200 m²</td>
                                <td>800 – 1.200 €</td>
                            </tr>
                            <tr>
                                <td>300 m²</td>
                                <td>1.200 – 1.800 €</td>
                            </tr>
                            <tr>
                                <td>500 m²+</td>
                                <td>po procjeni</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <a 
                            href="#procjena" 
                            className={styles.btnPrimary}
                            style={{ display: 'inline-flex', width: '100%' }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: "quote_cta_click", cta_location: "price" });
                            }}
                        >
                            Zatraži točnu procjenu
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Česta pitanja
                    </h2>
                    
                    <FaqAccordion />
                </div>
            </section>

            {/* Footer CTA */}
            <section className={styles.section} style={{ paddingBottom: '4rem' }}>
                <div className={styles.container}>
                    <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '1rem', border: '1px solid var(--border)' }}>
                        <h2 className={styles.title} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
                            Trebate procjenu? Pošaljite slike ili nas nazovite.
                        </h2>
                        
                        <a 
                            href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20pranje%20fasade.%20Mogu%20poslati%20slike%20za%20okvirnu%20procjenu.%20Lokacija:%20" 
                            className={styles.btnPrimary}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: "whatsapp_click", cta_location: "footer" });
                            }}
                        >
                            <MessageCircle size={22} />
                            Pošalji slike na WhatsApp
                        </a>
                        <a 
                            href="tel:+385958442806" 
                            className={styles.btnSecondary}
                            style={{ marginBottom: '1rem' }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: "call_click", cta_location: "footer" });
                            }}
                        >
                            <Phone size={22} />
                            Nazovi odmah
                        </a>
                        <a 
                            href="#procjena" 
                            style={{ color: '#6b7280', textDecoration: 'underline', fontWeight: 500 }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: "quote_cta_click", cta_location: "footer" });
                            }}
                        >
                            Ispuni kratki upit
                        </a>
                    </div>
                </div>
            </section>

            {/* Sticky Mobile Bar */}
            <div className={styles.stickyBar}>
                <a 
                    href="tel:+385958442806" 
                    className={styles.stickyBtn}
                    onClick={() => {
                        // @ts-ignore
                        window.dataLayer?.push({ event: "call_click", cta_location: "sticky_bar" });
                    }}
                >
                    <Phone />
                    Nazovi
                </a>
                <a 
                    href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20pranje%20fasade.%20Mogu%20poslati%20slike%20za%20okvirnu%20procjenu.%20Lokacija:%20" 
                    className={styles.stickyBtn}
                    onClick={() => {
                        // @ts-ignore
                        window.dataLayer?.push({ event: "whatsapp_click", cta_location: "sticky_bar" });
                    }}
                >
                    <MessageCircle />
                    WhatsApp
                </a>
                <a 
                    href="#procjena" 
                    className={`${styles.stickyBtn} ${styles.stickyBtnPrimary}`}
                    onClick={() => {
                        // @ts-ignore
                        window.dataLayer?.push({ event: "quote_cta_click", cta_location: "sticky_bar" });
                    }}
                >
                    <ArrowRight />
                    Procjena
                </a>
            </div>
        </div>
    );
}
