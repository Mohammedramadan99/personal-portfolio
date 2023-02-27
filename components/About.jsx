"use client";

import Image from 'next/image'
import React, { useContext, useState } from 'react'
import myImage from '../public/images/me_1.png'
import AboutModal from './Modal/AboutModal'
import Button from './Button'
import {motion} from 'framer-motion'
import Name from './Name'
import { CursorContext } from '@/context/CursorContext';
import { transition1 } from '@/utils/transitions';
function About() {
  const [openModal,setOpenModal] = useState(false)
  return (
    <div className="animation-fadeUp h-full flex xs:items-start justify-center md:items-center">
      <div className="flex flex-wrap md:w-4/5 gap-x-4">
        {/* image */}
        <motion.div
          initial={{opacity:0, y:"100%"}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y: "100%"}}
          transition={transition1}
          className="w-full h-[400px] lg:flex-1 relative bg-neutral-900 flex-center rounded-2xl overflow-hidden"
          >
          <Image src={myImage} className="absolute -bottom-10 w-full h-full object-contain mix-blend-lighten" alt="img" />
        </motion.div>
        {/* text */}
        <div className=" md:flex-1 backdrop-blur-3xl p-5 py-10">
          <Name nameSize="lg:text-4xl" nameStyle="" titleSize="2xl" titleStyle="py-5" />
          <div className="py-5 text-neutral-400 text-sm font-semibold leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus rerum sunt perferendis minus consectetur. Quia ab amet unde quidem, sunt mollitia commodi sit molestias officia beatae quod magni accusantium!</div>
          <Button content="portfolio" setOpenModal={setOpenModal}/>
        </div>
      </div>
      {openModal && <AboutModal openModal={openModal} setOpenModal={setOpenModal} /> }
    </div>
  )
}

export default About