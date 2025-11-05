'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { useRef } from 'react';

function AstralCore() {
  const meshRef = useRef();
  const auraRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.25;
      meshRef.current.rotation.y = t * 0.35;
    }
    if (auraRef.current) {
      auraRef.current.material.opacity = 0.35 + Math.sin(t * 1.2) * 0.1;
      auraRef.current.scale.setScalar(1.1 + Math.sin(t * 0.7) * 0.05);
    }
  });

  return (
    <group>
      <mesh ref={meshRef} castShadow receiveShadow>
        <icosahedronGeometry args={[1.4, 1]} />
        <meshStandardMaterial
          color="#ffe6f7"
          emissive="#7f4cff"
          emissiveIntensity={0.75}
          metalness={0.4}
          roughness={0.2}
        />
      </mesh>
      <mesh ref={auraRef}>
        <icosahedronGeometry args={[1.6, 2]} />
        <meshStandardMaterial
          color="#44c8ff"
          transparent
          opacity={0.3}
          emissive="#44c8ff"
          emissiveIntensity={0.5}
          wireframe
        />
      </mesh>
      <pointLight position={[0, 3, 3]} intensity={50} color="#bf7bff" />
      <pointLight position={[0, -3, -3]} intensity={35} color="#7fc5ff" />
      <ambientLight intensity={0.4} />
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} className="hero-scene">
      <color attach="background" args={[0, 0, 0]} />
      <fog attach="fog" args={[0x02010f, 4, 12]} />
      <AstralCore />
      <Stars radius={50} depth={30} count={2000} factor={3.5} saturation={0} fade speed={0.6} />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
    </Canvas>
  );
}
