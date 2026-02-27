import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Paintbrush, ThermometerSun } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, TreeDeciduous, Sofa } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje Fasade Zagreb — Visokotlačno Čišćenje | Šlauf i Šmrk',
    description: 'Profesionalno pranje fasade u Zagrebu i okolici. Uklanjamo alge, mahovinu i prljavštinu visokotlačnim perače. Besplatna procjena. Nazovite +385 95 844 2806.',
};

export default function PranjeFasadePage() {
    return (
        <ServicePage
            title="Pranje Fasade"
            titleHighlight="Fasade"
            description="Profesionalno visokotlačno pranje fasade vraća vašem domu izvorni sjaj. Uklanjamo alge, gljivice, mahovinu i nakupljenu prljavštinu koja narušava izgled i oštećuje površinu. Pokrivamo prizemnice i kuće do 5 metara visine u Zagrebu, Španskom, Jarunu, Maksimiru i okolici."
            priceHint="od 5 €/m²"
            processSteps={[
                {
                    title: 'Besplatna procjena',
                    description: 'Nazovite nas ili ispunite formu. Dolazimo na lokaciju, pregledamo fasadu i dajemo besplatnu ponudu bez obaveze.',
                },
                {
                    title: 'Priprema',
                    description: 'Zaštićujemo prozore, vrata i okolne biljke. Pripremamo opremu i biramo odgovarajući tlak za vaš tip fasade.',
                },
                {
                    title: 'Čišćenje',
                    description: 'Visokotlačnim peračem i ekološkim sredstvima uklanjamo sve nečistoće. Svaki dio fasade pažljivo obrađujemo.',
                },
                {
                    title: 'Završna kontrola',
                    description: 'Pregledavamo cijelu površinu, ispremo ostatke sredstva i ostavljamo vaš dom blistavo čistim.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Zašto je pranje fasade važno?</h2>
                    <p>
                        Fasada je prvi dojam vašeg doma. S vremenom se na njoj nakupljaju alge, mahovine, plijesni i
                        zagađenja iz zraka koji ne samo da narušavaju estetiku, već mogu uzrokovati <strong>trajna oštećenja
                            fasadne boje i materijala</strong>. Zelene i crne mrlje postupno prodiru u površinu žbuke, a u
                        kombinaciji s vlagom, mogu dovesti do ljuštenja boje i raspucavanja.
                    </p>
                    <p>
                        Profesionalnim visokotlačnim pranjem fasade sprječavate ova oštećenja i <strong>produžujete životni
                            vijek fasade za 5–10 godina</strong>. Naši klijenti u Zagrebu redovito primjećuju kako čista fasada
                        podiže ukupnu vrijednost nekretnine — posebno ako planirate prodaju ili iznajmljivanje.
                    </p>

                    <h2>Koji tipovi fasade se mogu prati?</h2>
                    <p>
                        Naš tim ima iskustvo s <strong>svim tipovima fasada</strong> koje se koriste u Hrvatskoj:
                    </p>
                    <ul>
                        <li><strong>Žbukana fasada</strong> — najčešći tip u Zagrebu. Zahtijeva pažljivo podešavanje tlaka da se ne ošteti sloj žbuke.</li>
                        <li><strong>Kamena fasada</strong> — prirodni kamen, travertin, obložni kamen. Za dublje čišćenje kamena pogledajte našu uslugu <Link href="/usluge/ciscenje-kamenih-povrsina">čišćenja kamenih površina</Link>.</li>
                        <li><strong>Drvena fasada</strong> — oblaganje drvenim daskama zahtijeva niži tlak i specijalna sredstva. Više informacija na stranici <Link href="/usluge/ciscenje-drvenih-povrsina">čišćenja drvenih površina</Link>.</li>
                        <li><strong>Stiropor (ETICS) fasada</strong> — termoizolacijski sustav zahtijeva posebnu pažnju i najniži tlak.</li>
                    </ul>

                    <h2>Koliko košta pranje fasade?</h2>
                    <p>
                        Cijena pranja fasade ovisi o <strong>površini, stupnju zaprljanosti i pristupačnosti</strong>.
                        Okvirne cijene za Zagreb i okolicu:
                    </p>
                    <ul>
                        <li><strong>Manja fasada</strong> (do 80 m²): 400 – 600 €</li>
                        <li><strong>Srednja fasada</strong> (80–150 m²): 600 – 1.000 €</li>
                        <li><strong>Veća fasada</strong> (150+ m²): od 1.000 €</li>
                        <li><strong>Cijena po m²</strong>: od 5 €/m²</li>
                    </ul>
                    <p>
                        Za točnu cijenu nudimo <strong>besplatnu procjenu na licu mjesta</strong> bez obaveza.
                        Često naši klijenti kombiniraju pranje fasade s <Link href="/usluge/pranje-okucnice">čišćenjem okućnice i prilaza</Link> za
                        kompletnu obnovu eksterijera — u tom slučaju nudimo paketne popuste.
                    </p>

                    <h2>Koliko često trebam prati fasadu?</h2>
                    <p>
                        Preporučujemo profesionalno pranje fasade <strong>svake 2–3 godine</strong>. Međutim, učestalost ovisi o
                        nekoliko faktora:
                    </p>
                    <ul>
                        <li><strong>Orijentacija kuće</strong> — sjevernije strane brže akumuliraju mahovinu i alge jer dobivaju manje sunca.</li>
                        <li><strong>Blizina drveća</strong> — kuće u sjeni drveća trebaju češće čišćenje.</li>
                        <li><strong>Lokacija</strong> — kuće uz prometnice izloženije su čađu i prašini.</li>
                        <li><strong>Boja fasade</strong> — svijetle fasade brže pokazuju prljavštinu.</li>
                    </ul>

                    <h2>Ekološki pristup čišćenju</h2>
                    <p>
                        U Šlauf i Šmrk koristimo <strong>isključivo biorazgradiva sredstva za čišćenje</strong> koja su
                        sigurna za vaš vrt, djecu i kućne ljubimce. Naša sredstva ne oštećuju biljke niti zagađuju tlo.
                        Visokotlačno pranje s ekološkim sredstvima jednako je učinkovito kao agresivna kemija, ali bez
                        štetnog utjecaja na okoliš.
                    </p>
                </>
            }
            features={[
                {
                    title: 'Uklanjanje algi i mahovine',
                    description: 'Temeljito čistimo zelene naslage, alge i mahovinu koje se nakupljaju na sjevernim stranama fasade te uzrokuju dugoročna oštećenja.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Zaštita materijala',
                    description: 'Koristimo prilagođene tlakove i ekološka sredstva koja ne oštećuju fasadne boje, žbuku ni izolaciju.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Brza izvedba',
                    description: 'Prosječnu obiteljsku kuću očistimo u jednom danu. Dolazimo s vlastitom opremom i vodom — ne trebate ništa pripremati.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Ekološki pristup',
                    description: 'Naša sredstva za čišćenje potpuno su biorazgradiva i sigurna za vrt, djecu i kućne ljubimce.',
                    icon: <Leaf size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Zelene naslage na fasadi',
                    description: 'Alge i mahovine koje rastu na vlažnim i sjenovitim dijelovima fasade. Posebno česte na sjevernoj strani kuće.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Crne mrlje i plijesni',
                    description: 'Tamne mrlje uzrokovane gljivicama i zagađenjem iz zraka. Mogu se proširiti i uzrokovati trajne štete na žbuki.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Ljuštenje boje',
                    description: 'Fasadna boja se ljušti zbog vlage zarobljene ispod sloja algi i prljavštine. Čišćenje je prvi korak prije ponovnog bojanja.',
                    icon: <Paintbrush size={24} />,
                },
                {
                    title: 'Kišne mrlje i potoci',
                    description: 'Tragovi curenja vode koji ostavljaju bijele ili sive mrlje na fasadi, posebno ispod prozorskih klupica.',
                    icon: <ThermometerSun size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta visokotlačno pranje fasade?',
                    answer: 'Cijena ovisi o površini i stupnju zaprljanosti. Okvirno se kreće od 5 €/m². Za točnu cijenu nudimo besplatnu procjenu na licu mjesta.',
                },
                {
                    question: 'Hoće li visokotlačno pranje oštetiti moju fasadu?',
                    answer: 'Ne, koristimo profesionalnu opremu s prilagodljivim tlakom. Svaki tip fasade tretiramo odgovarajućim postavkama da izbjegnemo bilo kakva oštećenja.',
                },
                {
                    question: 'Koliko često trebam prati fasadu?',
                    answer: 'Preporučujemo pranje fasade svake 2–3 godine, ovisno o položaju kuće i izloženosti vlazi. Sjevernije strane obično trebaju češće čišćenje.',
                },
                {
                    question: 'Koje dijelove Zagreba pokrivate?',
                    answer: 'Pokrivamo cijeli Zagreb i bližu okolicu — Špansko, Jarun, Trešnjevku, Maksimir, Dubravu, Sesvete, kao i Veliku Goricu, Samobor i Zaprešić.',
                },
                {
                    question: 'Trebam li nešto pripremiti prije vašeg dolaska?',
                    answer: 'Ne, dolazimo s kompletnom opremom uključujući vodu i sredstva za čišćenje. Jedino trebamo pristup do fasade i struju za opremu.',
                },
                {
                    question: 'Mogu li kombinirati pranje fasade s drugim uslugama?',
                    answer: 'Da! Većina klijenata kombinira pranje fasade s čišćenjem okućnice ili kamenih površina. Nudimo posebne paketne cijene za kombinirane usluge.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Črnomerec', 'Trnje', 'Novi Zagreb', 'Podsused',
                'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                { title: 'Kemijsko čišćenje', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={18} /> },
            ]}
        />
    );
}
