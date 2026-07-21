import { Hero } from '../components/Hero'
import { Reveal } from '../components/Reveal'
import { StatCounter } from '../components/StatCounter'
import { CtaBand } from '../components/CtaBand'
import { Milestones } from '../components/Milestones'
import { ServicesGlance } from '../components/ServicesGlance'
import { ServiceStack } from '../components/ServiceStack'
import { CertificationStrip } from '../components/CertificationStrip'
import { Location } from '../components/Location'
import { MANIFESTO, PROOF_STATS } from '../lib/content'

export function Home() {
  return (
    <>
      <Hero />

      <ServicesGlance />

      {/* ── Manifesto — editorial, text-led ── */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-28 md:py-40 border-t border-[var(--line)]">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-20">
          <Reveal>
            <p className="kicker md:pt-3">{MANIFESTO.eyebrow}</p>
          </Reveal>
          <div>
            <Reveal>
              <h2
                className="text-grad font-serif text-3xl md:text-5xl lg:text-[3.5rem] font-medium leading-[1.04] mb-10"
                style={{ letterSpacing: '0.005em' }}
              >
                {MANIFESTO.heading}
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-lg md:text-xl text-[var(--ink-soft)] font-light max-w-3xl leading-relaxed">
                {MANIFESTO.body}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Milestones />

      <ServiceStack />

      {/* ── Stats — refined numeric band ── */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-[var(--line)]">
        <Reveal>
          <p className="kicker mb-12 md:mb-16">By the numbers</p>
        </Reveal>
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

      <CertificationStrip />

      <CtaBand />

      <Location />
    </>
  )
}
