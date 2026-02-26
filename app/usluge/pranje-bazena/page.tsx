import type { Metadata } from 'next';
import { Droplets, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Building, Home, TreeDeciduous } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Pranje Bazena Zagreb — Čišćenje Pred Sezonu | Šlauf i Šmrk',
    description: 'Profesionalno temeljito pranje i čišćenje bazena u Zagrebu i okolici. Priprema za sezonu kupanja. Mali, srednji i veliki bazeni. Besplatna procjena.',
};

export default function PranjeBazena() {
    return (
        <ServicePage
            title="Pranje Bazena"
            titleHighlight="Bazena"
            description="Temeljito čišćenje vašeg bazena pred sezonu kupanja. Uklanjamo alge, naslage kalcija, nečistoće sa stijenki i dna bazena. Radimo s malim, srednjim i velikim bazenima u Zagrebu i okolici."
            priceHint="od 400 € mali bazen · od 600 € srednji · od 800 € veliki"
            features={[
                {
                    title: 'Čišćenje stijenki i dna',
                    description: 'Temeljito uklanjamo alge, naslage i nečistoće sa svih površina bazena korištenjem profesionalne opreme.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Uklanjanje algi',
                    description: 'Zelene i crne alge temeljito čistimo i dezinficiramo kako bi vaš bazen bio siguran za kupanje.',
                    icon: <Sparkles size={24} />,
                },
                {
                    title: 'Pranje rubnih ploča',
                    description: 'Kamene i keramičke rubne ploče oko bazena također čistimo visokotlačnim peračem za kompletni izgled.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Priprema za sezonu',
                    description: 'Kompletni servis čišćenja kako bi vaš bazen bio spreman za prve tople dane — bez ikakvog truda s vaše strane.',
                    icon: <Clock size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta čišćenje bazena?',
                    answer: 'Mali bazeni (do 15 m²) od 400 €, srednji (15–30 m²) od 600 €, veliki bazeni (iznad 30 m²) od 800 €. Cijena uključuje stijenke, dno i rubne ploče.',
                },
                {
                    question: 'Kada je najbolje vrijeme za čišćenje bazena?',
                    answer: 'Preporučujemo čišćenje u proljeće, prije punjenja bazena za sezonu. Možemo doći i tijekom sezone ako je potrebno.',
                },
                {
                    question: 'Čistite li i nadzemne bazene?',
                    answer: 'Da, čistimo i ukopane i nadzemne bazene svih veličina. Prilagođavamo pristup tipu bazena.',
                },
            ]}
            relatedServices={[
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Building size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
            ]}
        />
    );
}
