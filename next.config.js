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
    locales: ['en-US', 'pt-br'],
    defaultLocale: 'pt-br',
  },
};

module.exports = nextConfig;
