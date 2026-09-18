import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'
import TiltCard from '@/components/ui/TiltCard'
import { GithubIcon } from '@/components/ui/BrandIcons'

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.08 }}
    >
      <TiltCard className="glow-border glass flex h-full flex-col rounded-2xl p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-cyan">{project.category}</p>
            <h3 className="mt-1.5 font-display text-lg font-semibold text-text">{project.title}</h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <GithubIcon size={15} />
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.title} live demo`}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-cyan/50 hover:text-cyan"
              >
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-line bg-white/[0.02] px-2.5 py-1 font-mono text-[11px] text-muted"
            >
              {t}
            </span>
          ))}
        </div>

        <button
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 flex items-center gap-1.5 self-start font-mono text-xs text-violet-soft transition-colors hover:text-cyan"
          aria-expanded={expanded}
        >
          {expanded ? 'Hide details' : 'View details'}
          <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown size={13} />
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.ul
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="mt-3 space-y-2 overflow-hidden border-t border-line pt-3"
            >
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-2 text-xs leading-relaxed text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  {h}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </TiltCard>
    </motion.div>
  )
}
