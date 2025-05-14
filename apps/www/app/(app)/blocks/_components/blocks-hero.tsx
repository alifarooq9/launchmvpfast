import {
    PageDescription,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
} from '@/app/(app)/_components/page-header'

export function BlocksHero() {
    return (
        <PageHeaderWrapper>
            <PageHeader>
                <PageHeading>Re-usable Page Blocks & Sections</PageHeading>
                <PageDescription className="max-w-[75rem]">
                    Quickly assemble beautiful pages with our collection of
                    pre-built, responsive blocks and sections built with Shadcn
                    UI and Tailwind CSS.
                </PageDescription>
            </PageHeader>
        </PageHeaderWrapper>
    )
}
