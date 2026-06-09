/**
 * TrueFlow v2 — "Noir & Gold" redesign (WORK IN PROGRESS)
 *
 * Isolated at /v2. Does NOT touch the live homepage (app/page.tsx).
 * Positioning: custom AI solutions for category-leading brands.
 * Palette: black / silver / grey, single gold accent, restrained.
 * Voice: customer-first — no "we"-led headlines, no defining-by-negation.
 */

import Image from 'next/image'
import Link from 'next/link'

export default function V2Page() {
  return (
    <div className="v2-root min-h-screen text-white antialiased overflow-x-hidden">
      {/* Scoped styles — keeps this page fully self-contained */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            .v2-root {
              background:#0a0a0b;
              font-family: var(--font-inter), -apple-system, system-ui, sans-serif;
            }
            .v2-root .serif { font-family: var(--font-fraunces), Georgia, serif; }
            .v2-root .gold-text {
              background: linear-gradient(90deg,#e7c87a,#c9a24b,#9a7b2e);
              -webkit-background-clip:text; background-clip:text; color:transparent;
            }
            .v2-root .hairline { border-color: rgba(255,255,255,0.08); }
            .v2-root .glow:before {
              content:''; position:fixed; inset:0; pointer-events:none; z-index:0; opacity:.5;
              background: radial-gradient(circle at 50% -5%, rgba(201,162,75,0.07), transparent 55%);
            }
            .v2-root .gold-btn {
              background: linear-gradient(180deg,#e7c87a,#c9a24b);
              color:#0a0a0b;
            }
          `,
        }}
      />

      <div className="glow" />

      {/* Nav */}
      <nav className="relative z-50 border-b hairline">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-20 sm:h-24 flex items-center justify-between">
          <Image
            src="/true-flow-logo.webp"
            alt="TrueFlow"
            width={160}
            height={40}
            className="h-7 sm:h-8 w-auto opacity-90"
            priority
          />
          <div className="hidden md:flex items-center gap-10 text-sm font-medium text-white/50 tracking-wide">
            <a href="#what" className="hover:text-white transition-colors">What we do</a>
            <a href="#approach" className="hover:text-white transition-colors">Approach</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
          </div>
          <Link
            href="/book-strategy-call"
            className="gold-btn text-sm font-medium px-5 sm:px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a strategy call
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pt-24 sm:pt-32 pb-20 sm:pb-28 text-center">
        <div className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] uppercase text-white/40 mb-10 sm:mb-12">
          <span className="w-8 h-px bg-[#c9a24b]/50" />
          Custom AI Solutions
          <span className="w-8 h-px bg-[#c9a24b]/50" />
        </div>

        <h1 className="serif text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight leading-[1.08] mb-7 sm:mb-8">
          Custom AI solutions for
          <br />
          <span className="gold-text italic">category-leading brands.</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-white/55 max-w-2xl mx-auto mb-10 sm:mb-12 leading-relaxed font-light">
          The systems that move you from using AI to building an advantage with it —
          embedded into your business and your products, yours to keep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <Link
            href="/book-strategy-call"
            className="gold-btn text-base font-medium px-8 py-4 rounded-full hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            Book a strategy call
          </Link>
          <a
            href="#approach"
            className="text-base font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2"
          >
            See our approach <span className="text-[#c9a24b]">→</span>
          </a>
        </div>
      </section>

      {/* Quiet proof row */}
      <section className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 pb-24 sm:pb-28">
        <div className="border-y hairline py-8 sm:py-10 grid grid-cols-3 gap-4 sm:gap-8 text-center">
          <div>
            <div className="serif text-2xl sm:text-3xl md:text-4xl mb-1">Embedded</div>
            <div className="text-[10px] sm:text-xs tracking-widest uppercase text-white/35">
              into your infrastructure
            </div>
          </div>
          <div className="border-x hairline">
            <div className="serif text-2xl sm:text-3xl md:text-4xl mb-1 gold-text">Yours</div>
            <div className="text-[10px] sm:text-xs tracking-widest uppercase text-white/35">
              to keep &amp; build on
            </div>
          </div>
          <div>
            <div className="serif text-2xl sm:text-3xl md:text-4xl mb-1">Strategic</div>
            <div className="text-[10px] sm:text-xs tracking-widest uppercase text-white/35">
              built where leverage lives
            </div>
          </div>
        </div>
      </section>

      {/* Thesis */}
      <section id="what" className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center">
        <h2 className="serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12] mb-8">
          Most AI gets bolted on.
          <br />
          The leverage is in building it <span className="gold-text italic">in.</span>
        </h2>
        <p className="text-base sm:text-lg text-white/55 leading-relaxed font-light">
          Off-the-shelf tools give every brand the same edge — which is to say, none.
          Lasting advantage comes from AI designed around how a specific business
          actually runs and what it ships to customers. That is the work.
        </p>
      </section>

      {/* Approach — three quiet steps */}
      <section id="approach" className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 py-20 sm:py-28">
        <p className="text-center text-xs tracking-[0.2em] uppercase text-white/40 mb-14">
          The Approach
        </p>
        <div className="grid md:grid-cols-3 gap-10 md:gap-14">
          {[
            {
              n: '01',
              t: 'Map the leverage',
              d: 'Start with the business, not the model. Find where AI changes the economics — in operations, in the product, in what your team can do.',
            },
            {
              n: '02',
              t: 'Architect & build',
              d: 'Design systems that fit your stack and your data, then build them to production standard — not demos that fall over in the real world.',
            },
            {
              n: '03',
              t: 'Embed & hand over',
              d: 'Integrate into the way you already work and ship. The systems live inside your business, owned by you, built to grow with it.',
            },
          ].map((s) => (
            <div key={s.n}>
              <div className="serif text-2xl gold-text mb-4">{s.n}</div>
              <h3 className="text-xl font-medium mb-3">{s.t}</h3>
              <p className="text-sm sm:text-base text-white/50 leading-relaxed font-light">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Work / proof — honest, no fabricated logos */}
      <section id="work" className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-20 sm:py-28 text-center">
        <h2 className="serif text-3xl sm:text-4xl md:text-5xl tracking-tight leading-[1.12] mb-6">
          Systems already <span className="gold-text italic">running.</span>
        </h2>
        <p className="text-base sm:text-lg text-white/55 leading-relaxed font-light mb-10">
          From always-on customer engagement to operations that no longer wait on a
          human — TrueFlow systems run unattended, recover revenue that used to slip
          away, and give operators back thousands of hours.
        </p>
        <div className="border-y hairline py-8 grid grid-cols-3 gap-4 sm:gap-8 text-center">
          <div>
            <div className="serif text-3xl md:text-4xl mb-1">24/7</div>
            <div className="text-[10px] sm:text-xs tracking-widest uppercase text-white/35">running unattended</div>
          </div>
          <div className="border-x hairline">
            <div className="serif text-3xl md:text-4xl mb-1 gold-text">1000s</div>
            <div className="text-[10px] sm:text-xs tracking-widest uppercase text-white/35">hours reclaimed</div>
          </div>
          <div>
            <div className="serif text-3xl md:text-4xl mb-1">$100k+</div>
            <div className="text-[10px] sm:text-xs tracking-widest uppercase text-white/35">revenue recovered</div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 py-24 sm:py-32 text-center">
        <h2 className="serif text-3xl sm:text-4xl md:text-6xl tracking-tight leading-[1.1] mb-8">
          Find where AI creates
          <br />
          <span className="gold-text italic">leverage in your business.</span>
        </h2>
        <Link
          href="/book-strategy-call"
          className="gold-btn inline-block text-base font-medium px-9 py-4 rounded-full hover:opacity-90 transition-opacity"
        >
          Book a strategy call
        </Link>
      </section>

      {/* Minimal footer */}
      <footer className="relative z-10 border-t hairline">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Image
            src="/true-flow-logo.webp"
            alt="TrueFlow"
            width={120}
            height={30}
            className="h-6 w-auto opacity-60"
          />
          <p className="text-xs text-white/30 tracking-wide">
            © {new Date().getFullYear()} TrueFlow. Custom AI solutions.
          </p>
        </div>
      </footer>
    </div>
  )
}
