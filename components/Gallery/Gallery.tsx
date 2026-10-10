'use client';

import { useState, useEffect, useRef, type ReactNode } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';
import styles from './Gallery.module.css';

type Slika = {
    src: string;
    alt: string;
    /** Stvarne dimenzije datoteke, da lightbox dobije sliku iz optimizatora u pravom omjeru. */
    w: number;
    h: number;
    /** Vidljivi potpis: usluga i mjesto, samo ono što stoji u alt tekstu. */
    opis: string;
};

type Par = {
    prije: Omit<Slika, 'opis'>;
    poslije: Omit<Slika, 'opis'>;
    opis: string;
    /** CSS aspect-ratio obje fotke u paru */
    omjer: string;
    sizes: string;
    /** Uspravni par u grupi grobova zauzima lijevi stupac preko dva reda */
    visok?: boolean;
};

/* Prije i poslije (2026-10-10): u 6 mjeseci galerija je imala 10 prikaza i 0 klikova, a
   fotke nisu imale nijedan opis. Parovi idu prvi jer pokazuju rezultat, mreža ispod.
   Samo fotke koje web već predstavlja kao stvarne poslove: fasada i terase s naslovnice
   (components/HomeSections/ProofPairs.tsx), grob sa stranice usluge
   (app/usluge/odrzavanje-grobnih-mjesta, commit 2f01946). Altovi su prepisani doslovno. */
const PAROVI_FASADE_TERASE: Par[] = [
    {
        prije: { src: '/prije-poslje/fasada-prije.jpeg', alt: 'Fasada obiteljske kuće prije pranja, alge i sivilo na žbuci, Zagreb', w: 1200, h: 1600 },
        poslije: { src: '/prije-poslje/fasada-poslje.png', alt: 'Očišćena bijela fasada obiteljske kuće nakon visokotlačnog pranja, Zagreb', w: 551, h: 736 },
        opis: 'Pranje fasade obiteljske kuće, Zagreb',
        omjer: '3 / 4',
        sizes: '(max-width: 699px) 50vw, (max-width: 899px) 320px, 190px',
    },
    {
        prije: { src: '/prije-poslje/terasa-leggiero-prije-1.jpeg', alt: 'Terasa kafića prije čišćenja, mahovina i sive naslage na pločicama, Zagreb', w: 1200, h: 1600 },
        poslije: { src: '/prije-poslje/terasa-leggiero-poslje-1.jpeg', alt: 'Očišćena terasa kafića nakon visokotlačnog pranja pločica, Zagreb', w: 1200, h: 1600 },
        opis: 'Pranje terase kafića uz Family Mall, Zagreb',
        omjer: '3 / 4',
        sizes: '(max-width: 699px) 50vw, (max-width: 899px) 320px, 190px',
    },
    {
        prije: { src: '/prije-poslje/ciscenje-poda-terase-zagreb-prije.jpeg', alt: 'Pod terase prije čišćenja, prljave i sive pločice, Zagreb', w: 1050, h: 1400 },
        poslije: { src: '/prije-poslje/ciscenje-poda-terase-zagreb-poslje.jpeg', alt: 'Pod terase poslije čišćenja, čiste pločice, Zagreb', w: 1050, h: 1400 },
        opis: 'Čišćenje poda terase, Zagreb',
        omjer: '3 / 4',
        sizes: '(max-width: 699px) 50vw, (max-width: 899px) 320px, 190px',
    },
];

// Sve tri su s istog groba: pogled odozgo, bočna strana, stražnja strana spomenika
const PAROVI_GROB: Par[] = [
    {
        prije: { src: '/grob/grob-prije-ciscenja-korov-i-prljav-okvir.jpg', alt: 'Grob prije čišćenja, korov i trava umjesto cvijeća, prljav okvir', w: 844, h: 1500 },
        poslije: { src: '/grob/grob-poslije-ciscenja-bijeli-kulir.jpg', alt: 'Isti grob nakon čišćenja, bijeli kulir i očišćen granitni okvir', w: 844, h: 1500 },
        opis: 'Čišćenje groba, korov zamijenjen bijelim kulirom',
        omjer: '9 / 16',
        sizes: '(max-width: 699px) 50vw, (max-width: 899px) 320px, 240px',
        visok: true,
    },
    {
        prije: { src: '/grob/grob-bocna-strana-prije-ciscenja.jpg', alt: 'Bočna strana groba prije čišćenja, požutjela baza od teraca', w: 1600, h: 901 },
        poslije: { src: '/grob/grob-bocna-strana-poslije-ciscenja.jpg', alt: 'Bočna strana groba nakon čišćenja, svijetla baza i bijeli kulir', w: 1600, h: 901 },
        opis: 'Čišćenje groba, bočna strana i baza od teraca',
        omjer: '16 / 9',
        sizes: '(max-width: 699px) 50vw, (max-width: 899px) 320px, 330px',
    },
    {
        prije: { src: '/grob/spomenik-straznja-strana-prije-ciscenja.jpg', alt: 'Stražnja strana spomenika prije čišćenja, zeleni i tamni tragovi curenja', w: 1500, h: 845 },
        poslije: { src: '/grob/spomenik-straznja-strana-poslije-ciscenja.jpg', alt: 'Stražnja strana spomenika nakon čišćenja, jednolična svijetla površina', w: 1600, h: 901 },
        opis: 'Čišćenje spomenika, stražnja strana',
        omjer: '16 / 9',
        sizes: '(max-width: 699px) 50vw, (max-width: 899px) 320px, 330px',
    },
];

