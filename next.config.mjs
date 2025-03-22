/** @type {import('next').NextConfig} */
const nextConfig = {
  // We're not doing server-side rendering for this landing page
  reactStrictMode: true,
  
  // Environment variables that should be available on the client
  env: {
    SITE_URL: process.env.SITE_URL || 'https://modelmanagement.com',
  },
};

export default nextConfig; 