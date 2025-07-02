export const urls = {
    base: '/',
    public: 'https://launchmvpfast.com',
    app: {
        // Main public site pages
        home: '/',
        about: '/about',
        services: '/services',
        invest: '/invest',
        impact: '/impact',
        blog: '/blog',
        partners: '/partners',
        contact: '/contact',
        legal: '/legal',
        
        // Legacy pages (keeping for backward compatibility)
        components: '/components',
        starterkits: {
            base: '/open-source-starterkits',
            saasNextjs: {
                base: '/open-source-starterkits/open-source-nextjs-saas-starterkit',
                preview: 'https://saas.launchmvpfast.com',
            },
        },
        blocks: '/blocks',
        pricing: '/pricing',
        earlyAccess: '/early-access',
        blocksRegistry: '/blocks-registry',
    },
    docs: {
        base: '/docs',
    },
    api: {
        publicStats: '/api/public-stats',
        equipmentStatus: '/api/equipment-status',
        marketData: '/api/market-data',
        newsFeed: '/api/news-feed',
    },
    socials: {
        gh: 'https://github.com/alifarooq9/launchmvpfast',
        suggestions:
            'https://github.com/alifarooq9/launchmvpfast/discussions/categories/suggestions',
        x: 'https://x.com/AliFarooqDev',
        ali: 'https://x.com/AliFarooqDev',
    },
} as const
