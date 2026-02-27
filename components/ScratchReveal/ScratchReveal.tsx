'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Gift, X } from 'lucide-react';
import styles from './ScratchReveal.module.css';

interface ScratchRevealProps {
    /** Text hidden under the scratch area */
    revealText?: string;
    /** Label shown on top of the scratch area */
    label?: string;
}

export default function ScratchReveal({
    revealText = 'ŠLAUF5',
    label = '🧹 Očisti me!',
}: ScratchRevealProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isRevealed, setIsRevealed] = useState(false);
    const [showReward, setShowReward] = useState(false);
    const [percentScratched, setPercentScratched] = useState(0);
    const isDrawingRef = useRef(false);

    const CANVAS_WIDTH = 320;
    const CANVAS_HEIGHT = 160;
    const REVEAL_THRESHOLD = 50; // percent

    // Initialize canvas with "dirt" overlay
    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        // Draw "dirt" texture
        const gradient = ctx.createLinearGradient(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        gradient.addColorStop(0, '#6B4226');
        gradient.addColorStop(0.3, '#8B5E3C');
        gradient.addColorStop(0.6, '#5C3317');
        gradient.addColorStop(1, '#7A4B2A');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

        // Add noise/dirt spots
        for (let i = 0; i < 200; i++) {
            const x = Math.random() * CANVAS_WIDTH;
            const y = Math.random() * CANVAS_HEIGHT;
            const r = Math.random() * 8 + 2;
            ctx.beginPath();
            ctx.arc(x, y, r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${40 + Math.random() * 60}, ${30 + Math.random() * 40}, ${10 + Math.random() * 30}, ${0.3 + Math.random() * 0.4})`;
            ctx.fill();
        }

        // Draw label text on top
        ctx.font = 'bold 28px system-ui, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
        ctx.fillText(label, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);
    }, [label]);

    const calculateScratched = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const imageData = ctx.getImageData(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        const pixels = imageData.data;
        let transparent = 0;
        const total = CANVAS_WIDTH * CANVAS_HEIGHT;

        for (let i = 3; i < pixels.length; i += 4) {
            if (pixels[i] === 0) transparent++;
        }

        const percent = (transparent / total) * 100;
        setPercentScratched(percent);

        if (percent >= REVEAL_THRESHOLD && !isRevealed) {
            setIsRevealed(true);
            setShowReward(true);
            // Save to localStorage
            try {
                localStorage.setItem('slauf-scratch-revealed', 'true');
                localStorage.setItem('slauf-discount-code', revealText);
            } catch { /* SSR safe */ }
        }
    }, [isRevealed, revealText]);

    const scratch = useCallback((x: number, y: number) => {
        const canvas = canvasRef.current;
        if (!canvas || isRevealed) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 25, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';
    }, [isRevealed]);

    const getPosition = (e: React.MouseEvent | React.TouchEvent) => {
        const canvas = canvasRef.current;
        if (!canvas) return { x: 0, y: 0 };
        const rect = canvas.getBoundingClientRect();
        const scaleX = CANVAS_WIDTH / rect.width;
        const scaleY = CANVAS_HEIGHT / rect.height;
        if ('touches' in e) {
            return {
                x: (e.touches[0].clientX - rect.left) * scaleX,
                y: (e.touches[0].clientY - rect.top) * scaleY,
            };
        }
        return {
            x: (e.clientX - rect.left) * scaleX,
            y: (e.clientY - rect.top) * scaleY,
        };
    };

    const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
        isDrawingRef.current = true;
        const pos = getPosition(e);
        scratch(pos.x, pos.y);
    };

    const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDrawingRef.current) return;
        e.preventDefault();
        const pos = getPosition(e);
        scratch(pos.x, pos.y);
    };

    const handleEnd = () => {
        isDrawingRef.current = false;
        calculateScratched();
    };

    // Check if already revealed — use a ref to avoid re-render
    useEffect(() => {
        try {
            const revealed = localStorage.getItem('slauf-scratch-revealed') === 'true';
            if (revealed) {
                setIsRevealed(true);
            }
        } catch {
            // SSR safe
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className={styles.wrapper}>
            <motion.div
                className={styles.container}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className={styles.sparkleHeader}>
                    <Sparkles size={20} />
                    <span>Pronašli ste skriveni kupon!</span>
                    <Sparkles size={20} />
                </div>

                <div className={styles.scratchArea}>
                    {/* Revealed text underneath */}
                    <div className={styles.revealLayer}>
                        <Gift size={28} />
                        <span className={styles.code}>{revealText}</span>
                        <span className={styles.discount}>= 5% popusta</span>
                    </div>

                    {/* Scratch canvas on top */}
                    {!isRevealed && (
                        <canvas
                            ref={canvasRef}
                            className={styles.canvas}
                            onMouseDown={handleStart}
                            onMouseMove={handleMove}
                            onMouseUp={handleEnd}
                            onMouseLeave={handleEnd}
                            onTouchStart={handleStart}
                            onTouchMove={handleMove}
                            onTouchEnd={handleEnd}
                        />
                    )}
                </div>

                {!isRevealed && percentScratched > 0 && (
                    <div className={styles.progress}>
                        <div
                            className={styles.progressBar}
                            style={{ width: `${Math.min(percentScratched * 2, 100)}%` }}
                        />
                    </div>
                )}

                {isRevealed && (
                    <motion.p
                        className={styles.instructions}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        Unesite kod <strong>{revealText}</strong> u kontakt formu za 5% popusta! 🎉
                    </motion.p>
                )}
            </motion.div>

            {/* Reward popup */}
            <AnimatePresence>
                {showReward && (
                    <motion.div
                        className={styles.overlay}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className={styles.popup}
                            initial={{ scale: 0.5, y: 50 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.5, y: 50 }}
                        >
                            <button
                                className={styles.closeBtn}
                                onClick={() => setShowReward(false)}
                            >
                                <X size={20} />
                            </button>
                            <div className={styles.popupEmoji}>🎉</div>
                            <h3>Čestitamo!</h3>
                            <p>Očistili ste mrlju i otkrili kupon!</p>
                            <div className={styles.popupCode}>{revealText}</div>
                            <p className={styles.popupInfo}>
                                Unesite ovaj kod pri kontaktu za <strong>5% popusta</strong> na prvu uslugu.
                            </p>
                            <a href="#kontakt" className="btn btn-primary" onClick={() => setShowReward(false)}>
                                Iskoristi popust
                            </a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
