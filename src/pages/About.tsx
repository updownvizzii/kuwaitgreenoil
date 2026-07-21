import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { StatCounter } from '../components/StatCounter'
import { CtaBand } from '../components/CtaBand'
import { ImageBand } from '../components/ImageBand'
import { Location } from '../components/Location'
import { MANIFESTO, MILESTONES, WHY_US, PROOF_STATS } from '../lib/content'

export function About() {
  return (
    <div className="bg-[var(--bg)]">
      <PageHeader eyebrow="Who we are" title={'Built for the\ndemands of energy.'} sub={MANIFESTO.body} />

      {/* Timeline */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-[var(--line)]">
        <Reveal><p className="kicker mb-5">Timeline</p></Reveal>
        <Reveal delay={60}>
          <h2 className="text-grad font-serif text-3xl md:text-5xl font-medium tracking-tight mb-16" style={{ letterSpacing: '0.005em' }}>
            Six years of precision
          </h2>
        </Reveal>

        <div className="flex flex-col">
          {MILESTONES.map((m) => (
            <Reveal key={m.year}>
              <article className="group grid grid-cols-1 md:grid-cols-[140px_1fr] gap-6 md:gap-12 py-12 border-t border-[var(--line)] transition-colors duration-300 hover:border-[var(--gold)]/40">
                <span className="font-serif text-2xl md:text-3xl font-medium text-[var(--gold-deep)] md:pt-1 tracking-tight">
                  {m.year}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">{m.heading}</h3>
                  <p className="text-sm md:text-base text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl mb-6">
                    {m.body}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-soft)] border border-[var(--line)] rounded-full px-4 py-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ImageBand
        image="/kgec-facility-sunset.jpg"
        eyebrow="On the ground"
        quote="Workshop and field teams working the same scope, so nothing gets lost in the handover."
      />

      {/* Why us */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-[var(--line)]">
        <Reveal><p className="kicker mb-5">Why KGEC</p></Reveal>
        <Reveal delay={60}>
          <h2 className="text-grad font-serif text-3xl md:text-5xl font-medium tracking-tight mb-16 max-w-3xl" style={{ letterSpacing: '0.005em' }}>
            Four reasons operators choose us.
          </h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
          {WHY_US.map((w, i) => (
            <Reveal key={w.title} delay={i * 70}>
              <div className="feature-card rounded-2xl p-8 md:p-12 h-full">
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-4">{w.title}</h3>
                <p className="text-sm text-[var(--ink-soft)] font-light leading-relaxed">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-[var(--line)]">
        <Reveal><p className="kicker mb-12 md:mb-16">By the numbers</p></Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {PROOF_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="group">
                <span className="block text-grad-gold font-serif text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight mb-3">
                  <StatCounter raw={s.val} suffix={s.suffix} />
                </span>
                <div className="h-px w-10 bg-[var(--gold)] mb-4 transition-all duration-500 group-hover:w-20" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[var(--ink-soft)] leading-relaxed block max-w-[220px]">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <Location />

      <CtaBand />
    </div>
  )
}
