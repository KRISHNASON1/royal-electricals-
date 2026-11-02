/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
  async headers() {
    return [
      {
        source: '/Royal-Electricals-Catalog.pdf',
        headers: [
          {
            key: 'Content-Disposition',
            value: 'attachment; filename="Royal-Electricals-Catalog.pdf"',
          },
        ],
      },
    ]
  },
  // Enable standalone output for Cloud Run deployment
  output: 'standalone',
}

module.exports = nextConfig
