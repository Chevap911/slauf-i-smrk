import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: false,
  },
  excludeDefaultMomentLocales: true,
  async redirects() {
    return [
      {
        source: '/gallery',
        destination: '/',
        permanent: true,
      },
      {
        source: '/shop',
        destination: '/',
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

