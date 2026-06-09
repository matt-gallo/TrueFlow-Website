/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => `build-${Date.now()}`,
  // Raise the per-page static-generation limit (default 60s). With 140+ blog
  // routes statically generated, slower build workers can exceed the default
  // and SIGTERM the build. This is a safe ceiling, not a behavior change.
  staticPageGenerationTimeout: 180,
  images: {
    domains: ['images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
