import React from 'react'
import { div } from 'three/examples/jsm/nodes/Nodes.js';
import { PinContainer } from './3d-pin';
import { link } from 'fs';
const projects = [
    {
      id: 1,
      title: "Event management platform",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/eventplanner360.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/mongodb.svg", "/next.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Car Price Prediction model",
      des: "this is a car price prediction model using rear, regression, and custom cost function and gradient decent mainly used for learning purposes",
      img: "/ml.png",
      iconLists: ["/python.svg", "/jupyter.svg", "/numpy.svg", "/pandas.svg", "/matplotlib.svg","/scikit-learn.svg"],
      link: "https://github.com/Tiklu01/carPricePredictionLinearRegression/blob/main/OutliersRemovedmodifiedCarsPricePrediction.ipynb",
    },
    {
      id: 3,
      title: "Shirt Customizer",
      des: "A 3D shirt Customizer app using OpenAI's DALL.E API",
      img: "/shirt.png",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/node.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    // {
    //   id: 4,
    //   title: "Animated Apple Iphone 3D Website",
    //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //   img: "/profile1.png",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/python.svg",],
    //   link: "https://github.com/adrianhajdin/iphone",
    // },
  ];
export const RecentProjects = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            A small selection of {' '}
            <span className='text-purple-200'> Recent Projects</span>
        </h1>
        <div className='flex flex-wrap items-center justify-center
        p-4 gap-16 mt-10'>
            {
                projects.map(({id,title,des,img,iconLists,link})=>(
                 <div key={id} className='lg:min-h-[25.5rem] 
                 h-[25rem] flex items-center justify-center
                 sm:w-96 w-[80vw]'>
                    <PinContainer title={title} href={link}>
                        <div className='relative flex items-center justify-center
                        sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10'>
                            <div className='relative w-full h-full 
                            overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                                {/* <img src="/profile1.png" alt="alt" /> */}
                            </div>
                            <img src={img} alt={title}
                            className='z-10 absolute bottom-0' />
                        </div>
                        <h1 className='font-bold lg:text-2xl
                        md:text-xl text-base line-clamp-1'>
                            {title}
                        </h1>
                        <p className='lg:text-xl lg:font-normal 
                        line-clamp-2 font-light text-sm
                        '>
                            {des}
                        </p>
                        <div className='flex items-center
                        justify-between mt-7 mb-3'>
                            <div className='flex items-center'>
                                {iconLists.map((icon,index)=>(
                                   <div key={icon} className='border border-white/[0.2] rounded-full
                                    bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center
                                    ' style={{transform:`translateX(-${5*index*2}px)`}}>
                                    <img src={icon} alt={icon} className='p-2' />
                                   </div>
                                ))}
                            </div>
                        </div>
                    </PinContainer>
                 </div>
                ))
            }
        </div>
    </div>
  )
}
