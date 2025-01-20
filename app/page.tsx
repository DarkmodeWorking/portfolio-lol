import { AnimatedTooltipPreview } from "@/components/animatedTooltip";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { MusicCard } from "@/components/MusicCard";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";
import { RecentProjects } from "@/components/recentProjects";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { LampAndMusic } from "@/components/ui/lamp";
import Image from "next/image";
import { TimelineJourney } from "@/components/TimelineJourney";
import { Robo } from "@/components/Robot";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="relatice flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
          <Hero/> 
          <div className="relative w-full hidden sm:block">
            <Robo/>
          </div>
          
          {/* <div className="relative min-h-screen  w-full">
            <LampAndMusic />
         <div className="absolute inset-x-0 bottom-10 flex justify-center">
          <div className="relative z-20 sm:w-[35vw] lg:w-[35vw] ">
          <MusicCard />
         </div>
       </div>
        </div> */}
          <RecentProjects/>
          <Skills/>
          <TimelineJourney/>
          <StickyScrollRevealDemo/>
          <ContactForm/> 
    </main>
  );
}
 