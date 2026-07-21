import { Reveal } from './Reveal'

/** Full-bleed cinematic image break with an optional pull-quote — used to punctuate
 * text-heavy interior pages with real photography instead of another wall of copy. */
export function ImageBand({
  image,
  eyebrow,
  quote,
  height = '64vh',
}: {
  image: string
  eyebrow?: string
  quote?: string
  height?: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-[var(--line)]" style={{ height }}>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.25) 40%, rgba(10,9,8,0.7) 100%)' }}
      />
      {quote && (
        <div className="relative z-10 h-full flex flex-col justify-end px-6 md:px-12 lg:px-16 pb-12 md:pb-16">
          {eyebrow && (
            <Reveal>
              <p className="mono text-[10px] uppercase tracking-[0.22em] mb-4" style={{ color: 'var(--gold-light)' }}>
                {eyebrow}
              </p>
            </Reveal>
          )}
          <Reveal delay={60}>
            <p className="font-serif text-2xl md:text-4xl max-w-3xl leading-[1.15]" style={{ color: 'var(--ivory)' }}>
              {quote}
            </p>
          </Reveal>
        </div>
      )}
    </section>
  )
}
