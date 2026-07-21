import { Reveal } from './Reveal'
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
 * Compact, immediately-visible services overview — sits right under the hero so
 * every service line and its imagery is on screen within the first scroll or two,
 * ahead of the deeper animated sticky-stack storytelling further down the page.
 */
export function ServicesGlance() {
  return (
    <section className="relative z-10 px-6 md:px-12 lg:px-16 py-16 md:py-20 border-t border-[var(--line)]" style={{ background: 'var(--bg)' }}>
      <Reveal>
        <p className="kicker mb-8">What we do</p>
      </Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {SERVICES.map((s, i) => (
          <Reveal key={s.id} delay={i * 60}>
            <Link
              to={`/services/${s.id}`}
              className="group relative block overflow-hidden rounded-xl"
              style={{ aspectRatio: '3 / 4' }}
            >
              <div
                className="absolute inset-0 transition-transform duration-700"
                style={{
                  backgroundImage: `url(${IMAGES[s.id] ?? ''})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
              <div
                className="absolute inset-0 transition-opacity duration-500 group-hover:opacity-90"
                style={{ background: 'linear-gradient(0deg, rgba(10,9,8,0.92) 8%, rgba(10,9,8,0.15) 55%, rgba(10,9,8,0.35) 100%)' }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4">
                <span className="mono text-[10px]" style={{ color: 'var(--gold-light)' }}>0{i + 1}</span>
                <div>
                  <h3 className="font-serif text-lg leading-tight mb-1" style={{ color: 'var(--ivory)' }}>
                    {s.label}
                  </h3>
                  <span
                    className="mono text-[9px] uppercase tracking-[0.14em] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: 'var(--gold-light)' }}
                  >
                    View capability →
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
