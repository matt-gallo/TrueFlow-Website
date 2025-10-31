import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Readiness Assessment - TrueFlow',
  description: 'Discover how automation can help your business grow. Take our free readiness assessment.',
}

export default function AIReadinessAssessment() {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
        <script async src="https://tally.so/widgets/embed.js"></script>
        <style type="text/css">
          {`
            html, body {
              margin: 0;
              height: 100%;
              background: #030712;
              color: #f8fafc;
            }

            body {
              display: flex;
              justify-content: center;
              align-items: stretch;
              background:
                radial-gradient(120% 120% at 0% 0%, rgba(34, 211, 238, 0.08), transparent 58%),
                radial-gradient(95% 95% at 100% 0%, rgba(99, 102, 241, 0.12), transparent 60%),
                radial-gradient(120% 120% at 50% 100%, rgba(168, 85, 247, 0.1), transparent 62%),
                #030712;
            }

            iframe {
              width: min(920px, 100%);
              flex: 1 1 auto;
              border: 0;
              min-height: 100vh;
              box-shadow: 0 24px 80px rgba(15, 118, 255, 0.22), 0 12px 40px rgba(14, 165, 233, 0.15);
              border-radius: 28px;
              overflow: hidden;
            }

            @media (max-width: 1024px) {
              body {
                padding: clamp(16px, 8vw, 48px);
              }

              iframe {
                width: 100%;
                border-radius: 24px;
                min-height: calc(100vh - clamp(16px, 8vw, 48px) * 2);
              }
            }
          `}
        </style>
      </head>
      <body>
        <iframe
          src="https://tally.so/embed/w4ODAY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          width="100%"
          height="100%"
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          title="Readiness Assessment"
        />
      </body>
    </html>
  )
}
