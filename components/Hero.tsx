import React from 'react'
import { GridBackgroundDemo } from './GridBackground'
import { StickyScrollRevealDemo } from './StickyScroll'
import { AnimatedTooltipPreview } from './animatedTooltip'
import { CanvasRevealEffectDemo } from './CanvasReveal'
import { TextGenerateEffectDemo } from './TextGenerate'
const Hero = () => {
  return (
      <>
          <GridBackgroundDemo/>
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