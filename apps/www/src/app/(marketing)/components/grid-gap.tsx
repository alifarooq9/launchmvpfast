import { cn } from '@/lib/utils'

type GridGapProps = {
    className?: string
    height?: number
}

export function GridGap({ className, height }: GridGapProps) {
    return (
        <div className={cn('border-grid w-full border-y', className)}>
            <div className={`container-wrapper h-${height}`} />
        </div>
    )
}
