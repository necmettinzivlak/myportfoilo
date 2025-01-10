import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: false,
  },
  output: 'standalone',
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
