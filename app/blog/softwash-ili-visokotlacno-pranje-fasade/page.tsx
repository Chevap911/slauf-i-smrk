import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Softwash ili visokotlačno pranje fasade? Vodič 2026 | Šlauf i Šmrk',
    description: 'Stiropor fasada ili kamen? Saznajte razliku između softwash i visokotlačnog pranja fasade i koji je pristup pravi za vaš dom. Besplatna procjena u Zagrebu.',
    alternates: { canonical: '/blog/softwash-ili-visokotlacno-pranje-fasade' },
    openGraph: {
        title: 'Softwash ili visokotlačno pranje fasade? Vodič 2026',
        description: 'Razlika između softwash i visokotlačnog pranja fasade, koji pristup je pravi za stiropor, kamen i žbuku.',
        url: 'https://slaufismrk.com/blog/softwash-ili-visokotlacno-pranje-fasade',
        type: 'article',
        images: [OG_IMAGE],
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
            item: 'https://slaufismrk.com/',
        },
        {
            '@type': 'ListItem',
            position: 2,
            name: 'Blog',
            item: 'https://slaufismrk.com/blog',
        },
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Softwash ili visokotlačno pranje fasade',
            item: 'https://slaufismrk.com/blog/softwash-ili-visokotlacno-pranje-fasade',
        }
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Softwash ili visokotlačno pranje fasade? Što je pravo za vaš dom',
        description: 'Vodič kroz razlike između softwash metode i visokotlačnog pranja fasade, koji pristup odabrati za stiropor, kamen ili žbuku.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-05-22',
        dateModified: '2026-05-22',
        image: 'https://slaufismrk.com/prije-poslje/fasada-poslje.png',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Koliko košta softwash pranje fasade u usporedbi s visokotlačnim?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Softwash tretman obično košta 10 do 20% više od standardnog visokotlačnog pranja jer uključuje specijalizirana kemijska sredstva. Za stiropor fasadu, to je svejedno isplativija opcija jer sprječava oštećenja koja bi sanacija koštala daleko više.',
                },
            },
            {
                '@type': 'Question',
                name: 'Može li softwash zamijeniti bojanje fasade?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Softwash ne može zamijeniti bojanje ako je boja fizički oguljela ili su vidljiva strukturalna oštećenja. Može produžiti rok između bojanja za 2 do 4 godine uklanjanjem organizama koji ubrzavaju propadanje boje.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko dugo traje efekt softwash tretmana?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Na fasadama koje nisu izložene stalnoj vlazi, efekt traje 3 do 5 godina. Fasade na sjevernoj strani kuće ili u sjeni drveća mogu trebati tretman svakih 2 do 3 godine.',
                },
            },
            {
                '@type': 'Question',
                name: 'Je li visoko tlačno pranje sigurno za sve vrste fasada?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nije. Visoki tlak iznad 80 bara može oštetiti stiropor fasade (ETICS sustav), tanke završne boje i osjetljive žbuke. Na tim površinama koristimo softwash ili nisko-tlačni pristup. Kamen, beton i keramika podnose viši pritisak bez problema.',
                },
            },
        ],
    };

    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Savjeti</span>
                        <h1>Softwash ili visokotlačno pranje fasade? Što je pravo za vaš dom</h1>
                        <p className={styles.meta}>Objavljeno 22. svibnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Stiropor fasada s zelenim algama i kameni zid s mahovinom izgledaju slično kao problem,
                            ali traže potpuno drugačiji pristup. Pogrešan odabir metode znači ili oštećenu izolaciju
                            ili neriješen problem koji se vraća za godinu dana. Evo kako razlučiti što je pravo za vaš dom.
                        </p>

                        <h2>Što je visokotlačno pranje fasade?</h2>
                        <p>
                            Visokotlačno pranje koristi pumpu koja vodu izbacuje pod pritiskom od 100 do 300 bara,
                            ovisno o površini i stupnju zaprljanosti. Prljavština se mehanički odljušti s površine,
                            bez kemije ili s minimalnom primjenom sredstava za čišćenje.
                        </p>
                        <p>
                            Visoki tlak radi odlično na tvrdim, neosjetljivim površinama: betonu, kamenu, keramici,
                            bazenu, popločanom drivewayu. Na ovakvim površinama voda prodre u pore i izbaci naslage
                            van bez ikakvih nuspojava.
                        </p>
                        <p>
                            Problem nastaje kad se ovaj pristup primjeni na stiropor fasadama. Pritisak iznad 80 bara
                            može probiti tanku završnu boju, oštetiti sloj stiropore ispod i stvoriti mikrootvore koji
                            upijaju vlagu. Ono što izgleda kao brzo i lako čišćenje postaje uvod u skupu sanaciju.
                        </p>

                        <h2>Što je softwash metoda?</h2>
                        <p>
                            Softwash (nisko-tlačno kemijsko čišćenje) koristi pritisak sličan vrtnom cijevu, između 30
                            i 60 bara, ali kombiniran sa specijaliziranim sredstvima koja djeluju na mikrobiološkoj razini.
                            Sredstvo se nanosi na fasadu, ostavi da djeluje 10 do 20 minuta i potom ispere. Alge, mahovina
                            i lišajevi umiru do korijena i lako se uklanjaju bez agresivnog pritiska.
                        </p>
                        <p>
                            Rezultat traje dulje od mehaničkog pranja jer je organizam uklonjen s korijenom, ne samo
                            s površine. Fasade tretirane softwash metodom tipično ostaju čiste 3 do 5 godina,
                            dok se mehanički oprane fasade mogu početi zeleniti za godinu-dvije ako spore ostanu u
                            porama materijala.
                        </p>

                        <h2>Koji pristup za kakvu fasadu?</h2>
                        <div className={styles.comparisonTable}>
                            <div className={styles.comparisonHeader}>
                                <span>Vrsta fasade</span>
                                <span>Preporučeni pristup</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Stiropor (ETICS sustav)</span>
                                <strong>Softwash</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Kamen</span>
                                <strong>Visoki tlak ili kombinirano</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Klasična žbuka</span>
                                <strong>Srednji tlak (80-120 bara)</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Drvo</span>
                                <strong>Softwash ili niski tlak</strong>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span>Beton / garaža</span>
                                <strong>Visoki tlak</strong>
                            </div>
                        </div>

                        <h2>Zašto je stiropor fasada poseban slučaj?</h2>
                        <p>
                            Stiropor fasade (ETICS sustav) dominiraju u novijoj gradnji po Sesvetama, Zaprešiću,
                            Velikoj Gorici i stambenim zonama Novog Zagreba. Gradnja od 1990-ih nadalje gotovo
                            uvijek znači stiropor izolaciju prekrivenu tankim završnim slojem boje debljine 2 do 4 mm.
                        </p>
                        <p>
                            Taj završni sloj ne tolerira agresivni pritisak. Kad se naruši, vlaga počne prodirati u
                            stiropor, koji se s vremenom raspada. Sanacija znači skidanje cijele fasade i ponovno
                            postavljanje izolacije, što za obiteljsku kuću iznosi 10.000 do 30.000 eura.
                        </p>
                        <p>
                            Naša ekipa uvijek procijeni tip fasade prije nego ikakva oprema krene raditi. Ako imate
                            stiropor fasadu, radimo isključivo softwash metodom. Više o tome što sve radimo možete
                            pročitati na stranici <Link href="/usluge/pranje-fasade">pranje fasade</Link>.
                        </p>

                        <h2>Što vidimo na terenu svake sezone?</h2>
                        <p>
                            Svako proljeće imamo iste dvije situacije. Prva: vlasnik je uzeo rent-a-car visokotlačni
                            perač i probao sam. Na kamenu ili betonu, to prođe odlično. Na stiropor fasadi, dođemo
                            i vidimo ožiljke u završnom sloju ili već aktivno prodiranje vlage.
                        </p>
                        <p>
                            Druga situacija: vlasnik je pitao prije nego što je krenuo i dobio pravi savjet. Softwash
                            tretman, fasada čista, problem riješen za 3 do 5 godina. Razlika u ukupnom trošku kroz
                            10 godina je višestruka.
                        </p>
                        <p>
                            Ako niste sigurni koji tip fasade imate ili koji pristup je prikladan za vaš slučaj,
                            slobodno pogledajte i naš post o tome{' '}
                            <Link href="/blog/znakovi-da-fasadi-treba-pranje">
                                koji znakovi govore da fasadi treba pranje
                            </Link>{' '}
                            - ondje objašnjavamo i kako procijeniti ozbiljnost problema.
                        </p>

                        <h2>Često postavljana pitanja</h2>

                        <h3>Koliko košta softwash pranje fasade u usporedbi s visokotlačnim?</h3>
                        <p>
                            Softwash tretman obično košta 10 do 20% više od standardnog visokotlačnog pranja jer
                            uključuje specijalizirana kemijska sredstva. Za stiropor fasadu to je svejedno isplativija
                            opcija jer sprječava oštećenja koja bi sanacija koštala daleko više. Detaljan cjenik
                            možete vidjeti u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link>.
                        </p>

                        <h3>Može li softwash zamijeniti bojanje fasade?</h3>
                        <p>
                            Softwash ne može zamijeniti bojanje ako je boja fizički oguljela ili su vidljiva
                            strukturalna oštećenja. Može produžiti rok između bojanja za 2 do 4 godine uklanjanjem
                            organizama koji ubrzavaju propadanje boje.
                        </p>

                        <h3>Koliko dugo traje efekt softwash tretmana?</h3>
                        <p>
                            Na fasadama koje nisu izložene stalnoj vlazi, efekt traje 3 do 5 godina. Fasade na
                            sjevernoj strani kuće ili u sjeni drveća mogu trebati tretman svakih 2 do 3 godine
                            jer su stalno izložene vlazi.
                        </p>

                        <h3>Je li visokotlačno pranje sigurno za sve vrste fasada?</h3>
                        <p>
                            Nije. Visoki tlak iznad 80 bara može oštetiti stiropor fasade, tanke završne boje i
                            osjetljivije žbuke. Na tim površinama koristimo softwash ili nisko-tlačni pristup.
                            Kamen, beton i keramika bez problema podnose viši pritisak.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Niste sigurni što vam treba?</h3>
                            <p>Dođemo, pogledamo fasadu i kažemo vam točno koji pristup je pravi za vaš dom. Bez obveze.</p>
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
                </div>
            </article>
        </div>
    );
}
