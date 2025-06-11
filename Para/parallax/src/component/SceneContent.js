// src/component/SceneContent.js
import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useScroll, Text } from '@react-three/drei';
import { Mickeymouse } from './Mickeymouse';

export function SceneContent() {
  const scroll = useScroll();
  const modelRef = useRef();
  const textRef = useRef();
  const { camera } = useThree();

  useFrame(() => {
    const t = scroll.offset; // 0 → 1

    // Freeze spin + scale after t=0.5
    const maxT = Math.min(t, 0.5);
    const spinAmount = maxT * Math.PI * 2;
    const scale = 1 + maxT * 1.5;

    if (modelRef.current) {
      modelRef.current.rotation.y = spinAmount;
      modelRef.current.scale.set(scale, scale, scale);
    }

    if (textRef.current) {
      const startZ = 2;
      const endZ = -1;
      textRef.current.position.z = startZ + (endZ - startZ) * maxT;

      const fade = 1 - Math.min(Math.max((t - 0.1) / 0.4, 0), 1);
      textRef.current.material.opacity = fade;
    }

    // After 0.5, move the camera down smoothly
    if (t > 0.5) {
      const downT = (t - 0.5) / 0.5; // normalized 0 → 1
      camera.position.y = -downT * 5; // move camera down up to -5 units
    } else {
      camera.position.y = 0; // reset position during zoom phase
    }
  });

  return (
    <>
      {/* 3D Text */}
      <Text
        ref={textRef}
        fontSize={0.7}
        color="#ffffff"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 2]}
        material-transparent
      >
        Marie Antonette
      </Text>

      {/* 3D Model */}
      <group ref={modelRef} position={[0, -4, 0]}>
        <Mickeymouse />
      </group>
    </>
  );
}
