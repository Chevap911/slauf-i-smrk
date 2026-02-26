import type { Metadata } from 'next';
import { HeartHandshake, Droplets, ShieldCheck, Sparkles } from 'lucide-react';
import ServicePage from '@/components/ServicePage/ServicePage';
import { Building, Home, TreeDeciduous } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Održavanje Grobnih Mjesta Zagreb — Čišćenje Spomenika | Šlauf i Šmrk',
    description: 'Profesionalno čišćenje nadgrobnih spomenika, uklanjanje mahovine i impregnacija kamena. Zagreb i okolica. Dostojanstvena njega za vaše najmilije.',
};

export default function OdrzavanjeGrobnihMjesta() {
    return (
        <ServicePage
            title="Održavanje Grobnih Mjesta"
            titleHighlight="Grobnih Mjesta"
            description="Pružamo dostojanstvenu i pažljivu njegu nadgrobnih spomenika i grobnih mjesta. Uklanjamo mahovinu, alge i nečistoće s kamena te nudimo zaštitnu impregnaciju. Radimo na grobljima u Zagrebu i okolici."
            priceHint="individualna procjena"
            features={[
                {
                    title: 'Čišćenje nadgrobnih ploča',
                    description: 'Pažljivo čistimo mramorne, granitne i kamene nadgrobne ploče uz prilagođen tlak koji ne oštećuje natpise.',
                    icon: <HeartHandshake size={24} />,
                },
                {
                    title: 'Uklanjanje mahovine i algi',
                    description: 'Temeljito uklanjamo zelene naslage i lišajeve koji se s vremenom nakupljaju na kamenim površinama.',
                    icon: <Droplets size={24} />,
                },
                {
                    title: 'Impregnacija kamena',
                    description: 'Zaštitni premaz koji sprječava buduće nakupljanje nečistoća i produžuje interval između čišćenja.',
                    icon: <ShieldCheck size={24} />,
                },
                {
                    title: 'Obnova sjaja',
                    description: 'Poliranjem vraćamo izvorni sjaj mramornim i granitnim pločama za dostojanstven izgled.',
                    icon: <Sparkles size={24} />,
                },
            ]}
            faq={[
                {
                    question: 'Kako se čiste nadgrobni spomenici?',
                    answer: 'Koristimo niskotlačno pranje s ekološkim sredstvima prilagođenima tipu kamena. Postupak ne oštećuje natpise, slike ni dekorativne elemente.',
                },
                {
                    question: 'Koliko košta čišćenje grobnog mjesta?',
                    answer: 'Cijena ovisi o veličini i materijalu spomenika. Nudimo besplatnu procjenu na licu mjesta ili prema fotografijama.',
                },
                {
                    question: 'Na kojim grobljima radite?',
                    answer: 'Radimo na svim grobljima u Zagrebu (Mirogoj, Miroševec, Markovo Polje i dr.) i okolici.',
                },
            ]}
            relatedServices={[
                { title: 'Kamene površine', href: '/usluge/ciscenje-kamenih-povrsina', icon: <TreeDeciduous size={18} /> },
                { title: 'Pranje fasade', href: '/usluge/pranje-fasade', icon: <Building size={18} /> },
                { title: 'Pranje okućnice', href: '/usluge/pranje-okucnice', icon: <Home size={18} /> },
            ]}
        />
    );
}
