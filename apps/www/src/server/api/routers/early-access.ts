import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { earlyAccess } from '@/server/db/schema'
import { resend } from '@/server/resend'
import { siteConfig } from '@/config/site'

export const earlyAccessRouter = createTRPCRouter({
    create: publicProcedure
        .input(
            z.object({
                name: z.string(),
                email: z.string(),
            })
        )
        .mutation(async ({ ctx, input }) => {
            try {
                await ctx.db
                    .insert(earlyAccess)
                    .values(input)
                    .onConflictDoNothing({ target: earlyAccess.email })
                    .execute()

                await resend.emails.send({
                    from: siteConfig.emails.noReply,
                    to: input.email,
                    subject: `Early Access Request | ${siteConfig.name}`,
                    text: `Hello ${input.name},\n\nThank you for your interest in ${siteConfig.name}. We have received your request for early access and will notify you once we have updates.\n\nBest regards,\nThe ${siteConfig.name} Team`,
                })
            } catch (error) {
                console.error(error)
                throw new Error('Failed to create early access entry')
            }
        }),
})
