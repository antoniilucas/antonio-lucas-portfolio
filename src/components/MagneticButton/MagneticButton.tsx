import { useRef, type ReactNode, type ElementType, type ComponentPropsWithoutRef } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  as?: ElementType
  strength?: number
  [key: string]: unknown
}

/**
 * Wraps interactive elements with a subtle magnetic pull toward the cursor.
 * Disabled on touch devices and when reduced motion is preferred.
 */
export default function MagneticButton({
  children,
  className = '',
  as = 'button',
  strength = 12,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null)
  const isDesktop = useIsDesktop()
  const reducedMotion = usePrefersReducedMotion()

  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 260, damping: 18, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 260, damping: 18, mass: 0.4 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop || reducedMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const relX = e.clientX - (rect.left + rect.width / 2)
    const relY = e.clientY - (rect.top + rect.height / 2)
    x.set((relX / rect.width) * strength)
    y.set((relY / rect.height) * strength)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  const MotionTag = motion.create(as as ElementType)

  return (
    <MotionTag
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...(rest as ComponentPropsWithoutRef<typeof as>)}
    >
      {children}
    </MotionTag>
  )
}
