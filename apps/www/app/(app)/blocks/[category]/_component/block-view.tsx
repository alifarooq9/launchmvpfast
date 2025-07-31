import React, { createContext, useContext } from 'react'
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable'
import { Block, Category } from '@/config/registry/blocks'
import { urls } from '@/config/urls'
import { cn } from '@/lib/utils'
import { ImperativePanelHandle } from 'react-resizable-panels'
import { CodeBlock } from '@/app/(app)/_components/code-block'
import { OpenInV0 } from '@/app/(app)/_components/open-in-v0'
import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import {
    TooltipProvider,
    Tooltip,
    TooltipContent,
} from '@/components/ui/tooltip'
import {
    TerminalIcon,
    MonitorIcon,
    TabletIcon,
    SmartphoneIcon,
    FullscreenIcon,
    RotateCwIcon,
} from 'lucide-react'
import Link from 'next/link'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { Separator } from '@/components/ui/separator'
import { TooltipTrigger } from '@radix-ui/react-tooltip'
import { ComponentLoaderClient } from '@/app/(app)/_components/component-loader-client'

interface BlockViewerContextValue {
    block: Block
    category: Category
    resizablePanelRef: React.RefObject<ImperativePanelHandle | null> | null
    iframeKey?: number
    setiframeKey?: React.Dispatch<React.SetStateAction<number>>
}

const BlockViewerContext = createContext<BlockViewerContextValue | null>(null)

function useBlockViewer() {
    const context = useContext(BlockViewerContext)
    if (!context) {
        throw new Error(
            'useBlockViewer must be used within a BlockViewerProvider'
        )
    }
    return context
}

export function BlockViewerProvider({
    children,
    block,
    category,
}: {
    children: React.ReactNode
    block: Block
    category: Category
}) {
    const resizablePanelRef = React.useRef<ImperativePanelHandle | null>(null)
    const [iframeKey, setiframeKey] = React.useState(0)

    return (
        <BlockViewerContext.Provider
            value={{
                block,
                category,
                resizablePanelRef,
                iframeKey,
                setiframeKey,
            }}
        >
            <div>{children}</div>
        </BlockViewerContext.Provider>
    )
}

function BlockViewerIframe() {
    const { block, category, iframeKey } = useBlockViewer()

    return (
        <iframe
            key={`${block.id}-${iframeKey}`}
            src={`${urls.app.blocksView}/${category.id}/${block.id}`}
            height={block.meta?.iframeHeight ?? 930}
            loading="lazy"
            className={cn(
                'bg-background no-scrollbar relative z-20 w-full rounded-b-xl',
                block.meta?.className
            )}
        />
    )
}

function BlockViewerView() {
    const { resizablePanelRef } = useBlockViewer()

    return (
        <div className="hidden md:h-(--height) lg:flex">
            <div className="relative grid w-full gap-4">
                <ResizablePanelGroup
                    direction="horizontal"
                    className="after:bg-muted/50 relative z-10 after:absolute after:inset-0 after:right-3 after:z-0 after:rounded-xl"
                >
                    <ResizablePanel
                        ref={resizablePanelRef}
                        className="bg-background relative aspect-[4/2.5] overflow-hidden rounded-xl border md:aspect-auto"
                        defaultSize={100}
                        minSize={35}
                    >
                        <BlockViewerIframe />
                    </ResizablePanel>
                    <ResizableHandle className="after:bg-border relative hidden w-3 bg-transparent p-0 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[6px] after:translate-x-[-1px] after:-translate-y-1/2 after:rounded-full after:transition-all after:hover:h-10 md:block" />
                    <ResizablePanel defaultSize={0} minSize={0} />
                </ResizablePanelGroup>
            </div>
        </div>
    )
}

function BlockViewerMobileView() {
    const { block } = useBlockViewer()

    return (
        <div
            className={cn(
                'block rounded-xl border lg:hidden',
                block.meta?.className
            )}
        >
            <ComponentLoaderClient component={block} />
        </div>
    )
}

