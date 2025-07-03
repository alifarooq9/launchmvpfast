import { BorderTrail } from '@/components/ui/border-trail'
import { cn } from '@/lib/utils'
import Link from 'next/link'
import { forwardRef } from 'react'

type PageHeaderWrapperProps = {
    as?: React.ElementType
} & React.HTMLAttributes<HTMLDivElement>

export function PageHeaderWrapper({
    className,
    children,
    as: Component = 'div',
    ...props
}: PageHeaderWrapperProps) {
    return (
        <Component
            className={cn(
                'relative container flex flex-col items-center gap-6',

                className
            )}
            {...props}
        >
            {children}
        </Component>
    )
}

export function PageContainer({
    className,
    children,
    as: Component = 'div',
    ...props
}: PageHeaderWrapperProps) {
    return (
        <Component
            className={cn('relative flex flex-1 flex-col gap-16', className)}
            {...props}
        >
            {children}
        </Component>
    )
}

type PageHeaderProps = {
    as?: React.ElementType
} & React.HTMLAttributes<HTMLDivElement>

export function PageHeader({
    className,
    children,
    as: Component = 'section',
    ...props
}: PageHeaderProps) {
    return (
        <Component
            className={cn(
                'relative container flex flex-col items-center gap-6',
                className
            )}
            {...props}
        >
            {children}
        </Component>
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
                'font-heading text-foreground max-w-3xl text-center text-4xl font-semibold text-balance sm:text-5xl lg:text-6xl',
                className
            )}
            {...props}
        >
            {children}
        </h1>
    )
}
export const PageDescription = forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
    return (
        <p
            ref={ref}
            className={cn(
                'text-muted-foreground max-w-2xl text-center font-medium text-balance md:text-lg lg:text-xl',
                className
            )}
            {...props}
        >
            {children}
        </p>
    )
})

PageDescription.displayName = 'PageDescription'

export function PageActions({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'flex flex-col items-center justify-between gap-4 sm:flex-row',
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
                'bg-muted/50 border-border focus-ring relative flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-semibold',
                className
            )}
        >
            <div className="relative size-2">
                <div className="bg-foreground size-2 rounded-full" />
                <div className="bg-foreground absolute inset-0 size-2 animate-ping rounded-full" />
            </div>
            <p>
                {text} <strong className="ml-1 font-bold">{actionText}</strong>
            </p>

            <BorderTrail
                style={{
                    boxShadow:
                        '0px 0px 60px 30px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                }}
                size={20}
            />
        </Link>
    )
}
