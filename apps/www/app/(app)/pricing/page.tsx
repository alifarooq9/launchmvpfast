import { PageContainer } from '@/app/(app)/_components/page-header'
import { PricingHero } from '@/app/(app)/pricing/_components/pricing-hero'
import PricingTable from '@/app/(app)/pricing/_components/pricing-table'
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Pricing | ${siteConfig.name} Starter Kits & Services`,
    description:
        "Explore clear pricing options for Launch MVP Fast's open-source resources, premium components, and custom MVP development services.",
}

export default function Pricing() {
    return (
        <PageContainer>
            <PricingHero />

            <PricingTable />
        </PageContainer>
    )
}
