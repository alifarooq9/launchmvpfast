import { urls } from '@/config/urls'

export type PricingPlan = {
    id: string
    name: string
    description: string
    features: string[]
    price: string
    textAfterPrice?: string
    badge?: string
    buttonText: string
    buttonUrl?: string
    buttonType: 'link' | 'proposal'
    isRecommended?: boolean
}

export const plans: PricingPlan[] = [
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
        buttonType: 'link',
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
        price: '$1,999',
        textAfterPrice: '/one-time',
        buttonText: 'Send Proposal',
        buttonType: 'proposal',
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
        price: '$2,999',
        badge: 'Most Popular',
        textAfterPrice: '/one-time',
        buttonText: 'Send Proposal',
        buttonType: 'proposal',
        isRecommended: true,
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
        buttonType: 'proposal',
    },
]
