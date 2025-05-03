'use client'

import { useState } from 'react'
import { ImageContentWrapper } from '@/app/(app)/_components/image-content-wrapper'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronUp } from 'lucide-react'

const screenshots = [
    '/starterkits/saas-v1/landing.png',
    'https://assets.aceternity.com/cloudinary_bkp/3d-card.png',
    'https://assets.aceternity.com/animated-modal.png',
    'https://assets.aceternity.com/animated-testimonials.webp',
    'https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png',
    'https://assets.aceternity.com/github-globe.png',
    'https://assets.aceternity.com/glare-card.png',
    'https://assets.aceternity.com/layout-grid.png',
    'https://assets.aceternity.com/flip-text.png',
    'https://assets.aceternity.com/hero-highlight.png',
    'https://assets.aceternity.com/carousel.webp',
    'https://assets.aceternity.com/placeholders-and-vanish-input.png',
    'https://assets.aceternity.com/shooting-stars-and-stars-background.png',
    'https://assets.aceternity.com/signup-form.png',
    'https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png',
]

export function SaasStarterkitScreenShots() {
    const [showAll, setShowAll] = useState(false)
    const displayedScreenshots = showAll ? screenshots : screenshots.slice(0, 6)

    return (
        <section>
            <div className="border-grid border-b">
                <div className="container-wrapper">
                    <div className="container py-4">
                        <h2 className="font-heading text-2xl">
                            Screenshots: See It In Action
                        </h2>
                        <p className="text-muted-foreground">
                            This Next.js SaaS starter kit is packed with
                            features designed to accelerate your development
                            workflow
                        </p>
                    </div>
                </div>
            </div>

            <div className="container-wrapper">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {displayedScreenshots.map((screenshot, index) => {
                        // Calculate if this is the last item in the current view
                        const isLastInCurrentView =
                            index === displayedScreenshots.length - 1
                        // Calculate if this is in the last row based on grid columns
                        const isInLastRowMd =
                            index >=
                            displayedScreenshots.length -
                                (displayedScreenshots.length % 2 || 2)
                        const isInLastRowLg =
                            index >=
                            displayedScreenshots.length -
                                (displayedScreenshots.length % 3 || 3)

                        return (
                            <ImageContentWrapper
                                key={index}
                                className={`border-grid border-b p-2 md:border-r lg:border-r md:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 ${isInLastRowMd ? 'md:border-b-0' : ''} ${isInLastRowLg ? 'lg:border-b-0' : ''} `}
                            >
                                <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                                    <Image
                                        src={screenshot || '/placeholder.svg'}
                                        fill
                                        alt="saas-starterkit-demo"
                                        quality={100}
                                        placeholder="blur"
                                        blurDataURL="/starterkits/saas-v1/landing.png"
                                        className="object-cover"
                                    />
                                </div>
                            </ImageContentWrapper>
                        )
                    })}
                </div>

                <div className="border-grid flex justify-center border-t py-6">
                    <Button
                        variant="outline"
                        onClick={() => setShowAll(!showAll)}
                        className="gap-2"
                    >
                        {showAll ? (
                            <>
                                Show Less <ChevronUp className="h-4 w-4" />
                            </>
                        ) : (
                            <>
                                Show More <ChevronDown className="h-4 w-4" />
                            </>
                        )}
                    </Button>
                </div>
            </div>
        </section>
    )
}
