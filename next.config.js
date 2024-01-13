/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    dirs: ['pages', 'src'],
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
