import { Features } from '@/app/(app)/(landing)/_components/features'
import { Hero } from '@/app/(app)/(landing)/_components/hero'
import { Demos } from '@/app/(app)/(landing)/_components/demos'
import { GridGap } from '@/app/(app)/_components/grid-gap'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { Suspense } from 'react'
import dynamic from 'next/dynamic'

// Lazy load heavy components
const Showcase = dynamic(() => import('@/app/(app)/(landing)/_components/showcase').then(mod => ({ default: mod.Showcase })), {
    loading: () => <div className="h-96 animate-pulse bg-muted rounded-lg" />,
})

const Testimonials = dynamic(() => import('@/app/(app)/(landing)/_components/testimonials').then(mod => ({ default: mod.Testimonials })), {
    loading: () => <div className="h-64 animate-pulse bg-muted rounded-lg" />,
})

export const metadata: Metadata = {
    title: `${siteConfig.name} | Democratizing Drone Access Through Cooperation`,
    description:
        'Join our drone cooperative for shared investment in cutting-edge aerial technology. Access professional drone services, earn returns, and support sustainable agriculture and infrastructure monitoring.',
}

export default function MarketingPage() {
    return (
        <>
            <Hero />

            <Demos />

            <GridGap className="h-20" />

            <Suspense fallback={<div className="h-96 animate-pulse bg-muted rounded-lg" />}>
                <Showcase />
            </Suspense>

            <GridGap className="h-20" />

            <Suspense fallback={<div className="h-64 animate-pulse bg-muted rounded-lg" />}>
                <Testimonials />
            </Suspense>

            <GridGap className="h-20" />

            <Features />
        </>
    )
}
