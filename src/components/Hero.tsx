import { useEffect, useRef } from 'react'
import { AnimatedHeading } from './AnimatedHeading'
import { FadeIn } from './FadeIn'
import { Link } from '../lib/router'
import { HERO, SERVICES } from '../lib/content'

const IMAGES: Record<string, string> = {
  oilgas: '/kgec-svc-machining.jpg',
  fabrication: '/kgec-svc-fabrication.jpg',
  rotating: '/kgec-svc-rotating.jpg',
  valves: '/kgec-svc-valves.jpg',
  testing: '/kgec-svc-testing.jpg',
}

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.playbackRate = 0.55
    void video.play().catch(() => {})
  }, [])

  return (
    <section className="relative w-full bg-black h-screen overflow-hidden flex flex-col">
      {/* Calm autoplay background — no cursor/scroll interaction */}
      <video
        ref={videoRef}
        src="/oil-rig-clean.mp4"
        muted
        loop
        autoPlay
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Dark panel over the footage for text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(10,9,8,0.55) 0%, rgba(10,9,8,0.35) 45%, rgba(10,9,8,0.75) 100%)' }}
      />

      <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-16">
        <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
          <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
            {/* Left — main content */}
            <div>
              <AnimatedHeading
                text={HERO.heading}
                className="font-display text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal uppercase text-[var(--ivory)] mb-5"
                initialDelay={200}
                charDelay={30}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="text-base md:text-lg mb-6 max-w-xl font-light" style={{ color: 'var(--ivory-soft)' }}>
                  {HERO.sub}
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/contact"
                    className="px-8 py-3 rounded-lg font-medium transition-colors duration-200"
                    style={{ background: 'var(--gold)', color: 'var(--ink)' }}
                  >
                    Start a Project
                  </Link>
                  <Link
                    to="/services"
                    className="liquid-glass border px-8 py-3 rounded-lg font-medium transition-all duration-200"
                    style={{ borderColor: 'rgba(224,191,120,0.35)', color: 'var(--ivory)' }}
                  >
                    Explore Services
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* Right — services, right in the hero */}
            <FadeIn delay={1000} duration={1000} className="mt-8 lg:mt-0">
              <div className="liquid-glass border rounded-xl overflow-hidden" style={{ borderColor: 'rgba(224,191,120,0.35)' }}>
                {SERVICES.map((s, i) => (
                  <Link
                    key={s.id}
                    to={`/services/${s.id}`}
                    className="group flex items-center gap-3 px-3 py-2.5 transition-colors duration-200 hover:bg-[rgba(184,146,63,0.14)]"
                    style={{ borderTop: i > 0 ? '1px solid rgba(224,191,120,0.16)' : undefined }}
                  >
                    <div
                      className="shrink-0 w-11 h-11 rounded-md bg-cover bg-center"
                      style={{ backgroundImage: `url(${IMAGES[s.id] ?? ''})` }}
                    />
                    <span className="flex-1 text-sm font-light" style={{ color: 'var(--ivory)' }}>
                      {s.label}
                    </span>
                    <span
                      className="text-sm opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200"
                      style={{ color: 'var(--gold-light)' }}
                    >
                      →
                    </span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
