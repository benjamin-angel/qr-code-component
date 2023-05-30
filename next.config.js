/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  assetPrefix: isProd ? '/qr-code-component/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
