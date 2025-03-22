/** @type {import('next').NextConfig} */
const nextConfig = {
  // We're not doing server-side rendering for this landing page
  reactStrictMode: true,
  
  // Environment variables that should be available on the client
  env: {
    SITE_URL: process.env.SITE_URL || 'https://modelmanagement.com',
  },
  output: 'export',  // Enable static exports
  distDir: 'out',    // Output to the 'out' directory
  images: {
    unoptimized: true, // Required for static export
  },
  // Disable server features that aren't compatible with static export
  experimental: {
    appDir: true,
  },
};

export default nextConfig; 