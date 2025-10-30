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
            html { margin: 0; height: 100%; overflow: hidden; }
            iframe { position: absolute; top: 0; right: 0; bottom: 0; left: 0; border: 0; }
          `}
        </style>
      </head>
      <body>
        <iframe
          data-tally-src="https://tally.so/r/w4ODAY?transparentBackground=1"
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
