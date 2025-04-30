import { GridGap } from '@/app/(app)/_components/grid-gap'
import { PricingHero } from '@/app/(app)/pricing/_components/pricing-hero'
import PricingTable from '@/app/(app)/pricing/_components/pricing-table'

export default function Pricing() {
    return (
        <>
            <PricingHero />

            <GridGap className="h-10" />

            <PricingTable />
        </>
    )
}
