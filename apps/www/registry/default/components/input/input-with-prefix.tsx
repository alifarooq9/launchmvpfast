import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useId } from 'react'

export default function InputWithPrefix() {
    const id = useId()
    const prefix = 'https://'

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Input with prefix</Label>

            <div className="flex items-center">
                <span className="border-input dark:bg-input/30 text-muted-foreground flex h-9 items-center justify-center rounded-md rounded-r-none border border-r-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] md:text-sm">
                    {prefix}
                </span>

                <Input
                    placeholder="launchmvpfast.com"
                    id={id}
                    className="rounded-l-none"
                />
            </div>
        </div>
    )
}
