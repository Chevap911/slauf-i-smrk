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
        question: 'Koliko košta pranje terasa?',
        answer: 'Cijena ovisi o površini i materijalu (drvo, WPC, kamen, keramika). Okvirni raspon je od 3 do 5 €/m². Za najbržu i najtočniju procjenu pošaljite nam slike terase na WhatsApp.'
    },
    {
        question: 'Trebam li znati točnu kvadraturu terase?',
        answer: 'Ne morate. Dovoljno je da nam pošaljete nekoliko slika na WhatsApp i mi ćemo napraviti okvirnu procjenu.'
    },
    {
        question: 'Može li pranje oštetiti drvo ili fuge?',
        answer: 'Ne. Za drvo i osjetljivu keramiku koristimo rotirajuće četke i prilagođeni tlak kako bismo dubinski očistili površinu bez oštećenja strukture materijala ili fuga.'
    },
    {
        question: 'Uklanjate li mrlje od kave, vina i masnoće?',
        answer: 'Da! Kombinacijom prilagođenog tlaka, tople vode (po potrebi) i specijaliziranih sredstava, uklanjamo tvrdokorne mrlje tipične za terase kafića i restorana.'
    },
    {
        question: 'Radite li čišćenje izvan radnog vremena?',
        answer: 'Za ugostiteljske i poslovne objekte možemo dogovoriti pranje rano ujutro prije otvaranja ili nakon završetka smjene kako ne bismo ometali vaš rad.'
    },
    {
        question: 'Radite li izvan Zagreba?',
        answer: 'Da, pokrivamo cijeli Zagreb i Zagrebačku županiju bez dodatnih putnih troškova.'
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
