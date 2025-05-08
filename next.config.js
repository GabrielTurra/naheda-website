/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["page.tsx", "api.ts", "api.tsx"],
  images: {
    domains: [],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    locales: ['pt-BR', 'en-US', 'fr', 'nl-NL'],
    defaultLocale: 'pt-BR',
  },
};

module.exports = nextConfig;
