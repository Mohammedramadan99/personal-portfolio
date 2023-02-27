"use client";
import { CursorContext } from '@/context/CursorContext';
import { transition1 } from '@/utils/transitions';
import {motion} from 'framer-motion'
import { useContext } from 'react'

function Button({content,setOpenModal}) {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)
  return (
    <motion.button 
      initial={{opacity:0, y:"-50%"}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y: "-50%"}}
      transition={transition1}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      className='btn main-btn capitalize hover:bg-white hover:text-main_color font-bold transition-all duration-300 ease-in' onClick={() => setOpenModal(true) }> 
      {content}
    </motion.button>
  )
}

export default Button