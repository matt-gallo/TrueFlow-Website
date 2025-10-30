/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/get-started',
        destination: '/ai-readiness-assessment',
        permanent: true,
      },
      {
        source: '/readiness-assessment',
        destination: '/ai-readiness-assessment',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig