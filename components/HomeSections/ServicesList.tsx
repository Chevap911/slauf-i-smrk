import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import styles from './HomeSections.module.css';

// Iste usluge i poveznice kao bivša sekcija Services, opisi skraćeni na jedan redak
const USLUGE = [
    {
        naziv: 'Pranje fasada u Zagrebu',
        opis: 'Uklanjamo alge, gljivice i mahovinu i vraćamo boju žbuke.',
        href: '/usluge/pranje-fasade',
    },
    {
        naziv: 'Pranje okućnica i prilaza',
        opis: 'Betonske kocke, kamene ploče i asfalt bez nakupljene prljavštine i korova.',
        href: '/usluge/pranje-okucnice',
    },
    {
        naziv: 'Čišćenje kamenih površina',
        opis: 'Kamene klupe, stolovi i ploče s vraćenim prirodnim izgledom.',
        href: '/usluge/ciscenje-kamenih-povrsina',
    },
    {
        naziv: 'Čišćenje drvenih površina',
        opis: 'Drvene terase, ograde i namještaj bez sivila, spremni za novu zaštitu.',
        href: '/usluge/ciscenje-drvenih-povrsina',
    },
    {
        naziv: 'Održavanje grobnih mjesta',
        opis: 'Čišćenje nadgrobnih ploča, uklanjanje mahovine i algi te impregnacija.',
        href: '/usluge/odrzavanje-grobnih-mjesta',
    },
    {
        naziv: 'Pranje poslovnih objekata',
        opis: 'Fasade, parkirališta, skladišta i hale, i izvan radnog vremena.',
        href: '/usluge/poslovni-objekti',
    },
    {
        naziv: 'Pranje auta uz dolazak',
        opis: 'Auto peremo izvana i iznutra dok smo na vašoj lokaciji, bez putnog troška.',
        href: '/usluge/detailing-automobila',
    },
];

const NAJTRAZENIJE = [
    { label: 'Cjenik', href: '/cjenik' },
    { label: 'Pranje terasa Zagreb', href: '/usluge/pranje-terasa' },
    { label: 'Pranje tlakavaca Zagreb', href: '/usluge/pranje-tlakavaca' },
    { label: 'Pranje prilaza Zagreb', href: '/usluge/pranje-prilaza' },
    { label: 'Pranje fasade cijena', href: '/blog/koliko-kosta-pranje-fasade' },
    { label: 'Čišćenje okućnice cijena', href: '/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb' },
    { label: 'Kemijsko čišćenje cijena', href: '/blog/koliko-kosta-kemijsko-ciscenje-namjestaja' },
];

export default function ServicesList() {
    return (
        <section className={styles.section} id="usluge">
            <div className="container">
                <div className={styles.head}>
                    <span className={styles.eyebrow}>Usluge</span>
                    <h2 className={styles.title}>Usluge pranja i čišćenja u Zagrebu</h2>
                    <p className={styles.lead}>
                        Visokotlačno i softwash pranje u Zagrebu i okolici, uz tlak prilagođen svakom materijalu.
                    </p>
                </div>

                <ul className={styles.services}>
                    {USLUGE.map((usluga) => (
                        <li key={usluga.href}>
                            <Link href={usluga.href} className={styles.serviceLink}>
                                <span className={styles.serviceName}>{usluga.naziv}</span>
                                <span className={styles.serviceText}>{usluga.opis}</span>
                                <ChevronRight size={20} className={styles.serviceArrow} aria-hidden="true" />
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className={styles.chips}>
                    <span className={styles.chipsLabel}>Najtraženije usluge i cijene:</span>
                    {NAJTRAZENIJE.map((link) => (
                        <Link key={link.href} href={link.href} className={styles.chip}>
                            {link.label}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
