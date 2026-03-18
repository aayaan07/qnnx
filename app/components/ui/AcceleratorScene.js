"use client";
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';

// 1. Define the "River" Path
// Starts bottom-left, curves through center, exits top-right
const RiverPath = () => {
  const curve = useMemo(() => {
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-25, -10, 5), // Start: Way off bottom-left
      new THREE.Vector3(-9, 2, 2),   // Mid-curve entering view
      new THREE.Vector3(10, 4, 2),    // Mid-curve exiting view
      new THREE.Vector3(25, 15, -10)   // End: Way off top-right
    ], false, 'catmullrom', 0.5);
  }, []);
  return curve;
}

function GlowingParticleRiver({ count, speed, spread, color, size, opacity, noiseStrength }) {
  const pointsRef = useRef();
  const curve = RiverPath();

  // Generate initial positions and random offsets
  const { offsets, randoms } = useMemo(() => {
    const offs = new Float32Array(count); // Position along curve (0.0 to 1.0)
    const rnds = new Float32Array(count * 3); // Random noise for x,y,z variance
    
    for (let i = 0; i < count; i++) {
      offs[i] = Math.random(); 
      rnds[i * 3] = (Math.random() - 0.5) * 2; // x noise
      rnds[i * 3 + 1] = (Math.random() - 0.5) * 2; // y noise
      rnds[i * 3 + 2] = (Math.random() - 0.5) * 2; // z noise
    }
    return { offsets: offs, randoms: rnds };
  }, [count]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const t = state.clock.getElapsedTime() * speed;
    const positions = pointsRef.current.geometry.attributes.position.array;
    
    for (let i = 0; i < count; i++) {
      // Calculate current position on the loop (0 to 1)
      // We add the offset to time, then modulo 1 to loop it
      let curvePos = (offsets[i] + t) % 1;

      // Get point on curve
      const point = curve.getPoint(curvePos);
      
      // Calculate Tangent to define "sideways" from the flow
      const tangent = curve.getTangent(curvePos).normalize();
      
      // Create a "wobble" effect based on time + particle index
      // This makes the river look like it's flowing/undulating
      const wobble = Math.sin(t * 2 + i) * noiseStrength;

      // Apply spread and wobble relative to the curve path
      // We simply add the pre-calculated random spread + the dynamic wobble
      const x = point.x + randoms[i * 3] * spread + wobble;
      const y = point.y + randoms[i * 3 + 1] * spread + wobble;
      const z = point.z + randoms[i * 3 + 2] * spread;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute 
          attach="attributes-position" 
          count={count} 
          array={new Float32Array(count * 3)} 
          itemSize={3} 
        />
      </bufferGeometry>
      <pointsMaterial 
        size={size} 
        color={color}
        transparent 
        opacity={opacity} 
        blending={THREE.AdditiveBlending} // Makes them glow when overlapping
        depthWrite={false}
        sizeAttenuation={true}
      />
    </points>
  );
}

export default function AcceleratorScene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030005]">
      {/* Background Gradient - slightly shifted to follow the flow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_top_right,#000000,#1e1b4b,#000000)]" />
      
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
        
        <group position={[0, -3, 0]} rotation={[0, 0, 0.]}> {/* Slight tilt to align nicely with text */}
            
            {/* 1. Main Dense Core (Bright Pink/White) */}
            <GlowingParticleRiver 
                count={3000} 
                speed={0.01} 
                spread={3.5} 
                color="#f5d0fe" // Very light pink/white
                size={0.1} 
                opacity={0.8} 
                noiseStrength={0.5}
            />
            
            {/* 2. Secondary Flow (Vibrant Purple) */}
            <GlowingParticleRiver 
                count={2500} 
                speed={0.01} 
                spread={1.0} 
                color="#d946ef" // Fuchsia
                size={0.12} 
                opacity={0.3} 
                noiseStrength={0.2}
            />
            
            {/* 3. Wide Mist/Atmosphere (Deep Violet) */}
            <GlowingParticleRiver 
                count={1500} 
                speed={0.08} 
                spread={4.5} 
                color="#7c3aed" // Violet
                size={0.1} 
                opacity={0.3} 
                noiseStrength={0.3}
            />
        </group>
      </Canvas>
    </div>
  );
}