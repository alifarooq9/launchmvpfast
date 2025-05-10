'use client'

import { CheckIcon, Code2Icon, CopyIcon } from 'lucide-react'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip'
import { useQuery } from '@tanstack/react-query'
import { Component } from '@/config/registry/components'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { codeToHast, type BundledLanguage } from 'shiki/bundle/web'
import { toJsxRuntime } from 'hast-util-to-jsx-runtime'
import React, { Fragment, JSX } from 'react'
import { jsx, jsxs } from 'react/jsx-runtime'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { urls } from '@/config/urls'

type CodeBlockProps = {
    component: Component
}

type CodeBlockData = {
    code: string
    highlightedCode: string
}

export function CodeBlock({ component }: CodeBlockProps) {
    const { data: code } = useQuery<CodeBlockData>({
        queryKey: ['code-block', component.id],
        queryFn: async () => {
            const handleEmptyCode = () => {
                return {
                    code: '',
                    highlightedCode: '',
                }
            }

            try {
                const response = await fetch(`/r/${component.id}.json`)

                if (!response.ok) {
                    handleEmptyCode()
                }

                const contentType = response.headers.get('Content-Type')

                if (contentType !== 'application/json') {
                    handleEmptyCode()
                }

                const data = await response.json()
                console.log('data', data)
                return {
                    code: data.files[0].content,
                    highlightedCode: data.content,
                }
            } catch (error) {
                console.error('Error fetching code block:', error)
                return {
                    code: '',
                    highlightedCode: '',
                }
            }
        },
    })

    return (
        <Dialog>
            <TooltipProvider delayDuration={0}>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <DialogTrigger asChild>
                            <button className="focus-ring w-fit cursor-pointer">
                                <Code2Icon className="text-muted-foreground h-4 w-4" />
                            </button>
                        </DialogTrigger>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>View code</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <DialogContent className="max-h-svh overflow-auto sm:max-w-[600px]">
                <DialogHeader>
                    <DialogTitle>
                        Use {component.name} in your project
                    </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-8 overflow-auto">
                    <div className="flex flex-col gap-3">
                        <p>
                            <strong className="font-heading text-lg">
                                Installation
                            </strong>
                        </p>

                        <InstallationBlock name={component.id} />
                    </div>
                    <div className="flex flex-col gap-3">
                        <p>
                            <strong className="font-heading text-lg">
                                Code
                            </strong>
                        </p>

                        <div className="relative">
                            <CodeBlockContent code={code?.code ?? ''} />

                            <CopyButton
                                command={code?.code ?? ''}
                                className="absolute top-0 right-0"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

type PackageManager = 'pnpm' | 'npm' | 'yarn' | 'bun'

function InstallationBlock({ name }: { name: string }) {
    const [packageManager, setPackageManager] =
        React.useState<PackageManager>('pnpm')

    const commands = {
        pnpm: `pnpm dlx shadcn@latest add ${urls.public}/r/${name}.json`,
        npm: `npx shadcn@latest add ${urls.public}/r/${name}.json`,
        yarn: `npx shadcn@latest add ${urls.public}/r/${name}.json`,
        bun: `bunx --bun shadcn@latest add ${urls.public}/r/${name}.json`,
    }

    return (
        <div className="relative">
            <Tabs
                value={packageManager}
                onValueChange={(value) =>
                    setPackageManager(value as PackageManager)
                }
                className="bg-muted rounded-md"
            >
                <div className="flex w-full items-center justify-between">
                    <TabsList className="font-mono">
                        <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                        <TabsTrigger value="npm">npm</TabsTrigger>
                        <TabsTrigger value="yarn">yarn</TabsTrigger>
                        <TabsTrigger value="bun">bun</TabsTrigger>
                    </TabsList>

                    <CopyButton command={commands[packageManager]} />
                </div>
                {Object.entries(commands).map(([pkg, command]) => (
                    <TabsContent className="m-0" key={pkg} value={pkg}>
                        <pre className="overflow-auto p-4 font-mono text-[13px]">
                            {command}
                        </pre>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    )
}

function CopyButton({
    className,
    command,
    ...props
}: React.HTMLAttributes<HTMLButtonElement> & {
    command: string
}) {
    const [hasCopied, setHasCopied] = React.useState(false)
    const handleCopy = () => {
        try {
            navigator.clipboard.writeText(command)
            setHasCopied(true)
        } catch (error) {
            console.error('Failed to copy text: ', error)
        } finally {
            setTimeout(() => {
                setHasCopied(false)
            }, 2000)
        }
    }

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <Button
                        variant="ghost"
                        size="icon"
                        className={cn('cursor-pointer', className)}
                        onClick={handleCopy}
                        {...props}
                    >
                        {hasCopied ? (
                            <CheckIcon className="text-muted-foreground h-3.5 w-3.5" />
                        ) : (
                            <CopyIcon className="text-muted-foreground h-3.5 w-3.5" />
                        )}
                    </Button>
                </TooltipTrigger>
                <TooltipContent showArrow={false}>
                    <p>Copy</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

function CodeBlockContent({ code }: { code: string }) {
    const [nodes, setNodes] = React.useState<JSX.Element | null>(null)
    React.useLayoutEffect(() => {
        void highlight(code, 'tsx').then(setNodes)
    }, [code])

    return nodes ? (
        <div className="[&_pre]:bg-muted! [&_code]:font-mono [&_code]:text-[13px] [&_pre]:max-h-[450px] [&_pre]:overflow-auto [&_pre]:rounded-md [&_pre]:p-4 [&_pre]:leading-snug">
            {nodes}
        </div>
    ) : (
        <div>Loading...</div>
    )
}

export async function highlight(code: string, lang: BundledLanguage) {
    const out = await codeToHast(code, {
        lang,
        theme: 'houston',
    })

    return toJsxRuntime(out, {
        Fragment,
        jsx,
        jsxs,
    }) as JSX.Element
}
