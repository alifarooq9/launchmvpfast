import { cn } from '@/lib/utils'
import { LockIcon } from 'lucide-react'
import { forwardRef } from 'react'

export const MockBrowser = forwardRef<
    HTMLDivElement,
    {
        children?: React.ReactNode
        url: string
    }
>(({ children, url }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                'border-border pointer-events-none rounded-xl border select-none'
            )}
        >
            <div className="flex items-center justify-between gap-1.5 p-4">
                <div className="flex items-center gap-1.5">
                    <div className="bg-muted size-2 rounded-full" />
                    <div className="bg-muted size-2 rounded-full" />
                    <div className="bg-muted size-2 rounded-full" />
                </div>

                <div className="text-muted-foreground flex items-center gap-1 text-xs font-medium">
                    <LockIcon className="size-3" /> {url}
                </div>

                <div />
            </div>

            <div className="truncate p-4 pt-0 font-mono text-sm font-medium">
                {children}
            </div>
        </div>
    )
})

MockBrowser.displayName = 'MockBrowser'
