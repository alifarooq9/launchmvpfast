'use client'

import { StarterkitsDemoContent } from '@/app/(app)/(landing)/_components/starterkits-demo-content'
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from '@/components/ui/animated-tabs'
import { useState } from 'react'

export function Demos() {
    const [value, setValue] = useState(tabs[0].value)

    return (
        <div className="flex w-full items-center justify-center">
            <Tabs
                value={value}
                onValueChange={setValue}
                className="flex w-full flex-col items-center"
            >
                <TabsList>
                    {tabs.map((tab) => (
                        <TabsTrigger
                            key={tab.value}
                            value={tab.value}
                            className="flex flex-col items-start"
                        >
                            {tab.label}
                        </TabsTrigger>
                    ))}
                </TabsList>
                <div className="relative flex w-full items-center justify-center">
                    <TabsContent value={tabs[0].value} className="mt-4 w-full">
                        <StarterkitsDemoContent />
                    </TabsContent>
                    <span className="bg-foreground/50 pointer-events-none absolute top-10 -z-10 h-64 w-[60%] rounded-[100%] blur-[200px] select-none" />
                </div>
            </Tabs>
        </div>
    )
}

const tabs = [
    {
        label: 'Starter Kits',
        description: 'Open-source starter kits to kickstart your SaaS MVP',
        value: 'starter-kits',
    },
    {
        label: 'Components',
        description: 'Reusable UI components for your projects',
        value: 'components',
    },
    {
        label: 'Blocks',
        description: 'Pre-built blocks for rapid development',
        value: 'blocks',
    },
]
