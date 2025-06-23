'use client'

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useEffect, useState, memo } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import * as m from 'motion/react-m'
import { useIsMobile } from '@/hooks/use-mobile'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { urls } from '@/config/urls'
import { Component, getSelectiveComponents } from '@/config/registry/components'
import { ComponentLoaderClient } from '@/app/(app)/_components/component-loader-client'

export function ComponentsDemoContent() {
    const components = getSelectiveComponents()

    return (
        <Carousel
            opts={{
                align: 'center',
                duration: 20,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                }),
            ]}
        >
            <CarouselContent className="px-4 md:px-14">
                {components.map((component, index) => (
                    <ComponentItem key={index} component={component} />
                ))}

                <CarouselItem
                    className={cn(
                        'aspect-video max-w-xl basis-full py-0 transition-all duration-500'
                    )}
                >
                    <Card className="aspect-video">
                        <CardContent className="relative flex h-full items-center justify-center">
                            <Link
                                href={urls.app.components}
                                className={cn(
                                    buttonVariants({ variant: 'outline' }),
                                    'w-fit text-center'
                                )}
                            >
                                View All Components
                                <SquareArrowOutUpRightIcon />
                            </Link>
                        </CardContent>
                    </Card>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
    )
}

const ComponentItem = memo(function ComponentItem({
    component,
}: {
    component: Component
}) {
    return (
        <CarouselItem
            className={cn(
                'aspect-video max-w-xl basis-full transition-all duration-500'
            )}
        >
            <Card className="aspect-video">
                <CardHeader>
                    <CardTitle>{component.name}</CardTitle>
                </CardHeader>
                <CardContent className="relative flex flex-1 items-center justify-center">
                    <ComponentLoaderClient component={component} />
                </CardContent>
                <CardFooter>
                    <Link
                        href={`${urls.app.components}/${component.category}`}
                        className={cn(
                            buttonVariants({ variant: 'link' }),
                            'w-full'
                        )}
                    >
                        View Components
                        <SquareArrowOutUpRightIcon />
                    </Link>
                </CardFooter>
            </Card>
        </CarouselItem>
    )
})
