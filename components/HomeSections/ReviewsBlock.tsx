import { Star } from 'lucide-react';
import styles from './HomeSections.module.css';

// Stvarne Google recenzije (iste kao u bivšoj sekciji Testimonials), tri o vanjskom pranju
const RECENZIJE = [
    {
        ime: 'Kuki Baldo',
        posao: 'Pranje terase (80 m²)',
        tekst: 'Imam cca 80 m² terase uglavnom beton i pločice. Mislio sam da nije bila prljava. Ipak sam naručio čišćenje. Nakon što su je dečki očistili vidio sam koliko sam bio u krivu. Zahvalan sam na učinjenom poslu i toplo ih mogu preporučiti.',
    },
    {
        ime: 'Andrej Maroš',
        posao: 'Pranje okućnice',
        tekst: 'Dečki su brzi, ali efikasni. Okućnica nam je kao nova. Skinuli su i mrlje koje godinama nismo mogli ukloniti.',
    },
    {
        ime: 'Bogdan Janjanin',
        posao: 'Pranje pročelja i prilaza',
        tekst: 'Naručio sam čišćenje pročelja kuće i prilaza. Dečki su mrak. Mladi, brzi i odgovorni. Odrade sve po dogovoru, čak i više. Cijena i više nego pristupačna. Preporučujem svima.',
    },
];

const GOOGLE = 'https://www.google.com/maps/search/?api=1&query=%C5%A0lauf+i+%C5%A0mrk+Zagreb';

function Zvjezdice() {
    return (
        <span className={styles.stars} aria-label="5 od 5 zvjezdica">
            {[0, 1, 2, 3, 4].map((i) => (
                <Star key={i} size={18} fill="currentColor" aria-hidden="true" />
            ))}
        </span>
    );
}

export default function ReviewsBlock() {
    return (
        <section className={`${styles.section} ${styles.alt}`} id="recenzije">
            <div className="container">
                <div className={styles.head}>
                    <span className={styles.eyebrow}>Recenzije</span>
                    <h2 className={styles.title}>Recenzije za pranje fasada i terasa u Zagrebu</h2>
                </div>

                <div className={styles.reviewsWrap}>
                    <div>
                        <div className={styles.ratingNum}>5,0</div>
                        <Zvjezdice />
                        <p className={styles.ratingMeta}>40 recenzija na Googleu</p>
                        <a href={GOOGLE} target="_blank" rel="noopener noreferrer" className={`${styles.textLink} ${styles.ratingLink}`}>
                            Pročitajte ih na Googleu
                        </a>
                    </div>

                    <ul className={styles.reviews}>
                        {RECENZIJE.map((r) => (
                            <li key={r.ime} className={styles.review}>
                                <p className={styles.reviewText}>{r.tekst}</p>
                                <p className={styles.reviewWho}>
                                    <strong>{r.ime}</strong>, {r.posao}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
