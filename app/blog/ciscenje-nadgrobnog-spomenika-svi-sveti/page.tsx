import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import ArticleQuote from '@/components/ArticleQuote/ArticleQuote';
import { OG_IMAGE } from '@/lib/seo';

const SLUG = 'ciscenje-nadgrobnog-spomenika-svi-sveti';

export const metadata: Metadata = {
    title: 'Čišćenje nadgrobnog spomenika za Sve svete | Šlauf i Šmrk',
    description: 'Što prije Svih svetih očistiti sami, čime se oštećuje kamen i kada zvati nas. Čišćenje groba u Zagrebu od 250 € (na 10. 9. 2026.: od 250 €).',
    alternates: { canonical: `/blog/${SLUG}` },
    openGraph: {
        title: 'Čišćenje nadgrobnog spomenika prije Svih svetih',
        description: 'Vosak, mahovina i tamne pruge na kamenu: što možete sami, čime se kamen oštećuje i kada je pametnije zvati nas.',
        url: `https://slaufismrk.com/blog/${SLUG}`,
        type: 'article',
        images: [OG_IMAGE],
    },
};

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Čišćenje nadgrobnog spomenika prije Svih svetih', item: `https://slaufismrk.com/blog/${SLUG}` },
    ],
};

// FAQ: isti tekst stoji vidljivo na dnu stranice (site-check provjerava da se podudaraju).
const FAQ = [
    {
        q: 'Mogu li spomenik oprati peračem pod tlakom?',
        a: 'Možete, ali s udaljenosti, širokim mlazom i najnižim tlakom, i nikad po slovima i pozlati. Polirani mramor i rubovi ploča lako se oštete, pa kod vrijednog spomenika radije perite ručno ili nam se javite.',
    },
    {
        q: 'Kako skinuti vosak od lampiona s kamena?',
        a: 'Pustite da se vosak stvrdne, pa ga podignite plastičnom ili drvenom špatulom. Tanki ostatak omekšajte mlakom vodom i obrišite krpom. Nož i žičana četka ogrebu kamen.',
    },
    {
        q: 'Trebam li biti na groblju dok čistite?',
        a: 'Ne. Dovoljno je javiti groblje i položaj groba. Samo čišćenje traje 2 do 4 sata, a nakon posla šaljemo fotografije prije i poslije.',
    },
    {
        q: 'Koliko košta čišćenje nadgrobnog spomenika?',
        a: 'Jednostruki grob od 250 €, poliranje kamena od 150 € (cijene na 10. 9. 2026.: od 250 € i od 150 €). Dvostruki grob i grobnica idu po dogovoru, cijenu dajemo nakon fotografije groba.',
    },
];

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Čišćenje nadgrobnog spomenika prije Svih svetih: vodič',
        description: 'Što prije Svih svetih možete očistiti sami, čime se oštećuje kamen i kada je pametnije zvati nas.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-10-18',
        dateModified: '2026-10-18',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
    };

    const figure = { margin: 0 } as const;
    const img = { width: '100%', height: 'auto', borderRadius: '0.75rem' } as const;
    const cap = { fontSize: '0.85rem', color: '#666', marginTop: '0.35rem' } as const;
    const pair = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', margin: '1.25rem 0 2rem' } as const;

    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Vodič</span>
                        <h1>Čišćenje nadgrobnog spomenika prije Svih svetih: vodič</h1>
                        <p className={styles.meta}>Objavljeno 18. listopada 2026. · Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Tjedan prije Svih svetih na Mirogoju je gužva kao na placu. Ljudi nose kante, četke, lampione
                            i krizanteme, a uz pola grobova netko kleči i riba kamen. Mnogi tek tada vide koliko je
                            spomenik pozelenio otkad su zadnji put bili.
                        </p>
                        <p>
                            Ove godine Svi sveti padaju u nedjelju, 1. studenoga. Ako vam je čišćenje nadgrobnog spomenika
                            na popisu, ostalo je manje od dva tjedna. Ovdje je što možete napraviti sami i kada je
                            pametnije grob prepustiti nekome tko radi{' '}
                            <Link href="/usluge/odrzavanje-grobnih-mjesta" className={styles.inlineLink}>
                                održavanje grobnih mjesta
                            </Link>
                            .
                        </p>

                        <h2>Što možete očistiti sami</h2>
                        <p>
                            Za grob koji se čisti svake godine često je dovoljna mlaka voda, par kapi sredstva za posuđe
                            u kanti i mekana četka. Kamen prvo dobro namočite, četkajte u krugovima i na kraju obilno
                            isperite čistom vodom. Sapunica koja ostane na kamenu brzo skuplja novu prašinu.
                        </p>

                        <ArticleQuote
                            location="blog-grob-svi-sveti"
                            service="grave"
                            variant="diy"
                            title="Grob treba više od četke? Pošaljite fotku"
                            whatsappText="Pozdrav, zanima me čišćenje groba prije Svih svetih. Šaljem sliku i groblje."
                            whatsappLabel="Pošaljite sliku groba na WhatsApp"
                        />

                        <h3>Vosak od lampiona</h3>
                        <p>
                            Vosak koji se prelio preko ploče nemojte strugati nožem. Pričekajte da se potpuno stvrdne
                            (kocka leda to ubrza), pa ga podignite plastičnom ili drvenom špatulom. Tanki ostatak
                            omekšajte mlakom vodom i obrišite krpom.
                        </p>

                        <h3>Mahovina i tamne pruge</h3>
                        <p>
                            Svježu mahovinu skinut ćete četkom i vodom. Tamne pruge koje cure niz stražnju stranu
                            spomenika su alge koje su ušle u pore kamena, pa ih samo četkanje neće skinuti. Stariji
                            grobovi u Zagrebu često su od teraca, betona s kamenim zrncima, koji upija vodu i zato
                            brzo potamni.
                        </p>
                        <div style={pair}>
                            <figure style={figure}>
                                <Image src="/grob/spomenik-straznja-strana-prije-ciscenja.jpg" alt="Stražnja strana spomenika od teraca s tamnim prugama algi prije čišćenja" width={1500} height={845} style={img} sizes="(max-width: 768px) 50vw, 400px" />
                                <figcaption style={cap}>Prije: pruge algi niz teraco</figcaption>
                            </figure>
                            <figure style={figure}>
                                <Image src="/grob/spomenik-straznja-strana-poslije-ciscenja.jpg" alt="Ista stražnja strana spomenika nakon čišćenja, svijetli teraco bez pruga" width={1600} height={901} style={img} sizes="(max-width: 768px) 50vw, 400px" />
                                <figcaption style={cap}>Poslije</figcaption>
                            </figure>
                        </div>

                        <h2>Čime ćete oštetiti spomenik</h2>
                        <p>
                            Na grobovima koje čistimo često vidimo štetu od sredstava koja su trebala pomoći. Ovo nemojte
                            koristiti:
                        </p>
                        <ul>
                            <li><strong>Ocat i limunska kiselina</strong> nagrizaju mramor i vapnenac, a polirana površina ostane mutna.</li>
                            <li><strong>Varikina i klorna sredstva</strong> na poroznom kamenu ostavljaju blijede mrlje.</li>
                            <li><strong>Žičana četka i abrazivna spužva</strong> ogrebu poliranu površinu i pozlatu na slovima.</li>
                            <li><strong>Perač pod tlakom iz blizine</strong> može izbiti fugu i oštetiti rub ploče.</li>
                        </ul>
                        <p>
                            Ako se pozlata na slovima već ljušti, nemojte je četkati. Tu treba ručni rad, bez mlaza.
                        </p>

                        <h2>Kada je bolje zvati nas</h2>
                        <p>
                            Prašinu, lišće i malo voska riješit ćete sami. Za ovo treba oprema i iskustvo s kamenom:
                        </p>
                        <ul>
                            <li>spomenik nije čišćen više godina i kamen je siv ili zelen u dubini</li>
                            <li>na mramoru ili granitu su crne mrlje od lišaja</li>
                            <li>želite da kamen opet sjaji, pa treba poliranje</li>
                            <li>ne živite u Zagrebu ili vam je teško kleknuti uz grob</li>
                        </ul>
                        <p>
                            Grobove peremo niskim tlakom i sredstvima za kamen, a natpise, pozlatu i fotografije na
                            porculanu čistimo ručno. Cijeli postupak opisan je na stranici{' '}
                            <Link href="/usluge/odrzavanje-grobnih-mjesta" className={styles.inlineLink}>
                                održavanje grobnih mjesta
                            </Link>
                            . Jednostruki grob čistimo od 250 € (cijena na 10. 9. 2026.: od 250 €), poliranje kamena je od
                            150 € (cijena na 10. 9. 2026.: od 150 €), a dvostruki grob i grobnica idu po dogovoru. Što ulazi u
                            cijenu, piše u tekstu{' '}
                            <Link href="/blog/koliko-kosta-ciscenje-grobnog-mjesta" className={styles.inlineLink}>
                                koliko košta čišćenje grobnog mjesta
                            </Link>
                            .
                        </p>
                        <div style={pair}>
                            <figure style={figure}>
                                <Image src="/grob/grob-bocna-strana-prije-ciscenja.jpg" alt="Bočna strana okvira groba od teraca, požutjela i siva prije čišćenja" width={1600} height={901} style={img} sizes="(max-width: 768px) 50vw, 400px" />
                                <figcaption style={cap}>Prije: požutjeli okvir od teraca</figcaption>
                            </figure>
                            <figure style={figure}>
                                <Image src="/grob/grob-bocna-strana-poslije-ciscenja.jpg" alt="Isti okvir groba nakon čišćenja, s bijelim kulirom umjesto zemlje" width={1600} height={901} style={img} sizes="(max-width: 768px) 50vw, 400px" />
                                <figcaption style={cap}>Poslije, uz bijeli kulir</figcaption>
                            </figure>
                        </div>

                        <h2>Stignete li do Svih svetih?</h2>
                        <p>
                            Grobove čistimo grupno po groblju, pa termin ovisi o tome koliko je prijava za vaše groblje.
                            Inače od prijave do termina prođe 1 do 3 tjedna. Što prije pošaljete fotografiju i lokaciju
                            groba, veća je šansa da bude gotov do 1. studenoga. Točan termin potvrđujemo kad vidimo stanje
                            groba i unaprijed ga ne obećavamo.
                        </p>
                        <ol>
                            <li>Pošaljite 2 do 3 fotografije groba na WhatsApp i recite na kojem je groblju.</li>
                            <li>Javimo vam cijenu isti dan.</li>
                            <li>Uplatite predujam od 30 % i grob ide na listu za to groblje.</li>
                            <li>Nakon čišćenja dobivate fotografije prije i poslije, a ostatak plaćate kad ih vidite.</li>
                        </ol>

                        <h2>Često postavljana pitanja</h2>
                        <div className={styles.faq}>
                            {FAQ.map(({ q, a }) => (
                                <div className={styles.faqItem} key={q}>
                                    <h3>{q}</h3>
                                    <p>{a}</p>
                                </div>
                            ))}
                        </div>

                        <div className={styles.closing}>
                            <p>
                                Svi sveti su u nedjelju. Ako želite da grob vaših najbližih bude uredan do tada, javite
                                nam se ovaj tjedan s lokacijom i fotografijom groba.
                            </p>
                        </div>

                        <div className={styles.ctaBox}>
                            <h3>Zatražite cijenu za čišćenje groba</h3>
                            <p>
                                Pošaljite nam lokaciju i fotografije groba. Javimo cijenu isti dan, bez obveze.
                            </p>
                            <div className={styles.ctaButtons}>
                                <a href="https://wa.me/385958442806?text=Pozdrav%2C%20zanima%20me%20%C4%8Di%C5%A1%C4%87enje%20groba%20prije%20Svih%20svetih." target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                                    WhatsApp upit
                                </a>
                                <a href="tel:+385958442806" className={styles.ctaBtnSecondary}>
                                    <Phone size={16} /> +385 95 844 2806
                                </a>
                            </div>
                        </div>

                        <div className={styles.relatedPosts}>
                            <h3>Povezano</h3>
                            <ul>
                                <li>
                                    <Link href="/usluge/odrzavanje-grobnih-mjesta">
                                        <ArrowRight size={14} /> Usluga održavanja grobnih mjesta
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/koliko-kosta-ciscenje-grobnog-mjesta">
                                        <ArrowRight size={14} /> Koliko košta čišćenje grobnog mjesta?
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/usluge/ciscenje-kamenih-povrsina">
                                        <ArrowRight size={14} /> Čišćenje kamenih površina
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
