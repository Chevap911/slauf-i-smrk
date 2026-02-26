import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Landmark, Snowflake } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, HeartHandshake, TreeDeciduous } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Čišćenje Kamenih Površina Zagreb — Kamen, Granit, Mramor | Šlauf i Šmrk',
    description: 'Profesionalno čišćenje kamenih površina: klupice, stolovi, staze, zidovi, kipovi. Uklanjamo mahovinu, lišaje i mrlje s kamena. Zagreb i okolica.',
};

export default function KamenePovsinePage() {
    return (
        <ServicePage
            title="Čišćenje Kamenih Površina"
            titleHighlight="Kamenih Površina"
            description="Kamen je izdržljiv, ali s vremenom gubi ljepotu pod nanosima mahovine, lišajeva i prljavštine. Profesionalnim čišćenjem vraćamo izvorni sjaj kamenim stazama, klupicama, zidovima, kipovima i fasadnim oblogama. Prilagođavamo pristup svakom tipu kamena."
            priceHint="od 6 €/m²"
            processSteps={[
                {
                    title: 'Identifikacija kamena',
                    description: 'Pregledamo tip kamena (granit, mramor, travertin, vapnenac) i biramo odgovarajuću metodu čišćenja.',
                },
                {
                    title: 'Predtretman',
                    description: 'Nanosimo sredstvo koje otpušta mahovinu, lišajeve i duboku prljavštinu bez oštećenja kamena.',
                },
                {
                    title: 'Čišćenje prilagođenim tlakom',
                    description: 'S precizno kalibriranim tlakom čistimo kamen — dovoljno jak za prljavštinu, ali nježan za površinu.',
                },
                {
                    title: 'Zaštita i pregled',
                    description: 'Po potrebi nanosimo zaštitni premaz koji sprječava brzi ponovni rast mahovine.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Koje vrste kamena čistimo?</h2>
                    <p>
                        Naš tim ima iskustvo s čišćenjem <strong>svih tipova kamena</strong> koji se koriste u
                        eksterijeru i interijeru:
                    </p>
                    <ul>
                        <li><strong>Granit</strong> — otporan kamen, ali lišajevi i mahovine duboko prodiru u pore.</li>
                        <li><strong>Mramor</strong> — zahtijeva niži tlak i pH-neutralna sredstva. Nikada se ne smije čistiti kiselim sredstvima.</li>
                        <li><strong>Travertin</strong> — popularan za terase i bazene. Porozan je i brzo upija prljavštinu.</li>
                        <li><strong>Vapnenac</strong> — čest na starijim kućama i ogradama. Mek kamen koji zahtijeva nježan pristup.</li>
                        <li><strong>Pješčenjak</strong> — sjajan za zidove i staze, ali vrlo porozan.Tretiramo ga niskim tlakom.</li>
                        <li><strong>Obložni kamen</strong> — fasadne obloge od kamena čistimo zajedno s <Link href="/usluge/pranje-fasade">pranjem fasade</Link>.</li>
                    </ul>

                    <h2>Gdje se koriste kamene površine?</h2>
                    <p>
                        Kamen se u Zagrebu i okolici najčešće koristi za:
                    </p>
                    <ul>
                        <li><strong>Vrtne staze i prilaze</strong> — kamene ploče i kocke. Za betonske kocke pogledajte <Link href="/usluge/pranje-okucnice">čišćenje okućnice</Link>.</li>
                        <li><strong>Ograde i zidove</strong> — kameni zidići i gabioni koji zelene od mahovine.</li>
                        <li><strong>Klupice, stolove i fontane</strong> — vrtni kameni namještaj.</li>
                        <li><strong>Nadgrobne spomenike</strong> — za detalje pogledajte <Link href="/usluge/odrzavanje-grobnih-mjesta">održavanje grobnih mjesta</Link>.</li>
                        <li><strong>Skulpture i ukrasne elemente</strong> — kipovi, vaze, kamene posude.</li>
                        <li><strong>Bazenske obloge</strong> — kamene ploče oko bazena. Kombiniramo s <Link href="/usluge/pranje-bazena">čišćenjem bazena</Link>.</li>
                    </ul>

                    <h2>Koliko košta čišćenje kamena?</h2>
                    <ul>
                        <li><strong>Kamene staze</strong>: od 6 €/m²</li>
                        <li><strong>Kameni zidić</strong> (do 10 m²): od 80 €</li>
                        <li><strong>Vrtna klupica</strong>: od 30 €</li>
                        <li><strong>Kameni stol</strong>: od 40 €</li>
                        <li><strong>Nadgrobni spomenik</strong>: od 50 €</li>
                    </ul>

                    <h2>Zašto profesionalno čišćenje, a ne sam?</h2>
                    <p>
                        Pokušaj samostalnog čišćenja kamena često rezultira <strong>oštećenjima</strong>. Previsok
                        tlak može izbiti materijal iz površine, a neodgovarajuća sredstva mogu promijeniti boju kamena
                        ili uzrokovati kemijske mrlje. Posebno je opasan <strong>klor</strong> koji mnogi koriste za
                        uklanjanje mahovine — on može trajno oštetiti kamen i okolne biljke.
                    </p>
                    <p>
                        Mi koristimo profesionalnu opremu s preciznom regulacijom tlaka i <strong>pH-neutralna
                            sredstva</strong> prilagođena svakom tipu kamena.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Prilagođen tlak za svaki kamen',
                    description: 'Kalibriramo tlak za svaki tip kamena — od nježnog za mramor do snažnijeg za granit.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'pH-neutralna sredstva',
                    description: 'Koristimo sredstva koja čiste bez oštećenja kamena, bezboja i promjene teksture.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Uklanjanje lišajeva',
                    description: 'Specijalni tretman za lišajeve koji se duboko ukorjenjuju u pore kamena.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Zaštitni premaz',
                    description: 'Po želji nanosimo impregnaciju koja sprječava brzi ponovni rast mahovine i lišajeva.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Zeleni lišajevi na kamenu',
                    description: 'Lišajevi se duboko ukorjenjuju u pore kamena i ne mogu se ukloniti običnim pranjem. Njihovi korijeni prodiru milimetre u površinu.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Crne mrlje na granitnim stazama',
                    description: 'Gljivice i alge stvaraju tamne mrlje na kamenim stazama koje postaju klizave i opasne po kiši.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Potamnjeli nadgrobni spomenici',
                    description: 'Kameni spomenici potamnjuju od zagađenja, kiše i biološkog obrastanja. Čišćenjem vraćamo dostojanstven izgled.',
                    icon: <Landmark size={24} />,
                },
                {
                    title: 'Oštećenja od mraza',
                    description: 'Voda zarobljena u porama kamena smrzava se i uzrokuje pukotine. Čist kamen s impregnacijom bolje se odupire mrazu.',
                    icon: <Snowflake size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Može li se visokotlačno čistiti mramor?',
                    answer: 'Da, ali s pažljivo kalibriranim niskim tlakom i pH-neutralnim sredstvima. Nikada ne koristimo kisela sredstva na mramoru.',
                },
                {
                    question: 'Koliko traje čišćenje kamene staze?',
                    answer: 'Prosječna kamena staza od 30–50 m² čisti se za 2–3 sata. Veće površine zahtijevaju pola dana do cijeli dan.',
                },
                {
                    question: 'Hoće li se mahovine brzo vratiti?',
                    answer: 'S redovitim čišćenjem jednom godišnje, mahovine neće imati priliku duboko se ukorijeniti. Zaštitni premaz dodatno usporava rast.',
                },
                {
                    question: 'Čistite li i unutarnje kamene površine?',
                    answer: 'Da, čistimo kamene podove, stepenice i zidove u interijeru s prilagođenom opremom za unutarnje prostore.',
                },
                {
                    question: 'Može li čišćenje kamena oštetiti okolne biljke?',
                    answer: 'Ne, naša sredstva su biorazgradiva i sigurna za biljke. Dodatno zaštićujemo osjetljive biljke prije čišćenja.',
                },
                {
                    question: 'Koliko košta čišćenje kamene ograde?',
                    answer: 'Cijena ovisi o veličini i zaprljanosti. Za kameni zidić do 10 m² cijena kreće od 80 €. Besplatna procjena.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Novi Zagreb', 'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Grobna mjesta', href: '/usluge/odrzavanje-grobnih-mjesta', icon: <HeartHandshake size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Drvene površine', href: '/usluge/ciscenje-drvenih-povrsina', icon: <TreeDeciduous size={18} /> },
            ]}
        />
    );
}
