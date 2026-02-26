import type { Metadata } from 'next';
import { TreePine, Droplets, ShieldCheck, Sun } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Building, Home, TreeDeciduous } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Čišćenje Drvenih Površina Zagreb — Terase, Ograde | Šlauf i Šmrk',
    description: 'Profesionalno čišćenje drvenih terasa, ograda i namještaja u Zagrebu. Uklanjamo sivilo i pripremamo drvo za novu zaštitu. Besplatna procjena.',
};

export default function CiscenjeDrvenihPovrsina() {
    return (
        <ServicePage
            title="Čišćenje Drvenih Površina"
            titleHighlight="Drvenih Površina"
            description="Oživljavamo vaše drvene terase, ograde, pergole i vrtni namještaj. Uklanjamo posivjelo drvo, mahovinu i nečistoće te pripremamo površinu za novu zaštitu uljem ili lazurom. Radimo na području Zagreba i okolice."
            priceHint="od 4 €/m²"
            features={[
                {
                    title: 'Uklanjanje sivila',
                    description: 'Drvo izloženo vremenskim uvjetima poprima sivu boju. Našim postupkom vraćamo prirodnu toplu boju drva.',
                    icon: <TreePine size={24} />,
                },
                {
                    title: 'Prilagođen tlak za drvo',
                    description: 'Koristimo niži tlak i posebne nastavke koji čiste bez oštećivanja vlakana drveta.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Priprema za zaštitu',
                    description: 'Nakon čišćenja, drvo je idealno pripremljeno za nanošenje novog sloja ulja, lazure ili laka.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Obnova vrtnog namještaja',
                    description: 'Drvene stolice, stolove i klupe čistimo i obnavljamo kako bi ponovno bili ponos vašeg vrta.',
                    icon: <Sun size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Kako očistiti drvenu terasu?',
                    answer: 'Profesionalno čišćenje uključuje prilagođeno visokotlačno pranje s nižim tlakom i specijalnim nastavcima, nakon čega se drvo suši i priprema za zaštitni premaz.',
                },
                {
                    question: 'Hoće li visokotlačno pranje oštetiti drvo?',
                    answer: 'Ne, koristimo specijalizirane nastavke i niži tlak (60–100 bara) prilagođen drvu. To je potpuno sigurno za sve vrste drvenih površina.',
                },
                {
                    question: 'Trebam li nanijeti ulje nakon čišćenja?',
                    answer: 'Preporučujemo da. Nakon čišćenja, drvo je optimalno pripremljeno za novu zaštitu. Ulje ili lazura produžuju životni vijek i vraćaju sjaj.',
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
