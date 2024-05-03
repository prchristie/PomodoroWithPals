import "dotenv/config";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import db, { pool } from "./db";

// This will run migrations on the database, skipping the ones already applied

const doMigrate = async () => {
  await migrate(db, { migrationsFolder: "./drizzle" });
  await pool.end();
};

doMigrate().then(() => console.log("Completed"));
