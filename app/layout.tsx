import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import StickyCtaBanner from "@/components/StickyCtaBanner/StickyCtaBanner";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import QuoteFab from "@/components/QuoteFab/QuoteFab";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://slaufismrk.com"),
  title: "Pranje fasada i okućnica Zagreb | Šlauf i Šmrk",
  description:
    "Profesionalno pranje fasada, okućnica, terasa i prilaza u Zagrebu i okolici. Besplatna procjena, siguran pristup površinama i rezultati prije i poslije.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Pranje fasada i okućnica Zagreb | Šlauf i Šmrk",
    description:
      "Profesionalno pranje fasada, okućnica, terasa i prilaza u Zagrebu i okolici. Besplatna procjena i stvarni rezultati prije i poslije.",
    url: "https://slaufismrk.com",
    siteName: "Šlauf i Šmrk",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/prije-poslje/fasada-poslje.png",
        width: 1200,
        height: 630,
        alt: "Očišćena fasada obiteljske kuće u Zagrebu nakon profesionalnog pranja",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pranje fasada i okućnica Zagreb | Šlauf i Šmrk",
    description: "Profesionalno pranje fasada, okućnica, terasa i prilaza u Zagrebu i okolici.",
    images: ["/prije-poslje/fasada-poslje.png"],
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
    "Profesionalno pranje fasada, okućnica, terasa, prilaza, kamenih i drvenih površina u Zagrebu i okolici.",
  url: "https://slaufismrk.com",
  image: [
    "https://slaufismrk.com/prije-poslje/fasada-poslje.png",
    "https://slaufismrk.com/prije-poslje/terasa-leggiero-poslje-1.jpeg",
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
    streetAddress: "Primoštenska ulica 11",
    addressLocality: "Zagreb",
    postalCode: "10000",
    addressRegion: "Zagreb",
    addressCountry: "HR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.815,
    longitude: 15.9819,
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
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
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
            dobiva tagove odmah nakon učitavanja, da se izvor posjeta ne izgubi. */}
        {/* eslint-disable-next-line @next/next/next-script-for-ga -- GoogleTagManager iz @next/third-parties bi ga učitao odmah */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function (w, d) {
  var done = false, ready = false, wanted = false;
  var events = ['pointerdown', 'touchstart', 'keydown', 'scroll', 'mousemove'];
  function add(src) {
    var s = d.createElement('script');
    s.async = true;
    s.src = src;
    d.head.appendChild(s);
  }
  function load() {
    if (done) return;
    done = true;
    events.forEach(function (e) { w.removeEventListener(e, poke); });
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
    add('https://www.googletagmanager.com/gtm.js?id=GTM-MG836SL3');
    w.clarity = w.clarity || function () { (w.clarity.q = w.clarity.q || []).push(arguments); };
    add('https://www.clarity.ms/tag/whlsqtxcm4');
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
        <StickyCtaBanner />
        <CookieBanner />
      </body>
    </html>
  );
}
