import { z } from 'zod'

import { createTRPCRouter, publicProcedure } from '@/server/api/trpc'
import { resend } from '@/server/resend'
import { siteConfig } from '@/config/site'

export const proposalRouter = createTRPCRouter({
    create: publicProcedure
        .input(
            z.object({
                name: z.string(),
                email: z.string(),
                serviceInterest: z.string(),
                projectIdea: z.string(),
                projectDescription: z.string(),
            })
        )
        .mutation(async ({ input }) => {
            try {
                await resend.emails.send({
                    from: siteConfig.emails.noReply,
                    to: 'alidotm.me@gmail.com',
                    subject: `Proposal | ${siteConfig.name}`,
                    text: `Proposal from ${input.name} (${input.email})\n\nService Interest: ${input.serviceInterest}\n\nProject Idea: ${input.projectIdea}\n\nProject Description: ${input.projectDescription}`,
                })
            } catch (error) {
                console.error(error)
                throw new Error('Failed to create early access entry')
            }
        }),
})
