'use client'

import { Button } from '@/registry/default/ui/button'
import { Input } from '@/registry/default/ui/input'
import { Label } from '@/registry/default/ui/label'
import { MinusIcon, PlusIcon } from 'lucide-react'
import React, { useId } from 'react'

export default function InputWithLeftRightButtons() {
    const id = useId()
    const [count, setCount] = React.useState<number>(99)

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Input with left right button</Label>

            <div className="flex items-center">
                <Button
                    variant="outline"
                    size="icon"
                    className="dark:bg-input/30 cursor-pointer rounded-r-none border-r-0 bg-transparent"
                    onClick={() => setCount((prev) => Math.max(prev - 1, 0))}
                >
                    <MinusIcon />
                </Button>
                <Input
                    id={id}
                    placeholder="Counter"
                    className="flex rounded-none text-center"
                    value={count}
                    onChange={(e) => {
                        const value = parseInt(e.target.value)
                        if (!isNaN(value)) {
                            setCount(value)
                        }
                    }}
                />
                <Button
                    variant="outline"
                    size="icon"
                    className="dark:bg-input/30 cursor-pointer rounded-l-none border-l-0 bg-transparent"
                    onClick={() => setCount((prev) => prev + 1)}
                >
                    <PlusIcon />
                </Button>
            </div>
        </div>
    )
}
