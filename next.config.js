/** @type {import('next').NextConfig} */
const nextConfig = {
  // ============================================================
  // TEMPORARY REDIRECT — Remove this block when ready to restore
  // ============================================================
  async redirects() {
    return [
      {
        source: '/:path*',
        destination: 'https://trueflowai.onboard-regi.org',
        permanent: false,
      },
    ]
  },
  // ============================================================
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