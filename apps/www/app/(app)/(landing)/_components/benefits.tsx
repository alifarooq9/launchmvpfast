'use client'

import {
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Terminal } from '@/components/ui/terminal'
import { cn } from '@/lib/utils'
import { JSX } from 'react'
import * as m from 'motion/react-m'
import { MockBrowser } from '@/components/ui/mock-browser'
import type { Transition, Variants } from 'motion/react'
import {
    ClipboardPasteIcon,
    CodeIcon,
    CopyIcon,
    GitBranchIcon,
} from 'lucide-react'
import { Icons } from '@/components/icons'

const variants: Variants = {
    hidden: {
        opacity: 0,
        filter: 'blur(10px)',
    },
    visible: (delay?: number) => ({
        opacity: 1,
        filter: 'blur(0px)',
        transition: {
            duration: 0.8,
            ease: 'easeInOut',
            delay: delay ?? 0,
        },
    }),
}

const floatingAnimation = {
    animate: {
        y: [0, -7, 0],
        rotate: [0, 0.5, -0.5, 0],
    },
    transition: (randomNum: number) =>
        ({
            repeat: Infinity,
            duration: 4 + randomNum * 4, // Random duration between 4-8 seconds
            ease: 'easeInOut',
            times: [0, 0.5, 1],
            delay: randomNum * 2, // Random delay up to 2 seconds
        }) satisfies Transition,
}

const MotionTerminal = m.create(Terminal)
const MotionMockBrowser = m.create(MockBrowser)

export function Benefits() {
    return (
        <SectionHeader>
            <SectionHeading>Why use us?</SectionHeading>
            <SectionDescription>
                Ready to copy and paste components, blocks, templates, and
                starterkits.
            </SectionDescription>

            <SectionContent className="border-border bg-background divide-border divide grid grid-cols-1 gap-0 overflow-hidden rounded-xl border md:grid-cols-2">
                <BenefitCard
                    description={
                        <span>
                            <span className="text-foreground">
                                Easy to install in your codebase
                            </span>{' '}
                            <span className="text-foreground/60">
                                – Copy and paste, or install it with{' '}
                                <span className="text-foreground">
                                    Shadcn CLI
                                </span>
                                .
                            </span>
                        </span>
                    }
                    className="border-b md:border-r"
                >
                    <div className="flex flex-col gap-4">
                        <MotionTerminal
                            className="max-w-[90%]"
                            animate={floatingAnimation.animate}
                            transition={floatingAnimation.transition(
                                Math.random()
                            )}
                        >
                            &gt;{' '}
                            <span className="text-muted-foreground">
                                git clone
                            </span>{' '}
                            https://github.com/alifarooq9/launchmvpfast
                        </MotionTerminal>
                        <MotionTerminal
                            className="ml-auto max-w-[90%]"
                            animate={floatingAnimation.animate}
                            transition={floatingAnimation.transition(
                                Math.random()
                            )}
                        >
                            &gt;{' '}
                            <span className="text-muted-foreground">
                                npx shadcn@latest add
                            </span>{' '}
                            https://launchmvpfast.com/r/prompt-input-01.json
                        </MotionTerminal>
                    </div>
                </BenefitCard>
                <BenefitCard
                    description={
                        <span>
                            <span className="text-foreground">Open Source</span>{' '}
                            <span className="text-foreground/60">
                                – Free to use and modify under{' '}
                                <span className="text-foreground">
                                    MIT License
                                </span>
                                .
                            </span>
                        </span>
                    }
                    className="border-b"
                >
                    <MotionMockBrowser
                        url="git.new/launchmvpfast"
                        animate={floatingAnimation.animate}
                        transition={floatingAnimation.transition(Math.random())}
                    >
                        <div className="flex flex-col gap-2">
                            <div className="flex w-full items-center justify-between gap-2">
                                <div className="bg-muted h-4 w-full max-w-[20%] rounded-md" />
                                <div className="bg-muted h-4 w-full rounded-md" />
                            </div>
                            <div className="flex w-full items-center justify-between gap-2">
                                <div className="bg-muted h-4 w-full max-w-[20%] rounded-md" />
                                <div className="bg-muted h-4 w-full rounded-md" />
                            </div>
                            <div className="flex w-full items-center justify-between gap-2">
                                <div className="bg-muted h-4 w-full max-w-[20%] rounded-md" />
                                <div className="bg-muted h-4 w-full rounded-md" />
                            </div>
                            <div className="flex w-full items-center justify-between gap-2">
                                <div className="bg-muted h-4 w-full max-w-[20%] rounded-md" />
                                <div className="bg-muted h-4 w-full rounded-md" />
                            </div>
                        </div>
                    </MotionMockBrowser>
                </BenefitCard>
                <BenefitCard
                    description={
                        <span>
                            <span className="text-foreground">
                                Fast Development
                            </span>{' '}
                            <span className="text-foreground/60">
                                – Build your MVP quickly with pre-built
                                components, blocks, starterkits, and more.
                            </span>
                        </span>
                    }
                    className="border-b md:border-r md:border-b-0"
                >
                    <FastDevelopmentCardContent />
                </BenefitCard>
                <BenefitCard
                    description={
                        <span>
                            <span className="text-foreground">
                                Ready to Use
                            </span>{' '}
                            <span className="text-foreground/60">
                                – Complete UI components and{' '}
                                <span className="text-foreground">
                                    production ready starter kits
                                </span>{' '}
                                included.
                            </span>
                        </span>
                    }
                >
                    <ReadyToUseContent />
                </BenefitCard>
            </SectionContent>
        </SectionHeader>
    )
}

