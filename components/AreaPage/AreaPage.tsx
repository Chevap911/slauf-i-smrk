import Link from 'next/link';
import {
    ShieldCheck, Home, Car, TreeDeciduous, HeartHandshake, Droplets,
    Sofa, ArrowRight, Phone, Waves
} from 'lucide-react';
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

const GUIDES = [
    { title: 'Koliko košta pranje fasade', href: '/blog/koliko-kosta-pranje-fasade' },
    { title: 'Kako oprati fasadu, vodič', href: '/blog/kako-oprati-fasadu' },
    { title: 'Crne fleke na fasadi', href: '/blog/crne-fleke-na-fasadi' },
    { title: 'Korov između tlakavaca', href: '/blog/korov-izmedju-tlakavaca' },
];

const ALL_AREAS = [
    { city: 'Zagreb', slug: 'zagreb' },
    { city: 'Sesvete', slug: 'sesvete' },
    { city: 'Velika Gorica', slug: 'velika-gorica' },
    { city: 'Samobor', slug: 'samobor' },
    { city: 'Zaprešić', slug: 'zapresic' },
    { city: 'Sveta Nedelja', slug: 'sveta-nedelja' },
    { city: 'Dugo Selo', slug: 'dugo-selo' },
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
        '@type': 'CleaningService',
        name: `Šlauf i Šmrk, pranje pod tlakom ${city}`,
        url: `https://slaufismrk.com/podrucje/${slug}`,
        telephone: '+385958442806',
        areaServed: { '@type': 'City', name: city },
        provider: { '@type': 'LocalBusiness', name: 'Šlauf i Šmrk', url: 'https://slaufismrk.com' },
    };

    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />

            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/">Početna</Link> › <span>{city}</span>
                    </div>
                    <h1>Visokotlačno Čišćenje <span>{city}</span></h1>
                    <p>{intro}</p>
                    <Link href="/#kontakt" className={styles.heroCta}>
                        <Phone size={18} /> Besplatna procjena
                    </Link>
                </div>
            </section>

            <section className={styles.services}>
                <div className="container">
                    <h2>Naše usluge u {city}</h2>
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
                    <p className={styles.areasSubtitle}>Dolazimo u {city} i okolna naselja</p>
                    <div className={styles.tags}>
                        {neighborhoods.map((k, i) => (
                            <span key={i} className={styles.tag}>{k}</span>
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
                        <h2>Trebate čišćenje u {city}?</h2>
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
