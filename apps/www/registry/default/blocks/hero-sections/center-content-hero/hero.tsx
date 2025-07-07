'use client'

import Link from 'next/link'
import Header from '@/registry/default/blocks/hero-sections/center-content-hero/header'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern'
import { motion as m, Variants } from 'motion/react'

const staggerDelay = 0.4
const initialDelay = 0.2 // initial delay before the first element animates
const totalDelay = initialDelay + staggerDelay * 6 // number of elements animating

export default function Hero() {
    const variants = {
        hidden: () => ({
            opacity: 0,
            filter: 'blur(10px)',
            transform: 'translateY(10px) scale(0.95)',
        }),
        visible: (custom: number) => ({
            opacity: 1,
            transform: 'translateY(0) scale(1)',
            filter: 'blur(0)',
            transition: {
                delay: custom * staggerDelay + initialDelay,
                duration: 0.5,
                ease: 'easeInOut',
            },
        }),
    }

    return (
        <div className="relative flex min-h-svh w-full flex-col items-center justify-between">
            <InteractiveGridPattern
                width={100}
                height={100}
                squares={[80, 80]}
                squaresClassName="hover:fill-muted"
                className="opacity-40 dark:opacity-30"
            />
            {/* Header */}
            <Header />

            {/* Hero Section */}
            <section className="container flex w-full flex-1 items-center justify-center overflow-hidden">
                <div className="relative flex flex-col items-center justify-center gap-6">
                    <h1 className="text-center text-2xl font-bold text-balance md:text-3xl lg:text-4xl xl:text-5xl">
                        <m.span
                            variants={variants as Variants}
                            custom={0}
                            initial="hidden"
                            animate="visible"
                        >
                            Starterkits.
                        </m.span>{' '}
                        <m.span
                            variants={variants as Variants}
                            custom={1}
                            initial="hidden"
                            animate="visible"
                        >
                            Components.
                        </m.span>{' '}
                        <m.span
                            variants={variants as Variants}
                            custom={2}
                            initial="hidden"
                            animate="visible"
                        >
                            Blocks.
                        </m.span>
                    </h1>
                    <m.p
                        variants={variants as Variants}
                        custom={3}
                        initial="hidden"
                        animate="visible"
                        className="text-muted-foreground max-w-2xl text-center text-sm font-semibold text-balance md:text-base lg:text-lg"
                    >
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
                    </m.p>
                    <div className="flex flex-col items-center gap-2 sm:flex-row">
                        <m.div
                            variants={variants as Variants}
                            custom={4}
                            initial="hidden"
                            animate="visible"
                            className="w-full sm:w-fit"
                        >
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
                        </m.div>
                        <m.div
                            variants={variants as Variants}
                            custom={5}
                            initial="hidden"
                            animate="visible"
                            className="w-full sm:w-fit"
                        >
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
                        </m.div>
                    </div>

                    {/* Faded Lines on content */}
                    <FadeLine
                        className="absolute -top-10 -left-1/4"
                        opacity={0.2}
                        fadeWidth="10%"
                        width="150%"
                        height="1px"
                        orientation="horizontal"
                        delay={0}
                    />

                    <FadeLine
                        className="absolute -bottom-10 -left-1/4"
                        opacity={0.2}
                        fadeWidth="10%"
                        width="150%"
                        height="1px"
                        orientation="horizontal"
                        delay={0.1}
                    />

                    <FadeLine
                        className="absolute -top-14 -left-1/4"
                        opacity={0.2}
                        fadeWidth="10%"
                        width="150%"
                        height="1px"
                        orientation="horizontal"
                        delay={0.2}
                    />

                    <FadeLine
                        className="absolute -bottom-14 -left-1/4"
                        opacity={0.2}
                        fadeWidth="10%"
                        width="150%"
                        height="1px"
                        orientation="horizontal"
                        delay={0.3}
                    />

                    <FadeLine
                        className="absolute -top-3/4 left-0 md:-left-10"
                        fadeWidth="15%"
                        opacity={0.2}
                        width="1px"
                        height="250%"
                        orientation="vertical"
                        delay={0.4}
                    />

                    <FadeLine
                        className="absolute -top-3/4 right-0 md:-right-10"
                        fadeWidth="15%"
                        opacity={0.2}
                        width="1px"
                        height="250%"
                        orientation="vertical"
                        delay={0.5}
                    />

                    <FadeLine
                        className="absolute -top-3/4 left-4 md:-left-14"
                        fadeWidth="15%"
                        opacity={0.2}
                        width="1px"
                        height="250%"
                        orientation="vertical"
                        delay={0.6}
                    />

                    <FadeLine
                        className="absolute -top-3/4 right-4 md:-right-14"
                        fadeWidth="15%"
                        opacity={0.2}
                        width="1px"
                        height="250%"
                        orientation="vertical"
                        delay={0.7}
                    />
                </div>
            </section>
        </div>
    )
}

interface FadeLineProps {
    className?: string
    color?: string
    fadeWidth?: string
    orientation: 'horizontal' | 'vertical'
    opacity?: number
    width: string
    height?: string
    delay?: number
}

function FadeLine({
    className = '',
    color = 'var(--foreground)',
    fadeWidth = '25%',
    orientation,
    opacity = 1,
    width,
    height,
    delay = 0,
}: FadeLineProps) {
    const gradientDirection =
        orientation === 'vertical' ? 'to bottom' : 'to right'

    const animationProps =
        orientation === 'vertical'
            ? {
                  initial: { height: 0 },
                  animate: { height },
                  transition: {
                      duration: 1.5,
                      delay: delay + totalDelay,
                      ease: 'easeOut' as const,
                  },
              }
            : {
                  initial: { width: 0 },
                  animate: { width },
                  transition: {
                      duration: 1.5,
                      delay: delay + totalDelay,
                      ease: 'easeOut' as const,
                  },
              }

    return (
        <m.span
            {...animationProps}
            className={`${className}`}
            style={{
                background: `linear-gradient(${gradientDirection}, transparent 0%, ${color} ${fadeWidth}, ${color} calc(100% - ${fadeWidth}), transparent 100%)`,
                opacity,
                width,
                height,
            }}
        />
    )
}
