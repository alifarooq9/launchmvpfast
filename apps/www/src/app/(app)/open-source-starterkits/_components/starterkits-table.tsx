import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { urls } from '@/config/urls'
import { ArrowRightIcon } from 'lucide-react'
import Link from 'next/link'

type Starterkit = {
    id: string
    name: string
    description: string
    techStack: string[]
    imageUrl: string
    buttonText: string
    buttonUrl: string
}

const starterkits: Starterkit[] = [
    {
        id: 'saas-v1-nextjs',
        name: 'SaaS Next.js Starterkit',
        description:
            'Open-source Next.js SaaS starter kit with built-in authentication, database ORM, styling, landing page, dashboard, and more.',
        techStack: [
            'nextJs',
            'shadcnui',
            'uploading',
            'stripe',
            'drizzle',
            'tailwindcss',
            'typescript',
        ],
        imageUrl: '/images/starterkits/saas-v1-nextjs.png',
        buttonText: 'Clone',
        buttonUrl: urls.app.starterkits.saasNextjs,
    },
]

export default function StarterkitsTable() {
    return (
        <div className="container-wrapper grid flex-1 grid-cols-3">
            {starterkits.map((starterkit, index) => (
                <StarterkitsTableItem
                    key={starterkit.id}
                    starterkit={starterkit}
                    index={index}
                />
            ))}
            <div />
        </div>
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

export function StarterkitsTableItem({
    starterkit,
    index,
}: {
    starterkit: Starterkit
    index: number
}) {
    return (
        <Link
            href={starterkit.buttonUrl}
            className="border-grid hover:bg-accent/40 dark:hover:bg-accent/15 focus-ring border-r transition-all last:border-r-0 focus:border-transparent"
        >
            <div className="col-span-1 flex flex-col gap-2 p-4 md:px-6">
                <div className="bg-foreground/10 aspect-video w-full" />
                <h2 className="font-heading text-xl">{starterkit.name}</h2>
                <p className="text-muted-foreground font-light">
                    {starterkit.description}
                </p>
            </div>
            <ul className="border-grid flex flex-wrap gap-x-4 gap-y-2 border-t p-4 md:px-6">
                {starterkit.techStack.map((tech, index) => (
                    <li
                        key={index}
                        className="text-foreground flex shrink-0 items-center gap-1 text-sm [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5"
                    >
                        {techStackIcons[tech].icon}
                        {techStackIcons[tech].name}
                    </li>
                ))}
            </ul>
        </Link>
    )
}
