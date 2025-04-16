import { Features } from '@/app/(marketing)/(landing)/components/features'
import { Hero } from '@/app/(marketing)/(landing)/components/hero'
import { Showcase } from '@/app/(marketing)/(landing)/components/showcase'

export default function MarketingPage() {
    return (
        <>
            <Hero />

            <Showcase />

            <Features />
        </>
    )
}
