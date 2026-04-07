import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function RootSystem() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.05;
    }
  });

  return (
    <group ref={groupRef} position={[0, 2, 0]}>
      {/* Abstract representation of roots growing downwards */}
      {Array.from({ length: 30 }).map((_, i) => (
        <RootBranch key={i} index={i} />
      ))}
      {/* Core seed/foundation */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={0.2} roughness={0.2} metalness={0.8} />
      </mesh>
    </group>
  );
}

function RootBranch({ index }: { index: number }) {
  const curve = useRef<THREE.CatmullRomCurve3>();
  
  if (!curve.current) {
    const points = [];
    let currentPoint = new THREE.Vector3(0, 0, 0);
    points.push(currentPoint.clone());
    
    const angle = (index / 30) * Math.PI * 2;
    const spread = 0.5 + Math.random() * 1.5;
    
    for (let i = 1; i <= 5; i++) {
      currentPoint.y -= 0.5 + Math.random() * 0.5;
      currentPoint.x += Math.cos(angle) * spread * (Math.random() * 0.5 + 0.5);
      currentPoint.z += Math.sin(angle) * spread * (Math.random() * 0.5 + 0.5);
      points.push(currentPoint.clone());
    }
    curve.current = new THREE.CatmullRomCurve3(points);
  }

  return (
    <mesh>
      <tubeGeometry args={[curve.current, 20, 0.05 * (1 - index/60), 8, false]} />
      <meshStandardMaterial color="#5c4033" roughness={0.8} />
    </mesh>
  );
}
