import { GridGap } from '@/app/(marketing)/components/grid-gap'
import { ThreeDMarquee } from '@/components/ui/3d-marquee'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const tabTriggerKeys = {
    starterkits: 'starterKits',
    components: 'components',
    blocks: 'blocks',
}
const tabTriggers = [
    {
        key: tabTriggerKeys.starterkits,
        label: 'Starter Kits',
        description:
            'Free open-source kits to launch your MVP fast. From SaaS to personal portfolios projects, start building in minutes.',
        badge: 'SaaS V2 Soon',
        disabled: false,
    },
    {
        key: tabTriggerKeys.components, // Corrected from "commponents"
        label: 'Components',
        description:
            'Reusable, customizable components for your tech stack. Save time with pre-built UI elements and code snippets.',
        badge: 'Coming Soon',
        disabled: true,
    },
    {
        key: tabTriggerKeys.blocks,
        label: 'Blocks',
        description:
            'Modular blocks to build complex apps faster. Combine pre-built sections for seamless, efficient development.',
        badge: 'Coming Soon',
        disabled: true,
    },
]

// TODO: Update images to our starterkits
const starterkitImags = [
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
    'https://assets.aceternity.com/spotlight-new.webp',
    'https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png',
    'https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png',
    'https://assets.aceternity.com/tabs.png',
    'https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png',
    'https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png',
    'https://assets.aceternity.com/glowing-effect.webp',
    'https://assets.aceternity.com/hover-border-gradient.png',
    'https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png',
    'https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png',
    'https://assets.aceternity.com/macbook-scroll.png',
    'https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png',
    'https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png',
    'https://assets.aceternity.com/multi-step-loader.png',
    'https://assets.aceternity.com/vortex.png',
    'https://assets.aceternity.com/wobble-card.png',
    'https://assets.aceternity.com/world-map.webp',
]

export function Demos() {
    return (
        <section>
            <Tabs defaultValue={tabTriggerKeys.starterkits} className="gap-0">
                <div className="border-grid border-t">
                    <div className="container-wrapper">
                        <TabsList className="bg-background grid h-auto w-full grid-cols-3 p-0">
                            {tabTriggers.map((trigger) => (
                                <TabsTrigger
                                    key={trigger.key}
                                    value={trigger.key}
                                    className="flex h-fit flex-col items-start gap-2 border-0 px-4 py-6 text-left whitespace-normal"
                                    disabled={trigger.disabled}
                                >
                                    <div className="flex items-center gap-2">
                                        <h2 className="font-heading text-foreground text-lg">
                                            <strong className="font-semibold">
                                                {trigger.label}
                                            </strong>
                                        </h2>
                                        <Badge
                                            variant="secondary"
                                            className="h-fit"
                                        >
                                            {trigger.badge}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground">
                                        {trigger.description}
                                    </p>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                </div>

                <GridGap height={4} />

                <div className="container-wrapper">
                    <TabsContent value={tabTriggerKeys.starterkits}>
                        <DemoContentWrapper>
                            <ThreeDMarquee images={starterkitImags} />
                        </DemoContentWrapper>
                    </TabsContent>
                    <TabsContent value={tabTriggerKeys.components}>
                        {/* TODO: Add components showcase */}
                    </TabsContent>
                    <TabsContent value={tabTriggerKeys.blocks}>
                        {/* TODO: Add blocks showcase */}
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    )
}

function DemoContentWrapper({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-accent dark:bg-accent/40 p-2">
            <div className="bg-background border-input rounded-[0.8rem] border">
                {children}
            </div>
        </div>
    )
}
