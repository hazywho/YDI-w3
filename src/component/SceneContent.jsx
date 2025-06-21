import React, { useRef } from 'react';
import { Html, useScroll } from '@react-three/drei'; // Import Html
import { useFrame } from '@react-three/fiber';
import { Mickeymouse } from './Mickeymouse';
import "./global.css"

export function SceneContent() {
  const scroll = useScroll();
  const htmlRef = useRef(); // Changed from textRef to htmlRef

  useFrame(() => {
    const t = scroll.offset;
    const maxT = Math.min(t, 0.5);

    if (htmlRef.current) { // Updated ref name
      const startZ = 2;
      const endZ = -1;
      // Position the HTML element. The 'transform' CSS property on the Html component
      // handles the 3D positioning based on the position prop.
      // We'll manage the fade directly via its style.opacity for HTML content.
      htmlRef.current.style.transform = `translate3d(-50%, -50%, ${startZ + (endZ - startZ) * maxT}px)`;

      // Apply fade effect to the HTML element
      const fade = 1 - Math.min(Math.max((t - 0.1) / 0.4, 0), 1);
      htmlRef.current.style.opacity = fade;
      // Ensure pointerEvents are off when faded out or off-screen to avoid blocking interaction
      htmlRef.current.style.pointerEvents = fade < 0.1 ? 'none' : 'auto';
    }
  });

  return (
    <>
      <Html
        ref={htmlRef} // Assign the ref to Html
        position={[0, 0, 2]} // Initial 3D position in your Three.js scene
        center // Centers the HTML content relative to its position
        // You can add styles directly to the div inside Html
        // or use a className if you have global CSS/Tailwind
        style={{
          color: '#806436', // Text color
          fontSize: '7.5vw', // Responsive font size
          fontFamily: '"Cinzel Decorative", serif', // Use the loaded Google Font
          whiteSpace: 'nowrap', // Prevents text from wrapping
          pointerEvents: 'auto', // Allows interaction with content inside Html
          // Other styles for visual appeal
          textShadow: '5px 12px 10px rgba(0,0,0,0.5)',
          // Max width to prevent it from getting too large on very wide screens
          maxWidth: '100vw',
          textAlign: 'center',
          lineHeight: '1.2',
          
        }}
      >
        Marie Antoinette
      </Html>

      <Mickeymouse />
    </>
  );
}
