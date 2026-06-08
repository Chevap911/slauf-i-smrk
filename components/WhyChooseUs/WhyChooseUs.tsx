'use client';

import { motion } from 'framer-motion';
import { Users, Camera, BadgeEuro, Star } from 'lucide-react';
import HomepageMascot from '@/components/HomepageMascot/HomepageMascot';
import { homepageMascots } from '@/components/HomepageMascot/homepageMascots';
import styles from './WhyChooseUs.module.css';

const reasons = [
    {
        title: "Dvojica koja dođu i odrade",
        description: "Nema podizvođača ni rotacije ljudi. Mi koje vidite na slikama dolazimo, peremo i čistimo za sobom.",
        icon: <Users size={32} />
    },
    {
        title: "Fotografiramo prije i poslije",
        description: "Za veće zahvate dokumentiramo rezultat. Vidite točno što ste platili, bez priče na riječ.",
        icon: <Camera size={32} />
    },
    {
        title: "Točna cijena prije početka",
        description: "Dolazimo na besplatnu procjenu i dogovorimo fiksnu cijenu. Bez iznenađenja na fakturi.",
        icon: <BadgeEuro size={32} />
    },
    {
        title: "5,0 na Google-u, 40 recenzija",
        description: "Naši klijenti nas ocjenjuju najvišom ocjenom. Stvarne recenzije možete provjeriti na Google Mapsu.",
        icon: <Star size={32} />
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
