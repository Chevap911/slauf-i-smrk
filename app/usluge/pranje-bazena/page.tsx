import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Waves, ThermometerSun } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, TreeDeciduous, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje Bazena Zagreb — Čišćenje i Priprema Bazena | Šlauf i Šmrk',
    description: 'Profesionalno čišćenje bazena, okolnog kamena i terasa u Zagrebu. Priprema bazena za sezonu. Uklanjamo alge i naslage. Besplatna procjena.',
};

export default function PranjeBasenapPage() {
    return (
        <ServicePage
            title="Pranje Bazena"
            titleHighlight="Bazena"
            description="Pripremite bazen za sezonu kupanja ili ga očistite nakon ljeta. Profesionalno čistimo stijenke bazena, obodni kamen, terasu oko bazena i sve prateće površine. Uklanjamo alge, naslage i nakupljenu prljavštinu za kristalno čistu vodu i siguran prostor za kupanje."
            priceHint="od 100 €"
            processSteps={[
                {
                    title: 'Ispuštanje vode',
                    description: 'Pomoažemo s ispuštanjem vode ili čistimo bazen dok je pun — ovisno o tipu i problemu.',
                },
                {
                    title: 'Čišćenje stijenki',
                    description: 'Četkom i prilagođenim tlakom uklanjamo alge, kalcifikacije i naslage sa stijenki i dna bazena.',
                },
                {
                    title: 'Obodni kamen i terasa',
                    description: 'Visokotlačno čistimo kamene ploče, pločice i terasu oko bazena od algi i prljavštine.',
                },
                {
                    title: 'Ispiranje i kontrola',
                    description: 'Temeljito ispiremo bazen, provjeravamo sve površine i savjetujemo o daljnjem održavanju.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Kada čistiti bazen?</h2>
                    <p>
                        Postoje dva ključna trenutka za profesionalno čišćenje bazena:
                    </p>
                    <ul>
                        <li><strong>U proljeće</strong> — priprema bazena za sezonu kupanja. Nakon zime se na stijenkama nakupe alge, lišće i kalcifikacije koje treba ukloniti prije punjenja.</li>
                        <li><strong>U jesen</strong> — čišćenje bazena prije winterizacije. Čist bazen mnogo lakše i jeftinije otvoriti sljedeće proljeće.</li>
                    </ul>
                    <p>
                        Tijekom sezone možemo obaviti <strong>održavanje obodnog kamena i terase</strong> bez ispuštanja vode,
                        čime održavamo čist i pristupačan prostor za kupanje.
                    </p>

                    <h2>Što čistimo oko bazena?</h2>
                    <p>
                        Bazen je dio cjeline i okolina je jednako važna kao i sam bazen:
                    </p>
                    <ul>
                        <li><strong>Stijenke i dno bazena</strong> — uklanjamo alge, kalcifikacije i zelenilo.</li>
                        <li><strong>Obodni kamen (coping)</strong> — kamene ploče oko ruba bazena koje postaju klizave od algi. Za detaljnije čišćenje kamena pogledajte <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje kamenih površina</Link>.</li>
                        <li><strong>Drvena terasa oko bazena</strong> — WPC ili prirodno drvo koje sivi i postaje klizavo. Pogledajte <Link href="/usluge/ciscenje-drvenih-povrsina">čišćenje drvenih površina</Link>.</li>
                        <li><strong>Kameni prilaz bazenu</strong> — staze i stepenice do bazena.</li>
                        <li><strong>Bazensku opremu</strong> — ljestve, ručke, prekrivače.</li>
                    </ul>

                    <h2>Cijena čišćenja bazena</h2>
                    <ul>
                        <li><strong>Mali bazen</strong> (do 20 m²): od 100 €</li>
                        <li><strong>Srednji bazen</strong> (20–40 m²): od 180 €</li>
                        <li><strong>Veliki bazen</strong> (40+ m²): od 280 €</li>
                        <li><strong>Obodni kamen i terasa</strong>: dodatno od 5 €/m²</li>
                    </ul>
                    <p>
                        Većina naših klijenata naručuje <strong>kompletni paket</strong> — bazen + okolni kamen + terasa — za
                        što nudimo posebnu paketnu cijenu. Kombiniramo to s <Link href="/usluge/pranje-okucnice">čišćenjem
                            okućnice</Link> za kompletnu pripremu dvorišta za ljeto.
                    </p>

                    <h2>Sigurnost oko bazena</h2>
                    <p>
                        Klizav obodni kamen i prljava terasa oko bazena predstavljaju <strong>ozbiljan sigurnosni
                            rizik</strong>, posebno za djecu. Zelene alge čine kamene ploče izuzetno klizavima kad
                        su mokre. Redovitim čišćenjem sprječavate nezgode i održavate siguran prostor za obitelj.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Uklanjanje algi',
                    description: 'Temeljito uklanjamo zelene i crne alge sa stijenki, dna i obodnog kamena bazena.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Čišćenje obodnog kamena',
                    description: 'Visokotlačno čistimo kamene ploče, pločice i rubove oko bazena od klizavih algi.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Brza usluga',
                    description: 'Prosječni bazen s okolnim kamenom čistimo za pola dana. Vaš bazen spreman za kupanje isti dan.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Ekološka sredstva',
                    description: 'Koristimo sredstva koja su sigurna za bazensku vodu, biljke i okolnu travu.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Zelene stijenke bazena',
                    description: 'Alge se talože na stijenkama i dnu bazena tijekom zime ili zbog nedovoljne kemije. Bazen izgleda zapušten i nehigijski.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Klizav obodni kamen',
                    description: 'Kamene ploče oko bazena postaju klizave od algi i vlage, što je posebno opasno za djecu.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Bijele kalcifikacije',
                    description: 'Bijele naslage kalcija na rubu bazena nastale od tvrde vode. Tvrdokorne su i ne mogu se ukloniti običnim četkama.',
                    icon: <Waves size={24} />,
                },
                {
                    title: 'Toplinski stres na kamenu',
                    description: 'Kamene ploče izložene suncu pucaju ih brže ako su zarobljene algama koje drže vlagu.',
                    icon: <ThermometerSun size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta čišćenje bazena?',
                    answer: 'Cijena ovisi o veličini bazena. Mali bazen (do 20 m²) kreće od 100 €, srednji od 180 €. Obodni kamen dodatno od 5 €/m².',
                },
                {
                    question: 'Trebam li ispustiti vodu prije čišćenja?',
                    answer: 'Za temeljito čišćenje stijenki preporučujemo ispuštanje. Obodni kamen i terasu čistimo bez obzira na razinu vode.',
                },
                {
                    question: 'Koliko često trebam čistiti bazen?',
                    answer: 'Preporučujemo profesionalno čišćenje dva puta godišnje — u proljeće (priprema) i jesen (winterizacija).',
                },
                {
                    question: 'Čistite li i jacuzzije?',
                    answer: 'Da, čistimo jacuzzije i whirlpool bazene. Cijena ovisi o veličini i stanju. Nazovite nas za procjenu.',
                },
                {
                    question: 'Čistite li i terasu oko bazena?',
                    answer: 'Da! Ujedno čistimo kameni ili drveni pod oko bazena, staze, stepenice i prilaze. Nudimo paketnu cijenu za sve.',
                },
                {
                    question: 'Koristite li sredstva sigurna za bazensku vodu?',
                    answer: 'Da, sva naša sredstva su kompatibilna s bazenskim sustavima i neće narušiti pH vode.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Novi Zagreb', 'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Grobna mjesta', href: '/usluge/odrzavanje-grobnih-mjesta', icon: <HeartHandshake size={18} /> },
            ]}
        />
    );
}
