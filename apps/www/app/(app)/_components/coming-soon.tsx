import { ComingSoonForm } from '@/app/(app)/_components/coming-soon-form'
import {
    PageHeader,
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
        <PageHeader className="flex flex-col items-center justify-center overflow-hidden py-20 pb-28">
            <Icons.logo className="mb-8 size-14" />
            <PageHeading className="text-center">
                <span>{title}</span>{' '}
                <span>
                    <AuroraText>Coming Soon</AuroraText>
                </span>
            </PageHeading>
            <PageDescription className="max-w-3xl text-center">
                {description}
            </PageDescription>

            <ComingSoonForm className="mt-10 flex w-full max-w-96 flex-col gap-3" />

            <Ripple
                mainCircleSize={400}
                mainCircleOpacity={0.2}
                className="opacity-60"
            />
        </PageHeader>
    )
}
