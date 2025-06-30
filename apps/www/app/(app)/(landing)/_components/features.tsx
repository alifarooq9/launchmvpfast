'use client'

import {
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import { buttonVariants } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { urls } from '@/config/urls'
import { cn } from '@/lib/utils'
import { SquareArrowOutUpRightIcon } from 'lucide-react'
import * as m from 'motion/react-m'
import Image from 'next/image'
import Link from 'next/link'

interface FeatureCardProps {
    title: string
    description: string
    features: string[]
    linkHref: string
    linkText: string
    heroText: string
}

const MotionCard = m.create(Card)

function FeatureCard({
    title,
    description,
    features,
    linkHref,
    linkText,
    heroText,
}: FeatureCardProps) {
    return (
        <MotionCard
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="grid w-full grid-cols-1 overflow-hidden py-0 md:grid-cols-2 lg:grid-cols-3"
        >
            <div className="relative flex h-full min-h-36 w-full items-center justify-center p-4">
                <div className="absolute inset-0 z-0">
                    <div className="relative h-full w-full">
                        <Image
                            src="/mesh-background.svg"
                            fill
                            alt="Mesh Background"
                            className="object-cover"
                        />
                    </div>
                </div>
                <div className="z-20 text-center text-2xl leading-snug font-bold text-balance text-white md:text-4xl">
                    {heroText}
                </div>
            </div>
            <div className="py-6 lg:col-span-2">
                <CardHeader>
                    <CardTitle as="h3">{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="my-6">
                    <ul className="list-disc space-y-2 pl-6">
                        {features.map((feature, index) => (
                            <li key={index} className="text-sm font-medium">
                                {feature}
                            </li>
                        ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <Link
                        href={linkHref}
                        className={cn(
                            buttonVariants({
                                variant: 'outline',
                                size: 'sm',
                            })
                        )}
                    >
                        {linkText}
                        <SquareArrowOutUpRightIcon />
                    </Link>
                </CardFooter>
            </div>
        </MotionCard>
    )
}

export function Features() {
    const startkitsFeatures = [
        'Next.js 15 + TypeScript with Tailwind v4 integration.',
        'ShadCN UI components with dark/light mode support.',
        'Authentication, database and payments and more pre-configured out of the box.',
    ]

    const componentsFeatures = [
        'Built with ShadCN UI components and Tailwind CSS blocks for pixel-perfect design.',
        'TypeScript-ready: Fully typed with JSDoc comments and Storybook stories.',
        'Reusable components: Easily integrate into your Next.js projects with minimal setup.',
    ]

    const blocksFeatures = [
        'Pre-built sections: Hero headers, feature grids, pricing tables, and testimonials—drop into any page.',
        'Responsive: Customize via CSS variables for branding.',
        'Shadcn & Tailwind blocks: Use in any shadcn or Tailwind project.',
    ]

    const featureCards = [
        {
            title: 'Open-Source Starter Kits',
            description:
                'A collection of open-source starter kits designed to help you kickstart your SaaS MVP development. Each kit is built with the latest technologies and best practices in mind.',
            features: startkitsFeatures,
            linkHref: urls.app.starterkits.base,
            linkText: 'View All Starter Kits',
            heroText: 'Open Source Starter Kits',
        },
        {
            title: 'Re-usable Components',
            description:
                'A collection of re-usable components designed to help you build your SaaS MVP faster. Each component is built with the latest technologies and best practices in mind.',
            features: componentsFeatures,
            linkHref: urls.app.components,
            linkText: 'View All Components',
            heroText: 'Re-usable Components',
        },
        {
            title: 'UI Blocks',
            description:
                'A collection of pre-built UI blocks designed to help you build your SaaS MVP faster. Each block is built with the latest technologies and best practices in mind.',
            features: blocksFeatures,
            linkHref: urls.app.blocks,
            linkText: 'View All UI Blocks',
            heroText: 'UI Blocks',
        },
    ]

    return (
        <SectionHeader>
            <SectionHeading>What we offer.</SectionHeading>
            <SectionDescription>
                What we offer in our open-source library.
            </SectionDescription>

            <SectionContent className="gap-14">
                {featureCards.map((card, index) => (
                    <FeatureCard key={index} {...card} />
                ))}
            </SectionContent>
        </SectionHeader>
    )
}
