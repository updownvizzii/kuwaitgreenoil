import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Link } from '../lib/router'
import { SERVICES } from '../lib/content'

const IMAGES: Record<string, string> = {
  oilgas: '/kgec-svc-machining.jpg',
  fabrication: '/kgec-svc-fabrication.jpg',
  rotating: '/kgec-svc-rotating.jpg',
  valves: '/kgec-svc-valves.jpg',
  testing: '/kgec-svc-testing.jpg',
}

export function ServiceDetail({ id }: { id: string }) {
  const idx = SERVICES.findIndex((s) => s.id === id)
  const service = SERVICES[idx]

  if (!service) {
    return (
      <div className="bg-[var(--bg)] min-h-screen px-6 md:px-12 lg:px-16 pt-44 pb-32">
        <p className="kicker mb-6">Not found</p>
        <h1 className="text-grad font-serif text-4xl md:text-6xl font-medium tracking-tight mb-8">Service not found.</h1>
        <Link to="/services" className="kicker hover:opacity-70 transition-opacity">
          ← All services
        </Link>
      </div>
    )
  }

  const next = SERVICES[(idx + 1) % SERVICES.length]

  return (
    <div className="bg-[var(--bg)]">
      {/* Header — dark, image-backed */}
      <header className="relative overflow-hidden px-6 md:px-12 lg:px-16 pt-36 md:pt-44 pb-16 md:pb-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${IMAGES[service.id] ?? ''})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, rgba(10,9,8,0.86) 0%, rgba(10,9,8,0.78) 55%, var(--surface-dark) 100%)' }}
        />
        <div className="relative">
          <Reveal><p className="mono text-[10px] uppercase tracking-[0.22em]" style={{ color: 'var(--gold-light)' }}>Service 0{idx + 1} / 05</p></Reveal>
          <Reveal delay={80}>
            <h1 className="text-grad-gold font-serif text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[0.98] max-w-4xl mt-6" style={{ letterSpacing: '0.005em' }}>
              {service.label}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-base md:text-lg font-light mt-8 max-w-2xl" style={{ color: 'var(--ivory-soft)' }}>{service.subtitle}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-12 pt-8 border-t inline-flex flex-col" style={{ borderColor: 'rgba(224,191,120,0.2)' }}>
              <span className="font-serif text-3xl md:text-4xl font-medium tracking-tight" style={{ color: 'var(--gold-light)' }}>{service.keyStat}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.14em] mt-2" style={{ color: 'rgba(250,248,241,0.55)' }}>
                {service.keyStatLabel}
              </span>
            </div>
          </Reveal>
        </div>
      </header>

      {/* Overview */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-[var(--line)] grid md:grid-cols-[260px_1fr] gap-10 md:gap-20">
        <Reveal><p className="kicker md:pt-2">Overview</p></Reveal>
        <Reveal delay={80}>
          <p className="text-xl md:text-2xl text-[var(--ink)]/80 font-light leading-relaxed max-w-3xl">
            {service.description}
          </p>
        </Reveal>
      </section>

      {/* Capabilities */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-[var(--line)]">
        <Reveal><p className="kicker mb-5">Scope of work</p></Reveal>
        <Reveal delay={60}>
          <h2 className="text-grad font-serif text-3xl md:text-5xl font-medium tracking-tight mb-14" style={{ letterSpacing: '0.005em' }}>Full capabilities</h2>
        </Reveal>
        <div className="rounded-2xl border border-[var(--line)] overflow-hidden bg-[var(--surface)]">
          {service.capabilities.map((cap, i) => (
            <Reveal key={i}>
              <div className="grid grid-cols-[48px_1fr] gap-4 px-6 md:px-8 py-6 border-b border-[var(--line)] last:border-b-0 hover:bg-[rgba(184,146,63,0.04)] transition-colors">
                <span className="font-mono text-sm text-[var(--gold-deep)] pt-0.5">0{i + 1}</span>
                <span className="text-sm md:text-base text-[var(--ink-soft)] font-light leading-relaxed">{cap}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Nav footer */}
      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-b border-[var(--line)] flex flex-col sm:flex-row sm:items-center justify-between gap-8">
        <Link to="/services" className="kicker hover:opacity-70 transition-opacity">
          ← All services
        </Link>
        <div className="sm:text-right">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)] mb-2">Next service</p>
          <Link
            to={`/services/${next.id}`}
            className="text-xl md:text-2xl font-light tracking-tight hover:text-[var(--gold-deep)] transition-colors"
          >
            {next.label} →
          </Link>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
