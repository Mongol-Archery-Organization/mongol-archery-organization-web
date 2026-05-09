import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',       // produces a fully static /out directory
  trailingSlash: true,    // required for static export on Vercel
  images: {
    unoptimized: true,    // required for static export (no Next.js image server)
  },
};

export default nextConfig;
