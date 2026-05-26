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
        question: 'Koliko košta pranje fasade?',
        answer: 'Cijena ovisi o kvadraturi i tipu fasade. Okvirni raspon je od od 5 €/m². Za točniju procjenu pošaljite nam 2-3 slike fasade na WhatsApp.'
    },
    {
        question: 'Trebam li znati točnu kvadraturu fasade?',
        answer: 'Ne morate. Dovoljno je da nam pošaljete nekoliko slika objekta na WhatsApp i mi ćemo napraviti okvirnu procjenu površine i cijene.'
    },
    {
        question: 'Hoće li pranje oštetiti moju fasadu?',
        answer: 'Ne. Koristimo profesionalnu opremu i prilagođavamo tlak vode ovisno o tipu fasade i stupnju oštećenja kako bismo osigurali sigurno pranje.'
    },
    {
        question: 'Perete li ETICS fasade (stiropor)?',
        answer: 'Da. Imamo iskustva s ETICS fasadama. Tretiramo ih s pažnjom i prilagođenim tlakom kako ne bi došlo do oštećenja završnog sloja.'
    },
    {
        question: 'Koliko brzo možete doći?',
        answer: 'Trudimo se odgovoriti na upite isti dan. Sam dolazak na lokaciju i pranje ovisi o trenutnom rasporedu, najčešće unutar 3-7 dana od dogovora.'
    },
    {
        question: 'Radite li Zagreb i okolicu?',
        answer: 'Da, pokrivamo cijeli grad Zagreb i cijelu Zagrebačku županiju bez dodatnih troškova za dolazak.'
    }
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
