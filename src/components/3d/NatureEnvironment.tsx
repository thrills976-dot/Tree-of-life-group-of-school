import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

export default function NatureEnvironment() {
  return (
    <group>
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
        <planeGeometry args={[50, 50]} />
        <meshStandardMaterial color="#f4f1ea" roughness={1} />
      </mesh>

      {/* Background elements */}
      {Array.from({ length: 15 }).map((_, i) => (
        <AbstractTree key={i} index={i} />
      ))}

      {/* Floating abstract shapes representing knowledge/creativity */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1} position={[-3, 2, -2]}>
        <mesh castShadow>
          <torusGeometry args={[0.5, 0.15, 16, 32]} />
          <meshStandardMaterial color="#d4af37" roughness={0.2} metalness={0.8} />
        </mesh>
      </Float>
      
      <Float speed={1.5} rotationIntensity={1} floatIntensity={2} position={[3, 1, -1]}>
        <mesh castShadow>
          <icosahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#3a7533" roughness={0.4} />
        </mesh>
      </Float>
    </group>
  );
}

function AbstractTree({ index }: { index: number }) {
  const position = useMemo(() => {
    // Distribute in a semi-circle behind the main subject
    const angle = (index / 15) * Math.PI + Math.PI;
    const radius = 8 + Math.random() * 4;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      -2,
      Math.sin(angle) * radius - 2
    );
  }, [index]);

  const scale = useMemo(() => 0.5 + Math.random() * 1.5, []);

  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 0.2, 2, 5]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>
      <mesh position={[0, 2.5, 0]} castShadow receiveShadow>
        <coneGeometry args={[1, 2, 5]} />
        <meshStandardMaterial color="#2d5a27" />
      </mesh>
    </group>
  );
}
