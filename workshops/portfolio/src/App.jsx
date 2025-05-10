import { useState } from 'react'
import "./app.css"
import { LoadingScreen } from './components/genericComponents/loadingScreen' 
import "./index.css"
import { Navbar } from './components/genericComponents/navbar'
import { MobileMenu } from './components/genericComponents/mobileMenu'
import { Home } from './components/sections/home'

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}
      {/* if not isLoaded then load screen. On complete, set isLoaded to true */}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100` }>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
        {/* ^^use changes on menu open to decie when to show */}
        <Home />
      </div>

    </> 
  )
}

export default App
 