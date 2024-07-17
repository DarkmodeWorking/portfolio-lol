import React from "react";

import { AnimatedTooltipPreview } from "./animatedTooltip";
import { TextGenerateEffectDemo } from "./TextGenerate";
import { HeroHighlightDemo } from "./HeroHighlightDemo";

export function BackgroundDemo() {
  return (
  <>
  <div className="w-full">
  <HeroHighlightDemo/>
  </div>
  <div className=" absolute left-5 top-10 translate-y-[40%] hidden sm:block">
       <AnimatedTooltipPreview/>
       </div>
       <div className="h-[20vh] w-[15vw] absolute left-5 top-20 translate-y-[30%] hidden sm:block">
       <TextGenerateEffectDemo/>
       </div>
  
  </>
    
  );
}
