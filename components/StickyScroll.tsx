"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Fullstack Development",
description: "As a Fullstack Developer immersed in the MERN stack (MongoDB, Express.js, React, Node.js), I thrive on crafting robust and scalable web applications. From concept to deployment, I love weaving together dynamic, responsive interfaces with powerful backend functionalities that elevate user experiences. On the side, I'm diving into Django for Python-based web magic and mastering SQL to tame relational databases. Always hungry for new challenges, I'm on a quest to blend creativity with code, delivering innovative solutions that make a real impact.",

      content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/fullstack.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            priority={true}
            alt="Full Stack Engineer"
          />
        </div>
    ),
  },
  {
    title: "Machine Learning Enthusiast",
    description: "As a beginner in Machine Learning, I am starting to explore algorithms, data analysis, and model building. My journey involves learning the basics of machine learning techniques and familiarizing myself with libraries and frameworks such as TensorFlow, scikit-learn, NumPy for numerical computations, Pandas for data manipulation and analysis, Matplotlib for data visualization, and PyTorch for deep learning. I am eager to apply these new skills to solve simple problems and gradually build my expertise in this exciting field.",


    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ml.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Machine learning"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
    "Skilled in version control systems, particularly Git, I efficiently manage and track changes in codebases. My expertise includes branching strategies, merging, conflict resolution, and collaboration on platforms like GitHub and GitLab. These skills ensure code integrity, streamlined workflows, and effective team collaboration on development projects.",
    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/git.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Git & GitHub"
        />
      </div>
    ),
  },
  {
    title: "Exploring IOS development with Swift",
    description:
    "Currently  learning iOS development on side, I am acquiring skills in building applications for Apple devices. This journey involves understanding Apple's ecosystem, mastering Xcode, and learning the principles of mobile app design and development. My goal is to create seamless and intuitive user experiences for iOS users.",
  content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/ios.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Swift Developer"
        />
      </div>
    ),
  },
  {
    title: "Musician",
    description:
    "A passionate musician, I play the guitar and ukulele. This artistic endeavor brings creativity and discipline to my professional work, enhancing my problem-solving skills and ability to think outside the box.",

    content: (
        <div className="h-full w-full  flex items-center justify-center text-white">
          <Image
            src="/music.jpg"
            width={300}
            height={300}
            className="h-full w-full object-cover"
            alt="Music is life"
          />
        </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <StickyScroll content={content} />
    </div>
  );
}
