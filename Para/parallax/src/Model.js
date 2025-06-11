import React, { useRef } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Model() {
  const ref = useRef();
  const { scene } = useGLTF('/mickey.glb');
  const scroll = useScroll();

  useFrame(() => {
    const r = scroll.offset; // between 0 and 1

    if (ref.current) {
      // Base rotation
      ref.current.rotation.y = r * Math.PI * 4; // full spin

      // Animate upward motion and scale between 0.33 - 0.66
      if (r > 0.33 && r <= 0.66) {
        const localR = (r - 0.33) / (0.66 - 0.33); // normalize between 0 and 1
        ref.current.position.y = THREE.MathUtils.lerp(0, 2, localR);
        ref.current.scale.setScalar(THREE.MathUtils.lerp(1, 1.5, localR));
      } else {
        ref.current.position.y = 0;
        ref.current.scale.setScalar(1);
      }

      // Add extra rotation on X axis in last third
      if (r > 0.66) {
        const localR = (r - 0.66) / (1 - 0.66);
        ref.current.rotation.x = localR * Math.PI;
      } else {
        ref.current.rotation.x = 0;
      }
    }
  });

  return (
    <primitive
      object={scene}
      ref={ref}
      scale={1}
      position={[0, 0, 0]}
    />
  );
}
