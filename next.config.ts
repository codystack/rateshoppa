import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow all HTTPS domains (for merchant logos, flags, etc.)
      },
    ],
  },
  // add any other Next.js config options here
};

export default nextConfig;
