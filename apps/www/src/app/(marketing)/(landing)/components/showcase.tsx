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
            <div className="border-grid border-b">
                <div className="container-wrapper">
                    <div className="container py-4">
                        <h2 className="font-heading text-2xl font-medium">
                            Showcase: What Our Users Have built
                        </h2>
                        <p className="text-muted-foreground">
                            This is what our users have built with{' '}
                            {siteConfig.name}
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-wrapper">
                <div className="grid w-full grid-cols-3">
                    {showcases.map((showcase, idx) => (
                        <ShowcaseCard key={idx} {...showcase} />
                    ))}

                    <div className="col-span-2 flex flex-col items-center justify-center p-4">
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
        <div className="items-left flex flex-col justify-center gap-2 border-r p-4 last:border-r-0">
            <div className="relative aspect-video w-full">
                <Image src={image} alt={name} fill />
            </div>
            <div className="flex flex-col pt-2">
                <p className="font-heading leading-none font-medium">{name}</p>
                <Link
                    target="_blank"
                    href={url}
                    className="text-muted-foreground text-light focus-ring text-sm"
                >
                    {placeholder}
                </Link>
            </div>
        </div>
    )
}
