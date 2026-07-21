import { useEffect, useState } from 'react'
import { Link, useRouter } from '../lib/router'
import { Logo } from './Logo'
import { NAV_LINKS } from '../lib/content'

export function Navbar() {
  const { path } = useRouter()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    // Reference behaviour: transparent (merged with hero) until scrollY > 40, then frosted + border.
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // White treatment only while transparent over the dark home hero.
  const overHero = (path === '/' || path === '') && !scrolled

  const ctaBase =
    'shrink-0 rounded-full font-mono uppercase tracking-[0.1em] text-[0.8rem] font-medium px-7 py-3 transition-colors duration-200'

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''} ${overHero ? 'over-hero' : ''}`}>
      <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between gap-8">
        {/* Logo — white while merged over the hero, dark otherwise */}
        <Link to="/" className="flex items-center shrink-0" aria-label="KGEC home">
          <Logo onDark={overHero} className="h-14 md:h-16" />
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

        {/* CTA — ivory pill over the hero, dark pill (gold sweep) otherwise */}
        <Link
          to="/contact"
          className={
            overHero
              ? `bg-[var(--ivory)] text-[var(--ink)] hover:bg-[var(--gold-light)] ${ctaBase}`
              : `btn-pill ${ctaBase}`
          }
        >
          Get in touch
        </Link>
      </div>
    </header>
  )
}
