import { Features } from '@/app/(marketing)/(landing)/components/features'
import { Hero } from '@/app/(marketing)/(landing)/components/hero'
import { Demos } from '@/app/(marketing)/(landing)/components/demos'
import { Testimonials } from '@/app/(marketing)/(landing)/components/testimonials'
import { GridGap } from '@/app/(marketing)/components/grid-gap'

export default function MarketingPage() {
    return (
        <>
            <Hero />

            <Demos />

            <GridGap height={20} />

            <Testimonials />

            <GridGap height={20} />

            <Features />
        </>
    )
}
