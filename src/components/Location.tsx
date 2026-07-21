import { Reveal } from './Reveal'
import { SITE } from '../lib/content'

const MAPS_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d223344.50122725425!2d47.95229481640626!3d28.994546299999985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf01ca8f6f1aed%3A0x60b4b71b0404b22!2sKuwait%20Green%20Energy%20Co.!5e0!3m2!1sen!2skw!4v1635766302018!5m2!1sen!2skw'

/** Real business location, embedded straight from the company's registered Google listing. */
export function Location() {
  return (
    <section className="relative z-10 grid lg:grid-cols-2">
      <div className="px-6 md:px-12 lg:px-16 py-20 md:py-28 flex flex-col justify-center" style={{ background: 'var(--bg)' }}>
        <Reveal>
          <p className="kicker mb-6">Find us</p>
        </Reveal>
        <Reveal delay={60}>
          <h2 className="text-grad font-serif text-3xl md:text-5xl font-normal leading-[1.15] mb-8" style={{ letterSpacing: '0.005em' }}>
            Based in Kuwait,<br />built for the region.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <div className="flex flex-col gap-3 text-sm md:text-base font-light" style={{ color: 'var(--ink-soft)' }}>
            <span>{SITE.address}</span>
            <span>{SITE.location}</span>
            <a href={`tel:${SITE.phone}`} className="hover:text-[var(--gold-deep)] transition-colors w-fit">
              {SITE.phone}
            </a>
            <a href={`mailto:${SITE.email}`} className="hover:text-[var(--gold-deep)] transition-colors w-fit">
              {SITE.email}
            </a>
          </div>
        </Reveal>
      </div>

      <div className="relative min-h-[360px] lg:min-h-0">
        <iframe
          title="KGEC location"
          src={MAPS_SRC}
          className="absolute inset-0 w-full h-full"
          style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="absolute inset-0 pointer-events-none" style={{ boxShadow: 'inset 0 0 60px rgba(10,9,8,0.25)' }} />
      </div>
    </section>
  )
}