function BlockViewerToolbar() {
    const { block, category, resizablePanelRef, setiframeKey } =
        useBlockViewer()

    return (
        <div className="flex flex-row items-center justify-between gap-4 p-4">
            <h2 className="font-semibold tracking-tight sm:text-base">
                {block.name}
            </h2>

            <div className="flex items-center gap-2">
                <TooltipProvider delayDuration={0}>
                    <ToggleGroup
                        type="single"
                        defaultValue="100"
                        onValueChange={(value) => {
                            if (resizablePanelRef?.current) {
                                resizablePanelRef.current.resize(
                                    parseInt(value)
                                )
                            }
                        }}
                        className="hidden h-8 gap-1 border px-0.5 *:data-[slot=toggle-group-item]:!size-6 *:data-[slot=toggle-group-item]:!rounded-sm lg:flex"
                    >
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToggleGroupItem
                                    value="100"
                                    title="Desktop"
                                    className="cursor-pointer"
                                >
                                    <MonitorIcon />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent>Desktop</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToggleGroupItem
                                    value="60"
                                    title="Tablet"
                                    className="cursor-pointer"
                                >
                                    <TabletIcon />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent>Tablet</TooltipContent>
                        </Tooltip>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <ToggleGroupItem
                                    value="35"
                                    title="Mobile"
                                    className="cursor-pointer"
                                >
                                    <SmartphoneIcon />
                                </ToggleGroupItem>
                            </TooltipTrigger>
                            <TooltipContent>Mobile</TooltipContent>
                        </Tooltip>

                        <Separator orientation="vertical" className="!h-4" />

                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="size-6 rounded-sm p-0"
                                    asChild
                                    title="Open in New Tab"
                                >
                                    <Link
                                        href={`${urls.app.blocksView}/${category.id}/${block.id}`}
                                        target="_blank"
                                    >
                                        <span className="sr-only">
                                            Open in New Tab
                                        </span>
                                        <FullscreenIcon />
                                    </Link>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Open in full screen</TooltipContent>
                        </Tooltip>

                        <Separator orientation="vertical" className="!h-4" />
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    size="icon"
                                    variant="ghost"
                                    className="size-6 cursor-pointer rounded-sm p-0"
                                    title="Refresh Preview"
                                    onClick={() => {
                                        if (setiframeKey) {
                                            setiframeKey((k) => k + 1)
                                        }
                                    }}
                                >
                                    <RotateCwIcon />
                                    <span className="sr-only">
                                        Refresh Preview
                                    </span>
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent>Reload</TooltipContent>
                        </Tooltip>
                    </ToggleGroup>

                    <Separator
                        orientation="vertical"
                        className="hidden !h-4 lg:flex"
                    />

                    <CodeBlock
                        component={block}
                        Button={
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-8 w-8 cursor-pointer sm:w-fit"
                            >
                                <TerminalIcon />{' '}
                                <span className="hidden sm:flex">Code</span>
                                <span className="sr-only">
                                    View Code for {block.name}
                                </span>
                            </Button>
                        }
                    />

                    <Separator orientation="vertical" className="!h-4" />

                    <OpenInV0
                        component={block}
                        Button={
                            <Button
                                size="sm"
                                className="h-8 w-8 cursor-pointer sm:w-fit"
                            >
                                <span className="hidden sm:flex">Open in</span>{' '}
                                <Icons.v0 />
                                <span className="sr-only">
                                    Open {block.name} in V0
                                </span>
                            </Button>
                        }
                    />
                </TooltipProvider>
            </div>
        </div>
    )
}

export function BlockViewer({
    block,
    category,
}: {
    block: Block
    category: Category
}) {
    return (
        <BlockViewerProvider block={block} category={category}>
            <BlockViewerToolbar />
            <BlockViewerView />
            <BlockViewerMobileView />
        </BlockViewerProvider>
    )
}

export { useBlockViewer }
