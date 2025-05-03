import { MetadataRoute } from 'next'
import { urls } from '@/config/urls'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = urls.public
    const now = new Date()

    const paths = [
        urls.base,
        urls.app.components,
        urls.app.starterkits.base,
        urls.app.starterkits.saasNextjs.base,
        urls.app.blocks,
        urls.app.pricing,
        urls.app.earlyAccess,
        urls.docs.base,
    ]

    return paths.map((path) => ({
        url: `${baseUrl}${path}`,
        lastModified: now,
    }))
}
