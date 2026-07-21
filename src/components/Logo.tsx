/**
 * Real KGEC brand logo (transparent PNG). The artwork has dark/black lettering,
 * so on dark backgrounds pass `onDark` to use the white-lettered variant.
 * Size via the `className` height utility (e.g. "h-12").
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
      src={onDark ? '/kgec-full-logo-white.png' : '/kgec-full-logo.png'}
      alt="KGEC — Kuwait Green Energy Co."
      className={`w-auto object-contain ${className}`}
    />
  )
}
