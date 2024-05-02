import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import db, { pool } from "./db";

// This will run migrations on the database, skipping the ones already applied
migrate(db, { migrationsFolder: "./drizzle" })
  .catch((e) => console.error(e))
  .then(pool.end);
