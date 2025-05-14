import CloneButton from '@/components/clone-button'
import { Ripple } from '@/components/ui/ripple'
import { cloneCmd } from '@/config/clone-cmd'

export function SaasStarterkitCta() {
    return (
        <section className="container-wrapper from-foreground/5 to-background/15 relative h-full bg-gradient-to-b p-4 py-20 md:px-6">
            <div className="flex h-full w-full flex-col items-center justify-center gap-3">
                <h2 className="font-heading mx-auto mt-4 text-center text-4xl tracking-tighter text-balance">
                    Ready to Launch Your MVP Faster?
                </h2>
                <p className="text-muted-foreground max-w-2xl text-center text-balance">
                    Stop rebuilding authentication, payment integrations, and
                    basic SaaS features. Clone this open-source Next.js starter
                    kit today and focus on what makes your application unique
                </p>

                <div className="pt-8">
                    <CloneButton
                        size="lg"
                        cloneCommand={cloneCmd.starterkits.saasNextjs.base}
                    >
                        Clone StarterKit
                    </CloneButton>
                </div>

                <Ripple
                    mainCircleSize={400}
                    mainCircleOpacity={0.2}
                    className="opacity-70"
                />
            </div>
        </section>
    )
}
