import { useEffect, useRef, useState } from 'react'
import { useIsTouchDevice } from '@/hooks/useIsTouchDevice'

interface StarParticle {
  id: number
  x: number
  y: number
}

export default function CustomCursor() {
  const isTouch = useIsTouchDevice()
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [stars, setStars] = useState<StarParticle[]>([])
  const idCounter = useRef(0)
  const lastSpawn = useRef(0)

  useEffect(() => {
    if (isTouch) return

    const ring = { x: 0, y: 0 }
    let raf = 0

    const onMove = (e: PointerEvent) => {
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`
      }
      ring.x = e.clientX
      ring.y = e.clientY

      const target = e.target as HTMLElement
      setIsPointer(Boolean(target.closest('a, button, [role="button"], input, textarea')))

      // spawn a trailing star, throttled so it doesn't fire on every pixel
      const now = Date.now()
      if (now - lastSpawn.current > 90) {
        lastSpawn.current = now
        idCounter.current += 1
        const newStar: StarParticle = { id: idCounter.current, x: e.clientX, y: e.clientY }
        setStars((prev) => [...prev, newStar])
        setTimeout(() => {
          setStars((prev) => prev.filter((s) => s.id !== newStar.id))
        }, 400)
      }
    }

    const animate = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }
      raf = requestAnimationFrame(animate)
    }

    window.addEventListener('pointermove', onMove)
    raf = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('pointermove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [isTouch])

  if (isTouch) return null

  return (
    <>
      {stars.map((star) => (
        <div
          key={star.id}
          className="pointer-events-none fixed left-0 top-0 z-[99] h-4 w-4"
          style={{ transform: `translate(${star.x - 8}px, ${star.y - 8}px)` }}
          aria-hidden
        >
          <svg
            viewBox="0 0 24 24"
            className="star-trail-particle h-4 w-4 text-cyan"
            style={{ filter: 'drop-shadow(0 0 6px currentColor) drop-shadow(0 0 12px currentColor)' }}
          >
            <path
              fill="currentColor"
              d="M12 0l2.9 8.1L23 11l-8.1 2.9L12 22l-2.9-8.1L1 11l8.1-2.9L12 0z"
            />
          </svg>
        </div>
      ))}

      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan"
        aria-hidden
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 rounded-full border border-violet-soft/60 transition-[width,height,opacity] duration-200 ease-out"
        style={{
          width: isPointer ? 46 : 28,
          height: isPointer ? 46 : 28,
          opacity: isPointer ? 0.9 : 0.5,
        }}
        aria-hidden
      />
    </>
  )
}
