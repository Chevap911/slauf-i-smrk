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
