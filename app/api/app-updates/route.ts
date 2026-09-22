/**
 * /api/app-updates — the app's changelog, fetched server-side.
 *
 * Going through here rather than calling app.trueflow.ai from the browser
 * keeps the marketing site free of a cross-origin dependency it cannot fix,
 * and lets the response be cached so a burst of readers is one request.
 */
import { NextResponse } from 'next/server'

export const revalidate = 300

const SOURCE = process.env.NEXT_PUBLIC_APP_URL || 'https://app.trueflow.ai'

export async function GET() {
  try {
    const res = await fetch(`${SOURCE}/api/changelog?audience=user&limit=50`, {
      next: { revalidate },
      headers: { accept: 'application/json' },
    })
    if (!res.ok) {
      return NextResponse.json({ entries: [], error: `The app returned ${res.status}` }, { status: 200 })
    }
    const json = await res.json()
    const rows: any[] = Array.isArray(json?.data) ? json.data : []

    // Only what a public page should show. No commit hashes, no file counts,
    // no author — this is a record of what changed for people who use it.
    return NextResponse.json({
      entries: rows.map(r => ({
        version: r.version,
        date: r.deployment_date || r.release_date,
        title: r.user_title || r.title || r.summary,
        summary: r.summary,
        description: r.description,
        features: r.feature_count ?? 0,
        fixes: r.bug_fix_count ?? 0,
        highlights: Array.isArray(r.highlights)
          ? r.highlights.map((h: any) => (typeof h === 'string' ? h : `${h?.icon ?? ''} ${h?.text ?? ''}`.trim())).filter(Boolean)
          : [],
      })),
    })
  } catch (e) {
    // A marketing page that 500s because the app is down is worse than one
    // that says it could not reach it.
    return NextResponse.json({ entries: [], error: 'Could not reach the app right now.' }, { status: 200 })
  }
}
