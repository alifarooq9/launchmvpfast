import {
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'

type Showcase = {
    name: string
    url: string
    placeholder: string
    image: string
}

const showcases: Showcase[] = [
    {
        name: 'Sinta',
        url: 'https://sintahr.com',
        placeholder: 'sintahr.com',
        image: '/showcase/sintahr.png',
    },
]

export function Showcase() {
    return (
        <section>
            <SectionHeader>
                <SectionHeading>
                    Showcase:{' '}
                    <span className="hidden sm:block">
                        What Our Users Have built
                    </span>
                </SectionHeading>
                <SectionDescription>
                    This is what our users have built with {siteConfig.name}
                </SectionDescription>
            </SectionHeader>
            <div className="container-wrapper">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {showcases.map((showcase, idx) => (
                        <ShowcaseCard key={idx} {...showcase} />
                    ))}

                    <div className="flex flex-col items-center justify-center p-4 lg:col-span-2">
                        <p className="text-muted-foreground text-base font-light">
                            Tell us about how fast you built your MVP with{' '}
                            {siteConfig.name} 🙌
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

function ShowcaseCard({ name, image, url, placeholder }: Showcase) {
    return (
        <Link
            target="_blank"
            href={url}
            className="items-left flex flex-col justify-center gap-2 border-b p-4 md:border-r md:border-b-0 md:last:border-r-0"
        >
            <div className="relative aspect-video w-full">
                <Image src={image} alt={name} fill />
            </div>
            <div className="flex flex-col pt-2">
                <p className="font-heading leading-none font-medium">
                    <strong className="font-medium">{name}</strong>
                </p>
                <p className="text-muted-foreground text-light focus-ring text-sm">
                    {placeholder}
                </p>
            </div>
        </Link>
    )
}
