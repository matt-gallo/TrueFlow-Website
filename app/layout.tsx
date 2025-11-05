import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TrueFlow AI - Streamline. Scale. Succeed.',
  description: 'Your all-in-one business operations command center. One platform. Total control over content creation, lead management, customer support, and compliance monitoring.',
  keywords: 'business automation, AI platform, operations center, content creation, lead management, customer support, compliance, TrueFlow',
  authors: [{ name: 'TrueFlow AI' }],
  openGraph: {
    title: 'TrueFlow AI - Streamline. Scale. Succeed.',
    description: 'Your all-in-one business operations command center. One platform. Total control.',
    type: 'website',
    siteName: 'TrueFlow AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TrueFlow AI - Streamline. Scale. Succeed.',
    description: 'Your all-in-one business operations command center. One platform. Total control.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/true-flow-icon.png" type="image/png" />
        <link rel="shortcut icon" href="/true-flow-icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/true-flow-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/true-flow-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/true-flow-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/true-flow-icon.png" />
        <meta name="theme-color" content="#000000" />
        <script dangerouslySetInnerHTML={{
          __html: `(function(doc, tag, id){var js = doc.getElementsByTagName(tag)[0];if (doc.getElementById(id)) {return;}js = doc.createElement(tag); js.id = id;js.src = "https://leadhacker.aipreneurs.com/px.min.js";js.type = "text/javascript";doc.head.appendChild(js);js.onload = function() {pxfired();};}(document, 'script', 'px-grabber'));function pxfired() {PxGrabber.setOptions({Label: "86197454|" + window.location.href,});PxGrabber.render();};`
        }} />
      </head>
      <body 
        className={inter.className} 
        style={{ 
          background: '#000000', 
          margin: 0, 
          padding: 0,
          backgroundImage: 'none',
          animation: 'none'
        }}
        suppressHydrationWarning={true}
      >
        <script dangerouslySetInnerHTML={{
          __html: `
            // Only run if we're in an iframe
            if (window.parent !== window) {
              // Notify parent frame of navigation changes
              const originalPushState = history.pushState;
              const originalReplaceState = history.replaceState;
              
              history.pushState = function() {
                originalPushState.apply(history, arguments);
                window.parent.postMessage({
                  type: 'navigation',
                  path: window.location.pathname
                }, '*');
              };
              
              history.replaceState = function() {
                originalReplaceState.apply(history, arguments);
                window.parent.postMessage({
                  type: 'navigation',
                  path: window.location.pathname
                }, '*');
              };
              
              window.addEventListener('popstate', function() {
                window.parent.postMessage({
                  type: 'navigation',
                  path: window.location.pathname
                }, '*');
              });
              
              // Listen for parent navigation requests
              window.addEventListener('message', function(e) {
                if (e.data.type === 'navigate') {
                  window.location.pathname = e.data.path;
                }
              });
            }
          `
        }} />
        <div suppressHydrationWarning={true}>
          {children}
        </div>
      </body>
    </html>
  )
}