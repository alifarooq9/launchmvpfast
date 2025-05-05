import { type Config } from 'drizzle-kit'

import { env } from '@/env'
import { siteConfig } from '@/config/site'

export default {
    schema: './src/server/db/schema.ts',
    driver: 'pg',
    dbCredentials: {
        connectionString:
            'postgresql://alidotm:8ojXSiwbTs4N@ep-orange-snowflake-a5pnjhys-pooler.us-east-2.aws.neon.tech/rapidlaunch?sslmode=require',
        database: 'rapidlaunch',
        host: 'ep-orange-snowflake-a5pnjhys-pooler.us-east-2.aws.neon.tech',
        user: 'alidotm',
        password: '8ojXSiwbTs4N',
        ssl: true,
        port: 5432,
    },
    out: './drizzle',
    tablesFilter: [`${siteConfig.dbPrefix}*`],
} satisfies Config
