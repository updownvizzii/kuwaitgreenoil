import { Fragment, useEffect, useState } from 'react'

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
    <h1 className={className} style={{ letterSpacing: '0.01em' }}>
      {lines.map((line, lineIndex) => {
        const words = line.split(' ')
        let charIndex = -1

        const renderWord = (word: string, wordIndex: number) => {
          const spans = Array.from(word).map((char, i) => {
            charIndex += 1
            const key = `${lineIndex}-${charIndex}`
            const show = revealed.has(key)
            return (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  opacity: show ? 1 : 0,
                  transform: show ? 'translateX(0)' : 'translateX(-18px)',
                  transition: 'opacity 500ms, transform 500ms',
                }}
              >
                {char}
              </span>
            )
          })
          if (wordIndex < words.length - 1) charIndex += 1 // account for the separating space
          return (
            <Fragment key={wordIndex}>
              {/* Grouped so the browser can only wrap between words, never mid-word. */}
              <span style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>{spans}</span>
              {/* Space rendered OUTSIDE the inline-block — inside it, a trailing space
                  collapses to zero width (inline-block trims leading/trailing whitespace). */}
              {wordIndex < words.length - 1 ? ' ' : ''}
            </Fragment>
          )
        }

        return (
          <span key={lineIndex} style={{ display: 'block' }}>
            {words.map((word, wordIndex) => renderWord(word, wordIndex))}
          </span>
        )
      })}
    </h1>
  )
}
