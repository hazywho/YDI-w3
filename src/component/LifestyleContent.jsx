import React from 'react';

const LifestyleContent = () => {
  // Placeholder images for the alternating sections
  const media1 = "./images/marie_antoinette.png"; // Dark background, bright text
  const media2 = "https://placehold.co/800x500/000/E0E000?text=IMAGE+PLACEHOLDER+2";
  const media3 = "https://placehold.co/800x500/000/D0D000?text=VIDEO+PLACEHOLDER+3";
  const media4 = "https://placehold.co/800x500/000/C0C000?text=IMAGE+PLACEHOLDER+4";

  return (
    <div className="min-h-screen bg-yellow-300 font-sans text-black flex flex-col items-center">
      {/* Custom CSS for fade-in animation */}
      <style>
        {`
          @keyframes fadeInAnimation {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in-section {
            animation: fadeInAnimation 1s ease-out forwards;
            opacity: 0; /* Initial state before animation */
          }
        `}
      </style>

      {/* Main header section */}
      <header className="w-full bg-yellow-300 p-8 md:p-16 lg:p-24 text-black flex flex-col justify-center min-h-[50vh] relative overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black leading-none uppercase mb-6 drop-shadow-lg">
            The Future <br /> Powered by You
          </h1>
          <button className="px-8 py-4 bg-black text-yellow-300 font-bold text-lg uppercase rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105">
            Discover More
          </button>
        </div>
      </header>

      {/* Content sections with alternating layout */}
      <main className="w-full max-w-7xl mx-auto py-12 md:py-20 space-y-20 md:space-y-32">

        {/* Section 1: Text Left, Media Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 px-6 animate-fade-in-section" style={{ animationDelay: '0.2s' }}>
          <div className="md:w-1/2 order-2 md:order-1 p-4 md:p-0">
            <span className="text-2xl font-bold mb-2 block opacity-70">01</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Shaping Our Future Collectively
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Participate in governance, influence key decisions in our ever-growing universe that is limited only by people's imaginations. Your voice, your ideas, power our collective journey forward.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            {/* Using an img tag for placeholder, but could be replaced with <video> */}
            <img
              src={media1}
              alt="Conceptual image 1"
              className="w-full h-auto rounded-2xl shadow-xl border border-black transition-transform duration-300 ease-in-out hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/000/F0F000?text=Image+Load+Error"; }}
            />
          </div>
        </div>

        {/* Section 2: Media Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 px-6 animate-fade-in-section" style={{ animationDelay: '0.4s' }}>
          <div className="md:w-1/2 order-2">
            {/* Using an img tag for placeholder, but could be replaced with <video> */}
            <img
              src={media2}
              alt="Conceptual image 2"
              className="w-full h-auto rounded-2xl shadow-xl border border-black transition-transform duration-300 ease-in-out hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/000/E0E000?text=Image+Load+Error"; }}
            />
          </div>
          <div className="md:w-1/2 order-1 p-4 md:p-0">
            <span className="text-2xl font-bold mb-2 block opacity-70">02</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Unlocking Economic Opportunity
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Discover new pathways to growth and prosperity within our dynamic ecosystem. We empower creators, innovators, and participants to realize their full potential and contribute to a thriving economy.
            </p>
          </div>
        </div>

        {/* Section 3: Text Left, Media Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 px-6 animate-fade-in-section" style={{ animationDelay: '0.6s' }}>
          <div className="md:w-1/2 order-2 md:order-1 p-4 md:p-0">
            <span className="text-2xl font-bold mb-2 block opacity-70">03</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Sharing Value, Building Community
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Our decentralized approach ensures that value generated is shared equitably among all contributors. Join a vibrant community where collaboration and innovation are celebrated, fostering true collective ownership.
            </p>
          </div>
          <div className="md:w-1/2 order-1 md:order-2">
            {/* Using an img tag for placeholder, but could be replaced with <video> */}
            <img
              src={media3}
              alt="Conceptual image 3"
              className="w-full h-auto rounded-2xl shadow-xl border border-black transition-transform duration-300 ease-in-out hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/000/D0D000?text=Image+Load+Error"; }}
            />
          </div>
        </div>

        {/* Section 4: Media Left, Text Right */}
        <div className="flex flex-col md:flex-row items-center gap-8 px-6 animate-fade-in-section" style={{ animationDelay: '0.8s' }}>
          <div className="md:w-1/2 order-2">
            {/* Using an img tag for placeholder, but could be replaced with <video> */}
            <img
              src={media4}
              alt="Conceptual image 4"
              className="w-full h-auto rounded-2xl shadow-xl border border-black transition-transform duration-300 ease-in-out hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/000/C0C000?text=Image+Load+Error"; }}
            />
          </div>
          <div className="md:w-1/2 order-1 p-4 md:p-0">
            <span className="text-2xl font-bold mb-2 block opacity-70">04</span>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
              Empowering Global Connectivity
            </h2>
            <p className="text-lg leading-relaxed opacity-90">
              Break down geographical barriers and connect with a global network of innovators and enthusiasts. Our platform fosters seamless interaction, enabling unprecedented collaboration across borders and cultures.
            </p>
          </div>
        </div>

      </main>

      {/* Footer (Optional, but good for completeness if needed) */}
      <footer className="w-full bg-black text-yellow-300 text-center py-8">
        <p>&copy; 2024 The Future. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LifestyleContent;