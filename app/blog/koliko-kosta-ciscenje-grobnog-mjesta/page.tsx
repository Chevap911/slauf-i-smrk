import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Čišćenje grobnog mjesta Zagreb, cijene 2026 | Šlauf i Šmrk',
    description: 'Čišćenje grobnih mjesta u Zagrebu: jednostruki grob od 250 €, dvostruki od 300 €. Poliranje, impregnacija, Mirogoj i sva groblja.',
    alternates: { canonical: '/blog/koliko-kosta-ciscenje-grobnog-mjesta' },
    openGraph: {
        title: 'Koliko košta čišćenje grobnog mjesta? Cijene 2026.',
        description: 'Realne cijene čišćenja nadgrobnih spomenika u Zagrebu. Jednostruki grob od 250 €, dvostruki od 300 €. Bez skrivenih troškova.',
        url: 'https://slaufismrk.com/blog/koliko-kosta-ciscenje-grobnog-mjesta',
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
            name: 'Koliko košta čišćenje grobnog mjesta',
            item: 'https://slaufismrk.com/blog/koliko-kosta-ciscenje-grobnog-mjesta',
        }
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Koliko košta čišćenje grobnog mjesta? Cijene održavanja spomenika u Zagrebu 2026.',
        description: 'Cijene profesionalnog čišćenja grobnih mjesta u Zagrebu: od 250 € za jednostruki grob. Poliranje, impregnacija i sva zagrebačka groblja.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-07-08',
        dateModified: '2026-07-08',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Koliko košta čišćenje grobnog mjesta u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Čišćenje jednostrukog grobnog mjesta kreće od 250 €, dvostrukog od 300 €. Poliranje kamena se naplaćuje od 150 €, a impregnacija od 50 €. Konačna cijena ovisi o veličini, vrsti kamena i stupnju zaprljanosti.',
                },
            },
            {
                '@type': 'Question',
                name: 'Trebam li biti na groblju za vrijeme čišćenja?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ne. Dovoljno je da nam javite lokaciju grobnog mjesta (groblje, polje, red i broj). Nakon čišćenja šaljemo fotografije prije i poslije kao dokaz obavljenog posla.',
                },
            },
            {
                '@type': 'Question',
                name: 'Na kojim grobljima u Zagrebu radite?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pokrivamo sva veća zagrebačka groblja: Mirogoj, Miroševac, Markovo Polje, Krematorij, Brestje i okolna groblja po dogovoru.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko vremena treba da se očisti grobno mjesto?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Samo čišćenje traje 2 do 4 sata, ovisno o veličini i zaprljanosti. Organiziramo terminski po groblju: kad se skupi 10+ prijava za isto groblje, zakazujemo dan. Standardni rok od prijave do čišćenja je 1 do 3 tjedna.',
                },
            },
            {
                '@type': 'Question',
                name: 'Hoće li čišćenje oštetiti natpise ili fotografije na spomeniku?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Ne. Koristimo niski tlak i sredstva prilagođena vrsti kamena. Natpise, fotografije i pozlatu tretiramo ručno, bez kontakta s visokotlačnim mlazom.',
                },
            },
        ],
    };

    return (
        <div className={styles.page}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
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
                        <span className={styles.category}>Cijene usluga</span>
                        <h1>Koliko košta čišćenje grobnog mjesta? Cijene održavanja spomenika u Zagrebu 2026.</h1>
                        <p className={styles.meta}>Objavljeno 8. srpnja 2026. · Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Jednog dana smo pakirali opremu ispred zgrade, spremali se na posao. Susjeda nas je
                            zaustavila. Rekla je da već mjesecima pokušava organizirati čišćenje grobnog mjesta,
                            ali da jednostavno ne može. Prestara je da sama kleči i riblje kamen, a nema koga
                            zamoliti. Pitala nas je radimo li i grobna mjesta.
                        </p>
                        <p>
                            Rekli smo da da. I tako je počelo.
                        </p>
                        <p>
                            Ta situacija nije rijetka. Ljudi koji žive izvan Zagreba, iseljenici u Njemačkoj ili
                            Irskoj, starije osobe koje fizički više ne mogu, obitelji koje nemaju vremena jer
                            trče između posla i djece. Svi bi htjeli da grob njihovih najbližih izgleda uredno.
                            Većina ne zna da postoji usluga koja to rješava za njih, s fotografijama prije i poslije
                            kao dokazom.
                        </p>
                        <p>
                            U ovom tekstu donosimo konkretne cijene čišćenja grobnih mjesta u Zagrebu, što sve
                            usluga uključuje i kako funkcionira rezervacija.
                        </p>

                        <h2>Cijene čišćenja grobnih mjesta u Zagrebu</h2>
                        <p>
                            Sve cijene su za kompletno čišćenje: spomenik, ploča, obrubi, posude za cvijeće i
                            okolna površina oko groba. Predujam za rezervaciju je 30%, ostatak se plaća tek
                            nakon što dobijete fotografije rezultata.
                        </p>

                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Jednostruki grob (čišćenje)</span>
                                <strong>od 250 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Dvostruki grob ili grobnica</span>
                                <strong>od 300 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Poliranje kamena (mramor, granit)</span>
                                <strong>od 150 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Impregnacija (zaštita 2-3 godine)</span>
                                <strong>od 50 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Čišćenje + poliranje + impregnacija (komplet)</span>
                                <strong>od 400 €</strong>
                            </div>
                        </div>

                        <p>
                            Konačna cijena ovisi o veličini spomenika, vrsti kamena i tome koliko je zaprljano.
                            Granit s mahovinom koja je ušla u pore traži više vremena od glatkog mramora s
                            površinskim nakupinama. Kad nam pošaljete fotografiju groba, dajemo vam točnu cijenu
                            prije nego potvrdite rezervaciju.
                        </p>

                        <h2>Što utječe na cijenu?</h2>

                        <h3>Vrsta kamena</h3>
                        <p>
                            Mramor je porozan i upija vlagu, pa se mahovina i lišajevi brže uhvate. Granit je
                            otporniji, ali kad se naslage jednom pojave, teže se skidaju jer prodru u mikropore.
                            Vapnenac je najosjetljiviji i zahtijeva posebno blaga sredstva. Za svaki tip kamena
                            koristimo drugačiji pristup, sredstvo i razinu tlaka. O razlikama u čišćenju
                            kamenih površina više smo pisali na stranici{' '}
                            <Link href="/usluge/ciscenje-kamenih-povrsina" className={styles.inlineLink}>
                                čišćenje kamenih površina
                            </Link>.
                        </p>

                        <h3>Stupanj zaprljanosti</h3>
                        <p>
                            Grob koji se redovito održava (jednom godišnje čišćenje) košta manje jer su naslage
                            površinske. Grob koji nije čišćen pet ili više godina ima duboko usađenu mahovinu,
                            crne mrlje od lišajeva i kalcifikacije koje zahtijevaju višestruko tretiranje.
                        </p>

                        <h3>Dodatne usluge: poliranje i impregnacija</h3>
                        <p>
                            Samo čišćenje uklanja prljavštinu. Poliranje vraća sjaj mramoru i granitu, pa
                            spomenik izgleda kao nov. Impregnacija nanosi zaštitni sloj koji odbija vodu i
                            usporava nakupljanje mahovine sljedećih 2 do 3 godine. Kombinacija čišćenja,
                            poliranja i impregnacije daje najduži efekt i isplati se više nego samo čišćenje
                            svake godine.
                        </p>

                        <h2>Kako funkcionira rezervacija?</h2>
                        <p>
                            Čišćenje grobnih mjesta organiziramo grupno po groblju. Kad se na listi skupi 10
                            ili više prijava za isto groblje, zakazujemo dan i odlazimo. Tako držimo cijene
                            pristupačnima, jer dolazak na groblje za samo jedno grobno mjesto ne bi bio
                            ekonomičan ni za nas ni za vas.
                        </p>
                        <p>
                            Postupak izgleda ovako:
                        </p>
                        <ol>
                            <li>Javite nam lokaciju groba (groblje, polje, red, broj). Ako ne znate sve podatke, pomoći ćemo.</li>
                            <li>Pošaljite 2-3 fotografije trenutnog stanja (WhatsApp je najbrži).</li>
                            <li>Dajemo vam točnu cijenu i pisanu potvrdu.</li>
                            <li>Uplatite predujam (30%). Stavljamo vas na listu za to groblje.</li>
                            <li>Kad se lista popuni, zakazujemo termin (rok: 1 do 3 tjedna).</li>
                            <li>Čistimo, fotografiramo i šaljemo vam slike prije i poslije.</li>
                            <li>Plaćate ostatak tek kad vidite rezultat.</li>
                        </ol>
                        <p>
                            Sve detalje o postupku, opremi i specifičnim grobljima možete pročitati na{' '}
                            <Link href="/usluge/odrzavanje-grobnih-mjesta" className={styles.inlineLink}>
                                stranici usluge održavanja grobnih mjesta
                            </Link>.
                        </p>

                        <h2>Na kojim grobljima u Zagrebu radimo?</h2>
                        <p>
                            Pokrivamo sva veća zagrebačka groblja:
                        </p>
                        <ul>
                            <li><strong>Mirogoj</strong></li>
                            <li><strong>Miroševac</strong></li>
                            <li><strong>Markovo Polje</strong></li>
                            <li><strong>Krematorij</strong> (urne i kazete)</li>
                            <li><strong>Brestje</strong></li>
                            <li>Groblja u okolici{' '}
                                <Link href="/podrucje/zagreb" className={styles.inlineLink}>Zagreba</Link>,{' '}
                                <Link href="/podrucje/velika-gorica" className={styles.inlineLink}>Velikoj Gorici</Link>,{' '}
                                <Link href="/podrucje/samobor" className={styles.inlineLink}>Samoboru</Link> i{' '}
                                <Link href="/podrucje/zapresic" className={styles.inlineLink}>Zaprešiću</Link> po dogovoru
                            </li>
                        </ul>

                        <h2>Zašto koristimo niski tlak?</h2>
                        <p>
                            Nadgrobni spomenici su osjetljivi. Visoki tlak (onaj koji koristimo za{' '}
                            <Link href="/usluge/pranje-fasade" className={styles.inlineLink}>pranje fasade</Link>{' '}
                            ili{' '}
                            <Link href="/usluge/pranje-okucnice" className={styles.inlineLink}>pranje okućnice</Link>)
                            može oštetiti polirani mramor, izbrisati pozlatu na natpisima ili napuknut tanke rubove.
                        </p>
                        <p>
                            Na grobnim mjestima radimo s niskim tlakom i sredstvima za kamen koja razgrađuju
                            mahovinu i lišajeve bez mehaničkog oštećenja. Natpise, fotografije na porculanu i
                            pozlatu tretiramo isključivo ručno, nježno, bez kontakta s mlazom.
                        </p>

                        <h2>Za koga je ova usluga?</h2>
                        <p>
                            Većina ljudi koji nas kontaktiraju spadaju u jednu od ovih situacija:
                        </p>
                        <ul>
                            <li>Iseljenici koji žive izvan Hrvatske i ne mogu redovito posjećivati groblje</li>
                            <li>Starije osobe kojima je fizički teško čistiti kamen</li>
                            <li>Obitelji koje žele da grob izgleda uredno za blagdane (Svi sveti, godišnjice)</li>
                            <li>Ljudi koji upravo nemaju vremena, a ne žele da grob bude zapušten</li>
                        </ul>
                        <p>
                            Zajedničko im je isto: žele da grob njihovih najbližih bude dostojanstven, ali im
                            treba netko pouzdan tko će to obaviti umjesto njih. Fotografije prije i poslije
                            koje šaljemo nakon svakog čišćenja tu rade razliku, jer vidite točno što je napravljeno
                            bez da morate dolaziti na groblje.
                        </p>

                        <h2>Česta pitanja o čišćenju grobnih mjesta</h2>
                        <div className={styles.faq}>
                            <div className={styles.faqItem}>
                                <h3>Koliko košta čišćenje grobnog mjesta u Zagrebu?</h3>
                                <p>
                                    Jednostruki grob od 250 €, dvostruki ili grobnica od 300 €. Poliranje
                                    kamena od 150 €, impregnacija od 50 €. Točnu cijenu za vaš slučaj dajemo
                                    nakon što pošaljete fotografiju groba.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Trebam li biti na groblju za vrijeme čišćenja?</h3>
                                <p>
                                    Ne. Dovoljno je da nam javite lokaciju grobnog mjesta. Nakon čišćenja
                                    šaljemo fotografije prije i poslije kao dokaz obavljenog posla.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Na kojim grobljima radite?</h3>
                                <p>
                                    Sva veća zagrebačka groblja: Mirogoj, Miroševac, Markovo Polje, Krematorij,
                                    Brestje. Okolna groblja (Velika Gorica, Samobor, Zaprešić) po dogovoru.
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Koliko traje čišćenje jednog groba?</h3>
                                <p>
                                    Samo čišćenje 2 do 4 sata, ovisno o veličini i zaprljanosti. Od prijave do
                                    termina prođe 1 do 3 tjedna (čekamo da se lista za groblje popuni).
                                </p>
                            </div>
                            <div className={styles.faqItem}>
                                <h3>Može li se oštetiti natpis ili fotografija na porculanu?</h3>
                                <p>
                                    Ne. Koristimo niski tlak i sredstva prilagođena kamenu. Natpise, pozlatu
                                    i porculanske fotografije čistimo ručno, bez kontakta s mlazom.
                                </p>
                            </div>
                        </div>

                        <div className={styles.closing}>
                            <p>
                                Ako imate grobno mjesto u Zagrebu koje treba čišćenje, javite nam se s
                                lokacijom i 2-3 fotografije. Dajemo vam cijenu isti dan.
                            </p>
                        </div>

                        <div className={styles.ctaBox}>
                            <h3>Zatražite cijenu za čišćenje grobnog mjesta</h3>
                            <p>
                                Pošaljite nam lokaciju i fotografije groba. Javimo točnu cijenu isti dan,
                                bez obveze.
                            </p>
                            <div className={styles.ctaButtons}>
                                <a href="https://wa.me/385958442806?text=Pozdrav%2C%20zanima%20me%20%C4%8Di%C5%A1%C4%87enje%20grobnog%20mjesta." target="_blank" rel="noopener noreferrer" className={styles.ctaBtn}>
                                    WhatsApp upit
                                </a>
                                <a href="tel:+385958442806" className={styles.ctaBtnSecondary}>
                                    <Phone size={16} /> 095 844 2806
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
                                    <Link href="/usluge/ciscenje-kamenih-povrsina">
                                        <ArrowRight size={14} /> Čišćenje kamenih površina
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-fasade">
                                        <ArrowRight size={14} /> Koliko košta pranje fasade?
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb">
                                        <ArrowRight size={14} /> Koliko košta pranje okućnice i tlakavaca?
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
