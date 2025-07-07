'use client'

import { getBlocksCategories } from '@/config/registry/blocks'
import { urls } from '@/config/urls'
import { useTheme } from 'next-themes'
import Image from 'next/image'
import Link from 'next/link'

export function BlocksTable() {
    const categories = getBlocksCategories()
    const { resolvedTheme } = useTheme()

    return (
        <section className="container grid grid-cols-3 gap-4">
            {categories.length > 0 &&
                categories.map((category) => (
                    <div
                        key={category.id}
                        className="flex flex-col items-center gap-4"
                    >
                        <Link
                            href={`${urls.app.blocks}/${category.id}`}
                            className="w-full"
                        >
                            <div className="bg-muted dark:bg-muted/50 border-border aspect-video w-full rounded-xl border p-8">
                                <div className="relative aspect-video w-full">
                                    <Image
                                        src={
                                            resolvedTheme === 'dark'
                                                ? category.image.dark
                                                : category.image.light
                                        }
                                        alt={category.name}
                                        fill
                                    />
                                </div>
                            </div>
                        </Link>

                        <div className="text-center">
                            <h2 className="font-medium hover:underline hover:underline-offset-2">
                                <Link
                                    href={`${urls.app.blocks}/${category.id}`}
                                >
                                    {category.name}
                                </Link>
                            </h2>
                            <p className="text-muted-foreground text-center text-sm">
                                {category.blocksCount} component
                            </p>
                        </div>
                    </div>
                ))}
        </section>
    )
}
