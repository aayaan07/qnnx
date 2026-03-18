"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float } from '@react-three/drei';
import * as THREE from 'three';

function AccretionDisk() {
  const pointsRef = useRef();
  const count = 3000; // Number of particles

  // Create the circular disk shape
  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorInside = new THREE.Color('#ff00ff'); // Bright Pink
    const colorOutside = new THREE.Color('#4c1d95'); // Deep Purple

    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 2.5 + Math.random() * 3; // Distance from center
      const x = Math.cos(angle) * radius;
      const z = Math.sin(angle) * radius;
      const y = (Math.random() - 0.5) * 0.5; // Slight thickness to the disk

      pos.set([x, y, z], i * 3);

      // Mix colors based on radius
      const mixedColor = colorInside.clone().lerp(colorOutside, (radius - 2.5) / 3);
      col.set([mixedColor.r, mixedColor.g, mixedColor.b], i * 3);
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    // Spin the disk
    pointsRef.current.rotation.y += 0.002;
    // Slight wobble
    pointsRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={positions} 
          itemSize={3} 
        />
        <bufferAttribute 
          attach="attributes-color" 
          count={count} 
          array={colors} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        vertexColors 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending} // Makes particles "glow" when they overlap
      />
    </points>
  );
}

function Singularity() {
  return (
    <group>
      {/* The Black Center */}
      <mesh>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial color="#000000" />
      </mesh>

      {/* The Purple Event Horizon Glow */}
      <mesh scale={[1.1, 1.1, 1.1]}>
        <sphereGeometry args={[2.2, 64, 64]} />
        <meshBasicMaterial 
          color="#a855f7" 
          transparent 
          opacity={0.15} 
          side={THREE.BackSide} 
        />
      </mesh>
      
      <AccretionDisk />
    </group>
  );
}

export default function BlackHoleScene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030005]">
      {/* Ambient background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,0,255,0.1),transparent_60%)]" />
      
      <Canvas camera={{ position: [0, 5, 12], fov: 45 }}>
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
          <Singularity />
        </Float>
      </Canvas>
    </div>
  );
}