import React from 'react'
import { GridBackgroundDemo } from './GridBackground'
import { StickyScrollRevealDemo } from './StickyScroll'
import { AnimatedTooltipPreview } from './animatedTooltip'
const Hero = () => {
  return (
      <>
          <GridBackgroundDemo/>
        <StickyScrollRevealDemo/>
        <div className="absolute left-12 -bottom-20 hidden sm:block">
       <AnimatedTooltipPreview/>
       </div>
      </>
      
    
  )
}

export default Hero