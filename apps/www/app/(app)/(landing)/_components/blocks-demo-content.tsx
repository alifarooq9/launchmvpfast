'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { memo, useEffect, useState } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'
import * as m from 'motion/react-m'
import { useIsMobile } from '@/hooks/use-mobile'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/button'
import { ScanIcon } from 'lucide-react'
import { urls } from '@/config/urls'

const blocks = [
    {
        id: 'ai-builder-hero',
        name: 'AI Builder Hero',
        image: '/blocks/ai-builder-hero.png',
        category: 'hero-sections',
    },
    {
        id: 'center-signin-card',
        name: 'Center Signin Card',
        image: '/blocks/center-signin-card.png',
        category: 'signin-signup',
    },
    {
        id: 'center-with-image-hero',
        name: 'Center with Image Hero',
        image: '/blocks/center-with-image-hero.png',
        category: 'hero-sections',
    },
    {
        id: 'simple-signup',
        name: 'Simple Signup',
        image: '/blocks/simple-signup.png',
        category: 'signin-signup',
    },
    {
        id: 'simple-hero-with-content-bottom',
        name: 'Simple Hero with Content Bottom',
        image: '/blocks/simple-hero-with-content-bottom.png',
        category: 'hero-sections',
    },
]

export function BlocksDemoContent() {
    const [api, setApi] = useState<CarouselApi>()
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        if (!api) {
            return
        }

        setCurrent(api.selectedScrollSnap() + 1)

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })
    }, [api])

    return (
        <Carousel
            opts={{
                align: 'center',
                duration: 20,
            }}
            setApi={setApi}
            plugins={[
                Autoplay({
                    delay: 3000,
                    stopOnInteraction: false,
                }),
            ]}
        >
            <CarouselContent className="px-4 md:px-14">
                {blocks.map((block, index) => (
                    <BlocksItem
                        key={index}
                        block={block}
                        index={index}
                        current={current}
                    />
                ))}
            </CarouselContent>
        </Carousel>
    )
}

const BlocksItem = memo(function BlocksItem({
    block,
    index,
    current,
}: {
    block: (typeof blocks)[number]
    index: number
    current: number
}) {
    const [isHover, setIsHover] = useState(false)
    const isMobile = useIsMobile()
    return (
        <CarouselItem
            className={cn('max-w-5xl basis-full transition-all duration-500')}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
        >
            <Card
                className={cn(
                    'relative overflow-hidden py-0',
                    'overflow-hidden before:absolute before:inset-0 before:z-10 before:bg-black before:transition-opacity before:duration-500',
                    current === index + 1
                        ? 'before:opacity-0'
                        : 'before:opacity-80'
                )}
            >
                <div className="p-1">
                    <CardContent className="relative flex aspect-video items-center justify-center">
                        <Image
                            src={block.image}
                            alt={`Starterkit Image ${index + 1}`}
                            className="rounded-lg object-cover"
                            fill
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute bottom-0 left-0 z-20 h-[75%] w-full"
                            blurIntensity={0.5}
                            animate={
                                isMobile
                                    ? 'visible'
                                    : isHover
                                      ? 'visible'
                                      : 'hidden'
                            }
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        />
                        <m.div
                            className="absolute bottom-0 left-0 z-20"
                            animate={
                                isMobile
                                    ? 'visible'
                                    : isHover
                                      ? 'visible'
                                      : 'hidden'
                            }
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1 },
                            }}
                            transition={{ duration: 0.2, ease: 'easeOut' }}
                        >
                            <div className="flex flex-col items-start gap-3 px-5 py-4">
                                <p className="text-base font-semibold text-white">
                                    {block.name}
                                </p>
                                <div className="flex items-center gap-2">
                                    <Link
                                        href={
                                            urls.app.starterkits.saasNextjs.base
                                        }
                                        className={buttonVariants({
                                            variant: 'secondary',
                                            size: 'sm',
                                        })}
                                    >
                                        View details
                                    </Link>
                                    <Link
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href={`${urls.app.blocksView}/${block.category}/${block.id}`}
                                        className={cn(
                                            buttonVariants({
                                                variant: 'secondary',
                                                size: 'sm',
                                            })
                                        )}
                                    >
                                        <ScanIcon />
                                        Full Screen
                                    </Link>
                                </div>
                            </div>
                        </m.div>
                    </CardContent>
                </div>
            </Card>
        </CarouselItem>
    )
})
