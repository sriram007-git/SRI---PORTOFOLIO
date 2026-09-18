import { motion } from 'framer-motion'
import { Briefcase, MapPin } from 'lucide-react'

const experience = [
  {
    role: 'Data Analyst Intern',
    company: 'Oasis Infobyte',
    location: 'Chennai',
    period: 'June — July 2025',
    type: 'Internship',
    highlights: [
      'Queried, cleaned and transformed large-scale datasets using SQL to prepare them for analysis and reporting',
      'Designed and built interactive Power BI dashboards to track key performance indicators for business stakeholders',
      'Translated raw data into clear visual insights, enabling faster, more informed decision-making',
      'Applied Excel and SQL together to validate data accuracy across multiple reporting cycles',
    ],
    tech: ['SQL', 'Power BI', 'Excel', 'Data Cleaning', 'Dashboarding'],
  },
  {
    role: 'Python Programming Intern',
    company: 'CodSoft',
    location: 'Remote',
    period: '[Add dates]',
    type: 'Internship',
    highlights: [
      'Integrated file handling into a Task Management System to perform full CRUD operations, enabling users to store, retrieve, update and delete tasks',
      'Engineered a calculator application with modular architecture, input validation and 8+ arithmetic operations, improving code maintainability and reliability',
      'Built a password generator that produces secure, random passwords with customizable length and character combinations using Python\u2019s random and string libraries',
    ],
    tech: ['Python', 'File Handling', 'OOP', 'Modular Design'],
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Experience() {
  return (
    <section id="experience" className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-14 text-center"
      >
        <h2 className="font-display text-4xl font-semibold text-cyan sm:text-5xl">Experience</h2>
        <p className="mt-3 text-sm text-muted">Hands-on work turning data into decisions</p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={container}
        className="relative space-y-8 border-l border-line pl-8 sm:pl-10"
      >
        {experience.map((exp) => (
          <motion.div
            key={`${exp.role}-${exp.company}`}
            variants={item}
            className="glow-border glass relative rounded-2xl p-6 transition-colors hover:border-cyan/30 sm:p-8"
          >
            <span className="absolute -left-10.25top-8 flex h-6 w-6 items-center justify-center rounded-full border border-cyan/40 bg-ink sm:-left-12.25">
              <span className="h-2 w-2 rounded-full bg-cyan" />
            </span>

            <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
              <div>
                <div className="mb-1.5 flex items-center gap-2">
                  <Briefcase size={15} className="text-cyan" />
                  <h3 className="font-display text-xl font-semibold text-text sm:text-2xl">{exp.role}</h3>
                </div>
                <p className="text-sm font-medium text-violet-soft">{exp.company}</p>
                <p className="mt-1 flex items-center gap-1.5 text-xs text-muted">
                  <MapPin size={12} />
                  {exp.location}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="font-mono text-xs text-muted">{exp.period}</span>
                <span className="rounded-full bg-cyan/10 px-2.5 py-0.5 text-[11px] font-medium text-cyan">
                  {exp.type}
                </span>
              </div>
            </div>

            <ul className="mb-6 space-y-2.5">
              {exp.highlights.map((point) => (
                <li key={point} className="flex gap-2.5 text-[15px] leading-relaxed text-muted">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-cyan" />
                  {point}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2">
              {exp.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}