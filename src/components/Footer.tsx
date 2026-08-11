import { siteConfig } from '@/data/config'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] px-6 py-10 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-sm font-bold tracking-wide">{siteConfig.handle}</p>
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {siteConfig.role} · © {siteConfig.year}
          </p>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
          <a href={siteConfig.github} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
            GitHub
          </a>
          <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="hover:text-[var(--color-accent)]">
            LinkedIn
          </a>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-[var(--color-accent)]">
            Email
          </a>
        </div>

        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Built with React + TypeScript
        </p>
      </div>
    </footer>
  )
}
