import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Float } from '@react-three/drei';

export default function Classroom() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#e8e3d5" roughness={0.8} />
      </mesh>

      {/* Chalkboard */}
      <mesh position={[0, 2, -4]} receiveShadow castShadow>
        <boxGeometry args={[6, 3, 0.1]} />
        <meshStandardMaterial color="#1f3f1b" roughness={0.9} />
      </mesh>
      {/* Chalkboard frame */}
      <mesh position={[0, 2, -3.95]} receiveShadow castShadow>
        <boxGeometry args={[6.2, 3.2, 0.05]} />
        <meshStandardMaterial color="#5c4033" roughness={0.7} />
      </mesh>

      {/* Desks */}
      <Desk position={[-2, 0, -1]} />
      <Desk position={[2, 0, -1]} />
      <Desk position={[-2, 0, 2]} />
      <Desk position={[2, 0, 2]} />

      {/* Floating Books / Elements */}
      <Float speed={2} rotationIntensity={1} floatIntensity={2} position={[0, 3, -2]}>
        <mesh castShadow>
          <boxGeometry args={[0.8, 1.2, 0.2]} />
          <meshStandardMaterial color="#d4af37" />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={2} floatIntensity={1.5} position={[-1.5, 2.5, -1.5]}>
        <mesh castShadow>
          <boxGeometry args={[0.6, 0.9, 0.15]} />
          <meshStandardMaterial color="#2d5a27" />
        </mesh>
      </Float>
      <Float speed={2.5} rotationIntensity={0.5} floatIntensity={2.5} position={[1.5, 3.5, -1.5]}>
        <mesh castShadow>
          <icosahedronGeometry args={[0.4]} />
          <meshStandardMaterial color="#3a7533" />
        </mesh>
      </Float>
    </group>
  );
}

function Desk({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      {/* Top */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.5, 0.1, 1]} />
        <meshStandardMaterial color="#d2b48c" roughness={0.6} />
      </mesh>
      {/* Legs */}
      <mesh position={[-0.6, 0.5, -0.4]} castShadow receiveShadow>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>
      <mesh position={[0.6, 0.5, -0.4]} castShadow receiveShadow>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>
      <mesh position={[-0.6, 0.5, 0.4]} castShadow receiveShadow>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>
      <mesh position={[0.6, 0.5, 0.4]} castShadow receiveShadow>
        <cylinderGeometry args={[0.05, 0.05, 1]} />
        <meshStandardMaterial color="#5c4033" />
      </mesh>
    </group>
  );
}
