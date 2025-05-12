'use client'

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'
import { useId } from 'react'

// Change the inputLength to the desired number of slots
const inputLength = 6

export default function OtpWithNumbersOnly() {
    const id = useId()

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>OTP with numbers only</Label>

            <InputOTP
                maxLength={inputLength}
                inputMode="numeric"
                onChange={(e) => {
                    //if value is not a number, return
                    if (isNaN(Number(e))) {
                        return
                    }
                }}
            >
                <InputOTPGroup>
                    {Array.from({ length: inputLength }, (_, index) => (
                        <InputOTPSlot key={index} index={index} />
                    ))}
                </InputOTPGroup>
            </InputOTP>

            <p className="text-muted-foreground text-sm">
                Built with{' '}
                <a
                    target="_blank"
                    href="https://input-otp.rodz.dev/"
                    className="underline underline-offset-3"
                >
                    input-otp
                </a>{' '}
            </p>
        </div>
    )
}
