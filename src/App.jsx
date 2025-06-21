import NavBar from './component/Navbar';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import { SceneContent } from './component/SceneContent';
import { SidePopContent } from './component/SidePopContent';
import LifestylePage from './component/Lifestyle';
import Content from './component/Content';
import History from './component/History';
import Art from './component/Art';
import Contact from './component/Contact';

export default function App() {
  return (
    <>
      <div style={{ width: '100vw', height: '100vh', position: 'relative', zIndex: 0, scrollbarWidth: "none"}}>
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '' }}>
          <ambientLight intensity={0.75} color="white" />
          <directionalLight position={[6, 5, 5]} intensity={2} castShadow />

          <ScrollControls pages={3} damping={0.2}>
            <Suspense fallback={null}>
              <SceneContent />
            </Suspense>

            <Scroll html>
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

      <div className="bg-[#1f261f]" style={{ position: 'relative', zIndex: 1 }}>
        <NavBar />
        <Content />
        <History />
        <LifestylePage />
        {/* <Lifestyle />
        <LifestyleContent /> */}
        <Art />
        <Contact />

        <div class="flex flex-col items-center text-[#906436]">
          <h1 class="text-[80px] font-semibold">Citations</h1>
          <div class="text-center"> <p>Music track: Dawn by Alegendbr</p>
              <p>Source: <a href="https://freetouse.com/music">https://freetouse.com/music</a></p>
              <p>Free Background Music for Video</p>
          </div> <br />
          <div class="text-center"> <p>Music track: Overtaken by Epic Spectrum</p>
              <p>Source: <a href="https://freetouse.com/music">https://freetouse.com/music</a></p>
              <p>No Copyright Background Music</p>
          </div> <br />
          <div class="text-center"> <p>Music track: Animal Friends by Lukrembo</p>
              <p>Source: <a href="https://freetouse.com/music">https://freetouse.com/music</a></p>
              <p>Copyright Free Music (Free Download)</p>
          </div> <br />
          <div class="text-center"> <p>Music track: Bread by Lukrembo</p>
              <p>Source: <a href="https://freetouse.com/music">https://freetouse.com/music</a></p>
              <p>Copyright Free Music (Free Download)</p>
          </div> <br />
      </div>
      </div>
    </>
  );
}