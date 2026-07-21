/**
 * KGEC brand mark. The source artwork has a green signal-arc icon baked into
 * the raster PNG — per brand direction, no green should render anywhere on
 * the site. Rather than swap PNG variants (which still carry the green icon),
 * we force a true monochrome silhouette via CSS filter: brightness(0) crushes
 * every opaque pixel to black regardless of its original color, and invert(1)
 * flips that to white for dark backgrounds.
 */
export function Logo({
  onDark = false,
  className = 'h-12',
}: {
  onDark?: boolean
  className?: string
}) {
  return (
    <img
      src="/kgec-full-logo.png"
      alt="KGEC — Kuwait Green Energy Co."
      className={`w-auto object-contain ${className}`}
      style={{ filter: onDark ? 'brightness(0) invert(1)' : 'brightness(0)' }}
    />
  )
}
