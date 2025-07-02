'use client'

import { Button } from '@/components/ui/button'
import { motion as m } from 'motion/react'

export default function PartnersHeroSimple() {
    return (
        <section className="relative isolate flex min-h-[100svh] w-full flex-col items-center justify-end overflow-hidden">
            <div className="z-20 flex w-full max-w-4xl flex-col items-center justify-center gap-8 px-4 py-16 text-center">
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
                        duration: 0.5,
                        delay: 0,
                        ease: 'easeOut',
                    }}
                    className="h-1.5 w-1.5 animate-ping rounded-full bg-white"
                />

                <m.div
                    animate={{
                        transform: 'translateY(0)',
                        opacity: 1,
                        filter: 'blur(0)',
                    }}
                    initial={{
                        transform: 'translateY(15px)',
                        opacity: 0,
                        filter: 'blur(10px)',
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.3,
                        ease: 'easeOut',
                    }}
                    className="flex items-center rounded-md border border-white/20 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-md"
                >
                    Strategic Collaboration Network
                </m.div>

                <m.h1
                    animate={{
                        transform: 'translateY(0)',
                        opacity: 1,
                        filter: 'blur(0)',
                    }}
                    initial={{
                        transform: 'translateY(15px)',
                        opacity: 0,
                        filter: 'blur(10px)',
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                        ease: 'easeOut',
                    }}
                    className="text-3xl text-white md:text-4xl lg:text-5xl"
                >
                    Building the{' '}
                    <span className="font-bold italic">Partnership Ecosystem</span>
                </m.h1>
                <m.p
                    animate={{
                        transform: 'translateY(0)',
                        opacity: 1,
                        filter: 'blur(0)',
                    }}
                    initial={{
                        transform: 'translateY(15px)',
                        opacity: 0,
                        filter: 'blur(10px)',
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.9,
                        ease: 'easeOut',
                    }}
                    className="max-w-3xl text-sm font-light text-balance text-white/80 md:text-lg"
                >
                    Join our growing network of partners and collaborate with us to expand drone technology access and create shared value across industries throughout Haiti and the Caribbean region.
                </m.p>
                <m.div
                    animate={{
                        transform: 'translateY(0)',
                        opacity: 1,
                        filter: 'blur(0)',
                    }}
                    initial={{
                        transform: 'translateY(15px)',
                        opacity: 0,
                        filter: 'blur(10px)',
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 1.2,
                        ease: 'easeOut',
                    }}
                    className="flex gap-4"
                >
                    <Button 
                        asChild
                        className="cursor-pointer bg-white text-black hover:scale-105 hover:bg-white"
                    >
                        <a href="#apply">Apply for Partnership</a>
                    </Button>
                    <Button 
                        asChild
                        variant="outline"
                        className="cursor-pointer border-white/20 bg-white/10 text-white backdrop-blur-md hover:scale-105 hover:bg-white/20"
                    >
                        <a href="#current">View Current Partners</a>
                    </Button>
                </m.div>
            </div>

            {/* Pattern overlay - Updated colors for partners theme */}
            <div className="absolute top-1/5 left-1/2 aspect-square w-[200%] -translate-x-1/2 rounded-full bg-amber-950 blur-[200px] md:top-1/3" />

            <div className="absolute top-1/5 left-1/2 aspect-square w-[200%] -translate-x-1/2 overflow-hidden rounded-full mask-[radial-gradient(circle,_white_10%,_transparent_73%)] md:top-1/3">
                <svg
                    aria-hidden="true"
                    className="inset-0 z-10 size-full stroke-white/20 stroke-2"
                >
                    <defs>
                        <pattern
                            x="50%"
                            y={-1}
                            id="grid-pattern"
                            width={15}
                            height={200}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5" fill="none" />
                        </pattern>
                    </defs>
                    <rect
                        fill="url(#grid-pattern)"
                        width="100%"
                        height="100%"
                        strokeWidth={0}
                    />
                </svg>
            </div>
        </section>
    )
}