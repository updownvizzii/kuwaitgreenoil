import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
}

/** Wraps children and toggles data-show='true' when scrolled into view. */
export function Reveal({ children, className = '', delay = 0, threshold = 0.15 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [show, setShow] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true)
          obs.disconnect()
        }
      },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return (
    <div ref={ref} className={`reveal ${className}`} data-show={show} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
