import { useEffect, useRef } from 'react'
import { AnimatedHeading } from './AnimatedHeading'
import { FadeIn } from './FadeIn'
import { Link } from '../lib/router'
import { HERO } from '../lib/content'

export function Hero() {
  const trackRef     = useRef<HTMLElement>(null)
  const videoRef     = useRef<HTMLVideoElement>(null)
  const rafRef       = useRef<number>(0)
  const cursorXRef   = useRef(0)            // 0 = clip start, 1 = clip end
  const scrollRef    = useRef(0)
  const currentRef   = useRef(0)
  const lastInputRef = useRef<'cursor' | 'scroll'>('scroll')
  const readyRef     = useRef(false)

  useEffect(() => {
    const video = videoRef.current
    const track = trackRef.current
    if (!video || !track) return

    video.pause()
    const keepPaused = () => video.pause()
    video.addEventListener('play', keepPaused)

    const markReady = () => { readyRef.current = true }
    video.addEventListener('loadeddata', markReady)
    video.addEventListener('canplay', markReady)
    if (video.readyState >= 2) readyRef.current = true

    const clamp01 = (n: number) => Math.min(1, Math.max(0, n))

    // Move the cursor → cursor drives the clip (right = play forward).
    const onMouseMove = (e: MouseEvent) => {
      cursorXRef.current = clamp01(e.clientX / window.innerWidth)
      lastInputRef.current = 'cursor'
    }

    // Scroll through the pinned hero → scroll drives the clip (down = play forward).
    const onScroll = () => {
      const scrollable = track.offsetHeight - window.innerHeight
      const scrolled = Math.min(scrollable, Math.max(0, -track.getBoundingClientRect().top))
      scrollRef.current = scrollable > 0 ? scrolled / scrollable : 0
      lastInputRef.current = 'scroll'
    }

    const tick = () => {
      // Whichever input you used last controls playback — they never fight.
      const target = lastInputRef.current === 'cursor' ? cursorXRef.current : scrollRef.current
      currentRef.current += (target - currentRef.current) * 0.14
      const dur = video.duration
      if (readyRef.current && dur && isFinite(dur)) {
        const t = currentRef.current * dur
        if (Math.abs(video.currentTime - t) > 0.002) video.currentTime = t
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    video.load()
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      video.removeEventListener('play', keepPaused)
      video.removeEventListener('loadeddata', markReady)
      video.removeEventListener('canplay', markReady)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    // Tall track pins the hero so cursor + scroll scrub the clip over one screen-height.
    <section ref={trackRef} className="relative w-full bg-black" style={{ height: '200vh' }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col">
        {/* Raw video background — no overlay, no dimming */}
        <video
          ref={videoRef}
          src="/oil-rig-clean.mp4"
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col h-full px-6 md:px-12 lg:px-16">
          <div className="flex-1 flex flex-col justify-end pb-12 lg:pb-16">
            <div className="lg:grid lg:grid-cols-2 lg:items-end gap-8">
              {/* Left — main content */}
              <div>
                <AnimatedHeading
                  text={HERO.heading}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-normal text-white mb-4"
                  initialDelay={200}
                  charDelay={30}
                />

                <FadeIn delay={800} duration={1000}>
                  <p className="text-base md:text-lg text-gray-300 mb-5 max-w-xl">
                    {HERO.sub}
                  </p>
                </FadeIn>

                <FadeIn delay={1200} duration={1000}>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/contact"
                      className="bg-white text-black px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
                    >
                      Start a Project
                    </Link>
                    <Link
                      to="/services"
                      className="liquid-glass border border-white/20 text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-black transition-all duration-200"
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
                <div className="liquid-glass border border-white/20 px-6 py-3 rounded-xl">
                  <span className="text-lg md:text-xl lg:text-2xl font-light text-white">
                    {HERO.tag}
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
