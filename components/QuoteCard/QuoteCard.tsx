import { Star } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import styles from './QuoteCard.module.css';

/**
 * Forma u vrhu stranice usluge i stranice područja. Ista kartica kao hero forma na
 * naslovnici (components/Hero). Prije 28. 9. 2026. ove stranice su imale fotku desno,
 * a gumb za procjenu vodio je na dno naslovnice.
 */
const PER_M2 = ['facade', 'yard', 'terrace', 'pavers', 'driveway', 'stone', 'wood'];

type Props = {
    title: string;
    /** Kod za GTM i id polja, npr. "usluga-fasada". */
    location: string;
    service?: string;
    whatsappText?: string;
};

export default function QuoteCard({ title, location, service = '', whatsappText }: Props) {
    return (
        <div className={styles.card} id="procjena" data-service={service}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>Besplatna procjena</span>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>
                    {PER_M2.includes(service)
                        ? 'Upišite mobitel i kvadraturu, okvirnu cijenu vidite čim pošaljete. Bez obveze.'
                        : 'Ostavite mobitel i javimo vam se s cijenom. Brže ide ako pošaljete sliku na WhatsApp.'}
                </p>
                <p className={styles.trust}>
                    <Star size={14} fill="currentColor" aria-hidden="true" /> 5,0 na Googleu, 40 recenzija
                </p>
            </div>
            <div className={styles.body}>
                <QuoteForm idPrefix={location} hideHeading initialService={service} whatsappText={whatsappText} />
            </div>
        </div>
    );
}
