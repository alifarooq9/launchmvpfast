import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'
import { Ripple } from '@/components/ui/ripple'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { urls } from '@/config/urls'
import { StarIcon } from 'lucide-react'
import { NumberTicker } from '@/components/ui/number-ticker'

async function getGitHubStars() {
    try {
        const response = await fetch(
            'https://api.github.com/repos/alifarooq9/launchmvpfast',
            {
                next: {
                    revalidate: 8400,
                },
            }
        )
        if (!response?.ok) {
            return null
        }
        const json = await response.json()
        const stars = parseInt(json.stargazers_count)
        return stars ?? 0
    } catch {
        return 0
    }
}

export async function Features() {
    const stars = await getGitHubStars()

    return (
        <section className="container-wrapper from-foreground/5 to-background/15 relative h-full bg-gradient-to-b py-20">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <p className="text-muted-foreground">Launch in days with</p>
                <p className="font-heading mx-auto mt-4 max-w-md text-center text-4xl tracking-tighter text-balance">
                    <strong className="font-semibold">
                        Starter kits, Reusable Components, and Modular Blocks
                    </strong>
                </p>
                <TechStackDisplay
                    skills={[
                        'nextJs',
                        'shadcnui',
                        'uploading',
                        'stripe',
                        'tailwindcss',
                        'typescript',
                        'drizzle',
                    ]}
                />

                <div className="pt-8">
                    <Link
                        className={cn(
                            buttonVariants({
                                variant: 'outline',
                                size: 'lg',
                            }),
                            'group'
                        )}
                        target="_blank"
                        href={urls.socials.gh}
                    >
                        <Icons.gitHub className="size-4" />
                        <span>Star on GitHub</span>{' '}
                        <div className="ml-2 flex items-center gap-1 text-sm md:flex">
                            <StarIcon className="text-muted-foreground size-4 fill-none transition-all duration-300 group-hover:fill-yellow-300 group-hover:text-yellow-300" />
                            <NumberTicker
                                value={stars as number}
                                className="font-medium"
                            />
                        </div>
                    </Link>
                </div>

                <Ripple
                    mainCircleSize={400}
                    mainCircleOpacity={0.2}
                    className="opacity-70"
                />
            </div>
        </section>
    )
}

type TechStackIconType = {
    [key: string]: {
        name: string
        icon: any
    }
}
export const techStackIcons: TechStackIconType = {
    nextJs: {
        name: 'Nextjs',
        icon: <Icons.nextJS className="h-10 w-10" />,
    },
    shadcnui: {
        name: 'ShadcnUI',
        icon: <Icons.shadcnui className="h-10 w-10" />,
    },
    uploading: {
        name: 'Uploading',
        icon: <Icons.uploadthing className="h-10 w-10" />,
    },
    stripe: {
        name: 'Stripe',
        icon: <Icons.stripe className="h-10 w-10" />,
    },
    tailwindcss: {
        name: 'Tailwindcss',
        icon: <Icons.tailwindcss className="h-10 w-10" />,
    },
    typescript: {
        name: 'Typescript',
        icon: <Icons.typescript className="h-10 w-10" />,
    },
    drizzle: {
        name: 'Drizzle',
        icon: <Icons.drizzle className="h-10 w-10" />,
    },
}

export const TechStackDisplay = ({
    skills,
    className,
}: {
    skills: string[]
    className?: string
}) => {
    return (
        <div
            className={cn(
                'mt-3 flex max-w-4xl flex-wrap items-center justify-center gap-7',
                className
            )}
        >
            {skills.map((icon) => {
                return (
                    <TooltipProvider delayDuration={50} key={icon}>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <span className="transform transition-transform duration-300 hover:rotate-12">
                                    {techStackIcons[icon].icon}
                                </span>
                            </TooltipTrigger>
                            <TooltipContent>
                                {techStackIcons[icon].name}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                )
            })}
        </div>
    )
}
