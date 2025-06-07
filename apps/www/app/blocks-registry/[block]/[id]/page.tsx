import { ComponentLoaderClient } from '@/app/(app)/_components/component-loader-client'
import { getBlockCategory } from '@/config/registry/blocks'
import { notFound } from 'next/navigation'

export default async function Component({
    params,
}: {
    params: Promise<{ block: string; id: string }>
}) {
    const par = await params
    const category = getBlockCategory(par.block)
    const block = category?.blocks.find((b) => b.id === par.id)

    if (!block) {
        return notFound()
    }

    return <ComponentLoaderClient component={block} />
}
