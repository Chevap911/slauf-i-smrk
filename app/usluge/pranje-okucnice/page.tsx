import type { Metadata } from 'next';
import { Droplets, ShieldCheck, Clock, Leaf, Layers } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Building, Car, TreeDeciduous, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje Okućnice i Prilaza Zagreb — Šlauf i Šmrk',
    description: 'Visokotlačno pranje betonskih kocki, kamenih ploča, asfalta i prilaza u Zagrebu. Vraćamo izvornu ljepotu vašem dvorištu. Besplatna procjena.',
};

export default function PranjeOkucnicePage() {
    return (
        <ServicePage
            title="Pranje Okućnice i Prilaza"
            titleHighlight="Okućnice"
            description="Visokotlačno čišćenje dvorišta, betonskih kocki, kamenih ploča i asfaltnih prilaza. Uklanjamo nataloženu prljavštinu, korov iz fuga i zelene naslage. Pokrivamo Zagreb — Špansko, Jarun, Maksimir, Dubrava, Sesvete i okolicu."
            priceHint="od 2 €/m²"
            features={[
                {
                    title: 'Čišćenje betonskih kocki',
                    description: 'Vraćamo izvornu boju betonskim kockama uklanjajući prljavštinu, mahovinu i korov iz fuga bez oštećivanja materijala.',
                    icon: <Layers size={24} />,
                },
                {
                    title: 'Pranje kamenih ploča',
                    description: 'Kamene staze, terase i okućnice pažljivo čistimo prilagođenim tlakom koji ne oštećuje površinu.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Čišćenje pločnika i prilaza',
                    description: 'Asfaltne i betonske prilaze temeljito čistimo od masnoća, ulja i tvrdokornih mrlja.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Ekološka sredstva',
                    description: 'Koristimo biorazgradiva sredstva sigurna za travnjak, vrt i kućne ljubimce.',
                    icon: <Leaf size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta pranje dvorišta?',
                    answer: 'Cijena kreće od 2 €/m² ovisno o površini i stupnju zaprljanosti. Za dvorišta od 50–100 m² očekujte okvirno 100–300 €. Nudimo besplatnu procjenu.',
                },
                {
                    question: 'Koliko traje čišćenje okućnice?',
                    answer: 'Prosječno dvorište od 50–80 m² čistimo za 2–4 sata. Veće površine mogu zahtijevati cijeli dan.',
                },
                {
                    question: 'Može li visokotlačno pranje oštetiti betonske kocke?',
                    answer: 'Ne, koristimo profesionalnu opremu s regulacijom tlaka. Prilagođavamo postavke svakom materijalu kako bismo izbjegli oštećenja.',
                },
                {
                    question: 'Koliko često trebam prati dvorište?',
                    answer: 'Preporučujemo jednom godišnje, idealno u proljeće. Površine u sjeni ili blizini drveća mogu trebati čišćenje češće.',
                },
            ]}
            relatedServices={[
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Building size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                { title: 'Detailing auta', href: '/usluge/detailing-automobila', icon: <Car size={18} /> },
            ]}
        />
    );
}
