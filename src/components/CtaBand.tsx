import { Link } from '../lib/router'
import { Reveal } from './Reveal'
import { CTA } from '../lib/content'

/** Dark, dramatic closing statement — the site's "foot-cta" beat, always the last
 * thing a visitor sees before the footer, matching the reference's royal rhythm. */
export function CtaBand() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 overflow-hidden" style={{ background: 'var(--ink)' }}>
      {/* soft gold glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(224,191,120,0.14) 0%, transparent 60%)' }}
      />
      <div className="relative max-w-4xl">
        <Reveal>
          <p className="mono text-[10px] uppercase tracking-[0.22em] mb-6" style={{ color: 'var(--gold-light)' }}>
            Work with us
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-grad-gold font-serif text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-[1.15] mb-8">
            {CTA.heading}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-base md:text-lg font-light max-w-2xl mb-10 leading-relaxed" style={{ color: 'var(--ivory-soft)' }}>
            {CTA.sub}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 rounded-lg font-medium transition-colors duration-200"
              style={{ background: 'var(--gold)', color: 'var(--ink)' }}
            >
              {CTA.primary}
            </Link>
            <Link
              to="/certifications"
              className="border px-8 py-3.5 rounded-lg font-medium transition-all duration-200 hover:bg-[rgba(224,191,120,0.1)]"
              style={{ borderColor: 'rgba(224,191,120,0.35)', color: 'var(--ivory)' }}
            >
              {CTA.secondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
