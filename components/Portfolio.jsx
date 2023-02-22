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


function Portfolio() {
  const projects = [
    {
      title:"e-commerce",
      img:ecommerce_img,
      description:"lorem",
      category:"full-stack project",
      color:"orange"
    },
    {
      title:"social media",
      img:sm_img,
      description:"lorem",
      category:"full-stack project",
      color:"yellow"
    },
    {
      title:"blog",
      img:blog_img,
      description:"lorem",
      category:"full-stack project",
      color:"green"
    },
    {
      title:"moz portfolio 1",
      img:portfolio_img,
      description:"lorem",
      category:"full-stack project",
      color:"red"
    },
    {
      title:"moz portfolio 2",
      img:portfolio_img,
      description:"lorem",
      category:"full-stack project",
      color:"sky"
    },
  ]
  return (
    <div className='animation-fadeUp w-screen  h-4/5 flex-center '>
      <div className="flex flex-col w-screen md:w-4/5 gap-x-4 h-96">
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
                    <SwiperSlide key={project._id} className="overflow-hidden rounded-2xl">
                      <div className="relative w-full ">
                        <div className={`w-full h-80 m-auto p-10 bg-gradient-to-l from-${project.color}-500 to-${project.color}-600 backdrop-blur-xl transition-all`}>
                          <Image 
                            src={project.img} 
                            className="w-full h-60 rounded-full object-contain shadow-2xl" 
                            alt="img" 
                          />
                        </div>
                        <div className="absolute bottom-5 left-5 bg-white/50 backdrop-blur-xl p-5 text-sm rounded-lg capitalize ">
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