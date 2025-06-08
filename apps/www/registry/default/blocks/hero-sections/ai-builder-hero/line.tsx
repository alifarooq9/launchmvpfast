import { cn } from '@/lib/utils'

export default function Line({
    className,
    ...props
}: React.ComponentProps<'div'>) {
    return (
        <span
            className={cn('border-border relative w-full border-t', className)}
            {...props}
        />
    )
}
