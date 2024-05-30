/** @type {import('next').NextConfig} */
import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
    ],
  },
};

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/core/utils/env.ts");

export default nextConfig;
