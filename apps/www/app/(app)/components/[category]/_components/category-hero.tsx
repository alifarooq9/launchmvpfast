import {
    PageDescription,
    PageHeader,
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
        <PageHeader>
            <PageHeading>
                {name} <span className="text-foreground/70">Component</span>
            </PageHeading>
            <PageDescription className="max-w-[80rem]">
                A growing collection of{' '}
                <span className="text-foreground font-bold">
                    {count} {name} components
                </span>{' '}
                built with{' '}
                <span className="text-foreground font-bold">Shadcn UI</span> and{' '}
                <span className="text-foreground font-bold">Tailwind CSS.</span>
            </PageDescription>
        </PageHeader>
    )
}
