'use client'

import { Button, buttonVariants } from '@/components/ui/button'
import { FlickeringGrid } from '@/components/ui/flickering-grid'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { CornerRightUpIcon } from 'lucide-react'
import Link from 'next/link'

export default function ContactHero() {
    return (
        <section className="grid min-h-[85vh] w-full lg:grid-cols-2">
            <div className="flex items-center justify-center px-4 py-8">
                <div className="bg-muted/80 dark:bg-muted/50 flex h-full w-full flex-col items-center justify-center rounded-xl p-6">
                    <Header />
                    <div className="flex max-w-2xl flex-1 flex-col items-start justify-center gap-6">
                        <h1 className="text-center text-3xl font-bold text-balance sm:text-4xl md:text-5xl lg:text-left xl:text-6xl">
                            Connect with the Haiti Drone Cooperative
                        </h1>
                        <p className="text-muted-foreground text-center text-base font-medium sm:text-lg md:text-xl lg:text-left">
                            <span className="text-foreground">Connect</span>{' '}
                            with our revolutionary cooperative movement. Get{' '}
                            <span className="text-foreground">
                                investment support
                            </span>{' '}
                            , partnerships, community engagement, and build{' '}
                            <span className="text-foreground">
                                shared ownership
                            </span>{' '}
                            of transformative technology.
                        </p>

                        <ContactForm />

                        <ContactInfo />
                        
                        <div className="w-full pt-4">
                            <p className="text-center text-sm text-muted-foreground lg:text-left">
                                Use the detailed contact form below for specific inquiries, or reach out directly using the contact information provided.
                            </p>
                        </div>
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
                Haiti Drone Cooperative
            </Link>
            <Link
                href="/invest"
                className={cn(
                    buttonVariants({ size: 'sm', variant: 'outline' })
                )}
            >
                Invest Now
            </Link>
        </header>
    )
}

function ContactForm() {
    return (
        <div className="flex w-full flex-col gap-2 md:max-w-4/5">
            <div className="flex items-center">
                <Input
                    placeholder="Enter your email for quick contact"
                    className="h-10 rounded-r-none md:h-14"
                />
                <Button className="h-10 cursor-pointer rounded-l-none border-l-0 md:h-14">
                    <span className="hidden sm:block">Get Started</span>
                    <CornerRightUpIcon className="h-4 w-4" />
                </Button>
            </div>
            <p className="text-xs text-muted-foreground">
                Or use the detailed contact form below for specific inquiries
            </p>
        </div>
    )
}

function ContactInfo() {
    return (
        <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-6 lg:justify-start">
            <div className="flex items-center gap-2">
                <span className="text-2xl">📧</span>
                <span className="text-sm text-muted-foreground">General Inquiries</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-2xl">💼</span>
                <span className="text-sm text-muted-foreground">Investment Support</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                <span className="text-sm text-muted-foreground">Partnerships</span>
            </div>
            <div className="flex items-center gap-2">
                <span className="text-2xl">🛠️</span>
                <span className="text-sm text-muted-foreground">Technical Support</span>
            </div>
        </div>
    )
}
