import { useRef, useState, useLayoutEffect, useEffect, useCallback } from "react";
import clsx from "clsx";
import AnimatedTitle from "./AnimatedTitle";

// Mock Button component to resolve import error
const Button = ({ id, title, onClick, containerClass }) => (
  <button
    id={id}
    onClick={onClick}
    className={`bg-[#593312] text-[#F2F2F2] font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-[#7a4c28] transition-colors duration-200 ${containerClass}`}
  >
    {title}
  </button>
);

const carouselContent = [
  {
    src: "/images/Marieart1.png",
    description: "The image portrays Marie Antoinette with a delicate, contemplative expression, symbolically framed between the crown and guillotine."
  },
  {
    src: "/images/Marieart2.png",
    description: "The composition contrasts majesty with impending doom, suggesting her position as queen is beautiful but unsustainable. Her passive pose might suggest acceptance or helplessness."
  },
  {
    src: "./images/marie3.png",
    description: "The image shows them holding hands, formally posed but not quite intimate, reflecting their famous emotional distance. Yet there's calmness in their faces—a fleeting moment before politics, pressure, and revolution intervened. This was created to visualize the beginning of an unraveling story: two figures bound together by duty, not affection, standing on the edge of history."
  },
  {
    src: "/images/image4.png",
    description: "Her calm, composed expression and gentle posture evoke a time when she was simply a child of the Austrian court—curious, groomed, and unaware of the enormous role history had already begun to write for her. The goal was to restore her humanity by visualizing her not as a queen or scapegoat, but as a girl—full of promise, unaware of the weight the world would place upon her."
  }
];

