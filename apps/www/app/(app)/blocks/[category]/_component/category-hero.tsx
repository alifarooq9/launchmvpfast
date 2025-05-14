import {
    PageDescription,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
} from '@/app/(app)/_components/page-header'

type BlocksCategoryHeroProps = {
    name: string
    count: number
}

export function BlocksCategoryHero({ name, count }: BlocksCategoryHeroProps) {
    return (
        <PageHeaderWrapper>
            <PageHeader>
                <PageHeading>{name}</PageHeading>
                <PageDescription className="max-w-[80rem]">
                    Discover our library of {count} premium {name} Blocks —
                    responsive sections and pages crafted with Shadcn UI and
                    Tailwind CSS for seamless integration into your projects.
                </PageDescription>
            </PageHeader>
        </PageHeaderWrapper>
    )
}
