import Link from 'next/link';
import {
    ShieldCheck, Home, Car, TreeDeciduous, HeartHandshake, Droplets,
    Sofa, ArrowRight, Phone, Waves
} from 'lucide-react';
import { GUIDES, ALL_AREAS, CITY_LOCATIVE, CITY_GENITIVE } from './areaLinks';
import styles from './AreaPage.module.css';

export type AreaPageProps = {
    city: string;
    slug: string;
    intro: string;
    neighborhoods: string[];
};

const services = [
    { title: 'Pranje Fasade', href: '/usluge/pranje-fasade', icon: <ShieldCheck size={24} />, desc: 'Uklanjamo alge, mahovinu i prljavštinu s fasade vaše kuće.' },
    { title: 'Pranje Okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={24} />, desc: 'Betonske kocke, kamene ploče, prilazi, vraćamo izvornu ljepotu.' },
    { title: 'Pranje Terase', href: '/usluge/pranje-terasa', icon: <Droplets size={24} />, desc: 'Skidamo sivilo, alge i naslage s terasa i ploča.' },
    { title: 'Pranje Tlakavaca', href: '/usluge/pranje-tlakavaca', icon: <TreeDeciduous size={24} />, desc: 'Dvorišta, prilazi i staze, čisto i bez korova u fugama.' },
    { title: 'Kemijsko Čišćenje', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={24} />, desc: 'Garniture, madraci i tepisi, dubinsko čišćenje na vašoj adresi.' },
    { title: 'Detailing Auta', href: '/usluge/detailing-automobila', icon: <Car size={24} />, desc: 'Vanjsko i unutarnje čišćenje uz dolazak na vašu adresu.' },
    { title: 'Pranje Bazena', href: '/usluge/pranje-bazena', icon: <Waves size={24} />, desc: 'Pripremamo bazen za sezonu kupanja.' },
    { title: 'Grobna Mjesta', href: '/usluge/odrzavanje-grobnih-mjesta', icon: <HeartHandshake size={24} />, desc: 'Čišćenje i impregnacija nadgrobnih spomenika.' },
];

export default function AreaPage({ city, slug, intro, neighborhoods }: AreaPageProps) {
    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com' },
            { '@type': 'ListItem', position: 2, name: city, item: `https://slaufismrk.com/podrucje/${slug}` },
        ],
    };

    const businessSchema = {
        '@context': 'https://schema.org',
        // "CleaningService" nije schema.org tip (isti fix kao u layout.tsx)
        '@type': 'HomeAndConstructionBusiness',
        name: `Šlauf i Šmrk, pranje pod tlakom ${city}`,
        url: `https://slaufismrk.com/podrucje/${slug}`,
        telephone: '+385958442806',
        areaServed: { '@type': 'City', name: city },
        provider: { '@type': 'LocalBusiness', name: 'Šlauf i Šmrk', url: 'https://slaufismrk.com' },
    };

    const cityLoc = CITY_LOCATIVE[city] ?? city;
    const cityGen = CITY_GENITIVE[city] ?? city;

    const faq = [
        {
            question: `Koliko košta pranje fasade u ${cityLoc}?`,
            answer: `Cijena pranja fasade u ${cityLoc} kreće se od 5 €/m², ovisno o veličini, materijalu i stupnju zaprljanosti. Za točnu cijenu šaljemo procjenu na temelju slika ili dolazimo na lokaciju.`,
        },
        {
            question: `Koliko košta čišćenje okućnice u ${cityLoc}?`,
            answer: `Cijena čišćenja okućnice u ${cityLoc} kreće se od 4 €/m², ovisno o kvadraturi i materijalu. Za veće površine i pakete dajemo procjenu prije početka rada.`,
        },
        {
            question: `Koliko brzo dolazite u ${cityLoc}?`,
            answer: `Odgovaramo u roku od sat vremena, a termin dogovaramo prema vašoj dostupnosti. Za brzu okvirnu cijenu pošaljite slike fasade ili okućnice na WhatsApp.`,
        },
        {
            question: `Radite li i u okolnim naseljima oko ${cityGen}?`,
            answer: `Da, radimo u ${cityLoc} i okolnim naseljima: ${neighborhoods.slice(0, 4).join(', ')}, te šire područje po dogovoru.`,
        },
        {
            question: 'Mogu li kombinirati pranje fasade i okućnice u istom terminu?',
            answer: 'Da, najčešći izbor je kombinacija fasade, okućnice, terase i prilaza u jednom terminu uz paketnu cijenu.',
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
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/">Početna</Link> › <span>{city}</span>
                    </div>
                    <h1>Pranje fasade i okućnice <span>u {cityLoc}</span></h1>
                    <p>{intro}</p>
                    <Link href="/#kontakt" className={styles.heroCta}>
                        <Phone size={18} /> Besplatna procjena
                    </Link>
                </div>
            </section>

            <section className={styles.services}>
                <div className="container">
                    <h2>Naše usluge u {cityLoc}</h2>
                    <div className={styles.grid}>
                        {services.map((s, i) => (
                            <Link key={i} href={s.href} className={styles.card}>
                                <div className={styles.cardIcon}>{s.icon}</div>
                                <h3>{s.title}</h3>
                                <p>{s.desc}</p>
                                <span className={styles.cardLink}>Saznajte više <ArrowRight size={14} /></span>
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
                    <h2>Česta pitanja, {city}</h2>
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
                                    <li key={a.slug}><Link href={`/podrucje/${a.slug}`}>Čišćenje {a.city}</Link></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>Trebate čišćenje u {cityLoc}?</h2>
                        <p>Pošaljite 2-3 slike površine na WhatsApp za okvirnu cijenu, ili nazovite za besplatnu procjenu na licu mjesta.</p>
                        <div className={styles.ctaButtons}>
                            <a href="tel:+385958442806" className={styles.ctaBtn}>
                                <Phone size={18} /> +385 95 844 2806
                            </a>
                            <Link href="/#kontakt" className={styles.ctaBtnSecondary}>
                                Ispunite formu <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
