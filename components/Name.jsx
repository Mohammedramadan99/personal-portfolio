import { CursorContext } from '@/context/CursorContext'
import { transition1 } from '@/utils/transitions'
import {motion} from 'framer-motion'
import { useContext } from 'react'

function Name({nameSize,nameStyle,titleSize,titleStyle}) {
  const {mouseEnterHandler,mouseLeaveHandler} = useContext(CursorContext)

  return (
    <>
        <motion.h1
          initial={{opacity:0, y:"-50%"}}
          animate={{opacity:1, y:0}}
          exit={{opacity:0, y: "-50%"}}
          transition={transition1}
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}
            className={`uppercase font-black text-lg ${nameSize ? nameSize:" lg:text-5xl"} leading-5 ${nameStyle && nameStyle} `}
          >
          mohammed <span className='text-main_color'>ramadan</span>
        </motion.h1>
        <div className={`text-base lg:text-${titleSize ? titleSize : "4xl"} capitalize ${titleStyle}`}>
            <span className='text-neutral-300'>creative</span> <span className='ani inline-block font-black'> frontend developer </span>
        </div>
    </>
    
  )
}

export default Name