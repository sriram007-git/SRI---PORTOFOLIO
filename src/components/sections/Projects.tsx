import { projects } from '@/data/projects'
import SectionHeading from '@/components/ui/SectionHeading'
import ProjectCard from '@/components/ui/ProjectCard'

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          label="projects"
          title="Things I've actually built."
          description="A mix of AI systems, full-stack apps, browser extensions, and dashboards — each one built end-to-end, not left half-finished."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
