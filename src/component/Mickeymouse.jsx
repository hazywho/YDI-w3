import React, { useRef, useEffect, useState } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { useScroll, useGLTF } from '@react-three/drei';

export const Mickeymouse = () => {
  const group = useRef(); // Ref to control the primitive object's transformations
  const scroll = useScroll(); // Hook to get scroll offset from ScrollControls

  // Load the GLB model. This hook handles memoization, caching, and suspense.
  // IMPORTANT: Ensure './model/Marie.glb' is the correct path to your converted GLB file
  const { scene } = useGLTF('./model/Marie.glb');

  // useEffect to apply initial transformations once the model's scene is loaded
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
  }, [scene]); // Effect runs only when the 'scene' object (model) changes/loads

  // useFrame hook to apply continuous animations based on scroll offset
  useFrame(() => {
    const scrollOffset = scroll.offset; // Get the normalized scroll position (0 to 1)
    const baseScale = 0.3; // Define the base scale for the model
    const scaleMultiplier = 1 + scrollOffset * 2; // Adjust scale based on scroll (e.g., zooms in)
    const finalScale = baseScale * scaleMultiplier; // Calculate the final scale

    // Apply the calculated scale to the model's group
    if (group.current) {
      group.current.scale.set(finalScale, finalScale, finalScale);
    }
  });

  // Render the loaded GLB scene as a primitive Three.js object
  // The ref 'group' allows us to manipulate its position, rotation, scale.
  return <primitive ref={group} object={scene} dispose={null} />;
};