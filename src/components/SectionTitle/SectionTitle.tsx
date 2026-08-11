import { motion } from 'framer-motion'
import { fadeUp, viewportOnce } from '@/animations/variants'

interface SectionTitleProps {
  index: string
  label: string
  align?: 'left' | 'right'
}

export default function SectionTitle({ index, label, align = 'left' }: SectionTitleProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex items-center gap-4 ${align === 'right' ? 'justify-end' : ''}`}
    >
      <span className="font-mono text-sm text-[var(--color-accent)]">{index}</span>
      <span className="h-px flex-1 max-w-16 bg-[var(--color-line)]" />
      <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-muted)]">
        {label}
      </span>
    </motion.div>
  )
}
