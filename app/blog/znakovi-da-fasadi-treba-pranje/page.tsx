import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: '5 znakova da fasadi treba pranje | Šlauf i Šmrk Zagreb',
    description:
        'Zelene mrlje, tamne pruge, loš miris. Fasada vam govori nešto. Otkrijte 5 jasnih znakova da je vrijeme za dubinsko pranje fasade u Zagrebu. Besplatna procjena!',
    alternates: { canonical: '/blog/znakovi-da-fasadi-treba-pranje' },
    openGraph: {
        title: '5 znakova da fasadi treba pranje | Šlauf i Šmrk Zagreb',
        description:
            'Zelene mrlje, tamne pruge, loš miris. Fasada vam govori nešto. Otkrijte 5 jasnih znakova da je vrijeme za dubinsko pranje fasade u Zagrebu.',
        url: 'https://slaufismrk.com/blog/znakovi-da-fasadi-treba-pranje',
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
            name: '5 znakova da fasadi treba pranje',
            item: 'https://slaufismrk.com/blog/znakovi-da-fasadi-treba-pranje',
        }
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline:
            '5 znakova da vašoj fasadi hitno treba dubinsko pranje (i što se dogodi ako to odgodite)',
        description:
            'Zelene mrlje, tamne pruge, loš miris. Fasada vam govori nešto. Otkrijte 5 jasnih znakova da je vrijeme za dubinsko pranje fasade u Zagrebu.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-04-13',
        dateModified: '2026-04-13',
        image: 'https://slaufismrk.com/blog/fasada-poslije-pranja.png',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://slaufismrk.com/blog/znakovi-da-fasadi-treba-pranje',
        },
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Koliko često treba prati fasadu kuće?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Za prosječnu obiteljsku kuću u zagrebačkoj regiji preporučujemo pranje svake 2 do 3 godine. Fasade na sjevernoj strani kuće ili u sjeni drveća mogu trebati čišćenje i svake dvije godine jer su stalno izložene vlazi koja potiče rast algi i mahovine.',
                },
            },
            {
                '@type': 'Question',
                name: 'Može li pranje fasade oštetiti boju ili stiropor?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Može, ali samo ako se radi s previsokim pritiskom ili krivom kemijom. Naša ekipa uvijek prilagođava pritisak i vrstu kemije tipu fasade. Za osjetljive stiropor fasade koristimo softwash metodu (niski pritisak, specijalizirana sredstva) koja je potpuno sigurna za izolaciju i boju.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta pranje fasade u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Okvirno, pranje fasade kreće se od 5 €/m². Točna cijena ovisi o veličini, pristupu, stupnju zaprljanosti i tipu fasade, zato za vaš dom dolazimo besplatno na procjenu.',
                },
            },
            {
                '@type': 'Question',
                name: 'Trebam li biti prisutan dok ekipa pere fasadu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Nije nužno da budete kod kuće cijelo vrijeme. Dovoljno je da nam osigurate pristup priključku za vodu i slobodan pristup oko kuće. Sve ostalo prepustite nama, javit ćemo se kad završimo.',
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
                        <span className={styles.category}>Savjeti za održavanje</span>
                        <h1>
                            5 znakova da vašoj fasadi hitno treba dubinsko pranje (i što se dogodi
                            ako to odgodite)
                        </h1>
                        <p className={styles.meta}>Objavljeno 13. travnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        {/* Uvod */}
                        <p>
                            Fasada je prva stvar koju susjedi, prolaznici i potencijalni kupci vaše
                            nekretnine vide. Ali za razliku od unutrašnjosti kuće, fasadu rijetko
                            čistimo dok problem ne postane toliko očit da ga se više ne može
                            ignorirati. I tu počinju problemi, jer alge, lišajevi i mahovina nisu
                            samo ružni, oni aktivno uništavaju materijal.
                        </p>
                        <p>
                            Evo pet konkretnih znakova da je vaša fasada počela vikati za pomoć.
                            Svaki tjedan odgađanja košta vas više.
                        </p>

                        {/* Znak #1 */}
                        <h2>Znak #1: Zelene ili crne mrlje koje se šire</h2>
                        <p>
                            Gledate u zid i vidite zelenkaste ili tamno sivkaste naslage? To nisu
                            mrlje od kiše. To su živi organizmi, alge i cijanobakterije, koji su
                            se uselili u vašu fasadu i svaki tjedan zauzimaju više teritorija.
                        </p>
                        <p>
                            Zašto je ovo problem koji ne smijete ignorirati: alge zadržavaju vlagu
                            uz fasadu. Vlaga prodire dublje u materijal, posebno kod stiropor fasada
                            (ETICS sustav). S vremenom to uzrokuje mrvljenje žbuke, a onda ulazite u
                            teritorij skupih obnova koje se mjere tisućama eura, ne stotinama.
                        </p>
                        <p>
                            <strong>Dobra vijest:</strong> Profesionalno{' '}
                            <Link href="/usluge/pranje-fasade">pranje fasade</Link> uz biorazgradiva
                            sredstva uklanja alge do korijena i sprječava ponovni rast na duže
                            vrijeme. Naša ekipa to rješava u nekoliko sati, bez oštećenja boje ili
                            izolacije.
                        </p>

                        {/* Znak #2 */}
                        <h2>Znak #2: Bijeli praškasti sloj na fasadi (efloreszencija)</h2>
                        <p>
                            Primjećujete bijeli, praškasti premaz koji &quot;izlazi&quot; iz zida?
                            Ovaj fenomen zove se efloreszencija. Soli iz zida izlaze na površinu
                            zajedno s vlagom i kristaliziraju se vani.
                        </p>
                        <p>
                            To vam govori jednu važnu stvar:{' '}
                            <strong>u vašem zidu ima previše vlage.</strong> Uzroci mogu biti
                            različiti - loša hidro-izolacija, oštećeni žljebovi, prljava fasada koja
                            zadržava vlagu - ali čišćenje je uvijek prvi korak dijagnoze i
                            rješavanja.
                        </p>
                        <p>
                            Ako se efloreszencija ignorira godinama, soli postupno razaraju
                            strukturu žbuke iznutra. Ono što danas izgleda kao kozmetički problem, za
                            2-3 sezone postaje strukturalno oštećenje.
                        </p>

                        {/* Znak #3 */}
                        <h2>Znak #3: Tamne vertikalne pruge ispod prozora i klima-uređaja</h2>
                        <p>
                            Vidite li tamne pruge koje teku od prozorskih klupica ili vanjske
                            jedinice klima-uređaja prema dolje? To nije samo prljavština, to je
                            kombinirano djelovanje rđe (od metalnih klupica), masnoće (od kondenzata
                            klime) i prašine iz zraka.
                        </p>
                        <p>
                            Ove mrlje <strong>ne odlaze same od sebe</strong> i s godinama se dublje
                            urezuju u poroznu površinu fasade. Na staroj žbuci mogu postati trajne
                            ako se predugo čeka.
                        </p>
                        <p>
                            Visokotlačno <Link href="/usluge/pranje-fasade">pranje fasade</Link> s
                            pravom kemijom uklanja ove naslage efikasno. Naša ekipa za Zagreb i
                            okolicu dolazi na besplatnu procjenu i odmah procjenjuje koji pristup je
                            prikladniji za vaš tip fasade. Ponekad je dovoljan niži pritisak s
                            kemijom (softwash metoda), a ponekad treba kombinirani pristup.
                        </p>

                        {/* Znak #4 */}
                        <h2>
                            Znak #4: Mahovina i lišajevi na sjevernoj strani ili u sjeni drveća
                        </h2>
                        <p>
                            Sjeverna strana kuće i dijelovi u sjeni drveća praktički nikada ne
                            dobivaju dovoljno sunca da se osuše, a vlaga je idealno stanište za
                            mahovinu i lišajeve. Lišajevi su posebno podmukli jer
                            probijaju korijenje u materijal fasade tražeći minerale.
                        </p>
                        <div className={styles.highlight}>
                            <p>
                                <strong>Naš savjet:</strong> Ako vidite lišajeve, ne pokušavajte ih
                                četkati sami. Mehanički pokušaj uklanjanja bez kemijskog tretmana
                                često samo rasijava spore i širi problem. Profesionalni tretman
                                uključuje biocidno sredstvo koje ubija organizam do korijena prije
                                nego što ga se fizički ukloni.
                            </p>
                        </div>
                        <p>
                            Imamo iskustva sa svim vrstama fasada u Zagrebu, od starih obiteljskih
                            kuća u Dubravi i Španskom do novijih zgrada u Sesvetama i Zaprešiću.
                            Sjever Hrvatske = puno vlage = puno mahovine. Znamo s čime imamo posla.
                        </p>

                        {/* Znak #5 */}
                        <h2>Znak #5: Fasada je jednostavno... siva i dosadna</h2>
                        <p>
                            Ovo je podcjenjen znak. Vaša fasada nije bila izvorno siva. Bila je
                            bijela, krem, žuta ili terakota. S godinama se prljavština, prašina,
                            ispušni plinovi i sitne čestice iz zraka talože u poroznu površinu i
                            fasada polagano mijenja boju.
                        </p>
                        <p>
                            Kad dođemo i operemo fasadu koja je &quot;samo malo prljava&quot;,
                            vlasnici su redovito u šoku od kontrasta. To nije samo čišćenje, to je
                            potpuno vraćanje boje.
                        </p>

                        <h3 className={styles.beforeAfterTitle}>Rezultat: Prije i nakon našeg pranja fasade</h3>
                        <div className={styles.beforeAfter}>
                            <div className={styles.beforeAfterItem}>
                                <span className={styles.beforeAfterBadge} data-type="before">PRIJE PRANJA</span>
                                <Image
                                    src="/blog/fasada-prije-pranja.jpeg"
                                    alt="Prljava siva fasada kuće s tamnim mrljama od vlage i algama prije pranja u Zagrebu"
                                    title="Izgled fasade s algama i prljavštinom prije pranja"
                                    width={600}
                                    height={800}
                                    className={styles.beforeAfterImg}
                                    loading="lazy"
                                />
                            </div>
                            <div className={styles.beforeAfterItem}>
                                <span className={styles.beforeAfterBadge} data-type="after">POSLIJE PRANJA</span>
                                <Image
                                    src="/blog/fasada-poslije-pranja.png"
                                    alt="Potpuno čista bijela fasada kuće nakon profesionalnog visokotlačnog pranja"
                                    title="Rezultat pranja: fasada čista, bijela i zaštićena - kao nova"
                                    width={600}
                                    height={800}
                                    className={styles.beforeAfterImg}
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <p>
                            <strong>Bonus:</strong> Čista fasada povećava tržišnu vrijednost
                            nekretnine. Ako razmišljate o prodaji ili najmu, pranje fasade jedna je
                            od investicija s najboljim povratom. Cijeli posao najčešće se obračunava
                            po rasponu od 5 €/m², a vizualni efekt je dramatičan.
                        </p>

                        {/* Što se dogodi ako odgodite */}
                        <h2>I što se dogodi ako ovo odgodite?</h2>
                        <p>
                            Jednostavno: problem raste, a cijena rješavanja raste s njim.
                        </p>
                        <p>
                            Alge i mahovina koje se danas uklanjaju visokotlačnim pranjem, za 2-3
                            godine mogu zahtijevati potpunu sanaciju fasade s impregnacijom ili čak
                            djelomičnim žbukanjem. Razlika između pranja (stotine eura) i sanacije
                            (tisuće eura) je samo - vrijeme.
                        </p>
                        <p>
                            Mi to vidimo svako proljeće. Dolazimo kod klijenta koji je &quot;čekao
                            da vidi&quot; i umjesto jednostavnog pranja, posao postaje dvostruko
                            zahtjevniji i skuplji. Nemojte biti taj klijent.
                        </p>

                        {/* FAQ */}
                        <div className={styles.faq}>
                            <h2>Često postavljana pitanja</h2>

                            <div className={styles.faqItem}>
                                <h3>Koliko često treba prati fasadu kuće?</h3>
                                <p>
                                    Za prosječnu obiteljsku kuću u zagrebačkoj regiji preporučujemo
                                    pranje svake 2 do 3 godine. Fasade na sjevernoj strani kuće ili
                                    u sjeni drveća mogu trebati čišćenje i svake dvije godine jer su
                                    stalno izložene vlazi koja potiče rast algi i mahovine.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>Može li pranje fasade oštetiti boju ili stiropor?</h3>
                                <p>
                                    Može, ali samo ako se radi s previsokim pritiskom ili krivom
                                    kemijom. Naša ekipa uvijek prilagođava pritisak i vrstu kemije
                                    tipu fasade. Za osjetljive stiropor fasade koristimo softwash
                                    metodu (niski pritisak, specijalizirana sredstva) koja je potpuno
                                    sigurna za izolaciju i boju.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>Koliko košta pranje fasade u Zagrebu?</h3>
                                <p>
                                    Okvirno, pranje fasade kreće se od 5 €/m². Cijena ovisi o
                                    veličini, pristupu, stupnju zaprljanosti i tipu fasade. Više detalja pročitajte u našem
                                    vodiču{' '}
                                    <Link href="/blog/koliko-kosta-pranje-fasade">
                                        koliko košta pranje fasade
                                    </Link>
                                    , a za točnu cijenu za vaš dom dolazimo besplatno na procjenu.
                                </p>
                            </div>

                            <div className={styles.faqItem}>
                                <h3>Trebam li biti prisutan dok ekipa pere fasadu?</h3>
                                <p>
                                    Nije nužno da budete kod kuće cijelo vrijeme. Dovoljno je da nam
                                    osigurate pristup priključku za vodu i slobodan pristup oko
                                    kuće. Sve ostalo prepustite nama, javit ćemo se kad završimo.
                                </p>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className={styles.ctaBox}>
                            <h3>Prepoznajete koji od ovih znakova na svojoj kući?</h3>
                            <p>
                                Ne čekajte do proljeća kad su termini puni. Ekipa Šlauf i Šmrk
                                dolazi na besplatnu procjenu bez ikakve obaveze. Vidimo stanje,
                                dajemo točnu cijenu, i ako se dogovorimo, dogovorimo se. Ako ne,
                                nema frke.
                            </p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={18} /> 095-844-2806
                                </a>
                                <Link href="/#kontakt" className={styles.ctaBtnSecondary}>
                                    Ispunite formu za procjenu <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
