import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: 'swap' });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-heading", display: 'swap' });
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";
import StickyCtaBanner from "@/components/StickyCtaBanner/StickyCtaBanner";

export const metadata: Metadata = {
  metadataBase: new URL("https://slaufismrk.com"),
  title: "Šlauf i Šmrk | Profesionalno Visokotlačno Čišćenje Zagreb",
  description: "Vrhunsko visokotlačno čišćenje fasada, okućnica, prilaza i detailing automobila u Zagrebu i okolici. Brzo, sigurno i efikasno.",
  keywords: ["visokotlačno čišćenje", "pranje fasada", "pranje okućnica", "kemijsko čišćenje tepiha", "detailing automobila", "čišćenje fasade Zagreb", "pranje dvorišta Zagreb"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Šlauf i Šmrk | Profesionalno Visokotlačno Čišćenje Zagreb",
    description: "Vrhunsko visokotlačno čišćenje fasada, okućnica, prilaza i detailing automobila u Zagrebu i okolici.",
    url: "https://slaufismrk.com",
    siteName: "Šlauf i Šmrk",
    locale: "hr_HR",
    type: "website",
    images: [
      {
        url: "/assets/brand-mascots.png",
        width: 800,
        height: 800,
        alt: "Šlauf i Šmrk Maskote - Visokotlačno čišćenje",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Šlauf i Šmrk | Profesionalno Visokotlačno Čišćenje Zagreb",
    description: "Vrhunsko visokotlačno čišćenje fasada, okućnica, prilaza i detailing automobila u Zagrebu i okolici.",
    images: ["/assets/brand-mascots.png"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Šlauf i Šmrk",
  description: "Profesionalno visokotlačno čišćenje fasada, okućnica, kamenih i drvenih površina, detailing automobila te kemijsko čišćenje tepiha i garnitura u Zagrebu i okolici.",
  url: "https://slaufismrk.com",
  telephone: "+385958442806",
  email: "slauf.i.smrk@gmail.com",
  areaServed: {
    "@type": "City",
    name: "Zagreb",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Zagreb",
    addressCountry: "HR",
  },
  priceRange: "€€",
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
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-MG836SL3');`,
          }}
        />
        {/* End Google Tag Manager */}
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
        {/* End Google Tag Manager (noscript) */}
        <Navigation />
        <main>{children}</main>
        <Footer />
        <StickyCtaBanner />
      </body>
    </html>
  );
}

