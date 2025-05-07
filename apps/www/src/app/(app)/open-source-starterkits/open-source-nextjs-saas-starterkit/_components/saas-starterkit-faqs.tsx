import { GridGap } from '@/app/(app)/_components/grid-gap'
import {
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from '@/components/ui/accordion'

type CategorizedFaqItem = {
    question: string
    answer: string
}

type CategorizedFaqs = {
    [key: string]: CategorizedFaqItem[]
}

const categorizedFaqs: CategorizedFaqs = {
    general: [
        {
            question: 'Is this Next.js starter kit truly free and open source?',
            answer: "Yes, absolutely! This starter kit is released under the MIT license. It's completely free for both personal and commercial projects. You can freely use, modify, fork, and build upon it without any hidden costs or restrictions.",
        },
        {
            question:
                'Who is the ideal user for this Next.js SaaS starter kit?',
            answer: "This kit is perfect for developers, startups, and entrepreneurs looking to rapidly build and launch a Minimum Viable Product (MVP) or a full-fledged SaaS application using Next.js. It's designed to save significant development time on foundational features.",
        },
        {
            question:
                'How does using this starter kit compare to building a Next.js SaaS app from scratch?',
            answer: 'Using this starter kit saves you potentially weeks or even months of development time. You skip the setup and integration of core functionalities like authentication, database connections, payment APIs, basic dashboards, and component libraries, allowing you to focus directly on your unique application features.',
        },
        {
            question:
                'Are there examples of applications built with this starter kit?',
            answer: 'Check our documentation or community channels (like GitHub Discussions if available). We encourage users to share their projects! Seeing real-world use cases can provide great inspiration.', // (You can add links later if you have examples)
        },
    ],
    features: [
        {
            question:
                'What key features are included in this Next.js SaaS boilerplate?',
            answer: "It comes packed with essential SaaS features: user authentication (NextAuth.js), database ORM (Drizzle), payment integration (Lemon Squeezy), organization management basics, file uploads (UploadThing), dashboard layouts, landing pages, a blog (MDX), docs (FumaDocs), and more. See the 'What's Included' section for a full list.",
        },
        {
            question:
                'Does this starter kit include payment integration (e.g., Stripe, Lemon Squeezy)?',
            answer: "Yes, it includes pre-built integration points and examples specifically for Lemon Squeezy, making it easier to set up subscriptions, payments, and handle tax compliance for your SaaS product. You'll need your own Lemon Squeezy account.",
        },
        {
            question:
                'How is authentication handled? Does it support social logins?',
            answer: "Authentication is managed by NextAuth.js (Auth.js v4). It's configured for email/password login out-of-the-box, but NextAuth.js makes it straightforward to add various OAuth providers for social logins like Google, GitHub, etc., with minimal configuration changes.",
        },
    ],
    technical: [
        {
            question:
                'What is the technology stack used in this Next.js starter kit?',
            answer: 'It utilizes a modern stack: Next.js (App Router), TypeScript, Tailwind CSS for styling, Shadcn UI for components, Drizzle ORM for database interaction, NextAuth.js for authentication, Lemon Squeezy for payments, FumaDocs for documentation, and UploadThing for file uploads.',
        },
        {
            question:
                'What database does this starter kit use with Drizzle ORM?',
            answer: 'The default configuration typically targets PostgreSQL due to its robustness for SaaS applications. However, Drizzle ORM supports other SQL databases like MySQL and SQLite, so you can adapt the configuration if needed.',
        },
        {
            question:
                'Is this Next.js starter kit suitable for production and scalable applications?',
            answer: "Yes, it's built with production readiness and scalability in mind, leveraging Next.js best practices, robust technologies like Drizzle ORM, and a clean codebase structure. It provides a solid foundation to build upon for real-world applications.",
        },
        {
            question:
                'Where can I deploy an application built with this starter kit?',
            answer: 'Applications built with this Next.js starter kit can be easily deployed to platforms like Vercel (recommended for Next.js), Netlify, AWS Amplify, Railway, or any platform that supports Node.js applications. Dockerfile examples might also be provided for containerized deployments.',
        },
    ],
    usageAndCustomization: [
        {
            question:
                'How easy is it to get started with this Next.js template?',
            answer: "We've designed it for a quick setup. If you have experience with Next.js, React, TypeScript, and Node.js, you can typically get the project running locally in minutes by following the instructions in the GitHub README or the official documentation.",
        },
        {
            question:
                'How customizable is the UI built with Shadcn UI and Tailwind CSS?',
            answer: 'Highly customizable! Tailwind CSS provides utility classes for fine-grained control, and Shadcn UI components are designed to be easily themed and extended. You can adapt the styling to perfectly match your brand identity.',
        },
        {
            question:
                'Can I easily add my own custom features to this starter kit?',
            answer: "Definitely. The kit provides the foundation, but it's designed to be extended. You can easily build your specific application logic, add new database models, create custom pages and components on top of the provided structure.",
        },
    ],
    supportAndLicensing: [
        {
            question: 'What kind of support is available if I run into issues?',
            answer: "As an open-source project, support is primarily community-based through the GitHub repository's 'Issues' section. You can ask questions, report bugs, or suggest features there. We also provide comprehensive documentation via FumaDocs.",
        },
        {
            question:
                'How often is this open-source Next.js starter kit updated?',
            answer: 'We aim to keep the starter kit up-to-date with major releases of Next.js and key dependencies. You can check the GitHub repository for recent commits and releases or view the integrated changelog.',
        },
        {
            // Re-using the first question here as it fits licensing perfectly
            question: 'What license is this starter kit released under?',
            answer: 'This starter kit is released under the permissive MIT license, allowing broad use for both personal and commercial projects without requiring attribution or imposing complex restrictions.',
        },
    ],
}

export function SaasStarterkitFaqs() {
    return (
        <section>
            <SectionHeader>
                <SectionHeading>Frequently Asked Questions</SectionHeading>
                <SectionDescription>
                    Frequently asked questions about the SaaS Starter Kit and
                    its features.
                </SectionDescription>
            </SectionHeader>

            <FaqItem title="General" items={categorizedFaqs.general} />

            <GridGap className="h-10" />

            <FaqItem title="Features" items={categorizedFaqs.features} />

            <GridGap className="h-10" />

            <FaqItem title="Technical" items={categorizedFaqs.technical} />

            <GridGap className="h-10" />

            <FaqItem
                title="Usage & Customization"
                items={categorizedFaqs.usageAndCustomization}
            />

            <GridGap className="h-10" />

            <FaqItem
                title="Support & Licensing"
                items={categorizedFaqs.supportAndLicensing}
            />
        </section>
    )
}

function FaqItem({
    title,
    items,
}: {
    title: string
    items: CategorizedFaqItem[]
}) {
    return (
        <div className="container-wrapper grid grid-cols-1 md:grid-cols-[1fr_2.5rem_1fr]">
            <div className="border-grid flex border-b p-4 md:border-b-0 md:px-6">
                <h3 className="font-heading text-lg">{title}</h3>
            </div>

            <div className="border-grid h-full border-x" />

            <div className="grid">
                {items.map((item, index) => (
                    <Accordion
                        type="single"
                        collapsible
                        className="border-grid w-full border-b px-4 last:border-b-0"
                        key={index}
                    >
                        <AccordionItem
                            value={index.toString()}
                            className="py-2"
                        >
                            <AccordionTrigger className="py-2 hover:no-underline">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground pb-2">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ))}
            </div>
        </div>
    )
}
