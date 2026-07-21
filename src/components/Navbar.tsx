import { useEffect, useState } from 'react'
import { Link, useRouter } from '../lib/router'
import { Logo } from './Logo'
import { NAV_LINKS } from '../lib/content'

export function Navbar() {
  const { path } = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The nav is always dark. Only exception: merged transparent over the
  // home page's dark hero video, before the user scrolls — everywhere else
  // (any interior page, or the home page once scrolled) gets the solid
  // dark frosted bar.
  const overHero = (path === '/' || path === '') && !scrolled
  const solidDark = !overHero

  const ctaBase =
    'shrink-0 rounded-full font-mono uppercase tracking-[0.1em] text-[0.8rem] font-medium px-7 py-3 transition-colors duration-200'

  return (
    <header className={`site-nav ${solidDark ? 'is-scrolled' : ''} ${overHero ? 'over-hero' : ''}`}>
      <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between gap-8">
        {/* Logo — always the white silhouette; the nav is never light */}
        <Link to="/" className="flex items-center shrink-0" aria-label="KGEC home">
          <Logo onDark className="h-14 md:h-16" />
        </Link>

        {/* Center links — mono uppercase, underline wipes through on hover */}
        <nav className="hidden md:flex items-center gap-9" aria-label="Primary">
          {NAV_LINKS.map(({ href, label }) => {
            const active = path === href || (href !== '/' && path.startsWith(href))
            return (
              <Link key={href} to={href} className={`nav-link ${active ? 'is-active' : ''}`}>
                {label}
              </Link>
            )
          })}
        </nav>

        {/* CTA — solid gold, always high-contrast against the dark bar */}
        <Link
          to="/contact"
          className={`${ctaBase} hover:bg-[var(--gold-light)]`}
          style={{ background: 'var(--gold)', color: 'var(--ink)' }}
        >
          Get in touch
        </Link>
      </div>
    </header>
  )
}
