import React, { useRef, useEffect, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { FBXLoader } from 'three-stdlib';
import { useScroll } from '@react-three/drei';

export const Mickeymouse = () => {
  const group = useRef();
  const scroll = useScroll();
  const [model, setModel] = useState();

  const fbx = useLoader(FBXLoader, '/model/Marie.fbx'); // or your fbx filename

  useEffect(() => {
    setModel(fbx);

    // Apply base rotation once the model is loaded
    if (fbx) {
      fbx.rotation.y = -Math.PI / 2; // Rotate -90° around Y-axis
    }
  }, [fbx]);

  useFrame(() => {
    const scrollOffset = scroll.offset;
    const baseScale = 0.03;
    const scaleMultiplier = 1 + scrollOffset * 2;
    const finalScale = baseScale * scaleMultiplier;

    if (group.current) {
      group.current.scale.set(finalScale, finalScale, finalScale);
    }
  });

  return model ? <primitive ref={group} object={model} dispose={null} /> : null;
};
