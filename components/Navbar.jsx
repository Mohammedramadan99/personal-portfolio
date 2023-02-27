import Link from 'next/link'
import React, { useContext, useState } from 'react'
import {motion} from 'framer-motion'
import { CursorContext } from '@/context/CursorContext'
import { transition1 } from '@/utils/transitions'
function Navbar({currentPage,setCurrentPage}) {
    const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
    const [links,setLinks] = useState([
        {
            title:"home",
        },
        {
            title:"about",
        },
        {
            title:"portfolio",
        },
        {
            title:"contact",
        },
    ])
  return (
    <nav className='p-5 flex flex-col gap-y-5 md:flex-row  justify-around items-center backdrop-blur-lg '>
        {/* logo */}
        <div className="font-semibold relative w-40 after:content-['Frontend_dev.'] after:absolute after:bottom-[-10px] after:left-0 after:text-xs after:text-main_color">
            Mo
        </div>

        {/* links */}
        <div className="flex gap-x-5 font-medium flex-wrap ">
            {links.map(l => (
                <motion.div
                    key={l.title} 
                    initial={{opacity:0, y:"-50%"}}
                    animate={{opacity:1, y:0}}
                    exit={{opacity:0, y: "-50%"}}
                    transition={transition1}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}
                    className={l.title === currentPage ?
                        `cursor-pointer text-main_color capitalize hover:text-main_color transition-all text-xs md:text-base` :
                        `cursor-pointer capitalize hover:text-main_color transition-all text-xs md:text-base`}
                    onClick={() => setCurrentPage(l.title)} >
                    {l.title}
                </motion.div>
            ))}
        </div>
    </nav>
  )
}

export default Navbar