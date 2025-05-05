import { type Config } from 'drizzle-kit'

import { siteConfig } from '@/config/site'
import { env } from '@/env'

export default {
    schema: './src/server/db/schema.ts',
    driver: 'pg',
    dbCredentials: {
        connectionString: env.DB_CONNECTION_STRING,
        host: env.DB_HOST,
        user: env.DB_USER,
        password: env.DB_PASSWORD,
        ssl: env.DB_SSL.toLowerCase() === 'true' ? true : false,
        port: Number(env.DB_PORT),
        database: env.DB_DATABASE,
    },
    out: './drizzle',
    tablesFilter: [`${siteConfig.dbPrefix}*`],
} satisfies Config
