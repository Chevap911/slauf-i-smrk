'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Home, Car, TreeDeciduous, HeartHandshake } from 'lucide-react';
import styles from './Services.module.css';

const services = [
    {
        title: "Pranje Fasada",
        description: "Uklanjamo alge, gljivice i mahovinu koji narušavaju izgled i oštećuju vašu fasadu. Vraćamo originalnu boju i sjaj te produljujemo životni vijek vašeg doma.",
        icon: <ShieldCheck size={32} />
    },
    {
        title: "Pranje Okućnica i Prilaza",
        description: "Visokotlačno čišćenje betonskih kocki, kamenih ploča i asfalta. Vraćamo prvobitnu ljepotu vašem vanjskom prostoru i uklanjamo nakupljenu prljavštinu i korov.",
        icon: <Home size={32} />
    },
    {
        title: "Čišćenje Kamenih Površina",
        description: "Profesionalno čišćenje kamenih klupica, kipova, stolova i drugih kamenih površina. Vraćamo im prvobitni sjaj i činimo ih ponosom vašeg vrta.",
        icon: <TreeDeciduous size={32} />
    },
    {
        title: "Detailing Auta",
        description: "Kompletna njega vozila: od dubinskog pranja interijera i kemijskog čišćenja do poliranja i zaštite laka. Vaš automobil će izgledati kao nov.",
        icon: <Car size={32} />
    },
    {
        title: "Održavanje Grobnih Mjesta",
        description: "Specijalizirana usluga čišćenja nadgrobnih ploča, uklanjanje mahovine i algi te impregnacija koja štiti površinu od budućih onečišćenja.",
        icon: <HeartHandshake size={32} />
    },
    {
        title: "Čišćenje Drvenih Površina",
        description: "Oživljavamo vaše drvene terase, ograde i namještaj uklanjajući sivilo i pripremajući ih za novu zaštitu od vremenskih uvjeta.",
        icon: <ShieldCheck size={32} />
    }
];

export default function Services() {
    return (
        <section id="usluge" className={styles.services}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.subtitle}>Naše Usluge</h2>
                    <p className={styles.sectionDesc}>
                        Specijalizirani smo za visokotlačno pranje svih vanjskih površina. Naša stručnost i ekološki prihvatljiva sredstva jamče vrhunske rezultate.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
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
                    ))}
                </div>
            </div>
        </section>
    );
}
