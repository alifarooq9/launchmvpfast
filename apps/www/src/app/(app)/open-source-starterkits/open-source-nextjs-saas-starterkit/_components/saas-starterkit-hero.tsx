import {
    Announcement,
    PageActions,
    PageDescription,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
} from '@/app/(app)/_components/page-header'
import CloneButton from '@/components/clone-button'
import { buttonVariants } from '@/components/ui/button'
import { cloneCmd } from '@/config/clone-cmd'
import { urls } from '@/config/urls'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function SaasStarterkitHero() {
    return (
        <PageHeaderWrapper>
            <PageHeader>
                <Announcement
                    actionText="Get Early Access"
                    url={urls.app.earlyAccess}
                    text="SaaS V2 Starterkit is coming soon!"
                />
                <PageHeading>Open Source Next.js SaaS Starter Kit</PageHeading>
                <PageDescription className="max-w-[80rem]">
                    Jumpstart your Next.js SaaS app with this free open-source
                    starter kit. Includes essentials like auth, Drizzle DB,
                    Shadcn UI, & Tailwind CSS, saving weeks of setup. Clone the
                    repo & launch your MVP faster!
                </PageDescription>
                <PageActions>
                    <Link
                        href={urls.app.starterkits.saasNextjs.preview}
                        target="_blank"
                        className={buttonVariants({
                            variant: 'secondary',
                            size: 'lg',
                        })}
                    >
                        Live Preview <ArrowRightIcon />
                    </Link>
                    <CloneButton
                        size="lg"
                        cloneCommand={cloneCmd.starterkits.saasNextjs.base}
                    >
                        Clone StarterKit
                    </CloneButton>
                </PageActions>
            </PageHeader>
        </PageHeaderWrapper>
    )
}
