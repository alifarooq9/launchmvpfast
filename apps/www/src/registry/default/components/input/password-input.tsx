'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { EyeIcon, EyeOffIcon } from 'lucide-react'
import React, { useId } from 'react'

export default function PasswordInput() {
    const id = useId()
    const [show, setShow] = React.useState<boolean>(false)

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Password input</Label>

            <div className="relative w-full">
                <Input
                    id={id}
                    placeholder="Password"
                    type={show ? 'text' : 'password'}
                    className="pe-9"
                />

                <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-1/2 right-0.5 h-8 w-8 -translate-y-1/2 cursor-pointer"
                    onClick={() => setShow(!show)}
                >
                    {show ? <EyeOffIcon /> : <EyeIcon />}
                </Button>
            </div>
        </div>
    )
}
