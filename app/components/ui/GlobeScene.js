"use client";
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, OrbitControls, Float, useGLTF, Environment } from '@react-three/drei';

function Model() {
  // Replace 'earth.glb' with your actual file name in the public folder
  const { scene } = useGLTF('/earth.glb'); 
  const modelRef = useRef();

  useFrame(() => {
    if (modelRef.current) {
      // Smooth constant rotation
      modelRef.current.rotation.y += 0.003;
    }
  });

  return (
    <primitive 
      ref={modelRef} 
      object={scene} 
      scale={1} // Adjust this to make your model bigger or smaller
      position={[0, 0, 0]} 
    />
  );
}

export default function GlobeScene() {
  return (
    <div className="fixed inset-0 z-[-1] bg-[#030005]">
      {/* The high-end gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-black to-black" />
      
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Environment adds realistic reflections to your 3D model */}
        <Environment preset="city" />
        
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#f472b6" />
        <pointLight position={[-10, -10, 10]} intensity={1.5} color="#7c3aed" />

        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Model />
          </Float>
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}