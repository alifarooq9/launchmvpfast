import {
    Announcement,
    PageActions,
    PageDescription,
    PageHeader,
    PageHeading,
} from '@/app/(app)/_components/page-header'
import CloneButton from '@/components/clone-button'
import { buttonVariants } from '@/components/ui/button'
import { cloneCmd } from '@/config/clone-cmd'
import { urls } from '@/config/urls'
import { ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function SaasStarterkitHero() {
    return (
        <PageHeader>
            <Announcement
                actionText="Get Early Access"
                url={urls.app.earlyAccess}
                text="SaaS V2 soon!"
            />
            <PageHeading>
                Open Source Next.js SaaS Starter Kit for Modern SaaS apps
            </PageHeading>
            <PageDescription className="max-w-[80rem]">
                Jumpstart your{' '}
                <span className="text-foreground font-bold">
                    Next.js SaaS app
                </span>{' '}
                with this free{' '}
                <span className="text-foreground font-bold">
                    open-source starter kit
                </span>
                . Includes essentials like{' '}
                <span className="text-foreground font-bold">auth</span>,{' '}
                <span className="text-foreground font-bold">Drizzle DB</span>,{' '}
                <span className="text-foreground font-bold">Shadcn UI</span>, &{' '}
                <span className="text-foreground font-bold">Tailwind CSS</span>,
                saving weeks of setup. Clone the repo & launch your{' '}
                <span className="text-foreground font-bold">MVP faster!</span>
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

            <div className="border-border relative mt-10 aspect-video w-full overflow-hidden rounded-xl border">
                <Image
                    src="/starterkits/saas-v1/landing.png"
                    fill
                    alt="saas-starterkit-demo"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/starterkits/saas-v1/landing.png"
                />
            </div>
        </PageHeader>
    )
}
