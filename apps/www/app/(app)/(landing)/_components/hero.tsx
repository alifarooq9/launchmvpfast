'use client'

import { BorderTrail } from '@/components/ui/border-trail'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import * as m from 'motion/react-m'
import { TextEffect } from '@/components/ui/text-effect'
import LogoCarousel, { Logo } from '@/components/ui/logo-carousel'
import { logos } from '@/config/logos'
import { useIsMobile } from '@/hooks/use-mobile'

const h1Transition = {
    delay: 0,
    speedReveal: 0.9,
    speedSegment: 0.3,
}

const variants = {
    hidden: {
        opacity: 0,
        y: 20,
        filter: 'blur(15px)',
    },
    visible: (custom: { delay?: number; duration?: number }) => ({
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            delay: custom?.delay ?? 0,
            duration: custom?.duration ?? 0.6,
        },
    }),
}

export function Hero() {
    const isMobile = useIsMobile()

    return (
        <div className="relative container flex flex-col items-center gap-6">
            <m.div
                variants={variants}
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.5 }}
                className="bg-muted/50 border-border relative flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold"
            >
                <div className="relative size-2">
                    <div className="bg-foreground size-2 rounded-full" />
                    <div className="bg-foreground absolute inset-0 size-2 animate-ping rounded-full" />
                </div>
                Want us to build your MVP? Contact us
                <BorderTrail
                    style={{
                        boxShadow:
                            '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={20}
                />
            </m.div>

            <TextEffect
                as="h1"
                preset="fade-in-blur"
                speedReveal={h1Transition.speedReveal}
                speedSegment={h1Transition.speedSegment}
                delay={h1Transition.delay}
                className="font-heading text-foreground/70 max-w-3xl text-center text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl"
            >
                <span className="text-foreground">Launch</span> your{' '}
                <span className="text-foreground">MVP</span> in{' '}
                <span className="text-foreground">days,</span> not months{' '}
            </TextEffect>
            <m.p
                variants={variants}
                initial="hidden"
                animate="visible"
                custom={{ delay: 0.8 }}
                className="text-muted-foreground max-w-2xl text-center text-balance md:text-lg lg:text-xl"
            >
                <span className="text-foreground font-bold">Accelerate</span>{' '}
                your <span className="text-foreground font-bold">MVP</span> with{' '}
                <span className="text-foreground font-bold">free</span>,{' '}
                <span className="text-foreground font-bold">starter kits</span>{' '}
                and reusable{' '}
                <span className="text-foreground font-bold">components</span>—go
                from <span className="text-foreground font-bold">idea</span> to{' '}
                <span className="text-foreground font-bold">prototype</span> in{' '}
                <span className="text-foreground font-bold">days</span>.
            </m.p>
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <m.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    custom={{ delay: 1 }}
                >
                    <Link
                        href="/#"
                        className={cn(
                            buttonVariants({
                                size: 'xl',
                                variant: 'defaultWithOutline',
                            })
                        )}
                    >
                        Get Started —{' '}
                        <span className="font-normal italic">it's free</span>
                    </Link>
                </m.div>
                <m.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    custom={{ delay: 1.1 }}
                >
                    <Link
                        href="/#"
                        className={cn(
                            buttonVariants({
                                variant: 'secondaryWithOutline',
                                size: 'xl',
                            })
                        )}
                    >
                        What us to build?
                    </Link>
                </m.div>
            </div>

            {!isMobile ? <FloatingLogos /> : null}
        </div>
    )
}

function FloatingLogos() {
    const logoPositions = [
        { x: 'left-0', y: 'top-0', duration: 8000, delay: 0 },
        {
            x: '-left-30',
            y: 'top-1/3 -translate-y-1/3',
            duration: 12000,
            delay: 2000,
        },
        { x: 'left-0', y: 'bottom-0', duration: 10500, delay: 4000 },
        { x: 'right-0', y: 'top-0', duration: 9500, delay: 1000 },
        {
            x: '-right-30',
            y: 'top-1/3 -translate-y-1/3',
            duration: 11000,
            delay: 3000,
        },
        { x: 'right-0', y: 'bottom-0', duration: 13000, delay: 5000 },
    ]

    const logosPerPosition = Math.floor(logos.length / logoPositions.length)
    const remainingLogos = logos.length % logoPositions.length

    const positionsWithLogos = logoPositions.map((position, index) => {
        const startIndex =
            index * logosPerPosition + Math.min(index, remainingLogos)
        const endIndex =
            startIndex + logosPerPosition + (index < remainingLogos ? 1 : 0)
        const positionLogos = logos.slice(startIndex, endIndex)

        return {
            ...position,
            logos: positionLogos,
            index,
        }
    })

    return (
        <>
            {positionsWithLogos.map((position, index) => (
                <m.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    custom={{
                        delay: 1 + 0.2 * index,
                    }}
                    key={position.index}
                    className={`absolute ${position.x} ${position.y}`}
                >
                    <m.div
                        animate={{
                            y: [0, -20, 0],
                            rotate: [0, 2, -2, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4 + Math.random() * 4, // Random duration between 4-8 seconds
                            ease: 'easeInOut',
                            times: [0, 0.5, 1],
                            delay: Math.random() * 2, // Random delay up to 2 seconds
                        }}
                    >
                        <LogoCarousel
                            columnCount={1}
                            logos={position.logos}
                            cycleInterval={position.duration}
                            initialDelay={position.delay}
                        />
                    </m.div>
                </m.div>
            ))}
        </>
    )
}
