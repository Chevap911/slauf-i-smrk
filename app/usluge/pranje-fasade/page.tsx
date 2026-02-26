import type { Metadata } from 'next';
import { Droplets, ShieldCheck, Clock, Leaf } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Home, Car, TreeDeciduous, HeartHandshake, Sofa } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje Fasade Zagreb — Visokotlačno Čišćenje | Šlauf i Šmrk',
    description: 'Profesionalno pranje fasade u Zagrebu i okolici. Uklanjamo alge, mahovinu i prljavštinu visokotlačnim perače. Besplatna procjena. Nazovite +385 91 6400 247.',
};

export default function PranjeFasadePage() {
    return (
        <ServicePage
            title="Pranje Fasade"
            titleHighlight="Fasade"
            description="Profesionalno visokotlačno pranje fasade vraća vašem domu izvorni sjaj. Uklanjamo alge, gljivice, mahovinu i nakupljenu prljavštinu koja narušava izgled i oštećuje površinu. Pokrivamo prizemnice i kuće do 5 metara visine u Zagrebu, Španskom, Jarunu, Maksimiru i okolici."
            priceHint="od 5 €/m²"
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
                    answer: 'Pokrivamo cijeli Zagreb i bližu okolicu — Špansko, Jarun, Trešnjevku, Maksimir, Dubravu, Sesvete, kao i Karlovac i Veliku Goricu.',
                },
            ]}
            relatedServices={[
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                { title: 'Drvene površine', href: '/usluge/ciscenje-drvenih-povrsina', icon: <ShieldCheck size={18} /> },
            ]}
        />
    );
}