/* Kuracija 2026-07-04: 6 najjačih kadrova umjesto 9.
   Izbačeni: projekt-7 (duplikat projekta-1), projekt-3 (kauč, premračno,
   nečitljivo u gridu) i projekt-8 (noćna terasa, premračno). Akcijska fotka
   s brendiranom majicom ide prva.
   2026-07-13: dodane 3 fotke pranja fasade (Hrašće) jer galerija nije imala
   nijednu fasadu, a to je usluga #1 i H2 vodi s "pranje fasada".
   2026-10-10: vidljivi potpis ispod svake fotke. Alt za projekt-9 i projekt-1 je govorio
   o betonu, tlakavcima i betonskim kockama, a na fotkama su velike pločice terase. */
const projectImages: Slika[] = [
    { src: '/projekti/fasada-djelatnik-teleskopska-lanca-zagreb.jpeg', alt: 'Djelatnik Šlauf i Šmrk pere fasadu obiteljske kuće teleskopskom lancom, Zagreb', w: 1200, h: 1600, opis: 'Pranje fasade obiteljske kuće, Zagreb' },
    { src: '/assets/gallery-6.jpg', alt: 'Šlauf i Šmrk u akciji, visokotlačno pranje terase kafića Leggiero Zagreb', w: 3024, h: 4032, opis: 'Pranje terase kafića Leggiero, Zagreb' },
    { src: '/projekti/oprana-fasada-obiteljske-kuce-zagreb.jpeg', alt: 'Oprana bež fasada obiteljske kuće nakon pranja fasade, Zagreb', w: 1200, h: 1600, opis: 'Fasada obiteljske kuće nakon pranja, Zagreb' },
    { src: '/projekti/projekt-5.jpeg', alt: 'Pola oprano pola prljavo, kontrast visokotlačnog pranja pločica terase Zagreb', w: 1200, h: 1600, opis: 'Pranje pločica terase, pola oprano, Zagreb' },
    { src: '/projekti/pranje-fasade-prije-poslije-zagreb.jpeg', alt: 'Fasada prije i poslije pranja, uklonjene alge i sivilo sa žbuke, Zagreb', w: 901, h: 1600, opis: 'Pranje žbuke na fasadi, Zagreb' },
    { src: '/projekti/projekt-2.jpeg', alt: 'Pranje terase kavane Ravnice, čiste pločice poslije visokotlačnog čišćenja', w: 900, h: 1600, opis: 'Pranje terase kavane Ravnice' },
    { src: '/projekti/projekt-9.jpeg', alt: 'Visokotlačno pranje pločica terase u tijeku, projekt Šlauf i Šmrk Zagreb', w: 1600, h: 900, opis: 'Pranje pločica terase u tijeku, Zagreb' },
    { src: '/projekti/projekt-1.jpeg', alt: 'Terasa kafića Leggiero poslije pranja pločica, Zagreb', w: 1200, h: 1600, opis: 'Terasa kafića Leggiero nakon pranja, Zagreb' },
    { src: '/projekti/projekt-6.jpeg', alt: 'Visokotlačno pranje okućnice i dvorišta, projekt Šlauf i Šmrk', w: 1200, h: 1600, opis: 'Pranje okućnice, pločice u dvorištu' },
];

// 3 stupca od 900 px, 2 od 600 px, ispod toga jedan
const GRID_SIZES = '(max-width: 599px) 100vw, (max-width: 899px) 50vw, 370px';

type Props = {
    /** Kartica s formom između parova i mreže. Dolazi sa servera (app/galerija/page.tsx). */
    forma?: ReactNode;
};

