import Image from 'next/image'

export function SaasStarterkitDemo() {
    return (
        <section className="container-wrapper flex-1">
            <div className="relative aspect-video w-full overflow-hidden">
                <Image
                    src="/starterkits/saas-v1/landing.png"
                    fill
                    alt="saas-starterkit-demo"
                    quality={100}
                    placeholder="blur"
                    blurDataURL="/starterkits/saas-v1/landing.png"
                />
            </div>
        </section>
    )
}
