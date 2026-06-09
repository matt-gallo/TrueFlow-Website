import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' })

export const metadata: Metadata = {
  title: 'TrueFlow — Custom AI Solutions for Category-Leading Brands',
  description:
    'Custom AI solutions for category-leading brands. The systems that move you from using AI to building an advantage with it — embedded into your business and your products, yours to keep.',
  // Work-in-progress: keep the new site out of search until it goes live.
  robots: { index: false, follow: false },
  openGraph: {
    title: 'TrueFlow — Custom AI Solutions for Category-Leading Brands',
    description:
      'The systems that move you from using AI to building an advantage with it — embedded into your business and your products, yours to keep.',
    type: 'website',
    siteName: 'TrueFlow',
  },
}

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${fraunces.variable}`}>
      {children}
    </div>
  )
}
