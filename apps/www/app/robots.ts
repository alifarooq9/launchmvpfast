import { MetadataRoute } from 'next'
import { urls } from '@/config/urls'
import { components } from '@/config/registry/components'
import { blocks } from '@/config/registry/blocks'

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
                    ...components.default.map(
                        (category) => `${urls.app.components}/${category.id}`
                    ),
                    ...blocks.default.map(
                        (category) => `${urls.app.blocks}/${category.id}`
                    ),
                    ...blocks.default.flatMap((category) =>
                        category.blocks.map(
                            (block) =>
                                `${urls.app.blocksView}/${category.id}/${block.id}`
                        )
                    ),
                ],
                disallow: ['/api', '/secret'],
            },
        ],
        sitemap: `${urls.public}/sitemap.xml`,
        host: urls.public,
    }
}
