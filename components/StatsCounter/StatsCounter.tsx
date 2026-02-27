'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Sparkles, Home, ThumbsUp, CalendarDays } from 'lucide-react';
import styles from './StatsCounter.module.css';

interface Stat {
    value: number;
    suffix: string;
    label: string;
    icon: React.ReactNode;
}

const stats: Stat[] = [
    { value: 500, suffix: '+', label: 'Očišćenih površina', icon: <Sparkles size={28} /> },
    { value: 200, suffix: '+', label: 'Zadovoljnih klijenata', icon: <Home size={28} /> },
    { value: 100, suffix: '%', label: 'Pozitivnih recenzija', icon: <ThumbsUp size={28} /> },
    { value: 5, suffix: '+', label: 'Godina iskustva', icon: <CalendarDays size={28} /> },
];

function AnimatedNumber({ target, duration = 2 }: { target: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (!isInView) return;

        let startTime: number;
        const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) {
                requestAnimationFrame(step);
            }
        };
        requestAnimationFrame(step);
    }, [isInView, target, duration]);

    return <span ref={ref}>{count}</span>;
}

export default function StatsCounter() {
    return (
        <section className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className={styles.card}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                        >
                            <div className={styles.icon}>{stat.icon}</div>
                            <div className={styles.number}>
                                <AnimatedNumber target={stat.value} />
                                <span className={styles.suffix}>{stat.suffix}</span>
                            </div>
                            <p className={styles.label}>{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
