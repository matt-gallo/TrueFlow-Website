import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Front Range Founders Coffee Club - TrueFlow AI',
  description: 'An intimate gathering for local business owners navigating the tension between technology and human connection.',
  keywords: 'founders, coffee meetup, business community, Colorado, networking',
  authors: [{ name: 'TrueFlow AI' }],
  openGraph: {
    title: 'Front Range Founders Coffee Club',
    description: 'An intimate gathering for local business owners navigating the tension between technology and human connection.',
    type: 'website',
    siteName: 'TrueFlow AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Front Range Founders Coffee Club',
    description: 'An intimate gathering for local business owners navigating the tension between technology and human connection.',
  },
}

export default function CoffeeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Remove webchat widget script from coffee funnel pages */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Hide the GHL chat widget on coffee pages */
          #chat-widget-container,
          .chat-widget,
          iframe[src*="leadconnectorhq.com"] {
            display: none !important;
          }
        `
      }} />
      {children}
    </>
  )
}
