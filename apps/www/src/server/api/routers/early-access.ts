import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { earlyAccess } from '@/server/db/schema'

export const earlyAccessRouter = createTRPCRouter({
    create: publicProcedure
        .input(
            z.object({
                name: z.string(),
                email: z.string(),
            })
        )
        .mutation(({ ctx, input }) => {
            return ctx.db
                .insert(earlyAccess)
                .values(input)
                .onConflictDoNothing({ target: earlyAccess.email })
                .execute()
        }),
})
