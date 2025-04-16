import { Features } from '@/app/(marketing)/(landing)/components/features'
import { Hero } from '@/app/(marketing)/(landing)/components/hero'
import { Showcase } from '@/app/(marketing)/(landing)/components/showcase'
import { Testimonials } from '@/app/(marketing)/(landing)/components/testimonials'
import { GridGap } from '@/app/(marketing)/components/grid-gap'

export default function MarketingPage() {
    return (
        <>
            <Hero />

            <Showcase />

            <GridGap height={20} />

            <Testimonials />

            <GridGap height={20} />

            <Features />
        </>
    )
}
