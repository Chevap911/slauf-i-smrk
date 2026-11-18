
import type { ReactNode } from 'react';
import JsonLd from '@/components/JsonLd/JsonLd';
import CompletedJobsFeed from '@/components/CompletedJobsFeed/CompletedJobsFeed';
import Link from 'next/link';
import {
    ShieldCheck, Home, Car, TreeDeciduous, HeartHandshake, Droplets,
    Sofa, ArrowRight, Phone, Waves, Building2
} from 'lucide-react';
import { GUIDES, ALL_AREAS, CITY_LOCATIVE, CITY_GENITIVE, CITY_ACCUSATIVE } from './areaLinks';
import styles from './AreaPage.module.css';
import QuoteCard from '@/components/QuoteCard/QuoteCard';

export type AreaPageProps = {
    city: string;
    slug: string;
    intro: string;
    neighborhoods: string[];
    // Lokalni dio koji vrijedi samo za taj grad: stvaran posao, fotografije, video.
    // Bez izmišljenih poslova. Ako posla iz grada nema, tekst to kaže i vodi na najbliži.
    localSection?: ReactNode;
    // Pitanja koja vrijede samo za taj grad. Idu na stranicu i u FAQPage schemu.
    extraFaq?: { question: string; answer: string }[];
};

const services = [
    { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <ShieldCheck size={24} />, desc: 'Skidamo alge, mahovinu i crne tragove s fasade kuće.', link: 'Pranje fasade: cijena i postupak' },
    { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={24} />, desc: 'Betonske kocke, kamene ploče i prilazi bez nagažene prljavštine.', link: 'Pranje okućnice: cijena i postupak' },
    { title: 'Pranje terase', href: '/usluge/pranje-terasa', icon: <Droplets size={24} />, desc: 'Skidamo sivilo, alge i naslage s terasa i ploča.', link: 'Pranje terase: cijena i postupak' },
    { title: 'Pranje tlakavaca', href: '/usluge/pranje-tlakavaca', icon: <TreeDeciduous size={24} />, desc: 'Dvorišta, prilazi i staze bez mahovine i korova u fugama.', link: 'Pranje tlakavaca: cijena i postupak' },
    { title: 'Pranje vrućom vodom za tvrtke', href: '/usluge/poslovni-objekti', icon: <Building2 size={24} />, desc: 'Podovi, fasade, zidovi i stepeništa za tvrtke i ustanove, noću.', link: 'Pranje vrućom vodom za tvrtke i ustanove' },
    { title: 'Kemijsko čišćenje', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={24} />, desc: 'Garniture, madraci i tepisi, dubinsko čišćenje na vašoj adresi.', link: 'Kemijsko čišćenje namještaja: cijena' },
    { title: 'Detailing auta', href: '/usluge/detailing-automobila', icon: <Car size={24} />, desc: 'Vanjsko i unutarnje čišćenje uz dolazak na vašu adresu.', link: 'Detailing auta uz dolazak' },
    { title: 'Pranje bazena', href: '/usluge/pranje-bazena', icon: <Waves size={24} />, desc: 'Pripremamo bazen za sezonu kupanja.', link: 'Pranje bazena prije sezone' },
    { title: 'Grobna mjesta', href: '/usluge/odrzavanje-grobnih-mjesta', icon: <HeartHandshake size={24} />, desc: 'Trenutačno samo prijave na listu interesa.', link: 'Lista interesa za čišćenje groba' },
];

