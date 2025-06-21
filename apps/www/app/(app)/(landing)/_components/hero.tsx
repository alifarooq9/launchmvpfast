import { BorderTrail } from '@/components/ui/border-trail'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export function Hero() {
    return (
        <section className="container flex flex-col items-center gap-6 pt-16">
            <div className="bg-muted/50 border-border relative flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold">
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
            </div>
            <h1 className="font-heading text-foreground/70 max-w-3xl text-center text-6xl font-semibold text-balance">
                <span className="text-foreground">Launch</span> your{' '}
                <span className="text-foreground">MVP</span> in{' '}
                <span className="text-foreground">days</span>, not months
            </h1>
            <p className="text-muted-foreground max-w-2xl text-center text-xl text-balance">
                <span className="text-foreground font-bold">Accelerate</span>{' '}
                your <span className="text-foreground font-bold">MVP</span> with{' '}
                <span className="text-foreground font-bold">free</span>,{' '}
                <span className="text-foreground font-bold">starter kits</span>{' '}
                and reusable{' '}
                <span className="text-foreground font-bold">components</span>—go
                from <span className="text-foreground font-bold">idea</span> to{' '}
                <span className="text-foreground font-bold">prototype</span> in{' '}
                <span className="text-foreground font-bold">days</span>.
            </p>
            <div className="flex items-center justify-between gap-4">
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
            </div>
        </section>
    )
}
