'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
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
    const isDragging = useRef(false);

    const getPercent = useCallback((clientX: number) => {
        const container = containerRef.current;
        if (!container) return;
        const rect = container.getBoundingClientRect();
        const x = clientX - rect.left;
        const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percent);
    }, []);

    // Pointer events on the document so drag works even if mouse leaves container
    useEffect(() => {
        const onPointerMove = (e: PointerEvent) => {
            if (!isDragging.current) return;
            e.preventDefault();
            getPercent(e.clientX);
        };
        const onPointerUp = () => {
            isDragging.current = false;
        };
        document.addEventListener('pointermove', onPointerMove, { passive: false });
        document.addEventListener('pointerup', onPointerUp);
        return () => {
            document.removeEventListener('pointermove', onPointerMove);
            document.removeEventListener('pointerup', onPointerUp);
        };
    }, [getPercent]);

    const handlePointerDown = (e: React.PointerEvent) => {
        e.preventDefault();
        isDragging.current = true;
        // Also update position immediately on click anywhere in container
        getPercent(e.clientX);
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
                onPointerDown={handlePointerDown}
            >
                {/* After image (full width background) */}
                <div className={styles.imageWrapper}>
                    <Image src={afterSrc} alt={afterAlt} fill className={styles.image} sizes="(max-width: 768px) 100vw, 50vw" priority />
                    <span className={styles.badge} style={{ right: '1rem', left: 'auto' }}>POSLIJE</span>
                </div>

                {/* Before image (clipped by slider) */}
                <div
                    className={styles.beforeWrapper}
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <Image src={beforeSrc} alt={beforeAlt} fill className={styles.image} sizes="(max-width: 768px) 100vw, 50vw" />
                    <span className={styles.badge} style={{ left: '1rem', right: 'auto' }}>PRIJE</span>
                </div>

                {/* Slider handle */}
                <div
                    className={styles.sliderLine}
                    style={{ left: `${sliderPosition}%` }}
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
