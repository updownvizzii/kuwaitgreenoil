import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { CtaBand } from '../components/CtaBand'
import { ImageBand } from '../components/ImageBand'
import { CERTIFICATIONS } from '../lib/content'

export function Certifications() {
  return (
    <div className="bg-[var(--bg)]">
      <PageHeader
        eyebrow="Quality & standards"
        title={'Five certifications.\nZero compromise.'}
        sub="Every KGEC deliverable is backed by one of the petroleum industry's most demanding sets of active authorisations: API 6A, 7-1, Q1, 5CT and ISO 9001:2015. These are current credentials, audited and renewed every year."
      />

      <section className="border-b border-[var(--line)]">
        {CERTIFICATIONS.map((c) => (
          <Reveal key={c.id}>
            <article className="group grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 md:gap-16 px-6 md:px-12 lg:px-16 py-14 md:py-16 border-t border-[var(--line)] first:border-t-0 hover:bg-[rgba(184,146,63,0.04)] transition-colors duration-300">
              <div className="flex flex-col gap-2">
                <span className="font-serif text-3xl md:text-4xl font-medium text-[var(--gold-deep)] tracking-tight">{c.name}</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">{c.year}</span>
              </div>
              <div>
                <h2 className="text-xl md:text-2xl font-medium tracking-tight mb-4">{c.full}</h2>
                <p className="text-sm md:text-base text-[var(--ink-soft)] font-light leading-relaxed max-w-2xl">{c.body}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <ImageBand
        image="/kgec-svc-testing.jpg"
        eyebrow="30,000 PSI in-house"
        quote="Every gauge, every reading, every certificate traced back to a single test facility we control ourselves."
      />

      {/* What it means */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-[var(--line)] grid md:grid-cols-[260px_1fr] gap-10 md:gap-20">
        <Reveal><p className="kicker md:pt-2">What this means</p></Reveal>
        <div className="max-w-3xl space-y-6">
          <Reveal delay={80}>
            <p className="text-lg md:text-xl text-[var(--ink)]/75 font-light leading-relaxed">
              These are independently audited operating licences, not marketing credentials. They confirm that
              KGEC's manufacturing processes, quality management systems and documentation practices meet the
              exact requirements of the global petroleum industry.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-lg md:text-xl text-[var(--ink)]/75 font-light leading-relaxed">
              For operators, this means one thing. When KGEC manufactures or tests a component, you receive
              a traceable, documented, certified deliverable, with full accountability if it ever falls short
              of specification. That accountability is what the API mark guarantees.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </div>
  )
}
