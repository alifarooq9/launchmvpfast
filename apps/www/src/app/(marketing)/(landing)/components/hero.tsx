import { buttonVariants } from '@/components/ui/button'
import { urls } from '@/config/urls'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'
import {
    AnimatedSpan,
    Terminal,
    TypingAnimation,
} from '@/components/ui/terminal'
import { cn } from '@/lib/utils'

export function Hero() {
    return (
        <section className="container-wrapper">
            <div className="container grid min-h-[30rem] grid-cols-1 items-center justify-center gap-6 py-14 lg:grid-cols-2 lg:py-0">
                {/* Main Section */}
                <div className="flex h-full flex-col justify-center gap-3">
                    <Link
                        href={urls.app.pricing}
                        className="focus-ring border-border relative hidden w-full max-w-[30rem] items-center gap-2 border sm:flex"
                    >
                        <div className="bg-accent/30 m-0.5 flex w-full items-center justify-between gap-3 px-4 py-2">
                            <p className="text-sm font-medium">
                                Want us to build your MVP for you?
                            </p>
                            <p className="text-sm font-semibold">Contact Us</p>
                        </div>
                    </Link>

                    <h1 className="font-heading text text-balance text-3xl font-medium leading-tight tracking-tighter sm:text-4xl md:text-5xl">
                        Launch Your <span>MVP Fast</span> with{' '}
                        <span className="bg-foreground text-primary-foreground whitespace-nowrap px-2">
                            Open Source
                        </span>{' '}
                        Starterkits & More
                    </h1>
                    <p className="text-muted-foreground text-balance text-base font-light leading-tight sm:text-lg">
                        Launch your MVP faster with Open Source Starterkits,
                        Re-usable components, and more. Build your next MVP in
                        days.
                    </p>

                    <div className="flex w-full flex-col items-start gap-2 sm:w-fit sm:flex-row sm:items-center sm:gap-4">
                        <Link
                            href={urls.app.starterkits}
                            className={buttonVariants({
                                variant: 'secondary',
                                size: 'lg',
                            })}
                        >
                            Explore Starterkits <ArrowRightIcon />
                        </Link>
                        <Link
                            href={urls.app.components}
                            className={buttonVariants({
                                size: 'lg',
                            })}
                        >
                            Want Us To Build?
                        </Link>
                    </div>
                </div>

                <div className="hidden h-full w-full items-center justify-center sm:flex">
                    <TerminalHero />
                </div>
            </div>
        </section>
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
        <Terminal copyText="Cloning repo...">
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
