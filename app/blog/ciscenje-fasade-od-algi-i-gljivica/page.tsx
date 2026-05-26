import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Phone, ArrowRight } from 'lucide-react';
import styles from './article.module.css';

export const metadata: Metadata = {
    title: 'Čišćenje fasade od algi i gljivica: uzroci, metode i cijena | Šlauf i Šmrk',
    description: 'Zelene ili crne mrlje na fasadi? Vodič za čišćenje fasade od algi, gljivica i mahovine u Zagrebu. Cijena od 5 €/m², softwash metoda za ETICS fasade, besplatna procjena.',
    alternates: { canonical: '/blog/ciscenje-fasade-od-algi-i-gljivica' },
    openGraph: {
        title: 'Čišćenje fasade od algi i gljivica: uzroci, metode i cijena',
        description: 'Kako ukloniti alge, gljivice i mahovinu s fasade bez oštećenja žbuke ili stiropora. Praktični vodič s cijenama za Zagreb i okolicu.',
        url: 'https://slaufismrk.com/blog/ciscenje-fasade-od-algi-i-gljivica',
        type: 'article',
    },
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Čišćenje fasade od algi i gljivica: uzroci, metode i cijena',
        description: 'Kako ukloniti alge, gljivice, mahovinu i lišajeve s fasade. Razlika između softwash i visokotlačnog pranja, cijena u Zagrebu i što ne raditi sami.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-05-25',
        dateModified: '2026-05-25',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Koliko košta čišćenje fasade od algi u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Cijena čišćenja fasade od algi u Zagrebu kreće se od 5 €/m², ovisno o stupnju zaraženosti, tipu fasade i visini objekta. Za obiteljsku kuću od 200 m² to je okvirno od 1.000 €. Za točnu procjenu dolazimo na lokaciju besplatno.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko dugo traje zaštita fasade od algi nakon čišćenja?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Softwash tretman s biocidnim sredstvima daje zaštitu 3 do 5 godina na dobro tretiranim fasadama. Fasade u trajnoj sjeni ili uz drveće mogu trebati ponovni tretman za 2 do 3 godine.',
                },
            },
            {
                '@type': 'Question',
                name: 'Je li opasno imati alge i gljivice na fasadi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Da. Alge i gljivice zadržavaju vlagu uz fasadu. S vremenom vlaga prodire u sloj žbuke ili stiropora i uzrokuje ljuštenje boje, pukotine i propadanje materijala. Osim oštećenja, gljivične spore mogu utjecati na kvalitetu zraka unutar prostorija u blizini zahvaćenih zidova.',
                },
            },
            {
                '@type': 'Question',
                name: 'Mogu li sami ukloniti alge s fasade?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Na betonskim ili kamenim površinama, uz pravi tlak i sredstvo, to je izvedivo. Za stiropor (ETICS) fasade nije preporučljivo jer visoki tlak oštećuje završni sloj i izolaciju. Pogrešna primjena kemije može izblijediti boju ili ubrzati ponovnu pojavu algi. Za trajne rezultate bez rizika bolje je angažirati stručnjaka.',
                },
            },
            {
                '@type': 'Question',
                name: 'Zašto se alge uvijek vraćaju na isti dio fasade?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Alge preferiraju sjenovite, vlažne površine gdje nema direktnog sunca. Sjeverozapadne strane i uglovi uz drveće su najčešće zahvaćeni. Ako se uklone samo vizualno, bez dubokog tretmana biocidom, micelij ostaje u porama fasade i alge se vraćaju za godinu-dvije.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koja je razlika između algi, gljivica, mahovine i lišajeva na fasadi?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Alge su zelene ili sivo-zelene naslage, javljaju se prve i lakše se čiste. Gljivice su tamnije, crne ili smeđe mrlje, dublje prodiru u podlogu. Mahovina je vidljivo debela i zelena, raste na vlažnim mjestima. Lišajevi su kombinacija gljivice i alge, jako se drže podloge i najtvrđi su za uklanjanje.',
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
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <article className={styles.article}>
                <div className="container">
                    <Link href="/blog" className={styles.back}>
                        <ArrowLeft size={16} /> Natrag na blog
                    </Link>

                    <header className={styles.header}>
                        <span className={styles.category}>Savjeti</span>
                        <h1>Čišćenje fasade od algi i gljivica: uzroci, metode i cijena</h1>
                        <p className={styles.meta}>Objavljeno 25. svibnja 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Zelene naslage na fasadi nisu samo ružne. Alge, gljivice i mahovina zadržavaju vlagu
                            uz zid i polako razaraju završni sloj fasade, posebno na stiropor objektima. Zanemarite
                            ih dovoljno dugo i od 500 € čišćenja stignete do 15.000 € sanacije.
                            Evo što se zapravo događa i kako se to riješiti trajno.
                        </p>

                        <h2>Zašto se alge i gljivice pojavljuju na fasadi?</h2>
                        <p>
                            Fasada je živa površina u kontaktu s okolišem. Pore žbuke i boje skupljaju vlagu,
                            prašinu i organske čestice. Kad uvjeti odgovaraju (sjenovitost, vlaga, temperature
                            između 5 i 25 stupnjeva), mikroorganizmi počinju rasti.
                        </p>
                        <p>
                            Ovi faktori ubrzavaju pojavu algi i gljivica:
                        </p>
                        <ul>
                            <li><strong>Orijentacija zida:</strong> sjeverne i sjeverozapadne strane dobivaju manje sunca i sporije se suše nakon kiše.</li>
                            <li><strong>Blizina drveća:</strong> drveće u sjeni zida povećava vlažnost i unosi spore.</li>
                            <li><strong>Loša odvodnja:</strong> začepljeni žljebovi ili pogrešno postavljena streha bacaju vodu uz fasadu.</li>
                            <li><strong>Stara ili oštećena fasadna boja:</strong> boja bez biocida ili s isteklim zaštitnim sredstvima brzo kolonizira.</li>
                            <li><strong>Urbanizacija:</strong> onečišćenje zraka ostavlja tanki organski film na fasadi koji je podloga za rast.</li>
                        </ul>

                        <h2>Alge, gljivice, mahovina ili lišajevi: što je na vašoj fasadi?</h2>
                        <p>
                            Svaki organizam zahtijeva malo drugačiji pristup. Evo kako ih razlikujete:
                        </p>

                        <div className={styles.comparisonTable}>
                            <div className={styles.comparisonHeader}>
                                <span>Organizam</span>
                                <span>Izgled i karakteristike</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>Alge</strong></span>
                                <span>Zelene ili sivo-zelene naslage, tankoslojne, javljaju se prve</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>Gljivice</strong></span>
                                <span>Crne ili tamnosmeđe mrlje, prodiru dublje u pore, teže za ukloniti</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>Mahovina</strong></span>
                                <span>Vidljivo debele zelene naslage, raste u vlažnim udubinama i šavovima</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>Lišajevi</strong></span>
                                <span>Sivo-zelene ili žute kraste, jako prianjaju uz podlogu, najtvrđi za čišćenje</span>
                            </div>
                        </div>

                        <p>
                            Na većini fasada u Zagrebu vidimo kombinaciju: alge kao podlogu za gljivice, s mahovinom
                            u šavovima i uglovima. Lišajevi su rjeđi, ali kad su prisutni, zahtijevaju dulje
                            djelovanje biocidnog sredstva.
                        </p>

                        <h2>Zašto je bitno čistiti brzo, a ne čekati?</h2>
                        <p>
                            Alge same po sebi ne oštećuju fasadu odmah. Problem nastaje kada se nakupe dovoljno
                            da počnu zadržavati vlagu uz zid dulje od prirodnog sušenja. Ta trajna vlažnost
                            dovodi do:
                        </p>
                        <ul>
                            <li>ljuštenja fasadne boje</li>
                            <li>prodiranja vlage u sloj žbuke ili stiropora</li>
                            <li>pada efikasnosti toplinske izolacije (stiropor objekti)</li>
                            <li>pukotina uzrokovanih izmjeničnim smrzavanjem vlažne podloge</li>
                        </ul>
                        <p>
                            Gljivice su agresivnije. Micelij prodire duboko u pore fasadnog materijala
                            i ne može se ukloniti samo vodom pod pritiskom. Treba biocidno sredstvo koje
                            uništava spore u dubini, ne samo na površini.
                        </p>

                        <h2>Kako funkcionira profesionalno čišćenje fasade od algi?</h2>
                        <p>
                            Dobar tretman se ne svodi na "pranje pod tlakom". Pravi postupak ima četiri koraka:
                        </p>

                        <div className={styles.comparisonTable}>
                            <div className={styles.comparisonHeader}>
                                <span>Korak</span>
                                <span>Što se radi</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>1. Procjena</strong></span>
                                <span>Tip fasade, stupanj zaraženosti, procjena dubine prodora gljivica</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>2. Predtretman</strong></span>
                                <span>Nanošenje biocidnog sredstva, ostavljanje 15–30 min da ubije organizme do korijena</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>3. Čišćenje</strong></span>
                                <span>Ispiranje prilagođenim tlakom: niži za stiropor, viši za kamen i beton</span>
                            </div>
                            <div className={styles.comparisonRow}>
                                <span><strong>4. Zaštita</strong></span>
                                <span>Nanošenje zaštitnog premaza koji sprječava ponovnu kolonizaciju 3–5 godina</span>
                            </div>
                        </div>

                        <p>
                            Preskočite korak 2 ili 4 i alge se vraćaju za 12 do 18 mjeseci. S kompletnim tretmanom,
                            fasada ostaje čista 3 do 5 godina, ovisno o izloženosti.
                        </p>

                        <h2>Softwash ili visokotlačno: što je pravo za vaš slučaj?</h2>
                        <p>
                            Ovo je ključno pitanje i najčešći uzrok pogrešaka pri samostalnom čišćenju.
                        </p>
                        <p>
                            <strong>Softwash</strong> (niskotlačno kemijsko čišćenje) koristi biocidna sredstva
                            koja se nanose na fasadu i ostave da djeluju, a potom se isperu niskim tlakom, sličnim
                            vrtnom cijevu. Organizam se uklanja kemijskom reakcijom, bez mehaničke sile.
                            Jedina ispravna metoda za stiropor (ETICS) fasade, tanke žbuke i osjetljive boje.
                        </p>
                        <p>
                            <strong>Visokotlačno pranje</strong> mehanički skida naslage vodom pod pritiskom od
                            100 do 300 bara. Odlično radi na kamenu, betonu, opeci i keramici. Na stiroporu
                            oštećuje završni sloj i otvara pore za prodor vlage. Greškom primijenjen, može stvoriti
                            problem koji košta 10 puta više od čišćenja.
                        </p>
                        <p>
                            Više o razlici između metoda pročitajte u vodiču{' '}
                            <Link href="/blog/softwash-ili-visokotlacno-pranje-fasade">
                                softwash ili visokotlačno pranje fasade
                            </Link>.
                        </p>

                        <h2>Čišćenje fasade od algi: što ne raditi sami</h2>
                        <p>
                            Svake sezone vidimo iste greške. Neke od navedenih stvari izgledaju kao rješenje
                            ali stvaraju skuplje probleme:
                        </p>
                        <ul>
                            <li><strong>Boja preko algi:</strong> alge ostaju ispod boje, nastavljaju rasti, nova boja se ljušti za godinu-dvije.</li>
                            <li><strong>Visoki tlak na stiroporu:</strong> probija tanki završni sloj i otvara put vlazi u izolaciju.</li>
                            <li><strong>Samo mehaničko čišćenje bez biocida:</strong> spore ostaju u porama i alge se vraćaju brže nego prvi put.</li>
                            <li><strong>Izbjeljivač (NaOCl) u visokim koncentracijama:</strong> može izblijediti boju i oštetiti metal oko prozora, plus nije dugotrajno rješenje.</li>
                            <li><strong>Čišćenje samo vidljive površine:</strong> gljivice prodiru dublje od vidljive mrlje. Treba tretirati čitavu zahvaćenu plohu.</li>
                        </ul>

                        <h2>Koliko košta čišćenje fasade od algi u Zagrebu?</h2>
                        <p>
                            Cijena ovisi o površini fasade, stupnju zaraženosti, tipu materijala i visini objekta.
                            Okvirne cijene za Zagreb i okolicu:
                        </p>

                        <div className={styles.priceTable}>
                            <div className={styles.priceRow}>
                                <span>Manje od 100 m²</span>
                                <strong>od 500 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>100 – 200 m² (obiteljska kuća)</span>
                                <strong>600 – 1.200 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>200 – 300 m²</span>
                                <strong>od 1.500 €</strong>
                            </div>
                            <div className={styles.priceRow}>
                                <span>300 m²+ / poslovni objekti</span>
                                <strong>po procjeni</strong>
                            </div>
                        </div>

                        <p>
                            Na cijenu utječe i opseg zahvaćenosti. Fasada s teškom gljivičnom zarazom zahtijeva
                            više biocidnog sredstva i dulje djelovanje, što povećava trošak materijala.
                            Detaljan pregled faktora koji utječu na cijenu pogledajte u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade u Zagrebu</Link>.
                        </p>

                        <h2>Koliko traje zaštita i koliko često treba ponavljati tretman?</h2>
                        <p>
                            S kompletnim softwash tretmanom i zaštitnim premazom, zaštita traje 3 do 5 godina na
                            prosječno izloženim fasadama. Faktori koji skraćuju taj rok:
                        </p>
                        <ul>
                            <li>stalna sjenkovitost (sjever, uz visoko drveće)</li>
                            <li>objekt blizu vode ili u vlažnoj kotlini</li>
                            <li>starija boja bez biocida u sastavu</li>
                            <li>loša odvodnja s krova na fasadu</li>
                        </ul>
                        <p>
                            Fasade koje se čiste svake 3 godine u konačnici troše manje novca nego one koje
                            se zanemaruju do potrebe za kompletnim bojanjem ili sanacijom.
                        </p>

                        <h2>Je li čišćenje fasade jeftinije od bojanja?</h2>
                        <p>
                            Da, za 50 do 70% u slučajevima gdje fasada nije konstruktivno oštećena.
                            Bojanje obiteljske kuće od 200 m² u Zagrebu iznosi 3.000 do 8.000 eura,
                            ovisno o pripremi i materijalu. Čišćenje iste kuće iznosi 800 do 1.200 eura.
                        </p>
                        <p>
                            Čišćenje ima smisla kad fasada nema pukotina, boja se ne ljušti
                            na velikim površinama, a problem su alge, gljivice ili prljavština.
                            Bojanje je bolje kad površina ima mehanička oštećenja, boja se ljušti
                            zbog starosti ili zahtijevate promjenu boje.
                        </p>

                        <h2>Čišćenje fasade od algi za zgrade i poslovne objekte</h2>
                        <p>
                            Stambene zgrade i poslovni prostori s algama ili tamnim naslagama
                            ostavljaju loš dojam korisnicima i prolaznicima. Kod zgrada s više
                            etaža, čišćenje fasade od algi kombiniramo s procjenom pristupa,
                            zaštitom ulaza i dogovorom s upraviteljem zgrade oko termina i logistike.
                        </p>
                        <p>
                            Za veće objekte dolazimo na besplatnu procjenu, pregledamo fasadu s tla
                            i dajemo pisanu ponudu s detaljnim opisom metode i trajanja radova.
                            Više na stranici{' '}
                            <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link>.
                        </p>

                        <h2>Čišćenje fasade u Zagrebu i okolici</h2>
                        <p>
                            Radimo na cijelom području Zagreba i Zagrebačke županije.
                            Najčešće intervencije za uklanjanje algi imamo u:
                        </p>
                        <ul>
                            <li>Sesvetama i Dubravama: stariji objekti iz 1980-ih s klasičnom žbukom i intenzivnom vegetacijom uz fasadu</li>
                            <li>Novom Zagrebu: stiropor objekti iz 1990-ih i 2000-ih s algama na sjevernim stranama</li>
                            <li>Samoboru i Zaprešiću: obiteljske kuće uz prirodu s pojačanom vlažnošću</li>
                            <li>Velikoj Gorici: kombinacija starih žbukanih i novih ETICS fasada</li>
                        </ul>
                        <p>
                            Za veće komercijalne projekte izlazimo i izvan Zagrebačke županije.
                        </p>

                        <h2>Česta pitanja o čišćenju fasade od algi</h2>

                        <h3>Koliko košta čišćenje fasade od algi u Zagrebu?</h3>
                        <p>
                            Cijena se kreće od 5 €/m². Za obiteljsku kuću od 200 m² to je
                            od 1.000 €. Točna cijena ovisi o stupnju zaraženosti i tipu fasade.
                            Za procjenu pošaljite slike fasade na WhatsApp ili dogovorite besplatan izlazak.
                        </p>

                        <h3>Koliko dugo traje zaštita fasade od algi nakon čišćenja?</h3>
                        <p>
                            S kompletnim softwash tretmanom i zaštitnim premazom, zaštita traje 3 do 5 godina
                            na prosječno izloženim fasadama.
                        </p>

                        <h3>Je li opasno imati alge i gljivice na fasadi?</h3>
                        <p>
                            Da. Zadržavaju vlagu uz zid i polako razaraju sloj žbuke ili stiropora.
                            Gljivične spore mogu utjecati i na kvalitetu zraka u prostorijama
                            uz zahvaćeni zid.
                        </p>

                        <h3>Mogu li sami ukloniti alge s fasade?</h3>
                        <p>
                            Na kamenu ili betonu, uz pravi tlak i biocidno sredstvo, da.
                            Na stiropor fasadama nije preporučljivo bez odgovarajuće opreme
                            jer visoki tlak oštećuje završni sloj.
                        </p>

                        <h3>Zašto se alge uvijek vraćaju na isti dio fasade?</h3>
                        <p>
                            Sjenovite i vlažne strane (najčešće sjever) pogoduju rastu algi.
                            Bez dubokog tretmana biocidom, micelij ostaje u porama i kolonija
                            se obnovi za godinu-dvije.
                        </p>

                        <h3>Koja je razlika između algi, gljivica, mahovine i lišajeva na fasadi?</h3>
                        <p>
                            Alge su zelene, javljaju se prve i lakše se čiste. Gljivice su tamne,
                            prodiru dublje. Mahovina je debela zelena naslaga u vlažnim šavovima.
                            Lišajevi su najtvrđi za uklanjanje jer jako prianjaju uz podlogu.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Alge ili gljivice na fasadi?</h3>
                            <p>
                                Pošaljite slike fasade na WhatsApp i javimo vam okvirnu cijenu bez dolaska.
                                Za veće objekte dolazimo na besplatnu procjenu i dajemo pisanu ponudu.
                            </p>
                            <div className={styles.ctaButtons}>
                                <a href="tel:+385958442806" className={styles.ctaBtn}>
                                    <Phone size={16} /> 095 844 2806
                                </a>
                                <Link href="/usluge/pranje-fasade" className={styles.ctaBtnSecondary}>
                                    Usluga pranja fasade <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    );
}
