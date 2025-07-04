import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

type SuggestProps = {
    title: string
    buttonText: string
    buttonLink: string
} & React.HTMLAttributes<HTMLDivElement>

export function Suggest({
    title,
    buttonText,
    buttonLink,
    className,
    ...props
}: SuggestProps) {
    return (
        <section
            className={cn(
                'container-wrapper flex min-h-40 flex-col items-center justify-center gap-2 p-4 md:px-6',
                className
            )}
            {...props}
        >
            <h2 className="text-center text-2xl font-semibold tracking-tight">
                {title}
            </h2>
            <Link
                href={buttonLink}
                className={buttonVariants({ variant: 'outline', size: 'sm' })}
                target="_blank"
            >
                {buttonText}
            </Link>
        </section>
    )
}
