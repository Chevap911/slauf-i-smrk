import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Phone, ArrowRight, AlertTriangle } from 'lucide-react';
import styles from './article.module.css';
import { OG_IMAGE } from '@/lib/seo';

export const metadata: Metadata = {
    title: 'Salitra i kamenac na kamenoj fasadi, Zagreb | Šlauf i Šmrk',
    description:
        'Bijeli curci kamenca i salitre probijali su kroz fuge kamene fasade. Kako smo ih skinuli, zašto je rub fuge najteži dio i što paziti kod ugradnje.',
    keywords: [
        'salitra na kamenoj fasadi',
        'kamenac na fasadi',
        'bijeli curci na fasadi',
        'uklanjanje salitre fasada Zagreb',
        'čišćenje kamene fasade',
        'eflorescencija fasada',
    ],
    alternates: { canonical: '/blog/salitra-i-kamenac-na-kamenoj-fasadi' },
    openGraph: {
        title: 'Salitra i kamenac na kamenoj fasadi: kako smo očistili vilu u Zagrebu',
        description:
            'Bijeli curci probijali su kroz fuge i cijedili se niz kamene ploče. Što smo koristili, što je bilo teško i kako se to spriječi kod ugradnje.',
        url: 'https://slaufismrk.com/blog/salitra-i-kamenac-na-kamenoj-fasadi',
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
        {
            '@type': 'ListItem',
            position: 3,
            name: 'Salitra i kamenac na kamenoj fasadi',
            item: 'https://slaufismrk.com/blog/salitra-i-kamenac-na-kamenoj-fasadi',
        },
    ],
};

