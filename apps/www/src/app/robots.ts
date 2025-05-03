import { MetadataRoute } from 'next'
import { urls } from '@/config/urls'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: '*',
                allow: [
                    urls.base,
                    urls.app.components,
                    urls.app.starterkits.base,
                    urls.app.starterkits.saasNextjs.base,
                    urls.app.blocks,
                    urls.app.pricing,
                    urls.app.earlyAccess,
                    urls.docs.base,
                ],
                disallow: ['/api', '/secret'],
            },
        ],
        sitemap: `${urls.public}/sitemap.xml`,
        host: urls.public,
    }
}