export default function AreaPage({ city, slug, intro, neighborhoods, localSection, extraFaq = [] }: AreaPageProps) {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com' },
            { '@type': 'ListItem', position: 2, name: city, item: `https://slaufismrk.com/podrucje/${slug}` },
        ],
    };

    const cityLoc = CITY_LOCATIVE[city] ?? city;
    const cityGen = CITY_GENITIVE[city] ?? city;
    const cityAcc = CITY_ACCUSATIVE[city] ?? city;

    // Tvrtka je jedna (HomeAndConstructionBusiness u layout.tsx, @id #business).
    // Stranica područja opisuje uslugu u tom gradu i referencira tvrtku, inače
    // Google vidi sedam tvrtki na istoj adresi s različitim imenima.
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `https://slaufismrk.com/podrucje/${slug}#service`,
        name: `Pranje pod tlakom u ${cityLoc}`,
        serviceType: 'Pranje pod tlakom',
        url: `https://slaufismrk.com/podrucje/${slug}`,
        provider: { '@id': 'https://slaufismrk.com/#business' },
        areaServed: { '@type': 'City', name: city },
    };

    const faq = [
        ...extraFaq,
        {
            question: `Koliko košta pranje fasade u ${cityLoc}?`,
            answer: `Cijena pranja fasade u ${cityLoc} kreće se od 5 €/m² (cijena na 10. 9. 2026.: 5–7 €/m²), ovisno o veličini, materijalu i stupnju zaprljanosti. Za točnu cijenu šaljemo procjenu na temelju slika ili dolazimo na lokaciju.`,
        },
        {
            question: `Koliko košta čišćenje okućnice u ${cityLoc}?`,
            answer: `Cijena čišćenja okućnice u ${cityLoc} kreće se od 4 €/m² (cijena na 10. 9. 2026.: 4–6 €/m²), ovisno o kvadraturi i materijalu. Za veće površine dajemo procjenu prije početka rada.`,
        },
        {
            question: `Koliko brzo dolazite u ${cityAcc}?`,
            answer: `Odgovaramo u roku od sat vremena, a termin dogovaramo prema vašoj dostupnosti. Za brzu okvirnu cijenu pošaljite slike fasade ili okućnice na WhatsApp.`,
        },
        {
            question: `Radite li i u okolnim naseljima oko ${cityGen}?`,
            answer: `Da, radimo u ${cityLoc} i okolnim naseljima: ${neighborhoods.slice(0, 4).join(', ')}, te šire područje po dogovoru.`,
        },
        {
            question: 'Mogu li kombinirati pranje fasade i okućnice u istom terminu?',
            answer: 'Da. Fasadu, okućnicu, terasu i prilaz najčešće peremo u istom dolasku, pa stroj i crijeva razvlačimo samo jednom.',
        },
    ];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: { '@type': 'Answer', text: item.answer },
        })),
    };

    return (
        <div className={styles.page}>
            <JsonLd data={breadcrumbSchema} />
            <JsonLd data={serviceSchema} />
            <JsonLd data={faqSchema} />

            <section className={styles.hero}>
                <div className="container">
                <div className={styles.heroGrid}>
                    <div>
                        <div className={styles.breadcrumb}>
                            <Link href="/">Početna</Link> › <span>{city}</span>
                        </div>
                        <h1>Pranje fasade i okućnice <span>u {cityLoc}</span></h1>
                        <p className={styles.heroIntro}>{intro}</p>
                        <a href="tel:+385958442806" className={styles.heroCta}>
                            <Phone size={18} /> Nazovite +385 95 844 2806
                        </a>
                    </div>
                    <QuoteCard
                        title={`Koliko košta pranje u ${cityLoc}?`}
                        location="podrucje"
                        service="facade"
                    />
                </div>
                </div>
            </section>
            <CompletedJobsFeed areaSlug={slug} />

            {localSection && (
                <section className={styles.local}>
                    <div className="container">
                        <div className={styles.localBody}>{localSection}</div>
                    </div>
                </section>
            )}

            <section className={styles.services}>
                <div className="container">
                    <h2>Što peremo u {cityLoc}</h2>
                    <div className={styles.grid}>
                        {services.map((s, i) => (
                            <Link key={i} href={s.href} className={styles.card}>
                                <div className={styles.cardIcon}>{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <span className={styles.cardLink}>{s.link} <ArrowRight size={14} /></span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.areas}>
                <div className="container">
                    <h2>Naselja i područja koja pokrivamo</h2>
                    <p className={styles.areasSubtitle}>Dolazimo u {cityLoc} i okolna naselja</p>
                    <div className={styles.tags}>
                        {neighborhoods.map((k, i) => (
                            <span key={i} className={styles.tag}>{k}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.faq}>
                <div className="container">
                    <h2>Česta pitanja o pranju u {cityLoc}</h2>
                    <div className={styles.faqList}>
                        {faq.map((item, i) => (
                            <div key={i} className={styles.faqItem}>
                                <h3 className={styles.faqQuestion}>{item.question}</h3>
                                <p className={styles.faqAnswer}>{item.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.links}>
                <div className="container">
                    <div className={styles.linksGrid}>
                        <div>
                            <h2>Korisni vodiči</h2>
                            <ul className={styles.linkList}>
                                {GUIDES.map((g) => (
                                    <li key={g.href}><Link href={g.href}>{g.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h2>Ostala područja</h2>
                            <ul className={styles.linkList}>
                                {ALL_AREAS.filter((a) => a.slug !== slug).map((a) => (
                                    <li key={a.slug}><Link href={`/podrucje/${a.slug}`}>Pranje fasade i okućnice {a.city}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>Trebate pranje fasade ili okućnice u {cityLoc}?</h2>
                        <p>Pošaljite 2-3 slike površine na WhatsApp za okvirnu cijenu, ili nazovite za besplatnu procjenu na licu mjesta.</p>
                        <div className={styles.ctaButtons}>
                            <a href="tel:+385958442806" className={styles.ctaBtn}>
                                <Phone size={18} /> +385 95 844 2806
                            </a>
                            <Link href="#procjena" className={styles.ctaBtnSecondary}>
                                Ispunite formu <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
