import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "~/utils/env";

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

const db = drizzle(pool);

export default db;