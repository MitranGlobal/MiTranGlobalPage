"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment, Sparkles } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Orb({
  position,
  color,
  speed = 1,
  distort = 0.35,
  scale = 1,
}: {
  position: [number, number, number];
  color: string;
  speed?: number;
  distort?: number;
  scale?: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.15 * speed;
    ref.current.rotation.x = Math.sin(t * 0.2 * speed) * 0.2;
  });
  return (
    <Float speed={1.4 * speed} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <sphereGeometry args={[1, 64, 64]} />
        <MeshDistortMaterial
          color={color}
          distort={distort}
          speed={1.6 * speed}
          roughness={0.15}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} color="#f5d17a" />
      <directionalLight position={[-5, -2, 3]} intensity={0.6} color="#7fb2ff" />

      <Orb position={[-2.6, 0.4, 0]} color="#e9c46a" scale={1.3} speed={0.9} distort={0.3} />
      <Orb position={[2.6, -0.6, -1]} color="#c99b3a" scale={1.6} speed={0.7} distort={0.45} />
      <Orb position={[0, 1.6, -2]} color="#f5d17a" scale={0.6} speed={1.3} distort={0.25} />

      <Sparkles count={60} scale={[10, 6, 4]} size={2.2} speed={0.3} color="#f5d17a" opacity={0.5} />

      <Environment preset="city" />
    </Canvas>
  );
}
