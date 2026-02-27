import type { Metadata } from 'next';
import Link from 'next/link';
import {
    ShieldCheck, Home, Car, TreeDeciduous, HeartHandshake, Droplets,
    Sofa, ArrowRight, Phone, Waves
} from 'lucide-react';
import styles from './zagreb.module.css';

export const metadata: Metadata = {
    title: 'Visokotlačno Čišćenje Zagreb — Sve Usluge | Šlauf i Šmrk',
    description: 'Profesionalno visokotlačno čišćenje u Zagrebu — fasade, okućnice, kamene i drvene površine, detailing auta, kemijsko čišćenje tepiha. Pokrivamo sve kvartove.',
};

const services = [
    { title: 'Pranje Fasade', href: '/usluge/pranje-fasade', icon: <ShieldCheck size={24} />, desc: 'Uklanjamo alge, mahovinu i prljavštinu s fasade vaše kuće.' },
    { title: 'Pranje Okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={24} />, desc: 'Betonske kocke, kamene ploče, prilazi — vraćamo izvornu ljepotu.' },
    { title: 'Kemijsko Čišćenje', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={24} />, desc: 'Tepisi, garniture, madraci — dubinsko čišćenje na vašoj adresi.' },
    { title: 'Kamene Površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={24} />, desc: 'Klupice, stolovi, kipovi, staze — kamen će ponovno sjajiti.' },
    { title: 'Drvene Površine', href: '/usluge/ciscenje-drvenih-povrsina', icon: <Droplets size={24} />, desc: 'Terase, ograde i vrtni namještaj — uklanjamo sivilo drva.' },
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
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/">Početna</Link> › <span>Zagreb</span>
                    </div>
                    <h1>Visokotlačno Čišćenje <span>Zagreb</span></h1>
                    <p>
                        Profesionalne usluge čišćenja u svim dijelovima Zagreba i okolice.
                        Od fasada u Španskom do dvorišta u Maksimiru — tu smo za vas.
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
