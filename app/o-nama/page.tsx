import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, ArrowRight, ShieldCheck, Eye, Sparkles, MapPin, Star } from 'lucide-react';
import styles from './o-nama.module.css';

export const metadata: Metadata = {
    title: 'O nama, Ivan i Marko | Visokotlačno pranje fasada Zagreb | Šlauf i Šmrk',
    description: 'Iza Šlauf i Šmrka smo Ivan i Marko iz Zagreba, specijalizirani za visokotlačno pranje fasada, okućnica i terasa. Besplatna procjena, fiksna cijena prije početka i 5,0 na Google recenzijama.',
    alternates: { canonical: '/o-nama' },
    openGraph: {
        title: 'O nama, Ivan i Marko iza Šlauf i Šmrka',
        description: 'Ivan i Marko iz Zagreba, specijalizirani za visokotlačno pranje fasada, okućnica i terasa. Besplatna procjena i fiksna cijena prije početka rada.',
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
    name: 'O nama, Šlauf i Šmrk',
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
        desc: 'Svako pranje fasade, terase ili tlakavaca fotografiramo prije i poslije. Ako rezultat nije čist, nije gotov.',
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
                    <h1>Ivan i Marko iza <span>Šlauf i Šmrk</span></h1>
                    <p>
                        Šlauf i Šmrk nismo agencija ni veliki servis s call centrom. Mi smo Ivan i Marko
                        iz Zagreba, peremo fasade, okućnice i terase i javljamo se na telefon. Kad nas
                        nazovete, razgovarate s ljudima koji će raditi na vašoj kući.
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
                        Prijatelji smo već 25 godina, još od školskih klupa: Ivan s Jaruna, Marko s
                        Trešnjevke. Ivan je prije pet godina krenuo s kemijskim čišćenjem kaučeva, madraca
                        i tepiha kao dodatnom zaradom, a onda smo jedne večeri uz piće odlučili proširiti
                        posao. Ivan je donio iskustvo s čišćenjem, Marko web, kameru i marketing. Tako je
                        nastao Šlauf i Šmrk: servis za visokotlačno pranje fasada, okućnica i terasa u Zagrebu.
                    </p>
                    <p className={styles.teamIntro}>
                        A imena? Malo smo puniji, pa je Šlauf šatrovački za trbuh, a Šmrk se uz njega
                        jednostavno posložio. Nismo velika firma i ne glumimo da jesmo: očevi smo, muževi
                        i dugogodišnji prijatelji koji grade nešto svoje i drže se jednostavnog pravila,
                        napravi više nego što je naplaćeno.
                    </p>

                    <div className={styles.duo}>
                        <div className={styles.member}>
                            <div className={styles.memberPhoto}>
                                <Image
                                    src="/characters/homepage/slauf-hands-on-hips.webp"
                                    alt="Ivan (Šlauf), suosnivač Šlauf i Šmrka, pranje fasada Zagreb"
                                    width={1792}
                                    height={2400}
                                    className={styles.memberImg}
                                    sizes="(max-width: 768px) 140px, 220px"
                                />
                            </div>
                            <h3>Ivan (Šlauf)</h3>
                            <p>
                                S Jaruna, suprug i otac troje djece. U čišćenju je od početka: krenuo je
                                s kemijskim čišćenjem kaučeva, madraca i tepiha, a danas vodi dogovor,
                                procjene i teren. Javlja se na upite i pazi da dogovoreno bude i odrađeno
                                na vrijeme.
                            </p>
                        </div>

                        <div className={styles.member}>
                            <div className={styles.memberPhoto}>
                                <Image
                                    src="/characters/homepage/smrk-thumbs-up.webp"
                                    alt="Marko (Šmrk), suosnivač Šlauf i Šmrka, visokotlačno pranje Zagreb"
                                    width={1792}
                                    height={2400}
                                    className={styles.memberImg}
                                    sizes="(max-width: 768px) 140px, 220px"
                                />
                            </div>
                            <h3>Marko (Šmrk)</h3>
                            <p>
                                S Trešnjevke, suprug i otac jedne kćeri. Na terenu za peračem, a iza
                                ekrana za sve što vidite online: web, fotografije prije i poslije i
                                snimke s terena. Bira tlak i sredstvo prema materijalu da fasada ili
                                pločnik ostanu neoštećeni.
                            </p>
                        </div>
                    </div>

                    <div className={styles.story}>
                        <h3>Posao koji pamtimo</h3>
                        <p>
                            Jedan od prvih poslova: ogromna terasa kafića, a mi s malim kućnim peračem.
                            Trajalo je duplo duže nego što smo planirali i izgorjeli smo na suncu, ali
                            nismo otišli dok i zadnja ploča nije bila oprana. Danas imamo profesionalnu
                            opremu za visokotlačno pranje, ali pravilo je ostalo isto: ne odustajemo dok
                            površina nije čista.
                        </p>
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
                            <span>Svako pranje fotografirano prije i poslije</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.cta}>
                <div className="container">
                    <div className={styles.ctaBox}>
                        <h2>Javite se Ivanu i Marku izravno</h2>
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
