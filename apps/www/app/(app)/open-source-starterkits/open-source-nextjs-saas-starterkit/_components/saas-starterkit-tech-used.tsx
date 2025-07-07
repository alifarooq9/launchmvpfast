import {
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import { techStackIcons } from '@/components/tech-stack-icons'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const technologiesSelected = [
    {
        name: 'Next.js',
        fullVersion: '^14.2.1',
        description:
            'The foundation framework for building the application using the App Router.',
        icon: 'nextJs',
        link: 'https://nextjs.org/',
    },
    {
        name: 'TypeScript',
        fullVersion: '^5.4.5',
        description:
            'Strongly typed programming language enhancing JavaScript development.',
        icon: 'typescript',
        link: 'https://www.typescriptlang.org/',
    },
    {
        name: 'Tailwind CSS',
        fullVersion: '^3.4.3', // From devDependencies
        description:
            'Utility-first CSS framework for rapid and custom UI styling.',
        icon: 'tailwindcss',
        link: 'https://tailwindcss.com/',
    },
    {
        name: 'Shadcn UI', // No inherent version, CLI based
        fullVersion: 'CLI Installed',
        description:
            'Composable UI components built using Radix UI and Tailwind CSS.',
        icon: 'shadcnui',
        link: 'https://ui.shadcn.com/',
    },
    {
        name: 'Lemon Squeezy',
        fullVersion: '^2.2.0',
        description: 'JavaScript SDK for integrating Lemon Squeezy payments.',
        icon: 'lemon',
        link: 'https://lemonsqueezy.com/',
    },
    {
        name: 'Drizzle ORM', // Version less commonly emphasized like framework versions
        fullVersion: '^0.29.4',
        description:
            'Modern TypeScript ORM for type-safe SQL database interactions.',
        icon: 'drizzle',
        link: 'https://orm.drizzle.team/',
    },
    {
        name: 'NextAuth.js', // Package name is next-auth
        fullVersion: '^4.24.6',
        description:
            'Authentication solution tailored for Next.js applications.',
        icon: 'nextauth',
        link: 'https://authjs.dev/',
    },
    {
        name: 'FumaDocs',
        fullVersion: '^11.1.1', // Based on fumadocs-core
        description:
            'Content-driven documentation framework for project guides.',
        icon: 'fumadocs',
        link: 'https://fumadocs.dev/',
    },
    {
        name: 'UploadThing', // Combined Core + React info
        fullVersion: '^6.9.0', // Using core package version
        description:
            'Simplified, type-safe file uploads for modern applications.',
        icon: 'uploadthing',
        link: 'https://uploadthing.com/',
    },
]

export function SaasStarterkitTechUsed() {
    return (
        <SectionHeader>
            <SectionHeading>
                Built with a Modern Technology Stack
            </SectionHeading>
            <SectionDescription>
                Leveraging the best of the modern web development ecosystem for
                performance, developer experience, and scalability.
            </SectionDescription>
            <SectionContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
                    {technologiesSelected.map((technology, index) => {
                        const isInLastRowLg =
                            index >=
                            technologiesSelected.length -
                                (technologiesSelected.length % 4 || 4)

                        return (
                            <Link
                                href={technology.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Learn more about ${technology.name}`}
                                key={index}
                                className={cn(
                                    "focus-ring hover:bg-accent/40 dark:hover:bg-accent/15 rounded-xl p-4 transition-all md:px-6 [&_svg:not([class*='size-'])]:size-7"
                                )}
                            >
                                {techStackIcons[technology.icon].icon}
                                <h3 className="mt-2 text-sm font-semibold tracking-tight">
                                    {technology.name}
                                </h3>
                                <p className="text-muted-foreground mt-1 text-sm">
                                    {technology.description}
                                </p>
                            </Link>
                        )
                    })}
                </div>
            </SectionContent>
        </SectionHeader>
    )
}