export default function Gallery({ forma }: Props) {
    const [activeImg, setActiveImg] = useState<Slika | null>(null);
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!activeImg) return;
        // Fokus ide na "Zatvori", a nakon zatvaranja natrag na fotku s koje je otvoreno
        const prethodni = document.activeElement as HTMLElement | null;
        closeRef.current?.focus();
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveImg(null);
            // "Zatvori" je jedini gumb u prikazu, pa Tab ne smije pobjeći na stranicu ispod
            if (e.key === 'Tab') {
                e.preventDefault();
                closeRef.current?.focus();
            }
        };
        document.body.style.overflow = 'hidden';
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
            prethodni?.focus();
        };
    }, [activeImg]);

    const renderPar = (par: Par) => (
        <figure key={par.prije.src} className={`${styles.pair} ${par.visok ? styles.pairTall : ''}`}>
            <div className={styles.pairImgs}>
                {([['Prije', par.prije], ['Poslije', par.poslije]] as const).map(([oznaka, slika]) => (
                    <button
                        type="button"
                        key={oznaka}
                        className={styles.shot}
                        style={{ aspectRatio: par.omjer }}
                        onClick={() => setActiveImg({ ...slika, opis: `${oznaka}: ${par.opis}` })}
                        aria-label={`Povećaj sliku: ${slika.alt}`}
                    >
                        <span className={`${styles.tag} ${oznaka === 'Poslije' ? styles.tagAfter : ''}`}>{oznaka}</span>
                        <Image src={slika.src} alt={slika.alt} fill sizes={par.sizes} className={styles.shotImg} />
                    </button>
                ))}
            </div>
            <figcaption className={styles.caption}>{par.opis}</figcaption>
        </figure>
    );

    return (
        <>
            <section id="prije-poslije" className={styles.pairsSection}>
                <div className="container">
                    <div className={styles.header}>
                        <h2 className={styles.title}>Prije i poslije pranja: fasade, terase i grobovi u Zagrebu</h2>
                        <p className={styles.subtitle}>Isto mjesto snimljeno prije i poslije našeg posla.</p>
                    </div>

                    <h3 className={styles.groupTitle}>Fasade i terase</h3>
                    <div className={styles.pairs}>{PAROVI_FASADE_TERASE.map(renderPar)}</div>

                    <h3 className={styles.groupTitle}>Grobna mjesta</h3>
                    <div className={`${styles.pairs} ${styles.pairsGrob}`}>{PAROVI_GROB.map(renderPar)}</div>
                </div>
            </section>

            {forma && (
                <section className={styles.formSection} aria-label="Upit za procjenu">
                    <div className={`container ${styles.formWrap}`}>{forma}</div>
                </section>
            )}

            <section id="galerija" className={styles.section}>
                <div className="container">
                    <div className={styles.header}>
                        <h2 className={styles.title}>Pranje fasada, terasa i okućnica u Zagrebu: fotografije s posla</h2>
                        <p className={styles.subtitle}>Snimljeno za vrijeme i nakon pranja.</p>
                    </div>

                    <div className={styles.projectGrid}>
                        {projectImages.map((item) => (
                            <figure key={item.src} className={styles.projectItem}>
                                <button
                                    type="button"
                                    className={styles.projectImageWrapper}
                                    onClick={() => setActiveImg(item)}
                                    aria-label={`Povećaj sliku: ${item.alt}`}
                                >
                                    <Image
                                        src={item.src}
                                        alt={item.alt}
                                        fill
                                        sizes={GRID_SIZES}
                                        className={styles.projectImg}
                                    />
                                </button>
                                <figcaption className={styles.caption}>{item.opis}</figcaption>
                            </figure>
                        ))}
                    </div>
                </div>
            </section>

            {activeImg && (
                <div
                    className={styles.lightbox}
                    onClick={() => setActiveImg(null)}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Pregled slike"
                >
                    <button
                        ref={closeRef}
                        type="button"
                        className={styles.lightboxClose}
                        onClick={() => setActiveImg(null)}
                        aria-label="Zatvori"
                    >
                        <X size={28} />
                    </button>
                    <figure className={styles.lightboxFigure} onClick={(e) => e.stopPropagation()}>
                        {/* Iz optimizatora, ne izvorna datoteka: gallery-6.jpg je 1,9 MB */}
                        <Image
                            src={activeImg.src}
                            alt={activeImg.alt}
                            width={activeImg.w}
                            height={activeImg.h}
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            className={styles.lightboxImg}
                        />
                        <figcaption className={styles.lightboxCaption}>{activeImg.opis}</figcaption>
                    </figure>
                </div>
            )}
        </>
    );
}
