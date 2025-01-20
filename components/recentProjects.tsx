import React from 'react';
import { PinContainer } from './ui/3d-pin';

const projects = [
  {
    id: 1,
    title: "TechVerse 3.0",
    des: "Website for college's Technical Fest.",
    mediaType: "video",
    src: "/tv3.mp4",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mongodb.svg", "/next.svg"],
    link: "https://tech-verse.tech/",
  },
  {
    id: 2,
    title: "ExZ2025",
    des: "Website for college's annual cultural fest.",
    mediaType: "video",
    src: "/exz25.mp4",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mongodb.svg"],
    link: "https://gnitculturalfest.com/",
  },
  {
    id: 3,
    title: "Event Management Platform",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    mediaType: "img",
    src: "/eventplanner360.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mongodb.svg", "/next.svg"],
    link: "https://github.com/Tiklu01/CBTC",
  },
  {
    id: 4,
    title: "Resume Red Flag Detector",
    des: "A resume checker which checks red flags in your resume.",
    mediaType: "video",
    src: "/ats.mov",
    iconLists: [ "/next.svg","/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://github.com/Tiklu01/Shirt-Customizer",
  },
  {
    id: 5,
    title: "Car Price Prediction Model",
    des: "This is a car price prediction model using regression and custom cost function.",
    mediaType: "img",
    src: "/ml.png",
    iconLists: ["/python.svg", "/jupyter.svg", "/numpy.svg", "/pandas.svg", "/matplotlib.svg", "/scikit-learn.svg"],
    link: "https://github.com/Tiklu01/carPricePredictionLinearRegression/blob/main/OutliersRemovedmodifiedCarsPricePrediction.ipynb",
  },
  {
    id: 6,
    title: "Shirt Customizer",
    des: "A 3D shirt customizer app using OpenAI's DALL.E API.",
    mediaType: "video",
    src: "/tshirt.mp4",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/node.svg"],
    link: "https://github.com/Tiklu01/Shirt-Customizer",
  },
];

export const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        A small selection of <span className="text-purple-200">Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, mediaType, src, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[25.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div
                className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
              >
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]"
                >
                  {mediaType === "img" ? (
                    <img
                      src={src}
                      alt={title}
                      className="z-10 absolute bottom-0"
                    />
                  ) : (
                    <video
                      src={src}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="z-10 absolute bottom-0 w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal line-clamp-2 font-light text-sm">
                {des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {iconLists.map((icon, index) => (
                    <div
                      key={icon}
                      className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index * 2}px)` }}
                    >
                      <img src={icon} alt={icon} className="p-2" />
                    </div>
                  ))}
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};
