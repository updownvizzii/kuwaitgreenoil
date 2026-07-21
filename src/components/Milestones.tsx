import { Reveal } from './Reveal'
import { MILESTONES } from '../lib/content'

/** Vertical timeline on a dark ink surface — gold connecting line, serif year numerals,
 * scroll-revealed per entry. Part of the homepage's alternating dark/cream rhythm. */
export function Milestones() {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 py-24 md:py-32" style={{ background: 'var(--ink)' }}>
      <Reveal>
        <p className="mono text-[10px] uppercase tracking-[0.22em] mb-14 md:mb-20" style={{ color: 'var(--gold-light)' }}>
          Our story
        </p>
      </Reveal>

      <div className="relative max-w-4xl">
        {/* connecting hairline */}
        <div
          className="absolute left-[3px] top-2 bottom-2 w-px"
          style={{ background: 'linear-gradient(180deg, var(--gold-light), rgba(224,191,120,0.15))' }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-16 md:gap-20">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.year} delay={i * 80}>
              <div className="relative pl-10 md:pl-14 grid md:grid-cols-[7rem_1fr] gap-3 md:gap-10">
                {/* dot */}
                <span
                  className="absolute left-0 top-1.5 w-[7px] h-[7px] rounded-full"
                  style={{ background: 'var(--gold-light)', boxShadow: '0 0 0 4px rgba(224,191,120,0.18)' }}
                  aria-hidden="true"
                />
                <span className="font-serif text-4xl md:text-5xl font-medium leading-none text-grad-gold">
                  {m.year}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-medium tracking-tight mb-3" style={{ color: 'var(--ivory)' }}>
                    {m.heading}
                  </h3>
                  <p className="text-sm md:text-base font-light leading-relaxed max-w-2xl mb-4" style={{ color: 'var(--ivory-soft)' }}>
                    {m.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {m.tags.map((t) => (
                      <span
                        key={t}
                        className="mono text-[10px] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                        style={{ color: 'var(--gold-light)', background: 'rgba(224,191,120,0.08)', border: '1px solid rgba(224,191,120,0.22)' }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
