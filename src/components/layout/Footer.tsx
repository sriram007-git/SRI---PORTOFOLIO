import { Mail } from 'lucide-react'
import { personal } from '@/data/personal'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

export default function Footer() {
  return (
    <footer className="border-t border-line px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-lg font-semibold text-text">{personal.name}</p>
          <p className="mt-1 max-w-sm text-sm text-muted">
            Building software, exploring AI, and learning every day.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-cyan"
          >
            <GithubIcon size={17} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-cyan"
          >
            <LinkedinIcon size={17} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            aria-label="Email"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-cyan"
          >
            <Mail size={17} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-line pt-6">
        <p className="font-mono text-xs text-faint">© 2026 {personal.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
