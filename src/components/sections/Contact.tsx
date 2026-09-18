import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Clock, Mail, MapPin, Send } from 'lucide-react'
import { personal } from '@/data/personal'
import SectionHeading from '@/components/ui/SectionHeading'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

type Errors = Partial<Record<keyof FormState, string>>

const initialState: FormState = { name: '', email: '', subject: '', message: '' }

function validate(values: FormState): Errors {
  const errors: Errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'That email doesn\u2019t look right.'
  }
  if (!values.subject.trim()) errors.subject = 'Please add a subject.'
  if (!values.message.trim()) {
    errors.message = 'Please write a short message.'
  } else if (values.message.trim().length < 10) {
    errors.message = 'A little more detail would help — at least 10 characters.'
  }
  return errors
}

export default function Contact() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)

  const handleChange = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    const body = encodeURIComponent(`${values.message}\n\n— ${values.name} (${values.email})`)
    const subject = encodeURIComponent(values.subject)
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`

    setSent(true)
    setValues(initialState)
  }

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="contact" title="Let's build something meaningful." />

        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            noValidate
            className="glass col-span-1 rounded-2xl p-6 sm:p-8 lg:col-span-3"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="font-mono text-xs text-muted">
                  Name
                </label>
                <input
                  id="name"
                  value={values.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-line bg-white/2 px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan/50"
                  placeholder="Your name"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1.5 text-xs text-amber">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="font-mono text-xs text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={values.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-line bg-white/2 px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan/50"
                  placeholder="you@example.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1.5 text-xs text-amber">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="font-mono text-xs text-muted">
                Subject
              </label>
              <input
                id="subject"
                value={values.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                className="mt-2 w-full rounded-xl border border-line bg-white/2 px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan/50"
                placeholder="What's this about?"
                aria-invalid={Boolean(errors.subject)}
                aria-describedby={errors.subject ? 'subject-error' : undefined}
              />
              {errors.subject && (
                <p id="subject-error" className="mt-1.5 text-xs text-amber">
                  {errors.subject}
                </p>
              )}
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="font-mono text-xs text-muted">
                Message
              </label>
              <textarea
                id="message"
                value={values.message}
                onChange={(e) => handleChange('message', e.target.value)}
                rows={5}
                className="mt-2 w-full resize-none rounded-xl border border-line bg-white/2 px-3.5 py-2.5 text-sm text-text outline-none transition-colors focus:border-cyan/50"
                placeholder="Tell me a bit about the role or project."
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
              />
              {errors.message && (
                <p id="message-error" className="mt-1.5 text-xs text-amber">
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              <Send size={14} />
              Send message
            </button>

            {sent && (
              <motion.p
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 flex items-center gap-2 text-xs text-cyan"
              >
                <CheckCircle2 size={14} />
                Your email app should be opening now — thanks for reaching out.
              </motion.p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glow-border glass relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl p-6 sm:p-8 lg:col-span-2"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-linear-to-br from-violet-soft/20 to-cyan/10 blur-3xl"
              aria-hidden
            />

            <div className="relative">
              <span className="glass mb-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
                </span>
                <span className="font-mono text-xs text-muted">{personal.status}</span>
              </span>

              <p className="font-display text-lg font-semibold text-text">Prefer a direct line?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Email, GitHub or LinkedIn all work — whichever's easiest for you.
              </p>

              <div className="mt-6 flex items-center gap-2 text-xs text-faint">
                <Clock size={13} className="text-cyan" />
                Usually responds within a day
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs text-faint">
                <MapPin size={13} className="text-cyan" />
                Based in Chennai, India
              </div>
            </div>

            <div className="relative mt-8 flex flex-col gap-3">
              <a
                href={`mailto:${personal.email}`}
                className="group flex items-center gap-3 rounded-xl border border-line bg-white/2 px-4 py-3 text-sm text-muted transition-colors hover:border-cyan/40 hover:bg-white/4 hover:text-text"
              >
                <Mail size={16} className="text-cyan transition-transform group-hover:scale-110" />
                {personal.email}
              </a>
              <a
                href={personal.github}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-line bg-white/2 px-4 py-3 text-sm text-muted transition-colors hover:border-cyan/40 hover:bg-white/4 hover:text-text"
              >
                <GithubIcon size={16} className="text-cyan transition-transform group-hover:scale-110" />
                github.com/sriram007-git
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-line bg-white/2 px-4 py-3 text-sm text-muted transition-colors hover:border-cyan/40 hover:bg-white/4 hover:text-text"
              >
                <LinkedinIcon size={16} className="text-cyan transition-transform group-hover:scale-110" />
                linkedin.com/in/sriramr007
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}