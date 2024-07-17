import React from 'react'
import { BackgroundDemo } from './Background'
import { StickyScrollRevealDemo } from './StickyScroll'
import { AnimatedTooltipPreview } from './animatedTooltip'
import { CanvasRevealEffectDemo } from './CanvasReveal'
import { TextGenerateEffectDemo } from './TextGenerate'
const Hero = () => {
  return (
      <>
          <BackgroundDemo/>
          <CanvasRevealEffectDemo/>
        <StickyScrollRevealDemo/>
        {/* <div className="hidden sm:block">
       <AnimatedTooltipPreview/>
       <TextGenerateEffectDemo/>
       </div> */}
      </>
      
    
  )
}

export default Hero