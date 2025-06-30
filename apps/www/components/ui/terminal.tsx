import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

export const Terminal = forwardRef<
    HTMLDivElement,
    {
        children?: React.ReactNode
        className?: string
    }
>(({ children, className }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'border-border pointer-events-none rounded-xl border select-none',
                className
            )}
        >
            <div className="flex items-center gap-1.5 p-4">
                <div className="bg-muted size-2 rounded-full" />
                <div className="bg-muted size-2 rounded-full" />
                <div className="bg-muted size-2 rounded-full" />
            </div>

            <div className="truncate p-4 pt-0 font-mono text-sm font-medium">
                {children}
            </div>
        </div>
    )
})

Terminal.displayName = 'Terminal'
