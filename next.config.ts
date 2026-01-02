import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  // Use webpack for better module resolution control
  webpack: (config) => {
    // Fix module resolution for tailwindcss - ensure it resolves from project root
    if (config.resolve) {
      const projectRoot = path.resolve(__dirname);
      config.resolve.modules = [
        path.resolve(projectRoot, 'node_modules'),
        ...(config.resolve.modules || []),
      ];
    }
    return config;
  },
};

export default nextConfig;
