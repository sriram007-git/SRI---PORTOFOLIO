import { motion } from 'framer-motion'
import { personal } from '@/data/personal'
import SectionHeading from '@/components/ui/SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeading label="about" title="Who I Am" />

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            {personal.aboutParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="mb-5 text-[15px] leading-relaxed text-muted"
              >
                {p}
              </motion.p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-2 lg:grid-cols-1">
            {personal.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5"
              >
                <p className="font-display text-2xl font-semibold text-text">{stat.value}</p>
                <p className="mt-1 font-mono text-xs text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}