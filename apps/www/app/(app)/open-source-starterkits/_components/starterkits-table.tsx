import { techStackIcons } from '@/components/tech-stack-icons'
import { buttonVariants } from '@/components/ui/button'
import { Starterkit, starterkits } from '@/config/registry/starterkits'
import { ExternalLinkIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function StarterkitsTable() {
    return (
        <section className="container">
            <div className="grid grid-cols-1 gap-4">
                {starterkits.map((starterkit, index) => (
                    <StarterkitsTableItem
                        key={starterkit.id + index}
                        starterkit={starterkit}
                    />
                ))}
            </div>
        </section>
    )
}

export function StarterkitsTableItem({
    starterkit,
}: {
    starterkit: Starterkit
}) {
    return (
        <div className="grid w-full grid-cols-2 gap-8">
            <div className="flex flex-col justify-center gap-4">
                <p>
                    <strong className="text-muted-foreground font-semibold">
                        Starter-kit
                    </strong>
                </p>
                <h2 className="text-2xl font-semibold">{starterkit.name}</h2>
                <p className="text-foreground/90 text-base">
                    {starterkit.description}
                </p>
                <ul className="border-grid flex flex-wrap gap-x-4 gap-y-2 py-4">
                    {starterkit.techStack.map((tech, index) => (
                        <li
                            key={index}
                            className="text-foreground flex shrink-0 items-center gap-1 text-sm [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5"
                        >
                            {techStackIcons[tech].icon}
                            {techStackIcons[tech].name}
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col gap-2 sm:flex-row">
                    <Link
                        href={starterkit.buttonUrl}
                        className={buttonVariants({ className: 'w-fit' })}
                    >
                        {starterkit.buttonText}
                    </Link>
                    <Link
                        href={starterkit.preview}
                        className={buttonVariants({
                            className: 'w-fit',
                            variant: 'outline',
                        })}
                    >
                        Live Preview
                        <ExternalLinkIcon />
                    </Link>
                </div>
            </div>
            <div className="border-border relative aspect-video overflow-hidden rounded-xl border">
                <Image
                    src={starterkit.imageUrl}
                    alt={starterkit.name}
                    fill
                    className="object-cover"
                    quality={100}
                />
            </div>
        </div>
    )
}
