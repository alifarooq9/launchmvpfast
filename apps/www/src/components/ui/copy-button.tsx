'use client'

import * as React from 'react'
import { Button, buttonVariants } from './button'
import { type VariantProps } from 'class-variance-authority'
import { Check, Copy } from 'lucide-react'

interface CopyButtonProps
    extends React.ComponentProps<'button'>,
        VariantProps<typeof buttonVariants> {
    text: string
    asChild?: boolean
}

export function CopyButton({
    text,
    children,
    className,
    variant = 'outline',
    size,
    onClick,
    ...props
}: CopyButtonProps) {
    const [hasCopied, setHasCopied] = React.useState(false)

    React.useEffect(() => {
        if (hasCopied) {
            const timeout = setTimeout(() => setHasCopied(false), 2000)
            return () => clearTimeout(timeout)
        }
    }, [hasCopied])

    async function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        try {
            await navigator.clipboard.writeText(text)
            setHasCopied(true)
            onClick?.(event)
        } catch (error) {
            console.error('Failed to copy text: ', error)
        }
    }

    return (
        <Button
            variant={variant}
            size={size}
            className={className}
            onClick={handleClick}
            {...props}
        >
            {hasCopied ? <>Copied</> : <>{children || 'Copy'}</>}
        </Button>
    )
}
