'use client';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FunctionCall } from "three/examples/jsm/transpiler/AST.js";

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
        <div id="content" className="min h-screen w-scree">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <h2 className="font-general text-sm uppercase md:text-[10px]">Her life</h2>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">Let's take a look at Marie Antoinette's life</div>
        <div className="about-subtext"><p>Hi</p></div>
            </div>
        <div className="h-dvh w-screen" id="clip">
            <div className="mask-clip-path about-image">
                <img
                    src="images/marie.antoinette.png"
                    alt = "Background"
                    className="absolute left-0 top-0 size full object-cover"/>
            </div>
        </div>
        </div>
    );
};

export default Content