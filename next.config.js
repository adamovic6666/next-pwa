/** @type {import('next').NextConfig} */

const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  // register: true,
  // skipWaiting: true,
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/~offline",
    // This is for images.
    image: "/fallback.png",
  },
});

const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    domains: ["i.dummyjson.com"],
  },
});

module.exports = nextConfig;
