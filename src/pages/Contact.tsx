import { useState, type FormEvent } from 'react'
import { PageHeader } from '../components/PageHeader'
import { Reveal } from '../components/Reveal'
import { Location } from '../components/Location'
import { SITE } from '../lib/content'

const FIELDS = [
  { label: 'Phone', value: SITE.phone, href: `tel:${SITE.phone}` },
  { label: 'Email', value: SITE.email, href: `mailto:${SITE.email}` },
  { label: 'Location', value: SITE.location },
  { label: 'Post', value: SITE.address },
]

export function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')

  const submit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project Enquiry — ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${msg}`)
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`
  }

  const inputCls =
    'w-full bg-[var(--surface)] border border-[var(--line)] focus:border-[var(--gold)] outline-none px-4 py-3.5 text-sm font-light text-[var(--ink)] placeholder-[var(--ink-soft)]/50 transition-colors rounded-lg'

  return (
    <div className="bg-[var(--bg)]">
      <PageHeader
        eyebrow="Contact"
        title={"Talk to Kuwait's most\ncertified engineering team."}
        sub="Whether you have a project specification, a maintenance scope, or just want to understand what KGEC's certifications mean for your supply chain, our team is ready to respond."
      />

      {/* Contact cards */}
      <section className="px-6 md:px-12 lg:px-16 py-20 md:py-24 border-b border-[var(--line)]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {FIELDS.map((f, i) => (
            <Reveal key={f.label} delay={i * 60}>
              <div className="feature-card rounded-xl p-7 md:p-9 h-full flex flex-col gap-3">
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--gold-deep)]">{f.label}</span>
                {f.href ? (
                  <a href={f.href} className="text-sm md:text-base font-light text-[var(--ink)] hover:text-[var(--gold-deep)] transition-colors break-words">
                    {f.value}
                  </a>
                ) : (
                  <span className="text-sm md:text-base font-light text-[var(--ink)]">{f.value}</span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-32 border-b border-[var(--line)]">
        <Reveal><p className="kicker mb-5">Send an enquiry</p></Reveal>
        <Reveal delay={60}>
          <h2 className="text-grad font-serif text-3xl md:text-5xl font-medium tracking-tight mb-14" style={{ letterSpacing: '0.005em' }}>
            Tell us about your project.
          </h2>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} className="max-w-3xl flex flex-col gap-7">
            <div className="grid sm:grid-cols-2 gap-7">
              <div className="flex flex-col gap-3">
                <label className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">Name</label>
                <input className={inputCls} type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
              </div>
              <div className="flex flex-col gap-3">
                <label className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">Email</label>
                <input className={inputCls} type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" />
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <label className="mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">Message</label>
              <textarea className={`${inputCls} resize-none`} required rows={6} value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Describe your scope, specification, or question..." />
            </div>
            <button
              type="submit"
              className="btn-pill self-start px-8 py-3.5 rounded-lg font-medium"
            >
              Send Enquiry →
            </button>
          </form>
        </Reveal>
      </section>

      <Location />
    </div>
  )
}
