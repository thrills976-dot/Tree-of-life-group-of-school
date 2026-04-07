import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useScroll } from '@react-three/drei';
import * as THREE from 'three';

export default function GrowingTree() {
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  // Create a stylized tree geometry
  const { trunkGeometry, leavesGeometry } = useMemo(() => {
    const trunk = new THREE.CylinderGeometry(0.2, 0.4, 2, 8);
    trunk.translate(0, 1, 0);
    
    const leaves = new THREE.IcosahedronGeometry(1.5, 1);
    leaves.translate(0, 2.5, 0);
    
    return { trunkGeometry: trunk, leavesGeometry: leaves };
  }, []);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Gentle idle sway
      groupRef.current.rotation.y += delta * 0.1;
      groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      
      // Growth based on scroll (if inside a ScrollControls)
      if (scroll) {
        const offset = scroll.offset; // 0 to 1
        // Scale from 0.1 to 1 based on scroll
        const targetScale = 0.1 + offset * 0.9;
        groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      }
    }
  });

  return (
    <group ref={groupRef} position={[0, -1, 0]}>
      {/* Trunk */}
      <mesh geometry={trunkGeometry} castShadow receiveShadow>
        <meshStandardMaterial color="#5c4033" roughness={0.9} />
      </mesh>
      
      {/* Leaves */}
      <mesh geometry={leavesGeometry} castShadow receiveShadow>
        <meshStandardMaterial color="#2d5a27" roughness={0.7} />
      </mesh>
      
      {/* Floating particles around the tree */}
      {Array.from({ length: 20 }).map((_, i) => (
        <Particle key={i} index={i} />
      ))}
    </group>
  );
}

function Particle({ index }: { index: number }) {
  const ref = useRef<THREE.Mesh>(null);
  
  const initialPos = useMemo(() => {
    const angle = Math.random() * Math.PI * 2;
    const radius = 1 + Math.random() * 2;
    const height = 1 + Math.random() * 3;
    return new THREE.Vector3(
      Math.cos(angle) * radius,
      height,
      Math.sin(angle) * radius
    );
  }, []);

  useFrame((state) => {
    if (ref.current) {
      const time = state.clock.elapsedTime + index;
      ref.current.position.y = initialPos.y + Math.sin(time) * 0.2;
      ref.current.position.x = initialPos.x + Math.cos(time * 0.5) * 0.1;
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={ref} position={initialPos}>
      <octahedronGeometry args={[0.05]} />
      <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.5} />
    </mesh>
  );
}
