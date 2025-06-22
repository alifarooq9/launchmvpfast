import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
    "inline-flex items-center relative justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive group",
    {
        variants: {
            variant: {
                default:
                    'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
                destructive:
                    'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
                outline:
                    'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
                secondary:
                    'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
                ghost: 'hover:bg-accent hover:text-accent-foreground',
                link: 'text-primary underline-offset-4 hover:underline',
                defaultWithOutline:
                    'bg-transparent text-primary-foreground border border-border hover:border-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 dark:text-primary-foreground before:-z-10 before:content-[""] before:absolute before:top-1/2 before:left-1/2 dark:hover:border-foreground before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%-6px)] before:h-[calc(100%-6px)] before:rounded-full before:bg-primary  before:transition-colors duration-500',
                secondaryWithOutline:
                    'bg-transparent text-secondary-foreground border border-border hover:border-foreground dark:bg-input/30 dark:border-input dark:hover:border-primary dark:hover:bg-input/50 dark:text-secondary-foreground before:-z-10 before:content-[""] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-[calc(100%-6px)] before:h-[calc(100%-6px)] before:rounded-full before:bg-secondary before:transition-colors duration-500',
            },
            size: {
                default: 'h-9 px-4 py-2 has-[>svg]:px-3',
                sm: 'h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5',
                lg: 'h-10 rounded-full px-6 has-[>svg]:px-4',
                xl: 'h-12 rounded-full px-8 has-[>svg]:px-6',
                icon: 'size-9',
                iconSm: 'size-8',
                iconXsm: 'size-5',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
)

function Button({
    className,
    variant,
    size,
    asChild = false,
    ...props
}: React.ComponentProps<'button'> &
    VariantProps<typeof buttonVariants> & {
        asChild?: boolean
    }) {
    const Comp = asChild ? Slot : 'button'

    return (
        <Comp
            data-slot="button"
            className={cn(buttonVariants({ variant, size, className }))}
            {...props}
        />
    )
}

export { Button, buttonVariants }
