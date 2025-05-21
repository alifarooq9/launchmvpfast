import { Particles } from '@/components/ui/particles'
import { rainbowButtonVariants } from '@/components/ui/rainbow-button'
import { cn } from '@/lib/utils'
import { ArrowRightIcon } from 'lucide-react'
import * as m from 'motion/react-m'
import { LazyMotion, domAnimation } from 'motion/react'

export default function Hero() {
    return (
        <LazyMotion features={domAnimation}>
            <section className="relative container mx-auto flex w-full flex-col items-center p-4 py-28 xl:px-6">
                <div className="flex w-full max-w-3xl flex-col items-center gap-4">
                    <m.a
                        animate={{
                            transform: 'translateY(0)',
                            opacity: 1,
                            filter: 'blur(0)',
                        }}
                        initial={{
                            transform: 'translateY(-20px)',
                            opacity: 0,
                            filter: 'blur(10px)',
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0,
                            ease: 'easeOut',
                        }}
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
                    </m.a>
                    <m.h1
                        animate={{
                            transform: 'translateY(0)',
                            opacity: 1,
                            filter: 'blur(0)',
                        }}
                        initial={{
                            transform: 'translateY(-20px)',
                            opacity: 0,
                            filter: 'blur(10px)',
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.1,
                            ease: 'easeOut',
                        }}
                        className="font-heading from-foreground bg-gradient-to-b to-neutral-800/70 bg-clip-text text-center text-4xl leading-none font-semibold text-balance whitespace-pre-wrap text-transparent sm:text-5xl lg:text-7xl xl:leading-[5rem] dark:to-neutral-400/80"
                    >
                        Re-usable Page Blocks and Sections
                    </m.h1>
                    <m.p
                        animate={{
                            transform: 'translateY(0)',
                            opacity: 1,
                            filter: 'blur(0)',
                        }}
                        initial={{
                            transform: 'translateY(-20px)',
                            opacity: 0,
                            filter: 'blur(10px)',
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.3,
                            ease: 'easeOut',
                        }}
                        className="text-muted-foreground text-center text-base text-balance sm:text-lg"
                    >
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
                        — featuring the{' '}
                        <a
                            href="https://magicui.design/docs/components/rainbow-button"
                            className="underline underline-offset-4"
                        >
                            Rainbow Button
                        </a>{' '}
                        and{' '}
                        <a
                            href="https://magicui.design/docs/components/particles"
                            className="underline underline-offset-4"
                        >
                            Particles
                        </a>{' '}
                        sourced from{' '}
                        <a
                            href="https://magicui.design"
                            className="underline underline-offset-4"
                        >
                            Magic UI
                        </a>
                        .
                    </m.p>
                    <m.div
                        animate={{
                            transform: 'translateY(0)',
                            opacity: 1,
                            filter: 'blur(0)',
                        }}
                        initial={{
                            transform: 'translateY(-20px)',
                            opacity: 0,
                            filter: 'blur(10px)',
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.5,
                            ease: 'easeOut',
                        }}
                    >
                        <a
                            href="#"
                            className={cn(
                                rainbowButtonVariants({
                                    size: 'lg',
                                    className:
                                        'mt-6 h-12 w-fit min-w-3xs gap-1 text-base',
                                })
                            )}
                        >
                            <span className="font-semibold">Sign-up now</span>
                            <span className="font-light italic">
                                — it's free
                            </span>
                        </a>
                    </m.div>
                </div>

                <div className="relative mt-24 flex w-full max-w-7xl">
                    <m.div
                        animate={{
                            transform: 'translateY(0)',
                            opacity: 1,
                            filter: 'blur(0)',
                        }}
                        initial={{
                            transform: 'translateY(20px)',
                            opacity: 0,
                            filter: 'blur(10px)',
                        }}
                        transition={{
                            duration: 0.6,
                            delay: 0.8,
                            ease: 'easeOut',
                        }}
                        className="bg-accent dark:bg-accent/40 ring-border z-10 aspect-video w-full rounded-2xl p-1 ring-1 ring-inset md:p-2"
                    >
                        <div className="relative w-full overflow-hidden rounded-xl">
                            <img
                                src="https://launchmvpfast.com/landing.png"
                                alt=""
                                className="bg-muted aspect-video w-full object-cover"
                                width={1920}
                                height={1080}
                            />
                        </div>
                    </m.div>
                    <div className="from-background via-background pointer-events-none absolute right-0 bottom-0 left-0 z-40 h-[60%] bg-gradient-to-t to-transparent" />
                    <m.div
                        animate={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{
                            duration: 0.6,
                            delay: 1,
                            ease: 'easeOut',
                        }}
                        className="absolute top-0 z-0 h-5 w-full rounded-xl bg-blue-400 blur-[20px] sm:h-10 md:h-20 md:blur-[100px] dark:bg-blue-200 dark:blur-[40px] sm:dark:top-10 md:dark:blur-[100px]"
                    />
                </div>

                <Particles
                    className="absolute inset-0 z-0 h-[80%]"
                    quantity={150}
                    ease={80}
                    refresh
                    accordingToTheme={true}
                />
            </section>
        </LazyMotion>
    )
}
