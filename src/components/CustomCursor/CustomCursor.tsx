import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

export default function CustomCursor() {
  const isDesktop = useIsDesktop()
  const reducedMotion = usePrefersReducedMotion()
  const [label, setLabel] = useState<string>('')
  const [variant, setVariant] = useState<'default' | 'link' | 'label'>('default')

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    if (!isDesktop) return
    document.body.classList.add('custom-cursor-active')

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)

      const target = e.target as HTMLElement
      const cursorTarget = target.closest<HTMLElement>('[data-cursor]')
      if (cursorTarget) {
        const type = cursorTarget.getAttribute('data-cursor')
        const text = cursorTarget.getAttribute('data-cursor-text')
        if (type === 'label' && text) {
          setVariant('label')
          setLabel(text)
        } else {
          setVariant('link')
          setLabel('')
        }
      } else {
        setVariant('default')
        setLabel('')
      }
    }

    window.addEventListener('mousemove', handleMove)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [isDesktop, x, y])

  if (!isDesktop) return null

  const size = variant === 'label' ? 64 : variant === 'link' ? 14 : 8

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center rounded-full border border-[var(--color-accent)] font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--color-accent)]"
      style={{
        x: springX,
        y: springY,
        translateX: '-50%',
        translateY: '-50%',
        backgroundColor:
          variant === 'default' ? 'var(--color-accent)' : 'rgba(199, 255, 0, 0.06)',
      }}
      animate={
        reducedMotion
          ? { width: size, height: size }
          : { width: size, height: size }
      }
      transition={{ duration: 0.22, ease: 'easeOut' }}
    >
      {variant === 'label' ? label : null}
    </motion.div>
  )
}
