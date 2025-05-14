import {
    PageDescription,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
} from '@/app/(app)/_components/page-header'

export function ComponentsHero() {
    return (
        <PageHeaderWrapper>
            <PageHeader>
                <PageHeading>Re-usable Components</PageHeading>
                <PageDescription className="max-w-[80rem]">
                    Browse our library of production-ready, open-source UI
                    components built with Shadcn UI and Tailwind CSS. Copy,
                    paste, and speed up your development.
                </PageDescription>
            </PageHeader>
        </PageHeaderWrapper>
    )
}
