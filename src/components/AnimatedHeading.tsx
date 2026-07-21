import { useEffect, useState } from 'react'

interface AnimatedHeadingProps {
  text: string
  className?: string
  initialDelay?: number
  charDelay?: number
}

export function AnimatedHeading({
  text,
  className = '',
  initialDelay = 200,
  charDelay = 30,
}: AnimatedHeadingProps) {
  const [revealed, setRevealed] = useState<Set<string>>(new Set())

  const lines = text.split('\n')

  useEffect(() => {
    const timeouts: ReturnType<typeof setTimeout>[] = []

    // Each line's start offset = sum of all previous lines' char counts * charDelay
    let cumulativeOffset = 0
    lines.forEach((line, lineIndex) => {
      Array.from(line).forEach((_, charIndex) => {
        const delay = initialDelay + cumulativeOffset + charIndex * charDelay
        const t = setTimeout(() => {
          setRevealed(prev => new Set([...prev, `${lineIndex}-${charIndex}`]))
        }, delay)
        timeouts.push(t)
      })
      cumulativeOffset += line.length * charDelay
    })

    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => (
        <span key={lineIndex} style={{ display: 'block' }}>
          {Array.from(line).map((char, charIndex) => {
            const key = `${lineIndex}-${charIndex}`
            const show = revealed.has(key)
            return (
              <span
                key={key}
                style={{
                  display: 'inline-block',
                  opacity: show ? 1 : 0,
                  transform: show ? 'translateX(0)' : 'translateX(-18px)',
                  transition: 'opacity 500ms, transform 500ms',
                }}
              >
                {char === ' ' ? ' ' : char}
              </span>
            )
          })}
        </span>
      ))}
    </h1>
  )
}
