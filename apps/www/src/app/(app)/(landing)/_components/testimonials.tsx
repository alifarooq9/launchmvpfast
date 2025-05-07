import { IconProps, Icons } from '@/components/icons'
import { JSX } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { siteConfig } from '@/config/site'
import {
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'

type Testimonial = {
    name: string
    username: string
    avatar: string
    socialLink: string
    text: string
    Social: (props: IconProps) => JSX.Element
    postLink: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Mohamed Shegow',
        username: '@MoeShegow',
        avatar: '/people-say/mohamed.jpg',
        socialLink: 'https://x.com/MoeShegow',
        text: "S/o to @AliFarooqDev! We were able to plan, build & launch our new product - sintahr.com in < 4 weeks. Thx mostly to using nextJS starter kit. Heavily recommend if you're building an MVP",
        Social: Icons.x,
        postLink:
            'https://x.com/MoeShegow/status/1861172660635414785?t=hIUXOvcUEqvmpx0tqILJKg&s=08',
    },
]

export function Testimonials() {
    return (
        <section>
            <SectionHeader>
                <SectionHeading>
                    Testimonials:{' '}
                    <span className="hidden sm:block">
                        Hear from Our Community
                    </span>
                </SectionHeading>
                <SectionDescription>
                    This is what our users say about us
                </SectionDescription>
            </SectionHeader>
            <div className="container-wrapper">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, idx) => (
                        <TestimonialCard key={idx} {...testimonial} />
                    ))}

                    <div className="col-span-2 flex flex-col items-center justify-center p-4">
                        <p className="text-muted-foreground text-base font-light">
                            Tell us about your experience with {siteConfig.name}
                            . We&apos;d love to hear from you! 🙌
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({
    name,
    username,
    avatar,
    text,
    Social,
    postLink,
    socialLink,
}: Testimonial) {
    return (
        <div className="flex flex-col items-center gap-2 border-b md:border-r md:border-b-0 md:last:border-r-0">
            <p className="p-4 text-lg font-extralight">{text}</p>

            <div className="flex w-full items-center justify-between divide-x border-t">
                <div className="flex flex-1 gap-2 px-4 py-2">
                    <Avatar className="h-10 w-10">
                        <AvatarImage src={avatar} />
                        <AvatarFallback>{name[0]}</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-1 flex-col items-start justify-start gap-0">
                        <h5 className="text-base font-medium">{name}</h5>
                        <Link
                            target="_blank"
                            href={socialLink}
                            className="text-muted-foreground text-light focus-ring text-sm"
                        >
                            {username}
                        </Link>
                    </div>
                </div>

                <Link
                    href={postLink}
                    target="_blank"
                    className="hover:bg-accent/30 focus-ring flex aspect-square h-full items-center justify-center transition-colors"
                >
                    <Social className="size-6" />
                </Link>
            </div>
        </div>
    )
}
