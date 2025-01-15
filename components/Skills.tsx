import { IconCloud } from "@/components/ui/interactive-icon-cloud"

const slugs = [
  "typescript",
  "javascript",
  "swift",
  "react",
  "ios",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "postgresql",
  "mongodb",
  "cplusplus",
  "vercel",
  "docker",
  "git",
  "github",
  "xcode",
  "postman",
  "python",
  "jupyter",
  "tailwindcss",
  "django",
  "linux",
  "shell",
  "macos",
]

export function Skills() {
  return (
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg  bg-background px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  )
}
