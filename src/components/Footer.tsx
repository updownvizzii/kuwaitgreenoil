import { Link } from '../lib/router'
import { Logo } from './Logo'
import { NAV_LINKS, FOOTER, SITE } from '../lib/content'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[rgba(184,146,63,0.18)]" style={{ background: 'var(--ink)' }}>
      {/* Ticker — gold on ink */}
      <div className="overflow-hidden border-b border-[rgba(184,146,63,0.18)] py-4">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="mono text-[10px] uppercase tracking-[0.18em] pr-10 shrink-0"
              style={{ color: 'var(--gold)' }}
            >
              {FOOTER.ticker}
            </span>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="px-6 md:px-12 lg:px-16 py-16 grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="mb-5">
            <Logo onDark className="h-16" />
          </div>
          <p className="text-sm font-light max-w-xs leading-relaxed" style={{ color: 'var(--ivory-soft)' }}>
            {SITE.full}. {SITE.tagline}.
          </p>
        </div>

        <div>
          <p className="mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: 'var(--gold-light)' }}>Navigate</p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'var(--ivory-soft)' }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="mono text-[10px] uppercase tracking-[0.22em] mb-5" style={{ color: 'var(--gold-light)' }}>Contact</p>
          <ul className="flex flex-col gap-3 text-sm font-light" style={{ color: 'var(--ivory-soft)' }}>
            <li>
              <a href={`tel:${SITE.phone}`} className="hover:text-[var(--gold-light)] transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-[var(--gold-light)] transition-colors break-all">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.location}</li>
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-16 py-6 border-t border-[rgba(184,146,63,0.18)]">
        <p className="mono text-[10px] uppercase tracking-[0.14em]" style={{ color: 'rgba(250,248,241,0.4)' }}>{FOOTER.copy}</p>
      </div>
    </footer>
  )
}
