import {
    SectionContent,
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import { buttonVariants } from '@/components/ui/button'

export function CallToAction() {
    return (
        <SectionHeader>
            <SectionContent className="border-border bg-background w-fit rounded-xl border py-16">
                <SectionHeading>
                    Have an Idea?{' '}
                    <span className="text-foreground/70">
                        tell us we can create your
                    </span>{' '}
                    MVP 10x Faster.
                </SectionHeading>
                <SectionDescription>
                    Skip the hassle of building your MVP from scratch yourself.
                    Let us take care of your MVP development so you can focus on
                    growing it.
                </SectionDescription>
                <div className="mt-6 flex justify-center">
                    <a
                        href="https://cal.com/launchmvpfast/30min"
                        className={buttonVariants()}
                    >
                        Book a Free Consultation
                    </a>
                </div>
            </SectionContent>
        </SectionHeader>
    )
}
