import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'
import { personal } from '@/data/personal'
import SectionHeading from '@/components/ui/SectionHeading'
import SectionBackground from '@/components/ui/SectionBackground'

export default function Resume() {
  return (
    <section id="resume" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <SectionBackground />
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="resume" title="The one-page version of all this." />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55 }}
          className="glow-border glass mt-12 flex flex-col items-start gap-6 rounded-2xl p-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-violet/15 text-violet-soft">
              <FileText size={22} />
            </div>
            <div>
              <p className="font-display text-base font-semibold text-text">Sriram — Resume</p>
              <p className="mt-1 text-sm text-muted">
                Software Developer / Data Analyst focus · Updated 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personal.resumeViewUrl}
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-cyan/40"
            >
              View Resume
            </a>
            <a
              href={personal.resumeDownloadUrl}
              className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
            >
              <Download size={15} />
              Download resume
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="glass mt-5 max-w-2xl rounded-2xl border border-dashed border-line p-8 text-center"
        >
          <p className="text-sm text-faint">
            Click "View Resume" above to open the full PDF in a new tab.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
