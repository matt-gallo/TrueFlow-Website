/** @type {import('next').NextConfig} */
const nextConfig = {
  generateBuildId: () => `build-${Date.now()}`,
  // Raise the per-page static-generation limit (default 60s). With 140+ blog
  // routes statically generated, slower build workers can exceed the default
  // and SIGTERM the build. This is a safe ceiling, not a behavior change.
  staticPageGenerationTimeout: 180,
  images: {
    domains: ['images.unsplash.com', 'd8j0ntlcm91z4.cloudfront.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        // Generated blog thumbnails (Higgsfield CDN). Without this host here,
        // next/image refuses the URL and the card renders alt text only.
        protocol: 'https',
        hostname: 'd8j0ntlcm91z4.cloudfront.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
