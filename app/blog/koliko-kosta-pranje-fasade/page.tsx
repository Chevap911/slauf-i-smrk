import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';
import ArticleQuote from '@/components/ArticleQuote/ArticleQuote';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Koliko košta pranje fasade? Cijena po m² 2026 | Šlauf i Šmrk',
    description:
        'Pranje fasade u Zagrebu je 5–7 €/m² (na 10. 9. 2026.: 5–7 €/m²). Primjeri za kuće od 100 do 300 m², kako izračunati kvadraturu i što ulazi u cijenu.',
    alternates: { canonical: '/blog/koliko-kosta-pranje-fasade' },
    openGraph: {
        title: 'Koliko košta pranje fasade? Cijena po m² i primjeri za 2026.',
        description:
            'Cijena po m², primjeri za kuće od 100 do 300 m², izračun kvadrature i što ulazi u cijenu pranja fasade u Zagrebu.',
        url: 'https://slaufismrk.com/blog/koliko-kosta-pranje-fasade',
        type: 'article',
        images: [OG_IMAGE],
    },
};

const faq = [
    {
        q: 'Koliko košta pranje fasade po m²?',
        a: 'Kod nas je pranje fasade 5–7 €/m² (cijena na 10. 9. 2026.: 5–7 €/m²). Donji dio raspona je za blago zaprljanu fasadu do koje se lako dođe, gornji za fasadu s gustim algama i mahovinom ili otežanim pristupom.',
    },
    {
        q: 'Koliko košta pranje fasade obiteljske kuće od 200 m²?',
        a: 'Okvirno 1.000 do 1.400 € (na 10. 9. 2026.: 1.000 do 1.400 €), ovisno o zaprljanosti, tipu fasade i visini. Točnu cijenu potvrđujemo nakon besplatne procjene, prije početka rada.',
    },
    {
        q: 'Je li pranje fasade jeftinije od bojanja?',
        a: 'Jest. Bojanje traži skele, pripremu podloge i materijal, pa košta višestruko više po m². Ako boja nije oštećena nego samo prljava, pranje vraća izgled bez bojanja.',
    },
    {
        q: 'Koliko često treba prati fasadu?',
        a: 'Svake 2–3 godine. Fasade okrenute prema sjeveru ili u sjeni drveća trebaju češće pranje jer se na njima brže hvataju alge i mahovina.',
    },
    {
        q: 'Perete li i fasade zgrada?',
        a: 'Da. Za zgrade i poslovne objekte cijenu radimo po ponudi, nakon procjene na lokaciji, jer ovisi o visini, pristupu i opremi za rad na visini.',
    },
];

const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Početna', item: 'https://slaufismrk.com/' },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://slaufismrk.com/blog' },
        { '@type': 'ListItem', position: 3, name: 'Koliko košta pranje fasade', item: 'https://slaufismrk.com/blog/koliko-kosta-pranje-fasade' },
    ],
};

const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Koliko košta pranje fasade? Cijena po m² i primjeri za 2026.',
    description:
        'Cijena pranja fasade po m² u Zagrebu, primjeri za kuće od 100 do 300 m², kako izračunati kvadraturu fasade i što ulazi u cijenu.',
    author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
    publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
    datePublished: '2026-02-26',
    dateModified: '2026-09-27',
    image: 'https://slaufismrk.com/prije-poslje/fasada-poslje.png',
};

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map(({ q, a }) => ({
        '@type': 'Question',
        name: q,
        acceptedAnswer: { '@type': 'Answer', text: a },
    })),
};

