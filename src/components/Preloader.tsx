import { useEffect, useRef, useState } from 'react'
import { SITE } from '../lib/content'

// Plays once per browser session — survives client-side navigation
let sessionDone = false

export function Preloader() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [done, setDone] = useState(sessionDone)
  const [gone, setGone] = useState(sessionDone)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    if (sessionDone) return

    document.documentElement.classList.add('is-locked')
    const video = videoRef.current

    const finish = () => {
      sessionDone = true
      setDone(true)
      document.documentElement.classList.remove('is-locked')
    }

    if (!video) { finish(); return }
    void video.play().catch(finish)
    video.addEventListener('ended', finish)
    const onTime = () => {
      if (video.duration) setProgress(video.currentTime / video.duration)
    }
    video.addEventListener('timeupdate', onTime)
    const fallback = window.setTimeout(finish, 9000)

    return () => {
      video.removeEventListener('ended', finish)
      video.removeEventListener('timeupdate', onTime)
      window.clearTimeout(fallback)
      document.documentElement.classList.remove('is-locked')
    }
  }, [])

  useEffect(() => {
    if (!done) return
    const t = window.setTimeout(() => setGone(true), 800)
    return () => window.clearTimeout(t)
  }, [done])

  if (gone) return null

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[400] flex items-center justify-center transition-opacity duration-700"
      style={{ background: '#050403', opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'auto' }}
    >
      {/* Original KGEC brand animation — graded to black & white so the logo pixels stay
          untouched; gold only ever appears as our own overlay layer, never re-encoded video. */}
      <video
        ref={videoRef}
        src="/kgec-preloader-clean.mp4"
        muted
        playsInline
        className="w-full h-full object-cover"
        style={{ filter: 'grayscale(1) contrast(1.18) brightness(0.94)' }}
      />

      {/* Gold accent overlay */}
      <div className="absolute inset-x-0 bottom-0 px-6 pb-6 sm:px-10 sm:pb-10 flex items-end justify-between">
        <span
          className="mono text-[10px] sm:text-[11px] uppercase"
          style={{ color: 'var(--gold-light)', letterSpacing: '0.28em' }}
        >
          {SITE.name} &mdash; loading
        </span>
        <span
          className="mono text-[10px] sm:text-[11px] tabular-nums"
          style={{ color: 'var(--gold-light)', letterSpacing: '0.1em' }}
        >
          {String(Math.round(progress * 100)).padStart(2, '0')}%
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[2px]" style={{ background: 'rgba(184,146,63,0.18)' }}>
        <div
          className="h-full"
          style={{
            width: `${Math.min(progress, 1) * 100}%`,
            background: 'linear-gradient(90deg, var(--gold-deep), var(--gold-light))',
            transition: 'width 0.1s linear',
          }}
        />
      </div>
    </div>
  )
}
