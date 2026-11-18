import { formatIznos, SIDRENI_DATUM } from './cjenik';
import { priceItem } from './quote';
/**
 * Zajednička OG slika za cijeli web.
 *
 * Next ne nasljeđuje openGraph.images iz roditelja kad stranica deklarira
 * vlastiti openGraph blok, a ni file konvencija (app/opengraph-image.jpg) ne
 * popunjava takve stranice. Zato svaka stranica mora eksplicitno navesti
 * images: [OG_IMAGE]. Bez toga dijeljenje na WhatsAppu ide bez slike, a
 * WhatsApp je naš kanal broj jedan.
 *
 * Slika je 1200x630, stvarna fotka s posla. Prije ovoga se deklariralo
 * 1200x630 za fotku koja je zapravo 551x736 portret.
 */
export const OG_IMAGE = {
    url: '/og/slauf-i-smrk-og.jpg',
    width: 1200,
    height: 630,
    alt: 'Ivan iz Šlauf i Šmrk pere terasu u Zagrebu, brendirana majica s brojem telefona',
} as const;

/** Cijena u SEO tekstu čita se iz istog cjenika kao kalkulator. */
export function serviceSeoPrice(service: string, furniture?: string) {
    const item = priceItem(service, furniture);
    if (!item) throw new Error(`Nema stavke cjenika za ${service}`);
    // Uz cijenu ide i cijena na 10. 9. 2026. (NN 101/2026), i u meta opisu. Naslov (title) je bez cijene jer sidrena u njega ne stane.
    return { rate: `${formatIznos(item.cijena, item.jedinica)} (na ${SIDRENI_DATUM}: ${formatIznos(item.sidrena, item.jedinica)})` };
}
const homePrice = serviceSeoPrice('yard');
export const HOME_TITLE = 'Visokotlačno pranje Zagreb: fasade i okućnice | Šlauf i Šmrk';
export const HOME_DESCRIPTION = `Pranje fasada, okućnica i terasa u Zagrebu. Okućnice ${homePrice.rate}. Besplatna procjena.`;
