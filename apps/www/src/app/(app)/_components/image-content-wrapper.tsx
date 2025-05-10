import { cn } from '@/lib/utils'

export function ImageContentWrapper({
    children,
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(`bg-accent dark:bg-accent/40 p-2`, className)}
            {...props}
        >
            <div className="bg-background border-input flex items-center justify-center overflow-hidden rounded-[0.8rem] border">
                {children}
            </div>
        </div>
    )
}
