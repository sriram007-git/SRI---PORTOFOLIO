import { Suspense, lazy } from 'react'
import { useCanRenderHeavyEffects } from '@/hooks/useCanRenderHeavyEffects'

const SectionScene = lazy(() => import('@/components/canvas/SectionScene'))

type SectionBackgroundProps = {
  mirror?: boolean
  primary?: string
  secondary?: string
}

export default function SectionBackground({ mirror, primary, secondary }: SectionBackgroundProps) {
  const canRenderHeavy = useCanRenderHeavyEffects()

  return (
    <div
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] overflow-hidden sm:h-160"
      aria-hidden
    >
      {canRenderHeavy ? (
        <Suspense fallback={null}>
          <SectionScene mirror={mirror} primary={primary} secondary={secondary} />
        </Suspense>
      ) : (
        <div
          className={
            mirror
              ? 'absolute left-0 top-0 h-full w-full bg-[radial-gradient(ellipse_55%_45%_at_25%_40%,rgba(69,224,198,0.12),transparent_60%)]'
              : 'absolute right-0 top-0 h-full w-full bg-[radial-gradient(ellipse_55%_45%_at_75%_40%,rgba(124,92,252,0.14),transparent_60%)]'
          }
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-ink via-transparent to-ink" />
    </div>
  )
}