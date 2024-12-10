import type { NextConfig } from "next";

const config: NextConfig = {
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        // Lägg till regler för Turbopack här om det behövs
      },
    },
  },
};

export default config;
