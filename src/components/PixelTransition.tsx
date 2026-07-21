import { useMemo } from 'react'

const COLS = 26
const ROWS = 15

/**
 * Elegant pixel-dissolve between pages.
 * cover : cells fade IN (staggered) until the screen is covered → route swaps under it
 * reveal: cells fade OUT (staggered, reversed) → the new page resolves through the mosaic
 */
export function PixelTransition({ phase }: { phase: 'idle' | 'cover' | 'reveal' }) {
  const seeds = useMemo(() => Array.from({ length: COLS * ROWS }, () => Math.random()), [])
  const active = phase !== 'idle'

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[300]"
      style={{ pointerEvents: active ? 'auto' : 'none', visibility: active ? 'visible' : 'hidden' }}
    >
      <div
        className="grid h-full w-full"
        style={{
          gridTemplateColumns: `repeat(${COLS}, 1fr)`,
          gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        }}
      >
        {seeds.map((r, i) => {
          const covering = phase === 'cover'
          const delay = covering ? r * 180 : (1 - r) * 320
          const dur = covering ? 240 : 360
          return (
            <div
              key={i}
              style={{
                background: 'var(--bg)',
                opacity: covering ? 1 : 0,
                transition: `opacity ${dur}ms ease`,
                transitionDelay: `${delay}ms`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}
