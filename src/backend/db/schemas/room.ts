import { pgTable, text } from "drizzle-orm/pg-core";
import { generateId } from "../utils";
import { users } from "./auth";

export const rooms = pgTable("room", {
  id: text("id").primaryKey().$defaultFn(generateId),
  owner: text("owner")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
});
