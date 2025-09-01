/** @type {import('next').NextConfig} */

const isGithubPages = process.env.NODE_ENV === 'production';
const nextConfig = {
  // Enable experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },

  basePath: isGithubPages ? '/akshay-patel-portfolio' : '',
  assetPrefix: isGithubPages ? '/akshay-patel-portfolio/' : '',

  // Image optimization settings
  images: {
    // Enable modern image formats
    formats: ['image/webp', 'image/avif'],

    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],

    // Image sizes for different breakpoints
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],

    // Minimum cache TTL (Time To Live)
    minimumCacheTTL: 60,

    // Enable blur placeholder
    dangerouslyAllowSVG: true,

    // Content security policy for images
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",

    // Remote patterns for external images (if needed)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  // Performance optimizations
  compiler: {
    // Remove console.log in production
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Webpack optimizations
  webpack: (config, { dev, isServer }) => {
    // Optimize bundle size
    if (!dev && !isServer) {
      config.optimization.splitChunks.chunks = 'all'
    }

    // Enable tree shaking
    config.optimization.usedExports = true

    return config
  },

  // Headers for performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },

  // Enable SWC minification
  swcMinify: true,
}

module.exports = nextConfig