export default function BlogArticle() {
    const articleSchema = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'Salitra i kamenac na kamenoj fasadi: kako smo očistili vilu u Zagrebu',
        description:
            'Stvarni posao iz Zagreba. Bijeli curci kamenca i salitre probijali su kroz fuge kamene fasade. Kako smo ih skinuli, koja sredstva su radila i što se mora paziti kod ugradnje takve fasade.',
        author: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        publisher: { '@type': 'Organization', name: 'Šlauf i Šmrk' },
        datePublished: '2026-08-21',
        dateModified: '2026-08-21',
        image: 'https://slaufismrk.com/blog/salitra-kamena-fasada/bijeli-curci-kamenca-niz-fasadnu-plocu.jpg',
        url: 'https://slaufismrk.com/blog/salitra-i-kamenac-na-kamenoj-fasadi',
    };

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'Zašto se bijeli curci cijede niz kamenu fasadu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Voda je ušla iza kamenih ploča, otopila vapno iz ljepila i fugne mase i izašla van kroz fugu. Kad na zraku ispari, ostane bijeli talog vapnenca i soli. Zato curak uvijek počinje ispod fuge, a ne nasred ploče.',
                },
            },
            {
                '@type': 'Question',
                name: 'Mogu li se bijeli curci s fasade skinuti bez profesionalca?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Tanki, svježi curci se u većini slučajeva skidaju kiselim sredstvom za cement i kamenac uz ribanje četkom, pod uvjetom da se prvo proba na skrivenom dijelu i da se ploča prije toga natopi vodom. Tvrde naslage uz sam rub fuge su druga priča i tu se lako napravi trajna šteta.',
                },
            },
            {
                '@type': 'Question',
                name: 'Vraća li se salitra na fasadi nakon čišćenja?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Vraća se ako izvor vode ostane isti. Čišćenje skida ono što je izašlo van, ali dok voda ulazi iza obloge, vapno će i dalje izlaziti kroz fuge. Trajno rješenje je zaustaviti ulaz vode, popraviti fuge, opšave i okapnice te fasadu hidrofobirati.',
                },
            },
            {
                '@type': 'Question',
                name: 'Što se mora paziti kod ugradnje kamene fasade da ne dođe do salitre?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Hidroizolacija podloge prije lijepljenja, lijepljenje punim nanosom bez šupljina iza ploče, vodoodbojna fugna masa nabijena do dna fuge, dilatacije, opšavi i klupčice s okapnicom i nadvišenjem, odmak sokla od terena te hidrofobna impregnacija na kraju.',
                },
            },
            {
                '@type': 'Question',
                name: 'Koliko košta čišćenje salitre i kamenca s kamene fasade u Zagrebu?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Pranje fasade kreće od 5 €/m². Skidanje tvrdih naslaga kamenca i salitre je ručni rad po kvadratu i cijenu dajemo tek nakon izlaska na lokaciju, kad vidimo koliko je naslaga tvrda i koliko je ploča osjetljiva.',
                },
            },
        ],
    };

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
                        <span className={styles.category}>Naš posao</span>
                        <h1>Salitra i kamenac na kamenoj fasadi: kako smo očistili vilu u Zagrebu</h1>
                        <p className={styles.meta}>Objavljeno 21. kolovoza 2026. • Šlauf i Šmrk</p>
                    </header>

                    <div className={styles.content}>
                        <p>
                            Zvali su nas na vilu u Zagrebu s fasadom od velikih kamenih blokova. Lijepa fasada, skupa
                            fasada, a cijela je bila išarana bijelim tragovima. Nisu to bile alge ni prljavština nego
                            salitra i kamenac koji su probijali kroz fuge i cijedili se niz ploče. Vlasnik je mislio da
                            se to opere šlaufom. Ne opere se.
                        </p>

                        <figure className={styles.figure}>
                            <Image
                                src="/blog/salitra-kamena-fasada/salitra-i-kamenac-na-kamenoj-fasadi-zagreb.jpg"
                                alt="Bijeli curak salitre i kamenca cijedi se niz kamenu fasadu vile u Zagrebu ispod vodoravne fuge"
                                title="Kamena fasada vile u Zagrebu prije čišćenja salitre i kamenca"
                                width={1200}
                                height={1600}
                                className={styles.figureImg}
                                priority
                            />
                            <figcaption>
                                Fasada od velikih kamenih blokova. Curak kreće ispod vodoravne fuge i ide prema dolje,
                                što je prvi znak da voda izlazi iznutra.
                            </figcaption>
                        </figure>

                        <h2>Što su zapravo bili ti bijeli tragovi</h2>
                        <p>
                            Dvije stvari koje ljudi miješaju, a nastaju iz istog uzroka. Salitra ili eflorescencija su
                            soli koje vlaga iznese iz materijala na površinu, bijele su i praškaste i mogu se dobrim
                            dijelom istrljati. Kamenac na fasadi je vapnenac, tvrđi talog koji nastane kad voda otopi
                            vapno iz ljepila i fugne mase, izađe van i na zraku se veže u tvrdu koru.
                        </p>
                        <p>
                            Praškasti dio se skida relativno lako. Tvrda kora se ne skida ribanjem jer je kemijski ista
                            stvar kao i sam kamen ispod nje. Tu počinje pravi posao.
                        </p>
                        <p>
                            Ako imate klasičnu žbukanu fasadu s bijelim naslagama na soklu, o tome smo pisali u tekstu{' '}
                            <Link href="/blog/salitra-na-fasadi">salitra na fasadi i kako je rješavamo</Link>.
                        </p>

                        <h2>Odakle voda</h2>
                        <p>
                            Kod ovakvih obloga uzrok je gotovo uvijek isti. Voda uđe iza ploče, prošeta kroz ljepilo i
                            traži izlaz. Jedini izlaz koji ima je fuga. Zato tragovi nikad ne počinju nasred ploče nego
                            ispod fuge i onda se cijede prema dolje. Kad to vidite, ne gledate problem prljavštine nego
                            problem vode.
                        </p>
                        <p>Voda unutra dolazi na nekoliko načina:</p>
                        <ul>
                            <li>vrh zida ili klupčica bez opšava i okapnice, pa kiša curi ravno niz lice ploča i ulazi u fuge</li>
                            <li>fuga koja nije nabijena do dna ili je s vremenom napukla</li>
                            <li>šupljine iza ploča jer je lijepljeno u točkama umjesto punim nanosom, pa se voda tamo zadržava</li>
                            <li>sokl preblizu terenu, gdje ploča upija vodu odozdo</li>
                            <li>spojevi oko prozora, opšava i rubova koji nisu obrađeni trajno elastičnom brtvom</li>
                        </ul>

                        <div className={styles.imageRow}>
                            <figure className={styles.figure}>
                                <Image
                                    src="/blog/salitra-kamena-fasada/bijeli-curci-kamenca-niz-fasadnu-plocu.jpg"
                                    alt="Bijeli curci kamenca i salitre cijede se niz kamenu fasadnu ploču ispod fuge"
                                    title="Bijeli curci kamenca izlaze iz fuge i cijede se niz ploču"
                                    width={1200}
                                    height={1600}
                                    className={styles.figureImg}
                                    loading="lazy"
                                />
                                <figcaption>Curci kreću točno iz fuge. Voda je iznutra iznijela vapno van.</figcaption>
                            </figure>
                            <figure className={styles.figure}>
                                <Image
                                    src="/blog/salitra-kamena-fasada/tvrdokorne-naslage-uz-rub-fuge-kamena-fasada.jpg"
                                    alt="Tvrdokorne naslage kamenca nakupljene uz rub fuge na kamenoj fasadi"
                                    title="Najteži dio posla: tvrda naslaga nakupljena uz sam rub fuge"
                                    width={1200}
                                    height={1600}
                                    className={styles.figureImg}
                                    loading="lazy"
                                />
                                <figcaption>
                                    Uz sam rub fuge naslaga je najdeblja i najtvrđa. To se ne skida četkom.
                                </figcaption>
                            </figure>
                        </div>

                        <h2>Čime smo čistili</h2>
                        <p>
                            Probali smo dva sredstva i oba su se pokazala dobra na tanjim tragovima. Prvo je{' '}
                            <a href="https://m8-solution.com/c200/" target="_blank" rel="noopener noreferrer nofollow">
                                M8 Solution Cleaner C200
                            </a>
                            , kiseli čistač cementa, kamenca i salitre. Drugo je{' '}
                            <a
                                href="https://www.mapei.com/hr/hr/proizvodi-i-rjesenja/popis-proizvoda/vise-o-proizvodu/ultracare-keranet"
                                target="_blank"
                                rel="noopener noreferrer nofollow"
                            >
                                Mapei Ultracare Keranet
                            </a>
                            , kiseli koncentrat za ostatke cementa i vapnene naslage. Oba se razrjeđuju vodom, C200
                            otprilike 1:2 do 1:5, Keranet 1:5 do 1:10, ovisno o tome koliko je naslaga tvrda.
                        </p>
                        <p>Postupak koji je kod nas radio, u ovom redoslijedu:</p>
                        <ul>
                            <li>proba na skrivenom dijelu fasade, uvijek, prije bilo čega drugog</li>
                            <li>ploču prvo dobro natopiti vodom da kiselina ne uđe duboko u kamen</li>
                            <li>nanijeti razrijeđeno sredstvo, pustiti da djeluje 3 do 5 minuta, ne dopustiti da se osuši na zidu</li>
                            <li>ribati četkom srednje tvrdoće, uvijek odozdo prema gore da se ne rade novi curci</li>
                            <li>obilno isprati vodom i ponoviti ako treba, radije dva blaža prolaza nego jedan agresivan</li>
                        </ul>
                        <p>
                            Tako smo skinuli najveći dio. Tanki curci su nestali gotovo bez muke i to je onaj dio posla
                            koji izgleda zahvalno.
                        </p>

                        <h2>Rub fuge je bio pravi posao</h2>
                        <p>
                            Ono što se nakupilo uz sam rub fuge nije popuštalo. Tamo je naslaga bila najdeblja, tvrda
                            kao kamen i djelomično uvučena u samu fugu. Tu smo morali ići jače i puno opreznije, s
                            razrijeđenom solnom kiselinom i mehanički, žiletom, milimetar po milimetar. Sat vremena za
                            površinu koju biste inače oprali za dvije minute.
                        </p>

                        <div className={styles.warningBox}>
                            <h3>
                                <AlertTriangle size={18} /> Ovo nemojte raditi sami
                            </h3>
                            <p>
                                Solna kiselina i kamen su loša kombinacija ako ne znate što radite. Kamen i beton su
                                većim dijelom vapnenac, pa kiselina jednako rado napada i naslagu i ploču ispod nje.
                                Rezultat je matirana, izjedena mrlja koja se više ne može oprati jer je oštećenje, a ne
                                prljavština. Uz to kiselina napada fugu, izvlači željezo iz podloge i ostavlja žute
                                mrlje, a ako se ne ispere do kraja, nastavi raditi i nakon što ste otišli. Radi se samo
                                razrijeđeno, na prethodno natopljenu ploču, kratko i uz obilno ispiranje.
                            </p>
                        </div>

                        <div className={styles.imageRow}>
                            <figure className={styles.figure}>
                                <Image
                                    src="/blog/salitra-kamena-fasada/kamena-fasada-nakon-ciscenja-salitre-zagreb.jpg"
                                    alt="Kamena fasada vile u Zagrebu nakon uklanjanja salitre i kamenca, ploče čiste i ujednačene"
                                    title="Ista fasada nakon čišćenja salitre i kamenca"
                                    width={1200}
                                    height={1600}
                                    className={styles.figureImg}
                                    loading="lazy"
                                />
                                <figcaption>
                                    Isti ugao nakon čišćenja. Tragovi curenja skinuti, ploče ujednačene.
                                </figcaption>
                            </figure>
                            <figure className={styles.figure}>
                                <Image
                                    src="/blog/salitra-kamena-fasada/ocisceni-zid-kamene-fasade-vila-zagreb.jpg"
                                    alt="Očišćeni zid kamene fasade vile u Zagrebu bez bijelih naslaga salitre i kamenca"
                                    title="Zid kamene fasade nakon skidanja naslaga"
                                    width={1200}
                                    height={1600}
                                    className={styles.figureImg}
                                    loading="lazy"
                                />
                                <figcaption>
                                    Kamen je ostao mat i ujednačen, bez izjedenih mrlja od kiseline.
                                </figcaption>
                            </figure>
                        </div>

                        <h2>Na što paziti kad se takva fasada postavlja</h2>
                        <p>
                            Ovo je dio zbog kojeg smo i pisali ovaj tekst. Sve što smo satima skidali s te fasade
                            posljedica je detalja koji se rješavaju u par dana na gradilištu. Ako gradite ili
                            renovirate, ovo dajte izvođaču da pročita.
                        </p>

                        <h3>1. Hidroizolacija podloge prije lijepljenja</h3>
                        <p>
                            Zid ispod obloge mora dobiti hidroizolacijski sloj, najčešće dvokomponentnu cementnu
                            hidroizolaciju, prije nego što ijedna ploča ode gore. To je sloj koji vodu drži izvan
                            konstrukcije. Bez njega obloga postaje spužva, a fuga jedini odvod.
                        </p>

                        <h3>2. Puni nanos ljepila, bez šupljina iza ploče</h3>
                        <p>
                            Lijepljenje u točkama ili u pet kvržica je najčešći uzrok ovog problema. Iza ploče ostanu
                            džepovi, u njih uđe voda, stoji tamo, otapa vapno i izlazi kroz fugu. Vanjska obloga se
                            lijepi punim nanosom, dvostrukim nanošenjem, ljepilom za vanjsku primjenu razreda C2 TE S1.
                            I ne s previše vode u mješavini, jer višak vode sam po sebi izvlači soli prema površini.
                        </p>

                        <h3>3. Fuga nabijena do dna, vodoodbojna</h3>
                        <p>
                            Fugna masa mora biti za vanjsku primjenu, poboljšana polimerima i vodoodbojna, razreda CG2
                            WA, i mora ispuniti fugu do dna. Polupuna fuga je otvorena cijev za vodu. Šire fuge su ovdje
                            prednost jer se daju kvalitetno nabiti. Ploče se fugiraju čim prije nakon lijepljenja, a ako
                            se najavljuje kiša, otvorene fuge se zaštite.
                        </p>

                        <figure className={styles.figure}>
                            <Image
                                src="/blog/salitra-kamena-fasada/detalj-fuge-kamene-fasade-nakon-ciscenja.jpg"
                                alt="Detalj vodoravne i okomite fuge na kamenoj fasadi nakon čišćenja, fuga puna i ravna"
                                title="Detalj fuge na kamenoj fasadi nakon čišćenja"
                                width={1200}
                                height={1600}
                                className={styles.figureImg}
                                loading="lazy"
                            />
                            <figcaption>
                                Detalj fuge na istoj fasadi. Tamo gdje je fuga puna i ravna, kroz nju ništa ne izlazi.
                            </figcaption>
                        </figure>

                        <h3>4. Opšavi, klupčice i okapnica</h3>
                        <p>
                            Svaki vodoravni završetak, vrh zida, klupčica prozora i atika, mora imati opšav s nadvišenjem
                            preko lica fasade i okapnicom s donje strane. Okapnica je taj mali žlijeb ili prevoj koji
                            prisili kap da padne u zrak umjesto da se vrati na ploču. Bez nje cijela kišnica s vrha zida
                            ide niz fasadu i pere fuge svaki put kad pada.
                        </p>

                        <h3>5. Sokl i odmak od terena</h3>
                        <p>
                            Donji red ne smije sjediti na zemlji ni u travi. Ide odmak od terena i šljunčana traka uz
                            zid, plus horizontalna hidroizolacija koja prekida kapilarno dizanje vlage. Na ovoj vili
                            šljunak je bio odrađen kako treba, pa je donji dio bio u puno boljem stanju od gornjih redova.
                        </p>

                        <h3>6. Dilatacije i spojevi</h3>
                        <p>
                            Velike ploče na suncu rade. Bez dilatacijskih polja i elastičnih spojeva na uglovima i uz
                            prozore, fuga puca, a pukotina je opet ulaz za vodu. Spojevi obloge s limarijom i stolarijom
                            idu trajno elastičnom brtvom, ne fugnom masom.
                        </p>

                        <h3>7. Hidrofobna impregnacija na kraju</h3>
                        <p>
                            Kad je sve gotovo i suho, ploče i fuge se premažu paropropusnom hidrofobnom impregnacijom.
                            Voda se skuplja u kapi i otječe umjesto da ulazi, a zid i dalje diše. To se ponavlja svakih
                            nekoliko godina i najjeftiniji je dio cijele priče.
                        </p>

                        <h3>8. Ako birate sustav, razmislite o ventiliranoj fasadi</h3>
                        <p>
                            Kod skupih kamenih obloga ventilirana fasada s mehaničkim pričvršćenjem i zračnim slojem iza
                            ploča rješava problem u startu. Nema cementnog ljepila iz kojeg se ispire vapno i voda koja
                            uđe ima kuda otići prema van.
                        </p>

                        <h2>Koliko to košta</h2>
                        <p>
                            Pranje fasade kod nas kreće od 5 €/m². Skidanje kamenca i salitre s kamene obloge je ručni
                            rad, pa cijenu dajemo tek nakon izlaska na lokaciju kad vidimo koliko je naslaga tvrda i
                            koliko ploča podnosi. Više o cijenama piše u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-fasade">koliko košta pranje fasade</Link>, a usluge su
                            na stranicama <Link href="/usluge/pranje-fasade">pranje fasade u Zagrebu</Link> i{' '}
                            <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje kamenih površina</Link>.
                        </p>
                        <p>
                            Jedna stvar koju uvijek kažemo vlasniku. Čišćenje vraća izgled, ali dok voda ulazi iza
                            ploča, bijeli tragovi se vraćaju. Zato uz čišćenje uvijek prođemo fasadu i pokažemo odakle
                            voda ulazi, pa vlasnik zna što treba popraviti da drugi put ne plaća isti posao.
                        </p>

                        <div className={styles.ctaBox}>
                            <h3>Bijeli tragovi na kamenoj fasadi?</h3>
                            <p>
                                Pošaljite par slika na WhatsApp i recimo vam je li salitra, kamenac ili alge, hoće li
                                sredstvo biti dovoljno i odakle vam ulazi voda. Procjena je besplatna.
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
