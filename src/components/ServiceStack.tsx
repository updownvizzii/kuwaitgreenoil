import { useEffect, useRef } from 'react'
import { Link } from '../lib/router'
import { SERVICES } from '../lib/content'

const IMAGES: Record<string, string> = {
  oilgas: '/kgec-svc-machining.jpg',
  fabrication: '/kgec-svc-fabrication.jpg',
  rotating: '/kgec-svc-rotating.jpg',
  valves: '/kgec-svc-valves.jpg',
  testing: '/kgec-svc-testing.jpg',
}

/**
 * Each service is a full-viewport sticky panel stacked in DOM order — later panels
 * (higher z-index) slide up and cover earlier ones as the user scrolls. Each panel's
 * own background image drifts upward (parallax) while its wrapper is pinned, driven
 * by a single scroll listener writing directly to refs (no React re-render per frame).
 */
export function ServiceStack() {
  const wrapRefs = useRef<(HTMLDivElement | null)[]>([])
  const imgRefs = useRef<(HTMLDivElement | null)[]>([])
  const rafRef = useRef(0)

  useEffect(() => {
    const tick = () => {
      wrapRefs.current.forEach((wrap, i) => {
        const img = imgRefs.current[i]
        if (!wrap || !img) return
        const rect = wrap.getBoundingClientRect()
        const extra = wrap.offsetHeight - window.innerHeight
        const progress = extra > 0 ? Math.min(1, Math.max(0, -rect.top / extra)) : 0
        img.style.transform = `translate3d(0, ${-progress * 70}px, 0) scale(${1.08 - progress * 0.03})`
      })
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [])

  return (
    <section className="relative z-10 border-t border-[var(--line)]">
      <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-32 pb-14 md:pb-16" style={{ background: 'var(--bg)' }}>
        <p className="kicker mb-5">What we do</p>
        <h2 className="text-grad font-serif text-3xl md:text-5xl font-normal leading-[1.15] max-w-3xl" style={{ letterSpacing: '0.005em' }}>
          Five specialisms. One accountable team.
        </h2>
      </div>

      {SERVICES.map((s, i) => (
        <div
          key={s.id}
          ref={(el) => { wrapRefs.current[i] = el }}
          style={{ height: '140vh' }}
        >
          <div className="stack-panel" style={{ zIndex: i + 1 }}>
            {/* background image, parallax-driven */}
            <div
              ref={(el) => { imgRefs.current[i] = el }}
              className="absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${IMAGES[s.id] ?? ''})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: 'translate3d(0,0,0) scale(1.08)',
                willChange: 'transform',
              }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(0deg, rgba(10,9,8,0.92) 0%, rgba(10,9,8,0.55) 45%, rgba(10,9,8,0.35) 100%)' }}
            />

            <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 pb-14 md:pb-20">
              <div className="grid lg:grid-cols-[auto_1fr] gap-6 lg:gap-16 items-end">
                <span className="mono text-sm" style={{ color: 'var(--gold-light)' }}>0{i + 1}</span>

                <div className="max-w-3xl">
                  <p className="mono text-[10px] uppercase tracking-[0.22em] mb-4" style={{ color: 'var(--gold-light)' }}>
                    {s.subtitle}
                  </p>
                  <h3 className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.15] mb-6 text-[var(--ivory)]">
                    {s.label}
                  </h3>
                  <p className="text-sm md:text-base font-light leading-relaxed max-w-xl mb-8" style={{ color: 'var(--ivory-soft)' }}>
                    {s.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <Link
                      to={`/services/${s.id}`}
                      className="btn-fill px-7 py-3 rounded-lg font-medium text-sm"
                      style={{ border: '1px solid rgba(224,191,120,0.4)', color: 'var(--ivory)' }}
                    >
                      Explore capability →
                    </Link>
                    <div>
                      <span className="block text-lg font-medium text-[var(--gold-light)]">{s.keyStat}</span>
                      <span className="mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(250,248,241,0.55)' }}>
                        {s.keyStatLabel}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}
