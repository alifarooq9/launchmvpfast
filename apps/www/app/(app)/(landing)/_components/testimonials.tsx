import { siteConfig } from '@/config/site'
import {
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'

type Testimonial = {
    name: string
    title: string
    organization: string
    text: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Volker Türk',
        title: 'UN High Commissioner for Human Rights',
        organization: 'United Nations',
        text: "Haiti faces a human rights crisis of staggering proportions. The humanitarian situation is catastrophic, with millions in need of assistance. Innovative solutions for aid delivery are desperately needed.",
    },
    {
        name: 'Grégoire Goodstein',
        title: 'Representative in Haiti',
        organization: 'UN World Food Programme',
        text: "Access to affected populations remains our biggest challenge. Traditional logistics are severely hampered by security concerns and infrastructure damage. New technologies could revolutionize how we reach those in need.",
    },
    {
        name: 'Amy Pope',
        title: 'Director General',
        organization: 'International Organization for Migration',
        text: "Over 700,000 people are internally displaced in Haiti. Delivering aid safely and efficiently to scattered populations requires innovative approaches that can overcome security and logistical barriers.",
    },
    {
        name: 'William O\'Neill',
        title: 'Independent Expert on Human Rights in Haiti',
        organization: 'UN Human Rights Council',
        text: "The deteriorating security situation has made traditional aid delivery extremely dangerous. We need creative solutions that can bypass these challenges while ensuring aid reaches the most vulnerable populations.",
    },
]

export function Testimonials() {
    return (
        <section>
            <SectionHeader>
                <SectionHeading>
                    The Challenge:{' '}
                    <span className="hidden sm:block">
                        Voices from the Field
                    </span>
                </SectionHeading>
                <SectionDescription>
                    International leaders highlight the urgent need for innovative humanitarian aid delivery
                </SectionDescription>
            </SectionHeader>
            <div className="container-wrapper">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, idx) => (
                        <TestimonialCard key={idx} {...testimonial} />
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <p className="text-muted-foreground text-base font-light max-w-2xl mx-auto">
                        These challenges highlight why we need innovative, cooperative solutions 
                        like {siteConfig.name} to revolutionize humanitarian aid delivery �
                    </p>
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({
    name,
    title,
    organization,
    text,
}: Testimonial) {
    return (
        <div className="flex flex-col gap-4 p-6 border rounded-lg bg-card">
            <blockquote className="text-lg font-light italic leading-relaxed">
                &ldquo;{text}&rdquo;
            </blockquote>
            
            <div className="flex flex-col gap-1 mt-auto">
                <h5 className="text-base font-semibold">{name}</h5>
                <p className="text-sm text-muted-foreground">{title}</p>
                <p className="text-sm text-muted-foreground font-medium">{organization}</p>
            </div>
        </div>
    )
}
