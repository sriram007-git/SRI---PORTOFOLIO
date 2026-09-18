import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/personal'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cx } from '@/lib/utils'
import ThemeToggle from '@/components/ui/ThemeToggle'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(navLinks.map((l) => l.href.replace('#', '')))

  const handleNav = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto mt-3 max-w-6xl px-4 sm:mt-4 sm:px-6 lg:px-8">
        <nav className="glass relative flex items-center gap-6 overflow-hidden rounded-2xl px-4 py-3 sm:px-5">
          <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
            <div className="nav-glow-blob nav-glow-violet" />
            <div className="nav-glow-blob nav-glow-cyan" />
          </div>

          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault()
              handleNav('#home')
            }}
            aria-label="Home"
            className="group relative flex h-8 w-8 shrink-0 items-center justify-center"
          >
            <span className="absolute inset-0 rounded-lg bg-linear-to-br from-violet-soft to-cyan opacity-90 transition-opacity group-hover:opacity-100" />
            <span className="absolute inset-0 rounded-lg bg-linear-to-br from-violet-soft to-cyan opacity-60 blur-md" aria-hidden />
            <motion.span
              animate={{ rotate: [0, 8, 0, -8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative h-2.5 w-2.5 rounded-[3px] bg-ink"
            />
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cx(
                    'rounded-full px-3 py-1.5 font-mono text-[13px] transition-colors',
                    active === link.href.replace('#', '')
                      ? 'bg-white/8 text-text'
                      : 'text-muted hover:text-text'
                  )}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <button
              onClick={() => handleNav('#contact')}
              className="rounded-full bg-text px-4 py-1.5 font-mono text-[13px] font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              Let's talk
            </button>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              className="grid h-9 w-9 place-items-center rounded-full text-text"
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="glass mt-2 overflow-hidden rounded-2xl lg:hidden"
            >
              <ul className="flex flex-col p-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNav(link.href)}
                      className={cx(
                        'w-full rounded-xl px-3 py-2.5 text-left font-mono text-sm transition-colors',
                        active === link.href.replace('#', '')
                          ? 'bg-white/8 text-text'
                          : 'text-muted hover:text-text'
                      )}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}