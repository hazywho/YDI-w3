import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { SceneContent } from './component/SceneContent';
import { SidePopContent } from './component/SidePopContent';
import Content from './component/Content';

export default function App() {
  return (
    <>
      {/* === CANVAS SECTION (scrolls within itself for 3 pages) === */}
      <div style={{ width: '100vw', height: '100vh', position: 'relative' }}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={5} />
          <directionalLight position={[5, 5, 5]} intensity={1} castShadow />

          {/* Canvas-only scrolling (3 virtual pages) */}
          <ScrollControls pages={3} damping={0.2}>
            <Suspense fallback={null}>
              <SceneContent />
            </Suspense>

            <Scroll html>
              {/* Optional HTML popout content during scroll */}
              <div
                style={{
                  position: 'absolute',
                  top: '190vh',
                  width: '100vw',
                  height: '100vh',
                  pointerEvents: 'none',
                }}
              >
                <SidePopContent />
              </div>
            </Scroll> 
          </ScrollControls>

          <OrbitControls enableZoom={false} />
        </Canvas>
      </div>

      {/* === LANDING PAGE SECTION — Scrolls normally === */}
      <div>
        <Content />
      </div>
    </>
  );
}
