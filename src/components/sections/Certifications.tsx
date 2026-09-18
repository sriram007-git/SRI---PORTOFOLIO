import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'
import { certifications } from '@/data/education'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="certifications" title="Courses I actually finished." />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="glow-border glass flex flex-col rounded-2xl p-5"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan/10 text-cyan">
                <Award size={16} />
              </div>
              <h3 className="mt-4 font-display text-sm font-semibold leading-snug text-text">{cert.name}</h3>
              <p className="mt-1 text-xs text-muted">{cert.issuer}</p>
              {cert.date && <p className="mt-1 font-mono text-[11px] text-faint">{cert.date}</p>}

              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-violet-soft hover:text-cyan"
                >
                  View credential <ExternalLink size={12} />
                </a>
              ) : (
                <span className="mt-4 font-mono text-[11px] text-faint">Credential link coming soon</span>
              )}
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: certifications.length * 0.07 }}
            className="flex flex-col items-start justify-center rounded-2xl border border-dashed border-line p-5"
          >
            <p className="font-display text-sm font-medium text-muted">More on the way</p>
            <p className="mt-1 text-xs text-faint">This section grows as new certifications are completed.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
