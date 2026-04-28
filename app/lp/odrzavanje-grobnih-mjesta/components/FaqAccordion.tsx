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
        question: 'Koliko košta čišćenje grobnog mjesta?',
        answer: 'Početna cijena kreće od 100 €. Konačna cijena ovisi o veličini grobnog mjesta, vrsti kamena (mramor, granit, vapnenac) i stupnju zaprljanosti. Za rezervaciju plaća se 50% predujma, ostatak po završetku uz fotografije.'
    },
    {
        question: 'Trebam li biti prisutan na groblju?',
        answer: 'Ne, ne trebate biti prisutni. Samo nam javite lokaciju grobnog mjesta — groblje, polje, red i broj. Mi dolazimo, obavljamo posao i šaljemo vam fotografije prije i poslije čišćenja kao potvrdu.'
    },
    {
        question: 'Mogu li odabrati točan datum čišćenja?',
        answer: 'Čišćenje organiziramo grupno po groblju — odlazimo kada se skupi minimalno 10 grobnih mjesta na istom groblju. Vi se prijavite, platite 50% predujma i mi vas kontaktiramo čim termin bude zakazan. Većina klijenata čeka 2 do 4 tjedna.'
    },
    {
        question: 'Zašto trebam platiti 50% unaprijed?',
        answer: 'Predujam osigurava vaše mjesto na listi i potvrđuje rezervaciju. Ostatak se plaća po završetku radova, uz dostavu fotografija prije i poslije kao dokaz obavljenog posla.'
    },
    {
        question: 'Na kojim grobljima radite?',
        answer: 'Pokrivamo sva veća groblja u Zagrebu: Mirogoj, Miroševac, Markovo Polje, Brestje i Krematorij. Za groblja izvan ove liste javite nam se — dogovorit ćemo po upitu.'
    },
    {
        question: 'Hoće li čišćenje oštetiti natpise ili fotografije na spomeniku?',
        answer: 'Ne. Koristimo niski tlak i pH-neutralna sredstva prilagođena vrsti kamena. Natpise, fotografije i ugravirane elemente tretiramo posebno pažljivo i nježno.'
    },
    {
        question: 'Je li ova usluga prikladna za iseljenike?',
        answer: 'Apsolutno. Ova usluga je posebno osmišljena za ljude koji žive izvan Zagreba ili u inozemstvu. Sve organiziramo remotely — javite nam lokaciju i mi se pobrinemo za sve. Fotografije dobivate na mobitel.'
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
