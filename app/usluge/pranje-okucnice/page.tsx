import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Ruler, Footprints, Building2, CheckCircle2 } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { TreeDeciduous } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje okućnice Zagreb | Čišćenje dvorišta i prilaza',
    description: 'Profesionalno pranje okućnice, dvorišta, prilaza i vanjskih površina u Zagrebu. Uklanjamo mahovinu, alge, ulje, hrđu i prljavštinu. Cijena 2–4 €/m².',
    alternates: { canonical: '/usluge/pranje-okucnice' },
    openGraph: {
        title: 'Pranje okućnice Zagreb | Čišćenje dvorišta i prilaza',
        description: 'Profesionalno pranje okućnica, dvorišta, prilaza i vanjskih površina u Zagrebu za privatne i poslovne objekte.',
        url: 'https://slaufismrk.com/usluge/pranje-okucnice',
        images: [
            {
                url: '/seo-results/pranje-terasa/poslije.jpeg',
                width: 1200,
                height: 900,
                alt: 'Očišćena okućnica i terasa nakon profesionalnog pranja u Zagrebu',
            },
        ],
    },
};

const serviceOfferSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': 'https://slaufismrk.com/usluge/pranje-okucnice#service',
    name: 'Pranje okućnice i vanjskih površina u Zagrebu',
    serviceType: 'Pranje okućnice, dvorišta, prilaza i vanjskih površina',
    description: 'Profesionalno pranje okućnica, dvorišta, prilaza, tlakavaca, terasa, parkirnih površina i vanjskih površina u Zagrebu i okolici.',
    provider: {
        '@type': 'LocalBusiness',
        name: 'Šlauf i Šmrk',
        url: 'https://slaufismrk.com',
        telephone: '+385958442806',
        areaServed: ['Zagreb', 'Zagrebačka županija', 'Velika Gorica', 'Samobor', 'Zaprešić'],
    },
    areaServed: ['Zagreb', 'Zagrebačka županija'],
    offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'EUR',
        lowPrice: '2',
        highPrice: '4',
        unitText: 'm2',
    },
};

