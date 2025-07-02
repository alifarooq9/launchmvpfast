'use client'

import {
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'

type ImpactMetric = {
    label: string
    value: number
    unit: string
    description: string
    icon: string
}

// Projected impact metrics - this project is in development
const impactMetrics: ImpactMetric[] = [
    {
        label: 'Target Drones',
        value: 0,
        unit: 'planned',
        description: 'Fleet size planned for initial deployment',
        icon: ''
    },
    {
        label: 'Founding Members',
        value: 0,
        unit: 'recruiting',
        description: 'Initial cooperative members needed',
        icon: ''
    },
    {
        label: 'Service Areas',
        value: 0,
        unit: 'identified',
        description: 'Remote regions to be served',
        icon: ''
    },
    {
        label: 'Local Partners',
        value: 0,
        unit: 'developing',
        description: 'Community partnerships in progress',
        icon: ''
    },
    {
        label: 'Training Programs',
        value: 0,
        unit: 'designed',
        description: 'Skills development curricula planned',
        icon: ''
    },
    {
        label: 'Investment Goal',
        value: 0,
        unit: 'phase 1',
        description: 'Initial funding target for launch',
        icon: ''
    },
    {
        label: 'Mission Types',
        value: 0,
        unit: 'categories',
        description: 'Service types under development',
        icon: ''
    },
    {
        label: 'Tech Partners',
        value: 0,
        unit: 'connecting',
        description: 'Technology partnerships forming',
        icon: ''
    }
]

export function Showcase() {
    return (
        <section>
            <SectionHeader>
                <SectionHeading>
                    Project Development Dashboard
                </SectionHeading>
                <SectionDescription>
                    Track our progress as we build the drone cooperative infrastructure for Haiti
                </SectionDescription>
            </SectionHeader>
            <div className="container-wrapper">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {impactMetrics.map((metric, idx) => (
                        <ImpactCard key={idx} {...metric} />
                    ))}
                </div>
                <div className="mt-12 text-center">
                    <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
                        This project is currently in development. Join us as we build a revolutionary 
                        drone cooperative to transform humanitarian aid delivery across Haiti. Every 
                        milestone brings us closer to launching this vital service.
                    </p>
                </div>
            </div>
        </section>
    )
}

function ImpactCard({ label, value, unit, description, icon }: ImpactMetric) {
    return (
        <div className="flex flex-col items-center justify-center p-6 border rounded-lg bg-card hover:bg-accent/5 transition-colors">
            <div className="text-center">
                <div className="text-3xl font-bold font-heading mb-1 text-muted-foreground">
                    —
                </div>
                <div className="text-sm text-muted-foreground font-medium mb-2">
                    {unit}
                </div>
                <h4 className="text-lg font-semibold mb-2">{label}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    )
}
