'use client';

import { Phone, CheckCircle2, MessageCircle, ArrowRight, RefreshCw, FileText, Clock, Building2, Zap, ShieldCheck, Star } from 'lucide-react';
import styles from '../LandingPage.module.css';
import LeadForm from './components/LeadForm';
import HeroReview from '../HeroReview';
import FaqAccordion from './components/FaqAccordion';

export default function LandingPageClient() {
    return (
        <div className={styles.page}>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroContainer}>
                    <div className={styles.heroIntro}>
                        <div className={styles.trustBar}>
                            <Star size={15} fill="currentColor" aria-hidden="true" /> 5,0 Google ocjena · račun za tvrtke · Zagreb i okolica
                        </div>

                        <h1 className={styles.title}>
                            Vanjsko čišćenje <span className={styles.highlight}>poslovnih objekata</span> u Zagrebu
                        </h1>

                        <p className={styles.subtitle}>
                            Fasade, parkirišta, skladišta i hale, redovito, po dogovoru, bez vaše organizacije.
                            račun za tvrtke, rad izvan radnog vremena, foto-dokumentacija rezultata.
                        </p>
                    </div>

                    <div className={styles.heroForm}>
                        <LeadForm />
                    </div>

                    <div className={styles.heroMore}>
                        <ul className={styles.bullets}>
                            <li>
                                <CheckCircle2 className={styles.checkIcon} size={22} />
                                <span>Redoviti ugovori, 2×, 4× godišnje ili po dogovoru</span>
                            </li>
                            <li>
                                <CheckCircle2 className={styles.checkIcon} size={22} />
                                <span>Radimo izvan radnog vremena i vikendom</span>
                            </li>
                            <li>
                                <CheckCircle2 className={styles.checkIcon} size={22} />
                                <span>račun za tvrtke, fotografije rezultata, bez skrivenih troškova</span>
                            </li>
                        </ul>

                        <div style={{ marginTop: '2rem' }}>
                            <a
                                href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20čišćenje%20poslovnog%20objekta.%20Tip%20objekta:%20"
                                className={styles.btnPrimary}
                                onClick={() => {
                                    window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'hero' });
                                }}
                            >
                                <MessageCircle size={22} />
                                Pišite nam na WhatsApp
                            </a>
                            <a
                                href="tel:+385958442806"
                                className={styles.btnSecondary}
                                onClick={() => {
                                    window.dataLayer?.push({ event: 'call_click', cta_location: 'hero' });
                                }}
                            >
                                <Phone size={22} />
                                Nazovite odmah
                            </a>
                        </div>

                        <HeroReview
                            text="Sve pohvale za detaljno čišćenje i brz dogovor oko termina! Sve preporuke za ekipu."
                            name="Nina Cvijanović"
                            meta="Google recenzija"
                        />
                    </div>
                </div>
            </section>

            {/* Što čistimo */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Što čistimo na poslovnim objektima?
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Sve vanjske površine vašeg objekta u jednom dolasku.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
                        {[
                            { title: 'Fasade', desc: 'Uredske zgrade, hale, poslovni centri. Uklanjamo alge, mahovinu i zagađenja.' },
                            { title: 'Parkirišta', desc: 'Ulja, gume, dugotrajne naslage. Sve kolničke i pješačke površine.' },
                            { title: 'Istovarne zone i rampe', desc: 'Skladišne rampe, betonske ploče, žljebovi i drenaže.' },
                            { title: 'Ulazi i terase', desc: 'Reprezentativni ulazi, vanjske hodnike i zajedničke površine.' },
                            { title: 'Kameno i popločavanja', desc: 'Tlakavci, granitne ploče i sve kamene površine oko objekta.' },
                            { title: 'Kombinirane usluge', desc: 'Fasada + parkirište + istovarne zone, sve u jednom terminu.' },
                        ].map((item) => (
                            <div key={item.title} style={{ background: 'white', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid var(--border)' }}>
                                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                    <CheckCircle2 size={20} style={{ color: 'var(--primary)', flexShrink: 0, marginTop: '2px' }} />
                                    <div>
                                        <strong style={{ display: 'block', marginBottom: '0.25rem' }}>{item.title}</strong>
                                        <span style={{ fontSize: '0.9rem', color: '#4b5563' }}>{item.desc}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Kako funkcionira */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Kako funkcionira suradnja?
                    </h2>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Pošaljite upit ili pozovite</h3>
                                <p>Opišite objekt i što trebate. Dolazimo na besplatnu procjenu ili dajemo okvirnu ponudu po kratkom upitu.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Dogovor uvjeta</h3>
                                <p>Definiramo koje površine čistimo, raspored, cijenu i uvjete plaćanja. Sve jasno u pisanoj ponudi.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Čišćenje i dokumentacija</h3>
                                <p>Dolazimo po dogovorenom rasporedu, čistimo i šaljemo fotografije rezultata i račun za tvrtke. Vi ne trebate biti prisutni.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Zašto Mi */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Zašto firme u Zagrebu biraju Šlauf i Šmrk?
                    </h2>

                    <div className={styles.grid}>
                        <div className={styles.featureCard}>
                            <RefreshCw className={styles.featureIcon} size={28} />
                            <span>Redoviti ugovori, jednom dogovoreno, mi se brinemo</span>
                        </div>
                        <div className={styles.featureCard}>
                            <FileText className={styles.featureIcon} size={28} />
                            <span>račun za tvrtke i transparentno fakturiranje</span>
                        </div>
                        <div className={styles.featureCard}>
                            <Clock className={styles.featureIcon} size={28} />
                            <span>Rad izvan radnog vremena i vikendom</span>
                        </div>
                        <div className={styles.featureCard}>
                            <Building2 className={styles.featureIcon} size={28} />
                            <span>Kapacitet za veće objekte i više lokacija</span>
                        </div>
                        <div className={styles.featureCard}>
                            <Zap className={styles.featureIcon} size={28} />
                            <span>Brz odgovor i pouzdana izvedba</span>
                        </div>
                        <div className={styles.featureCard}>
                            <ShieldCheck className={styles.featureIcon} size={28} />
                            <span>Fotografije rezultata, uvijek</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Što kažu klijenti na Googleu
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {[
                            {
                                text: 'Naručio sam čišćenje pročelja kuće i prilaza. Dečki su mrak. Mladi, brzi i odgovorni. Odrade sve po dogovoru, čak i više. Cijena i više nego pristupačna. Preporučujem svima.',
                                name: 'Bogdan Janjanin',
                                meta: 'Google recenzija · Pranje pročelja i prilaza',
                            },
                            {
                                text: 'Više puta sam koristila ove usluge i svaki put sam baš ugodno iznenađena. Prali su mi i kauč i auto i stvarno odrade top posao svaki put.',
                                name: 'Senka Zadro',
                                meta: 'Google recenzija · Kauč i detailing auta',
                            },
                        ].map((t) => (
                            <div key={t.name} style={{ background: 'var(--surface)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '0.75rem' }}>★★★★★</div>
                                <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1rem' }}>„{t.text}“</p>
                                <div>
                                    <strong style={{ display: 'block', fontSize: '0.9rem' }}>{t.name}</strong>
                                    <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{t.meta}</span>
                                </div>
                            </div>
                        ))}
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
                        <h2 className={styles.title} style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                            Zatražite ponudu za vaš objekt.
                        </h2>
                        <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontWeight: 500 }}>
                            Besplatna procjena. Bez obveze. Odgovaramo u najkraćem roku.
                        </p>

                        <a
                            href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20čišćenje%20poslovnog%20objekta.%20Tip%20objekta:%20"
                            className={styles.btnPrimary}
                            onClick={() => {
                                window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'footer' });
                            }}
                        >
                            <MessageCircle size={22} />
                            Pišite na WhatsApp
                        </a>
                        <a
                            href="tel:+385958442806"
                            className={styles.btnSecondary}
                            style={{ marginBottom: '1rem' }}
                            onClick={() => {
                                window.dataLayer?.push({ event: 'call_click', cta_location: 'footer' });
                            }}
                        >
                            <Phone size={22} />
                            Nazovite odmah
                        </a>
                        <a
                            href="#ponuda"
                            style={{ color: '#6b7280', textDecoration: 'underline', fontWeight: 500 }}
                            onClick={() => {
                                window.dataLayer?.push({ event: 'quote_cta_click', cta_location: 'footer' });
                            }}
                        >
                            Ispunite kratki upit
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
                        window.dataLayer?.push({ event: 'call_click', cta_location: 'sticky_bar' });
                    }}
                >
                    <Phone />
                    Nazovi
                </a>
                <a
                    href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20čišćenje%20poslovnog%20objekta.%20Tip%20objekta:%20"
                    className={styles.stickyBtn}
                    onClick={() => {
                        window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'sticky_bar' });
                    }}
                >
                    <MessageCircle />
                    WhatsApp
                </a>
                <a
                    href="#ponuda"
                    className={`${styles.stickyBtn} ${styles.stickyBtnPrimary}`}
                    onClick={() => {
                        window.dataLayer?.push({ event: 'quote_cta_click', cta_location: 'sticky_bar' });
                    }}
                >
                    <ArrowRight />
                    Ponuda
                </a>
            </div>
        </div>
    );
}
