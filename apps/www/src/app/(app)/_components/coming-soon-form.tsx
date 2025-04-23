'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import React from 'react'

type ComingSoonFormProps = {
    className?: string
}

export function ComingSoonForm({ className }: ComingSoonFormProps) {
    return (
        <div className={cn(className)}>
            <Input placeholder="Name" />
            <Input placeholder="Email" />
            <Button className="w-full" size="lg">
                Join Early Access
            </Button>
        </div>
    )
}
