import React from "react";

import { AnimatedTooltipPreview } from "./animatedTooltip";
import { TextGenerateEffectDemo } from "./TextGenerate";
import { HeroHighlightDemo } from "./HeroHighlightDemo";

export function GridBackgroundDemo() {
  return (
  <>
  <div className="h-[80vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.3] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_15%,black)]"/>
      <HeroHighlightDemo/>
      <div className=" absolute -left-1 top-10 translate-y-[40%] hidden sm:block">
       <AnimatedTooltipPreview/>
       </div>
       <div className="h-[20vh] w-[15vw] absolute left-0 top-20 translate-y-[30%] hidden sm:block">
       <TextGenerateEffectDemo/>
       </div>
       
    </div>
    
  </>
    
  );
}
