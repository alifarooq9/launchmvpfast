import { type Config } from "drizzle-kit";

import { env } from "@/env.js";

export default {
    schema: "./src/server/db/schema.ts",
    driver: "pg",
    dbCredentials: {
        connectionString: env.DATABASE_URL,
    },
    tablesFilter: ["launchmvpfast-saas-starterkit_*"],
} satisfies Config;
