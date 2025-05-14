'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { CheckIcon, CopyIcon } from 'lucide-react'
import React, { useId } from 'react'

export default function CopyInput() {
    const id = useId()
    const value = 'launchmvpfast.com'

    const [copied, setCopied] = React.useState<boolean>(false)
    const copyToClipboard = () => {
        try {
            navigator.clipboard.writeText(value)
            setCopied(true)
        } catch (err) {
            console.error('Failed to copy: ', err)
        } finally {
            setTimeout(() => {
                setCopied(false)
            }, 2000)
        }
    }

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Copy input</Label>

            <div className="relative w-full">
                <Input
                    id={id}
                    type="text"
                    className="pe-9"
                    readOnly
                    value={value}
                />

                <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-1/2 right-0.5 h-8 w-8 -translate-y-1/2 cursor-pointer"
                    onClick={copyToClipboard}
                >
                    {copied ? (
                        <CheckIcon className="text-green-500" />
                    ) : (
                        <CopyIcon />
                    )}
                </Button>
            </div>
        </div>
    )
}
