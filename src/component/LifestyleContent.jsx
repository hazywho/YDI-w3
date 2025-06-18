import React, { useRef, useEffect, useState } from 'react';

const LifestyleContent = () => {
  // Define content for each distinct scrollable section about Marie Antoinette's life
  const sections = [
    {
      id: 'section-childhood',
      number: '01',
      title: 'Fashion and Appearance',
      description: `Marie Antoinette was a trendsetter, known for her elaborate hairstyles and elaborate gowns. She was deeply involved in her fashion choices, even going so far as to directly consult with her dressmaker and milliner. 
      This focus on fashion, while celebrated by some, was seen by others as frivolous and contributed to her negative public image.`,
      media: "./images/marieAntoinetteBoatHair.png",
      mediaAlt: "Fashion and Appearance",
      mediaPosition: 'right' // Text Left, Image Right
    },
    {
      id: 'section-marriage',
      number: '02', 
      title: 'Entertainment and Leisure',
      description: "Marie Antoinette enjoyed attending balls, theater performances, and other social events at court. She also enjoyed playing cards and billiards, sometimes to excess, which concerned her husband, Louis XVI. She found refuge from court life at the Petit Trianon, where she created a private haven with the Queen's Hamlet, a picturesque, self-contained village within the palace grounds."  ,
      media: "./images/marie private life.png",
      mediaAlt: "Entertainment and Leisure:",
      mediaPosition: 'left' // Image Left, Text Right
    },
    {
      id: 'section-early-reign',
      number: '03',
      title: 'Political Role and Downfall',
      description: `While often portrayed as solely focused on pleasure, Marie Antoinette did play a role in French politics, particularly as her husband, Louis XVI, was often indecisive. Her perceived lack of concern for the suffering of the French people, combined with her extravagant lifestyle, made her a target of public resentment and fueled the revolutionary movement.`,
      media: "./images/mrieTheatre.png",
      mediaAlt: "Political Role and Downfall",
      mediaPosition: 'right'
    },
    {
      id: 'section-petit-trianon',
      number: '04',
      title: 'Private Life',
      description: `Despite her public image, Marie Antoinette also sought privacy and enjoyed simpler pleasures. She reportedly preferred intimate meals and enjoyed spending time with her children at the Queen's Hamlet.`,
      media: "./images/marie private life.png",
      mediaAlt: "Private Life",
      mediaPosition: 'left'
    },
  ];

  // Refs for each scrollable section to detect visibility
  const sectionRefs = useRef({});
  const [activeSectionId, setActiveSectionId] = useState(sections[0].id); // State to track the currently active section

  useEffect(() => {
    const observerOptions = {
      root: null, // Use the entire viewport as the scrolling container
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      let currentActive = null;
      // Find the first intersecting entry from top to bottom
      for (let i = 0; i < sections.length; i++) {
        const entry = entries.find(e => e.target.id === sections[i].id);
        if (entry && entry.isIntersecting) {
          currentActive = entry.target.id;
          break;
        }
      }
      setActiveSectionId(currentActive);
    }, observerOptions);

    // Observe each section element identified by its ID
    sections.forEach(section => {
      if (sectionRefs.current[section.id]) {
        observer.observe(sectionRefs.current[section.id]);
      }
    });

    // Clean up the observer when the component unmounts
    return () => {
      sections.forEach(section => {
        if (sectionRefs.current[section.id]) {
          observer.unobserve(sectionRefs.current[section.id]);
        }
      });
    };
  }, [sections]);

  return (
    // Main container: full screen height, now the primary scroll container
    // Scroll snapping ensures smooth transitions between sections
    <div className="flex flex-col min-h-screen bg-yellow-300 font-sans text-black overflow-y-scroll snap-y snap-mandatory scroll-smooth">

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          ref={el => sectionRefs.current[section.id] = el}
          // Each section takes up full viewport height, snaps into place
          className="flex flex-col md:flex-row items-center justify-center min-h-screen snap-start w-full px-6 py-12 md:px-16 md:py-24"
          style={{
            // Apply opacity for overall section visibility
            opacity: activeSectionId === section.id ? 1 : 0.3,
            transition: 'opacity 0.7s ease-in-out',
          }}
        >
          {/* Media Column (order changes based on mediaPosition) */}
          <div className={`flex-1 w-full md:w-1/2 flex items-center justify-center p-4 md:p-8 ${section.mediaPosition === 'left' ? 'order-1' : 'order-2'}
                      transition-all duration-700 ease-in-out transform
                      ${activeSectionId === section.id ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}` // Added transform for slide-in
          }>
            {section.media && (
              <img
                src={section.media}
                alt={section.mediaAlt}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg shadow-xl"
                onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/800x500/000/FFF?text=MEDIA+LOAD+ERROR"; }}
              />
            )}
          </div>

          {/* Text Column (order changes based on mediaPosition) */}
          <div className={`flex-1 w-full md:w-1/2 flex flex-col justify-center p-4 md:p-8 ${section.mediaPosition === 'left' ? 'order-2' : 'order-1'}`}>
            <div className="max-w-md mx-auto md:mx-0"> {/* Constrain text width for readability */}
              {section.number && (
                <span className={`text-2xl md:text-3xl font-bold mb-4 text-black transition-all duration-500 ease-in-out transform ${activeSectionId === section.id ? 'opacity-100 translate-y-0' : 'opacity-50 -translate-y-2'}`}>
                  {section.number}
                </span>
              )}
              <h2 className={`text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-4 transition-all duration-700 ease-in-out transform ${activeSectionId === section.id ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-2'}`}>
                {section.title}
              </h2>
              <p className={`text-lg md:text-xl leading-relaxed opacity-90 mb-8 transition-all duration-700 ease-in-out transform ${activeSectionId === section.id ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 translate-y-4'}`}>
                {section.description}
              </p>
              {activeSectionId === section.id && section.buttonText && (
                <button className="px-8 py-4 bg-black text-yellow-300 font-bold text-lg uppercase rounded-lg shadow-xl transition-all duration-300 ease-in-out hover:bg-gray-800 hover:scale-105 self-start">
                  {section.buttonText}
                </button>
              )}
              {/* Vertical line only for active numbered sections */}
              {activeSectionId === section.id && section.number && (
                <div className="w-1 bg-black h-16 my-8 ml-2 opacity-50 transition-all duration-300 ease-in-out"></div>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* Optional Footer, if desired, could be a final snap point */}
      {/* <footer className="flex items-center justify-center min-h-[30vh] snap-start bg-black text-yellow-300 py-8">
        <p>&copy; 2024 ZENT. All rights reserved.</p>
      </footer> */}

    </div>
  );
};

export default LifestyleContent;
