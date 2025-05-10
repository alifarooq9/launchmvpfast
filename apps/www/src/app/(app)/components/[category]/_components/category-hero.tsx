import {
    PageDescription,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
} from '@/app/(app)/_components/page-header'

type CategoryHeroProps = {
    name: string
    count: number
}

export function CategoryHero({ name, count }: CategoryHeroProps) {
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
