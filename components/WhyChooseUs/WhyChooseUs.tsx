'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, Clock, BadgeEuro, Search } from 'lucide-react';
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
import styles from './WhyChooseUs.module.css';

const reasons = [
    {
        title: "Iskustvo i stručnost",
        description: "Naš tim ima višegodišnje iskustvo u profesionalnom čišćenju svih vrsta površina.",
        icon: <Shield size={32} />
    },
    {
        title: "Moderna oprema",
        description: "Koristimo najsuvremeniju visokotlačnu opremu koja učinkovito uklanja i najtvrdokorniju prljavštinu.",
        icon: <Zap size={32} />
    },
    {
        title: "Ekološka sredstva",
        description: "Sva sredstva koja koristimo su biorazgradiva i sigurna za okoliš te vaše ljubimce.",
        icon: <CheckCircle size={32} />
    },
    {
        title: "Brza i pouzdana usluga",
        description: "Poštujemo vaše vrijeme i dogovorene rokove. Radimo efikasno bez kompromisa u kvaliteti.",
        icon: <Clock size={32} />
    },
    {
        title: "Konkurentne cijene",
        description: "Nudimo vrhunsku kvalitetu po pristupačnim cijenama prilagođenim vašim potrebama.",
        icon: <BadgeEuro size={32} />
    },
    {
        title: "Besplatna procjena",
        description: "Prije početka radova, dolazimo na besplatnu procjenu i dajemo točnu, transparentnu ponudu.",
        icon: <Search size={32} />
    }
];

export default function WhyChooseUs() {
    return (
        <section id="zasto-mi" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <div className={styles.headerCopy}>
                        <h2 className={styles.title}>Zašto odabrati nas?</h2>
                        <p className={styles.subtitle}>
                            5,0 na Googleu i 40 recenzija. Dvojica koja dođu, operu i dokumentiraju rezultat. Bez podizvođača i bez iznenađenja na fakturi.
                        </p>
                    </div>

                    <HomepageMascot
                        src={homepageMascots.whyChooseUs.src}
                        alt={homepageMascots.whyChooseUs.alt}
                        className={styles.sectionMascot}
                    />
                </div>

                <div className={styles.grid}>
                    {reasons.map((reason, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '0px 0px 200px 0px' }}
                            transition={{ duration: 0.5, delay: Math.min(index, 4) * 0.06 }}
                        >
                            <div className={styles.iconWrapper}>{reason.icon}</div>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>{reason.title}</h3>
                                <p className={styles.cardText}>{reason.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
