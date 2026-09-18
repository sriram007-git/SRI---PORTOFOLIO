import { motion } from 'framer-motion'

export default function SectionHeading({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
      className="max-w-2xl"
    >
      <p className="font-mono text-sm text-cyan">// {label}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold text-balance text-text sm:text-4xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-[15px] leading-relaxed text-muted">{description}</p>}
    </motion.div>
  )
}
