import {
    Announcement,
    PageDescription,
    PageHeader,
    PageHeading,
} from '@/app/(app)/_components/page-header'
import { urls } from '@/config/urls'

export function PricingHero() {
    return (
        <PageHeader>
            <Announcement
                url={urls.app.pricing}
                text="Get your MVP build in 2 weeks."
                actionText="Contact us"
            />
            <PageHeading>Simple Pricing for your MVP</PageHeading>
            <PageDescription className="max-w-[50rem]">
                Find the{' '}
                <span className="text-foreground font-bold">perfect plan</span>{' '}
                for your needs. Our{' '}
                <span className="text-foreground font-bold">
                    open-source starter kits
                </span>{' '}
                are free forever. Explore our{' '}
                <span className="text-foreground font-bold">
                    MVP development services
                </span>{' '}
                to bring your vision to life even{' '}
                <span className="text-foreground font-bold">faster</span>
            </PageDescription>
        </PageHeader>
    )
}
