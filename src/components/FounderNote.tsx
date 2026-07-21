import { Reveal } from './Reveal'
import { FOUNDER } from '../lib/content'

/** A personal note from leadership — deliberately breaks from the standard
 * kicker/heading/grid template used everywhere else on the site. Photo slot
 * is a placeholder until a real portrait is supplied. */
export function FounderNote() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-[var(--line)]">
      <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16 items-start">
        <Reveal>
          <div
            className="w-full aspect-square rounded-2xl flex items-center justify-center"
            style={{ background: 'var(--surface-dark)', border: '1px dashed rgba(224,191,120,0.3)' }}
          >
            <span className="mono text-[9px] uppercase tracking-[0.16em] text-center px-4" style={{ color: 'rgba(250,248,241,0.4)' }}>
              Photo pending
            </span>
          </div>
        </Reveal>

        <div>
          <Reveal delay={60}>
            <p className="font-serif text-2xl md:text-3xl lg:text-4xl leading-[1.35] text-[var(--ink)] mb-8" style={{ letterSpacing: '0.005em' }}>
              &ldquo;{FOUNDER.quote}&rdquo;
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div>
              <p className="text-base font-medium text-[var(--ink)]">{FOUNDER.name}</p>
              <p className="mono text-[10px] uppercase tracking-[0.16em]" style={{ color: 'var(--gold-deep)' }}>
                {FOUNDER.title}, KGEC
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
