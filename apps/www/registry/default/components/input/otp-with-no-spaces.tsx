import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

// Change the inputLength to the desired number of slots
const inputLength = 6

export default function OtpWithNoSpaces() {
    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label>OTP without spaces</Label>

            <InputOTP maxLength={inputLength} inputMode="numeric">
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
