/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.fallback = {
      "mongodb-client-encryption": false ,
      "aws4": false
    };
    return config;
},
}
const { withNextVideo } = require('next-video/process');

module.exports = withNextVideo(nextConfig);
