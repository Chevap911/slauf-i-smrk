import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Šlauf i Šmrk | Profesionalno Visokotlačno Čišćenje Zagreb",
  description: "Vrhunsko visokotlačno čišćenje fasada, okućnica, prilaza i detailing automobila u Zagrebu i okolici. Brzo, sigurno i efikasno.",
  keywords: ["visokotlačno čišćenje", "pranje fasada", "pranje okućnica", "kemijsko čišćenje tepiha", "detailing automobila", "čišćenje fasade Zagreb", "pranje dvorišta Zagreb"],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Šlauf i Šmrk",
  description: "Profesionalno visokotlačno čišćenje fasada, okućnica, kamenih i drvenih površina, detailing automobila te kemijsko čišćenje tepiha i garnitura u Zagrebu i okolici.",
  url: "https://slaufismrk.com",
  telephone: "+385916400247",
  email: "info@slaufismrk.com",
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
    <html lang="hr">
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
      </body>
    </html>
  );
}

