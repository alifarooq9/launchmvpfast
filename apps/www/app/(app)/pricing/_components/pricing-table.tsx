import { SendProposalDialog } from '@/app/(app)/pricing/_components/send-proposal-dialog'
import { Badge } from '@/components/ui/badge'
import { BorderTrail } from '@/components/ui/border-trail'
import { buttonVariants } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { plans, PricingPlan } from '@/config/pricing'
import { CheckIcon } from 'lucide-react'
import Link from 'next/link'

export default function PricingTable() {
    return (
        <section className="container grid flex-1 grid-cols-1 grid-rows-[auto_auto] gap-6 md:grid-cols-2">
            {plans.map((plan) => (
                <PricingTableItem key={plan.id} plan={plan} />
            ))}
        </section>
    )
}

export function PricingTableItem({ plan }: { plan: PricingPlan }) {
    return (
        <Card className="relative row-span-3 grid grid-rows-subgrid gap-2 overflow-hidden pt-0 xl:py-4 xl:pt-0">
            <div className="bg-background row-span-2 space-y-6 rounded-b-xl border-b p-4 shadow-sm">
                <CardHeader className="mesh-background grain-effect relative space-y-8 overflow-hidden rounded-md p-4 xl:p-4">
                    <Badge
                        variant="secondary"
                        className="relative z-10 px-3 py-1.5 text-sm font-semibold uppercase"
                    >
                        {plan.name}
                    </Badge>

                    <h3 className="font-heading relative z-10 mt-auto text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {plan.price}
                        {plan.textAfterPrice && (
                            <span className="text-lg font-medium">
                                {plan.textAfterPrice}
                            </span>
                        )}
                    </h3>
                </CardHeader>

                <p className="text-foreground/80">{plan.description}</p>

                {plan.buttonType === 'link' ? (
                    <Link
                        href={plan.buttonUrl as string}
                        className={buttonVariants({
                            size: 'lg',
                            className: 'w-full',
                        })}
                    >
                        {plan.buttonText}
                    </Link>
                ) : (
                    <SendProposalDialog />
                )}
            </div>

            <CardContent>
                <ul className="row-span-1 flex flex-col gap-2 py-3">
                    <p className="text-sm font-semibold">
                        What&apos;s included in {plan.name}:
                    </p>
                    {plan.features.map((feature, index) => (
                        <li
                            key={index}
                            className="text-muted-foreground flex items-center gap-1 text-sm font-medium"
                        >
                            <CheckIcon className="size-4" /> {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>

            {plan.isRecommended && (
                <BorderTrail
                    style={{
                        boxShadow:
                            '0px 0px 100px 50px rgb(255 255 255 / 50%), 0 0 100px 60px rgb(0 0 0 / 50%), 0 0 140px 90px rgb(0 0 0 / 50%)',
                    }}
                    size={200}
                />
            )}
        </Card>
    )
}
