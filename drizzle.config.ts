import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";
import { env } from "~/utils/env";

import { defineConfig } from "drizzle-kit";

dotenv.config({ path: ".env.local" });

export default defineConfig({
  schema: "./src/db/schemas/**/*.ts",
  out: "./drizzle",
  driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    connectionString: env.DATABASE_URL,
  },
  strict: true,
});
