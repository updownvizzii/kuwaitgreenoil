import { Hero } from '../components/Hero'
import { Reveal } from '../components/Reveal'
import { StatCounter } from '../components/StatCounter'
import { CtaBand } from '../components/CtaBand'
import { Link } from '../lib/router'
import { MANIFESTO, SERVICES, PROOF_STATS, CERTIFICATIONS } from '../lib/content'

export function Home() {
  return (
    <>
      <Hero />

      {/* ── Manifesto — editorial, text-led ── */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-28 md:py-40 border-t border-black/10">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-20">
          <Reveal>
            <p className="kicker md:pt-3">{MANIFESTO.eyebrow}</p>
          </Reveal>
          <div>
            <Reveal>
              <h2
                className="text-grad text-3xl md:text-5xl lg:text-[3.5rem] font-light leading-[1.04] mb-10"
                style={{ letterSpacing: '-0.03em' }}
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

      {/* ── Services — tactile feature cards ── */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14 md:mb-16">
          <div>
            <Reveal>
              <p className="kicker mb-5">What we do</p>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="text-grad text-3xl md:text-5xl font-light leading-[1.03] max-w-3xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Five specialisms. One accountable team.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Link to="/services" className="kicker hover:opacity-70 transition-opacity whitespace-nowrap">
              All services →
            </Link>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <Link
                to={`/services/${s.id}`}
                className="feature-card group flex flex-col h-full rounded-2xl p-7 md:p-9"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-sm text-[var(--green-ink)]">0{i + 1}</span>
                  <span className="text-lg text-black/20 group-hover:text-[var(--green-ink)] group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-2.5 group-hover:text-[var(--green-ink)] transition-colors duration-300">
                  {s.label}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/40 mb-5">
                  {s.subtitle}
                </p>
                <p className="text-sm text-[var(--ink-soft)] font-light leading-relaxed flex-1">
                  {s.description}
                </p>
                <div className="mt-8 pt-5 border-t border-black/10">
                  <span className="block text-base font-medium text-[var(--ink)]">{s.keyStat}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/40">
                    {s.keyStatLabel}
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}

          {/* trailing CTA card */}
          <Reveal delay={SERVICES.length * 60}>
            <Link
              to="/services"
              className="feature-card group flex flex-col justify-center h-full rounded-2xl p-7 md:p-9"
              style={{
                borderColor: 'rgba(14,16,12,0.14)',
                background: 'linear-gradient(180deg, rgba(14,16,12,0.05), rgba(255,255,255,0) 70%), #ffffff',
              }}
            >
              <span className="text-2xl font-medium tracking-tight mb-3 text-[var(--ink)]">All services</span>
              <span className="kicker">View the full scope →</span>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Stats — refined numeric band ── */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-black/10">
        <Reveal>
          <p className="kicker mb-12 md:mb-16">By the numbers</p>
        </Reveal>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12 md:gap-y-16">
          {PROOF_STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <div className="group">
                <span className="block text-grad text-5xl md:text-6xl lg:text-7xl font-light tracking-tight mb-3">
                  <StatCounter raw={s.val} suffix={s.suffix} />
                </span>
                <div className="h-px w-10 bg-[var(--green)] mb-4 transition-all duration-500 group-hover:w-20" />
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-black/50 leading-relaxed block max-w-[220px]">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-32 border-t border-black/10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <p className="kicker mb-5">Quality & standards</p>
            </Reveal>
            <Reveal delay={60}>
              <h2
                className="text-grad text-3xl md:text-5xl font-light leading-[1.03] max-w-2xl"
                style={{ letterSpacing: '-0.03em' }}
              >
                Five active certifications. Zero compromise.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <Link to="/certifications" className="kicker hover:opacity-70 transition-opacity whitespace-nowrap">
              All certifications →
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.id} delay={i * 70}>
              <div className="feature-card h-full rounded-xl p-6">
                <span className="block text-lg md:text-xl font-medium text-[var(--green-ink)] mb-3">
                  {c.name}
                </span>
                <span className="text-xs text-[var(--ink-soft)] font-light leading-relaxed">{c.full}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
