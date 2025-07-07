'use client'

import {
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import { Icons } from '@/components/icons'
import { BorderTrail } from '@/components/ui/border-trail'
import { buttonVariants } from '@/components/ui/button'
import { urls } from '@/config/urls'
import type { Variants } from 'motion/react'
import * as m from 'motion/react-m'
import Link from 'next/link'

const MotionSectionHeading = m.create(SectionHeading)
const MotionSectionDescription = m.create(SectionDescription)

const variants: Variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(10px)',
    },
    visible: (delay?: number) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
            delay: delay ?? 0,
        },
    }),
}

export function CallToAction() {
    return (
        <SectionHeader>
            <SectionContent className="border-border bg-background relative w-fit rounded-xl border px-4 py-16">
                <MotionSectionHeading
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}
                    className="max-w-2xl"
                >
                    Have an Idea?{' '}
                    <span className="text-foreground/70">
                        tell us we can build your
                    </span>{' '}
                    MVP 10x Faster.
                </MotionSectionHeading>
                <MotionSectionDescription
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.2}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    Skip the hassle of building your MVP from scratch yourself.
                    Let us take care of your MVP development so you can focus on
                    growing it.
                </MotionSectionDescription>
                <m.div
                    className="mt-6 flex flex-col justify-center gap-4 sm:flex-row"
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    custom={0.4}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <Link
                        href="https://cal.com/launchmvpfast/30min"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants()}
                    >
                        Book a Free Consultation
                    </Link>
                    <Link
                        href={urls.socials.gh}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: 'outline' })}
                    >
                        <Icons.gitHub />
                        Give us a Star
                    </Link>
                </m.div>

                <BorderTrail
                    style={{
                        boxShadow:
                            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    transition={{
                        repeat: Infinity,
                        duration: 8,
                        ease: 'linear',
                    }}
                />
            </SectionContent>
        </SectionHeader>
    )
}
