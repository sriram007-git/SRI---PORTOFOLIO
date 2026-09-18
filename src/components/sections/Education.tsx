import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '@/data/education'
import SectionHeading from '@/components/ui/SectionHeading'

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading label="education" title="Where the foundation was built." />

        <div className="relative mt-12 max-w-2xl border-l border-line pl-8">
          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative pb-2"
            >
              <span className="glass absolute -left-[42px] flex h-8 w-8 items-center justify-center rounded-full text-violet-soft">
                <GraduationCap size={14} />
              </span>

              <p className="font-mono text-xs text-cyan">{edu.period}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-text">{edu.degree}</h3>
              <p className="mt-1 text-sm text-muted">
                {edu.institution} · {edu.affiliation}
              </p>

              <div className="glass mt-4 inline-flex flex-col gap-1 rounded-xl px-4 py-3">
                <span className="font-mono text-xs text-muted">
                  CGPA: <span className="text-text">{edu.cgpa}</span>
                </span>
              </div>

              <p className="mt-3 max-w-md text-xs text-faint">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
