import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Link } from '../lib/router'
import { SERVICES } from '../lib/content'

export function ServiceDetail({ id }: { id: string }) {
  const idx = SERVICES.findIndex((s) => s.id === id)
  const service = SERVICES[idx]

  if (!service) {
    return (
      <div className="bg-[var(--bg)] min-h-screen px-6 md:px-12 lg:px-16 pt-44 pb-32">
        <p className="kicker mb-6">Not found</p>
        <h1 className="text-grad text-4xl md:text-6xl font-light tracking-tight mb-8">Service not found.</h1>
        <Link to="/services" className="kicker hover:opacity-70 transition-opacity">
          ← All services
        </Link>
      </div>
    )
  }

  const next = SERVICES[(idx + 1) % SERVICES.length]

  return (
    <div className="bg-[var(--bg)]">
      {/* Header */}
      <header className="px-6 md:px-12 lg:px-16 pt-36 md:pt-44 pb-16 md:pb-20 border-b border-black/10">
        <Reveal><p className="kicker mb-6">Service 0{idx + 1} / 05</p></Reveal>
        <Reveal delay={80}>
          <h1 className="text-grad text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[0.98] max-w-4xl" style={{ letterSpacing: '-0.035em' }}>
            {service.label}
          </h1>
        </Reveal>
        <Reveal delay={160}>
          <p className="text-base md:text-lg text-[var(--ink-soft)] font-light mt-8">{service.subtitle}</p>
        </Reveal>
        <Reveal delay={240}>
          <div className="mt-12 pt-8 border-t border-black/10 inline-flex flex-col">
            <span className="text-3xl md:text-4xl font-light text-[var(--green-ink)] tracking-tight">{service.keyStat}</span>
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/40 mt-2">
              {service.keyStatLabel}
            </span>
          </div>
        </Reveal>
      </header>

      {/* Overview */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-black/10 grid md:grid-cols-[260px_1fr] gap-10 md:gap-20">
        <Reveal><p className="kicker md:pt-2">Overview</p></Reveal>
        <Reveal delay={80}>
          <p className="text-xl md:text-2xl text-[var(--ink)]/80 font-light leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-black/10">
        <Reveal><p className="kicker mb-5">Scope of work</p></Reveal>
        <Reveal delay={60}>
          <h2 className="text-grad text-3xl md:text-5xl font-light tracking-tight mb-14" style={{ letterSpacing: '-0.03em' }}>Full capabilities</h2>
        </Reveal>
        <div className="rounded-2xl border border-black/10 overflow-hidden bg-white">
          {service.capabilities.map((cap, i) => (
            <Reveal key={i}>
              <div className="grid grid-cols-[48px_1fr] gap-4 px-6 md:px-8 py-6 border-b border-black/10 last:border-b-0 hover:bg-black/[0.02] transition-colors">
                <span className="font-mono text-sm text-[var(--green-ink)] pt-0.5">0{i + 1}</span>
                <span className="text-sm md:text-base text-[var(--ink-soft)] font-light leading-relaxed">{cap}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nav footer */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-b border-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-8">
        <Link to="/services" className="kicker hover:opacity-70 transition-opacity">
          ← All services
        </Link>
        <div className="sm:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-black/40 mb-2">Next service</p>
          <Link
            to={`/services/${next.id}`}
            className="text-xl md:text-2xl font-light tracking-tight hover:text-[var(--green-ink)] transition-colors"
          >
            {next.label} →
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
