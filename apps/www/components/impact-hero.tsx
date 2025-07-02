'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { CornerRightUpIcon } from 'lucide-react'
import Link from 'next/link'
import { motion as m } from 'motion/react'
import { useEffect, useState } from 'react'

const staggerDelay = 0.3
const initialDelay = 0.2

const variants = {
    hidden: () => ({
        opacity: 0,
        filter: 'blur(10px)',
        transform: 'translateY(10px) translateX(-20px) scale(0.95)',
    }),
    visible: (custom: number) => ({
        opacity: 1,
        transform: 'translateY(0) translateX(0) scale(1)',
        filter: 'blur(0)',
        transition: {
            delay: custom * staggerDelay + initialDelay,
            duration: 0.4,
            ease: [0.4, 0.0, 0.2, 1] as const,
        },
    }),
}

type ImpactMetric = {
    label: string
    value: number
    unit: string
    description: string
    icon: string
}

const impactMetrics: ImpactMetric[] = [
    {
        label: 'Active Drones',
        value: 24,
        unit: 'today',
        description: 'Currently deployed across Haiti',
        icon: '🚁'
    },
    {
        label: 'Investor Returns',
        value: 127,
        unit: 'this month',
        description: 'Cooperative members earning',
        icon: '💰'
    },
    {
        label: 'Missions Completed',
        value: 456,
        unit: 'this week',
        description: 'Successful deliveries',
        icon: '📦'
    },
    {
        label: 'Communities Served',
        value: 18,
        unit: 'regions',
        description: 'Remote areas accessible',
        icon: '🏘️'
    },
    {
        label: 'Local Jobs',
        value: 73,
        unit: 'positions',
        description: 'Training & employment',
        icon: '👥'
    },
    {
        label: 'CO₂ Saved',
        value: 2840,
        unit: 'kg',
        description: 'Environmental impact',
        icon: '🌱'
    }
]

export default function ImpactHero() {
    return (
        <section className="grid min-h-svh w-full lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-4">
                <div className="bg-muted/80 dark:bg-muted/50 flex h-full w-full flex-col items-center justify-center rounded-xl p-4">
                    <Header />
                    <div className="flex max-w-2xl flex-1 flex-col items-start justify-center gap-4">
                        <m.h1
                            initial="hidden"
                            animate="visible"
                            custom={0}
                            variants={variants}
                            className="text-center text-2xl font-bold text-balance sm:text-3xl md:text-4xl lg:text-left xl:text-5xl"
                        >
                            Real-Time Impact Dashboard
                        </m.h1>
                        <m.p
                            initial="hidden"
                            animate="visible"
                            custom={1}
                            variants={variants}
                            className="text-muted-foreground text-center text-sm font-medium sm:text-base md:text-lg lg:text-left"
                        >
                            See what our{' '}
                            <span className="text-foreground">
                                drones and community
                            </span>{' '}
                            are accomplishing{' '}
                            <span className="text-foreground">
                                right now
                            </span>{' '}
                            across Haiti.
                        </m.p>

                        <SignupForm />

                        <ImpactMetrics />
                    </div>
                </div>
            </div>
            <div className="relative hidden place-content-center overflow-hidden lg:block">
                <FlickeringGrid
                    className="absolute inset-0 z-0 size-full"
                    squareSize={4}
                    gridGap={6}
                    color="#444444"
                    maxOpacity={0.5}
                    flickerChance={0.4}
                />
            </div>
        </section>
    )
}

function Header() {
    return (
        <header className="flex h-12 w-full items-center justify-between">
            <Link
                href="/"
                className="focus-visible:border-ring focus-visible:ring-ring/50 flex text-lg font-bold outline-none focus-visible:ring-[3px]"
            >
                Drone Zoe
            </Link>
            <Link
                href="/invest"
                className={cn(
                    buttonVariants({ size: 'sm', variant: 'outline' })
                )}
            >
                Join Co-op
            </Link>
        </header>
    )
}

function SignupForm() {
    return (
        <m.div
            initial="hidden"
            animate="visible"
            custom={2}
            variants={variants}
            className="flex w-full flex-col gap-2 md:max-w-4/5"
        >
            <div className="flex items-center">
                <Input
                    placeholder="Enter your email to get updates"
                    className="h-10 rounded-r-none md:h-14"
                />
                <Button className="h-10 cursor-pointer rounded-l-none border-l-0 md:h-14">
                    <span className="hidden sm:block">Stay Updated</span>
                    <CornerRightUpIcon className="h-4 w-4" />
                </Button>
            </div>
        </m.div>
    )
}

function ImpactMetrics() {
    return (
        <div className="mt-8 w-full">
            <m.h3
                initial="hidden"
                animate="visible"
                custom={3}
                variants={variants}
                className="text-lg font-semibold mb-4 text-center lg:text-left"
            >
                Live Impact Metrics
            </m.h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {impactMetrics.map((metric, index) => (
                    <ImpactCard key={metric.label} metric={metric} index={index} />
                ))}
            </div>
        </div>
    )
}

function ImpactCard({ metric, index }: { metric: ImpactMetric; index: number }) {
    const [animatedValue, setAnimatedValue] = useState(0)

    useEffect(() => {
        const duration = 2000
        const steps = 60
        const increment = metric.value / steps
        let current = 0

        const timer = setInterval(() => {
            current += increment
            if (current >= metric.value) {
                setAnimatedValue(metric.value)
                clearInterval(timer)
            } else {
                setAnimatedValue(Math.floor(current))
            }
        }, duration / steps)

        return () => clearInterval(timer)
    }, [metric.value])

    return (
        <m.div
            initial="hidden"
            animate="visible"
            custom={4 + index}
            variants={variants}
            className="flex flex-col items-center justify-center p-3 border rounded-lg bg-card/50 hover:bg-card transition-colors"
        >
            <div className="text-2xl mb-2">{metric.icon}</div>
            <div className="text-center">
                <div className="text-xl font-bold font-heading">
                    {animatedValue.toLocaleString()}
                </div>
                <div className="text-xs text-muted-foreground mb-1">
                    {metric.unit}
                </div>
                <h4 className="text-sm font-medium mb-1">{metric.label}</h4>
                <p className="text-xs text-muted-foreground leading-tight">
                    {metric.description}
                </p>
            </div>
        </m.div>
    )
}
