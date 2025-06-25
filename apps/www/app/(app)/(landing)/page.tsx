import { Features } from '@/app/(app)/(landing)/_components/features'
import { Hero } from '@/app/(app)/(landing)/_components/hero'
import { Demos } from '@/app/(app)/(landing)/_components/demos'
import { Testimonials } from '@/app/(app)/(landing)/_components/testimonials'
import { GridGap } from '@/app/(app)/_components/grid-gap'
import { Showcase } from '@/app/(app)/(landing)/_components/showcase'
import { Metadata } from 'next'
import { siteConfig } from '@/config/site'
import { HeroParticles } from '@/app/(app)/(landing)/_components/hero-particles'

export const metadata: Metadata = {
    title: `${siteConfig.name} | Open Source Starter Kits & UI Components`,
    description:
        'Build and launch your SaaS MVP faster with our open-source starter kits, reusable components, and expert developer services. Get started today!',
}

export default function MarketingPage() {
    return (
        <div className="relative flex flex-1 flex-col gap-16">
            <section className="flex w-full flex-col gap-16">
                <Hero />

                <Demos />
            </section>

            <Features />

            <HeroParticles />
        </div>
    )
}
