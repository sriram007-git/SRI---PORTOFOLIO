import { useMemo, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

const ACCENT_VIOLET = '#7c5cfc'
const ACCENT_CYAN = '#45e0c6'

function Particles() {
  const ref = useRef<THREE.Points>(null)
  const count = 700

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 6 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(2 * Math.random() - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta) * 0.6
      arr[i * 3 + 2] = radius * Math.cos(phi) - 2
    }
    return arr
  }, [])

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color={ACCENT_CYAN}
        size={0.028}
        sizeAttenuation
        depthWrite={false}
        opacity={0.55}
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
      mesh.current.rotation.x += delta * 0.08 * speed
      mesh.current.rotation.y += delta * 0.12 * speed
    }
  })

  return (
    <Float speed={1.4 * speed} rotationIntensity={0.5} floatIntensity={1.1}>
      <mesh ref={mesh} position={position} scale={scale}>
        {geometry === 'icosahedron' && <icosahedronGeometry args={[1, 0]} />}
        {geometry === 'torus' && <torusGeometry args={[0.8, 0.26, 16, 64]} />}
        {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={color}
          wireframe
          emissive={color}
          emissiveIntensity={0.35}
          roughness={0.4}
        />
      </mesh>
    </Float>
  )
}

function RigCamera() {
  const { camera, pointer } = useThree()
  const target = useRef(new THREE.Vector3(0, 0, 0))

  useFrame(() => {
    target.current.x += (pointer.x * 0.6 - target.current.x) * 0.03
    target.current.y += (pointer.y * 0.35 - target.current.y) * 0.03
    camera.position.x += (target.current.x - camera.position.x) * 0.06
    camera.position.y += (target.current.y - camera.position.y) * 0.06
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 8], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[6, 4, 6]} intensity={40} color={ACCENT_VIOLET} />
      <pointLight position={[-6, -3, 3]} intensity={25} color={ACCENT_CYAN} />

      <RigCamera />
      <Particles />

      <FloatingShape position={[2.6, 0.8, -1]} geometry="icosahedron" color={ACCENT_VIOLET} scale={1.1} speed={1} />
      <FloatingShape position={[-2.8, -0.6, -2]} geometry="torus" color={ACCENT_CYAN} scale={1} speed={0.8} />
      <FloatingShape position={[0.6, -2, -3]} geometry="octahedron" color={ACCENT_VIOLET} scale={0.7} speed={1.3} />
      <FloatingShape position={[-1.6, 2.1, -2.5]} geometry="octahedron" color={ACCENT_CYAN} scale={0.5} speed={1.6} />
    </Canvas>
  )
}
