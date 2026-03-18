"use client";
import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

// --- PARTICLE CORE ---
function ParticleCore({ hovered }) {
  const pointsRef = useRef();
  const count = 3000; 

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const colorInside = new THREE.Color('#a855f7'); 
    const colorOutside = new THREE.Color('#3b82f6'); 
    const colorHot = new THREE.Color('#ffffff'); 

    for (let i = 0; i < count; i++) {
      const r = Math.random() * 1.5; 
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      pos.set([x, y, z], i * 3);
      
      let mixedColor;
      if (r < 0.5) mixedColor = colorHot; 
      else mixedColor = colorInside.clone().lerp(colorOutside, r / 1.5);
      
      col.set([mixedColor.r, mixedColor.g, mixedColor.b], i * 3);
    }
    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    
    // Spin faster if hovered
    const speed = hovered ? 1.5 : 0.3; 
    pointsRef.current.rotation.y -= speed * 0.01;

    // Breathing effect
    const targetScale = hovered ? 1.3 : 1;
    const currentScale = pointsRef.current.scale.x;
    const newScale = THREE.MathUtils.lerp(currentScale, targetScale + Math.sin(t * 3) * 0.05, 0.1);
    
    pointsRef.current.scale.set(newScale, newScale, newScale);
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial 
        size={0.035} 
        vertexColors 
        transparent 
        opacity={0.8} 
        blending={THREE.AdditiveBlending} 
        depthWrite={false} 
      />
    </points>
  );
}

// --- INTERACTIVE CORE WRAPPER ---
function AICore({ setHover, hovered }) {
  const coreRef = useRef();

  useFrame((state) => {
    if (coreRef.current) {
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;
      
      // Look towards mouse logic
      coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, mouseX * 0.5, 0.1);
      coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, -mouseY * 0.5, 0.1);
    }
  });

  return (
    <group 
      ref={coreRef} 
      position={[0.2, 0.3, 0]} 
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <ParticleCore hovered={hovered} />
      <pointLight 
        distance={3} 
        intensity={hovered ? 8 : 4} 
        color="#a855f7" 
      />
    </group>
  );
}

// --- MAIN EXPORTED SCENE ---
export default function AICoreScene() {
  const [hovered, setHover] = useState(false);

  return (
    <div className="h-full w-full min-h-[500px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.2} />
        
        {/* Floating motion for the core */}
        <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
           <AICore setHover={setHover} hovered={hovered} />
        </Float>

        {/* Dynamic Shadow on the floor */}
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={3} 
          far={4} 
          color="#a855f7" 
        />
      </Canvas>
    </div>
  );
}