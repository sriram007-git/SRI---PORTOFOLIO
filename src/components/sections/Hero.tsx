import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Download } from 'lucide-react'
import { personal } from '@/data/personal'
import { useCanRenderHeavyEffects } from '@/hooks/useCanRenderHeavyEffects'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'

const HeroScene = lazy(() => import('@/components/canvas/HeroScene'))

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
}

export default function Hero() {
  const canRenderHeavy = useCanRenderHeavyEffects()

  return (
    <section id="home" className="relative flex min-h-svh items-center overflow-hidden pt-28 sm:pt-24">
      <div className="grid-fade absolute inset-0" aria-hidden />

      <div className="absolute inset-0" aria-hidden>
        {canRenderHeavy ? (
          <Suspense fallback={null}>
            <HeroScene />
          </Suspense>
        ) : (
          <div className="absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_60%_50%_at_75%_30%,rgba(124,92,252,0.18),transparent_60%)]" />
        )}
      </div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink via-transparent to-ink/40" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6 lg:px-8"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
          className="absolute right-[8%] top-1/2 z-10 hidden -translate-y-1/2 lg:block"
        >
          <div className="relative h-64 w-64 xl:h-72 xl:w-72">
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-violet-soft/30 to-cyan/30 blur-2xl" />
            <img
              src="/sriram.jpg"
              alt="Sriram"
              className="relative h-full w-full rounded-full border-2 border-violet-soft/30 object-cover object-top shadow-2xl"
            />
          </div>
        </motion.div>

        <motion.div variants={item} className="glass mb-7 inline-flex items-center gap-2 rounded-full px-3.5 py-1.5">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan" />
          </span>
          <span className="font-mono text-xs text-muted">{personal.status}</span>
        </motion.div>

        <motion.h1
          variants={item}
          className="max-w-3xl font-display text-[13vw] font-semibold leading-[0.98] text-text text-balance sm:text-6xl md:text-7xl"
        >
          Hi, I'm{' '}
          <span
            style={{
              background: 'linear-gradient(to right, #a996ff, #45e0c6)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Sriram
          </span>
        </motion.h1>

        <motion.p variants={item} className="mt-5 max-w-xl font-display text-lg text-muted sm:text-xl">
          {personal.role}
        </motion.p>

        <motion.p variants={item} className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted">
          {personal.intro}
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="group inline-flex items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-ink transition-transform hover:scale-[1.03]"
          >
            View my projects
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href={personal.resumeViewUrl}
            target="_blank"
            rel="noreferrer"
            className="glow-border glass inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-text transition-colors hover:border-violet-soft/40"
          >
            View Resume
          </a>

          <a
            href={personal.resumeDownloadUrl}
            aria-label="Download resume"
            className="glass flex h-10 w-10 items-center justify-center rounded-full text-muted transition-colors hover:text-cyan"
          >
            <Download size={16} />
          </a>

          <div className="ml-1 flex items-center gap-2">
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
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-muted"
        >
          <span className="font-mono text-[11px]">scroll</span>
          <ArrowDown size={14} />
        </motion.div>
      </motion.div>
    </section>
  )
}