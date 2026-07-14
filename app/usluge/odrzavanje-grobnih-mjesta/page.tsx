import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, AlertTriangle, Bug, Landmark, Heart } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, TreeDeciduous, Waves } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Održavanje grobnih mjesta Zagreb, čišćenje spomenika | Šlauf i Šmrk',
    description: 'Profesionalno čišćenje i održavanje grobnih mjesta u Zagrebu. Uklanjamo mahovinu i naslage s kamenih spomenika. Mirogoj, Miroševac, Markovo Polje.',
    alternates: { canonical: '/usluge/odrzavanje-grobnih-mjesta' },
    openGraph: {
        title: 'Održavanje Grobnih Mjesta Zagreb | Šlauf i Šmrk',
        description: 'Profesionalno čišćenje i održavanje grobnih mjesta u Zagrebu. Mirogoj, Miroševac, Markovo Polje.',
        url: 'https://slaufismrk.com/usluge/odrzavanje-grobnih-mjesta',
    },
};



const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
        {
            '@type': 'Question',
            name: "Koliko košta čišćenje grobnog mjesta?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Jednokratno čišćenje kreće od 250 € (jednostruki grob) i od 300 € (dvostruki grob ili grobnica). Poliranje kamena od 150 €, impregnacija od 50 €. Konačna cijena ovisi o veličini, vrsti kamena i zaprljanosti. Predujam za rezervaciju je 30%, ostatak plaćate tek nakon fotografija rezultata.",
            },
        },
        {
            '@type': 'Question',
            name: "Kako se rezervira termin?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Javite nam se s lokacijom grobnog mjesta (groblje, polje, red, broj). Ubacujemo vas na listu za to groblje i kontaktiramo vas čim termin bude zakazan. Termin se zakazuje kada se skupi minimalno 10 grobnih mjesta na istom groblju.",
            },
        },
        {
            '@type': 'Question',
            name: "Mogu li sam odabrati datum čišćenja?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Datume ne možete slobodno birati jer čišćenje organiziramo grupno po groblju. Odlazimo kada imamo 10+ prijavljenih. Standardni rok: 1 do 3 tjedna. Za posebne datume (godišnjice, blagdani) dogovorite se unaprijed.",
            },
        },
        {
            '@type': 'Question',
            name: "Trebam li biti prisutan na groblju?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Ne, ne trebate. Samo nam dostavite lokaciju grobnog mjesta. Nakon čišćenja šaljemo vam fotografije kao potvrdu obavljenog posla.",
            },
        },
        {
            '@type': 'Question',
            name: "Zašto plaćam 30% unaprijed?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Predujam (30%) osigurava vaše mjesto na listi i potvrđuje rezervaciju. Izlazimo na teren kada skupimo 10+ rezervacija, tako možemo držati cijene pristupačnima. Ostatak plaćate tek nakon što dobijete fotografije rezultata.",
            },
        },
        {
            '@type': 'Question',
            name: "Mogu li dodati poliranje ili impregnaciju?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Da. Poliranje vraća sjaj mramoru i granitu (od 150 €). Impregnacija štiti kamen 2–3 godine od mahovine, vode i prljavštine (od 50 €). To su dodatne usluge uz nadoplatu uz čišćenje.",
            },
        },
        {
            '@type': 'Question',
            name: "Hoće li čišćenje oštetiti natpise ili fotografije na spomeniku?",
            acceptedAnswer: {
                '@type': 'Answer',
                text: "Ne, koristimo niski tlak i pažljiv pristup prilagođen vrsti kamena. Natpise i fotografije tretiramo izuzetno nježno, ručno.",
            },
        }
    ],
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
            name: 'Održavanje grobnih mjesta',
            item: 'https://slaufismrk.com/usluge/odrzavanje-grobnih-mjesta',
        }
    ],
};

