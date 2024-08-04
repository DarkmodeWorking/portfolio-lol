import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/toggle";
import { FloatingNav } from "@/components/ui/floating-navbar";
import FloatingNavbar from "@/components/FloatingNavbar";
import { AnimatedTooltipPreview } from "@/components/animatedTooltip";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nanda's Portfolio",
  description: "Nanda's Mordern Responsive portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" >
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          > 
            <FloatingNavbar/>
            {children}
            <div className="absolute right-2 top-2">
            <ModeToggle/>
            </div >
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}