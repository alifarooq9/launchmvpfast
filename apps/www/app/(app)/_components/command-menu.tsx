'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { DialogProps } from '@radix-ui/react-dialog'
import { ArrowRight, CornerDownLeftIcon, Laptop, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { useIsMac } from '@/hooks/use-is-mac'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandList,
    CommandItem,
} from '@/components/ui/command'
import { blocks } from '@/config/registry/blocks'
import { components } from '@/config/registry/components'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { urls } from '@/config/urls'
import { useMutationObserver } from '@/hooks/use-mutation-observer'
import { starterkits } from '@/config/registry/starterkits'

export function CommandMenu({ ...props }: DialogProps) {
    const isMac = useIsMac()
    const router = useRouter()
    const [open, setOpen] = React.useState(false)
    const [type, setType] = React.useState<
        'blocks' | 'components' | 'theme' | 'starterkit'
    >('blocks')
    const { setTheme } = useTheme()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    const handleHighlightBlocks = React.useCallback(() => {
        setType('blocks')
    }, [])

    const handleHighlightStarterkits = React.useCallback(() => {
        setType('starterkit')
    }, [])

    const handleHighlightComponents = React.useCallback(() => {
        setType('components')
    }, [])

    const handleHighlightTheme = React.useCallback(() => {
        setType('theme')
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button
                    variant="secondary"
                    className={cn(
                        'bg-surface text-surface-foreground/60 dark:bg-card relative h-8 w-full justify-start pl-2.5 font-normal shadow-none sm:pr-12 md:w-40 lg:w-56 xl:w-64'
                    )}
                    onClick={() => setOpen(true)}
                    {...props}
                >
                    <span className="hidden lg:inline-flex">Search...</span>
                    <span className="inline-flex lg:hidden">Search...</span>
                    <div className="absolute top-1.5 right-1.5 hidden gap-1 sm:flex">
                        <CommandMenuKbd>{isMac ? '⌘' : 'Ctrl'}</CommandMenuKbd>
                        <CommandMenuKbd className="aspect-square">
                            K
                        </CommandMenuKbd>
                    </div>
                </Button>
            </DialogTrigger>
            <DialogContent
                showCloseButton={false}
                className="rounded-xl border-none bg-clip-padding p-2 pb-11 shadow-2xl ring-4 ring-neutral-200/80 dark:bg-neutral-900 dark:ring-neutral-800"
            >
                <DialogHeader className="sr-only">
                    <DialogTitle>Search...</DialogTitle>
                    <DialogDescription>
                        Search for a command to run...
                    </DialogDescription>
                </DialogHeader>
                <Command className="**:data-[slot=command-input-wrapper]:bg-input/50 **:data-[slot=command-input-wrapper]:border-input rounded-none bg-transparent **:data-[slot=command-input]:!h-9 **:data-[slot=command-input]:py-0 **:data-[slot=command-input-wrapper]:mb-0 **:data-[slot=command-input-wrapper]:!h-9 **:data-[slot=command-input-wrapper]:rounded-md **:data-[slot=command-input-wrapper]:border">
                    <CommandInput placeholder="Search..." />
                    <CommandList className="no-scrollbar min-h-80 scroll-pt-2 scroll-pb-1.5">
                        <CommandEmpty>No results found.</CommandEmpty>
                        <CommandGroup heading="Starterkits">
                            {starterkits.map((group) => (
                                <CommandMenuItem
                                    key={group.id}
                                    value={group.name}
                                    onHighlight={() => {
                                        handleHighlightStarterkits()
                                    }}
                                    onSelect={() => {
                                        runCommand(() => {
                                            setType('blocks')
                                            router.push(group.buttonUrl)
                                        })
                                    }}
                                >
                                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                        <ArrowRight className="h-3 w-3" />
                                    </div>
                                    {group.name}
                                </CommandMenuItem>
                            ))}
                        </CommandGroup>
                        <CommandGroup heading="Components">
                            {components.default.map((group) => (
                                <CommandMenuItem
                                    key={group.id}
                                    value={group.name}
                                    onHighlight={() => {
                                        handleHighlightComponents()
                                    }}
                                    onSelect={() => {
                                        runCommand(() => {
                                            setType('components')
                                            router.push(
                                                `${urls.app.components}/${group.id}`
                                            )
                                        })
                                    }}
                                >
                                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                        <ArrowRight className="h-3 w-3" />
                                    </div>
                                    {group.name}
                                </CommandMenuItem>
                            ))}
                        </CommandGroup>
                        <CommandGroup heading="Blocks">
                            {blocks.default.map((group) => (
                                <CommandMenuItem
                                    key={group.id}
                                    value={group.name}
                                    onHighlight={() => {
                                        handleHighlightBlocks()
                                    }}
                                    onSelect={() => {
                                        runCommand(() => {
                                            setType('blocks')
                                            router.push(
                                                `${urls.app.blocks}/${group.id}`
                                            )
                                        })
                                    }}
                                >
                                    <div className="mr-2 flex h-4 w-4 items-center justify-center">
                                        <ArrowRight className="h-3 w-3" />
                                    </div>
                                    {group.name}
                                </CommandMenuItem>
                            ))}
                        </CommandGroup>
                        <CommandGroup heading="Theme">
                            <CommandMenuItem
                                onHighlight={() => {
                                    handleHighlightTheme()
                                }}
                                onSelect={() =>
                                    runCommand(() => {
                                        setTheme('light')
                                    })
                                }
                            >
                                <Sun className="mr-2 h-4 w-4" />
                                Light
                            </CommandMenuItem>
                            <CommandMenuItem
                                onHighlight={() => {
                                    handleHighlightTheme()
                                }}
                                onSelect={() =>
                                    runCommand(() => {
                                        setTheme('dark')
                                    })
                                }
                            >
                                <Moon className="mr-2 h-4 w-4" />
                                Dark
                            </CommandMenuItem>
                            <CommandMenuItem
                                onHighlight={() => {
                                    handleHighlightTheme()
                                }}
                                onSelect={() =>
                                    runCommand(() => {
                                        setTheme('system')
                                    })
                                }
                            >
                                <Laptop className="mr-2 h-4 w-4" />
                                System
                            </CommandMenuItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
                <div className="text-muted-foreground absolute inset-x-0 bottom-0 z-20 flex h-10 items-center gap-2 rounded-b-xl px-4 text-xs font-medium dark:bg-neutral-800">
                    <div className="flex items-center gap-2">
                        <CommandMenuKbd>
                            <CornerDownLeftIcon />
                        </CommandMenuKbd>{' '}
                        {type === 'theme' ? 'Change Theme' : `Go to ${type}`}
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

function CommandMenuItem({
    children,
    className,
    onHighlight,
    ...props
}: React.ComponentProps<typeof CommandItem> & {
    onHighlight?: () => void
    'data-selected'?: string
    'aria-selected'?: string
}) {
    const ref = React.useRef<HTMLDivElement>(null)

    useMutationObserver(ref, (mutations) => {
        mutations.forEach((mutation) => {
            if (
                mutation.type === 'attributes' &&
                mutation.attributeName === 'aria-selected' &&
                ref.current?.getAttribute('aria-selected') === 'true'
            ) {
                onHighlight?.()
            }
        })
    })

    return (
        <CommandItem
            ref={ref}
            className={cn(
                'data-[selected=true]:border-input data-[selected=true]:bg-input/50 h-9 rounded-md border border-transparent !px-3 font-medium',
                className
            )}
            {...props}
        >
            {children}
        </CommandItem>
    )
}

function CommandMenuKbd({ className, ...props }: React.ComponentProps<'kbd'>) {
    return (
        <kbd
            className={cn(
                "bg-background text-muted-foreground pointer-events-none flex h-5 items-center justify-center gap-1 rounded border px-1 font-sans text-[0.7rem] font-medium select-none [&_svg:not([class*='size-'])]:size-3",
                className
            )}
            {...props}
        />
    )
}
