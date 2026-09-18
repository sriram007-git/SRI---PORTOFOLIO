import { motion } from 'framer-motion'

const skillGroups = [
  {
    category: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['FastAPI', 'Flask', 'Django', 'Python'],
  },
  {
    category: 'Data & BI',
    skills: ['Power BI', 'Excel', 'Pandas', 'NumPy', 'Data Visualization', 'KPI Dashboards'],
  },
  {
    category: 'AI / GenAI',
    skills: ['OpenAI API', 'Gemini API', 'Claude API', 'Grok API', 'Prompt Engineering', 'RAG'],
  },
  {
    category: 'Cloud',
    skills: ['Vercel', 'GoDaddy DNS', 'Netlify'],
  },
  {
    category: 'Developer Tools',
    skills: ['Git', 'GitHub', 'Postman', 'VS Code'],
  },
]

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
}

export default function Skills() {
  return (
    <section id="skills" className="relative mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="mb-14 text-center font-display text-4xl font-semibold text-cyan sm:text-5xl"
      >
        Technologies I Use
      </motion.h2>

      <div className="space-y-14">
        {skillGroups.map((group) => (
          <motion.div
            key={group.category}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={container}
          >
            <motion.div variants={item} className="mb-5">
              <h3 className="mb-2 font-display text-lg font-semibold text-cyan">{group.category}</h3>
              <div className="h-px w-full bg-linear-to-r from-cyan/50 to-transparent" />
            </motion.div>

            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={item}
                  className="glass rounded-xl px-5 py-3 text-sm font-medium text-text transition-colors hover:border-cyan/40 hover:text-cyan"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}