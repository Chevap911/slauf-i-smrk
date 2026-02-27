import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Ruler, Footprints } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, TreeDeciduous, Waves } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje Okućnice i Prilaza Zagreb — Visokotlačno Čišćenje | Šlauf i Šmrk',
    description: 'Profesionalno čišćenje dvorišta, prilaza, terasa i parkirnih površina u Zagrebu. Betonske kocke, kamene ploče, beton. Besplatna procjena.',
};

export default function PranjeOkucnicePage() {
    return (
        <ServicePage
            title="Pranje Okućnice i Prilaza"
            titleHighlight="Okućnice"
            description="Vaše dvorište, prilaz i terasa zaslužuju blistav izgled. Profesionalnim visokotlačnim čišćenjem uklanjamo mahovinu, ulje, hrđu i nakupljenu prljavštinu s betonskih kocki, kamenih ploča, betona i asfalta. Dolazimo s kompletnom opremom — vi samo uživajte u rezultatu."
            priceHint="od 4 €/m²"
            processSteps={[
                {
                    title: 'Dolazak i procjena',
                    description: 'Pregledamo površinu, identificiramo tip materijala i stupanj zaprljanosti. Dajemo ponudu odmah na licu mjesta.',
                },
                {
                    title: 'Tretiranje površine',
                    description: 'Nanosimo ekološko sredstvo za čišćenje koje omekšava mahovinu, mrlje od ulja i duboku prljavštinu.',
                },
                {
                    title: 'Visokotlačno pranje',
                    description: 'Sa profesionalnim peračem i rotirajućom četkom ravnomjerno čistimo cijelu površinu bez oštećenja.',
                },
                {
                    title: 'Ispiranje i završetak',
                    description: 'Temeljito ispiremo sve ostatke, čistimo rubove i provjeravamo svaki kutak. Vaša okućnica je kao nova.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto čistiti okućnicu i prilaze?</h2>
                    <p>
                        Okućnica je dio vašeg doma koji goste dočekuje prvi. S vremenom, <strong>betonske kocke, kamene ploče
                            i prilazi</strong> postaju klizavi i neugledni od mahovine, lišća i prašine. Osim estetskog problema,
                        klizava okućnica predstavlja i <strong>sigurnosni rizik</strong> — posebno za djecu i starije osobe.
                    </p>
                    <p>
                        Redovitim čišćenjem produžujete vijek trajanja podloge i sprječavate skuplja oštećenja kao što su
                        raspucavanja uzrokovana korijenjima mahovine. Naši klijenti u Zagrebu redovito primjećuju kako
                        čist prilaz podiže ukupnu sliku nekretnine.
                    </p>

                    <h2>Koje površine čistimo?</h2>
                    <p>
                        Naš tim ima iskustvo s <strong>svim tipovima eksternih podloga</strong>:
                    </p>
                    <ul>
                        <li><strong>Betonske kocke (behaton)</strong> — najčešći tip prilaza u Zagrebu. Uklanjamo mahovinu iz fuga i vraćamo izvornu boju.</li>
                        <li><strong>Kamene ploče</strong> — prirodni kamen, granitne ploče, travertin. Za detaljnije čišćenje kamena pogledajte <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenje kamenih površina</Link>.</li>
                        <li><strong>Beton</strong> — garažni prilazi, parkirna mjesta, stepenice. Uklanjamo mrlje od ulja, guma i hrđe.</li>
                        <li><strong>Terase i balkoni</strong> — pločice, drvo, beton. Drvene terase tretiramo posebnim tlakom — pogledajte <Link href="/usluge/ciscenje-drvenih-povrsina">čišćenje drvenih površina</Link>.</li>
                        <li><strong>Asfalt</strong> — prilazi, parkirališta, staze.</li>
                    </ul>

                    <h2>Koliko košta čišćenje okućnice?</h2>
                    <p>
                        Cijena čišćenja okućnice ovisi o <strong>ukupnoj površini, materijalu i stupnju zaprljanosti</strong>.
                        Okvirne cijene za Zagreb:
                    </p>
                    <ul>
                        <li><strong>Manji prilaz</strong> (do 50 m²): 200 – 350 €</li>
                        <li><strong>Srednje dvorište</strong> (50–120 m²): 350 – 600 €</li>
                        <li><strong>Veća okućnica</strong> (120+ m²): od 600 €</li>
                        <li><strong>Cijena po m²</strong>: od 4 €/m²</li>
                    </ul>
                    <p>
                        Većina naših klijenata kombinira čišćenje okućnice s <Link href="/usluge/pranje-fasade">pranjem
                            fasade</Link> za kompletnu obnovu eksterijera — nudimo paketne popuste od 10–15%.
                    </p>

                    <h2>Posebne mrlje i situacije</h2>
                    <p>
                        Osim standardnog čišćenja, stručni smo za uklanjanje specifičnih mrlja:
                    </p>
                    <ul>
                        <li><strong>Uljne mrlje</strong> — od automobila, motora ili strojeva. Koristimo specijalne odmašćivače.</li>
                        <li><strong>Mrlje od hrđe</strong> — od metalnih ograda, stolica ili posuda s cvijećem.</li>
                        <li><strong>Sluz od puževa</strong> — ljeti posebno čest problem na kamenim stazama.</li>
                        <li><strong>Mrlje od grožđa i voća</strong> — ostavljaju trajne tamne mrlje na betonu i kamenu.</li>
                    </ul>

                    <h2>Savjet za održavanje okućnice</h2>
                    <p>
                        Između profesionalnih čišćenja, možete sami produžiti čist izgled dvorišta:
                        redovito čistite lišće, ne dopuštajte da se voda skuplja u udubinama, i po potrebi
                        posipajte pijesak u fuge betonskih kocki da spriječite rast korova. Ali kad mahovine
                        zahvate veću površinu — nazovite nas za profesionalno čišćenje.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Uklanjanje mahovine i korova',
                    description: 'Temeljito čistimo mahovinu, korov i naslage iz fuga i s površine betonskih kocki i kamena.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Rotirajuća četka',
                    description: 'Koristimo profesionalnu rotirajuću četku koja ravnomjerno čisti veliku površinu bez ostavljanja pruga.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Čišćenje u jednom danu',
                    description: 'Većinu okućnica očistimo u jednom radnom danu. Dolazimo s vlastitom vodom i opremom.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Biorazgradiva sredstva',
                    description: 'Naša sredstva za čišćenje potpuno su sigurna za biljke, travu, djecu i kućne ljubimce.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Klizava okućnica',
                    description: 'Mahovine i alge čine betonske kocke i kamene ploče klizavima, što je posebno opasno za djecu i starije osobe.',
                    icon: <Footprints size={24} />,
                },
                {
                    title: 'Korov u fugama',
                    description: 'Trava i korov rastu između kocki i postupno razmičü fuge, uzrokujući trajno oštećenje podloge.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Mrlje od ulja i hrđe',
                    description: 'Ulje od automobila, hrđa od metalnih predmeta i druge mrlje koje se ne mogu ukloniti običnim pranjem.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Neravnomjerna boja',
                    description: 'S vremenom različiti dijelovi dvorišta poprimaju različite nijanse boje zbog neravnomjernog trošenja i prljavštine.',
                    icon: <Ruler size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta čišćenje okućnice u Zagrebu?',
                    answer: 'Cijena ovisi o kvadraturi i materijalu. Okvirno se kreće od 4 €/m². Za dvorište od 100 m² to je otprilike 400–500 €. Besplatna procjena na licu mjesta.',
                },
                {
                    question: 'Hoće li visokotlačno pranje oštetiti betonske kocke?',
                    answer: 'Ne. Koristimo kalibrirani tlak i rotirajuću četku koja ravnomjerno čisti bez oštećenja. Imamo iskustvo sa svim tipovima podloga.',
                },
                {
                    question: 'Koliko često trebam čistiti dvorište?',
                    answer: 'Preporučujemo profesionalno čišćenje jednom godišnje, idealno u proljeće nakon zime. Okućnice u sjeni trebaju češće čišćenje.',
                },
                {
                    question: 'Možete li ukloniti mrlje od ulja?',
                    answer: 'Da, koristimo specijalne odmašćivače za uljne mrlje na betonu i betonskim kockama. Starije mrlje zahtijevaju više tretmana.',
                },
                {
                    question: 'Trebam li osigurati vodu za čišćenje?',
                    answer: 'Da, klijent treba osigurati priključak za vodu jer ne dolazimo s vlastitim spremnikom.',
                },
                {
                    question: 'Čistite li i stepenice i rubnjake?',
                    answer: 'Da, čistimo kompletnu okućnicu uključujući stepenice, rubnjake, žardinjere i rubove uz kuću.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Črnomerec', 'Trnje', 'Novi Zagreb', 'Podsused',
                'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Home size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                { title: 'Pranje bazena', href: '/usluge/pranje-bazena', icon: <Waves size={18} /> },
            ]}
        />
    );
}
