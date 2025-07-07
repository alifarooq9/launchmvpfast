import {
    Announcement,
    PageDescription,
    PageHeader,
    PageHeading,
} from '@/app/(app)/_components/page-header'
import { urls } from '@/config/urls'

export function StarterkitsHero() {
    return (
        <PageHeader>
            <Announcement
                actionText="Get Early Access"
                url={urls.app.earlyAccess}
                text="SaaS V2 soon!"
            />
            <PageHeading className="leading-[1.12]">
                Open Source Starter Kits for Modern Web Apps
            </PageHeading>
            <PageDescription className="max-w-[80rem]">
                Packed with{' '}
                <span className="text-foreground font-bold">
                    essential features
                </span>{' '}
                like{' '}
                <span className="text-foreground font-bold">
                    authentication
                </span>
                ,{' '}
                <span className="text-foreground font-bold">
                    database integration
                </span>
                , <span className="text-foreground font-bold">styling</span> and
                more, so you can{' '}
                <span className="text-foreground font-bold">focus</span> on{' '}
                <span className="text-foreground font-bold">building</span> your{' '}
                <span className="text-foreground font-bold">
                    unique application
                </span>{' '}
                faster.
            </PageDescription>
        </PageHeader>
    )
}
