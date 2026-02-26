import type { Metadata } from 'next';
import { Droplets, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Building, Home, HeartHandshake } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Čišćenje Kamenih Površina Zagreb — Šlauf i Šmrk',
    description: 'Profesionalno čišćenje kamenih klupica, stolova, kipova, zidova i kamenih staza u Zagrebu. Vraćamo sjaj vašem kamenu. Besplatna procjena.',
};

export default function CiscenjeKamenihPovrsina() {
    return (
        <ServicePage
            title="Čišćenje Kamenih Površina"
            titleHighlight="Kamenih Površina"
            description="Vraćamo izvornu ljepotu kamenim klupicama, stolovima, kipovima, ogradnim zidovima i kamenim stazama. Temeljito uklanjamo mahovinu, lišajeve i nataloženu prljavštinu uz čuvanje strukture kamena. Radimo u Zagrebu i okolici."
            priceHint="od 3 €/m²"
            features={[
                {
                    title: 'Čišćenje kamenih klupica i stolova',
                    description: 'Vrtne kamene klupe i stolove čistimo bez kemikalija koje bi narušile prirodnu patinu kamena.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Uklanjanje mahovine i lišajeva',
                    description: 'Zelene naslage temeljito uklanjamo zajedno s korijenom kako bi kamen ostao čist dulje vrijeme.',
                    icon: <Sparkles size={24} />,
                },
                {
                    title: 'Impregnacija kamena',
                    description: 'Opcionalnom impregnacijom štitimo kamen od budućih onečišćenja i produžujemo interval između čišćenja.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Prilagođen tlak',
                    description: 'Svaki tip kamena zahtijeva drugačiji pristup — od mekog vapnenca do tvrdog granita, prilagođavamo opremu.',
                    icon: <Clock size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Može li visokotlačno pranje oštetiti kamen?',
                    answer: 'Ne, koristimo profesionalnu opremu s preciznom regulacijom tlaka. Svaki kamen tretiramo prema njegovoj tvrdoći i strukturi.',
                },
                {
                    question: 'Koliko košta čišćenje kamenih površina?',
                    answer: 'Cijena ovisi o tipu kamena, površini i stupnju zaprljanosti. Okvirno od 3 €/m². Za točnu procjenu potreban je pregled.',
                },
                {
                    question: 'Čistite li i kamene zidove?',
                    answer: 'Da, čistimo sve kamene površine — zidove, klupice, stolove, staze, kipove, fontane i kamene ograde.',
                },
            ]}
            relatedServices={[
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Building size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Grobna mjesta', href: '/usluge/odrzavanje-grobnih-mjesta', icon: <HeartHandshake size={18} /> },
            ]}
        />
    );
}
