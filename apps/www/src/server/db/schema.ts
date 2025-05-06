// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { siteConfig } from '@/config/site'
import { env } from '@/env'
import { sql } from 'drizzle-orm'
import { pgTableCreator, timestamp, varchar } from 'drizzle-orm/pg-core'
import { createInsertSchema } from 'drizzle-zod'
import { z } from 'zod'

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator(
    (name) => `${siteConfig.dbPrefix}${name}`
)

export const earlyAccess = createTable('early_access', {
    id: varchar('id', { length: 255 })
        .notNull()
        .primaryKey()
        .default(sql`gen_random_uuid()`),
    name: varchar('name', { length: 255 }),
    email: varchar('email', { length: 255 }).notNull().unique(),
    createdAt: timestamp('createdAt', { mode: 'date' }).notNull().defaultNow(),
})

export const earlyAccessInsertSchema = createInsertSchema(earlyAccess, {
    email: z.string().email({ message: 'Invalid email address' }),
    name: z
        .string()
        .min(1, {
            message: 'Name is required',
        })
        .max(255, {
            message: 'Name must be at most 255 characters',
        }),
})
