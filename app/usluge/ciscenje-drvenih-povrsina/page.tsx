import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Paintbrush, Sun } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, TreeDeciduous, Waves } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Čišćenje Drvenih Površina Zagreb — Terase, Ograde, Namještaj | Šlauf i Šmrk',
    description: 'Profesionalno čišćenje drvenih terasa, ograda, pergola i vrtnog namještaja u Zagrebu. Uklanjamo sivilo, alge i mahovinu. Besplatna procjena.',
};

export default function DrvenePovrsinePage() {
    return (
        <ServicePage
            title="Čišćenje Drvenih Površina"
            titleHighlight="Drvenih Površina"
            description="Drvo s vremenom gubi boju i sivi pod utjecajem sunca, kiše i vlage. Profesionalnim čišćenjem uklanjamo sivilo, alge i nakupljenu prljavštinu s terasa, ograda, pergola i vrtnog namještaja. Vraćamo drvu izvornu toplinu i ljepotu."
            priceHint="od 8 €/m²"
            processSteps={[
                {
                    title: 'Procjena drva',
                    description: 'Identificiramo vrstu drva i stupanj oštećenja. Biramo odgovarajući tlak i sredstvo za čišćenje.',
                },
                {
                    title: 'Nježno čišćenje',
                    description: 'Niskim tlakom i mekanom četkom uklanjamo sivilo, alge i prljavštinu bez oštećenja drvenih vlakana.',
                },
                {
                    title: 'Ispiranje',
                    description: 'Temeljito ispiremo sve ostatke sredstva za čišćenje čistom vodom.',
                },
                {
                    title: 'Sušenje i savjet',
                    description: 'Savjetujemo vas o daljnjem tretmanu — bojanju, lakizanju ili nauljivanju za dugotrajan lijepi izgled.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto drvo sivi i propada?</h2>
                    <p>
                        Drvene površine na otvorenom izložene su <strong>UV zračenju, kiši, vlazi i temperaturnim
                            promjenama</strong> koje uzrokuju razgradnju prirodnih ulja i smola u drvu. To rezultira
                        prepoznatljivim sivim tonovima koji odaju zanemareno dvorište.
                    </p>
                    <p>
                        Osim estetskog problema, na vlažnom drvu rastu <strong>alge i plijesni</strong> koje duboko
                        prodiru u vlakna i ubrzavaju proces truljenja. Bez redovitog održavanja, drvena terasa ili
                        ograda može propasti za samo nekoliko godina.
                    </p>

                    <h2>Koje drvene površine čistimo?</h2>
                    <ul>
                        <li><strong>Drvene terase (decking)</strong> — WPC, bor, ariš, tik, bangkirai. Svaki materijal zahtijeva poseban pristup.</li>
                        <li><strong>Drvene ograde</strong> — letvice, paneli, prirodne ograde.</li>
                        <li><strong>Pergole i nadstrešnice</strong> — nosive konstrukcije i dekorativni elementi.</li>
                        <li><strong>Vrtni namještaj</strong> — stolovi, stolice, klupe, ležaljke.</li>
                        <li><strong>Drvene fasade</strong> — obloge od drva. Kombiniramo s <Link href="/usluge/pranje-fasade">pranjem fasade</Link>.</li>
                        <li><strong>Drveni podovi</strong> — balkonski i terasni podovi.</li>
                    </ul>

                    <h2>Čišćenje vs. brušenje drva</h2>
                    <p>
                        Mnogi ljudi misle da je jedini način obnove posivjelog drva <strong>brušenje</strong>.
                        Međutim, profesionalno čišćenje niskim tlakom može postići jednak rezultat bez uklanjanja
                        sloja materijala. Prednosti čišćenja pred brušenjem:
                    </p>
                    <ul>
                        <li><strong>Brže</strong> — čišćenje traje 2–3 sata umjesto cijelog dana brušenja.</li>
                        <li><strong>Jeftinije</strong> — ne trebate kupovati brusni papir ni plaćati višednevnu uslugu.</li>
                        <li><strong>Manje prašine</strong> — nema prašine po cijelom dvorištu.</li>
                        <li><strong>Manje oštećenja</strong> — ne skidamo sloj drva, poštujemo originalne dimenzije.</li>
                    </ul>

                    <h2>Nakon čišćenja — što dalje?</h2>
                    <p>
                        Očišćeno drvo idealno je za <strong>nauljivanje, lazuriranje ili bojanje</strong>.
                        Preporučujemo tretman unutar 48 sati od čišćenja dok su pore drva otvorene i spremne
                        za upijanje zaštitnog sredstva. Možemo vam preporučiti kvalitetna ulja i lazure za vašu
                        vrstu drva.
                    </p>
                    <p>
                        Za kompletnu obnovu dvorišta, kombinirte čišćenje drva s <Link href="/usluge/pranje-okucnice">pranjem
                            okućnice</Link> i <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenjem kamenih površina</Link>.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Nježno čišćenje niskim tlakom',
                    description: 'Koristimo kalibrirani niski tlak koji uklanja prljavštinu bez oštećenja drvenih vlakana.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Vraćanje izvorne boje',
                    description: 'Uklanjamo sivi sloj i vraćamo drvu prirodnu toplinu i boju — bez brušenja.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Brz postupak',
                    description: 'Prosječnu terasu očistimo za 2–3 sata. Ograda od 10 m traje oko sat vremena.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Ekološka sredstva za drvo',
                    description: 'Sredstva za čišćenje drva su biorazgradiva i ne oštećuju okolne biljke ni travu.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Posivjela terasa',
                    description: 'Drvena terasa izgubila je boju i izgleda staro i zanemareno. UV zrake razgrađuju prirodna ulja u drvu.',
                    icon: <Sun size={24} />,
                },
                {
                    title: 'Klizava ograda od algi',
                    description: 'Zelene alge i mahovine čine drvenu ogradu klizavom i neuglednom, a ubrzavaju truljenje.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Ljuštenje boje na pergoli',
                    description: 'Stara boja se ljušti i puca, što omogućava vlazi da prodre u drvo i uzrokuje dalja oštećenja.',
                    icon: <Paintbrush size={24} />,
                },
                {
                    title: 'Plijesan na namještaju',
                    description: 'Crne mrlje plijesni na vrtnim stolcima i klupama koje se ne mogu ukloniti običnim pranjem.',
                    icon: <AlertTriangle size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Hoće li visokotlačno pranje oštetiti drvo?',
                    answer: 'Ne, koristimo kalibrirani niski tlak (60–80 bar) i mekanu četku. To je dovoljno za uklanjanje prljavštine, ali nježno za drvena vlakna.',
                },
                {
                    question: 'Koliko košta čišćenje drvene terase?',
                    answer: 'Cijena kreće od 8 €/m². Za terasu od 20 m² to je otprilike 160–200 €. Besplatna procjena na licu mjesta.',
                },
                {
                    question: 'Trebam li nauljivati drvo nakon čišćenja?',
                    answer: 'Preporučujemo nauljivanje ili lazuriranje unutar 48 sati od čišćenja. To značajno produžuje vijek trajanja i izgled drva.',
                },
                {
                    question: 'Čistite li i WPC terase?',
                    answer: 'Da, WPC (drvo-plastični kompoziti) čistimo prilagođenim tlakom. WPC zahtijeva manje održavanja od prirodnog drva.',
                },
                {
                    question: 'Koja je razlika između čišćenja i brušenja drva?',
                    answer: 'Čišćenje ne skida sloj materijala, već samo uklanja prljavštinu i vraća boju. Brže je, jeftinije i manje invazivno od brušenja.',
                },
                {
                    question: 'Koliko često trebam čistiti drvenu terasu?',
                    answer: 'Preporučujemo jednom godišnje, idealno u proljeće. Redovitim održavanjem terasa može trajati 15–20+ godina.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Novi Zagreb', 'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                { title: 'Pranje bazena', href: '/usluge/pranje-bazena', icon: <Waves size={18} /> },
            ]}
        />
    );
}
