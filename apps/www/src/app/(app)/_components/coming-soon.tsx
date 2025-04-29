import { ComingSoonForm } from '@/app/(app)/_components/coming-soon-form'
import {
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
    PageDescription,
} from '@/app/(app)/_components/page-header'
import { Icons } from '@/components/icons'
import { AuroraText } from '@/components/ui/aurora-text'
import { Ripple } from '@/components/ui/ripple'

type ComingSoonProps = {
    title: string
    description: string
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <PageHeaderWrapper
            className="from-background to-foreground/5 relative h-full bg-gradient-to-b py-20"
            fullHeight
        >
            <PageHeader className="flex flex-col items-center justify-center overflow-hidden pt-0 pb-28">
                <Icons.logo className="mb-8 size-14" />
                <PageHeading>
                    <span>{title}</span>{' '}
                    <span>
                        <AuroraText>Coming Soon</AuroraText>
                    </span>
                </PageHeading>
                <PageDescription className="max-w-3xl text-center">
                    {description}
                </PageDescription>

                <ComingSoonForm className="mt-10 flex w-full max-w-96 flex-col gap-3" />
            </PageHeader>

            <Ripple
                mainCircleSize={400}
                mainCircleOpacity={0.2}
                className="opacity-40"
            />
        </PageHeaderWrapper>
    )
}
