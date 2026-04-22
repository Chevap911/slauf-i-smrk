import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import StickyCtaBanner from "@/components/StickyCtaBanner/StickyCtaBanner";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

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
    description:
      "Profesionalno pranje fasada, okućnica, terasa i prilaza u Zagrebu i okolici.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyCtaBanner />
      </body>
    </html>
  );
}
