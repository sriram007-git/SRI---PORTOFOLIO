import { Suspense, lazy } from 'react'
import { useCanRenderHeavyEffects } from '@/hooks/useCanRenderHeavyEffects'

const GlobalScene = lazy(() => import('@/components/canvas/GlobalScene'))

export default function GlobalBackground() {
  const canRenderHeavy = useCanRenderHeavyEffects()

  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      {canRenderHeavy ? (
        <Suspense fallback={null}>
          <GlobalScene />
        </Suspense>
      ) : (
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_30%,rgba(124,92,252,0.12),transparent_65%)]" />
      )}
    </div>
  )
}