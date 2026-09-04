import { motion } from 'framer-motion'
import { ArrowUpRight, Code2 } from 'lucide-react'
import type { Project } from '@/data/projects'
import { fadeUp, viewportOnce } from '@/animations/variants'
import GlitchText from '@/components/GlitchText/GlitchText'

interface ProjectCardProps {
  project: Project
  onOpen: (project: Project) => void
  reversed?: boolean
}

export default function ProjectCard({ project, onOpen, reversed = false }: ProjectCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`group grid grid-cols-1 gap-8 border-t border-[var(--color-line)] py-10 md:grid-cols-12 md:gap-6 md:py-14 ${
        reversed ? 'md:[direction:rtl]' : ''
      }`}
    >
      <div className={`md:col-span-5 ${reversed ? '[direction:ltr]' : ''}`}>
        <button
          type="button"
          onClick={() => onOpen(project)}
          data-cursor="label"
          data-cursor-text="VIEW"
          className="relative block aspect-4/3 w-full overflow-hidden border border-[var(--color-line)] bg-[var(--color-bg-raised)] text-left"
        >
          <img
            src={project.image}
            alt={`Preview of ${project.name}`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
            <motion.span
              className="font-display text-6xl font-black text-white/70 transition-transform duration-500 group-hover:scale-110"
              aria-hidden="true"
            >
              {project.number}
            </motion.span>
          </div>
          <div className="absolute inset-0 bg-linear-to-t from-[var(--color-bg)] via-transparent to-transparent opacity-60" />
          <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {project.type}
          </span>
        </button>
      </div>

      <div className={`md:col-span-7 flex flex-col justify-center ${reversed ? '[direction:ltr]' : ''}`}>
        <div className="mb-3 flex items-center gap-3 font-mono text-xs text-[var(--color-muted)]">
          <span>{project.number}</span>
          <span className="h-px w-8 bg-[var(--color-line)]" />
          <span>{project.year}</span>
        </div>

        <button type="button" onClick={() => onOpen(project)} className="text-left">
          <GlitchText
            text={project.name}
            as="h3"
            triggerOnMount={false}
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          />
        </button>

        <p className="mt-4 max-w-lg text-sm leading-relaxed text-[var(--color-muted)] sm:text-base">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide text-[var(--color-accent)]">
          {project.tech.map((t) => (
            <li key={t} className="border border-[var(--color-line)] px-2.5 py-1">
              {t}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center gap-5">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
            >
              Live <ArrowUpRight size={14} />
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              data-cursor="link"
              className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Code2 size={14} /> GitHub
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
