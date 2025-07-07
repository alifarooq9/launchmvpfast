import { techStackIcons } from '@/components/tech-stack-icons'
import { buttonVariants } from '@/components/ui/button'
import { urls } from '@/config/urls'
import Image from 'next/image'
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
            'nextauth',
            'uploadthing',
            'lemon',
            'drizzle',
            'tailwindcss',
            'typescript',
        ],
        imageUrl: '/starterkits/saas-v1/landing.png',
        buttonText: 'Get Starter-kit - (Free)',
        buttonUrl: urls.app.starterkits.saasNextjs.base,
    },
]

export default function StarterkitsTable() {
    return (
        <section className="container">
            <div className="grid grid-cols-1 gap-4">
                {starterkits.map((starterkit, index) => (
                    <StarterkitsTableItem
                        key={starterkit.id + index}
                        starterkit={starterkit}
                    />
                ))}
            </div>
        </section>
    )
}

export function StarterkitsTableItem({
    starterkit,
}: {
    starterkit: Starterkit
}) {
    return (
        <div className="grid w-full grid-cols-2 gap-8">
            <div className="flex flex-col justify-center gap-4">
                <p>
                    <strong className="text-muted-foreground font-semibold">
                        Starter-kit
                    </strong>
                </p>
                <h2 className="text-2xl font-semibold">{starterkit.name}</h2>
                <p className="text-foreground/90 text-base">
                    {starterkit.description}
                </p>
                <ul className="border-grid flex flex-wrap gap-x-4 gap-y-2 py-4">
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
                <Link
                    href={starterkit.buttonUrl}
                    className={buttonVariants({ className: 'w-fit' })}
                >
                    {starterkit.buttonText}
                </Link>
            </div>
            <div className="border-border relative aspect-video overflow-hidden rounded-xl border">
                <Image
                    src={starterkit.imageUrl}
                    alt={starterkit.name}
                    fill
                    className="object-cover"
                    quality={100}
                />
            </div>
        </div>
    )
}
