'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Home, Car, TreeDeciduous, HeartHandshake, Building2 } from 'lucide-react';
import Link from 'next/link';
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
import styles from './Services.module.css';

const services = [
    {
        title: "Pranje fasada u Zagrebu",
        description: "Uklanjamo alge, gljivice i mahovinu koji narušavaju izgled i oštećuju vašu fasadu. Vraćamo originalnu boju i sjaj te produljujemo životni vijek vašeg doma.",
        icon: <ShieldCheck size={32} />,
        href: "/usluge/pranje-fasade"
    },
    {
        title: "Pranje okućnica i prilaza",
        description: "Visokotlačno čišćenje betonskih kocki, kamenih ploča i asfalta. Vraćamo prvobitnu ljepotu vašem vanjskom prostoru i uklanjamo nakupljenu prljavštinu i korov.",
        icon: <Home size={32} />,
        href: "/usluge/pranje-okucnice"
    },
    {
        title: "Čišćenje kamenih površina",
        description: "Profesionalno čišćenje kamenih klupica, kipova, stolova i drugih kamenih površina. Vraćamo im prvobitni sjaj i činimo ih ponosom vašeg vrta.",
        icon: <TreeDeciduous size={32} />,
        href: "/usluge/ciscenje-kamenih-povrsina"
    },
    {
        title: "Pranje auta uz dolazak",
        description: "Peremo auto iznutra i izvana dok smo već na vašoj lokaciji. Vanjsko pranje, kemijsko čišćenje sjedala i interijer. Bez dodatnog putnog troška.",
        icon: <Car size={32} />,
        href: "/usluge/detailing-automobila"
    },
    {
        title: "Održavanje grobnih mjesta",
        description: "Specijalizirana usluga čišćenja nadgrobnih ploča, uklanjanje mahovine i algi te impregnacija koja štiti površinu od budućih onečišćenja.",
        icon: <HeartHandshake size={32} />,
        href: "/usluge/odrzavanje-grobnih-mjesta"
    },
    {
        title: "Čišćenje drvenih površina",
        description: "Oživljavamo vaše drvene terase, ograde i namještaj uklanjajući sivilo i pripremajući ih za novu zaštitu od vremenskih uvjeta.",
        icon: <ShieldCheck size={32} />,
        href: "/usluge/ciscenje-drvenih-povrsina"
    },
    {
        title: "Pranje poslovnih objekata",
        description: "Vanjsko čišćenje fasada, parkirišta, skladišta i hala. Redoviti ugovori, račun za tvrtke, rad izvan radnog vremena. Za firme koje trebaju urednog i pouzdanog partnera.",
        icon: <Building2 size={32} />,
        href: "/usluge/poslovni-objekti"
    }
];

const popularSearches = [
    { label: 'Pranje terasa Zagreb', href: '/usluge/pranje-terasa' },
    { label: 'Pranje tlakavaca Zagreb', href: '/usluge/pranje-tlakavaca' },
    { label: 'Pranje prilaza Zagreb', href: '/usluge/pranje-prilaza' },
    { label: 'Pranje fasade cijena', href: '/blog/koliko-kosta-pranje-fasade' },
    { label: 'Čišćenje okućnice cijena', href: '/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb' },
    { label: 'Kemijsko čišćenje cijena', href: '/blog/koliko-kosta-kemijsko-ciscenje-namjestaja' },
];

export default function Services() {
    return (
        <section id="usluge" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.headerCopy}>
                        <h2 className={styles.subtitle}>Usluge pranja i čišćenja u Zagrebu</h2>
                        <p className={styles.sectionDesc}>
                            Visokotlačno i softwash pranje fasada, okućnica, terasa i tlakavaca u Zagrebu i okolici. Dolazimo na lokaciju i radimo prilagođenim tlakom za svaki materijal.
                        </p>
                    </div>

                    <HomepageMascot
                        inline
                        src={homepageMascots.services.src}
                        alt={homepageMascots.services.alt}
                        className={styles.sectionMascot}
                    />
                    <HomepageMascot
                        inline
                        src={homepageMascots.servicesRight.src}
                        alt={homepageMascots.servicesRight.alt}
                        className={styles.sectionMascotRight}
                    />
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <Link href={service.href} key={index} className={styles.cardLink}>
                            <motion.div
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                                transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.06 }}
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
