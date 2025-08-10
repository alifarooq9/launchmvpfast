import { Input } from '@/registry/default/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/registry/default/ui/select'
import { Label } from '@/registry/default/ui/label'
import { useId } from 'react'

const suffixKeys = {
    com: 'com',
    org: 'org',
    net: 'net',
    co: 'co',
    io: 'io',
    dev: 'dev',
    edu: 'edu',
    xyz: 'xyz',
    tech: 'tech',
} as const

const suffix = [
    { value: suffixKeys.com, label: '.com' },
    { value: suffixKeys.org, label: '.org' },
    { value: suffixKeys.net, label: '.net' },
    { value: suffixKeys.co, label: '.co' },
    { value: suffixKeys.io, label: '.io' },
    { value: suffixKeys.dev, label: '.dev' },
    { value: suffixKeys.edu, label: '.edu' },
    { value: suffixKeys.xyz, label: '.xyz' },
    { value: suffixKeys.tech, label: '.tech' },
] as const

export default function InputWithLeftSelect() {
    const id = useId()

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Input with right select</Label>

            <div className="flex items-center">
                <Input
                    placeholder="launchmvpfast"
                    id={id}
                    className="rounded-r-none"
                />

                <Select defaultValue={suffixKeys.com}>
                    <SelectTrigger className="rounded-l-none border-l-0">
                        <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                    <SelectContent align="end">
                        {suffix.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
        </div>
    )
}