function ReadyToUseContent() {
    return (
        <div className="pointer-events-none flex flex-col gap-4 select-none">
            <m.div
                animate={floatingAnimation.animate}
                transition={floatingAnimation.transition(Math.random())}
                className="border-border ml-auto flex w-fit items-center gap-2 rounded-xl border p-4"
            >
                <CopyIcon className="size-3" />
                <div className="font-mono text-sm font-medium">
                    Copy code from launchmvpfast.com
                </div>
            </m.div>
            <m.div
                animate={floatingAnimation.animate}
                transition={floatingAnimation.transition(Math.random())}
                className="border-border mr-auto flex w-fit items-center gap-2 rounded-xl border p-4"
            >
                <ClipboardPasteIcon className="size-3" />
                <div className="font-mono text-sm font-medium">
                    Paste into your project
                </div>
            </m.div>
            <m.div
                animate={floatingAnimation.animate}
                transition={floatingAnimation.transition(Math.random())}
                className="border-border ml-auto flex w-fit items-center gap-2 rounded-xl border p-4"
            >
                <GitBranchIcon className="size-3" />
                <div className="font-mono text-sm font-medium">
                    Clone & customize full starter kits
                </div>
            </m.div>
        </div>
    )
}

function FastDevelopmentCardContent() {
    return (
        <div className="pointer-events-none flex flex-col gap-4 select-none">
            <m.div
                animate={floatingAnimation.animate}
                transition={floatingAnimation.transition(Math.random())}
                className="border-border flex w-fit items-center gap-2 rounded-xl border p-4"
            >
                <div className="bg-muted flex size-5 items-center justify-center rounded-full text-xs font-semibold">
                    1
                </div>
                <GitBranchIcon className="size-3" />
                <div className="font-mono text-sm font-medium">
                    Clone starter-kit of your need
                </div>
            </m.div>
            <m.div
                animate={floatingAnimation.animate}
                transition={floatingAnimation.transition(Math.random())}
                className="border-border mx-auto flex w-fit items-center gap-2 rounded-xl border p-4"
            >
                <div className="bg-muted flex size-5 items-center justify-center rounded-full text-xs font-semibold">
                    2
                </div>
                <CodeIcon className="size-3" />
                <div className="font-mono text-sm font-medium">
                    Add your own features
                </div>
            </m.div>
            <m.div
                animate={floatingAnimation.animate}
                transition={floatingAnimation.transition(Math.random())}
                className="border-border ml-auto flex w-fit items-center gap-2 rounded-xl border p-4"
            >
                <div className="bg-muted flex size-5 items-center justify-center rounded-full text-xs font-semibold">
                    3
                </div>
                <Icons.vercel className="fill-foreground size-3" />
                <div className="font-mono text-sm font-medium">
                    Deploy your MVP
                </div>
            </m.div>
        </div>
    )
}

type BenefitCardProps = {
    description: JSX.Element | string
} & React.HtmlHTMLAttributes<HTMLDivElement>

const MotionCardTitle = m.create(CardTitle)
const MotionCardContent = m.create(CardContent)

function BenefitCard({
    description,
    className,
    children,
    ...props
}: BenefitCardProps) {
    return (
        <Card
            className={cn(
                'bg-background h-full rounded-none border-0',
                className
            )}
            {...props}
        >
            <CardHeader>
                <MotionCardTitle
                    variants={variants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    as="h3"
                    className="text-lg tracking-tight lg:text-xl"
                >
                    {description}
                </MotionCardTitle>
            </CardHeader>
            <MotionCardContent
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex-1 place-content-center"
            >
                {children}
            </MotionCardContent>
        </Card>
    )
}
