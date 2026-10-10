'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, Phone, Check } from 'lucide-react';
import { CJENIK, type Iznos, type Jedinica, type Stavka } from '@/lib/cjenik';
import styles from './QuoteForm.module.css';

export const QUOTE_SERVICES = [
    { id: 'facade', label: 'Pranje fasade' },
    { id: 'yard', label: 'Pranje okućnice' },
    { id: 'terrace', label: 'Pranje terase' },
    { id: 'pavers', label: 'Pranje tlakavaca' },
    { id: 'driveway', label: 'Pranje prilaza' },
    { id: 'stone', label: 'Čišćenje kamena' },
    { id: 'wood', label: 'Čišćenje drvene terase' },
    { id: 'grave', label: 'Grobno mjesto' },
    { id: 'pool', label: 'Pranje bazena' },
    { id: 'chemical', label: 'Kemijsko čišćenje namještaja' },
    { id: 'car', label: 'Detailing automobila' },
    { id: '', label: 'Ostalo / nisam siguran' },
] as const;

/** Id usluge u formi. '' je "Ostalo / nisam siguran". */
export type QuoteServiceId = (typeof QUOTE_SERVICES)[number]['id'];

export const QUOTE_WHATSAPP =
    'https://wa.me/385958442806?text=Pozdrav%2C%20%C5%A1aljem%20slike%20povr%C5%A1ine%20za%20procjenu%20%C4%8Di%C5%A1%C4%87enja.';

// Stavka iz lib/cjenik.ts za svaku uslugu u formi. Brojevi se čitaju iz cjenika, pa promjena
// cijene ne traži izmjenu ovdje. Naziv mora biti doslovno isti kao u cjeniku.
const STAVKA_IZ_CJENIKA: Partial<Record<string, string>> = {
    facade: 'Pranje fasade (žbuka, ETICS i stiropor)',
    yard: 'Pranje okućnice i dvorišta',
    terrace: 'Pranje terase',
    pavers: 'Pranje tlakavaca',
    driveway: 'Pranje prilaza',
    stone: 'Čišćenje kamenih površina',
    wood: 'Čišćenje drvenih površina i drvenih terasa',
    grave: 'Čišćenje jednostrukog groba',
    pool: 'Pranje bazena',
} satisfies Partial<Record<QuoteServiceId, string>>;

const STAVKE = CJENIK.flatMap((k) => k.stavke);

const stavkaZa = (service: string): Stavka | undefined => {
    const naziv = STAVKA_IZ_CJENIKA[service];
    return naziv ? STAVKE.find((s) => s.naziv === naziv) : undefined;
};

// Preimenovana stavka u cjeniku bi tiho maknula polje za veličinu i cijenu iz forme
if (process.env.NODE_ENV !== 'production') {
    for (const [id, naziv] of Object.entries(STAVKA_IZ_CJENIKA)) {
        if (!STAVKE.some((s) => s.naziv === naziv)) console.error(`QuoteForm: stavke "${naziv}" (${id}) nema u lib/cjenik.ts`);
    }
}

// Veličina ima smisla samo gdje se cijena računa po m²
const PER_M2 = new Set(Object.keys(STAVKA_IZ_CJENIKA).filter((id) => stavkaZa(id)?.jedinica === 'm2'));

export const isPerM2Service = (service: string | undefined) => service !== undefined && PER_M2.has(service);

// Cjenik, napomena uz okućnicu i terasu: "površine do 50 m²: od 200 €". Napomena nema svoje
// polje za sidrenu cijenu, pa je ovdje. Kad se iznos mijenja, mijenja se `cijena`, nikad `sidrena`.
const NAJMANJE: Partial<Record<string, { doM2: number; cijena: number; sidrena: number }>> = {
    yard: { doM2: 50, cijena: 200, sidrena: 200 },
    terrace: { doM2: 50, cijena: 200, sidrena: 200 },
};

// Ljudi rijetko znaju kvadraturu, a kuću ili dvorište znaju opisati. Brzi izbor samo upiše broj
// u polje; cijena se i dalje vidi tek nakon slanja (capture-first, CLAUDE.md pravilo 2).
type BrziIzbor = { naziv?: string; m2: number };
const oko = (...m2: number[]): BrziIzbor[] => m2.map((n) => ({ m2: n }));
const BRZI_IZBOR: Partial<Record<string, BrziIzbor[]>> = {
    facade: [
        { naziv: 'Prizemnica', m2: 120 },
        { naziv: 'Kuća s katom', m2: 200 },
        { naziv: 'Kuća s dva kata', m2: 300 },
    ],
    yard: oko(50, 100, 200),
    driveway: oko(50, 100, 200),
    pavers: oko(50, 100, 200),
    terrace: oko(30, 50, 100),
    stone: oko(20, 50, 100),
    wood: oko(20, 50, 100),
} satisfies Partial<Record<QuoteServiceId, BrziIzbor[]>>;

