"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,  } from "swiper";


import blog_img from '@/public/images/blog.png'
import ecommerce_img from '@/public/images/Ecommerce.png'
import portfolio_img from '@/public/images/portfolio.png'
import sm_img from '@/public/images/social_media.png'
import Image from "next/image";
import { useState } from "react";


function Portfolio() {
  const projects = [
    {
      title:"e-commerce",
      img:ecommerce_img,
      description:"lorem",
      category:"full-stack project",
      
      fromColor:"from-orange-300",
      toColor:"to-orange-400",
      color:"text-orange-600"
    },
    {
      title:"social media",
      img:sm_img,
      description:"lorem",
      category:"full-stack project",
      fromColor:"from-yellow-300",
      toColor:"to-yellow-400",
      color:"text-yellow-600"
    },
    {
      title:"blog",
      img:blog_img,
      description:"lorem",
      category:"full-stack project",
      fromColor:"from-green-300",
      toColor:"to-green-400",
      color:"text-green-600"
    },
    {
      title:"moz portfolio 1",
      img:portfolio_img,
      description:"lorem",
      category:"full-stack project",
      fromColor:"from-rose-300",
      toColor:"to-rose-400",
      color:"text-rose-600"
    },
    {
      title:"moz portfolio 2",
      img:portfolio_img,
      description:"lorem",
      category:"full-stack project",
      fromColor:"from-sky-300",
      toColor:"to-sky-400",
      color:"text-sky-600"
    },
  ]
  const [hoverItem,setHoverItem] = useState(false)
  return (
    <div className='animation-fadeUp w-screen  h-4/5 flex-center '>
      <div className="flex flex-col w-screen md:w-[90%] lg:w-4/5 gap-x-4 h-96">
        <h1 className='text-4xl font-extrabold capitalize'>creative <span className='text-main_color'>portfolio</span></h1>
        <div className="my-5">
        <Swiper 
                // slidesPerView={3}
                spaceBetween={30}
                slidesPerView={1}
                slidesPerGroup={1}
                navigation={true} 
                grabCursor={true}
                modules={[Navigation]}
                className=""
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
                    <SwiperSlide key={project._id} className="overflow-hidden rounded-xl ">
                      <div className={`group relative w-full h-full backdrop-blur-2xl p-10 bg-gradient-to-l ${project.fromColor} ${project.toColor} transition-all`}>
                        {/* bg-gradient-to-l from-${project.color}-500 to-${project.color}-600 */}
                        <div className={`w-full h-full m-auto  group-hover:scale-105  duration-700 ease-in-out rounded-3xl  shadow-2xl shadow-black/50`}>
                          <Image 
                            src={project.img} 
                            className="w-full h-full rounded-3xl object-contain blur-sm group-hover:blur-0 transition-all" 
                            alt="img" 
                          />
                        </div>
                        <div className={`absolute bottom-0 left-5 w-o opacity-0  ${project.color} bg-white backdrop-blur-xl font-semibold p-5 text-sm rounded-lg capitalize  duration-300 ease-in group-hover:opacity-100 group-hover:bottom-5`}>
                          <div className="">{project.category}</div>
                          <div className="">{project.title}</div>
                        </div>
                      </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Portfolio