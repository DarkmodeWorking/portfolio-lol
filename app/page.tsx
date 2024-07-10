import { AnimatedTooltipPreview } from "@/components/animatedTooltip";
import { GridBackgroundDemo } from "@/components/GridBackground";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        {/* <div className=""> */}
          <GridBackgroundDemo/>
        {/* </div> */}
    </main>
  );
}
 