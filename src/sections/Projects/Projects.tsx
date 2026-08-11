import { useState } from 'react'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import ProjectModal from '@/components/ProjectCard/ProjectModal'
import { projects, type Project } from '@/data/projects'

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  return (
    <section id="projects" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="02" label="Selected Work" />

        <div className="mt-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setActive}
              reversed={i % 2 === 1}
            />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
