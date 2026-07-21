import { useEffect, useRef } from 'react'
import { AnimatedHeading } from './AnimatedHeading'
import { FadeIn } from './FadeIn'
import { Link } from '../lib/router'
import { HERO } from '../lib/content'

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

            {/* Right — tag */}
            <FadeIn
              delay={1400}
              duration={1000}
              className="flex items-end justify-start lg:justify-end mt-8 lg:mt-0"
            >
              <div className="liquid-glass border px-6 py-3 rounded-xl" style={{ borderColor: 'rgba(224,191,120,0.35)' }}>
                <span className="mono text-[11px] uppercase tracking-[0.22em]" style={{ color: 'var(--gold-light)' }}>
                  {HERO.tag}
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
