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
        answer: 'Jednokratno čišćenje kreće od 200 € za jednostruki grob i od 300 € za dvostruki grob ili grobnicu. Konačnu cijenu javljamo prije početka, ovisi o veličini, vrsti kamena i koliko je grob zapušten. Za rezervaciju je predujam 30%, ostatak plaćate tek kad vidite fotografije rezultata.'
    },
    {
        question: 'Mogu li dodati poliranje i impregnaciju?',
        answer: 'Da. Poliranje vraća sjaj kamenu (od 150 €), a impregnacija ga štiti 2–3 godine od mahovine, vode i prljavštine (od 50 €). To su dodatne usluge uz nadoplatu, predložit ćemo vam najbolju opciju nakon procjene groba.'
    },
    {
        question: 'Što ako se neke fleke ne mogu skinuti?',
        answer: 'Iskreni smo: neke duboke fleke (hrđa, stari lampioni, oksidacije) ne mogu se uvijek u potpunosti ukloniti, kamen ih upija godinama. Trudimo se ih maksimalno umanjiti i to vam unaprijed kažemo. Ne naplaćujemo ono što ne možemo postići.'
    },
    {
        question: 'Trebam li biti prisutan na groblju?',
        answer: 'Ne. Cijela usluga je dizajnirana tako da nikad ne morate doći. Plaćate online, dobivate fotografije, imate dokaz da je posao obavljen.'
    },
    {
        question: 'Mogu li odabrati točan datum čišćenja?',
        answer: 'Za standardne termine radimo grupno po groblju, skupljamo 10+ rezervacija prije izlaska, čekanje obično 1–3 tjedna. Za posebne datume (godišnjica, blagdani, Svi sveti) dogovorite se s nama unaprijed, moguće je, uz doplatu za izlazak.'
    },
    {
        question: 'Zašto trebam platiti 30% unaprijed?',
        answer: 'Predujam se plaća zbog rezervacije mjesta za čišćenje, jer izlazimo na teren kada skupimo 10+ rezervacija. Tako nam cijene mogu biti pristupačne i korektne.'
    },
    {
        question: 'Na kojim grobljima radite?',
        answer: 'Mirogoj, Miroševac, Markovo Polje, Brestje, Krematorij i sva manja groblja u Zagrebu i okolici. Za druga groblja u Hrvatskoj, pitajte, dogovaramo se.'
    },
    {
        question: 'Hoće li čišćenje oštetiti natpise, slike ili spomenik?',
        answer: 'Ne. Koristimo profesionalnu opremu s podesivim pritiskom i ručno radimo oko osjetljivih dijelova (gravure, fotografije, mali ukrasi). Naša 5.0 Google ocjena potvrđuje da znamo što radimo.'
    },
    {
        question: 'Je li ova usluga prikladna za iseljenike?',
        answer: 'Više od polovice naših klijenata su iseljenici, Njemačka, Austrija, Švicarska, Irska, SAD, Kanada, Australija. Komuniciramo na hrvatskom, engleskom i njemačkom. Plaćanje je moguće SEPA transferom, Wise-om, PayPal-om ili direktnom uplatom na Revolut.'
    },
    {
        question: 'Što ako nisam zadovoljan rezultatom?',
        answer: 'Vraćamo se i dorađujemo bez doplate. Ako je problem da se nešto fizički ne može ukloniti (a to vam nismo pravovremeno rekli), umanjujemo cijenu. Naš ugled nam je važniji od jedne uplate.'
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
