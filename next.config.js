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
};

module.exports = nextConfig;
