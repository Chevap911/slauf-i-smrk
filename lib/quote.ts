import { CJENIK, SIDRENI_DATUM, formatIznos, sidrenaTekst, type Iznos, type Stavka } from './cjenik';

export const QUOTE_SERVICES = [
    { id: 'facade', label: 'Pranje fasade', slug: 'pranje-fasade', item: 'Pranje fasade (žbuka, ETICS i stiropor)' },
    { id: 'yard', label: 'Okućnica / dvorište', slug: 'pranje-okucnice', item: 'Pranje okućnice i dvorišta' },
    { id: 'terrace', label: 'Pranje terase', slug: 'pranje-terasa', item: 'Pranje terase' },
    { id: 'pavers', label: 'Tlakavci / betonske kocke', slug: 'pranje-tlakavaca', item: 'Pranje tlakavaca' },
    { id: 'driveway', label: 'Pranje prilaza', slug: 'pranje-prilaza', item: 'Pranje prilaza' },
    { id: 'stone', label: 'Čišćenje kamena', slug: 'ciscenje-kamenih-povrsina', item: 'Čišćenje kamenih površina' },
    { id: 'wood', label: 'Drvena terasa', slug: 'ciscenje-drvenih-povrsina', item: 'Čišćenje drvenih površina i drvenih terasa' },
    { id: 'chemical', label: 'Kemijsko čišćenje', slug: 'kemijsko-ciscenje-namjestaja', item: '' },
    { id: 'b2b_commercial', label: 'Poslovni / javni objekt', slug: 'poslovni-objekti', item: '' },
    { id: 'grave', label: 'Grobno mjesto (lista interesa)', slug: 'odrzavanje-grobnih-mjesta', item: '' },
    { id: 'pool', label: 'Pranje bazena', slug: 'pranje-bazena', item: 'Pranje bazena' },
    { id: 'car', label: 'Detailing automobila', slug: 'detailing-automobila', item: '' },
    { id: '', label: 'Ostalo / nisam siguran', slug: '', item: '' },
] as const;
export type QuoteServiceId = (typeof QUOTE_SERVICES)[number]['id'];
export const FURNITURE = [
    { id: 'garnitura', label: 'Garnitura 3+2+1', item: 'Kompletna garnitura (3+2+1)' },
    { id: 'trosjed', label: 'Trosjed', item: 'Trosjed' },
    { id: 'madrac', label: 'Jednostruki madrac', item: 'Madrac (jednostruki)' },
    { id: 'bracni', label: 'Bračni madrac', item: 'Madrac (bračni)' },
    { id: 'dvosjed', label: 'Dvosjed', item: 'Dvosjed' },
    { id: 'fotelja', label: 'Fotelja', item: 'Fotelja' },
] as const;
const items = CJENIK.flatMap(k => k.stavke);
export function priceItem(service: string, furniture = 'garnitura'): Stavka | undefined {
    const name = service === 'chemical' ? FURNITURE.find(s => s.id === furniture)?.item : QUOTE_SERVICES.find(s => s.id === service)?.item;
    return items.find(s => s.naziv === name);
}
export const isPerM2Service = (service?: string) => !!service && priceItem(service)?.jedinica === 'm2';
export const parseArea = (size: string) => {
    if (!/^\d+(?:[.,]\d+)?$/.test(size.trim())) return NaN;
    const n = Number(size.trim().replace(',', '.'));
    return Number.isFinite(n) && n > 0 && n <= 100000 ? n : NaN;
};
export type Range = { min: number; max: number };
export function computeEstimate(service: string, size: string): { cijena: { min: number }; sidrena: Range } | null {
    const item = priceItem(service), area = parseArea(size);
    if (!item || item.jedinica !== 'm2' || !Number.isFinite(area)) return null;
    const calculate = (price: Iznos, minimum = 0): Range => ({ min: Math.max(minimum, Math.round(area * price.min)), max: Math.max(minimum, Math.round(area * (price.max ?? price.min))) });
    return { cijena: { min: calculate(item.cijena, item.minimum?.cijena).min }, sidrena: calculate(item.sidrena, item.minimum?.sidrena) };
}
export const formatRange = ({ min }: { min: number }) => `od ${min.toLocaleString('hr-HR')} €`;
/** Ukupna sidrena cijena za kvadraturu: "1.000–1.400 €" ili "200 €" kad je minimum. */
export const formatSidrena = ({ min, max }: Range) =>
    min === max ? `${min.toLocaleString('hr-HR')} €` : `${min.toLocaleString('hr-HR')}–${max.toLocaleString('hr-HR')} €`;
export const sidrenaUkupno = (r: Range) => `Cijena na ${SIDRENI_DATUM}: ${formatSidrena(r)}`;
export function serviceForPath(path: string): QuoteServiceId {
    return QUOTE_SERVICES.find(s => s.slug && path === `/usluge/${s.slug}`)?.id ?? 'facade';
}
export function quoteSummary(service: string, size: string, furniture = 'garnitura'): string {
    if (service === 'grave') return 'Grobno mjesto: lista interesa, termin trenutačno nije dostupan.';
    const label = QUOTE_SERVICES.find(s => s.id === service)?.label ?? 'Čišćenje';
    const estimate = computeEstimate(service, size), item = priceItem(service, furniture);
    if (estimate) return `${label}, oko ${parseArea(size).toLocaleString('hr-HR')} m². Početna cijena: ${formatRange(estimate.cijena)} (cijena na ${SIDRENI_DATUM}: ${formatSidrena(estimate.sidrena)}).`;
    if (item) return `${service === 'chemical' ? item.naziv : label}: ${formatIznos(item.cijena, item.jedinica)} (${sidrenaTekst(item).replace('Cijena', 'cijena')}).`;
    return `${label}: cijena po ponudi.`;
}
export const whatsappHref = (summary: string) => `https://wa.me/385958442806?text=${encodeURIComponent(`Pozdrav! ${summary} Šaljem fotografije za procjenu.`)}`;
export const QUOTE_WHATSAPP = whatsappHref('Zanima me čišćenje.');
