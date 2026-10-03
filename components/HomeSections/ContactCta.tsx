import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import QuoteForm from '@/components/QuoteForm/QuoteForm';
import styles from './HomeSections.module.css';

/**
 * Kontakt na dnu naslovnice (id="kontakt", na njega vode /kontakt i /#kontakt). Ista kratka
 * forma kao u heroju; do 4. 10. 2026. ovdje je bila druga forma u tri koraka.
 */
export default function ContactCta() {
    return (
        <section className={`${styles.section} ${styles.contact}`} id="kontakt">
            <div className={`container ${styles.contactGrid}`}>
                <div>
                    <h2 className={styles.title}>
                        Zatražite besplatnu procjenu <span className={styles.yellow}>pranja</span> u Zagrebu
                    </h2>
                    <p className={styles.lead}>
                        Upišite mobitel i površinu, okvirnu cijenu vidite čim pošaljete. Bez obveze.
                    </p>
                    <ul className={styles.contactList}>
                        <li>
                            <a href="tel:+385958442806">
                                <Phone size={20} className={styles.contactIcon} aria-hidden="true" />
                                +385 95 844 2806
                            </a>
                        </li>
                        <li>
                            <a href="mailto:slauf.i.smrk@gmail.com">
                                <Mail size={20} className={styles.contactIcon} aria-hidden="true" />
                                slauf.i.smrk@gmail.com
                            </a>
                        </li>
                        <li>
                            <Link href="/podrucje/zagreb">
                                <MapPin size={20} className={styles.contactIcon} aria-hidden="true" />
                                Zagreb i okolica
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles.formCard}>
                    <QuoteForm idPrefix="kontakt" hideHeading />
                </div>
            </div>
        </section>
    );
}
