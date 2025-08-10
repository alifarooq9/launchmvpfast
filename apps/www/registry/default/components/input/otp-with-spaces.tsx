import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from '@/registry/default/ui/input-otp'
import { Label } from '@/registry/default/ui/label'

// Change the inputLength to the desired number of slots
const inputLength = 6

export default function OtpWithSpaces() {
    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label>OTP with spaces</Label>

            <InputOTP maxLength={inputLength}>
                <InputOTPGroup className="gap-1">
                    {Array.from({ length: inputLength }, (_, index) => (
                        <InputOTPSlot
                            key={index}
                            index={index}
                            className="rounded-md border"
                        />
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
