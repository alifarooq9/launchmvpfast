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
import { techStackIcons } from '@/components/tech-stack-icons'

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
                    <strong className="font-medium">
                        Starter kits, Reusable Components, and Modular Blocks
                    </strong>
                </p>
                <TechStackDisplay
                    skills={[
                        'nextJs',
                        'shadcnui',
                        'uploadthing',
                        'nextauth',
                        'stripe',
                        'tailwindcss',
                        'typescript',
                        'drizzle',
                        'lemon',
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
                            <StarIcon className="text-muted-foreground fill-muted-foreground size-4 transition-all duration-300 group-hover:fill-yellow-300 group-hover:text-yellow-300" />
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

export const TechStackDisplay = ({
    skills,
    className,
}: {
    skills: string[]
    className?: string
}) => {
    return (
        <section
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
                                <span className="transform transition-transform duration-300 hover:rotate-12 [&_svg:not([class*='size-'])]:size-9">
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
        </section>
    )
}
