import { buttonVariants } from '@/components/ui/button'
import { Spotlight } from '@/components/ui/spotlight'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'

export default function Hero() {
    return (
        <section className="relative isolate grid w-full gap-8 py-28 lg:grid-cols-2">
            <svg
                aria-hidden="true"
                className="stroke-border/70 absolute inset-0 -z-10 size-full [mask-image:radial-gradient(100%_100%_at_top_left,white,transparent)]"
            >
                <defs>
                    <pattern
                        x="50%"
                        y={-1}
                        id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                        width={150}
                        height={80}
                        patternUnits="userSpaceOnUse"
                    >
                        <path d="M.5 200V.5H200" fill="none" />
                    </pattern>
                </defs>
                <rect
                    fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"
                    width="100%"
                    height="100%"
                    strokeWidth={0}
                />
            </svg>
            <div className="relative flex flex-col items-center justify-center gap-6 p-4 sm:items-start lg:px-6">
                <Spotlight className="-top-40 left-0 text-white/10 md:-top-10 md:left-34" />
                <a
                    href="#"
                    className="border-border bg-muted/50 flex w-fit items-center justify-center gap-1 rounded-md border px-3 py-2 text-sm font-semibold transition-[gap] ease-out hover:gap-3"
                >
                    <span className="flex items-center gap-2">
                        <span>🎉</span>
                        <span className="hidden sm:block">
                            New Feature Alert:
                        </span>
                        Beta Access Now Open!
                    </span>
                    <ArrowRightIcon className="size-4" />
                </a>
                <h1 className="font-heading flex flex-col text-center text-4xl font-semibold text-balance sm:text-left md:text-5xl xl:text-7xl xl:leading-[5rem]">
                    <span>Re-usable Page </span>
                    <span className="font-serif font-medium">
                        Blocks and Sections
                    </span>
                </h1>
                <p className="text-muted-foreground text-center text-base font-light text-balance sm:text-left sm:text-lg md:text-xl">
                    Modular, responsive hero sections built with{' '}
                    <a
                        href="https://ui.shadcn.com"
                        className="underline underline-offset-4"
                    >
                        shadcn/ui
                    </a>{' '}
                    and{' '}
                    <a
                        href="https://tailwindcss.com/"
                        className="underline underline-offset-4"
                    >
                        Tailwind CSS
                    </a>{' '}
                    for effortless integration into your projects—featuring the
                    Spotlight component sourced from{' '}
                    <a
                        href="https://ui.aceternity.com/components/spotlight"
                        className="underline underline-offset-4"
                    >
                        Aceternity UI
                    </a>
                    .
                </p>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                    <a
                        href="#"
                        className={cn(
                            buttonVariants({ variant: 'secondary', size: 'lg' })
                        )}
                    >
                        See It in Action
                    </a>
                    <a
                        href="#"
                        className={cn(
                            buttonVariants({
                                variant: 'default',
                                size: 'lg',
                                className: 'ease-out hover:gap-4',
                            })
                        )}
                    >
                        Get Started Free
                        <ArrowRightIcon />
                    </a>
                </div>
            </div>
            <div className="overflow-hidden p-4 lg:px-6">
                <div className="w-full max-w-none lg:w-[65rem] lg:flex-none">
                    <div className="bg-accent dark:bg-accent/40 ring-border rounded-2xl p-1 ring-1 ring-inset md:p-2">
                        <img
                            src="https://launchmvpfast.com/landing.png"
                            alt=""
                            className="bg-muted aspect-video overflow-hidden rounded-xl object-cover"
                            width={1920}
                            height={1080}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
