import {
    PageDescription,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
} from '@/app/(app)/_components/page-header'

export function PricingHero() {
    return (
        <PageHeaderWrapper>
            <PageHeader>
                <PageHeading>
                    Simple Pricing for Starter Kits & Services
                </PageHeading>
                <PageDescription className="max-w-[50rem]">
                    Find the perfect plan for your needs. Our open-source
                    starter kits are free forever. Explore our MVP development
                    services to bring your vision to life even faster
                </PageDescription>
            </PageHeader>
        </PageHeaderWrapper>
    )
}
