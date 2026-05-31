'use client';

import Image from 'next/image';
import { Phone, CheckCircle2, MessageCircle, ArrowRight } from 'lucide-react';
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
                        ⭐ 5.0 Google ocjena · Zagreb i okolica · Fotografije prije i poslije
                    </div>

                    <h1 className={styles.title}>
                        Grob vaših najmilijih zaslužuje da uvijek izgleda dostojanstveno.
                        <span className={styles.highlight} style={{ display: 'block', marginTop: '0.25rem' }}>
                            A vi ne morate biti tu da to osigurate.
                        </span>
                    </h1>

                    <p className={styles.subtitle}>
                        Profesionalno čišćenje, pranje i impregnacija grobnih mjesta na svim zagrebačkim grobljima.
                        Dolazimo s opremom, čistimo s pažnjom, šaljemo vam fotografije prije i poslije, sve s vašeg mobitela.
                    </p>

                    <ul className={styles.bullets}>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Mirogoj · Miroševac · Markovo Polje · Brestje · Krematorij</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Ne morate biti prisutni, fotografije stižu na WhatsApp ili e-mail</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Iskustvo s mramorom, granitom i vapnencem</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Pranje, poliranje i impregnacija (uz dodatnu naknadu)</span>
                        </li>
                        <li>
                            <CheckCircle2 className={styles.checkIcon} size={22} />
                            <span>Idealno za iseljenike i obitelji izvan Zagreba</span>
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
                            href="tel:+385954442806"
                            className={styles.btnSecondary}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'call_click', cta_location: 'hero' });
                            }}
                        >
                            <Phone size={22} />
                            Nazovite odmah: 095 844 2806
                        </a>
                        <p className={styles.subtext}>Ili ispunite prijavu u 60 sekundi i javimo se mi vama ↓</p>
                    </div>

                    <LeadForm />
                </div>
            </section>

            {/* Emocionalni connect */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <div style={{
                        maxWidth: '680px',
                        margin: '0 auto',
                        textAlign: 'center',
                        padding: '2rem',
                        background: 'var(--surface)',
                        borderRadius: '1.25rem',
                        border: '1px solid var(--border)',
                    }}>
                        <h2 className={styles.title} style={{ fontSize: '1.6rem', marginBottom: '1.25rem' }}>
                            Razumijemo zašto ste ovdje.
                        </h2>
                        <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.8, marginBottom: '1rem' }}>
                            Možda ne živite u Hrvatskoj i niste se mogli vratiti već godinama.
                            Možda zdravlje više ne dopušta penjanje stepenicama do groba.
                            Možda jednostavno ne znate odakle početi, kamen je potamnio, mahovina prekrila imena,
                            a posjet groblja postao je razlog za grižnju savjesti umjesto mira.
                        </p>
                        <p style={{ fontSize: '1.05rem', color: '#374151', lineHeight: 1.8, fontWeight: 600 }}>
                            Naš posao je da vam taj mir vratimo.
                            Vi nam javite, mi se pobrinemo da grob izgleda onako kako su zaslužili oni koji tamo počivaju.
                        </p>
                    </div>
                </div>
            </section>

            {/* Kako radimo, 3 koraka */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                        Kako do dostojanstveno uređenog groba, bez stresa
                    </h2>

                    <div className={styles.steps}>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>1</div>
                            <div className={styles.stepContent}>
                                <h3>Prijavite grobno mjesto</h3>
                                <p>Pošaljete nam groblje, polje, red i broj groba (ako ne znate, nije problem, pomoći ćemo). WhatsApp, poziv ili forma, što vam je najbrže.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>2</div>
                            <div className={styles.stepContent}>
                                <h3>Potvrda i predujam 30% za rezervaciju mjesta</h3>
                                <p>Šaljemo vam pisanu potvrdu termina i upute za uplatu predujma. Ostatak plaćate tek nakon što vidite fotografije rezultata.</p>
                            </div>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.stepNumber}>3</div>
                            <div className={styles.stepContent}>
                                <h3>Čišćenje i fotografije na vaš mobitel</h3>
                                <p>Dolazimo s profesionalnom opremom. Čistimo nježno i temeljito. Šaljemo vam fotografije prije i poslije, najčešće isti dan kad obavimo posao.</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: '#fef3c7', border: '1px solid #fbbf24', borderRadius: '0.75rem', padding: '1.25rem', marginTop: '2rem' }}>
                        <p style={{ fontSize: '0.95rem', color: '#92400e', fontWeight: 600, margin: 0, marginBottom: '0.5rem' }}>
                            ℹ️ Kako planiramo termine
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#92400e', margin: 0 }}>
                            Radimo grupno po groblju, krećemo kad se skupi 10+ rezervacija. Mirogoj jedan dan, Miroševac drugi, Markovo Polje treći. Tako možemo držati cijene pristupačnima i posvetiti svakom grobu vrijeme koje zaslužuje.
                            <br /><br />
                            Standardni rok izlaska: 1–3 tjedna nakon uplate predujma.
                            Za posebne datume (godišnjice, Svi sveti), dogovorite se unaprijed, naći ćemo termin.
                        </p>
                    </div>
                </div>
            </section>

            {/* Što radimo */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Što radimo na svakom grobnom mjestu
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Temeljito čistimo svaki element, bez agresivnih kemikalija koje oštećuju kamen.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
                        {[
                            { title: 'Nadgrobni spomenik (mramor, granit, vapnenac)', desc: 'Uklanjamo mahovinu, lišajeve, kalcifikacije i nakupljenu prljavštinu. Bez agresivnih kemikalija koje oštećuju kamen.' },
                            { title: 'Nadgrobna ploča s natpisima', desc: 'Čistimo nježno, ručno oko gravura, slova i fotografija, bez rizika od oštećenja.' },
                            { title: 'Obrubi, rubne ploče i staze oko groba', desc: 'Kameni i betonski elementi koji s vremenom potamne i obraste mahovinom, vraćamo ih u izvorni izgled.' },
                            { title: 'Posude za cvijeće i lampioni', desc: 'Kamene, betonske i porculanske žardinjere temeljito čistimo iznutra i izvana.' },
                            { title: 'Okolna površina', desc: 'Uklanjamo korov, lišće, suho cvijeće, stare svijeće i sav otpad.' },
                        ].map((item) => (
                            <div key={item.title} style={{ background: 'var(--surface)', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid var(--border)' }}>
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

                    <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '0.75rem', padding: '1.5rem' }}>
                        <p style={{ fontWeight: 700, fontSize: '1rem', color: '#166534', marginBottom: '0.75rem' }}>
                            Dodatne usluge (uz nadoplatu)
                        </p>
                        <p style={{ fontSize: '0.95rem', color: '#166534', margin: '0 0 0.5rem' }}>
                            <strong>Poliranje kamena</strong>, vraćamo sjaj mramoru i granitu nakon pranja. Idealno ako kamen izgleda mat ili izlizano.
                        </p>
                        <p style={{ fontSize: '0.95rem', color: '#166534', margin: 0 }}>
                            <strong>Impregnacija</strong>, zaštitni premaz koji odbija vodu, prljavštinu i mahovinu sljedećih 2–3 godine. Najpametnija investicija ako želite da grob duže ostane čist između čišćenja.
                        </p>
                    </div>
                </div>
            </section>

            {/* Iskreno o ograničenjima */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Iskreno: što se može, a što ne
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Trudimo se vratiti grob u najbolji mogući izgled, ali važno je da znate istinu prije nego što platite.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
                        <div style={{ background: 'white', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid #86efac' }}>
                            <p style={{ fontWeight: 700, color: '#166534', marginBottom: '0.75rem', fontSize: '1rem' }}>
                                ✅ Što se gotovo uvijek riješi
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                                Mahovina, lišajevi, prašina, blato, tragovi cvijeća i svijeća, površinska prljavština, zelene naslage.
                            </p>
                        </div>
                        <div style={{ background: 'white', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid #fbbf24' }}>
                            <p style={{ fontWeight: 700, color: '#92400e', marginBottom: '0.75rem', fontSize: '1rem' }}>
                                ⚠️ Što često uspijemo umanjiti, ali ne uvijek u potpunosti
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                                Duboke fleke od hrđe, tragovi starih lampiona ugrađeni u kamen, mrlje od korijena biljaka, oksidirane mrlje na mramoru, žute fleke od godina prljavštine koja je prodrla u poroznu strukturu.
                            </p>
                        </div>
                        <div style={{ background: 'white', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid #fecaca' }}>
                            <p style={{ fontWeight: 700, color: '#991b1b', marginBottom: '0.75rem', fontSize: '1rem' }}>
                                ❌ Što se ne može popraviti čišćenjem
                            </p>
                            <p style={{ fontSize: '0.9rem', color: '#374151', lineHeight: 1.7, margin: 0 }}>
                                Mehanička oštećenja, izlizani ili oštećeni natpis, pukotine u kamenu, ispucale fotografije. Za to su potrebni kamenoresci, ako trebate, preporučit ćemo provjerene majstore.
                            </p>
                        </div>
                    </div>

                    <div style={{ background: 'white', borderRadius: '0.75rem', padding: '1.25rem', border: '1px solid var(--border)', marginTop: '1rem', textAlign: 'center' }}>
                        <p style={{ fontSize: '0.95rem', color: '#374151', fontWeight: 600, margin: 0 }}>
                            Naša obveza: prije početka pošaljemo vam stručnu procjenu i kažemo realno što očekivati. Bez praznih obećanja. Bez naplate za nemoguće.
                        </p>
                    </div>
                </div>
            </section>

            {/* Cijene */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '1rem' }}>
                        Cijene
                    </h2>
                    <p className={styles.subtitle} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Konačna cijena ovisi o veličini groba, vrsti kamena i stupnju zaprljanosti, javljamo je prije početka.
                    </p>

                    <table className={styles.table}>
                        <tbody>
                            <tr>
                                <td>Jednokratno čišćenje (jednostruki grob)</td>
                                <td>od 200 €</td>
                            </tr>
                            <tr>
                                <td>Jednokratno čišćenje (dvostruki grob / grobnica)</td>
                                <td>od 300 €</td>
                            </tr>
                            <tr>
                                <td>Poliranje kamena (uz čišćenje)</td>
                                <td>od 150 €</td>
                            </tr>
                            <tr>
                                <td>Impregnacija (uz čišćenje)</td>
                                <td>od 50 €</td>
                            </tr>
                            <tr>
                            <tr>
                                <td>Predujam za rezervaciju</td>
                                <td>30%</td>
                            </tr>
                        </tbody>
                    </table>

                    <div style={{ background: '#f0fdf4', border: '1px solid #86efac', borderRadius: '0.75rem', padding: '1.25rem', marginTop: '1.5rem' }}>
                        <p style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 600, margin: '0 0 0.25rem' }}>
                            ✅ Ostatak se plaća tek nakon što dobijete fotografije rezultata.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 600, margin: '0 0 0.25rem' }}>
                            ✅ Bez skrivenih troškova.
                        </p>
                        <p style={{ fontSize: '0.9rem', color: '#166534', fontWeight: 600, margin: 0 }}>
                            ✅ Bez naplate ako rezultat nije ono što smo dogovorili.
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

            {/* Galerija */}
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

            {/* Zašto mi */}
            <section className={styles.section}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Zašto nam klijenti povjeravaju ovu uslugu
                    </h2>

                    <div style={{ maxWidth: '640px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[
                            { icon: '⭐', text: '5.0 ocjena na Google-u, provjereno od stvarnih klijenata' },
                            { icon: '🛡️', text: 'Profesionalna oprema, visokotlačni uređaji s podesivim pritiskom (ne uništavaju kamen)' },
                            { icon: '📸', text: 'Fotografije prije i poslije, uvijek, bez iznimke' },
                            { icon: '✋', text: 'Nježan pristup, ručno čišćenje oko natpisa, slika i osjetljivih dijelova' },
                            { icon: '🌍', text: 'Specijalizirani za iseljenike, komunikacija na hrvatskom, engleskom i njemačkom' },
                            { icon: '🇭🇷', text: 'Sva groblja u Zagrebu i okolici, Mirogoj, Miroševac, Markovo Polje, Brestje, Krematorij i dalje' },
                            { icon: '💬', text: 'Iskrena procjena, kažemo unaprijed što se može, a što ne' },
                        ].map((item) => (
                            <div key={item.icon} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', background: 'var(--surface)', borderRadius: '0.75rem', padding: '1rem 1.25rem', border: '1px solid var(--border)' }}>
                                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{item.icon}</span>
                                <span style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.6 }}>{item.text}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className={styles.section} style={{ background: 'var(--surface)' }}>
                <div className={styles.container}>
                    <h2 className={styles.title} style={{ textAlign: 'center', marginBottom: '2rem' }}>
                        Što kažu naši klijenti
                    </h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
                        {([
                            {
                                text: 'Živim u Njemačkoj i nisam bila u mogućnosti redovito posjećivati grob moje mame. Fotografije su bile nevjerojatne, sve blistavo čisto. Preporučujem svima koji su daleko.',
                                name: 'Marija K.',
                                meta: 'Njemačka, Miroševac',
                            },
                            {
                                text: 'Stariji sam i ne mogu se sagnuti za čišćenje. Oni su sve obavili profesionalno i s puno poštovanja. Primio sam slike i zaplakao od sreće. Hvala vam.',
                                name: 'Stjepan P.',
                                meta: 'Zagreb, Mirogoj',
                            },
                            {
                                text: 'Javio sam se ekipi iz Kanade da mi očiste grob od roditelja, odradili su super posao! Bez previše dopisivanja i muke. Sve preporuke!',
                                name: 'Ivan M.',
                                meta: 'Toronto, Mirogoj',
                            },
                        ] as const).map((t) => (
                            <div key={t.name} style={{ background: 'white', borderRadius: '1rem', padding: '1.5rem', border: '1px solid var(--border)' }}>
                                <div style={{ fontSize: '1.25rem', color: '#fbbf24', marginBottom: '0.75rem' }}>★★★★★</div>
                                <p style={{ fontSize: '0.95rem', color: '#374151', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '1rem' }}>&ldquo;{t.text}&rdquo;</p>
                                <strong style={{ display: 'block', fontSize: '0.9rem' }}>{t.name}</strong>
                                <span style={{ fontSize: '0.8rem', color: '#6b7280' }}>{t.meta}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className={styles.section}>
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
                            Vaši najmiliji zaslužuju mjesto kojeg se ne morate stidjeti.
                        </h2>
                        <p style={{ color: '#4b5563', marginBottom: '1.5rem', fontWeight: 500 }}>
                            Bez obzira gdje ste, u Zagrebu ili na drugom kraju svijeta, možete im to osigurati danas.
                            Javljamo se isti dan. Bez obveze.
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
                            WhatsApp
                        </a>
                        <a
                            href="tel:+385954442806"
                            className={styles.btnSecondary}
                            style={{ marginBottom: '1rem' }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'call_click', cta_location: 'footer' });
                            }}
                        >
                            <Phone size={22} />
                            Nazovi 095 844 2806
                        </a>
                        <a
                            href="#prijava"
                            style={{ color: '#6b7280', textDecoration: 'underline', fontWeight: 500 }}
                            onClick={() => {
                                // @ts-ignore
                                window.dataLayer?.push({ event: 'quote_cta_click', cta_location: 'footer' });
                            }}
                        >
                            Ispuni prijavu
                        </a>
                    </div>
                </div>
            </section>

            {/* Sticky Mobile Bar */}
            <div className={styles.stickyBar}>
                <a
                    href="tel:+385954442806"
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
