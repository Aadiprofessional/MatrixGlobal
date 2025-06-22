import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

const Hero3D: React.FC = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const groupRef = useRef<THREE.Group>(null);

  // Create floating particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < 100; i++) {
      temp.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
        ] as [number, number, number],
        scale: Math.random() * 0.1 + 0.05,
      });
    }
    return temp;
  }, []);

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      sphereRef.current.rotation.y += 0.01;
    }
    
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Main Sphere */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <Sphere ref={sphereRef} args={[1.5, 64, 64]} position={[0, 0, 0]}>
          <MeshDistortMaterial
            color="#6366f1"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.8}
          />
        </Sphere>
      </Float>

      {/* Orbiting Spheres */}
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.3}>
        <Sphere args={[0.3, 32, 32]} position={[3, 1, 0]}>
          <MeshDistortMaterial
            color="#8b5cf6"
            attach="material"
            distort={0.2}
            speed={1.5}
            roughness={0.2}
            metalness={0.6}
          />
        </Sphere>
      </Float>

      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <Sphere args={[0.2, 32, 32]} position={[-2.5, -1, 1]}>
          <MeshDistortMaterial
            color="#ec4899"
            attach="material"
            distort={0.3}
            speed={2.5}
            roughness={0.1}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      {/* Floating Particles */}
      {particles.map((particle, index) => (
        <Float
          key={index}
          speed={1 + Math.random()}
          rotationIntensity={0.2}
          floatIntensity={0.3}
        >
          <Sphere args={[particle.scale, 8, 8]} position={particle.position}>
            <meshStandardMaterial
              color={`hsl(${240 + Math.random() * 60}, 70%, 60%)`}
              emissive={`hsl(${240 + Math.random() * 60}, 70%, 20%)`}
              transparent
              opacity={0.6}
            />
          </Sphere>
        </Float>
      ))}

      {/* Ambient and Point Lights */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ec4899" />
      <pointLight position={[0, 0, 10]} intensity={0.3} color="#8b5cf6" />
    </group>
  );
};

export default Hero3D; 