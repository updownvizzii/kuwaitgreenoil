import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { CAREERS, SITE } from '../lib/content'

export function Careers() {
  return (
    <div className="bg-[var(--bg)]">
      <PageHeader eyebrow="Careers at KGEC" title={CAREERS.heading} sub={CAREERS.body} />

      {/* Pillars */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-black/10">
        <Reveal><p className="kicker mb-5">What to expect</p></Reveal>
        <Reveal delay={60}>
          <h2 className="text-grad text-3xl md:text-5xl font-light tracking-tight mb-16 max-w-3xl" style={{ letterSpacing: '-0.03em' }}>
            Why engineers stay at KGEC.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
          {CAREERS.pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div className="feature-card rounded-2xl p-8 md:p-12 h-full">
                <span className="font-mono text-sm text-[var(--green-ink)] block mb-8">0{i + 1}</span>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">{p.title}</h3>
                <p className="text-sm text-[var(--ink-soft)] font-light leading-relaxed">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Apply */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-black/10 grid md:grid-cols-[260px_1fr] gap-10 md:gap-20">
        <Reveal><p className="kicker md:pt-2">How to apply</p></Reveal>
        <div>
          <Reveal>
            <p className="text-xl md:text-2xl text-[var(--ink)]/80 font-light leading-relaxed max-w-2xl mb-8">
              {CAREERS.note}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <a
              href={`mailto:${SITE.email}?subject=Career Application — KGEC`}
              className="inline-block mono text-base md:text-lg text-[var(--green-ink)] hover:text-[var(--green)] border-b border-[var(--green)]/40 hover:border-[var(--green)] pb-1 transition-colors"
            >
              {SITE.email}
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
