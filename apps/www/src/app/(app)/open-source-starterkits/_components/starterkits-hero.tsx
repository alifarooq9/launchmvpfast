import {
    Announcement,
    PageDescription,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
} from '@/app/(app)/_components/page-header'
import { urls } from '@/config/urls'

export function StarterkitsHero() {
    return (
        <PageHeaderWrapper>
            <PageHeader>
                <Announcement
                    actionText="Get Early Access"
                    url={urls.app.starterkits.base}
                    text="SaaS V2 Starterkit is coming soon!"
                />
                <PageHeading>
                    Open Source Starter Kits for Modern Web Apps
                </PageHeading>
                <PageDescription className="max-w-[80rem]">
                    Get a head start with our free, open-source starter kits.
                    Packed with essential features like authentication, database
                    integration, styling and more, so you can focus on building
                    your unique application faster.
                </PageDescription>
            </PageHeader>
        </PageHeaderWrapper>
    )
}
