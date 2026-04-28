'use client';

import Image from 'next/image';
import { Phone, CheckCircle2, MessageCircle, ArrowRight, Heart, ShieldCheck, Camera, MapPin, Clock } from 'lucide-react';
import styles from '../LandingPage.module.css';
import LeadForm from './components/LeadForm';
import FaqAccordion from './components/FaqAccordion';

export default function LandingPageClient() {
    return (
        <div className={styles.page}>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.container}>
                    <div className={styles.trustBar}>
                        ⭐ 5.0 Google ocjena · Bez vaše prisutnosti · Zagreb i okolica
                    </div>

                    <h1 className={styles.title}>
                        Čišćenje <span className={styles.highlight}>grobnih mjesta</span> u Zagrebu
                    </h1>

                    <p className={styles.subtitle}>
                        Brinemo se za dostojanstven izgled groba vaših najmilijih — bez da morate biti prisutni.
                        Šaljemo vam fotografije prije i poslije čišćenja.
                    </p>

                    <ul className={styles.bullets}>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Mirogoj, Miroševac, Markovo Polje, Brestje, Krematorij</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Ne trebate biti prisutni — šaljemo fotografije</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Idealno za iseljenike i osobe koje žive izvan Zagreba</span>
                        </li>
                    </ul>

                    <div style={{ marginTop: '2rem' }}>
                        <a
                            href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20čišćenje%20grobnog%20mjesta.%20Groblje:%20"
                            className={styles.btnPrimary}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'hero' });
                            }}
                        >
                            <MessageCircle size={22} />
                            Javite nam se na WhatsApp
                        </a>
                        <a
                            href="tel:+385958442806"
                            className={styles.btnSecondary}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'call_click', cta_location: 'hero' });
                            }}
                        >
                            <Phone size={22} />
                            Nazovite odmah
                        </a>
                        <p className={styles.subtext}>Ili ispunite kratku prijavu i javimo se mi vama ↓</p>
                    </div>

                    <LeadForm />
                </div>
            </section>

            {/* Kako funkcionira */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Kako do čistog grobnog mjesta?
                    </h2>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Prijavite grobno mjesto</h3>
                                <p>Javite nam groblje, polje, red i broj groba. Možete nam pisati na WhatsApp ili ispuniti kratku prijavu.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Rezervacija s predujmom</h3>
                                <p>Potvrđujemo rezervaciju i šaljemo uputu za plaćanje predujma od 50%. Ostatak po završetku.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Čišćenje i fotografije</h3>
                                <p>Dolazimo na groblje, čistimo s pažnjom i šaljemo fotografije prije i poslije kao potvrdu.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '0.75rem', padding: '1.25rem', marginTop: '2rem' }}>
                        <p style={{ fontSize: '0.95rem', color: '#92400e', fontWeight: 600, margin: 0 }}>
                            ℹ️ Čišćenje organiziramo grupno po groblju — odlazimo kada se skupi minimalno 10 grobnih mjesta. Većina klijenata čeka 2 do 4 tjedna.
                        </p>
                    </div>
                </div>
            </section>

            {/* Zašto Mi */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Zašto nam klijenti povjeravaju ovu uslugu?
                    </h2>

                    <div className={styles.grid}>
                        <div className={styles.featureCard}>
                            <Heart className={styles.featureIcon} size={28} />
                            <span>Pažnja i poštovanje prema svakom grobu</span>
                        </div>
                        <div className={styles.featureCard}>
                            <Camera className={styles.featureIcon} size={28} />
                            <span>Fotografije prije i poslije — uvijek</span>
                        </div>
                        <div className={styles.featureCard}>
                            <ShieldCheck className={styles.featureIcon} size={28} />
                            <span>Nježan pristup — nema oštećenja natpisa</span>
                        </div>
                        <div className={styles.featureCard}>
                            <Clock className={styles.featureIcon} size={28} />
                            <span>Ne trebate biti prisutni</span>
                        </div>
                        <div className={styles.featureCard}>
                            <MapPin className={styles.featureIcon} size={28} />
                            <span>Sva groblja u Zagrebu i okolici</span>
                        </div>
                        <div className={styles.featureCard}>
                            <MessageCircle className={styles.featureIcon} size={28} />
                            <span>Idealno za iseljenike i obitelji izvan Zagreba</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Što čistimo */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Što uključuje čišćenje?
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Temeljito čistimo svaki element grobnog mjesta.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                        {[
                            { title: 'Nadgrobni spomenik', desc: 'Mramor, granit ili vapnenac — uklanjamo mahovinu, lišajeve i kalcifikacije.' },
                            { title: 'Nadgrobna ploča', desc: 'Čistimo bez oštećivanja natpisa i fotografija.' },
                            { title: 'Obrubi i rubne ploče', desc: 'Kameni i betonski obrubi koji zelene i tamne.' },
                            { title: 'Posude za cvijeće', desc: 'Kamene i betonske žardinjere.' },
                            { title: 'Okolna površina', desc: 'Uklanjamo korov, lišće i prljavštinu oko groba.' },
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

            {/* Cijena */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Cijene čišćenja grobnog mjesta
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center' }}>
                        Konačna cijena ovisi o veličini grobnog mjesta, vrsti kamena i stupnju zaprljanosti.
                    </p>

                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td>Jednokratno čišćenje</td>
                                <td>od 100 €</td>
                            </tr>
                            <tr>
                                <td>Redovito održavanje (4× godišnje)</td>
                                <td>po dogovoru</td>
                            </tr>
                            <tr>
                                <td>Predujam za rezervaciju</td>
                                <td>50%</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '0.75rem', padding: '1.25rem', marginTop: '1.5rem' }}>
                        <p style={{ fontSize: '0.95rem', color: '#166534', fontWeight: 600, margin: 0 }}>
                            ✅ Ostatak se plaća po završetku radova, uz fotografije kao potvrda. Bez skrivenih troškova.
                        </p>
                    </div>

                    <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                        <a
                            href="#prijava"
                            className={styles.btnPrimary}
                            style={{ display: 'inline-flex', width: '100%' }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'quote_cta_click', cta_location: 'price' });
                            }}
                        >
                            Prijavite grobno mjesto
                        </a>
                    </div>
                </div>
            </section>

            {/* Galerija / Before-After */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
                        Rezultati čišćenja
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Šaljemo fotografije ovakve kvalitete direktno na vaš mobitel.
                    </p>

                    <div className={styles.galleryGrid}>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/lp-gallery/groblje-1.png"
                                alt="Čišćenje nadgrobnog kamena - rezultat"
                                fill
                                className={styles.galleryImg}
                                sizes="(max-width: 600px) 50vw, 300px"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>
                        <div className={styles.galleryImage}>
                            <Image
                                src="/lp-gallery/groblje-2.png"
                                alt="Očišćeni grobni obrubi - rezultat"
                                fill
                                className={styles.galleryImg}
                                sizes="(max-width: 600px) 50vw, 300px"
                                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonial */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Što kažu naši klijenti
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {[
                            {
                                text: 'Živim u Njemačkoj i nisam bila u mogućnosti redovito posjećivati grob moje mame. Šlauf i Šmrk su mi rješili problem — fotografije su bile nevjerojatne, sve blistavo čisto. Preporučujem svima koji su daleko.',
                                name: 'Marija K.',
                                meta: 'Zagreb — Miroševac',
                            },
                            {
                                text: 'Stariji sam i ne mogu se sagnuti za čišćenje. Oni su sve obavili profesionalno i s puno poštovanja. Primio sam slike i zaplakao od sreće. Hvala vam.',
                                name: 'Stjepan P.',
                                meta: 'Zagreb — Mirogoj',
                            },
                        ].map((t) => (
                            <div key={t.name} style={{ background: 'var(--surface)', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '0.75rem' }}>★★★★★</div>
                                <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1rem' }}>"{t.text}"</p>
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
                            Prijavite grobno mjesto danas.
                        </h2>
                        <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontWeight: 500 }}>
                            Pobrinite se da grobno mjesto vaših najmilijih uvijek izgleda dostojanstveno.
                        </p>

                        <a
                            href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20čišćenje%20grobnog%20mjesta.%20Groblje:%20"
                            className={styles.btnPrimary}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'footer' });
                            }}
                        >
                            <MessageCircle size={22} />
                            Javite nam se na WhatsApp
                        </a>
                        <a
                            href="tel:+385958442806"
                            className={styles.btnSecondary}
                            style={{ marginBottom: '1rem' }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'call_click', cta_location: 'footer' });
                            }}
                        >
                            <Phone size={22} />
                            Nazovite odmah
                        </a>
                        <a
                            href="#prijava"
                            style={{ color: '#6b7280', textDecoration: 'underline', fontWeight: 500 }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'quote_cta_click', cta_location: 'footer' });
                            }}
                        >
                            Ispunite prijavu
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
                        window.dataLayer?.push({ event: 'call_click', cta_location: 'sticky_bar' });
                    }}
                >
                    <Phone />
                    Nazovi
                </a>
                <a
                    href="https://wa.me/385958442806?text=Bok,%20zanima%20me%20čišćenje%20grobnog%20mjesta.%20Groblje:%20"
                    className={styles.stickyBtn}
                    onClick={() => {
                        // @ts-ignore
                        window.dataLayer?.push({ event: 'whatsapp_click', cta_location: 'sticky_bar' });
                    }}
                >
                    <MessageCircle />
                    WhatsApp
                </a>
                <a
                    href="#prijava"
                    className={`${styles.stickyBtn} ${styles.stickyBtnPrimary}`}
                    onClick={() => {
                        // @ts-ignore
                        window.dataLayer?.push({ event: 'quote_cta_click', cta_location: 'sticky_bar' });
                    }}
                >
                    <ArrowRight />
                    Prijava
                </a>
            </div>
        </div>
    );
}
