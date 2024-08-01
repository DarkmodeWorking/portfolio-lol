import { AnimatedTooltipPreview } from "@/components/animatedTooltip";
import ContactForm from "@/components/ContactForm";
import Hero from "@/components/Hero";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";
import { RecentProjects } from "@/components/ui/recentProjects";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relatice flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"> 
          <Hero/> 
          <RecentProjects/>
          <StickyScrollRevealDemo/>
          <ContactForm/> 
    </main>
  );
}
 