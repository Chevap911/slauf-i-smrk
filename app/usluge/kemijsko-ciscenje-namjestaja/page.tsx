import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Sparkles, Shirt } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Car, Home, TreeDeciduous } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Kemijsko Čišćenje Tepiha i Garnitura Zagreb | Šlauf i Šmrk',
    description: 'Profesionalno kemijsko čišćenje tepiha, garnitura, madraca i autosjedala u Zagrebu. Dubinsko čišćenje na vašoj adresi. Besplatna procjena.',
};

export default function KemijskoCiscenjePage() {
    return (
        <ServicePage
            title="Kemijsko Čišćenje Namještaja"
            titleHighlight="Namještaja"
            description="Profesionalno dubinsko čišćenje tepiha, garnitura, madraca, stolica i autosjedala na vašoj adresi. Koristimo profesionalne injektirno-ekstrakcijske strojeve koji dubinski uklanjaju prljavštinu, grinje, alergene i mrlje. Vaš namještaj bit će čist, svjež i bez neugodnih mirisa."
            priceHint="tepih od 5 €/m² · garnitura od 60 €"
            processSteps={[
                {
                    title: 'Pregled i ponuda',
                    description: 'Ispitujemo materijal, identificiramo mrlje i dajemo jasnu ponudu bez skrivenih troškova.',
                },
                {
                    title: 'Tretiranje mrlja',
                    description: 'Posebno tretiramo tvrdokorne mrlje odgovarajućim sredstvima prije glavnog čišćenja.',
                },
                {
                    title: 'Dubinsko čišćenje',
                    description: 'Injektirno-ekstrakcijskim strojem utiskujemo sredstvo duboko u vlakna i izvlačimo svu prljavštinu.',
                },
                {
                    title: 'Sušenje i kontrola',
                    description: 'Namještaj se suši 4–6 sati. Pregledavamo rezultat i po potrebi dodatno tretiramo mrlje.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Što je kemijsko čišćenje namještaja?</h2>
                    <p>
                        Kemijsko čišćenje (ili dubinsko čišćenje) je profesionalni postupak čišćenja mekih površina pomoću
                        <strong> injektirno-ekstrakcijskog stroja</strong>. Stroj pod pritiskom utiskuje otopinu
                        sredstva za čišćenje duboko u vlakna tkanine, a zatim snažnom ekstrakcijom izvlači svu prljavštinu,
                        grinje, bakterije i alergene. Rezultat je namještaj koji izgleda i miriše kao nov.
                    </p>
                    <p>
                        Za razliku od običnog usisavanja ili pranja površine, dubinsko kemijsko čišćenje doseže
                        <strong> dubinu od 2–3 cm u tkaninu</strong>, čime uklanja prljavštinu koja se godinama taloži
                        unutar vlakana.
                    </p>

                    <h2>Što sve čistimo?</h2>
                    <ul>
                        <li><strong>Tepisi</strong> — vuneni, sintetički, persijski, kilimi. Svaki materijal zahtijeva poseban pristup.</li>
                        <li><strong>Garniture i sofe</strong> — tkanine, mikrovlakna, pliš. Kožne garniture tretiramo posebnim sredstvima.</li>
                        <li><strong>Madraci</strong> — uklanjamo grinje, znoj, mrlje i alergene za zdraviji san.</li>
                        <li><strong>Stolice</strong> — kancelarijske, blagovaonske, fotelje.</li>
                        <li><strong>Autosjedala</strong> — kompletno čišćenje interijera vozila. Za potpuni tretman pogledajte <Link href="/usluge/detailing-automobila">detailing automobila</Link>.</li>
                        <li><strong>Tepisi u poslovnim prostorima</strong> — uredski tepisi, hodnici, čekaonice.</li>
                    </ul>

                    <h2>Koliko košta kemijsko čišćenje?</h2>
                    <ul>
                        <li><strong>Tepih</strong>: od 5 €/m²</li>
                        <li><strong>Trosjed</strong>: od 40 €</li>
                        <li><strong>Dvosjed</strong>: od 30 €</li>
                        <li><strong>Fotelja</strong>: od 20 €</li>
                        <li><strong>Kompletna garnitura</strong> (3+2+1): od 80 €</li>
                        <li><strong>Madrac</strong> (jednostruki): od 30 €</li>
                        <li><strong>Madrac</strong> (bračni): od 40 €</li>
                    </ul>
                    <p>
                        Za veće projekte i poslovne prostore nudimo posebne cijene. Čišćenje obavljamo
                        <strong> na vašoj adresi</strong> — ne trebate nositi namještaj nikuda.
                    </p>

                    <h2>Zašto je dubinsko čišćenje važno za zdravlje?</h2>
                    <p>
                        Vaša garnitura i tepisi dnevno upijaju prašinu, znoj, kožne čestice, dlake kućnih ljubimaca
                        i bakterije. U jednom kvadratnom metru tepiha može biti <strong>do 200.000 grinja</strong>
                        koje uzrokuju alergije, rinitis i probleme s disanjem.
                    </p>
                    <p>
                        Dubinskim kemijskim čišćenjem uklanjamo do <strong>98% grinja i alergena</strong>, čime
                        značajno poboljšavamo kvalitetu zraka u vašem domu. Posebno preporučujemo čišćenje
                        obiteljima s malom djecom, astmatičarima i vlasnicima kućnih ljubimaca.
                    </p>

                    <h2>Koliko često trebam čistiti namještaj?</h2>
                    <p>
                        Preporučujemo dubinsko kemijsko čišćenje garnitura <strong>jednom do dva puta godišnje</strong>.
                        Tepihe je idealno čistiti <strong>svake 6–12 mjeseci</strong>, ovisno o intenzitetu korištenja.
                        Ako imate kućne ljubimce ili malu djecu, preporučujemo češće čišćenje.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Dubinsko uklanjanje prljavštine',
                    description: 'Injektirno-ekstrakcijski stroj prodire 2–3 cm duboko u vlakna i izvlači svu nakupljenu prljavštinu.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Uklanjanje grinja i alergena',
                    description: 'Uklanjamo do 98% grinja, bakterija i alergena — idealno za obitelji s djecom i astmatičare.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Brzo sušenje',
                    description: 'Namještaj se suši 4–6 sati zahvaljujući snažnoj ekstrakciji vlage. Tepisi se suše do 8 sati.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Hipoalergena sredstva',
                    description: 'Koristimo profesionalna sredstva bez mirisa i agresivnih kemikalija, sigurna za djecu i ljubimce.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Mrlje od kave i vina',
                    description: 'Kava, vino i sokovi ostavljaju tvrdokorne mrlje na garnituri i tepihu koje se ne mogu ukloniti običnim sredstvima.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Neugodan miris',
                    description: 'Garnitura i tepisi s vremenom upijaju mirise hrane, cigareta ili vlage. Kemijskim čišćenjem neutraliziramo sve mirise.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Mrlje od kućnih ljubimaca',
                    description: 'Urin, dlake i blato od pasa i mačaka duboko prodiru u vlakna. Koristimo enzimska sredstva za potpuno uklanjanje.',
                    icon: <Sparkles size={24} />,
                },
                {
                    title: 'Prljav madrac',
                    description: 'Znojne mrlje, grinje i bakterije koje se talože u madracu narušavaju kvalitetu sna i zdravlje.',
                    icon: <Shirt size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta kemijsko čišćenje garniture?',
                    answer: 'Cijena garniture (trosjed+dvosjed+fotelja) kreće se od 80 €. Točna cijena ovisi o veličini i materijalu. Besplatna procjena.',
                },
                {
                    question: 'Koliko dugo traje sušenje nakon čišćenja?',
                    answer: 'Garnitura se suši 4–6 sati, tepisi 6–8 sati. Preporučujemo čišćenje ujutro kako bi namještaj bio suh do večeri.',
                },
                {
                    question: 'Mogu li se sve mrlje ukloniti?',
                    answer: 'Većina mrlja se potpuno uklanja. Starije, trajne mrlje (npr. od boje ili kemikalija) ne mogu se uvijek potpuno ukloniti, ali ih značajno smanjujemo.',
                },
                {
                    question: 'Je li kemijsko čišćenje sigurno za kožni namještaj?',
                    answer: 'Da, koristimo specijalizirana sredstva za kožu koja čiste i hidratiziraju bez oštećivanja materijala.',
                },
                {
                    question: 'Dolazite li na moju adresu?',
                    answer: 'Da! Kompletnu uslugu obavljamo na vašoj adresi u Zagrebu i okolici. Ne trebate nositi namještaj nikuda.',
                },
                {
                    question: 'Koliko često trebam čistiti tepih?',
                    answer: 'Preporučujemo dubinsko čišćenje svakih 6–12 mjeseci, ovisno o korištenju. Obitelji s kućnim ljubimcima trebaju češće čišćenje.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Črnomerec', 'Trnje', 'Novi Zagreb',
                'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Detailing auta', href: '/usluge/detailing-automobila', icon: <Car size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
            ]}
        />
    );
}
