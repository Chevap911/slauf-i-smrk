import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, AlertTriangle, Bug, Landmark, Heart } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, TreeDeciduous, Waves } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Održavanje Grobnih Mjesta Zagreb — Čišćenje Kamenih Spomenika | Šlauf i Šmrk',
    description: 'Profesionalno čišćenje i održavanje grobnih mjesta u Zagrebu. Uklanjamo mahovinu i naslage s kamenih spomenika. Mirogoj, Miroševac, Markovo Polje.',
    alternates: { canonical: '/usluge/odrzavanje-grobnih-mjesta' },
    openGraph: {
        title: 'Održavanje Grobnih Mjesta Zagreb | Šlauf i Šmrk',
        description: 'Profesionalno čišćenje i održavanje grobnih mjesta u Zagrebu. Mirogoj, Miroševac, Markovo Polje.',
        url: 'https://slaufismrk.com/usluge/odrzavanje-grobnih-mjesta',
    },
};

export default function GrobnaMjestaPage() {
    return (
        <ServicePage
            title="Održavanje Grobnih Mjesta"
            titleHighlight="Grobnih Mjesta"
            canonicalPath="/usluge/odrzavanje-grobnih-mjesta"
            description="Grobna mjesta vaših najmilijih zaslužuju dostojanstven izgled. Profesionalno čistimo i održavamo kamene nadgrobne spomenike, ploče, obrube i okolne površine. Uklanjamo mahovinu, lišajeve i nakupljenu prljavštinu s poštovanjem i pažnjom."
            priceHint="od 100 €"
            processSteps={[
                {
                    title: 'Dogovor i lokacija',
                    description: 'Javite nam se s lokacijom grobnog mjesta (groblje, polje, red). Možemo doći i bez vaše prisutnosti.',
                },
                {
                    title: 'Prilagođeno čišćenje',
                    description: 'Koristimo niski tlak i sredstva prilagođena vrsti kamena — mramor, granit ili vapnenac.',
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
                        cijelo vrijeme. Čistimo s posebnom <strong>pažnjom i poštovanjem</strong>, koristeći njiežan
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

                    <h2>Cijene održavanja</h2>
                    <ul>
                        <li><strong>Početna cijena usluge</strong>: od 100 €</li>
                        <li><strong>Konačna cijena</strong>: ovisi o veličini grobnog mjesta, vrsti kamena, zaprljanosti i opsegu održavanja.</li>
                        <li><strong>Redovito održavanje</strong> (4x godišnje): posebna cijena po dogovoru</li>
                    </ul>

                    <h2>Kako funkcionira rezervacija?</h2>
                    <p>
                        Čišćenje grobnih mjesta organiziramo po <strong>grupnim terminima po groblju</strong>. Odlazimo kada
                        se na pojedinom groblju skupi minimalno 10 prijavljenih grobnih mjesta. Razlog je jednostavan:
                        dolazak na groblje s opremom ima smisla samo kada imamo dovoljno posla na jednom mjestu.
                    </p>
                    <p>
                        To znači da <strong>vi ne birate točan datum</strong>, ali znate da ćete biti obaviješteni čim
                        termin za vaše groblje bude zakazan. Većina klijenata čeka 2 do 4 tjedna ovisno o groblju.
                    </p>
                    <p>
                        Za rezervaciju mjesta na listi potrebno je platiti <strong>50% predujma</strong>.
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
                    answer: 'Početna cijena kreće od 100 €. Konačna cijena ovisi o veličini grobnog mjesta, vrsti kamena i opsegu radova. Za rezervaciju mjesta na listi plaća se 50% predujma, ostatak po završetku.',
                },
                {
                    question: 'Kako se rezervira termin?',
                    answer: 'Javite nam se s lokacijom grobnog mjesta (groblje, polje, red, broj). Ubacujemo vas na listu za to groblje i kontaktiramo vas čim termin bude zakazan. Termin se zakazuje kada se skupi minimalno 10 grobnih mjesta na istom groblju.',
                },
                {
                    question: 'Mogu li sam odabrati datum čišćenja?',
                    answer: 'Datume ne možete slobodno birati jer čišćenje organiziramo grupno. Odlazimo na groblje kada imamo dovoljno prijavljenih. Većina klijenata čeka 2 do 4 tjedna.',
                },
                {
                    question: 'Trebam li biti prisutan na groblju?',
                    answer: 'Ne, ne trebate. Samo nam dostavite lokaciju grobnog mjesta. Nakon čišćenja šaljemo vam fotografije kao potvrdu obavljenog posla.',
                },
                {
                    question: 'Zašto plaćam 50% unaprijed?',
                    answer: 'Predujam osigurava vaše mjesto na listi i potvrđuje rezervaciju. Ostatak plaćate po završetku radova, uz fotografije kao dokaz.',
                },
                {
                    question: 'Hoće li čišćenje oštetiti natpise ili fotografije na spomeniku?',
                    answer: 'Ne, koristimo niski tlak i pažljiv pristup prilagođen vrsti kamena. Natpise i fotografije tretiramo izuzetno nježno.',
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
    );
}
