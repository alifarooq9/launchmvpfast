import {
    PageDescription,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
} from '@/app/(app)/_components/page-header'

type ComponentsCategoryHeroProps = {
    name: string
    count: number
}

export function ComponentsCategoryHero({
    name,
    count,
}: ComponentsCategoryHeroProps) {
    return (
        <PageHeaderWrapper>
            <PageHeader>
                <PageHeading>{name}</PageHeading>
                <PageDescription className="max-w-[80rem]">
                    A growing collection of {count} {name} components built with
                    Shadcn UI and Tailwind CSS.
                </PageDescription>
            </PageHeader>
        </PageHeaderWrapper>
    )
}
