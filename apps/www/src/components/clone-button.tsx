'use client'

import { useEffect, useState } from 'react'
import { ChevronDownIcon, CopyCheckIcon, CopyIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const options = [
    {
        label: 'npm',
        cmd: 'npx',
    },
    {
        label: 'yarn',
        cmd: 'yarn',
    },
    {
        label: 'pnpm',
        cmd: 'pnpx',
    },
    {
        label: 'bun',
        cmd: 'bunx',
    },
]

type CloneButtonProps = {
    children?: React.ReactNode
    cloneCommand: string
    size?: 'sm' | 'default' | 'lg'
}

export default function CloneButton({
    children,
    cloneCommand,
    size = 'default',
}: CloneButtonProps) {
    const [selectedIndex, setSelectedIndex] = useState('0')

    const [hasCopied, setHasCopied] = useState(false)

    const handleCopy = () => {
        const packageManager = options[Number(selectedIndex)].cmd
        const command = `${packageManager} ${cloneCommand}`
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
        <div className="divide-primary-foreground/30 inline-flex divide-x rounded-md shadow-xs rtl:space-x-reverse">
            <Button
                onClick={handleCopy}
                size={size}
                className="rounded-none shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
            >
                {hasCopied ? (
                    <>
                        Copied <CopyCheckIcon />
                    </>
                ) : (
                    <>
                        {children} <CopyIcon />
                    </>
                )}
            </Button>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        size="lg"
                        className="rounded-nonefont-mono shadow-none first:rounded-s-md last:rounded-e-md focus-visible:z-10"
                    >
                        {options[Number(selectedIndex)].label}
                        <ChevronDownIcon size={16} aria-hidden="true" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    className="max-w-64 md:max-w-xs"
                    side="bottom"
                    sideOffset={4}
                    align="end"
                >
                    <DropdownMenuRadioGroup
                        value={selectedIndex}
                        onValueChange={setSelectedIndex}
                    >
                        {options.map((option, index) => (
                            <DropdownMenuRadioItem
                                key={option.label}
                                value={String(index)}
                                className="items-center font-mono [&>span]:pt-1.5"
                            >
                                <span className="text-sm font-medium">
                                    {option.label}
                                </span>
                            </DropdownMenuRadioItem>
                        ))}
                    </DropdownMenuRadioGroup>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
