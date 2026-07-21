import { Link } from '../lib/router'
import { Reveal } from './Reveal'
import { CTA } from '../lib/content'

export function CtaBand() {
  return (
    <section className="relative px-6 md:px-12 lg:px-16 py-28 md:py-40 border-t border-black/10 overflow-hidden">
      {/* soft green glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(14,16,12,0.05) 0%, transparent 60%)' }}
      />
      <div className="relative max-w-4xl">
        <Reveal>
          <p className="kicker mb-6">Work with us</p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="text-grad text-4xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.04] mb-8">
            {CTA.heading}
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-base md:text-lg text-[var(--ink-soft)] font-light max-w-2xl mb-10 leading-relaxed">
            {CTA.sub}
          </p>
        </Reveal>
        <Reveal delay={240}>
          <div className="flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="btn-pill px-8 py-3.5 rounded-lg font-medium"
            >
              {CTA.primary}
            </Link>
            <Link
              to="/certifications"
              className="border border-black/15 text-[var(--ink)] px-8 py-3.5 rounded-lg font-medium hover:bg-[var(--ink)] hover:text-white transition-all duration-200"
            >
              {CTA.secondary}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
