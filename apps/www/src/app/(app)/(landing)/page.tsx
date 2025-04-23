import { Features } from '@/app/(app)/(landing)/_components/features'
import { Hero } from '@/app/(app)/(landing)/_components/hero'
import { Demos } from '@/app/(app)/(landing)/_components/demos'
import { Testimonials } from '@/app/(app)/(landing)/_components/testimonials'
import { GridGap } from '@/app/(app)/_components/grid-gap'
import { Showcase } from '@/app/(app)/(landing)/_components/showcase'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
    title: `${siteConfig.noSpacesName}: Open Source Starter Kits & UI Components`,
    description:
        'Build faster with free, open-source starter kits, UI components & blocks from LaunchMVPFast. Accelerate your MVP launch today.',
}

export default function MarketingPage() {
    return (
        <>
            <Hero />

            <Demos />

            <GridGap className="h-20" />

            <Showcase />

            <GridGap className="h-20" />

            <Testimonials />

            <GridGap className="h-20" />

            <Features />
        </>
    )
}
