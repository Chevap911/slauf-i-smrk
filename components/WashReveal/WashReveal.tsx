'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';
import { Check, ArrowRight, Phone } from 'lucide-react';
import styles from './WashReveal.module.css';

interface WashRevealProps {
    before: string;
    after: string;
    beforeAlt: string;
    afterAlt: string;
    eyebrow: string;
    title: ReactNode;
    text: string;
    points: string[];
    caption: string;
    badgeTitle: string;
    badgeSub: string;
    /** Slika lijevo, tekst desno (desktop) */
    flip?: boolean;
}

function clamp(v: number, a: number, b: number) {
    return Math.max(a, Math.min(b, v));
}

function seg(p: number, a: number, b: number) {
    return clamp((p - a) / (b - a), 0, 1);
}

function easeInOut(t: number) {
    return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

export default function WashReveal({
    before,
    after,
    beforeAlt,
    afterAlt,
    eyebrow,
    title,
    text,
    points,
    caption,
    badgeTitle,
    badgeSub,
    flip = false,
}: WashRevealProps) {
    const pinRef = useRef<HTMLElement>(null);
    const dirtyRef = useRef<HTMLDivElement>(null);
    const cleanRef = useRef<HTMLDivElement>(null);
    const sheenRef = useRef<HTMLDivElement>(null);
    const dripsRef = useRef<HTMLDivElement>(null);
    const chipPrijeRef = useRef<HTMLSpanElement>(null);
    const chipPoslijeRef = useRef<HTMLSpanElement>(null);
    const badgeRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const pin = pinRef.current;
        if (!pin) return;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let navH = 70;
        let rafId = 0;
        let running = false;
        let target = 0;
        let current = 0;

        const measureNav = () => {
            const nav = document.querySelector('nav');
            navH = nav ? Math.round(nav.getBoundingClientRect().height) : 70;
            pin.style.setProperty('--wr-nav', `${navH}px`);
        };

        const render = (p: number) => {
            const w = easeInOut(seg(p, 0.1, 0.86));

            const edge = -14 + w * 128;
            const mask = `linear-gradient(to bottom, #000 ${edge - 11}%, transparent ${edge + 11}%)`;
            if (cleanRef.current) {
                cleanRef.current.style.maskImage = mask;
                cleanRef.current.style.webkitMaskImage = mask;
            }

            const sc = `scale(${1.045 - w * 0.045})`;
            if (dirtyRef.current) dirtyRef.current.style.transform = sc;
            if (cleanRef.current) cleanRef.current.style.transform = sc;

            const mid = w > 0.02 && w < 0.985 ? 1 : 0;
            if (sheenRef.current) {
                sheenRef.current.style.top = `${edge}%`;
                sheenRef.current.style.opacity = `${mid}`;
            }
            if (dripsRef.current) {
                dripsRef.current.style.top = `${edge + 4}%`;
                dripsRef.current.style.opacity = `${mid * 0.9}`;
            }

            if (chipPrijeRef.current) chipPrijeRef.current.style.opacity = `${1 - seg(w, 0.5, 0.75)}`;
            const po = seg(w, 0.62, 0.86);
            if (chipPoslijeRef.current) {
                chipPoslijeRef.current.style.opacity = `${po}`;
                chipPoslijeRef.current.style.transform = `translateY(${(1 - po) * 8}px)`;
            }

            const bo = seg(w, 0.88, 1);
            if (badgeRef.current) {
                badgeRef.current.style.opacity = `${bo}`;
                badgeRef.current.style.transform = `translateY(${(1 - bo) * 14}px)`;
            }
        };

        const loop = () => {
            if (!running) return;
            const rect = pin.getBoundingClientRect();
            const total = rect.height - (window.innerHeight - navH);
            target = total > 0 ? clamp((-rect.top + navH) / total, 0, 1) : 0;
            current = reduced ? target : current + (target - current) * 0.16;
            render(current);
            rafId = requestAnimationFrame(loop);
        };

        // rAF vrti samo dok je sekcija blizu viewporta
        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !running) {
                    running = true;
                    rafId = requestAnimationFrame(loop);
                } else if (!entry.isIntersecting && running) {
                    running = false;
                    cancelAnimationFrame(rafId);
                }
            },
            { rootMargin: '20% 0px 20% 0px' }
        );

        measureNav();
        render(0);
        io.observe(pin);
        window.addEventListener('resize', measureNav);

        return () => {
            running = false;
            cancelAnimationFrame(rafId);
            io.disconnect();
            window.removeEventListener('resize', measureNav);
        };
    }, []);

    return (
        <section ref={pinRef} className={`${styles.pin} ${flip ? styles.flip : ''}`}>
            <div className={styles.sticky}>
                <div className={`container ${styles.grid}`}>
                    <div className={styles.copy}>
                        <span className={styles.eyebrow}>
                            <span className={styles.dot} aria-hidden="true" />
                            {eyebrow}
                        </span>
                        <h2>{title}</h2>
                        <p className={styles.text}>{text}</p>
                        <ul className={styles.points}>
                            {points.map((point) => (
                                <li key={point}>
                                    <span className={styles.pointIcon}>
                                        <Check size={11} strokeWidth={3.4} aria-hidden="true" />
                                    </span>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <div className={styles.ctaRow}>
                            <a href="#kontakt" className={styles.cta}>
                                Zatražite besplatnu procjenu
                                <ArrowRight size={15} strokeWidth={2.6} aria-hidden="true" />
                            </a>
                            <a href="tel:+385958442806" className={styles.ctaPhone}>
                                <Phone size={15} strokeWidth={2.2} aria-hidden="true" />
                                095 844 2806
                            </a>
                        </div>
                    </div>

                    <div className={styles.stageWrap}>
                        <div className={styles.stage}>
                            <div className={styles.card}>
                                <div ref={dirtyRef} className={`${styles.ph} ${styles.dirty}`}>
                                    <Image
                                        src={before}
                                        alt={beforeAlt}
                                        fill
                                        sizes="(max-width: 860px) 80vw, 460px"
                                        quality={75}
                                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                                    />
                                </div>
                                <div ref={cleanRef} className={`${styles.ph} ${styles.clean}`}>
                                    <Image
                                        src={after}
                                        alt={afterAlt}
                                        fill
                                        sizes="(max-width: 860px) 80vw, 460px"
                                        quality={75}
                                        style={{ objectFit: 'cover', objectPosition: 'center top' }}
                                    />
                                </div>
                                <div ref={dripsRef} className={styles.drips} aria-hidden="true">
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                                <div ref={sheenRef} className={styles.sheen} aria-hidden="true" />
                                <span ref={chipPrijeRef} className={`${styles.chip} ${styles.chipPrije}`}>
                                    PRIJE
                                </span>
                                <span ref={chipPoslijeRef} className={`${styles.chip} ${styles.chipPoslije}`}>
                                    POSLIJE
                                </span>
                            </div>
                            <div ref={badgeRef} className={styles.badge}>
                                <span className={styles.badgeIcon}>
                                    <Check size={13} strokeWidth={3} aria-hidden="true" />
                                </span>
                                <span>
                                    <b>{badgeTitle}</b>
                                    <small>{badgeSub}</small>
                                </span>
                            </div>
                        </div>
                        <p className={styles.caption}>{caption}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
