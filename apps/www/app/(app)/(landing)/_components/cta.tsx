import {
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'

export function CallToAction() {
    return (
        <SectionHeader className="border-border bg-card text-card-foreground relative overflow-hidden rounded-xl border py-16">
            <SectionHeading>Want us to build your MVP?</SectionHeading>
            <SectionDescription>
                Want us to build your MVP? We can help you build your SaaS MVP /
                Web App.
            </SectionDescription>
        </SectionHeader>
    )
}
