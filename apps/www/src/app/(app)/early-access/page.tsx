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
import { siteConfig } from '@/config/site'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: `Early Access | Exclusive Previews & Features | ${siteConfig.name}`,
    description:
        'Join the Launch MVP Fast early access program! Get exclusive previews of upcoming Next.js starter kits, components & features. Sign up to shape our roadmap & get benefits.',
}

export default function EarlyAccess() {
    return (
        <>
            <PageHeaderWrapper
                className="from-foreground/10 to-background relative h-full bg-gradient-to-b py-20"
                fullHeight
            >
                <PageHeader className="flex flex-col items-center justify-center overflow-hidden pt-0 pb-28">
                    <Icons.logo className="mb-8 size-14" />
                    <PageHeading className="text-center">
                        <span>Get</span>{' '}
                        <span>
                            <AuroraText>Early Access</AuroraText>
                        </span>
                        <span> to What&apos;s Next</span>
                    </PageHeading>
                    <PageDescription className="max-w-3xl text-center">
                        We&apos;re working on a set of powerful, re-usable
                        components, Starterkits, blocks and more. Join the early
                        access list to get notified
                    </PageDescription>

                    <ComingSoonForm className="mt-10 flex w-full max-w-96 flex-col gap-3" />
                </PageHeader>

                <Ripple
                    mainCircleSize={400}
                    mainCircleOpacity={0.2}
                    className="opacity-60"
                />
            </PageHeaderWrapper>
        </>
    )
}
