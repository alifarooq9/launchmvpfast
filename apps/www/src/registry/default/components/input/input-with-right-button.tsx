import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CornerRightUpIcon } from 'lucide-react'
import { Label } from '@/components/ui/label'
import { useId } from 'react'

export default function InputWithRightButton() {
    const id = useId()

    return (
        <div className="flex w-full max-w-4/5 flex-col gap-2">
            <Label htmlFor={id}>Input with right button</Label>

            <div className="flex items-center">
                <Input id={id} placeholder="Email" className="rounded-r-none" />
                <Button
                    variant="outline"
                    className="dark:bg-input/30 cursor-pointer rounded-l-none border-l-0 bg-transparent"
                >
                    <CornerRightUpIcon className="h-4 w-4" />
                </Button>
            </div>
        </div>
    )
}
