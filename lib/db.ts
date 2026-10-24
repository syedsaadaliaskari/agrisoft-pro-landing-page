import { neon } from "@neondatabase/serverless";
import { sql } from "drizzle-orm";
import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import type { SiteEventName } from "@/lib/config";
import * as schema from "@/lib/schema";

let database: NeonHttpDatabase<typeof schema> | null = null;
let tableReady: Promise<void> | null = null;

function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url || url.includes("USER:PASSWORD")) return null;
  if (!database) {
    database = drizzle(neon(url), { schema });
  }
  return database;
}

async function ensureTable(db: NeonHttpDatabase<typeof schema>) {
  if (!tableReady) {
    tableReady = db
      .execute(sql`
        create table if not exists site_events (
          id bigint generated always as identity primary key,
          event_name text not null check (
            event_name in ('page_view', 'whatsapp_click', 'download_click')
          ),
          created_at timestamptz not null default now()
        )
      `)
      .then(() => undefined)
      .catch((error: unknown) => {
        tableReady = null;
        throw error;
      });
  }
  await tableReady;
}

export async function storeSiteEvent(eventName: SiteEventName): Promise<boolean> {
  const db = getDb();
  if (!db) return false;
  await ensureTable(db);
  await db.insert(schema.siteEvents).values({ eventName });
  return true;
}
