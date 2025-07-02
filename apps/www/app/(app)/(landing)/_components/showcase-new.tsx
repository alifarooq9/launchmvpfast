import {
    SectionDescription,
    SectionHeader,
    SectionHeading,
} from '@/app/(app)/_components/section-header'
import { siteConfig } from '@/config/site'
import Image from 'next/image'
import Link from 'next/link'

type Showcase = {
    name: string
    url: string
    placeholder: string
    image: string
}

const showcases: Showcase[] = [
    {
        name: 'Agricultural Monitoring Cooperative',
        url: '#',
        placeholder: 'Precision agriculture project',
        image: '/drone-images/agric-drone.png',
    },
    {
        name: 'LiDAR Mapping Initiative',
        url: '#',
        placeholder: 'Community land surveying',
        image: '/drone-images/lidar-scan.png',
    },
    {
        name: 'Delivery Network Hub',
        url: '#',
        placeholder: 'Rural logistics cooperative',
        image: '/drone-images/service-delivery.png',
    },
    {
        name: 'Fleet Management System',
        url: '#',
        placeholder: 'Shared equipment platform',
        image: '/drone-images/fleet-managment.png',
    },
    {
        name: 'Pilot Certification Program',
        url: '#',
        placeholder: 'Training & skill sharing',
        image: '/drone-images/pilot-management.png',
    },
    {
        name: 'Governance Dashboard',
        url: '#',
        placeholder: 'Democratic decision making',
        image: '/drone-images/cooperative-governance-dashboard.png',
    },
]

export function Showcase() {
    return (
        <section>
            <SectionHeader>
                <SectionHeading>
                    Showcase:{' '}
                    <span className="hidden sm:block">
                        Active Cooperative Projects
                    </span>
                </SectionHeading>
                <SectionDescription>
                    Real projects powered by our drone cooperative members
                </SectionDescription>
            </SectionHeader>
            <div className="container-wrapper">
                <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {showcases.map((showcase, idx) => (
                        <ShowcaseCard key={idx} {...showcase} />
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center p-8 mt-8 border-t">
                    <p className="text-muted-foreground text-base font-light text-center max-w-2xl">
                        Join our cooperative and launch your drone project with 
                        shared resources and community support 🚁
                    </p>
                </div>
            </div>
        </section>
    )
}

function ShowcaseCard({ name, image, url, placeholder }: Showcase) {
    return (
        <Link
            target="_blank"
            href={url}
            className="items-left flex flex-col justify-center gap-2 border-b p-4 md:border-r md:border-b-0 md:last:border-r-0"
        >
            <div className="relative aspect-video w-full">
                <Image src={image} alt={name} fill />
            </div>
            <div className="flex flex-col pt-2">
                <p className="font-heading leading-none font-medium">
                    <strong className="font-medium">{name}</strong>
                </p>
                <p className="text-muted-foreground text-light focus-ring text-sm">
                    {placeholder}
                </p>
            </div>
        </Link>
    )
}
