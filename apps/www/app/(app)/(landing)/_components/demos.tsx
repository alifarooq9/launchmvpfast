import { BlocksDemoContent } from '@/app/(app)/(landing)/_components/blocks-demo-content'
import { ComponentsDemoContent } from '@/app/(app)/(landing)/_components/components-demo-content'
import { GridGap } from '@/app/(app)/_components/grid-gap'
import { ImageContentWrapper } from '@/app/(app)/_components/image-content-wrapper'
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
        label: 'Platform Features',
        description:
            'Comprehensive drone cooperative platform showcasing fleet management, governance, and service delivery systems.',
        badge: 'Live',
        disabled: false,
    },
    {
        key: tabTriggerKeys.components, // Corrected from "commponents"
        label: 'Field Operations',
        description:
            'Real-world drone operations including agricultural scanning, delivery tracking, and aerial imaging services.',
        badge: 'Active',
        disabled: false,
    },
    {
        key: tabTriggerKeys.blocks,
        label: 'Technical Systems',
        description:
            'Advanced technical components including LiDAR scanning, equipment management, and pilot coordination systems.',
        badge: 'Advanced',
        disabled: false,
    },
]

const starterkitImags = [
    '/drone-images/dashboards-metrics.png',
    '/drone-images/cooperative-governance-dashboard.png',
    '/drone-images/fleet-managment.png',
    '/drone-images/admin-dashboard.png',
    '/drone-images/service-delivery.png',
    '/drone-images/pilot-management.png',
    '/drone-images/delivery-tracking.png',
    '/drone-images/drone-equipment.png',
    '/drone-images/cooperative-governance-dashboard1.png',
    '/drone-images/cooperative-meet.png',
    '/drone-images/drone-zoe-blog.png',
    '/drone-images/changelog.png',
    '/drone-images/guide-started.png',
    '/drone-images/schematics.png',
    '/drone-images/agric-drone.png',
    '/drone-images/aerial-scan.png',
    '/drone-images/lidar-scan.png',
    '/drone-images/drone-pilot.png',
    '/drone-images/drone-still.png',
    '/drone-images/aerial-image.png',
    '/drone-images/mango-field.png',
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
                                    className="flex h-fit cursor-pointer flex-col items-center gap-0 rounded-none border-0 px-4 py-4 whitespace-normal disabled:pointer-events-none md:items-start md:gap-2 md:py-6 md:text-left"
                                    disabled={trigger.disabled}
                                >
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-foreground text-sm md:text-lg">
                                            <strong className="font-heading">
                                                {trigger.label}
                                            </strong>
                                        </h2>
                                        <Badge
                                            variant="secondary"
                                            className="hidden h-fit md:block"
                                        >
                                            {trigger.badge}
                                        </Badge>
                                    </div>
                                    <p className="text-muted-foreground hidden md:block">
                                        {trigger.description}
                                    </p>
                                </TabsTrigger>
                            ))}
                        </TabsList>
                    </div>
                </div>

                <GridGap className="h-4" />

                <div className="container-wrapper">
                    <TabsContent value={tabTriggerKeys.starterkits}>
                        <ImageContentWrapper>
                            <ThreeDMarquee images={starterkitImags} />
                        </ImageContentWrapper>
                    </TabsContent>
                    <TabsContent value={tabTriggerKeys.components}>
                        <ComponentsDemoContent />
                    </TabsContent>
                    <TabsContent value={tabTriggerKeys.blocks}>
                        <BlocksDemoContent />
                    </TabsContent>
                </div>
            </Tabs>
        </section>
    )
}
