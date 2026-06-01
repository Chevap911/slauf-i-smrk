'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import styles from '../../LandingPage.module.css';

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}

function FaqItem({ question, answer, isOpen, onClick }: FaqItemProps) {
    return (
        <div className={styles.faqItem}>
            <button
                className={styles.faqButton}
                onClick={onClick}
                aria-expanded={isOpen}
            >
                <span style={{ paddingRight: '1rem' }}>{question}</span>
                {isOpen ? <ChevronUp size={20} style={{ flexShrink: 0 }} /> : <ChevronDown size={20} style={{ flexShrink: 0 }} />}
            </button>
            {isOpen && (
                <div className={styles.faqAnswer}>
                    {answer}
                </div>
            )}
        </div>
    );
}

const faqData = [
    {
        question: 'Izdajete li račun za tvrtke?',
        answer: 'Da. Svim poslovnim klijentima izdajemo račun koji možete koristiti kao poslovni trošak. Obrt smo izvan sustava PDV-a, pa na računu nema PDV-a. Uvjete plaćanja dogovaramo individualno, žiro, kartice, obročno za redovite klijente.'
    },
    {
        question: 'Možete li raditi izvan radnog vremena ili vikendom?',
        answer: 'Da. Radimo po vašem rasporedu, rano ujutro, navečer ili vikendom. Nema potrebe za angažiranjem vašeg osoblja ili zaustavljanjem operacija.'
    },
    {
        question: 'Što sve čistite na poslovnom objektu?',
        answer: 'Fasade, parkirišta, rampe, istovarne zone, ulaze, terase, popločavanja, betonske i kamene površine, sve vanjske površine dogovorene u ponudi.'
    },
    {
        question: 'Koliko košta čišćenje poslovnog objekta?',
        answer: 'Cijena ovisi o tipu objekta, površinama i učestalosti. Dolazimo na besplatnu procjenu ili vam damo okvirnu ponudu po kratkom upitu. Za redovite klijente osiguravamo povoljnije uvjete.'
    },
    {
        question: 'Radite li za klijente s više lokacija?',
        answer: 'Da. Možemo pokriti više poslovnih lokacija jednim ugovorom, s jedinstvenim uvjetima, rasporedom i fakturiranjem za sve objekte.'
    },
    {
        question: 'Kako izgleda redoviti ugovor?',
        answer: 'Jednom dogovorimo uvjete, raspored i cijenu, i mi dolazimo po planu bez potrebe za vašim ponovnim angažmanom. Najčešće 2× ili 4× godišnje, po dogovoru.'
    },
    {
        question: 'Koliko vremena traje čišćenje?',
        answer: 'Ovisi o veličini objekta. Manje poslovno parkirište ili fasadu očistimo za 4–8 sati. Za veće objekte dogovaramo izvedbu u više navrata ili za vikend.'
    },
];

export default function FaqAccordion() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <div>
            {faqData.map((item, index) => (
                <FaqItem
                    key={index}
                    question={item.question}
                    answer={item.answer}
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                />
            ))}
        </div>
    );
}
