/** @type {import('next').NextConfig} */
const nextConfig = {
  // We're not doing server-side rendering for this landing page
  reactStrictMode: true,
  
  // Environment variables that should be available on the client
  env: {
    SITE_URL: process.env.SITE_URL || 'https://modelmanagement.com',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Disable type checking during build
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable ESLint during build
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig; 