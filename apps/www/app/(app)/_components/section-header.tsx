import { cn } from '@/lib/utils'

export function SectionHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section
            className={cn(
                'container flex flex-col items-center justify-center gap-2 py-4',
                className
            )}
            {...props}
        >
            {children}
        </section>
    )
}

export function SectionHeading({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h2
            className={cn(
                'text-foreground max-w-3xl text-center text-2xl font-semibold text-balance sm:text-3xl',
                className
            )}
            {...props}
        >
            {children}
        </h2>
    )
}

export function SectionDescription({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                'text-muted-foreground max-w-xl text-center text-balance md:text-lg',
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export function SectionContent({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'mt-14 flex w-full flex-col items-center gap-4',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