export default function GrobnaMjestaPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />
            <ServicePage
            title="Održavanje Grobnih Mjesta"
            titleHighlight="Grobnih Mjesta"
            canonicalPath="/usluge/odrzavanje-grobnih-mjesta"
            description="Grobna mjesta vaših najmilijih zaslužuju dostojanstven izgled. Profesionalno čistimo i održavamo kamene nadgrobne spomenike, ploče, obrube i okolne površine na svim zagrebačkim grobljima. Ne trebate biti prisutni, šaljemo fotografije prije i poslije. Idealno za iseljenike i obitelji izvan Zagreba. Uz čišćenje nudimo poliranje kamena i impregnaciju."
            priceHint="od 250 €"
            processSteps={[
                {
                    title: 'Prijavite grobno mjesto',
                    description: 'Javite nam se s grobljem, poljem, redom i brojem groba (ako ne znate sve, nije problem, pomoći ćemo). WhatsApp, poziv ili forma, što vam je najbrže.',
                },
                {
                    title: 'Potvrda i predujam 30%',
                    description: 'Šaljemo pisanu potvrdu i upute za uplatu predujma (30%). Ostatak plaćate tek nakon što vidite fotografije rezultata.',
                },
                {
                    title: 'Detaljno čišćenje',
                    description: 'Čistimo spomenik, ploču, obrube, posude za cvijeće i sve kamene elemente.',
                },
                {
                    title: 'Fotografija rezultata',
                    description: 'Šaljemo vam fotografije prije i poslije čišćenja kao potvrdu obavljenog posla.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto profesionalno čišćenje grobnog mjesta?</h2>
                    <p>
                        Mnogi ljudi žele održavati grobna mjesta svojih najmilijih, ali <strong>nemaju vremena,
                            fizičke mogućnosti ili žive daleko</strong>. Starije osobe teško kleče i čiste, a iseljenici
                        ne mogu redovito posjećivati groblja.
                    </p>
                    <p>
                        Profesionalnim čišćenjem osiguravate da grobno mjesto izgleda dostojanstveno
                        cijelo vrijeme. Čistimo s posebnom <strong>pažnjom i poštovanjem</strong>, koristeći nježan
                        pristup prilagođen osjetljivom okruženju.
                    </p>

                    <h2>Što čistimo?</h2>
                    <ul>
                        <li><strong>Nadgrobni spomenik</strong> od mramora, granita ili vapnenca. Uklanjamo zelenilo, mahovinu i kalcifikacije.</li>
                        <li><strong>Nadgrobna ploča</strong> bez oštećivanja natpisa i fotografija.</li>
                        <li><strong>Obrubi i rubne ploče</strong> kameni ili betonski obrubi koji zelene i tamne.</li>
                        <li><strong>Posude za cvijeće</strong> kamene i betonske žardinjere.</li>
                        <li><strong>Okolna površina</strong> oko groba od korova, lišća i prljavštine.</li>
                    </ul>
                    <p>
                        Za opće informacije o čišćenju kamena pogledajte našu stranicu <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje
                            kamenih površina</Link>.
                    </p>

                    <h2>Na kojim grobljima radimo?</h2>
                    <p>
                        Pokrivamo <strong>sva veća groblja u Zagrebu i okolici</strong>:
                    </p>
                    <ul>
                        <li><strong>Mirogoj</strong></li>
                        <li><strong>Miroševac</strong></li>
                        <li><strong>Markovo Polje</strong></li>
                        <li><strong>Krematorij</strong> (Spomenici za urne-kazete i okolni prostori)</li>
                        <li><strong>Brestje</strong></li>
                        <li>Ostala groblja u <Link href="/podrucje/zagreb">Zagrebu</Link> i okolici po dogovoru</li>
                    </ul>

                    <h2>Cijene</h2>
                    <p>
                        Detaljan pregled cijena s primjerima i faktorima koji utječu na konačnu ponudu
                        pogledajte u našem vodiču{' '}
                        <Link href="/blog/koliko-kosta-ciscenje-grobnog-mjesta">koliko košta čišćenje grobnog mjesta</Link>.
                    </p>
                    <ul>
                        <li><strong>Jednokratno čišćenje (jednostruki grob)</strong>: od 250 €</li>
                        <li><strong>Jednokratno čišćenje (dvostruki grob / grobnica)</strong>: od 300 €</li>
                        <li><strong>Poliranje kamena</strong> (vraćamo sjaj mramoru i granitu): od 150 €</li>
                        <li><strong>Impregnacija</strong> (zaštitni premaz, grob ostaje čist 2–3 godine): od 50 €</li>
                        <li><strong>Predujam za rezervaciju</strong>: 30% (ostatak plaćate tek nakon fotografija rezultata)</li>
                    </ul>

                    <h2>Kako funkcionira rezervacija?</h2>
                    <p>
                        Čišćenje grobnih mjesta organiziramo po <strong>grupnim terminima po groblju</strong>. Odlazimo kada
                        se na pojedinom groblju skupi minimalno 10 prijavljenih grobnih mjesta. Razlog je jednostavan:
                        dolazak na groblje s opremom ima smisla samo kada imamo dovoljno posla na jednom mjestu.
                    </p>
                    <p>
                        To znači da <strong>vi ne birate točan datum</strong>, ali znate da ćete biti obaviješteni čim
                        termin za vaše groblje bude zakazan. Standardni rok izlaska: 1 do 3 tjedna nakon uplate predujma.
                    </p>
                    <p>
                        Za rezervaciju mjesta na listi potrebno je platiti <strong>30% predujma</strong>.
                        Ostatak se plaća po završetku radova, uz dostavu fotografija prije i poslije.
                    </p>

                    <h2>Usluga bez vaše prisutnosti</h2>
                    <p>
                        Ne trebate biti na groblju dok radimo. Jednostavno nam dostavite <strong>lokaciju grobnog
                            mjesta</strong> (groblje, polje, red, broj) i mi ćemo obaviti posao. Nakon čišćenja
                        šaljemo vam <strong>fotografije prije i poslije</strong> kao potvrdu.
                    </p>
                    <p>
                        Ova usluga posebno je dragocjena za <strong>iseljenike i osobe koje žive izvan Zagreba</strong>,
                        a žele da grobno mjesto njihovih najmilijih uvijek izgleda dostojanstveno.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Pažljivo čišćenje',
                    description: 'S posebnim poštovanjem čistimo svaki element grobnog mjesta: spomenik, ploču, obrube i posude.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Prilagođen pristup',
                    description: 'Koristimo niski tlak i pH-neutralna sredstva prilagođena mramoru, granitu i vapnencu.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Fotografije rezultata',
                    description: 'Šaljemo vam fotografije prije i poslije čišćenja. Ne trebate biti prisutni.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Redovito održavanje',
                    description: 'Nudimo godišnji program održavanja (4x godišnje) po posebnoj cijeni za stalan dostojanstven izgled.',
                    icon: <Heart size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Zelene naslage na mramoru',
                    description: 'Mahovine i alge koje se posebno brzo razvijaju na sjenovitim dijelovima groblja. Narušavaju dostojanstven izgled.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Potamneli natpisi',
                    description: 'Natpisi i ugravirani elementi potamnjuju i postaju teško čitljivi pod nanosima prljavštine.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Oštećenja od drveća',
                    description: 'Smola, listovi i ptičji izmet od okolnog drveća ostavljaju mrlje koje se suše i postaju sve teže za ukloniti.',
                    icon: <Landmark size={24} />,
                },
                {
                    title: 'Nemogućnost osobnog čišćenja',
                    description: 'Starije osobe, iseljenici i zaposleni koji nemaju fizičku mogućnost ili vrijeme za redovito čišćenje.',
                    icon: <Heart size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta čišćenje grobnog mjesta?',
                    answer: 'Jednokratno čišćenje kreće od 250 € (jednostruki grob) i od 300 € (dvostruki grob ili grobnica). Poliranje kamena od 150 €, impregnacija od 50 €. Konačna cijena ovisi o veličini, vrsti kamena i zaprljanosti. Predujam za rezervaciju je 30%, ostatak plaćate tek nakon fotografija rezultata.',
                },
                {
                    question: 'Kako se rezervira termin?',
                    answer: 'Javite nam se s lokacijom grobnog mjesta (groblje, polje, red, broj). Ubacujemo vas na listu za to groblje i kontaktiramo vas čim termin bude zakazan. Termin se zakazuje kada se skupi minimalno 10 grobnih mjesta na istom groblju.',
                },
                {
                    question: 'Mogu li sam odabrati datum čišćenja?',
                    answer: 'Datume ne možete slobodno birati jer čišćenje organiziramo grupno po groblju. Odlazimo kada imamo 10+ prijavljenih. Standardni rok: 1 do 3 tjedna. Za posebne datume (godišnjice, blagdani) dogovorite se unaprijed.',
                },
                {
                    question: 'Trebam li biti prisutan na groblju?',
                    answer: 'Ne, ne trebate. Samo nam dostavite lokaciju grobnog mjesta. Nakon čišćenja šaljemo vam fotografije kao potvrdu obavljenog posla.',
                },
                {
                    question: 'Zašto plaćam 30% unaprijed?',
                    answer: 'Predujam (30%) osigurava vaše mjesto na listi i potvrđuje rezervaciju. Izlazimo na teren kada skupimo 10+ rezervacija, tako možemo držati cijene pristupačnima. Ostatak plaćate tek nakon što dobijete fotografije rezultata.',
                },
                {
                    question: 'Mogu li dodati poliranje ili impregnaciju?',
                    answer: 'Da. Poliranje vraća sjaj mramoru i granitu (od 150 €). Impregnacija štiti kamen 2–3 godine od mahovine, vode i prljavštine (od 50 €). To su dodatne usluge uz nadoplatu uz čišćenje.',
                },
                {
                    question: 'Hoće li čišćenje oštetiti natpise ili fotografije na spomeniku?',
                    answer: 'Ne, koristimo niski tlak i pažljiv pristup prilagođen vrsti kamena. Natpise i fotografije tretiramo izuzetno nježno, ručno.',
                },
            ]}
            serviceAreas={[
                'Mirogoj', 'Miroševac', 'Markovo Polje', 'Brestje', 'Krematorij',
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Velika Gorica', 'Samobor',
            ]}
            relatedServices={[
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Pranje bazena', href: '/usluge/pranje-bazena', icon: <Waves size={18} /> },
            ]}
        />
        </>
    );
}
