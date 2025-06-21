import React, { useState, useRef, useEffect } from 'react';

// --- CHILD COMPONENTS ---
// These are the helper components for the timeline section.

const FadingBackgrounds = ({ sections, activeSectionId }) => {
    return (
        <div className="absolute inset-0">
            {sections.map(section => (
                <div
                    key={section.id}
                    className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                    style={{
                        opacity: activeSectionId === section.id ? 1 : 0,
                    }}
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${section.backgroundMedia})` }}
                    />
                    <div className="absolute inset-0 bg-black opacity-60" />
                </div>
            ))}
        </div>
    );
};

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);
    const handleMouseMove = (event) => {
        if (!itemRef.current) return;
        const { left, top, width, height } = itemRef.current.getBoundingClientRect();
        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;
        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.98, .98, .98)`;
        setTransformStyle(newTransform);
    };
    const handleMouseLeave = () => setTransformStyle("");
    return (
        <div
            ref={itemRef}
            className={`${className}`}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle, transition: 'transform 0.1s ease-out' }}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({ src, title, description, number }) => {
    return (
        <div className="relative size-full overflow-hidden rounded-lg shadow-xl bg-black/20">
            <img src={src} alt={title} className="absolute left-0 top-0 size-full object-cover" onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x500/000/FFF?text=MEDIA+LOAD+ERROR"; }} />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-white bg-black/40 hover:bg-black/20 transition-colors duration-300">
                <div>
                    {number && <p className="text-4xl md:text-5xl font-bold mb-2">{number}</p>}
                    <h1 className="bento-title font-black text-5xl md:text-6xl lg:text-7xl leading-tight text-white">{title}</h1>
                    {description && <p className="mt-3 text-lg md:text-xl text-white opacity-90">{description}</p>}
                </div>
            </div>
        </div>
    );
};

const Confetti = ({ active }) => {
    if (!active) return null;
    const confettiPieces = Array.from({ length: 30 }).map((_, index) => {
        const colors = ['#A37C40', '#FFFFFF', '#D4AF37', '#BFB08A'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        const randomX = Math.random() * 200 - 100;
        const randomY = Math.random() * 200 - 100;
        const randomDelay = Math.random() * 0.5;
        const randomDuration = 0.5 + Math.random();

        const style = {
            '--x': `${randomX}px`,
            '--y': `${randomY}px`,
            backgroundColor: randomColor,
            animation: `confetti-pop ${randomDuration}s cubic-bezier(0.25, 1, 0.5, 1) ${randomDelay}s forwards`,
            position: 'absolute',
            width: '8px',
            height: '8px',
            borderRadius: '50%',
        };
        
        return <div key={index} style={style} />;
    });
    return <div className="absolute inset-0">{confettiPieces}</div>;
};

// Inject confetti animation keyframes into the document's head
const keyframes = `
@keyframes confetti-pop {
  0% { transform: translate(0, 0) scale(1); opacity: 1; }
  100% { transform: translate(var(--x), var(--y)) scale(0); opacity: 0; }
}
`;
if (!document.getElementById('confetti-styles')) {
    const styleSheet = document.createElement("style");
    styleSheet.id = 'confetti-styles';
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
}

// --- MAIN UNIFIED COMPONENT ---

const LifestylePage = () => {
    // --- STATE AND REFS ---

    // State for video loading from your original file
    const [loading, setLoading] = useState(true);
    const [loadedVideos, setLoadedVideos] = useState(0);
    const totalVideos = 1;

    const handleVideoLoad = () => {
        setLoadedVideos((prev) => prev + 1);
    };

    useEffect(() => {
        if (loadedVideos === totalVideos) {
            setLoading(false);
        }
    }, [loadedVideos, totalVideos]);
    
    // Video source from your original file
    const getVideoSrc = () => `./video/Lifestyle.mp4`;

    // Timeline sections state from your original file
    const [sections, setSections] = useState([
        { id: 'section-fashion', number: '01', title: 'Fashion', description: `She was arguably the most influential fashion icon of her time. Her extravagant taste, bold choices, and collaboration with her "Minister of Fashion," Rose Bertin, not only set trends within the French court but also had a ripple effect throughout European society, significantly shaping 18th-century fashion. While Marie Antoinette's extravagant spending and perceived frivolousness contributed to her unpopularity and ultimately her tragic end during the French Revolution, her impact on fashion is undeniable. She was a trendsetter who made personal style a powerful form of self-expression.`, mediaPosition: 'right', backgroundMedia: "./images/marieAntoinetteBoatHair.png", isActive: false },
        { id: 'section-entertainment', number: '02', title: 'Leisure', description: "Marie Antoinette's leisure time was a stark contrast to the rigid, formal etiquette of the French court. While her public life as queen was filled with ceremonial duties, she actively sought out opportunities for privacy, entertainment, and personal expression. She enjoyed balls, theater, and social events at court. She would also spend time in her private apartments reading, writing letters (especially to her mother), and sometimes even working on needlework or tapestry projects.", mediaPosition: 'left', backgroundMedia: "./images/mrieTheatre.png", isActive: false },
        { id: 'section-politics', number: '03', title: 'Politics', description: `Marie Antoinette's involvement in French politics is a complex and often tragic story, marked by evolving influence, public animosity, and ultimately, her demise. While initially reluctant and largely excluded from political affairs, circumstances and her own personality drew her into a more active, and ultimately detrimental, role as the French monarchy faced its greatest crisis. As Louis XVI was known to be very indecisive, she had to step in multiple times in order to help make decisions. This also made her become a prime target of propaganda.`, mediaPosition: 'right', backgroundMedia: "./images/marie_crumbliing.png", isActive: false },
        { id: 'section-private-life', number: '04', title: 'Private Life', description: `Marie Antoinette's private life was a constant negotiation between the demanding rituals of court etiquette and her deep desire for a more relaxed, personal existence. Having grown up in the less formal Habsburg court in Austria, she found the relentless public scrutiny and strict ceremonial routines of Versailles stifling. To cope, she carved out spaces and activities that allowed her to be more herself, surrounded by a chosen circle of friends and family. Sources said that she often transformed and personalised her chambers to her own tastes.`, mediaPosition: 'left', backgroundMedia: "./images/marieprivatelife.png", isActive: false },
    ]);
    
    // Refs for observing scroll position
    const timelineRef = useRef(null);
    const sectionRefs = useRef({});

    // --- EFFECTS ---

    // Effect to set the active timeline section based on scroll position
    useEffect(() => {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.5 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setSections(prev => prev.map(s => ({ ...s, isActive: s.id === entry.target.id })));
                }
            });
        }, observerOptions);
        
        const currentSectionRefs = Object.values(sectionRefs.current);
        currentSectionRefs.forEach(el => { if (el) observer.observe(el); });
        
        return () => { currentSectionRefs.forEach(el => { if (el) observer.unobserve(el); }); };
    }, []);

    // --- DERIVED STATE ---

    const activeSection = sections.find(s => s.isActive);
    const activeIndex = sections.findIndex(s => s.isActive);
    
    // Corrected progress bar calculation
    const progressPercentage = activeIndex >= 0 ? (activeIndex / (sections.length - 1)) * 100 : 0;

    return (
        <div id="lifestyle-page" className="bg-[#0D0D0D] text-white">
            {/* --- Initial Video Section --- */}
            <div id="lifestyle" className="relative w-screen overflow-x-hidden">
                {loading && (
                    <div className="flex items-center justify-center absolute z-[100] h-dvh w-screen overflow-hidden bg-black">
                        {/* You can replace this with your original loading animation if you have one */}
                        <p>Loading...</p>
                    </div>
                )}

                <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden bg-black">
                    <video
                        src={getVideoSrc()}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="absolute left-0 top-0 h-full w-full object-cover object-center"
                        onLoadedData={handleVideoLoad}
                    />
                     <div className="absolute left-0 top-0 z-40 flex h-full w-full items-end justify-between p-5">
                        <div className="px-5 sm:px-10 py-[650px]">
                            <h1 className="special-font hero-heading text-white">Her</h1>
                            <p className="mb-5 max-w-64 font-robert-regular text-white">
                              A reflection of the insulated world of the French court.
                            </p>
                        </div>
                        <h1 className="special-font hero-heading text-white">
                            Lifestyle
                        </h1>
                    </div>
                </div>
            </div>
            
            {/* --- Video Description Section (Your original content) --- */}
            <div className="w-full py-24 md:py-32 bg-[#0D0D0D] relative z-20">
                <div className="mx-auto max-w-7xl px-10 text-center">
                  <p className="font-semibold text-2xl md:text-4xl leading-relaxed">
                    Marie Antoinette's lifestyle was a whirlwind of extravagance and escapism within the gilded cage of Versailles. As Queen, she became a trendsetter, championing lavish gowns, towering hairstyles, and opulent jewelry that defined European court fashion. Yet, she increasingly sought refuge from the rigid etiquette of court life in her private haven, the Petit Trianon, where she cultivated a fantasy of pastoral simplicity. This idyllic retreat, while a personal solace, further fueled public perception of a queen detached from the realities of her people, cementing her image as a symbol of royal indulgence.
                  </p>
                </div>
            </div>

            {/* --- Interactive Timeline Section --- */}
            <div ref={timelineRef} className="relative">
                {/* Sticky container for the fading backgrounds */}
                <div className="h-screen sticky top-0 z-0">
                    <FadingBackgrounds sections={sections} activeSectionId={activeSection?.id} />
                </div>

                {/* Scrolling content that appears over the sticky background */}
                <div className="relative z-10" style={{ marginTop: '-100vh' }}>
                    <div className="relative flex flex-col font-sans text-white snap-y snap-mandatory scroll-smooth">
                        {/* Timeline Progress Bar */}
                        <div
                            className="absolute left-1/2 -translate-x-1/2"
                            style={{
                                top: '50vh',
                                height: `calc((${sections.length} - 1) * 100vh)`,
                                zIndex: 5,
                            }}
                        >
                            <div className="w-1.5 h-full bg-white/20 shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                            <div
                                className="absolute top-0 left-0 w-1.5"
                                style={{
                                    height: `${progressPercentage}%`,
                                    backgroundColor: '#A37C40',
                                    boxShadow: '0 0 10px #A37C40',
                                    transition: 'height 0.5s cubic-bezier(0.42, 0, 0.58, 1)',
                                }}
                            />
                        </div>

                        {/* Timeline Sections */}
                        {sections.map((section, index) => {
                            const isPastNode = activeIndex > -1 && index < activeIndex;
                            const nodeColor = section.isActive || isPastNode ? '#A37C40' : 'white';
                            const isLastNode = index === sections.length - 1;
                            return (
                                <section
                                    key={section.id}
                                    id={section.id}
                                    ref={el => sectionRefs.current[section.id] = el}
                                    className="relative flex items-center justify-center min-h-screen snap-start w-full px-8 py-16 md:px-24 md:py-24 z-10"
                                >
                                    {/* Timeline Node */}
                                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: nodeColor, border: '2px solid white', transition: 'background-color 0.5s ease-in-out' }}>
                                        {isLastNode && <Confetti active={section.isActive} />}
                                    </div>
                                    
                                    {/* Bento Card Content */}
                                    <div className={`w-full h-full flex transition-opacity duration-700 ${section.mediaPosition === 'right' ? 'justify-end' : 'justify-start'}`} style={{ opacity: section.isActive ? 1 : 0.2, pointerEvents: section.isActive ? 'auto' : 'none' }}>
                                        <div className="w-full md:w-6/12 -ml-4 md:-ml-8 -mr-4 md:-mr-8">
                                            <BentoTilt className="w-full">
                                                <BentoCard {...section} src={section.backgroundMedia} />
                                            </BentoTilt>
                                        </div>
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LifestylePage;
