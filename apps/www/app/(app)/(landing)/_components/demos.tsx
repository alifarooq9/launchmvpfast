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
        badge: 'New inputs',
        disabled: false,
    },
    {
        key: tabTriggerKeys.blocks,
        label: 'Blocks',
        description:
            'Modular blocks to build complex apps faster. Combine pre-built sections for seamless, efficient development.',
        badge: 'New hero',
        disabled: false,
    },
]

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
