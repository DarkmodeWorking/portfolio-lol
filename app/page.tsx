import { AnimatedTooltipPreview } from "@/components/animatedTooltip";
import { GridBackgroundDemo } from "@/components/GridBackground";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"> 
          <GridBackgroundDemo/>
          <StickyScrollRevealDemo/>
    </main>
  );
}
 