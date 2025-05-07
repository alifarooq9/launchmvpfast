import { cn } from '@/lib/utils'

export function SectionHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className="border-grid border-b">
            <div className="container-wrapper">
                <div className={cn('container py-4', className)} {...props}>
                    {children}
                </div>
            </div>
        </div>
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
                'font-heading flex items-center gap-2 text-xl sm:text-2xl',
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
            className={cn('text-muted-foreground text-base', className)}
            {...props}
        >
            {children}
        </p>
    )
}
