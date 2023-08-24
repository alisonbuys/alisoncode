import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { db } from "~/server/db/db";

export const exampleRouter = createTRPCRouter({
  initdb: publicProcedure.mutation(async () => {
    // db init script

    await db.schema.createSchema("myapp").execute().catch(console.error);

    // create posts table
    await db.schema
      .createTable("myapp.posts")
      .addColumn("id", "uuid", (col) => col.notNull().primaryKey())
      .addColumn("title", "varchar", (col) => col.notNull())
      .addColumn("content", "text", (col) => col.notNull())
      .execute()
      .catch(console.error);

    return { success: true };
  }),

  createpost: publicProcedure
    .input(
      z.object({
        title: z.string(),
        content: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      // create the post
      const newpost = await db
        .insertInto("myapp.posts")
        .values({
          id: crypto.randomUUID(),
          title: input.title,
          content: input.content,
        })
        .returningAll()
        .executeTakeFirstOrThrow();

      return { newpost };
    }),

  listposts: publicProcedure.query(async () => {
    const posts = await db.selectFrom("myapp.posts").selectAll().execute();
    return { posts };
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});