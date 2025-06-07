import Link from 'next/link'
import Header from './header'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { FadeLine } from '@/components/ui/fade-line'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'

export default function Hero() {
    return (
        <div className="relative flex min-h-svh w-full flex-col items-center justify-between">
            <InteractiveGridPattern
                width={100}
                height={100}
                squares={[80, 80]}
                squaresClassName="hover:fill-muted"
                className="opacity-30"
            />
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="container flex w-full flex-1 items-center justify-center overflow-hidden">
                <div className="relative flex flex-col items-center justify-center gap-6">
                    <h1 className="text-center text-2xl font-bold text-balance md:text-3xl lg:text-4xl xl:text-5xl">
                        Starterkits. Components. Blocks.
                    </h1>
                    <p className="text-muted-foreground max-w-2xl text-center text-sm font-semibold text-balance md:text-base lg:text-lg">
                        "Build faster with free{' '}
                        <span className="text-foreground">Starter kits</span>,
                        Re-usable{' '}
                        <span className="text-foreground">Components</span>, and
                        modular <span className="text-foreground">Blocks</span>.
                        Everything you need from{' '}
                        <span className="text-foreground">MVP</span> to
                        <span className="text-foreground">
                            {' '}
                            production-ready applications.
                        </span>
                        "
                    </p>
                    <div className="flex flex-col items-center gap-2 sm:flex-row">
                        <Link
                            href="#"
                            className={cn(
                                buttonVariants({
                                    size: 'sm',
                                    className:
                                        'w-full sm:h-10 sm:w-fit sm:px-6 sm:has-[>svg]:px-4',
                                })
                            )}
                        >
                            Pro Toolkit
                        </Link>
                        <Link
                            href="#"
                            className={cn(
                                buttonVariants({
                                    size: 'sm',
                                    variant: 'secondary',
                                    className:
                                        'w-full sm:h-10 sm:w-fit sm:px-6 sm:has-[>svg]:px-4',
                                })
                            )}
                        >
                            Browse Free Resources
                        </Link>
                    </div>

                    {/* Faded Lines on content */}
                    <FadeLine
                        className="absolute -top-10 -left-1/4 h-px w-[150%]"
                        opacity={0.2}
                        fadeWidth="10%"
                    />

                    <FadeLine
                        className="absolute -bottom-10 -left-1/4 h-px w-[150%]"
                        opacity={0.2}
                        fadeWidth="10%"
                    />

                    <FadeLine
                        className="absolute -top-14 -left-1/4 h-px w-[150%]"
                        opacity={0.2}
                        fadeWidth="10%"
                    />

                    <FadeLine
                        className="absolute -bottom-14 -left-1/4 h-px w-[150%]"
                        opacity={0.2}
                        fadeWidth="10%"
                    />

                    <FadeLine
                        className="absolute -top-3/4 left-0 h-[250%] w-px md:-left-10"
                        fadeWidth="15%"
                        opacity={0.2}
                    />

                    <FadeLine
                        className="absolute -top-3/4 right-0 h-[250%] w-px md:-right-10"
                        fadeWidth="15%"
                        opacity={0.2}
                    />

                    <FadeLine
                        className="absolute -top-3/4 left-4 h-[250%] w-px md:-left-14"
                        fadeWidth="15%"
                        opacity={0.2}
                    />

                    <FadeLine
                        className="absolute -top-3/4 right-4 h-[250%] w-px md:-right-14"
                        fadeWidth="15%"
                        opacity={0.2}
                    />
                </div>
            </section>
        </div>
    )
}
