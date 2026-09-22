'use client'

/**
 * /app-development-updates — what has changed in the TrueFlow app, in public.
 *
 * The same record customers see inside the product, on the marketing site, so
 * somebody deciding whether to trust a young tool can watch it being built
 * rather than take a claim about pace on faith.
 *
 * Entries come from the app's own changelog through /api/app-updates, which
 * strips the engineering detail — no commits, no file counts, no author.
 */

import { useEffect, useState } from 'react'
import Navigation from '@/app/components/Navigation'
import { Footer } from '@/app/components/Footer'
import { useTheme } from '@/app/components/ThemeProvider'
import { Sparkles, Wrench, Loader2 } from 'lucide-react'

interface Entry {
  version: string
  date: string
  title: string
  summary: string
  description?: string
  features: number
  fixes: number
  highlights: string[]
}

const when = (iso: string) => {
  const d = new Date(iso)
  return Number.isNaN(d.getTime())
    ? ''
    : d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
}

export default function AppDevelopmentUpdates() {
  const { isDarkMode } = useTheme()
  const [entries, setEntries] = useState<Entry[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/app-updates')
      .then(r => r.json())
      .then(j => { setEntries(j?.entries ?? []); if (j?.error) setError(j.error) })
      .catch(() => setError('Could not load the updates right now.'))
      .finally(() => setLoading(false))
  }, [])

  const ink = isDarkMode ? 'text-white' : 'text-gray-900'
  const dim = isDarkMode ? 'text-gray-400' : 'text-gray-600'
  const card = isDarkMode ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
  const totals = entries.reduce(
    (a, e) => ({ features: a.features + e.features, fixes: a.fixes + e.fixes }),
    { features: 0, fixes: 0 },
  )

  return (
    <div className={isDarkMode ? 'min-h-screen bg-black' : 'min-h-screen bg-gray-50'}>
      <Navigation />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <header className="mb-10">
          <h1 className={`text-4xl sm:text-5xl font-bold tracking-tight ${ink}`}>
            What we shipped
          </h1>
          <p className={`mt-4 text-lg ${dim}`}>
            Every release to the TrueFlow app, as it goes out. No roadmap, no promises — the
            things that are already in there.
          </p>

          {entries.length > 0 && (
            <div className={`mt-6 flex flex-wrap gap-x-8 gap-y-2 text-sm ${dim}`}>
              <span className="inline-flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-cyan-500" />
                <strong className={ink}>{totals.features}</strong> new features
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Wrench className="w-4 h-4 text-amber-500" />
                <strong className={ink}>{totals.fixes}</strong> fixes
              </span>
              <span>
                across <strong className={ink}>{entries.length}</strong> releases
              </span>
            </div>
          )}
        </header>

        {loading && (
          <div className="flex justify-center py-16">
            <Loader2 className={`w-6 h-6 animate-spin ${dim}`} />
          </div>
        )}

        {!loading && entries.length === 0 && (
          <p className={dim}>{error ?? 'Nothing published yet.'}</p>
        )}

        <ol className="space-y-4">
          {entries.map(e => (
            <li key={e.version} className={`rounded-2xl border p-6 ${card}`}>
              <div className={`flex flex-wrap items-baseline gap-x-3 text-sm ${dim}`}>
                <time dateTime={e.date}>{when(e.date)}</time>
                <span className="font-mono text-xs opacity-70">{e.version}</span>
              </div>

              <h2 className={`mt-2 text-xl font-semibold ${ink}`}>{e.title}</h2>
              {e.description && <p className={`mt-2 leading-relaxed ${dim}`}>{e.description}</p>}

              {e.highlights.length > 0 && (
                <ul className={`mt-4 space-y-1.5 text-sm ${dim}`}>
                  {e.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden="true" className="select-none">·</span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>

        {!loading && entries.length > 0 && (
          <p className={`mt-10 text-sm ${dim}`}>
            Updated automatically as releases go out.
          </p>
        )}
      </main>

      <Footer />
    </div>
  )
}
