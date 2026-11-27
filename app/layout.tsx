
import JsonLd from '@/components/JsonLd/JsonLd';
import { HOME_TITLE, HOME_DESCRIPTION, OG_IMAGE } from '@/lib/seo';
import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import QuoteFab from "@/components/QuoteFab/QuoteFab";
import "./globals.css";

// Bez preloada: fontovi koji se krenu učitavati prije prvog iscrtavanja u Chromeu 153
// drže iscrtavanje (izmjereno kroz usporeni proxy: prvo iscrtavanje 2,3 s → 0,27 s,
// PageSpeed 78 → 100, uz inlineCss u next.config.ts). Fontovi se i dalje učitaju
// odmah, a tekst do tada stoji u zamjenskom fontu istih mjera (swap).
const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap", preload: false });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  preload: false,
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

// Zadano za naslovnu i svaku stranicu bez vlastitog metadata; isto kao app/page.tsx
const DEFAULT_TITLE = HOME_TITLE;
const DEFAULT_DESCRIPTION = HOME_DESCRIPTION;

export const metadata: Metadata = {
  metadataBase: new URL("https://slaufismrk.com"),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    url: "https://slaufismrk.com",
    siteName: "Šlauf i Šmrk",
    locale: "hr_HR",
    type: "website",
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [OG_IMAGE.url],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  // "CleaningService" nije schema.org tip; Google ga tretira kao nepoznat objekt
  // pa Review snippets javlja "Invalid object type". HomeAndConstructionBusiness
  // je validan LocalBusiness podtip najbliži djelatnosti.
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://slaufismrk.com/#business",
  name: "Šlauf i Šmrk",
  description:
    "Pranje fasada, okućnica, terasa, prilaza, kamenih i drvenih površina u Zagrebu i okolici. Za tvrtke i ustanove pranje vanjskih površina vrućom vodom.",
  url: "https://slaufismrk.com",
  image: [
    "https://slaufismrk.com/prije-poslje/fasada-poslje.png",
    "https://slaufismrk.com/prije-poslje/terasa-leggiero-poslje-1.jpeg",
    "https://slaufismrk.com/projekti/samobor/kolodvor-samobor-opran-pod.webp",
    "https://slaufismrk.com/hero-foto/ivan-i-marko-uz-stroj-500-bar.jpg",
  ],
  // Isti profili kao u podnožju (components/Footer/Footer.tsx).
  sameAs: [
    "https://www.facebook.com/slaufismrk",
    "https://www.instagram.com/slaufismrk",
  ],
  telephone: "+385958442806",
  email: "slauf.i.smrk@gmail.com",
  areaServed: [
    {
      "@type": "City",
      name: "Zagreb",
    },
    {
      "@type": "AdministrativeArea",
      name: "Zagrebačka županija",
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Domitrovićeva ulica 6",
    addressLocality: "Zagreb",
    postalCode: "10000",
    addressRegion: "Zagreb",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.8186,
    longitude: 15.8879,
  },
  priceRange: "€€",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "40",
    bestRating: "5",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Usluge čišćenja",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pranje fasade",
          url: "https://slaufismrk.com/usluge/pranje-fasade",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pranje okućnice i dvorišta",
          url: "https://slaufismrk.com/usluge/pranje-okucnice",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pranje terasa",
          url: "https://slaufismrk.com/usluge/pranje-terasa",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pranje tlakavaca",
          url: "https://slaufismrk.com/usluge/pranje-tlakavaca",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pranje prilaza",
          url: "https://slaufismrk.com/usluge/pranje-prilaza",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kemijsko čišćenje namještaja",
          url: "https://slaufismrk.com/usluge/kemijsko-ciscenje-namjestaja",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Čišćenje kamenih površina",
          url: "https://slaufismrk.com/usluge/ciscenje-kamenih-povrsina",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Čišćenje drvenih površina",
          url: "https://slaufismrk.com/usluge/ciscenje-drvenih-povrsina",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Detailing automobila",
          url: "https://slaufismrk.com/usluge/detailing-automobila",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pranje bazena",
          url: "https://slaufismrk.com/usluge/pranje-bazena",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Održavanje grobnih mjesta",
          url: "https://slaufismrk.com/usluge/odrzavanje-grobnih-mjesta",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Pranje vanjskih površina vrućom vodom",
          url: "https://slaufismrk.com/usluge/poslovni-objekti",
        },
      },
    ],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://slaufismrk.com/#organization",
  name: "Šlauf i Šmrk",
  url: "https://slaufismrk.com",
  logo: {
    "@type": "ImageObject",
    url: "https://slaufismrk.com/icon.svg",
    contentUrl: "https://slaufismrk.com/icon.svg",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+385958442806",
    email: "slauf.i.smrk@gmail.com",
    contactType: "customer service",
    areaServed: "HR",
    availableLanguage: "Croatian",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // data-consent na <html> postavlja skripta ispod prije hidracije
    <html lang="hr" className={`${inter.variable} ${outfit.variable}`} suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        
        {/* Google Consent Mode v2 Default + već spremljen izbor iz cookie bannera.
            data-consent skriva banner prije prvog iscrtavanja (CookieBanner.module.css). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied',
                'wait_for_update': 500
              });
              gtag('set', 'url_passthrough', true);
              try {
                var c = localStorage.getItem('cookie_consent');
                if (c) {
                  document.documentElement.setAttribute('data-consent', c);
                  if (c === 'granted') gtag('consent', 'update', {
                    'ad_storage': 'granted',
                    'ad_user_data': 'granted',
                    'ad_personalization': 'granted',
                    'analytics_storage': 'granted'
                  });
                }
              } catch (e) {}
            `
          }}
        />
        
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={organizationSchema} />
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MG836SL3"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {/* Google Tag Manager (s njim Google Ads, GA4 i Meta pixel) + Microsoft Clarity.
            Zajedno su ~600 KB JS-a i ~1 s rada procesora na mobitelu, pa se učitavaju
            tek na prvi dodir, scroll ili tipku, najkasnije 4 s nakon učitavanja.
            dataLayer eventi (call_click, lead_form_submit...) čekaju u redu i GTM
            ih obradi kad se učita. Posjet s oglasa ili kampanje (gclid, fbclid, utm_...)
            dobiva tagove odmah nakon učitavanja, da se izvor posjeta ne izgubi.
            Clarity snima sesije (klikovi, scroll, pokreti miša) pa za posjetitelje iz EU
            traži pristanak; do 10. 10. 2026. učitavao se i bez njega. Sad ide samo uz
            cookie_consent 'granted', a CookieBanner ga pokrene preko slaufLoadClarity
            čim netko klikne "Prihvaćam sve". GTM ostaje isti jer poštuje Consent Mode. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga -- GoogleTagManager iz @next/third-parties bi ga učitao odmah */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d) {
  if (!['slaufismrk.com', 'www.slaufismrk.com'].includes(w.location.hostname)) return;
  var done = false, ready = false, wanted = false;
  var events = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'mousemove'];
  function add(src) {
    var s = d.createElement('script');
    s.async = true;
    s.src = src;
    d.head.appendChild(s);
  }
  // Jednom po stranici, koliko god puta se pozove (loader i banner). Poziva se samo uz pristanak.
  var clarityAdded = false, clarityWanted = false;
  w.slaufLoadClarity = function () {
    // Prihvat u prvim sekundama samo se zapamti; Clarity ide s GTM-om u load(), ne prije LCP-a
    if (!done) { clarityWanted = true; return; }
    if (clarityAdded) return;
    clarityAdded = true;
    w.clarity = w.clarity || function () { (w.clarity.q = w.clarity.q || []).push(arguments); };
    // Clarity za posjetitelje iz EGP-a bez signala pristanka radi bez kolačića
    w.clarity('consentv2', { ad_Storage: 'granted', analytics_Storage: 'granted' });
    add('https://www.clarity.ms/tag/whlsqtxcm4');
  };
  function load() {
    if (done) return;
    done = true;
    events.forEach(function (e) { w.removeEventListener(e, poke); });
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    add('https://www.googletagmanager.com/gtm.js?id=GTM-MG836SL3');
    var c = null;
    try { c = localStorage.getItem('cookie_consent'); } catch (e) {}
    if (clarityWanted || c === 'granted') w.slaufLoadClarity();
  }
  function poke() {
    wanted = true;
    if (ready) load();
  }
  function onLoad() {
    ready = true;
    if (wanted || /[?&](gclid|gbraid|wbraid|fbclid|msclkid|utm_[a-z]+)=/.test(location.search)) {
      (w.requestIdleCallback || setTimeout)(load);
    } else {
      setTimeout(load, 4000);
    }
  }
  events.forEach(function (e) { w.addEventListener(e, poke, { passive: true }); });
  if (d.readyState === 'complete') onLoad();
  else w.addEventListener('load', onLoad);
})(window, document);`,
          }}
        />
        <Navigation />
        <main>{children}</main>
        <Footer />
        <QuoteFab />
        <CookieBanner />
      </body>
    </html>
  );
}
