'use client';

import { transition1 } from '@/utils/transitions';
import {motion} from 'framer-motion'
function Certifications() {
  const certifications = ["React Basics","React Advanced"]
  return (
    <motion.div 
        initial={{opacity:0, x:"50%",scale:0}}
        animate={{opacity:1, x:0,scale:1}}
        exit={{opacity:0, x: "50%",scale:0}}
        transition={transition1}
    >
        {/* section title */}
        <h1 className="text-lg font-bold uppercase border-b border-gray-600 w-fit pb-2 pt-5">certifi<span className='text-main_color'>cat</span>ions</h1>
        {/* certifications */}
        <div className="flex">
            <div className="relative">
                {certifications.map(item => <div
                 key={item}
                 className="before:absolute before:w-2 before:h-2 before:mt-2 before:left-1 before:bg-main_color before:rounded-full pl-10 mt-5"
                 >
                    {item}
                </div>)}
            </div>
        </div>
    </motion.div> 
  )
}

export default Certifications 