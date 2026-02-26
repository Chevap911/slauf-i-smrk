import type { Metadata } from 'next';
import { Car, Sparkles, ShieldCheck, Clock } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Building, Home, Sofa } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Detailing Automobila Zagreb — Dubinsko Čišćenje | Šlauf i Šmrk',
    description: 'Profesionalni auto detailing u Zagrebu — dubinsko čišćenje interijera, kemijsko čišćenje sjedala, poliranje i zaštita laka. Od 25 €. Nazovite danas.',
};

export default function DetailingAutomobila() {
    return (
        <ServicePage
            title="Detailing Automobila"
            titleHighlight="Automobila"
            description="Kompletna njega vašeg vozila: od temeljitog vanjskog pranja, preko dubinskog kemijskog čišćenja interijera i sjedala, do profesionalnog poliranja i zaštite laka. Vaš automobil će izgledati kao da je upravo izašao iz salona."
            priceHint="od 25 € vanjsko · od 50 € interijer · od 70 € komplet"
            features={[
                {
                    title: 'Dubinsko čišćenje interijera',
                    description: 'Kemijskim procesom čistimo sve tekstilne površine — sjedala, tepih, vrata, strop. Uklanjamo mrlje, mirise i bakterije.',
                    icon: <Sparkles size={24} />,
                },
                {
                    title: 'Poliranje laka',
                    description: 'Profesionalnim poliranjem uklanjamo sitne ogrebotine, hologramme i oksidaciju. Lak ponovo dobiva duboki sjaj.',
                    icon: <Car size={24} />,
                },
                {
                    title: 'Zaštita laka',
                    description: 'Nanosimo zaštitni vosak ili keramičku zaštitu koja štiti lak od UV zraka, kiše i prljavštine mjesecima.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Kemijsko čišćenje sjedala',
                    description: 'Tekstilna i kožna sjedala dubinski čistimo bez agresivnih kemikalija — sigurno za djecu i alergičare.',
                    icon: <Clock size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Koliko košta detailing automobila?',
                    answer: 'Vanjsko pranje od 25 €, kemijsko čišćenje interijera od 50 €, kompletni paket (vanjsko + unutarnje) od 70 €. Cijena ovisi o veličini vozila i stupnju zaprljanosti.',
                },
                {
                    question: 'Koliko traje detailing?',
                    answer: 'Vanjsko pranje 1–2 sata, interijer 2–3 sata, kompletni paket 4–6 sati. Poliranje laka zahtijeva dodatno vrijeme.',
                },
                {
                    question: 'Dolazite li na adresu?',
                    answer: 'Da, dolazimo na vašu adresu u Zagrebu i okolici s kompletnom opremom. Potrebno nam je samo pristup struji i vodi.',
                },
                {
                    question: 'Je li kemijsko čišćenje sigurno za kožna sjedala?',
                    answer: 'Apsolutno. Koristimo specijalizirana sredstva za kožu koja čiste bez isušivanja. Nakon čišćenja, kožu hranjamo zaštitnim balzamom.',
                },
            ]}
            relatedServices={[
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Building size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
                { title: 'Tepisi i garniture', href: '/usluge/kemijsko-ciscenje-namjestaja', icon: <Sofa size={18} /> },
            ]}
        />
    );
}
