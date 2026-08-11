import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

interface LoaderProps {
  onDone: () => void
}

const STAGES = ['INITIALIZING PORTFOLIO...', 'LOADING SYSTEM...', 'SYSTEM READY']

export default function Loader({ onDone }: LoaderProps) {
  const reducedMotion = usePrefersReducedMotion()
  const [stageIndex, setStageIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (reducedMotion) {
      setVisible(false)
      onDone()
      return
    }

    const total = 950
    const start = performance.now()
    let raf: number

    const tick = (now: number) => {
      const elapsed = now - start
      const pct = Math.min(100, Math.round((elapsed / total) * 100))
      setProgress(pct)
      setStageIndex(pct < 35 ? 0 : pct < 90 ? 1 : 2)
      if (elapsed < total) {
        raf = requestAnimationFrame(tick)
      } else {
        window.setTimeout(() => setVisible(false), 220)
        window.setTimeout(onDone, 520)
      }
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const barWidth = 20
  const filled = Math.round((progress / 100) * barWidth)
  const bar = '█'.repeat(filled) + '░'.repeat(barWidth - filled)

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-4 bg-[var(--color-bg)]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] sm:text-sm">
            {STAGES[stageIndex]}
          </div>
          <div className="font-mono text-sm text-[var(--color-accent)] sm:text-base">
            {bar} {progress}%
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
