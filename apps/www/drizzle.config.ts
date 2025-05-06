import { type Config } from 'drizzle-kit'

import { siteConfig } from '@/config/site'
import { env } from '@/env'

export default {
    schema: './src/server/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: env.DATABASE_URL,
    },
    out: './drizzle',
    tablesFilter: [`${siteConfig.dbPrefix}*`],
} satisfies Config
