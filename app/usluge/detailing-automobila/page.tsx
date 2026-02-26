import type { Metadata } from 'next';
import Link from 'next/link';
import { Droplets, ShieldCheck, Clock, Leaf, AlertTriangle, Bug, Sparkles, Wind } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Sofa, Home, TreeDeciduous } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Detailing Automobila Zagreb — Dubinsko Čišćenje Vozila | Šlauf i Šmrk',
    description: 'Profesionalni detailing automobila u Zagrebu. Dubinsko čišćenje interijera, pranje motora, poliranje. Dolazimo na vašu adresu. Besplatna procjena.',
};

export default function DetailingAutoPage() {
    return (
        <ServicePage
            title="Detailing Automobila"
            titleHighlight="Automobila"
            description="Profesionalni detailing vašeg vozila na vašoj adresi. Dubinski čistimo interijer — sjedala, pod, strop, instrument ploču — i eksterijer uključujući pranje, poliranje i zaštitu. Koristimo iste profesionalne injektirno-ekstrakcijske strojeve kao za čišćenje namještaja."
            priceHint="od 80 € (interijer) · od 150 € (komplet)"
            processSteps={[
                {
                    title: 'Pregled vozila',
                    description: 'Pregledamo interijer i eksterijer, identificiramo mrlje, oštećenja i dogovaramo opseg usluge.',
                },
                {
                    title: 'Usisavanje i predtretman',
                    description: 'Temeljito usisavamo sve površine i tretiramo mrlje specijalnim sredstvima.',
                },
                {
                    title: 'Dubinsko čišćenje',
                    description: 'Injektirno-ekstrakcijskim strojem dubinski čistimo sjedala, podove i tapecirung. Plastiku i kožu čistimo ručno.',
                },
                {
                    title: 'Eksterijer i završetak',
                    description: 'Ručno peremo i sušimo karoseriju, čistimo felge i gume, te nanosimo zaštitni vosak ili coating.',
                },
            ]}
            detailedContent={
                <>
                    <h2>Što uključuje detailing automobila?</h2>
                    <p>
                        Detailing je puno više od običnog pranja automobila. To je <strong>temeljit, višesatni
                            proces</strong> koji obuhvaća svaki kutić vašeg vozila. Naš detailing uključuje:
                    </p>
                    <ul>
                        <li><strong>Dubinsko čišćenje sjedala</strong> — injektirno-ekstrakcijskim strojem izvlačimo prljavštinu, znoj, mrlje i alergene iz dubine sjedala. Ista tehnologija koju koristimo za <Link href="/usluge/kemijsko-ciscenje-namjestaja">kemijsko čišćenje namještaja</Link>.</li>
                        <li><strong>Čišćenje instrument ploče i plastike</strong> — čistimo svaki otvor ventilacije, gumbe i površine između sjedala.</li>
                        <li><strong>Čišćenje stropa</strong> — uklanjamo mrlje od cigareta, prašinu i općenitu prljavštinu.</li>
                        <li><strong>Prtljažnik</strong> — usisavanje i dubinsko čišćenje tapeciranog prtljažnika.</li>
                        <li><strong>Ručno pranje karoserije</strong> — two-bucket metoda za siguran kontakt s lakom.</li>
                        <li><strong>Čišćenje felgi i guma</strong> — uklanjamo kočnionu prašinu, tar i cestavnu prljavštinu.</li>
                    </ul>

                    <h2>Zašto mobilni detailing?</h2>
                    <p>
                        Dolazimo na <strong>vašu adresu</strong> — ispred kuće, u garažu ili na parking tvrtke.
                        Ne trebate voziti do autopraonice i čekati. Mi donosimo svu opremu, vodu i sredstva.
                        Vi samo predajte ključeve i uživajte u kavi dok mi radimo.
                    </p>
                    <p>
                        Mobilni detailing posebno je praktičan za <strong>tvrtke s flotom vozila</strong> —
                        možemo čistiti više automobila u jednom dolasku po povoljnijoj cijeni.
                    </p>

                    <h2>Cijene detailinga</h2>
                    <ul>
                        <li><strong>Interijer (basic)</strong>: od 80 € — usisavanje + dubinsko čišćenje sjedala</li>
                        <li><strong>Interijer (full)</strong>: od 120 € — kompletno dubinsko čišćenje svih površina</li>
                        <li><strong>Eksterijer</strong>: od 60 € — ručno pranje, felge, gume, vosak</li>
                        <li><strong>Kompletni detailing</strong>: od 150 € — interijer + eksterijer</li>
                        <li><strong>SUV / kombi</strong>: +20–30% na sve cijene</li>
                    </ul>
                    <p>
                        Za preciznu cijenu javite nam se s modelom vozila i željenim opsegom usluge.
                    </p>

                    <h2>Kada trebate detailing?</h2>
                    <p>
                        Preporučujemo dubinski detailing <strong>2–4 puta godišnje</strong>, ali posebno u ova dva slučaja:
                    </p>
                    <ul>
                        <li><strong>Prije prodaje</strong> — čist auto lakše i brže prodajete, a postiže veću cijenu.</li>
                        <li><strong>Nakon zime</strong> — sol, blato i vlaga koje se nakupe tijekom zime zahtijevaju temeljito čišćenje.</li>
                    </ul>
                </>
            }
            features={[
                {
                    title: 'Dubinsko čišćenje sjedala',
                    description: 'Injektirno-ekstrakcijskim strojem izvlačimo prljavštinu, znoj i alergene iz dubine sjedala.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Zaštita interijera',
                    description: 'Nanosimo zaštitne premaze na plastiku, kožu i tkaninu koji štite od mrlja i UV zračenja.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Dolazak na adresu',
                    description: 'Dolazimo ispred vaše kuće ili ureda s kompletnom opremom. Vi ne trebate nikuda.',
                    icon: <Clock size={24} />,
                },
                {
                    title: 'Neutralizacija mirisa',
                    description: 'Uklanjamo mirise cigareta, hrane i vlage pomoću ozonskog tretmana ili enzimskih sredstava.',
                    icon: <Wind size={24} />,
                },
            ]}
            commonProblems={[
                {
                    title: 'Mrlje od kave na sjedalima',
                    description: 'Kava, sokovi i hrana ostavljaju tvrdokorne mrlje na tkanini sjedala koje se ne mogu ukloniti usisavačem.',
                    icon: <AlertTriangle size={24} />,
                },
                {
                    title: 'Miris cigareta',
                    description: 'Dim cigareta prodire u svaku poru tkanine i plastike. Površinsko čišćenje ne pomaže — potrebno je dubinsko.',
                    icon: <Bug size={24} />,
                },
                {
                    title: 'Dlake kućnih ljubimaca',
                    description: 'Dlake pasa i mačaka zabijaju se duboko u tkaninu i tepih automobila. Uklanjamo ih specijlnim četkama i ekstrakcijom.',
                    icon: <Sparkles size={24} />,
                },
                {
                    title: 'Kočniona prašina na felgama',
                    description: 'Tamna prašina od kočnica koja se taloži na felgama i postaje sve teže za ukloniti s vremenom.',
                    icon: <Leaf size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko traje detailing automobila?',
                    answer: 'Kompletni detailing (interijer + eksterijer) traje 3–5 sati, ovisno o veličini i stanju vozila.',
                },
                {
                    question: 'Dolazite li na moju adresu?',
                    answer: 'Da! Mobilni detailing je naša specijalnost. Dolazimo s kompletnom opremom na vašu adresu u Zagreb i okolicu.',
                },
                {
                    question: 'Mogu li čekati u autu dok radite?',
                    answer: 'Za interijer trebamo pristup cijelom vozilu, pa preporučujemo da nam date ključeve. Eksterijer čistimo dok je auto parkiran.',
                },
                {
                    question: 'Čistite li i kožne interijere?',
                    answer: 'Da, koristimo specijalizirana sredstva za čišćenje i hidratizaciju kože koja čiste bez oštećivanja materijala.',
                },
                {
                    question: 'Koliko često trebam raditi detailing?',
                    answer: 'Preporučujemo 2–4 puta godišnje. Minimalno jednom u proljeće nakon zime i jednom u jesen.',
                },
                {
                    question: 'Nudite li popuste za više vozila?',
                    answer: 'Da! Za tvrtke i obitelji s više vozila nudimo paketne cijene. Javite nam se za ponudu.',
                },
            ]}
            serviceAreas={[
                'Špansko', 'Jarun', 'Trešnjevka', 'Maksimir', 'Dubrava', 'Sesvete',
                'Stenjevec', 'Novi Zagreb', 'Velika Gorica', 'Samobor', 'Zaprešić',
            ]}
            relatedServices={[
                { title: 'Kemijsko čišćenje', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
            ]}
        />
    );
}
