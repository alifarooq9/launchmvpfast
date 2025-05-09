import { ImageContentWrapper } from '@/app/(app)/_components/image-content-wrapper'
import { buttonVariants } from '@/components/ui/button'
import { components } from '@/config/registry/components'
import { urls } from '@/config/urls'
import Image from 'next/image'
import Link from 'next/link'

export function ComponentsTable() {
    return (
        <section className="container-wrapper">
            <div className="divide-border grid grid-cols-1 divide-y sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {components.default.map((component) => (
                    <Link
                        href={`${urls.app.components}/${component.id}`}
                        key={component.id}
                        className="hover:bg-accent dark:hover:bg-accent/20 sm[&:nth-child(2n)]:border-r-0 col-span-1 flex flex-col items-center justify-center border-r transition-all lg:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:border-r xl:[&:nth-child(4n)]:border-r-0"
                        aria-label={`Go to ${component.name} components`}
                        title={`Go to ${component.name} components`}
                    >
                        <ImageContentWrapper className="w-full">
                            <div className="aspect-video-large relative w-[80%]">
                                <Image
                                    src={component.image.dark}
                                    fill
                                    alt={component.name}
                                    className="object-contain"
                                />
                            </div>
                        </ImageContentWrapper>

                        <div className="flex w-full flex-col items-start justify-start px-4 py-2">
                            <h2 className="font-heading">{component.name}</h2>
                            <p className="text-muted-foreground text-sm">
                                {component.components.length} components
                            </p>
                        </div>
                    </Link>
                ))}

                <div className="sm[&:nth-child(2n)]:border-r-0 col-span-1 flex flex-col items-center justify-center border-r transition-all lg:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:border-r xl:[&:nth-child(4n)]:border-r-0">
                    <p>
                        <strong className="font-heading">
                            More Components Coming
                        </strong>
                    </p>
                    <Link
                        href={urls.app.earlyAccess}
                        className={buttonVariants({ variant: 'link' })}
                    >
                        Join Early Access
                    </Link>
                </div>
            </div>
        </section>
    )
}
