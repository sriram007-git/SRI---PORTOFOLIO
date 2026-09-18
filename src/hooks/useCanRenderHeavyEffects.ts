import { useEffect, useState } from 'react'

/**
 * Decides whether it's reasonable to run the full 3D hero scene.
 * Bails out on small screens, low core-count devices, and reduced-motion preference —
 * those get a lightweight static gradient instead.
 */
export function useCanRenderHeavyEffects() {
  const [canRender, setCanRender] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isNarrow = window.matchMedia('(max-width: 767px)').matches
    const lowCores = (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency
      ? (navigator as Navigator & { hardwareConcurrency?: number }).hardwareConcurrency! <= 4
      : false

    setCanRender(!(prefersReducedMotion || (isNarrow && lowCores)))
  }, [])

  return canRender
}
