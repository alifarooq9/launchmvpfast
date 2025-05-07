import { cn } from '@/lib/utils'
import Link from 'next/link'

type PageHeaderWrapperProps = {
    fullHeight?: boolean
} & React.HTMLAttributes<HTMLDivElement>

export function PageHeaderWrapper({
    className,
    children,
    fullHeight,
    ...props
}: PageHeaderWrapperProps) {
    return (
        <section
            className={cn(
                'container-wrapper flex',
                fullHeight && 'min-h-[calc(100svh-3rem)]',
                className
            )}
            {...props}
        >
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
                'text-muted-foreground text-base leading-tight font-light text-balance sm:text-xl',
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
                'mt-4 flex w-full flex-col items-start gap-2 sm:w-fit sm:flex-row sm:items-center sm:gap-4',
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}

type AnnouncementProps = {
    className?: string
    url: string
    text: string
    actionText: string
}

export function Announcement({
    className,
    url,
    text,
    actionText,
}: AnnouncementProps) {
    return (
        <Link
            href={url}
            className={cn(
                'focus-ring border-border relative mb-4 flex w-full max-w-[30rem] items-center gap-2 border',
                className
            )}
        >
            <div className="bg-accent dark:bg-accent/30 m-0.5 flex w-full flex-col items-start justify-between gap-0.5 px-4 py-2 md:flex-row md:items-center md:gap-3">
                <p className="text-sm font-medium">{text}</p>
                <p className="text-sm font-semibold">{actionText}</p>
            </div>
        </Link>
    )
}
