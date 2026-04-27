'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Phone, CheckCircle2, MessageCircle, ArrowRight, Zap, Target, ThumbsUp, MapPin, Package } from 'lucide-react';
import styles from '../LandingPage.module.css';
import LeadForm from './components/LeadForm';
import FaqAccordion from './components/FaqAccordion';
import BeforeAfterSlider from '@/components/BeforeAfterSlider/BeforeAfterSlider';

export default function LandingPageClient() {
    return (
        <div className={styles.page}>


            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.trustBar}>
                        ⭐ 5.0 Google ocjena · Brz odgovor · Zagreb i okolica
                    </div>
                    
                    <h1 className={styles.title}>
                        Pranje <span className={styles.highlight}>okućnice</span> i prilaza
                    </h1>
                    
                    <p className={styles.subtitle}>
                        Uklanjamo alge, mahovinu, mrlje od ulja i crne tragove s tlakavaca, prilaza i dvorišta. Pošaljite slike — javimo vam okvirnu cijenu.
                    </p>

                    <ul className={styles.bullets}>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Procjena po slikama ili dolazak na lokaciju</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Profesionalna oprema za beton, asfalt i tlakavce</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Uklanjanje korova iz fuga i tvrdokornih mrlja</span>
                        </li>
                    </ul>

                    <div style={{ marginTop: '2rem' }}>
                        <a 
                            href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20pranje%20okucnice.%20Mogu%20poslati%20slike%20za%20okvirnu%20procjenu.%20Lokacija:%20" 
                            className={styles.btnPrimary}
                            onClick={() => {
                     
                                 // @ts-ignore
                                window.dataLayer?.push({ event: "lead_form_submit", event_category: "google_ads_landing_page", service: "Pranje okućnice", landing_page: "/lp/pranje-okucnice" });
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
                        Okućnica prije i poslije pranja
                    </h2>
                    
                    <BeforeAfterSlider 
                        beforeSrc="/seo-results/pranje-terasa/prije.jpeg"
                        afterSrc="/seo-results/pranje-terasa/poslije.jpeg"
                        beforeAlt="Okućnica prije pranja s tamnim mrljama"
                        afterAlt="Okućnica poslije visokotlačnog pranja"
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
                                <p>Pošaljite 2–3 slike dvorišta/prilaza i lokaciju na WhatsApp ili ispunite kratki upit.</p>
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
                            <span>Sigurno za tlakavce i kamen</span>
                        </div>
                        <div className={styles.featureCard}>
                            <MessageCircle className={styles.featureIcon} size={28} />
                            <span>Uklanjanje ulja i korova</span>
                        </div>
                        <div className={styles.featureCard}>
                            <MapPin className={styles.featureIcon} size={28} />
                            <span>Zagreb i cijela okolica</span>
                        </div>
                        <div className={styles.featureCard}>
                            <Package className={styles.featureIcon} size={28} />
                            <span>Paket okućnica + fasada</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cijena */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Koliko košta pranje okućnice?
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center' }}>
                        Cijena ovisi o površini, vrsti podloge i stupnju zaprljanosti.
                    </p>
                    
                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td>Do 50 m²</td>
                                <td>150 – 200 €</td>
                            </tr>
                            <tr>
                                <td>50 – 100 m²</td>
                                <td>200 – 350 €</td>
                            </tr>
                            <tr>
                                <td>100 – 200 m²</td>
                                <td>350 – 600 €</td>
                            </tr>
                            <tr>
                                <td>200 m²+</td>
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
                            href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20pranje%20okucnice.%20Mogu%20poslati%20slike%20za%20okvirnu%20procjenu.%20Lokacija:%20" 
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
                    href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20pranje%20okucnice.%20Mogu%20poslati%20slike%20za%20okvirnu%20procjenu.%20Lokacija:%20" 
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