export default function BlogArticle() {
    return (
        <div className={styles.page}>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Cijene</span>
                        <h1>Koliko košta pranje fasade? Cijena po m² (2026.)</h1>
                        <p className={styles.meta}>Ažurirano 27. rujna 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Kratki odgovor: pranje fasade kod nas je <strong>5–7 €/m²</strong> (cijena na 10. 9. 2026.:
                            5–7 €/m²). Obiteljska kuća s 200 m² fasade dođe okvirno 1.000 do 1.400 € (na 10. 9. 2026.: 1.000 do
                            1.400 €). Ispod su primjeri,
                            način kako sami izračunate kvadraturu i sve što pomiče cijenu gore ili dolje.
                        </p>

                        <h2>Cijene pranja fasade u Zagrebu (2026.)</h2>
                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Kuća sa 100 m² fasade</span>
                                <strong>od 500 €<span className="sidrena">Cijena na 10. 9. 2026.: od 500 €</span></strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Kuća s 200 m² fasade</span>
                                <strong>od 1.000 €<span className="sidrena">Cijena na 10. 9. 2026.: od 1.000 €</span></strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Kuća s 300 m² fasade</span>
                                <strong>od 1.500 €<span className="sidrena">Cijena na 10. 9. 2026.: od 1.500 €</span></strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>Cijena po m²</span>
                                <strong>5–7 €/m²<span className="sidrena">Cijena na 10. 9. 2026.: 5–7 €/m²</span></strong>
                            </div>
                        </div>
                        <p>
                            Iznosi u tablici računati su s donjim dijelom raspona. Zgrade i fasade veće od 500 m²
                            radimo po ponudi. Sve naše cijene su i u <Link href="/cjenik">cjeniku</Link>.
                        </p>

                        <ArticleQuote
                            location="blog-fasada-cijena"
                            service="facade"
                            title="Koliko bi pranje vaše fasade koštalo?"
                            whatsappText="Pozdrav, zanima me pranje fasade. Šaljem slike za procjenu."
                        />

                        <h2>Kako izračunati kvadraturu fasade</h2>
                        <p>
                            Ne trebate nacrt. Izmjerite opseg kuće, pomnožite ga s visinom zida do strehe i oduzmite veće
                            staklene površine.
                        </p>
                        <ul>
                            <li>Kuća 10 × 10 m ima opseg 40 m.</li>
                            <li>Uz visinu od 6 m to je 40 × 6 = 240 m² zida.</li>
                            <li>Oduzmite prozore i vrata, recimo 30 m², i ostaje oko 210 m² za pranje.</li>
                        </ul>
                        <p>
                            Zabati, balkoni i dimnjaci mijenjaju račun, pa broj uvijek potvrdimo na procjeni. Za okvirnu
                            cijenu dovoljna je i ovakva gruba kvadratura.
                        </p>

                        <h2>Od čega ovisi cijena</h2>
                        <ul>
                            <li>
                                <strong>Zaprljanost:</strong> fasada s gustim algama i mahovinom traži sredstvo koje ubija
                                korijen i više prolaza, pa ide prema gornjem dijelu raspona.
                            </li>
                            <li>
                                <strong>Tip fasade:</strong> žbuka, kamen i ETICS fasada od stiropora ne peru se isto.
                                ETICS traži niski tlak i softwash, o tome smo pisali u tekstu{' '}
                                <Link href="/blog/pranje-fasade-stiropor-etics">pranje fasade od stiropora</Link>.
                            </li>
                            <li>
                                <strong>Visina i pristup:</strong> sve što se ne može sigurno oprati s tla ili ljestava traži
                                dodatnu opremu i ide po ponudi.
                            </li>
                            <li>
                                <strong>Veličina:</strong> veća površina znači više sati rada, ali cijena po m² na većim
                                fasadama obično pada.
                            </li>
                            <li>
                                <strong>Lokacija:</strong> radimo Zagreb i okolicu, a za udaljenija mjesta dogovaramo putni
                                trošak unaprijed.
                            </li>
                        </ul>

                        <h2>Što ulazi u cijenu</h2>
                        <ul>
                            <li>dolazak s profesionalnom opremom i vodom pod kontroliranim tlakom</li>
                            <li>biorazgradiva sredstva za alge, mahovinu i prljavštinu</li>
                            <li>ispiranje fasade i okolnih površina</li>
                            <li>fotografije prije i poslije za veće zahvate</li>
                        </ul>
                        <p>
                            Zaštitni premaz nakon pranja i rad na visini iznad dohvata ljestava naplaćuju se posebno i
                            uvijek su navedeni u ponudi.
                        </p>

                        <h2>Pranje ili bojanje fasade</h2>
                        <p>
                            Posivjela fasada najčešće ne treba bojanje nego pranje. Bojanje traži skele, pripremu podloge
                            i materijal, pa košta višestruko više po m². Ako boja nije oštećena nego prljava, pranje vraća
                            izgled za djelić te cijene. Primjer s Maksimira pokazali smo u tekstu{' '}
                            <Link href="/blog/bijela-fasada-posivjela">bijela fasada posivjela</Link>, a zašto se ne isplati
                            čekati piše u tekstu <Link href="/blog/odrzavanje-fasade-stedi-novac">zapuštena fasada košta više</Link>.
                        </p>

                        <h2>Kako do točne cijene</h2>
                        <p>
                            Pošaljite 2–3 slike fasade na WhatsApp i recite nam gdje je kuća. Iz toga dajemo okvirnu
                            cijenu. Ako vam odgovara, dolazimo na besplatnu procjenu, potvrdimo kvadraturu i pošaljemo
                            ponudu. Termin se rezervira uz predujam od 30%.
                        </p>
                        <p>
                            Cijelu uslugu opisali smo na stranici{' '}
                            <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link>, a ako uz fasadu želite urediti
                            i dvorište, u istom dolasku isplati se dodati{' '}
                            <Link href="/usluge/pranje-okucnice">pranje okućnice</Link>.
                        </p>

                        <h2>Česta pitanja</h2>
                        {faq.map(({ q, a }) => (
                            <div key={q}>
                                <h3>{q}</h3>
                                <p>{a}</p>
                            </div>
                        ))}

                        <div className={styles.ctaBox}>
                            <h3>Zatražite besplatnu procjenu</h3>
                            <p>Javite nam se i dobit ćete točnu cijenu za vašu fasadu, bez obaveze.</p>
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
