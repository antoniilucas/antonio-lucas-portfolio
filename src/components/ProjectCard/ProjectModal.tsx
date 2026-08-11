import { AnimatePresence, motion } from 'framer-motion'
import { X, ArrowUpRight, Code2 } from 'lucide-react'
import type { Project } from '@/data/projects'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.25 }}
        >
          <button
            type="button"
            aria-label="Close project details"
            onClick={onClose}
            className="absolute inset-0 bg-[var(--color-bg)]/90 backdrop-blur-sm"
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={project.name}
            initial={{ y: reducedMotion ? 0 : 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reducedMotion ? 0 : 20, opacity: 0 }}
            transition={{ duration: reducedMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-h-[88vh] w-full max-w-2xl overflow-y-auto border border-[var(--color-line)] bg-[var(--color-bg-raised)] p-6 sm:p-10"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <X size={20} />
            </button>

            <div className="mb-4 flex items-center gap-3 font-mono text-xs text-[var(--color-muted)]">
              <span>{project.number}</span>
              <span className="h-px w-8 bg-[var(--color-line)]" />
              <span>{project.year}</span>
              <span className="h-px w-8 bg-[var(--color-line)]" />
              <span>{project.type}</span>
            </div>

            <h3 className="font-display text-3xl font-bold sm:text-4xl">{project.name}</h3>

            <p className="mt-5 text-sm leading-relaxed text-[var(--color-ink)]/90 sm:text-base">
              {project.description}
            </p>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Challenge
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.challenge}
                </p>
              </div>
              <div>
                <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent)]">
                  Solution
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.solution}
                </p>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2 font-mono text-[11px] uppercase tracking-wide text-[var(--color-accent)]">
              {project.tech.map((t) => (
                <li key={t} className="border border-[var(--color-line)] px-2.5 py-1">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-6 border-t border-[var(--color-line)] pt-6">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide hover:text-[var(--color-accent)]"
                >
                  Live <ArrowUpRight size={14} />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-wide hover:text-[var(--color-accent)]"
                >
                  <Code2 size={14} /> Repository
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