// Listopad do veljače (getMonth: 0 je siječanj). Tko tada čita članak, često ne treba termin odmah.
const IZVAN_SEZONE = new Set([9, 10, 11, 0, 1]);

// Odgoda do ožujka samo za vanjsko pranje. Grob se najviše traži upravo pred Sve svete,
// a namještaj, auto i "ostalo" nemaju sezonu.
const SEZONSKE = new Set<string>(['facade', 'yard', 'terrace', 'pavers', 'driveway', 'stone', 'wood', 'pool'] satisfies QuoteServiceId[]);

type Raspon = { min: number; max: number };

const parseArea = (size: string) => parseFloat(size.replace(',', '.'));

function computeEstimate(service: string, size: string): { cijena: Raspon; sidrena: Raspon } | null {
    const stavka = stavkaZa(service);
    const area = parseArea(size);
    if (!stavka || stavka.jedinica !== 'm2' || !(area > 0)) return null;
    const najmanje = NAJMANJE[service];
    const izracun = (iznos: Iznos, donja = 0): Raspon => ({
        min: Math.max(donja, Math.round(area * iznos.min)),
        max: Math.max(donja, Math.round(area * (iznos.max ?? iznos.min))),
    });
    // Ista površina po cijenama na 10. 9. 2026., jer sidrena stoji uz svaku prikazanu cijenu
    return { cijena: izracun(stavka.cijena, najmanje?.cijena), sidrena: izracun(stavka.sidrena, najmanje?.sidrena) };
}

// Decimalni zarez kao u cjeniku: 1,50
const broj = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(2).replace('.', ','));

const raspon = ({ min, max }: Raspon) => (min === max ? `od ${broj(min)} €` : `${broj(min)} – ${broj(max)} €`);

/** "5 do 7 €/m²", "od 250 €" */
const iznosTekst = (iznos: Iznos, jedinica: Jedinica) => {
    const po = jedinica === 'm2' ? ' €/m²' : ' €';
    if (iznos.max === undefined) return `od ${broj(iznos.min)}${po}`;
    if (iznos.max === iznos.min) return `${broj(iznos.min)}${po}`;
    return `${broj(iznos.min)} do ${broj(iznos.max)}${po}`;
};

type QuoteFormProps = {
    idPrefix?: string;
    hideHeading?: boolean;
    /** Unaprijed odabrana usluga, npr. 'facade' na blogu o fasadi. */
    initialService?: string;
    /** Tekst WhatsApp poruke, da vlasnik odmah vidi o čemu se radi. */
    whatsappText?: string;
    /** Od listopada do veljače nudi "javite mi se u ožujku", samo za vanjsko pranje (SEZONSKE). */
    offerLater?: boolean;
};

const trackWhatsapp = (location: string) => {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'whatsapp_click', cta_location: location });
};

