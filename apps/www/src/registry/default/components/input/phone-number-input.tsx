'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import {
    Country,
    FlagProps,
    getCountryCallingCode,
} from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import flags from 'react-phone-number-input/flags'
import { PhoneIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'

export default function PhoneNumberInput() {
    const [value, setValue] = React.useState('')

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label>Phone number input</Label>

            <PhoneInput
                placeholder="Enter phone number"
                international
                value={value}
                onChange={(e) => setValue(e ?? '')}
                inputComponent={InputComponent}
                countrySelectComponent={CountrySelectComponent}
                className="flex items-center justify-center"
                flagComponent={FlagComponent}
            />
        </div>
    )
}

function InputComponent({
    className,
    type,
    ...props
}: React.ComponentProps<'input'>) {
    return (
        <Input
            type={type}
            data-slot="input"
            className={cn(className, 'rounded-l-none')}
            {...props}
        />
    )
}

type CountrySelectComponentProps = {
    disabled?: boolean
    value: Country
    onChange: (value: Country) => void
    options: { label: string; value: Country | undefined }[]
}

function CountrySelectComponent({
    options,
    value,
    disabled,
    onChange,
}: CountrySelectComponentProps) {
    return (
        <Select value={value} onValueChange={onChange} disabled={disabled}>
            <SelectTrigger className="w-fit rounded-r-none border-r-0">
                <FlagComponent
                    country={value}
                    countryName={value}
                    aria-hidden="true"
                />
            </SelectTrigger>
            <SelectContent>
                {options.map((option, index) => {
                    if (!option.value) return null

                    return (
                        <SelectItem
                            key={`${option.value || ''}-${index}`}
                            value={option.value as string}
                        >
                            <FlagComponent
                                country={option.value}
                                countryName={option.label}
                                aria-hidden="true"
                            />
                            {option.label} +
                            {option.value &&
                                getCountryCallingCode(option.value)}
                        </SelectItem>
                    )
                })}
            </SelectContent>
        </Select>
    )
}

function FlagComponent({ country, countryName }: FlagProps) {
    const Flag = flags[country]

    return <span>{Flag ? <Flag title={countryName} /> : <PhoneIcon />}</span>
}
