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
        question: 'Koliko košta pranje okućnice?',
        answer: 'Cijena ovisi o kvadraturi i tipu podloge. Okvirni raspon je od 2 do 4 €/m². Za točniju procjenu pošaljite nam 2-3 slike dvorišta na WhatsApp.'
    },
    {
        question: 'Trebam li znati točnu kvadraturu dvorišta?',
        answer: 'Ne morate. Dovoljno je da nam pošaljete nekoliko slika okućnice na WhatsApp i mi ćemo napraviti okvirnu procjenu površine i cijene.'
    },
    {
        question: 'Uklanjate li korov i travu iz fuga na tlakavcima?',
        answer: 'Da! Snažnim visokotlačnim pranjem izbijamo korov, travu i nakupljenu zemlju iz fuga te ostavljamo tlakavce čistima.'
    },
    {
        question: 'Možete li ukloniti mrlje od motornog ulja s prilaza?',
        answer: 'U većini slučajeva da. Koristimo specijalna sredstva za odmašćivanje koja razgrađuju uljne mrlje, no uspješnost ovisi o tome koliko dugo je ulje upijano u podlogu.'
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
