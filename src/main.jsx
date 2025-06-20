// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18
import App from './App.jsx';
import './index.css';

// If you are using GSAP ScrollTrigger anywhere (AnimatedTitle), this helps avoid double-trigger bugs on load
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

// Force refresh ScrollTrigger after page load (prevents bugs in combination with react-three-fiber + GSAP)
window.addEventListener('load', () => {
  ScrollTrigger.refresh();
});

// Standard React 18 setup
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
