import React, { useRef, useEffect } from 'react';
import { useGLTF, useScroll } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';

export const Mickeymouse = () => {
  const group = useRef();
  const scroll = useScroll();
  const { camera } = useThree();
  const { scene } = useGLTF('./model/Marie.glb');

  // Initial model setup
  useEffect(() => {
    if (scene) {
      scene.rotation.y = -Math.PI / 2;
      scene.traverse((child) => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, [scene]);

  // Animate based on scroll
  useFrame(() => {
    const t = scroll.offset;
    const maxT = Math.min(t, 0.5);
    const spinAmount = maxT * Math.PI * 2;
    const scale = 1 + maxT * 1.5;

    if (group.current) {
      group.current.rotation.y = spinAmount;
      group.current.scale.set(scale, scale, scale);
    }

    // Move camera down after 50% scroll
    if (t > 0.5) {
      const downT = (t - 0.5) / 0.5;
      camera.position.y = -downT * 5;
    } else {
      camera.position.y = 0;
    }
  });

  return <primitive ref={group} object={scene} dispose={null} position={[0, -2, 0]} />;
};
