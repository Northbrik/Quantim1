/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@keystatic/core'],
  },
};

export default nextConfig;
