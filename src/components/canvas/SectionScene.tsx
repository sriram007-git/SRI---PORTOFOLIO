import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const ACCENT_VIOLET = '#7c5cfc'
const ACCENT_CYAN = '#45e0c6'

function Particles({ count = 250 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null)

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = radius * Math.cos(phi) - 2
    }
    return arr
  }, [count])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.015
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={ACCENT_CYAN}
        size={0.024}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  )
}

function FloatingShape({
  position,
  geometry,
  color,
  scale = 1,
  speed = 1,
}: {
  position: [number, number, number]
  geometry: 'icosahedron' | 'torus' | 'octahedron'
  color: string
  scale?: number
  speed?: number
}) {
  const mesh = useRef<THREE.Mesh>(null)

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.06 * speed
      mesh.current.rotation.y += delta * 0.1 * speed
    }
  })

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.4} floatIntensity={0.9}>
      <mesh ref={mesh} position={position} scale={scale}>
        {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {geometry === 'torus' && <torusGeometry args={[0.8, 0.26, 16, 64]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.3}
          roughness={0.4}
        />
      </mesh>
    </Float>
  )
}

type SectionSceneProps = {
  mirror?: boolean
  primary?: string
  secondary?: string
}

export default function SectionScene({
  mirror = false,
  primary = ACCENT_VIOLET,
  secondary = ACCENT_CYAN,
}: SectionSceneProps) {
  const sign = mirror ? -1 : 1

  return (
    <Canvas
      dpr={[1, 1.4]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.45} />
      <pointLight position={[6, 4, 6]} intensity={30} color={primary} />
      <pointLight position={[-6, -3, 3]} intensity={18} color={secondary} />

      <Particles count={250} />

      <FloatingShape
        position={[sign * 2.8, 0.6, -1.5]}
        geometry="icosahedron"
        color={primary}
        scale={0.85}
        speed={0.9}
      />
      <FloatingShape
        position={[sign * -1.8, -1.4, -2.5]}
        geometry="torus"
        color={secondary}
        scale={0.6}
        speed={1.1}
      />
    </Canvas>
  )
}