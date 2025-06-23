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
import { SquareArrowOutUpRightIcon } from 'lucide-react'
import { urls } from '@/config/urls'

const starterkitImags = [
    '/starterkits/saas-v1/landing.png',
    '/starterkits/saas-v1/auth.png',
    '/starterkits/saas-v1/blog.png',
    '/starterkits/saas-v1/dashboard.png',
    '/starterkits/saas-v1/admin-dashboard.png',
    '/starterkits/saas-v1/changelog.png',
    '/starterkits/saas-v1/billing.png',
    '/starterkits/saas-v1/users.png',
    '/starterkits/saas-v1/org-settings.png',
    '/starterkits/saas-v1/org-members.png',
    '/starterkits/saas-v1/org-invite.png',
    '/starterkits/saas-v1/waitlist.png',
    '/starterkits/saas-v1/organizations.png',
    '/starterkits/saas-v1/feedback-list.png',
    '/starterkits/saas-v1/docs.png',
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
                {starterkitImags.map((image, index) => (
                    <BlocksItem
                        key={index}
                        image={image}
                        index={index}
                        current={current}
                    />
                ))}
            </CarouselContent>
        </Carousel>
    )
}

const BlocksItem = memo(function BlocksItem({
    image,
    index,
    current,
}: {
    image: string
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
                            src={image}
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
                                    SaaS Starter Kit
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
                                        href={
                                            urls.app.starterkits.saasNextjs
                                                .preview
                                        }
                                        className={cn(
                                            buttonVariants({
                                                variant: 'secondary',
                                                size: 'sm',
                                            })
                                        )}
                                    >
                                        <SquareArrowOutUpRightIcon />
                                        Live Preview
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
