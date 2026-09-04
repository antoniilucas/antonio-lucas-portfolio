import { motion } from 'framer-motion'
import { ArrowRight, Code2, Briefcase, Mail } from 'lucide-react'
import GlitchText from '@/components/GlitchText/GlitchText'
import MagneticButton from '@/components/MagneticButton/MagneticButton'
import { staggerContainer, fadeUp } from '@/animations/variants'
import { siteConfig } from '@/data/config'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

export default function Hero() {
  const reducedMotion = usePrefersReducedMotion()

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden px-6 pt-28 pb-16 lg:px-10"
    >
      <motion.div
        variants={staggerContainer(0.12, reducedMotion ? 0 : 0.15)}
        initial="hidden"
        animate="visible"
        className="mx-auto w-full max-w-7xl"
      >
        <motion.div
          variants={fadeUp}
          className="mb-8 inline-flex items-center gap-2 border border-[var(--color-line)] px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-[11px]"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
          System online // available for select projects
        </motion.div>

        <h1 className="font-display font-black leading-[0.92] tracking-tight text-[clamp(3rem,10vw,7.5rem)]">
          <motion.div variants={fadeUp}>
            <GlitchText text="FULL STACK" as="div" />
          </motion.div>
          <motion.div variants={fadeUp}>
            <GlitchText text="DEVELOPER" as="div" className="text-[var(--color-accent)]" />
          </motion.div>
        </h1>

        <motion.p
          variants={fadeUp}
          className="mt-8 max-w-xl text-lg leading-relaxed text-[var(--color-muted)] sm:text-xl"
        >
          Construo sistemas web e produtos digitais, do backend à interface,
          com atenção a performance, arquitetura e experiência de uso.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]"
        >
          React • TypeScript • Node.js • Laravel
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            as="button"
            onClick={() => scrollTo('#projects')}
            data-cursor="link"
            className="group inline-flex items-center gap-2 bg-[var(--color-accent)] px-6 py-3.5 font-mono text-xs font-medium uppercase tracking-[0.15em] text-[var(--color-bg)]"
          >
            View Projects
            <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
          </MagneticButton>

          <MagneticButton
            as="button"
            onClick={() => scrollTo('#contact')}
            data-cursor="link"
            className="inline-flex items-center gap-2 border border-[var(--color-line)] px-6 py-3.5 font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-ink)] transition-colors hover:border-[var(--color-accent)]"
          >
            Get In Touch
          </MagneticButton>

          <div className="ml-1 flex items-center gap-4">
            <a
              href="https://github.com/antoniilucas"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              data-cursor="link"
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Code2 size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/antônio-lucas/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              data-cursor="link"
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Briefcase size={18} />
            </a>
            <a
              href={`mailto:antoniilucasofc@gmail.com`}
              aria-label="Email"
              data-cursor="link"
              className="text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
            >
              <Mail size={18} />
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="pointer-events-none absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted)]">
          Scroll
        </span>
        <span className="h-10 w-px bg-linear-to-b from-[var(--color-accent)] to-transparent" />
      </motion.div>
    </section>
  )
}
