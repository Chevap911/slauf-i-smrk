import { Star } from 'lucide-react';
import styles from './LandingPage.module.css';

/**
 * Stvarna Google recenzija u lijevoj koloni heroja, samo na računalu. Tamo je forma
 * desno viša od teksta, pa je ispod gumba ostajalo ~300 px praznine. Na mobitelu se
 * ne prikazuje (recenzije su u svojoj sekciji niže).
 * Samo recenzije iz components/Testimonials (stvarne, s Googlea), nikad izmišljene.
 */
type Props = {
    text: string;
    name: string;
    meta: string;
};

export default function HeroReview({ text, name, meta }: Props) {
    return (
        <figure className={styles.heroReview}>
            <div className={styles.heroReviewStars} role="img" aria-label="5 od 5 zvjezdica">
                {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} size={16} fill="currentColor" aria-hidden="true" />
                ))}
            </div>
            <blockquote>&bdquo;{text}&ldquo;</blockquote>
            <figcaption>
                <strong>{name}</strong> · {meta}
            </figcaption>
        </figure>
    );
}
