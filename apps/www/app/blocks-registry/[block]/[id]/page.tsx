import { ComponentLoaderServer } from '@/app/(app)/_components/component-loader-server'
import { getBlockCategory } from '@/config/registry/blocks'
import MotionProvider from '@/registry/default/lib/motion-provider'

export default async function Component({
    params,
}: {
    params: Promise<{ block: string; id: string }>
}) {
    const par = await params
    const category = getBlockCategory(par.block)
    const block = category?.blocks.find((b) => b.id === par.id)

    if (!block) {
        return (
            <div className="flex h-full w-full items-center justify-center">
                Block not found
            </div>
        )
    }

    return (
        <MotionProvider>
            <ComponentLoaderServer component={block} />
        </MotionProvider>
    )
}
