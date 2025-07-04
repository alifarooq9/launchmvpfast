import {
    Announcement,
    PageDescription,
    PageHeader,
    PageHeading,
} from '@/app/(app)/_components/page-header'
import { urls } from '@/config/urls'

export function BlocksHero() {
    return (
        <PageHeader>
            <Announcement
                url={urls.socials.suggestions}
                text="Didn't find block?"
                actionText="Suggest"
            />
            <PageHeading>Re-usable Blocks</PageHeading>
            <PageDescription className="max-w-[80rem]">
                <span className="text-foreground font-bold">Quickly</span>{' '}
                assemble{' '}
                <span className="text-foreground font-bold">
                    beautiful pages
                </span>{' '}
                with our collection of
                <span className="text-foreground font-bold">
                    {' '}
                    pre-built, responsive blocks
                </span>{' '}
                built with
                <span className="text-foreground font-bold">
                    {' '}
                    Shadcn UI
                </span>{' '}
                and
                <span className="text-foreground font-bold"> Tailwind CSS</span>
                .
            </PageDescription>
        </PageHeader>
    )
}
