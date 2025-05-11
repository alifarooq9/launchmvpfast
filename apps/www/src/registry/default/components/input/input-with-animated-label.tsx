import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useId } from 'react'

export default function InputWithAnimatedLabel() {
    const id = useId()

    return (
        <div className="group relative w-full max-w-4/5">
            <Label
                htmlFor={id}
                className="text-muted-foreground group-focus-within:text-foreground bg-background has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 left-2 origin-center -translate-y-1/2 cursor-text px-1 transition-all group-focus-within:top-0 group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
            >
                Label with Animation
            </Label>
            <Input
                id={id}
                type="text"
                className="dark:bg-background"
                placeholder=""
            />
        </div>
    )
}
