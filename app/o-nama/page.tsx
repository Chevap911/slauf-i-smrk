import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, ShieldCheck, Eye, Sparkles, MapPin, Star } from 'lucide-react';
import styles from './o-nama.module.css';

export const metadata: Metadata = {
    title: 'O nama — dvojica iza Šlauf i Šmrk | Pranje pod tlakom Zagreb',
    description: 'Šlauf i Šmrk su dvojica iz Zagreba specijalizirana za visokotlačno pranje fasada, okućnica i terasa. Siguran pristup, čista procjena prije rada i rezultat koji se vidi. 5,0 na Google recenzijama.',
    alternates: { canonical: '/o-nama' },
    openGraph: {
        title: 'O nama — dvojica iza Šlauf i Šmrk',
        description: 'Dvojica iz Zagreba specijalizirana za visokotlačno pranje fasada, okućnica i terasa. Čista procjena prije rada i rezultat koji se vidi.',
        url: 'https://slaufismrk.com/o-nama',
        images: [
            {
                url: '/prije-poslje/fasada-poslje.png',
                width: 1200,
                height: 630,
                alt: 'Šlauf i Šmrk, pranje fasade u Zagrebu',
            },
        ],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        {
            '@type': 'ListItem',
            position: 1,
            name: 'Početna',
            item: 'https://slaufismrk.com',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'O nama',
            item: 'https://slaufismrk.com/o-nama',
        },
    ],
};

const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'O nama — Šlauf i Šmrk',
    url: 'https://slaufismrk.com/o-nama',
    mainEntity: {
        '@type': 'LocalBusiness',
        name: 'Šlauf i Šmrk',
        url: 'https://slaufismrk.com',
        telephone: '+385958442806',
        email: 'slauf.i.smrk@gmail.com',
        areaServed: ['Zagreb', 'Velika Gorica', 'Samobor', 'Zaprešić', 'Sesvete', 'Dugo Selo'],
        employee: [
            { '@type': 'Person', name: 'Ivan', jobTitle: 'Suosnivač i izvođač' },
            { '@type': 'Person', name: 'Marko', jobTitle: 'Suosnivač i izvođač' },
        ],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '5.0',
            reviewCount: '40',
        },
    },
};

const values = [
    {
        icon: <Eye size={28} />,
        title: 'Čista procjena prije rada',
        desc: 'Dolazimo, pogledamo površinu i damo točnu cijenu. Bez iznenađenja na fakturi i bez "vidjet ćemo na kraju".',
    },
    {
        icon: <ShieldCheck size={28} />,
        title: 'Siguran pristup za svaki materijal',
        desc: 'Žbuka, ETICS, kamen, drvo i beton ne podnose isti tlak. Biramo tlak i sredstvo prema površini da ništa ne oštetimo.',
    },
    {
        icon: <Sparkles size={28} />,
        title: 'Rezultat koji se vidi',
        desc: 'Svaki veći posao dokumentiramo fotografijom prije i poslije. Ako rezultat nije čist, nije gotov.',
    },
];

export default function ONamaPage() {
    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />

            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.breadcrumb}>
                        <Link href="/">Početna</Link> › <span>O nama</span>
                    </div>
                    <h1>Dvojica iza <span>Šlauf i Šmrk</span></h1>
                    <p>
                        Šlauf i Šmrk nismo agencija ni veliki servis s call centrom. Dvojica smo iz Zagreba
                        koja peru fasade, okućnice i terase i koja se javljaju na telefon. Kad nas nazovete,
                        razgovarate s ljudima koji će raditi na vašoj kući.
                    </p>
                    <Link href="/#kontakt" className={styles.heroCta}>
                        <Phone size={18} /> Besplatna procjena
                    </Link>
                </div>
            </section>

            {/* Tim */}
            <section className={styles.team}>
                <div className="container">
                    <h2>Tko smo</h2>
                    <p className={styles.teamIntro}>
                        Pokrenuli smo Šlauf i Šmrk jer smo se naljutili na zapuštene fasade i prljave terase
                        koje godinama nitko ne dira. Vidjeli smo koliko jedan dan rada promijeni izgled kuće
                        i pretvorili to u posao koji radimo ozbiljno.
                    </p>

                    <div className={styles.duo}>
                        <div className={styles.member}>
                            <div className={styles.memberPhoto}>
                                <Image
                                    src="/characters/homepage/slauf-hands-on-hips.webp"
                                    alt="Ivan (Šlauf), jedan od dvojice iza Šlauf i Šmrk"
                                    width={1792}
                                    height={2400}
                                    className={styles.memberImg}
                                    sizes="(max-width: 768px) 140px, 220px"
                                />
                            </div>
                            <h3>Ivan — Šlauf</h3>
                            <p>
                                Na terenu, za peračem. Bira tlak i sredstvo prema materijalu i pazi
                                da svaki kvadrat bude čist, bez oštećenja fasade ili pločnika.
                            </p>
                        </div>

                        <div className={styles.member}>
                            <div className={styles.memberPhoto}>
                                <Image
                                    src="/characters/homepage/smrk-thumbs-up.webp"
                                    alt="Marko (Šmrk), jedan od dvojice iza Šlauf i Šmrk"
                                    width={1792}
                                    height={2400}
                                    className={styles.memberImg}
                                    sizes="(max-width: 768px) 140px, 220px"
                                />
                            </div>
                            <h3>Marko — Šmrk</h3>
                            <p>
                                Dogovor, procjena i komunikacija s klijentima. Javlja se na upite i pazi
                                da dogovoreno bude i odrađeno na vrijeme.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vrijednosti */}
            <section className={styles.values}>
                <div className="container">
                    <h2>Kako radimo</h2>
                    <div className={styles.grid}>
                        {values.map((v, i) => (
                            <div key={i} className={styles.card}>
                                <div className={styles.cardIcon}>{v.icon}</div>
                                <h3>{v.title}</h3>
                                <p>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust */}
            <section className={styles.trust}>
                <div className="container">
                    <div className={styles.trustGrid}>
                        <div className={styles.trustItem}>
                            <div className={styles.trustNumber}>
                                5,0 <Star size={22} fill="currentColor" />
                            </div>
                            <span>40 Google recenzija</span>
                        </div>
                        <div className={styles.trustItem}>
                            <div className={styles.trustNumber}><MapPin size={22} /> Zagreb</div>
                            <span>i okolica: V. Gorica, Samobor, Zaprešić, Sesvete</span>
                        </div>
                        <div className={styles.trustItem}>
                            <div className={styles.trustNumber}>Prije / poslije</div>
                            <span>Svaki veći posao dokumentiran fotografijom</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>Javite se dvojici koja će i raditi</h2>
                        <p>Pošaljite 2-3 slike površine na WhatsApp i javljamo okvirnu cijenu. Za veće objekte dolazimo na besplatnu procjenu.</p>
                        <div className={styles.ctaButtons}>
                            <a href="tel:+385958442806" className={styles.ctaBtn}>
                                <Phone size={18} /> +385 95 844 2806
                            </a>
                            <Link href="/#kontakt" className={styles.ctaBtnSecondary}>
                                Ispunite formu <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
