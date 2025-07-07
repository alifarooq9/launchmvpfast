import {
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
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
        <SectionHeader>
            <SectionHeading>
                What&apos;s Included:{' '}
                <span className="hidden md:block">
                    Your Production-Ready Foundation
                </span>
            </SectionHeading>
            <SectionDescription>
                This Next.js SaaS starter kit is packed with features designed
                to accelerate your development workflow
            </SectionDescription>

            <SectionContent className="border-border divide-border gap-0 divide-y rounded-xl border">
                <WhatsIncludedCard
                    title="Core Functionality"
                    list={whatsIncluded.core}
                />

                <WhatsIncludedCard
                    title="User Experience & Dashboards"
                    list={whatsIncluded.userExperience}
                />

                <WhatsIncludedCard
                    title="Growth & Content Features"
                    list={whatsIncluded.growthContent}
                />
            </SectionContent>
        </SectionHeader>
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
        <div>
            <h3 className="border-b p-4 text-base font-bold tracking-tight">
                {title}:
            </h3>

            <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2">
                {list.map((item, index) => (
                    <p key={index} className={cn('text-sm')}>
                        <strong className="font-semibold">{item.title}</strong>
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
