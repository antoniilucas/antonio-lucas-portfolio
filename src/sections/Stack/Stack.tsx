import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import { stack } from '@/data/stack'
import { fadeUp, staggerContainer, viewportOnce } from '@/animations/variants'

export default function Stack() {
  const [hovered, setHovered] = useState<string | null>(null)

  return (
    <section id="stack" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="03" label="Stack" />

        <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {stack.map((category) => (
            <motion.div
              key={category.id}
              variants={staggerContainer(0.05)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
            >
              <motion.h3
                variants={fadeUp}
                className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-accent)]"
              >
                {category.label}
              </motion.h3>

              <ul className="mt-5 flex flex-col gap-1">
                {category.items.map((item) => {
                  const key = `${category.id}-${item.name}`
                  const isHovered = hovered === key
                  return (
                    <motion.li
                      key={key}
                      variants={fadeUp}
                      onMouseEnter={() => setHovered(key)}
                      onMouseLeave={() => setHovered(null)}
                      className="relative border-b border-[var(--color-line)] py-3"
                    >
                      <div className="flex items-baseline justify-between">
                        <span
                          className={`font-display text-lg font-semibold transition-colors ${
                            isHovered ? 'text-[var(--color-accent)]' : 'text-[var(--color-ink)]'
                          }`}
                        >
                          {item.name}
                        </span>
                        <motion.span
                          animate={{ x: isHovered ? 0 : 6, opacity: isHovered ? 1 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="font-mono text-[10px] text-[var(--color-muted)]"
                        >
                          →
                        </motion.span>
                      </div>
                      <motion.p
                        initial={false}
                        animate={{
                          height: isHovered ? 'auto' : 0,
                          opacity: isHovered ? 1 : 0,
                        }}
                        transition={{ duration: 0.25, ease: 'easeOut' }}
                        className="overflow-hidden font-mono text-xs leading-relaxed text-[var(--color-muted)]"
                      >
                        <span className="block pt-1.5">{item.description}</span>
                      </motion.p>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
