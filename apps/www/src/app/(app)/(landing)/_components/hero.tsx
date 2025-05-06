import { buttonVariants } from '@/components/ui/button'
import { urls } from '@/config/urls'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from '@/components/ui/terminal'
import {
    PageActions,
    PageHeader,
    PageHeaderWrapper,
    PageHeading,
    PageDescription,
    Announcement,
} from '@/app/(app)/_components/page-header'
import { cloneCmd } from '@/config/clone-cmd'

export function Hero() {
    return (
        <PageHeaderWrapper>
            <PageHeader className="grid min-h-[30rem] grid-cols-1 lg:grid-cols-2 lg:py-0">
                <div className="flex h-full flex-col justify-center gap-3">
                    <Announcement
                        actionText="Contact Us"
                        url={urls.app.pricing}
                        text="Want us to build your MVP for you?"
                    />

                    <PageHeading>
                        Launch Your <span>MVP Fast</span> with{' '}
                        <span className="bg-foreground text-primary-foreground px-2 whitespace-nowrap">
                            Open Source
                        </span>{' '}
                        Starterkits & More
                    </PageHeading>
                    <PageDescription>
                        Launch your MVP faster with Open Source Starterkits,
                        Re-usable components, and more. Build your next MVP in
                        days.
                    </PageDescription>

                    <PageActions>
                        <Link
                            href={urls.app.starterkits.base}
                            className={buttonVariants({
                                variant: 'secondary',
                                size: 'lg',
                            })}
                        >
                            Explore Starterkits <ArrowRightIcon />
                        </Link>
                        <Link
                            href={urls.app.pricing}
                            className={buttonVariants({
                                size: 'lg',
                            })}
                        >
                            Want Us To Build?
                        </Link>
                    </PageActions>
                </div>

                <div className="hidden h-full w-full items-center justify-center sm:flex">
                    <TerminalHero />
                </div>
            </PageHeader>
        </PageHeaderWrapper>
    )
}

const savedCommands = [
    'Next.js ready. [Saved: 1m]',
    'Auth flows ready. [Saved: 4h]',
    'Organizations set. [Saved: 5h]',
    'Landing pages built. [Saved: 8h]',
    'Stripe integrated. [Saved: 3h]',
    'Drizzle DB configured. [Saved: 2.5h]',
    'Uploadthing active. [Saved: 2h]',
    'shadcn UI installed. [Saved: 1m]',
    'Dashboard ready. [Saved: 10h]',
    'Waitlist enabled. [Saved: 3h]',
    'Email templates ready. [Saved: 3h]',
]

export function TerminalHero() {
    return (
        <Terminal copyText={`pnpx ${cloneCmd.starterkits.saasNextjs.base}`}>
            <TypingAnimation duration={30}>
                &gt; Clone Launch MVP Fast SaaS Starterkit
            </TypingAnimation>

            <AnimatedSpan delay={1500} className="text-green-500">
                <span>Cloning repo...</span>
            </AnimatedSpan>
            {savedCommands.map((command, index) => (
                <AnimatedSpan
                    key={`${command}+${index}`}
                    delay={1500 + index * 200}
                    className="text-blue-500"
                >
                    <span>✔ {command}</span>
                </AnimatedSpan>
            ))}

            <TypingAnimation
                delay={3900}
                duration={40}
                className="text-green-500"
            >
                Success! Starterkit is live.
            </TypingAnimation>

            <TypingAnimation
                delay={4100}
                duration={40}
                className="text-green-500"
            >
                Time saved: Days to minutes!
            </TypingAnimation>
        </Terminal>
    )
}
