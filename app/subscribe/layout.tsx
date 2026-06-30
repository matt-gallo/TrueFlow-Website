import type { Metadata } from 'next'

const title = 'Subscribe — The Daily AI Brief for Business Owners | TrueFlow'
const description =
  "You run the business. We'll watch the AI space. One email each morning with only the AI news that actually matters to operators. Subscribe free."
const ogImage = 'https://trueflow.ai/og-subscribe.png'

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://trueflow.ai/subscribe',
  },
  openGraph: {
    title,
    description,
    type: 'website',
    url: 'https://trueflow.ai/subscribe',
    siteName: 'TrueFlow AI',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'TrueFlow — The Daily AI Brief for Business Owners',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [ogImage],
  },
}

export default function SubscribeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
