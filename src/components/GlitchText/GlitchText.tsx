import { useEffect, useRef, useState } from 'react'
import { usePrefersReducedMotion } from '@/hooks/useMediaQuery'

interface GlitchTextProps {
  text: string
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'div'
  className?: string
  triggerOnMount?: boolean
  hoverGlitch?: boolean
}

const GLITCH_CHARS = '01#$%&*+_/\\<>[]{}'

function scramble(text: string, intensity: number): string {
  return text
    .split('')
    .map((char) => {
      if (char === ' ' || char === '\n') return char
      if (Math.random() < intensity) {
        return GLITCH_CHARS[Math.floor(Math.random() * GLITCH_CHARS.length)]
      }
      return char
    })
    .join('')
}

/**
 * GlitchText — short, restrained glitch reveal.
 * Runs a brief scramble-to-resolve sequence on mount, and an optional
 * lighter flicker on hover. Never loops indefinitely.
 */
export default function GlitchText({
  text,
  as = 'span',
  className = '',
  triggerOnMount = true,
  hoverGlitch = true,
}: GlitchTextProps) {
  const [display, setDisplay] = useState(text)
  const [isGlitching, setIsGlitching] = useState(false)
  const reducedMotion = usePrefersReducedMotion()
  const timeouts = useRef<number[]>([])

  const runGlitch = (duration = 420, steps = 7) => {
    if (reducedMotion) return
    setIsGlitching(true)
    timeouts.current.forEach((t) => clearTimeout(t))
    timeouts.current = []

    for (let i = 0; i < steps; i++) {
      const t = window.setTimeout(() => {
        const progress = i / steps
        const intensity = Math.max(0, 0.4 * (1 - progress))
        setDisplay(scramble(text, intensity))
      }, (duration / steps) * i)
      timeouts.current.push(t)
    }

    const finalT = window.setTimeout(() => {
      setDisplay(text)
      setIsGlitching(false)
    }, duration)
    timeouts.current.push(finalT)
  }

  useEffect(() => {
    if (triggerOnMount && !reducedMotion) {
      const start = window.setTimeout(() => runGlitch(520, 8), 80)
      timeouts.current.push(start)
    } else {
      setDisplay(text)
    }
    return () => timeouts.current.forEach((t) => clearTimeout(t))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text])

  const Tag = as
  return (
    <Tag
      className={`relative inline-block ${className}`}
      onMouseEnter={hoverGlitch ? () => runGlitch(260, 4) : undefined}
      style={{ fontVariantNumeric: 'tabular-nums' }}
      aria-label={text}
    >
      <span aria-hidden={isGlitching} className={isGlitching ? 'select-none' : ''}>
        {display}
      </span>
    </Tag>
  )
}
