/** @type {import('next').NextConfig} */
import { fileURLToPath } from "node:url";
import createJiti from "jiti";

const nextConfig = {};

const jiti = createJiti(fileURLToPath(import.meta.url));
jiti("./src/app/utils/env.ts");

export default nextConfig;
