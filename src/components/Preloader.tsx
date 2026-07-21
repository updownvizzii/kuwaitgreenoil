import { useEffect, useRef, useState } from 'react'

// Plays once per browser session — survives client-side navigation
let sessionDone = false

export function Preloader() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [done, setDone] = useState(sessionDone)
  const [gone, setGone] = useState(sessionDone)

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
    const fallback = window.setTimeout(finish, 9000)

    return () => {
      video.removeEventListener('ended', finish)
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
      style={{ background: '#000', opacity: done ? 0 : 1, pointerEvents: done ? 'none' : 'auto' }}
    >
      {/* Original KGEC brand animation, unprocessed */}
      <video
        ref={videoRef}
        src="/kgec-preloader-clean.mp4"
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  )
}
