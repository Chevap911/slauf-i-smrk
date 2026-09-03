import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ShieldCheck, Home, Car, TreeDeciduous, HeartHandshake, Droplets,
    Sofa, ArrowRight, Phone, Waves
} from 'lucide-react';
import { GUIDES, ALL_AREAS } from '@/components/AreaPage/areaLinks';
import styles from './zagreb.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Pranje fasade i okućnice Zagreb | Šlauf i Šmrk',
    description: 'Visokotlačno pranje fasada, okućnica, kamenih i drvenih površina u Zagrebu. Besplatna procjena, pokrivamo sve kvartove.',
    alternates: { canonical: '/podrucje/zagreb' },
    openGraph: {
        title: 'Pranje fasade i okućnice Zagreb | Šlauf i Šmrk',
        description: 'Visokotlačno pranje fasada, okućnica i kamenih površina u Zagrebu, detailing auta.',
        url: 'https://slaufismrk.com/podrucje/zagreb',
        images: [OG_IMAGE],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com' },
        { '@type': 'ListItem', position: 2, name: 'Zagreb', item: 'https://slaufismrk.com/podrucje/zagreb' },
    ],
};

const faq = [
    {
        question: 'Koliko košta pranje fasade u Zagrebu?',
        answer: 'Cijena pranja fasade u Zagrebu kreće se od 5 €/m², ovisno o veličini, materijalu i stupnju zaprljanosti. Za točnu cijenu šaljemo procjenu na temelju slika ili dolazimo na lokaciju.',
    },
    {
        question: 'Koliko košta čišćenje okućnice u Zagrebu?',
        answer: 'Cijena čišćenja okućnice u Zagrebu kreće se od 4 €/m², ovisno o kvadraturi i materijalu. Za veće površine i pakete dajemo procjenu prije početka rada.',
    },
    {
        question: 'Koliko brzo dolazite u Zagrebu?',
        answer: 'Odgovaramo u roku od sat vremena, a termin dogovaramo prema vašoj dostupnosti. Za brzu okvirnu cijenu pošaljite slike fasade ili okućnice na WhatsApp.',
    },
    {
        question: 'Koje dijelove Zagreba pokrivate?',
        answer: 'Pokrivamo cijeli Zagreb: Špansko, Jarun, Trešnjevku, Maksimir, Dubravu, Sesvete i ostale kvartove, kao i Veliku Goricu, Samobor i Zaprešić.',
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

const services = [
    { title: 'Pranje Fasade', href: '/usluge/pranje-fasade', icon: <ShieldCheck size={24} />, desc: 'Uklanjamo alge, mahovinu i prljavštinu s fasade vaše kuće.' },
    { title: 'Pranje Okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={24} />, desc: 'Betonske kocke, kamene ploče, prilazi, vraćamo izvornu ljepotu.' },
    { title: 'Kemijsko Čišćenje', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={24} />, desc: 'Tepisi, garniture, madraci, dubinsko čišćenje na vašoj adresi.' },
    { title: 'Kamene Površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={24} />, desc: 'Klupice, stolovi, kipovi, staze, kamen će ponovno sjajiti.' },
    { title: 'Drvene Površine', href: '/usluge/ciscenje-drvenih-povrsina', icon: <Droplets size={24} />, desc: 'Terase, ograde i vrtni namještaj, uklanjamo sivilo drva.' },
    { title: 'Detailing Auta', href: '/usluge/detailing-automobila', icon: <Car size={24} />, desc: 'Kompletna njega vozila: čišćenje, poliranje i zaštita laka.' },
    { title: 'Pranje Bazena', href: '/usluge/pranje-bazena', icon: <Waves size={24} />, desc: 'Pripremite vaš bazen za sezonu kupanja.' },
    { title: 'Grobna Mjesta', href: '/usluge/odrzavanje-grobnih-mjesta', icon: <HeartHandshake size={24} />, desc: 'Dostojanstvena njega nadgrobnih spomenika.' },
];

const kvartovi = [
    'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
    'Trnje', 'Novi Zagreb', 'Črnomerec', 'Stenjevec', 'Podsused',
    'Velika Gorica', 'Samobor', 'Zaprešić',
];

export default function ZagrebPage() {
    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/">Početna</Link> › <span>Zagreb</span>
                    </div>
                    <h1>Pranje fasade i okućnice <span>u Zagrebu</span></h1>
                    <p>
                        Profesionalne usluge pranja fasade, okućnice i vanjskih površina u svim dijelovima
                        Zagreba i okolice. Od fasada u Španskom do dvorišta u Maksimiru, tu smo za vas.
                    </p>
                    <Link href="/#kontakt" className={styles.heroCta}>
                        <Phone size={18} /> Besplatna procjena
                    </Link>
                </div>
            </section>

            <section className={styles.services}>
                <div className="container">
                    <h2>Naše usluge u Zagrebu</h2>
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
                    <h2>Kvartovi i područja koja pokrivamo</h2>
                    <p className={styles.areasSubtitle}>Brza i pouzdana usluga u cijelom Zagrebu i bližoj okolici</p>
                    <div className={styles.tags}>
                        {kvartovi.map((k, i) => (
                            <span key={i} className={styles.tag}>{k}</span>
                        ))}
                    </div>
                </div>
            </section>

            <section className={styles.faq}>
                <div className="container">
                    <h2>Česta pitanja, Zagreb</h2>
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
                                {ALL_AREAS.filter((a) => a.slug !== 'zagreb').map((a) => (
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
                        <h2>Trebate čišćenje u Zagrebu?</h2>
                        <p>Nazovite nas ili ispunite kontakt formu za besplatnu procjenu. Odgovaramo u roku od sat vremena.</p>
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
