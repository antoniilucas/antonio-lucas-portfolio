import { motion } from 'framer-motion'
import { Mail, Code2, Briefcase } from 'lucide-react'
import GlitchText from '@/components/GlitchText/GlitchText'
import SectionTitle from '@/components/SectionTitle/SectionTitle'
import MagneticButton from '@/components/MagneticButton/MagneticButton'
import { fadeUp, viewportOnce } from '@/animations/variants'
import { siteConfig } from '@/data/config'

const links = [
  { label: 'Email', value: 'antoniilucasofc@gmail.com', href: 'mailto:antoniilucasofc@gmail.com', icon: Mail },
  { label: 'LinkedIn', value: 'in/antonio lucas', href: 'https://www.linkedin.com/in/antônio-lucas/', icon: Briefcase },
  { label: 'GitHub', value: '@antoniilucas', href: 'https://github.com/antoniilucas', icon: Code2 },
]

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle index="05" label="Contact" />

        <div className="mt-14 grid gap-16 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <h2 className="font-display font-black leading-[0.95] tracking-tight text-[clamp(2.5rem,7vw,5.5rem)]">
              <GlitchText text="LET'S BUILD" as="div" triggerOnMount={false} />
              <GlitchText text="SOMETHING" as="div" triggerOnMount={false} />
              <GlitchText
                text="USEFUL."
                as="div"
                triggerOnMount={false}
                className="text-[var(--color-accent)]"
              />
            </h2>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-8 max-w-md text-base leading-relaxed text-[var(--color-muted)] sm:text-lg"
            >
              Tem um projeto em mente, uma oportunidade ou simplesmente quer
              trocar uma ideia? Vamos conversar.
            </motion.p>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="mt-10"
            >
              <MagneticButton
                as="a"
                href={`mailto:${siteConfig.email}`}
                data-cursor="link"
                className="inline-flex items-center gap-2 bg-[var(--color-accent)] px-7 py-4 font-mono text-sm font-medium uppercase tracking-[0.15em] text-[var(--color-bg)]"
              >
                Say Hello
              </MagneticButton>
            </motion.div>
          </div>

          <div className="lg:col-span-5">
            <div className="border border-[var(--color-line)] bg-[var(--color-bg-raised)]">
              {links.map(({ label, value, href, icon: Icon }, i) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  data-cursor="link"
                  className={`group flex items-center justify-between gap-4 px-6 py-6 transition-colors hover:bg-[var(--color-bg)] ${
                    i !== 0 ? 'border-t border-[var(--color-line)]' : ''
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Icon size={18} className="text-[var(--color-accent)]" />
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--color-muted)]">
                        {label}
                      </p>
                      <p className="mt-1 font-display text-base font-medium">{value}</p>
                    </div>
                  </div>
                  <span className="font-mono text-sm text-[var(--color-muted)] transition-transform group-hover:translate-x-1 group-hover:text-[var(--color-accent)]">
                    →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
