import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";


gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    // Change background to black (bg-black) and default text to white (text-white)
    <div id="content" className="min-h-screen w-screen bg-[#0E110F] text-white">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="tracking-wide font-general text-sm uppercase md:text-[120px] font-extrabold p-[30px] pt-40">
          Discover
        </p> 

        <AnimatedTitle
          title="Her Story, Her Lifestyle, Her Legacy."
          // Removed !text-black to inherit text-white from parent,
          // or explicitly set to white if needed for specificity
          containerClass="mt-5 text-white text-center"
        />

        <div className="about-subtext">
          <p>"I am human, a woman with a living, beating heart first, before I am queen!!"</p>
          {/* Change text-white-500 to text-white for consistency or a specific shade if you have one */}
          <p className="text-white">
            - Marie Antoinette
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="./images/marie_antoinette.png"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Content;