import {
    PageDescription,
    PageHeader,
    PageHeading,
} from '@/app/(app)/_components/page-header'

type BlocksCategoryHeroProps = {
    name: string
    count: number
}

export function BlocksCategoryHero({ name, count }: BlocksCategoryHeroProps) {
    return (
        <PageHeader>
            <PageHeading>
                {name} <span className="text-foreground/70">Blocks</span>
            </PageHeading>
            <PageDescription className="max-w-[80rem]">
                Discover our library of{' '}
                <span className="text-foreground font-bold">
                    {count} {name} Blocks
                </span>{' '}
                — responsive sections and pages crafted with{' '}
                <span className="text-foreground font-bold">Shadcn UI</span> and
                <span className="text-foreground font-bold">
                    {' '}
                    Tailwind CSS
                </span>{' '}
                for seamless integration into your projects.
            </PageDescription>
        </PageHeader>
    )
}
