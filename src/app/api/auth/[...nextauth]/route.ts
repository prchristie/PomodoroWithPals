import NextAuth, { AuthOptions } from "next-auth";
import DiscordProvider from "next-auth/providers/discord";
import { env } from "~/utils/env";
import db from "~/db/db";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

// Apparently fixes the TS issue with the DrizzleAdapter being fucked??
// https://github.com/nextauthjs/next-auth/issues/9493
import type { Adapter } from "next-auth/adapters";

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db) as Adapter,
  providers: [
    DiscordProvider({
      clientId: env.DISCORD_CLIENT_ID!,
      clientSecret: env.DISCORD_CLIENT_SECRET!,
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
