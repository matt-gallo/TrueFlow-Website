import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import CookieConsent from './components/CookieConsent'
import ConditionalTracking from './components/ConditionalTracking'
import GlobalChatWidget from './components/GlobalChatWidget'
import { ThemeProvider } from './components/ThemeProvider'

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
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '799467972653236');
            fbq('track', 'PageView');
          `
        }} />
        <noscript><img height="1" width="1" style={{display:'none'}}
          src="https://www.facebook.com/tr?id=799467972653236&ev=PageView&noscript=1"
        /></noscript>
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
        <ThemeProvider>
          <div suppressHydrationWarning={true}>
            {children}
          </div>
          <CookieConsent />
          <ConditionalTracking />
          <GlobalChatWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}