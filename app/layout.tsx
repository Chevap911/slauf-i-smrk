import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Šlauf i Šmrk | Profesionalno Visokotlačno Čišćenje Zagreb",
  description: "Vrhunsko visokotlačno čišćenje fasada, okućnica, prilaza i detailing automobila u Zagrebu i okolici. Brzo, sigurno i efikasno.",
  keywords: ["visokotlačno čišćenje", "pranje fasada", "pranje okućnica", "detailing automobila", "zagreb", "čišćenje kamena"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hr">
      <body>
        {children}
      </body>
    </html>
  );
}
