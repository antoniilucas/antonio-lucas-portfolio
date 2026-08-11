import { motion } from 'framer-motion'
import { FileText, ArrowRight } from 'lucide-react'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import MagneticButton from '@/components/MagneticButton/MagneticButton'
import { experience } from '@/data/experience'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { siteConfig } from '@/data/config'

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="04" label="Experience" />

        <div className="mt-14">
          {experience.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="group grid grid-cols-1 gap-3 border-t border-[var(--color-line)] py-8 sm:grid-cols-12 sm:gap-6 sm:py-10"
            >
              <span className="font-mono text-xs uppercase tracking-[0.15em] text-[var(--color-muted)] sm:col-span-3">
                {item.period}
              </span>

              <div className="sm:col-span-6">
                <h3 className="font-display text-xl font-semibold sm:text-2xl">
                  {item.role}{' '}
                  <span className="text-[var(--color-muted)]">— {item.org}</span>
                </h3>
                <p className="mt-2 max-w-lg text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap items-start gap-2 sm:col-span-3 sm:justify-end">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-[var(--color-line)] px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-[var(--color-accent)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 flex flex-col items-start justify-between gap-6 border border-[var(--color-line)] bg-[var(--color-bg-raised)] px-6 py-8 sm:flex-row sm:items-center sm:px-10"
        >
          <div className="flex items-center gap-4">
            <FileText size={22} className="text-[var(--color-accent)]" />
            <div>
              <p className="font-display text-lg font-semibold sm:text-xl">
                Want the full story?
              </p>
              <p className="mt-1 font-mono text-xs text-[var(--color-muted)]">
                Full resume — experience, education & skills.
              </p>
            </div>
          </div>

          <MagneticButton
            as="a"
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noreferrer"
            data-cursor="link"
            className="inline-flex items-center gap-2 border border-[var(--color-line)] px-5 py-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            View Resume <ArrowRight size={14} />
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  )
}
