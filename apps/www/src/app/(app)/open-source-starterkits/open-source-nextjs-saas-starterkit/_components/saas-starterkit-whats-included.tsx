import { GridGap } from '@/app/(app)/_components/grid-gap'
import { cn } from '@/lib/utils'

type WhatsIncludedItem = {
    title: string
    description: string
}

type WhatsIncludedCategory = {
    [key: string]: WhatsIncludedItem[]
}

const whatsIncluded: WhatsIncludedCategory = {
    core: [
        {
            title: 'Authentication (NextAuth.js)',
            description:
                'Secure user sign-up, sign-in, and session management ready out-of-the-box.',
        },
        {
            title: 'Database ORM (Drizzle ORM)',
            description:
                'Type-safe SQL database interactions for reliable data handling.',
        },
        {
            title: 'Payments (Lemon Squeezy)',
            description:
                'Integrated components and hooks for easy subscription and payment processing.',
        },
        {
            title: 'Organization Management',
            description:
                'Foundation for team features like invitations and basic roles.',
        },
        {
            title: 'File Uploading (UploadThing)',
            description:
                'Type-safe and easy handling for user file uploads (avatars, documents, etc.).',
        },
    ],
    userExperience: [
        {
            title: 'Application Dashboard',
            description:
                'A pre-built, protected dashboard area for logged-in users.',
        },
        {
            title: 'Admin Dashboard',
            description:
                'Basic structure for an administrative interface to manage the application.',
        },
        {
            title: 'Profile & Settings Pages',
            description:
                'Essential pages for users to manage their account details.',
        },
        {
            title: 'Feedback System',
            description:
                'Components included to easily collect user feedback within the app.',
        },
    ],
    growthContent: [
        {
            title: 'Landing & Marketing Pages',
            description:
                'Beautiful, responsive pages built with Tailwind CSS to showcase your product.',
        },
        {
            title: 'Documentation (FumaDocs)',
            description:
                'Integrated documentation site to effectively guide your users.',
        },
        {
            title: 'Blog (MDX Support)',
            description:
                'Publish content easily using MDX for marketing and updates.',
        },
        {
            title: 'Changelog Page',
            description:
                'Keep users informed about new features and improvements.',
        },
        {
            title: 'Waitlist Component',
            description:
                'Capture interest and build an audience before launching.',
        },
    ],
}

export function SaasStarterkitWhatsIncluded() {
    return (
        <section>
            <div className="border-grid border-b">
                <div className="container-wrapper">
                    <div className="container py-4">
                        <h2 className="font-heading text-2xl">
                            What's Included: Your Production-Ready Foundation
                        </h2>
                        <p className="text-muted-foreground">
                            This Next.js SaaS starter kit is packed with
                            features designed to accelerate your development
                            workflow
                        </p>
                    </div>
                </div>
            </div>

            <WhatsIncludedCard
                title="Core Functionality"
                list={whatsIncluded.core}
            />

            <GridGap className="h-10" />

            <WhatsIncludedCard
                title="User Experience & Dashboards"
                list={whatsIncluded.userExperience}
            />

            <GridGap className="h-10" />

            <WhatsIncludedCard
                title="Growth & Content Features"
                list={whatsIncluded.growthContent}
            />
        </section>
    )
}

function WhatsIncludedCard({
    title,
    list,
}: {
    title: string
    list: WhatsIncludedItem[]
}) {
    return (
        <div className="container-wrapper grid grid-cols-[1fr_2.5rem_2fr]">
            <div className="flex p-4 md:px-6">
                <h3 className="font-heading text-lg">{title}</h3>
            </div>

            <div className="border-grid h-full border-x" />

            <div className="grid grid-cols-2">
                {list.map((item, index) => (
                    <p
                        key={index}
                        className={cn(
                            'border-grid border-r border-b p-4 text-sm last:border-b-0 md:px-4',
                            index % 2 !== 0
                                ? 'border-r-0'
                                : '[&:nth-last-child(2)]:border-b-0'
                        )}
                    >
                        <strong className="font-heading">{item.title}</strong>
                        <span className="mx-1">—</span>
                        <span className="text-muted-foreground">
                            {item.description}
                        </span>
                    </p>
                ))}
            </div>
        </div>
    )
}
