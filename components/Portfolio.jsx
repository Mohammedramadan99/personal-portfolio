"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation  } from "swiper";


import blog_img from '@/public/images/blog.png'
import ecommerce_img from '@/public/images/Ecommerce.png'
import portfolio_img from '@/public/images/portfolio.png'
import sm_img from '@/public/images/social_media.png'
import Image from "next/image";
import { useContext, useState } from "react";
import {motion} from 'framer-motion' 
import { CursorContext } from "@/context/CursorContext";
import { transition1 } from "@/utils/transitions";
import Link from "next/link";
import ProjectDetails from "./ProjectDetails";

function Portfolio() {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  const projects = [
    {
      title:"e-commerce",
      img:ecommerce_img,
      description:{
        p1:"e-commerce website with Dashboard based on Modern design with React Next.js aiming at high code quality & SEO",
        p2:"we have secure payment and wonderful dashboard for Admin that show you how your store is performing in the previous month , the Latest Transactions and more"
      },
      category:"full-stack project",
      techs:["Next.js","Sass","Node.js","MongoDB","MUI Tables"],
      fromColor:"from-orange-400",
      toColor:"to-orange-500",
      color:"text-orange-600",
      bg:"bg-orange-600/10",
      rotate:"img_container_rotate1",
      code:"code",
      demo:"s",
      video:"s"
    },
    {
      title:"social media",
      img:sm_img,
      description:{
        p1:"Social media website with Modern interactive design with React Next.js aiming at high code quality & SEO.",
        p2:"you have the ability to post and interact with others, add comments, follow and more"
      },
      category:"full-stack project",
      techs:["Next.js","Sass","Node.js","MongoDB"],
      fromColor:"from-yellow-400",
      toColor:"to-yellow-500",
      color:"text-yellow-600",
      bg:"bg-yellow-600/10",
      rotate:"img_container_rotate3",
      code:"",
      demo:"",
      video:""
    },
    {
      title:"blog",
      img:blog_img,
      description:{},
      category:"full-stack project",
      techs:["Next.js","Sass","Node.js","MongoDB"],
      fromColor:"from-green-400",
      toColor:"to-green-500",
      color:"text-green-600",
      bg:"bg-green-600/10",
      rotate:"img_container_rotate2",
      code:"",
      demo:"",
      video:""
    },
    {
      title:"moz portfolio 1",
      img:portfolio_img,
      description:{
        p1:"portfolio website that represents skills, projects, and about page to introduce yourself"
      },
      category:"full-stack project",
      techs:["Next.js","Sass","Node.js","MongoDB"],
      fromColor:"from-rose-400",
      toColor:"to-rose-500",
      color:"text-rose-600",
      bg:"bg-rose-600/10",
      rotate:"img_container_rotate3",
      code:"",
      demo:"",
      video:""
    },
    
    {
      title:"moz portfolio 2",
      img:portfolio_img,
      description:{},
      category:"full-stack project",
      techs:["Next.js","Sass","Node.js","MongoDB"],
      fromColor:"from-sky-400",
      toColor:"to-sky-500",
      color:"text-sky-600",
      bg:"bg-sky-600/10",
      rotate:"img_container_rotate2",
      code:"",
      demo:"",
      video:""
    },
  ]

  
  const [showDetails,setShowDetails] = useState("none")
  const [projectDetails,setProjectDetails] = useState({})
  const showDetailsHandler = project => {
    setShowDetails("show")
    setProjectDetails(project)
  }
  return (
    <div className='animation-fadeUp w-screen relative  h-4/5 flex-center'>
      <div className="flex flex-col w-screen md:w-[90%] lg:w-4/5 gap-x-4 h-96">
        <h1 className='text-3xl font-extrabold capitalize'>creative <span className='text-main_color'>portfolio</span></h1>
        <div className="mt-20">
        <Swiper
                // slidesPerView={3}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={true} 
                grabCursor={true}
                modules={[Navigation]}
                breakpoints={{
                    640:{
                      slidesPerView:2,
                      spaceBetween:10
                    },
                    768:{
                      slidesPerView:3,
                      spaceBetween:20
                    },
                    1024:{
                      slidesPerView:3,
                      spaceBetween:30
                    }
                  }}          
            >
                {projects?.map(project => (
                    <SwiperSlide key={project.title} className="overflow-hidden rounded-xl bg-transparent">
                      <motion.div
                      initial={{opacity:0,scale:0}}
                      animate={{opacity:1,scale:1}}
                      exit={{opacity:0,scale:.1}}
                      transition={transition1}
                      onMouseEnter={mouseEnterHandler}
                      onMouseLeave={mouseLeaveHandler}
                      className={`group w-full h-full p-10 ${project.bg} backdrop-blur-lg `}
                      onClick={() => showDetailsHandler(project)}
                      >
                        {/* bg-gradient-to-l from-${project.color}-500 to-${project.color}-600 */}
                        <div className={`img_container ${project.rotate} relative w-full h-full m-auto duration-700 ease-in-out rounded-3xl  shadow-2xl shadow-black/50 before:absolute before:z-10 before:rounded-xl before:blur-xl`}>
                          <Image 
                            src={project.img}
                            className="w-full h-full rounded-xl object-contain group-hover:blur-0 transition-all" 
                            alt="img" 
                          />
                        </div>
                        <div className={`absolute bottom-0 left-5 opacity-0 ${project.bg} text-white  backdrop-blur-xl p-5 text-sm rounded-lg capitalize duration-200 ease group-hover:opacity-100 group-hover:bottom-5 font-bold`}>
                          <div className="">{project.category}</div>
                          <div className={`${project.color}`}>{project.title}</div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ProjectDetails showDetails={showDetails} setShowDetails={setShowDetails} projectDetails={projectDetails} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio