'use client'

import { Button } from '@/registry/default/ui/button'
import { cn } from '@/lib/utils'
import { useIsMac } from '@/registry/default/hooks/use-is-mac'

export function Search({ className }: React.ComponentProps<'button'>) {
    const isMac = useIsMac()

    return (
        <Button
            variant="secondary"
            className={cn(
                'bg-surface text-surface-foreground/60 dark:bg-card relative h-8 w-full justify-start pl-2.5 font-normal shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64',
                className
            )}
        >
            <span className="hidden lg:inline-flex">Search...</span>
            <span className="inline-flex lg:hidden">Search...</span>
            <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
                <CommandMenuKbd>{isMac ? '⌘' : 'Ctrl'}</CommandMenuKbd>
                <CommandMenuKbd className="aspect-square">K</CommandMenuKbd>
            </div>
        </Button>
    )
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<'kbd'>) {
    return (
        <kbd
            className={cn(
                "bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
                className
            )}
            {...props}
        />
    )
}
