import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { env } from "~/core/utils/env";
import * as schema from "~/backend/db/schemas";

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

const db = drizzle(pool, { schema });

export default db;
