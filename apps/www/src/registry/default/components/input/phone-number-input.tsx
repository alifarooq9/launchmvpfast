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
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

const formSchema = z.object({
    phone: z.string().min(1, {
        message: 'Phone number is required',
    }),
})

export default function PhoneNumberInput() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            phone: '',
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log('Form submitted:', data)
        // Handle form submission logic here
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full max-w-4/5 space-y-6"
            >
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Phone number input</FormLabel>
                            <FormControl>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    international
                                    inputComponent={InputComponent}
                                    countrySelectComponent={
                                        CountrySelectComponent
                                    }
                                    value={field.value}
                                    onChange={(value) =>
                                        field.onChange(value || '')
                                    }
                                    className="flex items-center justify-center"
                                    flagComponent={FlagComponent}
                                />
                            </FormControl>

                            <FormDescription>
                                Built with{' '}
                                <a
                                    target="_blank"
                                    href="https://catamphetamine.gitlab.io/react-phone-number-input/"
                                    className="underline underline-offset-2"
                                >
                                    react-phone-number-input
                                </a>{' '}
                                and{' '}
                                <a
                                    target="_blank"
                                    href="https://react-hook-form.com/"
                                    className="underline underline-offset-2"
                                >
                                    react-hook-form
                                </a>
                            </FormDescription>

                            <FormMessage />
                        </FormItem>
                    )}
                />
            </form>
        </Form>
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
