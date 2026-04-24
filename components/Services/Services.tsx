'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Home, Car, TreeDeciduous, HeartHandshake } from 'lucide-react';
import Link from 'next/link';
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
import styles from './Services.module.css';

const services = [
    {
        title: "Pranje Fasada",
        description: "Uklanjamo alge, gljivice i mahovinu koji narušavaju izgled i oštećuju vašu fasadu. Vraćamo originalnu boju i sjaj te produljujemo životni vijek vašeg doma.",
        icon: <ShieldCheck size={32} />,
        href: "/usluge/pranje-fasade"
    },
    {
        title: "Pranje Okućnica i Prilaza",
        description: "Visokotlačno čišćenje betonskih kocki, kamenih ploča i asfalta. Vraćamo prvobitnu ljepotu vašem vanjskom prostoru i uklanjamo nakupljenu prljavštinu i korov.",
        icon: <Home size={32} />,
        href: "/usluge/pranje-okucnice"
    },
    {
        title: "Čišćenje Kamenih Površina",
        description: "Profesionalno čišćenje kamenih klupica, kipova, stolova i drugih kamenih površina. Vraćamo im prvobitni sjaj i činimo ih ponosom vašeg vrta.",
        icon: <TreeDeciduous size={32} />,
        href: "/usluge/ciscenje-kamenih-povrsina"
    },
    {
        title: "Pranje Auta Uz Dolazak",
        description: "Peremo auto iznutra i izvana dok smo već na vašoj lokaciji. Vanjsko pranje, kemijsko čišćenje sjedala i interijer. Bez dodatnog putnog troška.",
        icon: <Car size={32} />,
        href: "/usluge/detailing-automobila"
    },
    {
        title: "Održavanje Grobnih Mjesta",
        description: "Specijalizirana usluga čišćenja nadgrobnih ploča, uklanjanje mahovine i algi te impregnacija koja štiti površinu od budućih onečišćenja.",
        icon: <HeartHandshake size={32} />,
        href: "/usluge/odrzavanje-grobnih-mjesta"
    },
    {
        title: "Čišćenje Drvenih Površina",
        description: "Oživljavamo vaše drvene terase, ograde i namještaj uklanjajući sivilo i pripremajući ih za novu zaštitu od vremenskih uvjeta.",
        icon: <ShieldCheck size={32} />,
        href: "/usluge/ciscenje-drvenih-povrsina"
    }
];

const popularSearches = [
    { label: 'Pranje terasa Zagreb', href: '/usluge/pranje-terasa' },
    { label: 'Pranje tlakavaca Zagreb', href: '/usluge/pranje-tlakavaca' },
    { label: 'Pranje prilaza Zagreb', href: '/usluge/pranje-prilaza' },
    { label: 'Pranje fasade cijena', href: '/blog/koliko-kosta-pranje-fasade' },
    { label: 'Čišćenje okućnice cijena', href: '/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb' },
];

export default function Services() {
    return (
        <section id="usluge" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.headerCopy}>
                        <h2 className={styles.subtitle}>Naše Usluge</h2>
                        <p className={styles.sectionDesc}>
                            Specijalizirani smo za visokotlačno pranje svih vanjskih površina. Naša stručnost i ekološki prihvatljiva sredstva jamče vrhunske rezultate.
                        </p>
                    </div>

                    <HomepageMascot
                        src={homepageMascots.services.src}
                        alt={homepageMascots.services.alt}
                        className={styles.sectionMascot}
                    />
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className={styles.cardLink}>
                            <motion.div
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                            >
                                <div className={styles.iconWrapper}>{service.icon}</div>
                                <h3 className={styles.cardTitle}>{service.title}</h3>
                                <p className={styles.cardText}>{service.description}</p>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                <div style={{ textAlign: 'center', margin: '2rem 0' }}>
                    <a href="#kontakt" className="btn btn-primary">
                        Zatražite ponudu za vašu uslugu
                    </a>
                </div>

                <div className={styles.popularSearches}>
                    <span className={styles.popularLabel}>Najtraženije usluge i cijene:</span>
                    <div className={styles.popularLinks}>
                        {popularSearches.map((item) => (
                            <Link key={item.href} href={item.href} className={styles.popularLink}>
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
