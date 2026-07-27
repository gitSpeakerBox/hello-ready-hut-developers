/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.ctfassets.net", "cdn.sanity.io"],
    formats: ["image/avif", "image/webp"],
  },
  
};

module.exports = nextConfig;
