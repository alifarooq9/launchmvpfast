import { cn } from '@/lib/utils'

export function PageHeaderWrapper({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <section className={cn('container-wrapper', className)} {...props}>
            {children}
        </section>
    )
}

export function PageHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div className={cn('container py-14', className)} {...props}>
            {children}
        </div>
    )
}

export function PageHeading({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <h1
            className={cn(
                'font-heading text text-3xl leading-tight tracking-tighter text-balance sm:text-4xl md:text-5xl',
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}

export function PageDescription({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
    return (
        <p
            className={cn(
                'text-muted-foreground text-base leading-tight font-light text-balance sm:text-lg',
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
}

export function PageActions({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'flex w-full flex-col items-start gap-2 sm:w-fit sm:flex-row sm:items-center sm:gap-4',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
