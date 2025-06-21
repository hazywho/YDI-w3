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
      leftRef.current.style.transform = `translateX(${(-100 + progress * 100)}%) translateY(-50%)`;
      leftRef.current.style.opacity = progress;
    }

    if (rightRef.current) {
      rightRef.current.style.transform = `translateX(${(100 - progress * 100)}%) translateY(-50%)`;
      rightRef.current.style.opacity = progress;
    }
  });

  // Base style for the pop-out boxes
  const boxStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)', // Initial transform, will be overridden by useFrame for animation
    width: '350px',
    padding: '10px',
    background: 'rgba(233, 195, 71, 0.77)', // Dark background for contrast
    color: 'rgb(255, 255, 255)', // Text color
    borderRadius: '12px',
    transition: 'transform 0.2s ease, opacity 0.2s ease',
    // Added a subtle box shadow to make the containers "pop out"
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4), 0 6px 6px rgba(0, 0, 0, 0.25)',
    // Added a border for extra definition
    border: '1px solid rgba(128, 100, 54, 0.5)', // Slightly lighter border based on text color
  };

  // Style for the text inside the boxes to make it bigger
  const textStyle = {
    fontSize: '2rem', // Increased font size
    lineHeight: '1.6', // Improved line spacing for readability
    textAlign: 'center', // Center align text for better presentation
  };

  return (
    <>
      {/* Left Pop-out Content */}
      <div
        ref={leftRef}
        style={{
          ...boxStyle,
          left: '17%',
          transform: 'translateX(-100%) translateY(-50%)', // Initial off-screen position
          opacity: 0, // Initial hidden state
        }}
      >
        <p style={textStyle}><b>The last queen of France before the French Revolution.</b></p>
      </div>

      {/* Right Pop-out Content */}
      <div
        ref={rightRef}
        style={{
          ...boxStyle,
          right: '17%',
          transform: 'translateX(100%) translateY(-50%)', // Initial off-screen position
          opacity: 0, // Initial hidden state
        }}
      >
        <p style={textStyle}><b>Her Life & History with style</b></p>
      </div>
    </>
  );
}
