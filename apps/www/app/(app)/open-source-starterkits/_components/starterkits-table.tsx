import {
    SectionDescription,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import { techStackIcons } from '@/components/tech-stack-icons'
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
        buttonText: 'Clone',
        buttonUrl: urls.app.starterkits.saasNextjs.base,
    },
]

export default function StarterkitsTable() {
    return (
        <section className="container-wrapper grid flex-1 grid-cols-1 md:grid-cols-[1fr_2.5rem_1fr]">
            <div className="container border-b py-4 md:border-b-0">
                <SectionHeading>SaaS Starter Kits</SectionHeading>
                <SectionDescription className="text-muted-foreground">
                    SaaS starter kits to help you build your SaaS MVP faster.
                </SectionDescription>
            </div>

            <div className="hidden h-full border-x md:block" />

            {starterkits.map((starterkit) => (
                <StarterkitsTableItem
                    key={starterkit.id}
                    starterkit={starterkit}
                />
            ))}
        </section>
    )
}

export function StarterkitsTableItem({
    starterkit,
}: {
    starterkit: Starterkit
}) {
    return (
        <Link
            href={starterkit.buttonUrl}
            className="border-grid hover:bg-accent/40 dark:hover:bg-accent/15 focus-ring transition-all focus:border-transparent"
        >
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src={starterkit.imageUrl}
                    fill
                    alt={starterkit.name}
                    sizes="(min-width: 768px) 50vw, 100vw"
                    placeholder="blur"
                    blurDataURL="/starterkits/saas-v1/landing.png"
                />
            </div>

            <div className="col-span-1 flex flex-col gap-2 p-4 md:px-6">
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
