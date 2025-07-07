import {
    Announcement,
    PageDescription,
    PageHeader,
    PageHeading,
} from '@/app/(app)/_components/page-header'
import { urls } from '@/config/urls'

export function ComponentsHero() {
    return (
        <PageHeader>
            <Announcement
                url={urls.socials.suggestions}
                text="Didn't find component?"
                actionText="Suggest"
            />
            <PageHeading>UI Components</PageHeading>
            <PageDescription className="max-w-[80rem]">
                Browse our library of{' '}
                <span className="text-foreground font-bold">
                    production-ready
                </span>
                ,{' '}
                <span className="text-foreground font-bold">
                    open-source UI components
                </span>{' '}
                built with{' '}
                <span className="text-foreground font-bold">Shadcn UI</span> and{' '}
                <span className="text-foreground font-bold">Tailwind CSS</span>.{' '}
                <span className="text-foreground font-bold">Copy</span>,
                <span className="text-foreground font-bold">paste</span>, and{' '}
                <span className="text-foreground font-bold">speed</span> up your{' '}
                <span className="text-foreground font-bold">development</span>.
            </PageDescription>
        </PageHeader>
    )
}
