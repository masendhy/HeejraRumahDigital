import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    tailwindcss: {
      darkMode: 'class',
    },
  },
};

export default nextConfig;
