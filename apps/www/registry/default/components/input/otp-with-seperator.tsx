import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
} from '@/components/ui/input-otp'
import { Label } from '@/components/ui/label'

// Change the inputLength to the desired number of slots
const inputLength = [3, 3]
const sum = () => inputLength.reduce((a, b) => a + b, 0)

export default function OtpWithSeperator() {
    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label>OTP with seperator</Label>

            <InputOTP maxLength={sum()}>
                <InputOTPGroup>
                    {Array.from({ length: inputLength[0] }, (_, index) => (
                        <InputOTPSlot key={index} index={index} />
                    ))}
                </InputOTPGroup>
                <InputOTPSeparator className="text-muted" />
                <InputOTPGroup>
                    {Array.from({ length: inputLength[1] }, (_, index) => (
                        <InputOTPSlot
                            key={index}
                            index={index + inputLength[0]}
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
