'use client'

import { StarterkitsDemoContent } from '@/app/(app)/(landing)/_components/starterkits-demo-content'
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from '@/components/ui/animated-tabs'
import { useState } from 'react'
import * as m from 'motion/react-m'
import { ComponentsDemoContent } from '@/app/(app)/(landing)/_components/components-demo-content'
import { BlocksDemoContent } from '@/app/(app)/(landing)/_components/blocks-demo-content'

const initialDelay = 2

const variants = {
    hidden: (custom: {
        delay?: number
        duration?: number
        horizontal?: boolean
    }) => ({
        opacity: 0,
        x: custom?.horizontal ? 40 : 0,
        y: custom?.horizontal ? 0 : 20,
        filter: 'blur(15px)',
    }),
    visible: (custom: {
        delay?: number
        duration?: number
        horizontal?: boolean
    }) => ({
        opacity: 1,
        x: 0,
        y: 0,
        filter: 'blur(0px)',
        transition: {
            delay: custom?.delay ?? initialDelay,
            duration: custom?.duration ?? 0.6,
        },
    }),
}

export function Demos() {
    const [value, setValue] = useState(tabs[0].value)

    return (
        <div className="relative flex w-full items-center justify-center">
            <Tabs
                value={value}
                onValueChange={setValue}
                className="flex w-full flex-col items-center"
            >
                <m.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    custom={{ delay: 1.2 }}
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
                </m.div>
                <m.div
                    variants={variants}
                    initial="hidden"
                    animate="visible"
                    custom={{ delay: 1.4, horizontal: true }}
                    className="relative flex w-full items-center justify-center"
                >
                    <TabsContent value={tabs[0].value} className="mt-4 w-full">
                        <StarterkitsDemoContent />
                    </TabsContent>
                    <TabsContent value={tabs[1].value} className="mt-4 w-full">
                        <ComponentsDemoContent />
                    </TabsContent>
                    <TabsContent value={tabs[2].value} className="mt-4 w-full">
                        <BlocksDemoContent />
                    </TabsContent>
                </m.div>
            </Tabs>
            <m.span
                initial={{ opacity: 0, scale: 0.5, filter: 'blur(50px)' }}
                animate={{ opacity: 1, scale: 1, filter: 'blur(170px)' }}
                transition={{
                    delay: 1.6,
                    duration: 0.8,
                }}
                className="bg-foreground/50 pointer-events-none absolute top-14 -z-10 h-64 w-[60%] max-w-6xl rounded-[100%] blur-[170px] select-none"
            />
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
