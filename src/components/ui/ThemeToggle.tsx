import { useEffect, useState } from 'react'
import { Moon, Sun } from 'lucide-react'

const DARK_COLORS = {
  '--color-ink': '#08080c',
  '--color-ink-raised': '#0e0e15',
  '--color-surface': '#101018',
  '--color-line': 'rgba(245, 245, 250, 0.09)',
  '--color-line-soft': 'rgba(245, 245, 250, 0.05)',
  '--color-text': '#f1f1f5',
  '--color-muted': '#8c8c9a',
  '--color-faint': '#5a5a68',
}

const LIGHT_COLORS = {
  '--color-ink': '#f7f7fb',
  '--color-ink-raised': '#ffffff',
  '--color-surface': '#ffffff',
  '--color-line': 'rgba(10, 10, 20, 0.1)',
  '--color-line-soft': 'rgba(10, 10, 20, 0.05)',
  '--color-text': '#0e0e15',
  '--color-muted': '#4a4a58',
  '--color-faint': '#8a8a98',
}

function applyTheme(theme: 'dark' | 'light') {
  const colors = theme === 'dark' ? DARK_COLORS : LIGHT_COLORS
  const root = document.documentElement
  Object.entries(colors).forEach(([key, value]) => {
    root.style.setProperty(key, value)
  })
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    const initial = stored === 'light' ? 'light' : 'dark'
    setTheme(initial)
    applyTheme(initial)
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    applyTheme(next)
    localStorage.setItem('theme', next)
  }

  return (
    <button
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className="glass flex h-9 w-9 items-center justify-center rounded-full text-text/80 outline-none transition-colors hover:text-cyan focus-visible:ring-2 focus-visible:ring-cyan focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}