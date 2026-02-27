'use client';

import { useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './BeforeAfterSlider.module.css';

interface BeforeAfterSliderProps {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt?: string;
    afterAlt?: string;
    label?: string;
}

export default function BeforeAfterSlider({
    beforeSrc,
    afterSrc,
    beforeAlt = 'Prije čišćenja',
    afterAlt = 'Poslije čišćenja',
    label,
}: BeforeAfterSliderProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);
    const isDraggingRef = useRef(false);

    const updatePosition = useCallback((clientX: number) => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percent);
    }, []);

    const handleMouseDown = () => { isDraggingRef.current = true; };
    const handleMouseUp = () => { isDraggingRef.current = false; };
    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDraggingRef.current) updatePosition(e.clientX);
    };
    const handleTouchMove = (e: React.TouchEvent) => {
        updatePosition(e.touches[0].clientX);
    };

    return (
        <motion.div
            className={styles.wrapper}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
            {label && <h3 className={styles.label}>{label}</h3>}
            <div
                ref={containerRef}
                className={styles.container}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                onTouchMove={handleTouchMove}
            >
                {/* After image (full width background) */}
                <div className={styles.imageWrapper}>
                    <Image src={afterSrc} alt={afterAlt} fill className={styles.image} sizes="(max-width: 768px) 100vw, 600px" />
                    <span className={styles.badge} style={{ right: '1rem', left: 'auto' }}>POSLIJE</span>
                </div>

                {/* Before image (clipped by slider) */}
                <div
                    className={styles.beforeWrapper}
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image src={beforeSrc} alt={beforeAlt} fill className={styles.image} sizes="(max-width: 768px) 100vw, 600px" />
                    <span className={styles.badge} style={{ left: '1rem', right: 'auto' }}>PRIJE</span>
                </div>

                {/* Slider handle */}
                <div
                    className={styles.sliderLine}
                    style={{ left: `${sliderPosition}%` }}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}
                >
                    <div className={styles.handle}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                            <path d="M8 6l-4 6 4 6" />
                            <path d="M16 6l4 6-4 6" />
                        </svg>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