const Art = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);
  const animatingRef = useRef(false);
  const gsapLoadedRef = useRef(false);

  // Effect to load GSAP from CDN
  useEffect(() => {
    if (!window.gsap && !gsapLoadedRef.current) {
      const script = document.createElement('script');
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js";
      script.async = true;
      script.onload = () => {
        console.log("GSAP loaded from CDN!");
        gsapLoadedRef.current = true;
      };
      script.onerror = (e) => console.error("Failed to load GSAP from CDN:", e);
      document.body.appendChild(script);
    } else if (window.gsap) {
        gsapLoadedRef.current = true;
        console.log("GSAP already available in window.");
    }
  }, []);

  const getStackedStyles = useCallback((indexOffset) => {
    const horizontalShift = 10;
    const verticalShift = 5;
    const scaleReduction = 0.05;
    const rotationDegrees = 1;
    const zDepth = 50;

    return {
      x: indexOffset * horizontalShift,
      y: indexOffset * verticalShift,
      scale: 1 - (indexOffset * scaleReduction),
      rotateY: indexOffset * rotationDegrees,
      rotateX: indexOffset * rotationDegrees * 0.5,
      z: -indexOffset * zDepth,
      opacity: 1,
    };
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect: Initializing image positions.");
    if (!window.gsap || !gsapLoadedRef.current) {
      console.warn("GSAP not available in useLayoutEffect, skipping initial setup.");
      return;
    }

    if (imageRefs.current.length === carouselContent.length) {
      imageRefs.current.forEach((el, i) => {
        const initialIndexOffset = i;
        const styles = getStackedStyles(initialIndexOffset);
        window.gsap.set(el, {
          ...styles,
          zIndex: carouselContent.length - i,
        });
      });
    } else {
      console.log(`useLayoutEffect: imageRefs.current.length (${imageRefs.current.length}) != carouselContent.length (${carouselContent.length})`);
    }
  }, [carouselContent.length, getStackedStyles, gsapLoadedRef.current]);

  useEffect(() => {
    console.log(`useEffect (currentIndex: ${currentIndex}): animation triggered. animatingRef.current: ${animatingRef.current}`);
    console.log(`imageRefs.current.length: ${imageRefs.current.length}, carouselContent.length: ${carouselContent.length}`);

    if (!window.gsap || !gsapLoadedRef.current) {
      console.warn("GSAP not available in useEffect animation, skipping.");
      return;
    }

    if (imageRefs.current.length === carouselContent.length && !animatingRef.current) {
      animatingRef.current = true;
      console.log("GSAP Timeline started.");

      const tl = window.gsap.timeline({
        onComplete: () => {
          animatingRef.current = false;
          console.log("GSAP Timeline completed. animatingRef.current reset to false.");
        },
        onStart: () => {
          console.log("GSAP Timeline onStart called.");
        },
        duration: 0.8,
        ease: "power2.inOut",
      });

      imageRefs.current.forEach((el, i) => {
        let newIndexOffset = (i - currentIndex + carouselContent.length) % carouselContent.length;
        if (newIndexOffset > (carouselContent.length - 1)) {
          newIndexOffset = newIndexOffset - carouselContent.length;
        }

        const targetStyles = getStackedStyles(newIndexOffset);

        tl.to(el, {
          ...targetStyles,
          zIndex: carouselContent.length - newIndexOffset,
          overwrite: "auto",
        }, 0);
      });
    } else if (animatingRef.current) {
      console.log("Animation blocked: another animation is still in progress.");
    }
  }, [currentIndex, carouselContent.length, getStackedStyles, gsapLoadedRef.current]);

  const goToNextSlide = () => {
    console.log("Next button clicked.");
    if (animatingRef.current) {
      console.log("Next button ignored: animation in progress.");
      return;
    }
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % carouselContent.length;
      console.log(`Setting currentIndex to: ${newIndex}`);
      return newIndex;
    });
  };

  const goToPrevSlide = () => {
    console.log("Previous button clicked.");
    if (animatingRef.current) {
      console.log("Previous button ignored: animation in progress.");
      return;
    }
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? carouselContent.length - 1 : prevIndex - 1;
      console.log(`Setting currentIndex to: ${newIndex}`);
      return newIndex;
    });
  };

  const handleMouseMove = (e) => {
    const element = imageRefs.current[currentIndex];
    if (!element || !window.gsap || !gsapLoadedRef.current) return;

    const img = element.querySelector("img");
    const rect = img.getBoundingClientRect();

    const xPos = e.clientX - rect.left;
    const yPos = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((yPos - centerY) / centerY) * -10;
    const rotateY = ((xPos - centerX) / centerX) * 10;

    window.gsap.to(img, {
      duration: 0.3,
      rotateX,
      rotateY,
      transformPerspective: 500,
      ease: "power1.inOut",
    });
  };

  const handleMouseLeave = () => {
    const element = imageRefs.current[currentIndex];
    if (element && window.gsap && gsapLoadedRef.current) {
      const img = element.querySelector("img");
      window.gsap.to(img, {
        duration: 0.3,
        rotateX: 0,
        rotateY: 0,
        ease: "power1.inOut",
      });
    }
  };

  return (
    <div id="art" className="min-h-dvh w-screen bg-[#1f261f] text-blue-50 font-inter">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <div className="relative size-full">
          <AnimatedTitle
            title="The Art of Marie Antoinette"
            containerClass="mb-24 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container relative w-full h-[500px] flex justify-center items-center overflow-hidden">
            {carouselContent.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) imageRefs.current[index] = el;
                }}
                className="story-img-mask absolute w-full h-full ml-48"
                style={{
                  maxWidth: '80%',
                  maxHeight: '80%',
                  transformOrigin: 'center center',
                }}
              >
                <div className="story-img-content size-full">
                  <img
                    src={item.src}
                    alt={`Image ${index + 1}`}
                    className="object-contain w-full h-full"
                    onMouseMove={index === currentIndex ? handleMouseMove : null}
                    onMouseLeave={index === currentIndex ? handleMouseLeave : null}
                  />
                </div>
              </div>
            ))}

            {/* Left Arrow Button */}
            {/* Changed to fixed positioning and higher z-index for visibility */}
            <button
              onClick={goToPrevSlide}
              className={clsx(
                "fixed left-4 top-1/2 -translate-y-1/2 p-3 bg-red-500 rounded-full text-white hover:bg-red-700 transition-all duration-200 z-[999] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75",
                { "cursor-not-allowed opacity-50": animatingRef.current }
              )}
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow Button */}
            {/* Changed to fixed positioning and higher z-index for visibility */}
            <button
              onClick={goToNextSlide}
              className={clsx(
                "fixed right-4 top-1/2 -translate-y-1/2 p-3 bg-red-500 rounded-full text-white hover:bg-red-700 transition-all duration-200 z-[999] focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-75",
                { "cursor-not-allowed opacity-50": animatingRef.current }
              )}
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* SVG for filter effects */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        {/* Content and buttons below the carousel */}
        <div className="mt-8 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end relative z-50">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            {/* Dynamic Text Description */}
            <p className="mt-3 max-w-sm text-center font-circular-web text-[#967c3e] md:text-start">
              {carouselContent[currentIndex].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Art;
