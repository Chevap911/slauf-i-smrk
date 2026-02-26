import type { Metadata } from 'next';
import { Sparkles, ShieldCheck, Clock, Droplets } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Building, Home, Car } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Kemijsko Čišćenje Tepiha i Garnitura Zagreb — Šlauf i Šmrk',
    description: 'Profesionalno kemijsko čišćenje tepiha, garnitura, fotelja, kauča i madraca u Zagrebu. Dubinsko pranje namještaja. Besplatna procjena.',
};

export default function KemijskoCiscenjeNamjestaja() {
    return (
        <ServicePage
            title="Kemijsko Čišćenje Tepiha i Garnitura"
            titleHighlight="Tepiha i Garnitura"
            description="Profesionalno dubinsko kemijsko čišćenje tapeciranog namještaja, tepiha, fotelja, madraca i kauča. Uklanjamo mrlje, grinje, bakterije i neugodne mirise. Dolazimo na adresu u Zagreb i okolicu."
            priceHint="od 12 €/sjedalo · od 5 €/m² tepiha"
            features={[
                {
                    title: 'Dubinsko čišćenje garnitura',
                    description: 'Kemijskim procesom uklanjamo duboko usađene mrlje, prašinu i alergene iz tapeciranih garnitura i fotelja.',
                    icon: <Sparkles size={24} />,
                },
                {
                    title: 'Čišćenje tepiha',
                    description: 'Klasične i moderne tepihe temeljito čistimo profesionalnim ekstrakcijskim uređajima bez oštećivanja vlakana.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Dubinsko čišćenje madraca',
                    description: 'Uklanjamo grinje, bakterije i mrlje iz madraca za zdraviji i kvalitetniji san. Idealno za alergičare.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Brzo sušenje',
                    description: 'Naši profesionalni uređaji izvlače maksimalnu količinu vlage — namještaj je spreman za korištenje unutar 2–4 sata.',
                    icon: <Clock size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta kemijsko čišćenje garniture?',
                    answer: 'Cijena ovisi o broju sjedećih mjesta. Okvirno 12 €/sjedalo za garniture. Trosjed iznosi oko 36 €, a kutna garnitura 60–85 €.',
                },
                {
                    question: 'Koliko košta kemijsko čišćenje madraca?',
                    answer: 'Jednostruki madrac od 15 €, dvostruki od 25 €. Cijena uključuje čišćenje obje strane i dezinfekciju.',
                },
                {
                    question: 'Je li kemijsko čišćenje sigurno za djecu i kućne ljubimce?',
                    answer: 'Apsolutno. Koristimo ekološka, hipoalergena sredstva bez agresivnih kemikalija. Proces je potpuno siguran za cijelu obitelj.',
                },
                {
                    question: 'Koliko traje sušenje nakon čišćenja?',
                    answer: 'U prosjeku 2–4 sata za garniture i 4–6 sati za tepihe, ovisno o prozračivanju prostora.',
                },
            ]}
            relatedServices={[
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Building size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Detailing auta', href: '/usluge/detailing-automobila', icon: <Car size={18} /> },
            ]}
        />
    );
}
