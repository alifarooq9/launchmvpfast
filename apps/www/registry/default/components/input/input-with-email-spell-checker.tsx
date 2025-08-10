'use client'

import { Input } from '@/registry/default/ui/input'
import { Label } from '@/registry/default/ui/label'
import { MailIcon } from 'lucide-react'
import React, { useId } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import emailSpellChecker from '@zootools/email-spell-checker'

export default function InputWithEmailSpellChecker() {
    const id = useId()
    const [value, setValue] = React.useState<string>('')

    const [suggestion, setSuggestion] = React.useState<string | null>(null)
    const debounced = useDebouncedCallback((value) => {
        const suggestion = emailSpellChecker.run({
            email: value,
        })

        if (suggestion) {
            setSuggestion(suggestion.full)
        }
    }, 500)

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.target.value
        setValue(inputValue)
        debounced(inputValue)
    }

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Input with email spell checker</Label>

            <div className="relative w-full">
                <MailIcon className="text-muted-foreground pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />

                <Input
                    id={id}
                    type="text"
                    className="ps-8"
                    placeholder="ali@gnial.com"
                    value={value}
                    onChange={handleOnChange}
                />
            </div>

            {suggestion && (
                <p>
                    <span className="text-foreground text-sm">
                        Did you mean{' '}
                        <button
                            onClick={() => {
                                setValue(suggestion)
                                setSuggestion(null)
                            }}
                            className="focus-visible:border-ring focus-visible:ring-ring/50 cursor-pointer font-bold transition-all outline-none hover:underline hover:underline-offset-4 focus-visible:ring-[3px]"
                            type="button"
                        >
                            {suggestion}
                        </button>
                        ?
                    </span>
                </p>
            )}

            <p className="text-muted-foreground text-sm">
                Built with{' '}
                <a
                    href="https://github.com/smashsend/email-spell-checker"
                    target="_blank"
                    className="underline underline-offset-4"
                    rel="noreferrer"
                >
                    @zootools/email-spell-checker
                </a>
            </p>
        </div>
    )
}
