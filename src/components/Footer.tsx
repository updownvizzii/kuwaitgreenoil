import { Link } from '../lib/router'
import { Logo } from './Logo'
import { NAV_LINKS, FOOTER, SITE } from '../lib/content'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-black/10 bg-[#ecece7]">
      {/* Ticker */}
      <div className="overflow-hidden border-b border-black/10 py-4">
        <div className="ticker-track">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className="mono text-[10px] uppercase tracking-[0.18em] text-black/30 pr-10 shrink-0"
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
            <Logo className="h-16" />
          </div>
          <p className="text-sm text-[var(--ink-soft)] font-light max-w-xs leading-relaxed">
            {SITE.full}. {SITE.tagline}.
          </p>
        </div>

        <div>
          <p className="eyebrow mb-5">Navigate</p>
          <ul className="flex flex-col gap-3">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  to={href}
                  className="text-sm text-black/60 hover:text-[var(--ink)] transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-5">Contact</p>
          <ul className="flex flex-col gap-3 text-sm text-black/60 font-light">
            <li>
              <a href={`tel:${SITE.phone}`} className="hover:text-[var(--ink)] transition-colors">
                {SITE.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${SITE.email}`} className="hover:text-[var(--ink)] transition-colors break-all">
                {SITE.email}
              </a>
            </li>
            <li>{SITE.location}</li>
          </ul>
        </div>
      </div>

      <div className="px-6 md:px-12 lg:px-16 py-6 border-t border-black/10">
        <p className="mono text-[10px] uppercase tracking-[0.14em] text-black/40">{FOOTER.copy}</p>
      </div>
    </footer>
  )
}
