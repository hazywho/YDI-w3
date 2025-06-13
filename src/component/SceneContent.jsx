import React, { useRef } from 'react';
import { Text, useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { Mickeymouse } from './Mickeymouse';

export function SceneContent() {
  const scroll = useScroll();
  const textRef = useRef();

  useFrame(() => {
    const t = scroll.offset;
    const maxT = Math.min(t, 0.5);

    if (textRef.current) {
      const startZ = 2;
      const endZ = -1;
      textRef.current.position.z = startZ + (endZ - startZ) * maxT;

      const fade = 1 - Math.min(Math.max((t - 0.1) / 0.4, 0), 1);
      textRef.current.material.opacity = fade;
    }
  });

  return (
    <>
      <Text
        ref={textRef}
        fontSize={0.7}
        color="#000000"
        anchorX="center"
        anchorY="middle"
        position={[0, 0, 2]}
        material-transparent
      >
        Marie Antoinette
      </Text>

      <Mickeymouse />
    </>
  );
}
