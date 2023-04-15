/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "images.pexels.com"],
  },
};

module.exports = nextConfig;
