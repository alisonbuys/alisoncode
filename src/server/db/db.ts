import { Kysely, PostgresDialect } from "kysely";
import { Pool } from "pg";
import { type DB } from "./schema";
import { env } from "~/env.mjs";

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
});

export const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool,
  }),
});