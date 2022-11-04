/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['zh', 'ja'],
    defaultLocale: 'zh',
    localeDetection: false,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
