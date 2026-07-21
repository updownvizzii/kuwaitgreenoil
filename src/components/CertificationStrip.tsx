import { useEffect, useRef } from 'react'
import { CERTIFICATIONS } from '../lib/content'

const IMAGES = ['/kgec-svc-testing.jpg', '/kgec-svc-machining.jpg', '/kgec-svc-fabrication.jpg', '/kgec-svc-valves.jpg', '/kgec-svc-rotating.jpg']

/**
 * Desktop (≥1024px): pinned horizontal scroll — outer section height extends to give
 * scroll runway, inner track sticks and translates horizontally as the user scrolls
 * vertically (modelled on suaiqa.fortimark.co's [data-h-pin] mechanic).
 * Mobile: native horizontal scroll-snap (see .h-scroll-track media query in index.css).
 */
export function CertificationStrip() {
  const outerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)

  useEffect(() => {
    const isDesktop = () => window.innerWidth >= 1024

    const setHeight = () => {
      const outer = outerRef.current
      const track = trackRef.current
      if (!outer || !track || !isDesktop()) {
        if (outer) outer.style.height = 'auto'
        return
      }
      const distance = track.scrollWidth - window.innerWidth + 120
      outer.style.height = `${Math.max(distance, 0) + window.innerHeight}px`
    }

    const tick = () => {
      const outer = outerRef.current
      const track = trackRef.current
      if (outer && track && isDesktop()) {
        const distance = track.scrollWidth - window.innerWidth + 120
        const rect = outer.getBoundingClientRect()
        const scrollable = outer.offsetHeight - window.innerHeight
        const progress = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0
        track.style.transform = `translate3d(${-progress * Math.max(distance, 0)}px, 0, 0)`
      } else if (track) {
        track.style.transform = 'none'
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    setHeight()
    window.addEventListener('resize', setHeight)
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('resize', setHeight)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="relative z-10 border-t border-[var(--line)] h-scroll-outer" style={{ background: 'var(--surface-dark)' }} ref={outerRef}>
      <div className="h-scroll-pin">
        <div className="w-full">
          <div className="px-6 md:px-12 lg:px-16 pt-24 md:pt-0 pb-10 lg:pb-14">
            <p className="mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: 'var(--gold-light)' }}>
              Quality &amp; standards
            </p>
            <h2 className="text-grad-gold text-3xl md:text-5xl font-serif font-medium leading-[1.03] max-w-2xl" style={{ letterSpacing: '0.005em' }}>
              Five active certifications. Zero compromise.
            </h2>
          </div>

          <div className="h-scroll-track pl-6 md:pl-12 lg:pl-16 pb-10 lg:pb-0" ref={trackRef}>
            {CERTIFICATIONS.map((c, i) => (
              <div
                key={c.id}
                className="relative shrink-0 overflow-hidden rounded-2xl mr-4 md:mr-6"
                style={{ width: 'min(78vw, 400px)', height: '440px', border: '1px solid rgba(224,191,120,0.16)' }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${IMAGES[i % IMAGES.length]})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'saturate(0.85)',
                  }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(0deg, rgba(10,9,8,0.94) 10%, rgba(10,9,8,0.25) 60%, rgba(10,9,8,0.45) 100%)' }} />
                <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-7">
                  <span className="mono text-[10px] tracking-[0.16em]" style={{ color: 'rgba(250,248,241,0.5)' }}>{c.year}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-medium mt-2 mb-3 text-grad-gold">{c.name}</h3>
                  <p className="text-xs md:text-sm font-light leading-relaxed" style={{ color: 'var(--ivory-soft)' }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
