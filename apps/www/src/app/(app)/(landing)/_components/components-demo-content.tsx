import { ImageContentWrapper } from '@/app/(app)/_components/image-content-wrapper'
import { buttonVariants } from '@/components/ui/button'
import { getCategories } from '@/config/registry/components'
import { urls } from '@/config/urls'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

export function ComponentsDemoContent() {
    const categories = getCategories()
    const itemCount = categories.length

    return (
        <div>
            <div className="divide-border grid grid-cols-1 divide-y sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {categories.slice(-6).map((category, index) => (
                    <Link
                        href={`${urls.app.components}/${category.id}`}
                        key={category.id}
                        className={cn(
                            'hover:bg-accent dark:hover:bg-accent/20 sm[&:nth-child(2n)]:border-r-0 focus-ring border-grid col-span-1 flex flex-col items-center justify-center border-r transition-all lg:[&:nth-child(3n)]:border-r-0 xl:[&:nth-child(3n)]:border-r xl:[&:nth-child(4n)]:border-r-0',
                            index >= itemCount - 1 ? 'border-b-0' : '',
                            index >= itemCount - 2 ? 'sm:border-b-0' : '',
                            index >= itemCount - 3 ? 'lg:border-b-0' : '',
                            index >= itemCount - 4 ? 'xl:border-b-0' : ''
                        )}
                        aria-label={`Go to ${category.name} components`}
                        title={`Go to ${category.name} components`}
                    >
                        <ImageContentWrapper className="w-full">
                            <div className="aspect-video-large relative w-[80%]">
                                <Image
                                    src={category.image.dark}
                                    fill
                                    alt={category.name}
                                    className="hidden object-contain dark:block"
                                />

                                <Image
                                    src={category.image.light}
                                    fill
                                    alt={category.name}
                                    className="block object-contain dark:hidden"
                                />
                            </div>
                        </ImageContentWrapper>

                        <div className="flex w-full flex-col items-start justify-start px-4 py-2">
                            <h2 className="font-heading">{category.name}</h2>
                            <p className="text-muted-foreground text-sm">
                                {category.componentsCount} components
                            </p>
                        </div>
                    </Link>
                ))}

                <div className="border-grid flex min-h-56 flex-col items-center justify-center border-t border-r md:border-t-0">
                    <p>
                        <strong className="font-heading">
                            More Components Coming
                        </strong>
                    </p>
                    <Link
                        href={urls.app.earlyAccess}
                        className={buttonVariants({
                            variant: 'link',
                            className: 'underline',
                        })}
                    >
                        Join Early Access
                    </Link>
                </div>
            </div>

            <div className="border-grid flex items-center justify-center border-t p-4 md:px-6">
                <Link
                    href={urls.app.components}
                    className={cn(buttonVariants({ variant: 'outline' }))}
                >
                    See all components
                </Link>
            </div>
        </div>
    )
}
