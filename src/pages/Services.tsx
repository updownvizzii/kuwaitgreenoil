import { PageHeader } from '../components/PageHeader'
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

export function Services() {
  return (
    <div className="bg-[var(--bg)]">
      <PageHeader
        eyebrow="What we do"
        title={'Five specialisms.\nOne accountable team.'}
        sub="From API-certified wellhead component manufacturing to 30,000 PSI pressure testing, KGEC is Kuwait's single-source for precision engineering across the entire Oil, Gas & Power spectrum."
      />

      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-b border-[var(--line)]">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 80}>
              <Link
                to={`/services/${s.id}`}
                className="group relative flex flex-col h-full rounded-2xl overflow-hidden"
                style={{ minHeight: '420px' }}
              >
                <div
                  className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url(${IMAGES[s.id] ?? ''})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(0deg, rgba(10,9,8,0.94) 20%, rgba(10,9,8,0.35) 55%, rgba(10,9,8,0.5) 100%)' }}
                />

                <div className="relative z-10 flex flex-col h-full p-8 md:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[11px] tracking-[0.16em]" style={{ color: 'var(--gold-light)' }}>
                      0{i + 1} / 05
                    </span>
                    <span
                      className="text-lg group-hover:translate-x-1 transition-all duration-300"
                      style={{ color: 'var(--gold-light)' }}
                    >
                      →
                    </span>
                  </div>
                  <h2 className="font-serif text-2xl md:text-3xl font-normal mb-3" style={{ color: 'var(--ivory)' }}>
                    {s.label}
                  </h2>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] mb-6" style={{ color: 'var(--gold-light)' }}>
                    {s.subtitle}
                  </p>
                  <p className="text-sm md:text-base font-light leading-relaxed flex-1 max-w-xl" style={{ color: 'var(--ivory-soft)' }}>
                    {s.description}
                  </p>
                  <div className="mt-10 pt-6 border-t" style={{ borderColor: 'rgba(224,191,120,0.2)' }}>
                    <span className="block text-lg font-medium" style={{ color: 'var(--gold-light)' }}>{s.keyStat}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(250,248,241,0.55)' }}>
                      {s.keyStatLabel}
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
