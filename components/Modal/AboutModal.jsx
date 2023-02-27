import Image from 'next/image'
import React, { useState } from 'react'
import Name from '../Name'
import myImage from '../../public/images/me_1.png'
import Skills from './Skills'
import Certifications from './Certifications'
function AboutModal({openModal,setOpenModal}) {
  const [name,setName] = useState('mohammed')  
  return (
    <div className={`absolute ${openModal ? "open" : "close"} bg-black/80 text-white backdrop-blur-sm w-[90%] h-[80%] overflow-x-hidden overflow-y-auto p-10`}>
        {/* top */}
        <div className="relative w-full mb-10">
            <div className="flex justify-between items-center w-full">
                {/* image */}
                <div className="flex flex-col lg:flex-row justify-between items-center w-full gap-x-5 mb-10 sticky">
                  <div className="relative flex-center w-14 h-14  rounded-2xl overflow-hidden">
                    <Image src={myImage} className=" w-14 h-14 object-cover mix-blend-lighten rounded-full" alt="img" />
                  </div>
                  {/* text */}
                  <div className="flex-1">
                    <Name nameSize="lg:text-2xl" nameStyle="pb-2" titleSize="lg" />
                  </div>
                </div>
                {/* close */}
                <div
                    className="close-icon cursor-pointer w-8 h-14 relative border p-2 rounded-full border-b-8 hover:border-main_color  transition-all"
                    onClick={() => setOpenModal(false)}
                ></div>
            </div>
            <div className="py-5text-sm font-semibold leading-7 text-gray-400 selection:bg-main_color selection:text-gray-200">
              I am a Front End Developer who enjoys working in a team that supports continuous learning and strives for high-quality work. I am constantly working to improve my skills. building dynamic web projects and Developing UI design I am focusing on implementing clean code and easy to read at a glance. So I am always seeking to have an opportunity that matches my skills, to make the best use of all what I have learned.
            </div>
        </div>
        {/* bottom */}
        <div className="flex">
          <div className="flex-1">
            {/* skills section */}
            <Skills/>
            {/* certifications section */}
            <Certifications/>
          </div>
       
        </div>
    </div>
  )
}

export default AboutModal