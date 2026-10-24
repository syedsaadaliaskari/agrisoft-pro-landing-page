import { bigint, pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const siteEvents = pgTable("site_events", {
  id: bigint("id", { mode: "number" }).primaryKey().generatedAlwaysAsIdentity(),
  eventName: text("event_name").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});
