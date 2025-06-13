// src/component/SidePopContent.js
import React, { useRef } from 'react';
import { useScroll } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function SidePopContent() {
  const scroll = useScroll();
  const leftRef = useRef();
  const rightRef = useRef();

  useFrame(() => {
    const t = scroll.offset;

    // We want the popout to begin at t = 0.9 and complete by t = 1
    const start = 0.9;
    const end = 1.0;
    const progress = Math.min(Math.max((t - start) / (end - start), 0), 1);

    // Animate slide in
    if (leftRef.current) {
      leftRef.current.style.transform = `translateX(${(-100 + progress * 100)}%)`;
      leftRef.current.style.opacity = progress;
    }

    if (rightRef.current) {
      rightRef.current.style.transform = `translateX(${(100 - progress * 100)}%)`;
      rightRef.current.style.opacity = progress;
    }
  });

  const boxStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    width: '300px',
    padding: '30px',
    background: '#222',
    color: 'white',
    borderRadius: '12px',
    transition: 'transform 0.3s ease, opacity 0.3s ease',
  };

  return (
    <>
      <div ref={leftRef} style={{ ...boxStyle, left: '5%', transform: 'translateX(-100%) translateY(-50%)', opacity: 0 }}>
        <p>The last queen of France before the French Revolution.</p>
      </div>

      <div ref={rightRef} style={{ ...boxStyle, right: '5%', transform: 'translateX(100%) translateY(-50%)', opacity: 0 }}>
        <p>Her Life & History with sytle</p>
      </div>
    </>
  );
}
