import { useEffect, useRef } from 'react'
import { useIsDesktop, usePrefersReducedMotion } from '@/hooks/useMediaQuery'

/**
 * Extremely lightweight ambient background: a faint dot grid drawn once on
 * canvas plus a soft radial glow that trails the pointer on desktop only.
 * No continuous animation loop — glow position updates via CSS variables
 * on pointer move, so the browser only repaints when the mouse actually moves.
 */
export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const isDesktop = useIsDesktop()
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = w * dpr
      canvas.height = h * dpr
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.scale(dpr, dpr)
      ctx.clearRect(0, 0, w, h)

      const gap = 48
      ctx.fillStyle = 'rgba(133, 138, 125, 0.16)'
      for (let x = gap; x < w; x += gap) {
        for (let y = gap; y < h; y += gap) {
          ctx.fillRect(x, y, 1, 1)
        }
      }
    }

    draw()
    window.addEventListener('resize', draw)
    return () => window.removeEventListener('resize', draw)
  }, [])

  useEffect(() => {
    if (!isDesktop || reducedMotion) return
    const handleMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.setProperty('--gx', `${e.clientX}px`)
        glowRef.current.style.setProperty('--gy', `${e.clientY}px`)
      }
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [isDesktop, reducedMotion])

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        ref={glowRef}
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(480px circle at var(--gx, 50%) var(--gy, 30%), rgba(199,255,0,0.05), transparent 70%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-90"
        style={{
          background:
            'linear-gradient(180deg, rgba(8,10,8,0) 0%, rgba(8,10,8,0.4) 70%, rgba(8,10,8,0.95) 100%)',
        }}
      />
    </div>
  )
}