export default function QuoteForm({ idPrefix = 'qf', hideHeading = false, initialService = 'facade', whatsappText, offerLater = false }: QuoteFormProps) {
    const whatsappHref = whatsappText
        ? `https://wa.me/385958442806?text=${encodeURIComponent(whatsappText)}`
        : QUOTE_WHATSAPP;
    const [sent, setSent] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [service, setService] = useState(initialService);
    const [contact, setContact] = useState('');
    const [size, setSize] = useState('');
    const [offSeason, setOffSeason] = useState(false);
    const [later, setLater] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!offerLater) return;
        // Mjesec se čita tek u pregledniku, da server i preglednik iscrtaju isti HTML
        setOffSeason(IZVAN_SEZONE.has(new Date().getMonth()));
    }, [offerLater]);

    const perM2 = PER_M2.has(service);
    const stavka = stavkaZa(service);
    const serviceLabel = QUOTE_SERVICES.find((s) => s.id === service)?.label;
    const showLater = offerLater && offSeason && SEZONSKE.has(service);
    const laterChosen = showLater && later;
    // Forma je nakon slanja zamijenjena porukom, pa se usluga i veličina više ne mijenjaju
    const est = perM2 ? computeEstimate(service, size) : null;

    const submit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const phone = contact.trim();
        if (phone.replace(/\D/g, '').length < 6) {
            setError('Upišite ispravan broj mobitela da vas možemo nazvati.');
            return;
        }
        setSubmitting(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mode: 'final',
                    formData: {
                        name: 'Brzi upit (web)',
                        email: '',
                        phone,
                        city: '',
                        service: service || 'other',
                        surfaceSize: size,
                        // idPrefix kaže s koje stranice je upit (npr. usluga-grave, blog-fasada-cijena, podrucje-zagreb)
                        message: [
                            `Brzi upit s weba (${idPrefix}).`,
                            perM2 ? `Površina: ${size || 'nije navedeno'} m².` : null,
                            est ? `Okvirna cijena prikazana korisniku: ${est.cijena.min} - ${est.cijena.max} €.` : null,
                            !est && stavka ? `Korisniku prikazana cijena iz cjenika: ${iznosTekst(stavka.cijena, stavka.jedinica)}.` : null,
                            laterChosen ? 'Proljetni termin: javiti se u ožujku.' : null,
                        ].filter(Boolean).join(' '),
                        marketingConsent: false,
                    },
                    estimatedPrice: est?.cijena || { min: 0, max: 0 },
                }),
            });
            if (!res.ok) throw new Error('fail');
            // Ista konverzija kao glavna kontakt forma, da je GTM i Google Ads broje
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
                event: 'form_submit',
                form_name: 'Brzi upit',
                form_location: idPrefix,
                service_type: service,
                ...(laterChosen ? { later: true } : {}),
            });
            setSent(true);
        } catch {
            setError('Greška pri slanju. Nazovite nas na +385 95 844 2806 ili WhatsApp.');
        } finally {
            setSubmitting(false);
        }
    };

    if (sent) {
        const najmanje = NAJMANJE[service];
        // Bez veličine: stopa iz cjenika. Usluga s jednom cijenom "od X" (grob, bazen): taj iznos.
        const showRate = !est && perM2 && stavka;
        const showFrom = !est && !perM2 && stavka && stavka.cijena.max === undefined;
        const showsPrice = Boolean(est || showRate || showFrom);
        return (
            <div className={styles.success}>
                <div className={styles.successIcon}><Check size={30} /></div>
                <h3 className={styles.title}>Upit zaprimljen!</h3>
                {est && (
                    <div className={styles.estimate}>
                        <span className={styles.estimateLabel}>Okvirna cijena za vašu površinu</span>
                        <strong className={styles.estimateValue}>{raspon(est.cijena)}</strong>
                        <span className={`sidrena ${styles.anchor}`}>Cijena na 10. 9. 2026.: {raspon(est.sidrena)}</span>
                        <span className={styles.estimateNote}>Informativno, konačnu cijenu potvrđujemo nakon besplatne procjene.</span>
                        <span className={styles.estimateNote}>Cijene po m² i cijene na 10. 9. 2026. su u <a href="/cjenik">cjeniku</a>.</span>
                    </div>
                )}
                {showRate && (
                    <div className={styles.estimate}>
                        <span className={styles.estimateLabel}>Cijena iz cjenika</span>
                        <strong className={styles.estimateRate}>
                            {serviceLabel}: {iznosTekst(stavka.cijena, stavka.jedinica)}
                            <span className="sidrena">Cijena na 10. 9. 2026.: {iznosTekst(stavka.sidrena, stavka.jedinica)}</span>
                        </strong>
                        {najmanje && (
                            <strong className={styles.estimateRate}>
                                Površine do {najmanje.doM2} m²: od {broj(najmanje.cijena)} €
                                <span className="sidrena">Cijena na 10. 9. 2026.: od {broj(najmanje.sidrena)} €</span>
                            </strong>
                        )}
                        <span className={styles.estimateNote}>Informativno, konačnu cijenu potvrđujemo nakon besplatne procjene.</span>
                        <span className={styles.estimateNote}>Sve cijene su u <a href="/cjenik">cjeniku</a>.</span>
                    </div>
                )}
                {showFrom && (
                    <div className={styles.estimate}>
                        <span className={styles.estimateLabel}>{stavka.naziv}</span>
                        <strong className={styles.estimateRate}>
                            Okvirno: {iznosTekst(stavka.cijena, stavka.jedinica)}
                            <span className="sidrena">Cijena na 10. 9. 2026.: {iznosTekst(stavka.sidrena, stavka.jedinica)}</span>
                        </strong>
                        <span className={styles.estimateNote}>Informativno, konačnu cijenu potvrđujemo nakon besplatne procjene.</span>
                        <span className={styles.estimateNote}>Sve cijene su u <a href="/cjenik">cjeniku</a>.</span>
                    </div>
                )}
                <p className={styles.sub}>
                    {laterChosen
                        ? 'Zapisali smo vas. Javimo se početkom ožujka da dogovorimo termin.'
                        : showsPrice
                            ? 'Javimo vam se u najkraćem roku. Za brži odgovor pošaljite slike na WhatsApp.'
                            : 'Javimo vam se u najkraćem roku s okvirnom cijenom. Za brži odgovor pošaljite slike na WhatsApp.'}
                </p>
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.whatsapp} onClick={() => trackWhatsapp(idPrefix)}>
                    <MessageCircle size={18} /> Pošaljite slike na WhatsApp
                </a>
            </div>
        );
    }

    const picks = perM2 ? BRZI_IZBOR[service] : undefined;
    const area = parseArea(size);

    return (
        <div className={styles.wrap}>
            {!hideHeading && (
                <>
                    <h3 className={styles.title}>Zatražite besplatnu procjenu</h3>
                    <p className={styles.sub}>
                        {perM2
                            ? 'Upišite mobitel i veličinu. Okvirnu cijenu vidite čim pošaljete. Bez obveze.'
                            : 'Ostavite mobitel i javimo vam se s cijenom. Bez obveze.'}
                    </p>
                </>
            )}

            <form onSubmit={submit} className={styles.form}>
                <label className={styles.field}>
                    <span>Što treba očistiti?</span>
                    <select
                        value={service}
                        onChange={(e) => {
                            setService(e.target.value);
                            // Veličina za fasadu ne vrijedi za terasu
                            setSize('');
                        }}
                    >
                        {QUOTE_SERVICES.map((s) => <option key={s.label} value={s.id}>{s.label}</option>)}
                    </select>
                </label>

                <label className={styles.field}>
                    <span>Broj mobitela</span>
                    <input
                        id={`${idPrefix}-contact`}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                        placeholder="npr. 095 123 4567"
                        required
                    />
                </label>

                {perM2 && (
                    <div className={styles.field} role="group" aria-labelledby={`${idPrefix}-size-label`}>
                        <span id={`${idPrefix}-size-label`}>Okvirna veličina (nije obavezno)</span>
                        {picks && (
                            <div className={styles.picks}>
                                {picks.map((p) => {
                                    // Odabran je gumb čiji broj stoji u polju, pa ga ručni unos drugog broja poništi
                                    const pressed = area === p.m2;
                                    return (
                                        <button
                                            key={p.m2}
                                            type="button"
                                            className={styles.pick}
                                            aria-pressed={pressed}
                                            onClick={() => setSize(pressed ? '' : String(p.m2))}
                                        >
                                            {p.naziv ? (
                                                <>
                                                    {p.naziv} <span className={styles.pickHint}>(oko {p.m2} m²)</span>
                                                </>
                                            ) : (
                                                `oko ${p.m2} m²`
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        )}
                        <input
                            id={`${idPrefix}-size`}
                            type="number"
                            inputMode="decimal"
                            aria-label="Površina u m²"
                            value={size}
                            onChange={(e) => setSize(e.target.value)}
                            placeholder={picks ? 'ili upišite m², npr. 150' : 'npr. 150'}
                            min="0"
                        />
                    </div>
                )}

                {showLater && (
                    <label className={styles.later}>
                        <input type="checkbox" checked={later} onChange={(e) => setLater(e.target.checked)} />
                        <span>Ne žuri mi se: javite mi se početkom sezone, u ožujku</span>
                    </label>
                )}

                {error && <p className={styles.error}>{error}</p>}

                <button type="submit" className={styles.submit} disabled={submitting}>
                    {submitting ? 'Šaljem...' : perM2 ? 'Pošalji i vidi cijenu' : 'Pošalji upit'}
                </button>
            </form>

            <div className={styles.divider}><span>imate slike?</span></div>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.whatsapp} onClick={() => trackWhatsapp(idPrefix)}>
                <MessageCircle size={18} /> Pošaljite slike na WhatsApp
            </a>
            <a
                href="tel:+385958442806"
                className={styles.callLine}
                onClick={() => {
                    window.dataLayer = window.dataLayer || [];
                    window.dataLayer.push({ event: 'call_click', cta_location: idPrefix });
                }}
            >
                <Phone size={15} /> ili nazovite +385 95 844 2806
            </a>
        </div>
    );
}
