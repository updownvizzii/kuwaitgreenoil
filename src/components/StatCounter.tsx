import { useEffect, useRef, useState } from 'react'

export function StatCounter({ raw, suffix }: { raw: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [text, setText] = useState('0' + suffix)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const hasComma = raw.includes(',')
    const target = parseFloat(raw.replace(/,/g, '')) || 0
    const fmt = (n: number) =>
      hasComma ? Math.floor(n).toLocaleString() : String(Math.floor(n))

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || fired.current) return
        fired.current = true
        const start = performance.now()
        const dur = 1700
        const step = (now: number) => {
          const t = Math.min(1, (now - start) / dur)
          const eased = 1 - Math.pow(1 - t, 4)
          if (t < 1) {
            setText(fmt(eased * target) + suffix)
            requestAnimationFrame(step)
          } else {
            setText(raw + suffix)
          }
        }
        requestAnimationFrame(step)
        obs.disconnect()
      },
      { threshold: 0.4 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [raw, suffix])

  return <span ref={ref}>{text}</span>
}
