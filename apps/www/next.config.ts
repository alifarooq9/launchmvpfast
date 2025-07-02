import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    /* Performance Optimizations */
    
    // Enable experimental features for better performance
    experimental: {
        optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
        webVitalsAttribution: ['CLS', 'LCP'],
    },
    
    // Image optimization
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'assets.aceternity.com',
                pathname: '/**',
            }
        ],
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 31536000, // 1 year
    },
    
    // Compiler optimizations
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    
    // Bundle analysis and optimization
    webpack: (config, { isServer }) => {
        // Optimize bundle splitting
        if (!isServer) {
            config.optimization.splitChunks = {
                ...config.optimization.splitChunks,
                cacheGroups: {
                    ...config.optimization.splitChunks?.cacheGroups,
                    vendor: {
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendors',
                        chunks: 'all',
                        maxSize: 244000, // 244kb
                    },
                    radix: {
                        test: /[\\/]node_modules[\\/]@radix-ui[\\/]/,
                        name: 'radix',
                        chunks: 'all',
                        priority: 10,
                    },
                    ui: {
                        test: /[\\/]components[\\/]ui[\\/]/,
                        name: 'ui',
                        chunks: 'all',
                        priority: 5,
                    },
                },
            }
        }
        return config
    },
    
    // Enable compression
    compress: true,
}

export default nextConfig
