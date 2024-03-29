/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  images: {
    domains: ['picsum.photos', 'res.cloudinary.com']
  }
}

module.exports = nextConfig