import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useId } from 'react'

export default function InputWithSuffix() {
    const id = useId()
    const suffix = '.com'

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Input with suffix</Label>

            <div className="flex items-center">
                <Input
                    placeholder="launchmvpfast"
                    id={id}
                    className="rounded-r-none"
                />

                <span className="border-input dark:bg-input/30 text-muted-foreground flex h-9 items-center justify-center rounded-md rounded-l-none border border-l-0 bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] md:text-sm">
                    {suffix}
                </span>
            </div>
        </div>
    )
}
