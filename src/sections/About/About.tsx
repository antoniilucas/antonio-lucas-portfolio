import { motion } from 'framer-motion'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import Terminal from '@/components/Terminal/Terminal'
import { fadeUp, viewportOnce } from '@/animations/variants'

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="01" label="About" />

        <div className="mt-12 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-6">
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
            >
              I BUILD
              <br />
              DIGITAL
              <br />
              <span className="text-[var(--color-accent)]">SYSTEMS.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 max-w-md text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
            >
              Sou estudante de Ciência da Computação com foco em desenvolvimento
              web. Trabalho na construção e evolução de interfaces, APIs e
              sistemas, buscando equilíbrio entre experiência do usuário,
              performance e qualidade de código.
            </motion.p>

            <motion.ul
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono text-sm text-[var(--color-ink)]"
            >
              {['React', 'Node.js', 'Laravel', 'PostgreSQL', 'Docker'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-1 w-1 bg-[var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="lg:col-span-6 lg:pt-2">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  )
}
