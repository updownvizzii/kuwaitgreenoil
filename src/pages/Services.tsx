import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { Link } from '../lib/router'
import { SERVICES } from '../lib/content'

export function Services() {
  return (
    <div className="bg-[var(--bg)]">
      <PageHeader
        eyebrow="What we do"
        title={'Five specialisms.\nOne accountable team.'}
        sub="From API-certified wellhead component manufacturing to 30,000 PSI pressure testing — KGEC is Kuwait's single-source for precision engineering across the entire Oil, Gas & Power spectrum."
      />

      <section className="px-6 md:px-12 lg:px-16 py-16 md:py-20 border-b border-black/10">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={(i % 2) * 80}>
              <Link
                to={`/services/${s.id}`}
                className="feature-card group relative flex flex-col h-full rounded-2xl p-8 md:p-12"
              >
                <div className="flex items-center justify-between mb-8">
                  <span className="font-mono text-[11px] text-[var(--green-ink)] tracking-[0.16em]">
                    0{i + 1} / 05
                  </span>
                  <span className="text-lg text-black/20 group-hover:text-[var(--green-ink)] group-hover:translate-x-1 transition-all duration-300">
                    →
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-medium tracking-tight mb-3 group-hover:text-[var(--green-ink)] transition-colors duration-300">
                  {s.label}
                </h2>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-black/40 mb-6">
                  {s.subtitle}
                </p>
                <p className="text-sm md:text-base text-[var(--ink-soft)] font-light leading-relaxed flex-1 max-w-xl">
                  {s.description}
                </p>
                <div className="mt-10 pt-6 border-t border-black/10">
                  <span className="block text-lg font-medium text-[var(--ink)]">{s.keyStat}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-black/40">
                    {s.keyStatLabel}
                  </span>
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
