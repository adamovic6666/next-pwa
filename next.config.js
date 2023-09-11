/** @type {import('next').NextConfig} */

// const withPWA = require("next-pwa")({
//   dest: "public",
//   register: true,
//   skipWaiting: true,
//   // register: true,
//   // scope: '/app',
//   // sw: 'service-worker.js',
//   //...
// });

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.dummyjson.com"],
  },
};

module.exports = nextConfig;
