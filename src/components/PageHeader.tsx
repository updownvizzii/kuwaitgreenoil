import { Reveal } from './Reveal'

export function PageHeader({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string
  title: string
  sub?: string
}) {
  return (
    <header className="relative overflow-hidden px-6 md:px-12 lg:px-16 pt-40 md:pt-52 pb-14 md:pb-20">
      {/* ambient gold glow */}
      <div
        className="absolute -top-44 -right-40 w-[680px] h-[680px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,146,63,0.09) 0%, transparent 62%)' }}
      />

      <div className="relative">
        <Reveal>
          <p className="kicker mb-7">{eyebrow}</p>
        </Reveal>
        <Reveal delay={80}>
          <h1
            className="text-grad font-serif uppercase text-4xl md:text-6xl lg:text-[4.5rem] font-normal leading-[1.05] whitespace-pre-line max-w-4xl"
            style={{ letterSpacing: '0.01em' }}
          >
            {title}
          </h1>
        </Reveal>
        {sub && (
          <Reveal delay={160}>
            <p className="text-base md:text-xl text-[var(--ink-soft)] font-light max-w-2xl leading-relaxed mt-8">
              {sub}
            </p>
          </Reveal>
        )}
      </div>

      {/* gradient hairline divider */}
      <div
        className="relative mt-14 md:mt-20 h-px w-full"
        style={{
          background:
            'linear-gradient(90deg, rgba(184,146,63,0.35), rgba(184,146,63,0.08) 38%, transparent 80%)',
        }}
      />
    </header>
  )
}
