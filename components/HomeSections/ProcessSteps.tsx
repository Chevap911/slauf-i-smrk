import { ShieldCheck } from 'lucide-react';
import styles from './HomeSections.module.css';

// Tekstovi iz bivše sekcije "Zašto odabrati Šlauf i Šmrk" (WhyChooseUs), složeni redom posla
const KORACI = [
    {
        naslov: 'Pošaljite upit ili fotke',
        tekst: 'Preko forme, WhatsAppa ili poziva. S fotkama površine procjena ide brže.',
    },
    {
        naslov: 'Besplatna procjena i točna cijena',
        tekst: 'Dođemo na lokaciju ili procijenimo po fotkama. Cijenu znate prije početka, bez iznenađenja na računu.',
    },
    {
        naslov: 'Peremo osobno, bez podizvođača',
        tekst: 'S kim dogovorite posao, taj vam i dolazi: Ivan i Marko, s tlakom prilagođenim žbuci, kamenu, drvu ili pločicama.',
    },
    {
        naslov: 'Fotografije prije i poslije',
        tekst: 'Svaki posao fotografiramo prije i poslije, pa razliku vidite odmah.',
    },
];

export default function ProcessSteps() {
    return (
        <section className={`${styles.section} ${styles.alt}`} id="kako-radimo">
            <div className="container">
                <div className={styles.head}>
                    <span className={styles.eyebrow}>Kako radimo</span>
                    <h2 className={styles.title}>Pranje fasade i terase u Zagrebu, korak po korak</h2>
                </div>

                <ol className={styles.steps}>
                    {KORACI.map((korak, i) => (
                        <li key={korak.naslov} className={styles.step}>
                            <span className={styles.stepNum} aria-hidden="true">
                                {i + 1}
                            </span>
                            <div>
                                <h3 className={styles.stepTitle}>{korak.naslov}</h3>
                                <p className={styles.stepText}>{korak.tekst}</p>
                            </div>
                        </li>
                    ))}
                </ol>

                <div className={styles.guarantee}>
                    <ShieldCheck size={28} className={styles.guaranteeIcon} aria-hidden="true" />
                    <div>
                        <h3 className={styles.guaranteeTitle}>Garancija zadovoljstva</h3>
                        <p className={styles.guaranteeText}>
                            Ne obećavamo nemoguće, ali ne odlazimo dok niste zadovoljni obavljenim poslom.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
