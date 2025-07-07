'use client'

import { createContext, forwardRef, useContext } from 'react'
import * as TabsPrimitive from '@radix-ui/react-tabs'
import { motion, MotionConfig } from 'motion/react'
import { cn } from '@/lib/utils'

const transition = {
    type: 'spring' as const,
    stiffness: 170,
    damping: 24,
    mass: 1.2,
}

type TabsContextType = {
    value: string
}

const TabsContext = createContext<TabsContextType | undefined>(undefined)

type TabsProviderProps = {
    children: React.ReactNode
    value: string
}

function TabsProvider({ children, value }: TabsProviderProps) {
    return (
        <TabsContext.Provider value={{ value }}>
            {children}
        </TabsContext.Provider>
    )
}

function useTabs() {
    const context = useContext(TabsContext)
    if (!context) {
        throw new Error('useTabs must be used within a TabsProvider')
    }
    return context
}

interface TabsProps {
    value: string
    onValueChange: (value: string) => void
    children: React.ReactNode
    className?: string
}

function Tabs({
    value,
    onValueChange,
    children,
    className,
    ...props
}: TabsProps) {
    return (
        <MotionConfig transition={transition}>
            <TabsProvider value={value}>
                <TabsPrimitive.Root
                    data-slot="tabs"
                    value={value}
                    onValueChange={onValueChange}
                    className={cn('flex flex-col gap-2', className)}
                    {...props}
                >
                    {children}
                </TabsPrimitive.Root>
            </TabsProvider>
        </MotionConfig>
    )
}

const TabsList = forwardRef<
    React.ElementRef<typeof TabsPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.List
        ref={ref}
        data-slot="tabs-list"
        className={cn(
            'bg-muted text-muted-foreground inline-flex h-fit w-fit items-center justify-center rounded-lg p-[3px]',
            className
        )}
        {...props}
    />
))
TabsList.displayName = TabsPrimitive.List.displayName

const TabsTrigger = forwardRef<
    React.ElementRef<typeof TabsPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, children, ...props }, ref) => {
    const { value } = useTabs()
    const isActive = value === props.value

    return (
        <div className="relative">
            {isActive && (
                <motion.div
                    layoutId="active-tab-bg"
                    className="bg-background dark:border-input dark:bg-input/30 absolute inset-0 rounded-md border"
                />
            )}
            <TabsPrimitive.Trigger
                ref={ref}
                data-slot="tabs-trigger"
                className={cn(
                    "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:text-foreground text-foreground dark:text-muted-foreground relative z-10 inline-flex h-[calc(100%-1px)] flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                    className
                )}
                {...props}
            >
                {children}
            </TabsPrimitive.Trigger>
        </div>
    )
})
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const TabsContent = forwardRef<
    React.ElementRef<typeof TabsPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
    <TabsPrimitive.Content
        ref={ref}
        data-slot="tabs-content"
        className={cn('flex-1 outline-none', className)}
        {...props}
    />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

export { Tabs, TabsList, TabsTrigger, TabsContent }
