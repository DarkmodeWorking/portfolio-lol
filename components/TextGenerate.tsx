"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `Hi, i'm Nanda your friendly neighbourhood developer, musician and innovator`;
export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="text-xs" />;
}
