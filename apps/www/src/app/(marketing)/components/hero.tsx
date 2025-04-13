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
        <div className="container-wrapper">
            <div className="container grid min-h-[30rem] grid-cols-2 items-center justify-center gap-6">
                {/* Main Section */}
                <div className="flex h-full flex-col justify-center gap-3">
                    <Link
                        href={urls.app.pricing}
                        className="max-w-10/12 relative mt-2 hidden w-full items-center gap-2 border border-white/5 md:flex"
                    >
                        <div className="bg-accent/30 m-0.5 flex w-full items-center justify-between px-4 py-2">
                            <p className="text-sm font-medium">
                                Want us to build your idea for you?
                            </p>
                            <p className="text-sm font-semibold">Contact Us</p>
                        </div>
                    </Link>

                    <h1 className="font-heading text-balance text-5xl font-normal leading-tight tracking-tighter">
                        Launch Your <span>Idea Fast</span> with{' '}
                        <span className="bg-foreground text-primary-foreground px-2">
                            Open Source
                        </span>{' '}
                        Starterkits & More
                    </h1>
                    <p className="text-muted-foreground text-balance text-xl font-light leading-tight">
                        Launch your idea faster with Open Source Starterkits,
                        Re-usable components, and more. Build your next idea in
                        days.
                    </p>

                    <div className="flex items-center gap-4">
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

                <div className="flex h-full w-full items-center justify-center">
                    <TerminalHero />
                </div>
            </div>
        </div>
    )
}

export function GradientBG({
    children,
    className,
    ...props
}: React.PropsWithChildren<
    {
        className?: string
    } & React.HTMLAttributes<HTMLElement>
>) {
    return (
        <div
            className={cn(
                'relative flex   h-min  w-full flex-col  flex-nowrap content-center items-center justify-center gap-10 overflow-visible decoration-clone p-px transition duration-500'
            )}
            {...props}
        >
            <div
                className={cn('z-10 w-auto  rounded-none px-4 py-2', className)}
            >
                {children}
            </div>

            <div className="z-1 absolute inset-[2px] flex-none bg-zinc-100 dark:bg-zinc-950 " />
        </div>
    )
}

export function TerminalHero() {
    return (
        <Terminal title="SaaS-Starterkit">
            <TypingAnimation duration={30}>
                &gt; Clone Launch MVP Fast SaaS Starterkit
            </TypingAnimation>

            <AnimatedSpan delay={1500} className="text-[#0069be]">
                <span>Cloning repo...</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2000} className="text-[#F07178]">
                <span>✔ Next.js ready. [Saved: 1m]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={2500} className="text-[#F07178]">
                <span>✔ Auth flows ready. [Saved: 4h]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3000} className="text-[#F07178]">
                <span>✔ Organizations set. [Saved: 5h]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={3500} className="text-[#F07178]">
                <span>✔ Landing pages built. [Saved: 8h]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4000} className="text-[#F07178]">
                <span>✔ Stripe integrated. [Saved: 5h]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={4500} className="text-[#F07178]">
                <span>✔ Drizzle DB configured. [Saved: 2.5h]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5000} className="text-[#F07178]">
                <span>✔ Uploadthing active. [Saved: 2h]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={5500} className="text-[#F07178]">
                <span>✔ shadcn UI installed. [Saved: 1m]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={6000} className="text-[#F07178]">
                <span>✔ Dashboard ready. [Saved: 10h]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={6500} className="text-[#F07178]">
                <span>✔ Waitlist enabled. [Saved: 3h]</span>
            </AnimatedSpan>

            <AnimatedSpan delay={7000} className="text-[#F07178]">
                <span>✔ Email templates ready. [Saved: 3h]</span>
            </AnimatedSpan>

            <TypingAnimation
                delay={7500}
                duration={40}
                className="text-muted-foreground"
            >
                Success! Starterkit is live.
            </TypingAnimation>

            <TypingAnimation
                delay={8000}
                duration={40}
                className="text-muted-foreground"
            >
                Time saved: Days to minutes!
            </TypingAnimation>
        </Terminal>
    )
}
