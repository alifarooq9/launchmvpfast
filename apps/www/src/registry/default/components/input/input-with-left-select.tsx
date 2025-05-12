import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import { useId } from 'react'

const prefixKeys = {
    mr: 'mr',
    ms: 'ms',
    dr: 'dr',
    prof: 'prof',
    sir: 'sir',
    madam: 'madam',
} as const

const prefixs = [
    { value: prefixKeys.mr, label: 'Mr.' },
    { value: prefixKeys.ms, label: 'Ms.' },
    { value: prefixKeys.dr, label: 'Dr.' },
    { value: prefixKeys.prof, label: 'Prof.' },
    { value: prefixKeys.sir, label: 'Sir' },
    { value: prefixKeys.madam, label: 'Madam' },
] as const

export default function InputWithLeftSelect() {
    const id = useId()

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Input with left select</Label>

            <div className="flex items-center">
                <Select defaultValue={prefixKeys.mr}>
                    <SelectTrigger className="rounded-r-none border-r-0">
                        <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                    <SelectContent>
                        {prefixs.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </SelectContent>
                </Select>

                <Input
                    placeholder="Shadcn"
                    id={id}
                    className="rounded-l-none"
                />
            </div>
        </div>
    )
}
