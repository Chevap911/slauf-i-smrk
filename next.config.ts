import path from "node:path";
import { existsSync, readFileSync } from "node:fs";
import type { NextConfig } from "next";

// Važeći strojno čitljiv cjenik (NN 132/2026-1584, čl. 6 st. 2: izmijenjena datoteka
// na istom URL-u). Manifest piše `npm run cjenik`.
const cjenikManifest = path.resolve(__dirname, "public/cjenik/manifest.json");
const vazeciCjenik: { datoteka: string } | null = existsSync(cjenikManifest)
  ? JSON.parse(readFileSync(cjenikManifest, "utf8")).vazeci
  : null;

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  excludeDefaultMomentLocales: true,
  experimental: {
    // CSS (~23 KB) ide u <head> umjesto 7 zasebnih fajlova, pa se stranica iscrta
    // čim stigne HTML. Samo zajedno s fontovima bez preloada (app/layout.tsx):
    // kroz usporeni proxy obje izmjene zajedno 100, svaka zasebno 73-82.
    inlineCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 85],
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  async headers() {
    return [
      {
        source: "/cjenik/:file*.csv",
        headers: [
          { key: "Content-Type", value: "text/csv; charset=utf-8" },
          { key: "Cache-Control", value: "public, max-age=0, must-revalidate" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      ...(vazeciCjenik
        ? [{ source: "/cjenik.csv", destination: `/cjenik/${vazeciCjenik.datoteka}`, permanent: false }]
        : []),
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.slaufismrk.com' }],
        destination: 'https://slaufismrk.com/:path*',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/gallery',
        destination: '/galerija',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/',
        permanent: true,
      },
      // 16.11.2026.: dvije B2B stranice spojene u jednu.
      {
        source: '/usluge/komercijalno-ciscenje',
        destination: '/usluge/poslovni-objekti',
        permanent: true,
      },
      {
        source: '/hvala',
        destination: '/',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/#kontakt', // Assuming there's an anchor or similar, or just root
        permanent: true,
      },
      {
        source: '/kontakt',
        destination: '/#kontakt',
        permanent: true,
      },
      {
        source: '/category/uncategorized',
        destination: '/',
        permanent: true,
      },
      {
        source: '/df7083d1-12e6-4b85-b87a-39afe998ac28-jpg',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
