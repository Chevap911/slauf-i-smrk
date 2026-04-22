import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Admin | Šlauf i Šmrk",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (
    process.env.NODE_ENV === "production" &&
    process.env.ENABLE_WEB_ADMIN !== "true"
  ) {
    notFound();
  }

  return children;
}
