import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import StickyCtaBanner from "@/components/StickyCtaBanner/StickyCtaBanner";
import CookieBanner from "@/components/CookieBanner/CookieBanner";
import Script from "next/script";
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
  "@type": "LocalBusiness",
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
    addressLocality: "Zagreb",
    addressCountry: "HR",
  },
  priceRange: "€€",
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
          name: "Pranje okućnice i prilaza",
          url: "https://slaufismrk.com/usluge/pranje-okucnice",
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
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* Google Consent Mode v2 Default */}
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
            `
          }}
        />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
        
        {/* Google Tag Manager */}
        <Script
          id="gtm-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MG836SL3');`,
          }}
        />
        
        {/* Microsoft Clarity */}
        <Script
          id="clarity-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "whlsqtxcm4");`,
          }}
        />
        {/* End Google Tag Manager (noscript) */}
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyCtaBanner />
        <CookieBanner />
      </body>
    </html>
  );
}
