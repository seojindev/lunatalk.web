/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['ko'],
    defaultLocale: 'ko',
  },
  reactStrictMode: true,
  images: {
    domains: ['admin.lunatalk.co.kr', 'media.lunatalk.co.kr'],
  },
};

// eslint-disable-next-line no-undef
module.exports = nextConfig;
