import { ComingSoonForm } from '@/app/(app)/_components/coming-soon-form'
import {
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
    PageDescription,
} from '@/app/(app)/_components/page-header'
import { AuroraText } from '@/components/ui/aurora-text'

type ComingSoonProps = {
    title: string
    description: string
}

export function ComingSoon({ title, description }: ComingSoonProps) {
    return (
        <PageHeaderWrapper className="flex-1">
            <PageHeader className="flex flex-col items-center">
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
        </PageHeaderWrapper>
    )
}
