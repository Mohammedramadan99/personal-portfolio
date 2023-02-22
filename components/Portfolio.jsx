"use client";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation,  } from "swiper";


import blog_img from '@/public/images/blog.png'
import Image from "next/image";


function Portfolio() {
  const projects = [
    {
      title:"e-commerce",
      img:blog_img,
      description:"lorem",
      category:"full-stack project"
    },
    {
      title:"social media",
      img:blog_img,
      description:"lorem",
      category:"full-stack project"
    },
    {
      title:"blog",
      img:blog_img,
      description:"lorem",
      category:"full-stack project"
    },
    {
      title:"moz portfolio 1",
      img:blog_img,
      description:"lorem",
      category:"full-stack project"
    },
    {
      title:"moz portfolio 2",
      img:blog_img,
      description:"lorem",
      category:"full-stack project"
    },
  ]
  return (
    <div className='animation-fadeUp w-screen  h-4/5 flex-center '>
      <div className="flex flex-col w-screen md:w-4/5 gap-x-4 h-96">
        <h1 className='text-4xl font-extrabold capitalize'>creative <span className='text-main_color'>portfolio</span></h1>
        <div className="">
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
                    <SwiperSlide key={project._id}>
                      <div className="item w-full bg-green-500 relative">
                        <div className="w-2/3">
                          <Image src={project.img} className="w-full h-20 object-contain" alt="img" />
                        </div>
                        <div className="h-20 w-10"> {project.title}s sd </div>
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