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
    // domains: [
    //   {
    //     domain: '/en-us/',
    //     defaultLocale: 'en-US',
    //   },
    //   {
    //     domain: '/pt-br/',
    //     defaultLocale: 'pt-BR',
    //   }
    // ],
  },
};

module.exports = nextConfig;
