import { Badge } from '@/components/ui/badge'
import { Button, buttonVariants } from '@/components/ui/button'
import { urls } from '@/config/urls'
import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

type PricingPlan = {
    id: string
    name: string
    description: string
    features: string[]
    price: string
    badge?: string
    buttonText: string
    buttonUrl: string
}

const plans: PricingPlan[] = [
    {
        id: 'opensource',
        name: 'Open Source',
        description:
            'Access our free, community-driven resources to build your MVP yourself using our foundational kits and components.',
        features: [
            'All Open Source Starter Kits',
            'All Open Source Components',
            'All Open Source Blocks',
            'Community Support (GitHub Issues/Discussions)',
            'Documentation Access',
            'Self-hosted Deployment',
        ],
        price: 'Free Forever',
        badge: 'Open Source',
        buttonText: 'Explore Starter Kits',
        buttonUrl: urls.app.starterkits.base,
    },
    {
        id: 'mvp-sprint',
        name: 'Sprint',
        description:
            'Ideal for validating your core concept quickly with essential functionality, built by our team.',
        features: [
            'Implementation of 2-3 Core Features*',
            'Built on an Open Source Starter Kit',
            'Basic UI/UX Customization',
            'Project Setup & Configuration',
            'Deployment Assistance (Basic)',
            'Direct Developer Communication',
            'Defined Scope & Timeline (Est. 2-4 weeks)',
        ],
        price: '$999',
        buttonText: 'Send Proposal',
        buttonUrl: '/',
    },
    {
        id: 'mvp-launchpad',
        name: 'Launchpad',
        description:
            'Build a more feature-rich MVP ready for early adopters and initial market feedback, with dedicated support.',
        features: [
            'Implementation of 4-5 Core Features*',
            'Built on an Open Source Starter Kit',
            'Enhanced UI/UX Customization',
            'Project Setup & Configuration',
            'Deployment & Basic CI/CD Setup',
            'Dedicated Project Manager',
            'Integration Assistance (e.g., Analytics, Email)',
            'Defined Scope & Timeline (Est. 4-8 weeks)',
            'Limited Post-Launch Support (e.g., 30 days)',
        ],
        price: '$1,999',
        badge: 'Most Popular',
        buttonText: 'Send Proposal',
        buttonUrl: '/',
    },
    {
        id: 'mvp-enterprise',
        name: 'Enterprise',
        description:
            'Fully customized MVP or V1 development tailored to complex requirements, specific integrations, and scale.',
        features: [
            'Custom Feature Scope & Implementation',
            'Choice of Starter Kit or Custom Foundation',
            'Full UI/UX Design & Customization Option',
            'Advanced Integrations (APIs, 3rd Party Services)',
            'Scalable Architecture Design',
            'Full Deployment & CI/CD Pipeline Setup',
            'Strategic Consultation',
            'Ongoing Support & Maintenance Options',
        ],
        price: 'Custom',
        buttonText: 'Send Proposal',
        buttonUrl: '/',
    },
]

export default function PricingTable() {
    return (
        <section className="container-wrapper grid flex-1 grid-cols-4 grid-rows-[auto_auto]">
            {plans.map((plan, index) => (
                <PricingTableItem key={plan.id} plan={plan} index={index} />
            ))}
        </section>
    )
}

export function PricingTableItem({
    plan,
    index,
}: {
    plan: PricingPlan
    index: number
}) {
    return (
        <div className="border-grid row-span-6 grid grid-rows-subgrid gap-2 border-r p-4 last:border-r-0 md:px-6">
            <div className="row-span-1">
                {plan.badge && <Badge>{plan.badge}</Badge>}
            </div>
            <h2 className="font-heading row-span-1 flex items-center text-2xl">
                {plan.name}
            </h2>
            <p className="text-muted-foreground row-span-1 text-sm font-light">
                {plan.description}
            </p>

            <p className="font-heading row-span-1 flex items-center text-2xl">
                {plan.price}
            </p>

            <ul className="row-span-1 flex flex-col gap-1 py-3">
                <p className="text-sm">What's included in {plan.name}:</p>
                {plan.features.map((feature, index) => (
                    <li
                        key={index}
                        className="text-muted-foreground flex items-center gap-1 text-sm"
                    >
                        <CheckIcon className="size-4" /> {feature}
                    </li>
                ))}
            </ul>

            <Link
                href={plan.buttonUrl}
                className={buttonVariants({ size: 'lg' })}
            >
                {plan.buttonText}
            </Link>
        </div>
    )
}
