import { cn } from '@/lib/utils'

type GridGapProps = {
    wrappeClassName?: string
    className?: string
}

export function GridGap({ className, wrappeClassName }: GridGapProps) {
    return (
        <div className={cn('border-grid w-full border-y', wrappeClassName)}>
            <div className={cn(`container-wrapper h-4`, className)} />
        </div>
    )
}
