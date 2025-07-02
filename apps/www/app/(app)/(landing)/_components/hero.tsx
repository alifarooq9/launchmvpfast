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
            <PageHeader className="grid grid-cols-1 gap-4 lg:min-h-[30rem] lg:grid-cols-2 lg:py-0">
                <div className="flex h-full flex-col justify-center gap-3">
                    <Announcement
                        actionText="Learn More"
                        url={urls.app.about}
                        text="Join the drone cooperative revolution"
                    />

                    <PageHeading>
                        Democratizing <span>Drone Technology</span> through{' '}
                        <span className="bg-foreground text-primary-foreground px-2 whitespace-nowrap">
                            Cooperative
                        </span>{' '}
                        Investment & Ownership
                    </PageHeading>
                    <PageDescription>
                        Join Drone Zoe cooperative to invest in cutting-edge drone 
                        technology and share in the returns. Access professional 
                        drone services at cooperative rates.
                    </PageDescription>

                    <PageActions>
                        <Link
                            href={urls.app.invest}
                            className={buttonVariants({
                                variant: 'secondary',
                                size: 'lg',
                            })}
                        >
                            Explore Investments <ArrowRightIcon />
                        </Link>
                        <Link
                            href={urls.app.services}
                            className={buttonVariants({
                                size: 'lg',
                            })}
                        >
                            View Services
                        </Link>
                    </PageActions>
                </div>

                <div className="mt-0 hidden h-full w-full items-center justify-center sm:mt-8 sm:flex lg:mt-0">
                    <TerminalHero />
                </div>
            </PageHeader>
        </PageHeaderWrapper>
    )
}

const savedCommands = [
    'Project planning phase completed. [Progress: 25%]',
    'Community outreach initiated. [Partners: Connecting]',
    'Technology research underway. [Vendors: Evaluating]',
    'Cooperative structure designed. [Legal: In Progress]',
    'Funding strategy developed. [Target: Phase 1]',
    'Training programs outlined. [Curriculum: Drafting]',
    'Service areas identified. [Regions: Mapping]',
    'Partnership network building. [NGOs: Engaging]',
    'Regulatory framework research. [FAA: Consulting]',
    'Platform development started. [MVP: Building]',
    'Local hiring plan created. [Jobs: Planning]',
]

export function TerminalHero() {
    return (
        <Terminal copyText="Join Drone Zoe Development">
            <TypingAnimation duration={30}>
                &gt; Initialize Drone Zoe Project Development
            </TypingAnimation>

            <AnimatedSpan delay={1500} className="text-green-500">
                <span>Loading development progress...</span>
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
                Development phase active!
            </TypingAnimation>

            <TypingAnimation
                delay={4100}
                duration={40}
                className="text-green-500"
            >
                Join us in building the future!
            </TypingAnimation>
        </Terminal>
    )
}