export default function PranjeOkucnicePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceOfferSchema) }}
            />
            <ServicePage
                title="Pranje okućnice i prilaza u Zagrebu"
                titleHighlight="okućnice"
                canonicalPath="/usluge/pranje-okucnice"
                description="Profesionalno pranje okućnica, dvorišta, prilaza, terasa i većih vanjskih površina u Zagrebu i okolici. Uklanjamo mahovinu, alge, korov iz fuga, uljne mrlje, hrđu i nakupljenu prljavštinu s tlakavaca, betona, kamena i asfalta. Za okvirnu cijenu pošaljite slike na WhatsApp, za veće površine dolazimo na lokaciju i dajemo jasnu procjenu bez obaveza."
                priceHint="2 - 4 €/m²"
                heroImage="/seo-results/pranje-terasa/poslije.jpeg"
                heroImageAlt="Okućnica i terasa nakon profesionalnog čišćenja u Zagrebu"
                heroHighlights={[
                    'Okućnice, dvorišta, prilazi i parkirne površine',
                    'Uklanjanje mahovine, ulja i korova iz fuga',
                    'Privatni i poslovni objekti',
                ]}
                resultsShowcase={{
                    beforeSrc: '/seo-results/pranje-terasa/prije.jpeg',
                    afterSrc: '/seo-results/pranje-terasa/poslije.jpeg',
                    beforeAlt: 'Terasa i okućnica prije čišćenja s tamnim naslagama i prljavštinom',
                    afterAlt: 'Terasa i okućnica poslije profesionalnog pranja u Zagrebu',
                    title: 'Okućnica prije i poslije čišćenja',
                    description: 'Projekt: čišćenje terase i vanjskog prostora u Zagrebu. Problem: tamne naslage, mahovina i neujednačena boja površine. Metoda: predtretman, visokotlačno pranje i rotirajuća četka. Rezultat: vidljivo čišća, svjetlija i urednija površina nakon jednog tretmana.',
                }}
                processSteps={[
                    {
                        title: 'Procjena',
                        description: 'Pošaljite 2–3 slike dvorišta ili prilaza na WhatsApp i javljamo vam okvirnu cijenu. Za veće površine dolazimo na lokaciju, pregledamo materijal i stupanj zaprljanosti te dajemo ponudu bez obaveza.',
                    },
                    {
                        title: 'Predtretman',
                        description: 'Na zaprljana područja nanosimo sredstvo koje omekšava mahovinu, mrlje od ulja i duboku prljavštinu te ih priprema za pranje.',
                    },
                    {
                        title: 'Visokotlačno pranje',
                        description: 'S profesionalnim peračem i rotirajućom četkom ravnomjerno čistimo cijelu površinu bez oštećenja podloge.',
                    },
                    {
                        title: 'Ispiranje i završetak',
                        description: 'Temeljito ispiremo sve ostatke, čistimo rubove, stepenice i rubnjake, te provjeravamo svaki kutak.',
                    },
                ]}
                detailedContent={
                    <>
                        <h2>Zašto čistiti okućnicu i vanjske površine?</h2>
                        <p>
                            Okućnica, dvorište, prilaz i ulaz u objekt su prve površine koje klijenti, gosti ili stanari vide.
                            S vremenom se na <strong>betonskim kockama, kamenim pločama, betonu i asfaltu</strong> nakupljaju
                            mahovina, alge i prljavština koji čine površine klizavima i neugledne. Osim estetskog problema,
                            klizave vanjske površine predstavljaju i <strong>sigurnosni rizik</strong>.
                        </p>
                        <p>
                            Redovito čišćenje može pomoći u <strong>očuvanju izgleda i funkcionalnosti podloge</strong> jer se
                            mahovina, alge, korov i nakupljena prljavština uklanjaju prije nego što dodatno opterete fuge i
                            površinski sloj. Kod starijih ili oštećenih podloga prije rada procjenjujemo stanje i biramo
                            blaži pristup.
                        </p>

                        <h2>Pranje okućnica i vanjskih površina za kuće, zgrade i poslovne objekte</h2>
                        <p>
                            Okućnica nije samo dvorište oko kuće. Kod poslovnih i većih objekata to su ulazi, prilazi,
                            parkirna mjesta, staze, terase, stepenice, rubnjaci i površine koje klijenti, gosti ili stanari
                            prve vide. Čist ulaz i uredna vanjska površina ostavljaju bolji dojam i smanjuju rizik od
                            klizanja na mahovini, algama i nakupljenoj prljavštini.
                        </p>
                        <ul>
                            <li>obiteljske kuće i vile</li>
                            <li>stambene zgrade i ulazi</li>
                            <li>poslovni prostori i lokali</li>
                            <li>kafići, restorani i terase</li>
                            <li>apartmani i smještajni objekti</li>
                            <li>parkirna mjesta i veći prilazi</li>
                            <li>veće privatne i komercijalne vanjske površine</li>
                        </ul>

                        <h2>Koje vanjske površine čistimo?</h2>
                        <p>
                            Naš tim ima iskustvo s <strong>raznim tipovima eksternih podloga</strong>:
                        </p>
                        <ul>
                            <li><strong><Link href="/usluge/pranje-tlakavaca">Tlakavci i behaton</Link></strong> — uklanjanje mahovine, algi, korova iz fuga i tamnih naslaga. Vraćamo izvornu boju i texturu.</li>
                            <li><strong>Betonski prilazi i garažni ulazi</strong> — ulje, tragovi guma, hrđa i svakodnevna prljavština s <Link href="/usluge/pranje-prilaza">betonskih i asfaltnih površina</Link>.</li>
                            <li><strong>Parkirne površine</strong> — za kuće, zgrade, lokale i manje poslovne objekte.</li>
                            <li><strong>Kamene ploče i staze</strong> — prirodni kamen, granit, travertin i slične površine. Više na stranici <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenja kamenih površina</Link>.</li>
                            <li><strong><Link href="/usluge/pranje-terasa">Terase kafića i restorana</Link></strong> — pranje prije sezone, nakon zime ili nakon većeg zaprljanja.</li>
                            <li><strong>Stepenice, rubnjaci i ulazi</strong> — detaljno čišćenje rubova i teško dostupnih dijelova.</li>
                            <li><strong>Asfaltirane površine</strong> — prilazi, staze i parkirišta, ovisno o stanju površine.</li>
                        </ul>

                        <h2>Koliko košta čišćenje okućnice?</h2>
                        <p>
                            Cijena čišćenja okućnice ovisi o <strong>ukupnoj površini, materijalu, stupnju zaprljanosti i pristupu</strong>.
                            Okvirne cijene za Zagreb i okolicu:
                        </p>
                        <table style={{ width: '100%', borderCollapse: 'collapse', margin: '1rem 0 1.5rem' }}>
                            <thead>
                                <tr style={{ background: 'var(--color-surface, #f4f4f4)' }}>
                                    <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Površina</th>
                                    <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Okvirna cijena</th>
                                    <th style={{ padding: '10px 14px', textAlign: 'left', borderBottom: '2px solid #ddd' }}>Tipični primjer</th>
                                </tr>
                            </thead>
                            <tbody>
                                {[
                                    { size: 'Do 50 m²', price: '150 – 200 €', note: 'manja terasa, ulaz ili dio dvorišta' },
                                    { size: '50 – 100 m²', price: '200 – 350 €', note: 'standardna okućnica ili prilaz' },
                                    { size: '100 – 200 m²', price: '350 – 600 €', note: 'veće dvorište, prilaz i staze' },
                                    { size: '200 m²+', price: 'po procjeni', note: 'veće okućnice, zgrade i poslovni objekti' },
                                    { size: 'Parkirne površine', price: 'po procjeni', note: 'ovisi o ulju, gumama i zaprljanosti' },
                                ].map((row, i) => (
                                    <tr key={i} style={{ borderBottom: '1px solid #eee' }}>
                                        <td style={{ padding: '10px 14px', fontWeight: 600 }}>{row.size}</td>
                                        <td style={{ padding: '10px 14px' }}>{row.price}</td>
                                        <td style={{ padding: '10px 14px', color: '#666', fontSize: '0.9em' }}>{row.note}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <p>
                            Za veće površine i pakete poput fasada + okućnica + prilaz možemo dati bolju ukupnu cijenu po m².
                            Detaljniji pregled faktora koji utječu na cijenu pogledajte u vodiču{' '}
                            <Link href="/blog/koliko-kosta-pranje-okucnice-tlakavaca-zagreb">koliko košta pranje okućnice i tlakavaca</Link>.
                        </p>
                        <p>
                            Za preciznije informacije po tipu podloge otvorite zasebne stranice za{' '}
                            <Link href="/usluge/pranje-tlakavaca">pranje tlakavaca</Link>,{' '}
                            <Link href="/usluge/pranje-terasa">pranje terasa</Link> i{' '}
                            <Link href="/usluge/pranje-prilaza">pranje prilaza</Link>.
                        </p>

                        <h2>Paket: pranje fasade, okućnice i prilaza</h2>
                        <p>
                            Najveći vizualni rezultat postiže se kada se u istom terminu očisti{' '}
                            <Link href="/usluge/pranje-fasade">fasada</Link>, oklučnica, <Link href="/usluge/pranje-terasa">terasa</Link>,
                            tlakavci, stepenice i rubovi oko objekta. Zato za veće površine nudimo paketnu procjenu
                            koja objedinjuje više usluga i daje jasnu ukupnu cijenu prije početka radova.
                        </p>
                        <ul>
                            <li>pranje fasade</li>
                            <li>čišćenje okućnice i dvorišta</li>
                            <li>pranje tlakavaca i fuga</li>
                            <li>pranje <Link href="/usluge/pranje-prilaza">prilaza i garažnog ulaza</Link></li>
                            <li>čišćenje terasa i stepenica</li>
                            <li>prije/poslije fotografije za veće zahvate</li>
                        </ul>
                        <p>
                            <Link href="/#kontakt">Zatražite paketnu procjenu</Link>
                        </p>

                        <h2>Čišćenje okućnica i prilaza za poslovne objekte</h2>
                        <p>
                            Za poslovne prostore, lokale, zgrade, apartmane i ugostiteljske objekte čistimo ulaze,
                            prilaze, terase, parkirna mjesta i vanjske površine koje utječu na prvi dojam klijenata
                            i gostiju. Termin rada dogovaramo prema objektu kako bismo što manje ometali poslovanje,
                            dolazak gostiju ili stanara.
                        </p>
                        <p><strong>Najčešći B2B poslovi:</strong></p>
                        <ul>
                            <li>pranje terasa kafića i restorana</li>
                            <li>čišćenje ulaza u poslovne prostore</li>
                            <li>pranje prilaza i parkinga</li>
                            <li>čišćenje okućnica apartmana i vila</li>
                            <li>čišćenje vanjskih površina stambenih zgrada</li>
                            <li>sezonsko čišćenje prije proljeća ili turističke sezone</li>
                        </ul>

                        <h2>Kada je vrijeme za profesionalno pranje okućnice?</h2>
                        <p>
                            Profesionalno čišćenje ima smisla kada se prljavština više ne može ukloniti
                            običnim pranjem, kada su fuge pune mahovine ili kada je površina postala skliska.
                            Posebno je korisno prije prodaje nekretnine, prije dolaska gostiju, prije sezone
                            rada kafića ili nakon zime.
                        </p>
                        <ul>
                            <li>tlakavci su zeleni ili crni od algi</li>
                            <li>prilaz je sklizak nakon kiše</li>
                            <li>fuge su pune mahovine i korova</li>
                            <li>na betonu su uljne mrlje ili tragovi guma</li>
                            <li>terasa izgleda tamno i zapušteno</li>
                            <li>objekt treba bolji prvi dojam</li>
                            <li>pripremate kuću, apartman ili lokal za sezonu</li>
                        </ul>

                        <h2>Posebne mrlje i situacije</h2>
                        <p>
                            Osim standardnog čišćenja, stručni smo za uklanjanje specifičnih mrlja:
                        </p>
                        <ul>
                            <li><strong>Uljne mrlje</strong> — od automobila, motora ili strojeva. Koristimo specijalne odmašćivače prilagođene podlozi.</li>
                            <li><strong>Mrlje od hrđe</strong> — od metalnih ograda, stolica ili posuda s cvijećem.</li>
                            <li><strong>Tragovi guma</strong> — na parkirnim i betonskim površinama.</li>
                            <li><strong>Mrlje od grožđa i voća</strong> — ostavljaju trajne tamne mrlje na betonu i kamenu.</li>
                        </ul>

                        <h2>Pranje okućnice u Zagrebu i okolici</h2>
                        <p>
                            Najčešće radimo na području Zagreba i Zagrebačke županije. Brzo dolazimo na procjene
                            za privatne kuće, zgrade, lokale i poslovne objekte, a za veće površine dogovaramo
                            izlazak i izvan Zagrebačke županije.
                        </p>
                        <ul>
                            <li><strong>Zapadni Zagreb:</strong> Špansko, Jarun, Stenjevec, Podsused, Črnomerec</li>
                            <li><strong>Centar i širi centar:</strong> Trešnjevka, Trnje, Maksimir</li>
                            <li><strong>Istočni Zagreb:</strong> Dubrava, Sesvete</li>
                            <li><strong>Južni Zagreb:</strong> Novi Zagreb, Velika Gorica</li>
                            <li><strong>Okolica:</strong> Samobor, Zaprešić i druga mjesta po dogovoru</li>
                        </ul>
                        <p>
                            Za veće okućnice, parkirne površine i poslovne objekte možemo dogovoriti izlazak
                            i na udaljenije lokacije.
                        </p>

                        <h2>Zašto klijenti biraju Šlauf i Šmrk za pranje okućnice?</h2>
                        <ul>
                            <li><strong>Stvarne prije/poslije fotografije</strong> — pokazujemo rezultate naših izvedbi</li>
                            <li><strong>Procjena prije početka</strong> — nema rada napamet ni nejasne cijene</li>
                            <li><strong>Rotirajuća četka i profesionalna oprema</strong> — ravnomjerno čišćenje bez pruga</li>
                            <li><strong>Brz odgovor na upite</strong> — odgovaramo u najkraćem roku</li>
                            <li><strong>Paketna usluga</strong> — okućnica, fasada, terasa i prilaz u jednom terminu</li>
                            <li><strong>Zagreb i okolica</strong> — za veće objekte moguć dogovor i izvan županije</li>
                        </ul>
                    </>
                }
                features={[
                    {
                        title: 'Uklanjanje mahovine i korova',
                        description: 'Temeljito čistimo mahovinu, korov i naslage iz fuga i s površine betonskih kocki, kamena i betona.',
                        icon: <Droplets size={24} />,
                    },
                    {
                        title: 'Rotirajuća četka',
                        description: 'Koristimo profesionalnu rotirajuću četku koja ravnomjerno čisti veliku površinu bez ostavljanja pruga.',
                        icon: <ShieldCheck size={24} />,
                    },
                    {
                        title: 'Čišćenje u jednom danu',
                        description: 'Većinu okućnica i vanjskih površina očistimo u jednom radnom danu. Dolazimo s kompletnom opremom.',
                        icon: <Clock size={24} />,
                    },
                    {
                        title: 'Prilagođena sredstva',
                        description: 'Koristimo sredstva prilagođena površini i stupnju zaprljanosti. Kod rada pazimo na okolne biljke, travu i osjetljive dijelove objekta.',
                        icon: <Leaf size={24} />,
                    },
                ]}
                commonProblems={[
                    {
                        title: 'Klizave površine',
                        description: 'Mahovina i alge čine betonske kocke, kamene ploče i betonske površine klizavima — sigurnosni rizik za sve korisnike objekta.',
                        icon: <Footprints size={24} />,
                    },
                    {
                        title: 'Korov i mahovina u fugama',
                        description: 'Trava i korov rastu između kocki i postupno razmiču fuge, uzrokujući trajno oštećenje podloge.',
                        icon: <Bug size={24} />,
                    },
                    {
                        title: 'Uljne mrlje i hrđa',
                        description: 'Ulje od automobila, hrđa od metalnih predmeta i tragovi guma koji se ne mogu ukloniti običnim pranjem.',
                        icon: <AlertTriangle size={24} />,
                    },
                    {
                        title: 'Neravnomjerna boja površine',
                        description: 'S vremenom različiti dijelovi dvorišta ili parkirišta poprimaju različite nijanse boje zbog neravnomjernog trošenja i nakupljene prljavštine.',
                        icon: <Ruler size={24} />,
                    },
                ]}
                faq={[
                    {
                        question: 'Koliko košta čišćenje okućnice u Zagrebu?',
                        answer: 'Cijena ovisi o kvadraturi i materijalu. Okvirni raspon je 2 – 4 €/m². Za okućnicu od 100 m² to je okvirno 200 – 400 €. Točna cijena ovisi o stanju površine — nudimo procjenu na lokaciji.',
                    },
                    {
                        question: 'Hoće li visokotlačno pranje oštetiti betonske kocke?',
                        answer: 'Ne. Koristimo kalibrirani tlak i rotirajuću četku koja ravnomjerno čisti bez oštećenja. Imamo iskustvo sa svim tipovima podloga.',
                    },
                    {
                        question: 'Koliko često trebam čistiti okućnicu?',
                        answer: 'Preporučujemo profesionalno čišćenje jednom godišnje, idealno u proljeće nakon zime. Okućnice u sjeni i poslovni ulazi trebaju češće čišćenje.',
                    },
                    {
                        question: 'Možete li ukloniti mrlje od ulja?',
                        answer: 'Da, koristimo specijalne odmašćivače za uljne mrlje na betonu i betonskim kockama. Starije mrlje mogu zahtijevati više tretmana.',
                    },
                    {
                        question: 'Trebam li osigurati vodu za čišćenje?',
                        answer: 'Da, najčešće se spajamo na vaš priključak za vodu i trebamo pristup struji. Profesionalnu opremu i sredstva donosimo mi.',
                    },
                    {
                        question: 'Čistite li i stepenice i rubnjake?',
                        answer: 'Da, čistimo kompletnu okućnicu uključujući stepenice, rubnjake, žardinjere i rubove uz objekt.',
                    },
                    {
                        question: 'Radite li čišćenje većih okućnica i poslovnih objekata?',
                        answer: 'Da. Osim privatnih dvorišta i prilaza, čistimo veće vanjske površine, ulaze u objekte, parkirna mjesta, terase lokala i okućnice poslovnih prostora. Za veće površine dolazimo na procjenu.',
                    },
                    {
                        question: 'Možete li očistiti parkiralište ili ulaz u poslovni prostor?',
                        answer: 'Da. Čistimo manje i srednje parkirne površine, garažne prilaze, ulaze, stepenice i betonske površine oko poslovnih objekata. Kod jačih uljnih mrlja procjenjujemo stanje jer starije mrlje mogu zahtijevati više tretmana.',
                    },
                    {
                        question: 'Koliko traje pranje okućnice?',
                        answer: 'Manje okućnice, prilazi i terase često se mogu očistiti u jednom danu. Veće površine ili jače zaprljanje mogu zahtijevati više vremena, što procjenjujemo prije početka radova.',
                    },
                    {
                        question: 'Može li se pranje okućnice kombinirati s pranjem fasade?',
                        answer: 'Da. To je često najbolji izbor jer se u istom terminu može osvježiti cijeli vanjski izgled objekta: fasada, dvorište, terasa, tlakavci i stepenice.',
                    },
                    {
                        question: 'Radite li sezonsko ili periodično održavanje?',
                        answer: 'Da, za veće privatne objekte, apartmane, lokale i poslovne prostore možemo dogovoriti sezonsko čišćenje jednom ili više puta godišnje.',
                    },
                    {
                        question: 'Uklanjate li korov iz fuga?',
                        answer: 'Uklanjamo površinski korov, mahovinu i naslage iz fuga tijekom čišćenja. Ako su fuge jako oštećene ili prazne, nakon pranja može biti potrebno ponovno fugiranje.',
                    },
                ]}
                serviceAreas={[
                    'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                    'Stenjevec', 'Črnomerec', 'Trnje', 'Novi Zagreb', 'Podsused',
                    'Velika Gorica', 'Samobor', 'Zaprešić',
                ]}
                relatedServices={[
                    { title: 'Pranje tlakavaca', href: '/usluge/pranje-tlakavaca', icon: <Ruler size={18} /> },
                    { title: 'Pranje terasa', href: '/usluge/pranje-terasa', icon: <TreeDeciduous size={18} /> },
                    { title: 'Pranje prilaza', href: '/usluge/pranje-prilaza', icon: <Footprints size={18} /> },
                ]}
            />
        </>
    );
}
