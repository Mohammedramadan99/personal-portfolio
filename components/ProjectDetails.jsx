import { transition1 } from '@/utils/transitions'
import {motion} from 'framer-motion'
import Image from 'next/image'
function ProjectDetails({projectDetails}) {
  const {
    title,
    category,
    description,
    fromColor,
    toColor,
    color,
    techs,
    img,
    code,
    video,
    demo
  } = projectDetails
  return (
    <motion.div
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      exit={{opacity:0,scale:.1}}
      transition={transition1}
      // onMouseEnter={mouseEnterHandler}
      // onMouseLeave={mouseLeaveHandler}
      className={`absolute w-full h-full p-10 top-0 left-0 backdrop-blur-lg bg-neutral-800/80 z-50`}>
        <div className='w-full h-full flex items-center flex-wrap gap-x-6'>
          {/* image */}
          <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:.1}}
            transition={transition1}
            // onMouseEnter={mouseEnterHandler}
            // onMouseLeave={mouseLeaveHandler}
            className="md:flex-1 w-full h-full"
            >
              <Image src={img} alt="image" className='object-contain h-full' />
          </motion.div>

          {/* details */}
          <motion.div
            initial={{opacity:0,scale:0}}
            animate={{opacity:1,scale:1}}
            exit={{opacity:0,scale:.1}}
            transition={transition1}
            // onMouseEnter={mouseEnterHandler}
            // onMouseLeave={mouseLeaveHandler}
            className="md:flex-1 w-full h-full "
            >
              <div className="text-3xl capitalize font-bold mb-3"> {title} </div>
              <div>
                <p className=""> {description.p1} </p>
                <p className=""> {description.p2} </p>
              </div>
              <div className="flex gap-x-4 mt-4">
              {techs.map(item => <div key={item} className="select-none text-gray-400  text-md hover:text-gray-300 transition-all "> <span className='text-main_color font-bold'>{item[0]}</span>{item.slice(1)} </div>)}
              </div>
              {/* buttons */}
              <div className="flex flex-wrap my-6 gap-x-4">
                {/* {demo && <div className="px-10 py-3 bg-white/95 backdrop-blur-xl text-main_color font-bold capitalize rounded-lg hover:bg-white/90 transition-all">demo</div>} */}
                <div className="px-3 py-2 text-xs bg-white/95 backdrop-blur-xl text-main_color font-bold capitalize rounded-lg -skew-y-6 hover:bg-white/90 hover:-translate-y-2 transition-all">demo</div>
                <div className="px-3 py-2 text-xs bg-white/95 backdrop-blur-xl text-main_color font-bold capitalize rounded-lg -skew-y-6 hover:bg-white/90 hover:-translate-y-2 transition-all">github</div>
                {video && <div className="px-3 py-2 text-xs bg-white/95 backdrop-blur-xl text-main_color font-bold capitalize rounded-lg -skew-y-6 hover:bg-white/90 hover:-translate-y-2 transition-all">youtube</div>}
              </div>
          </motion.div>
        </div>
    </motion.div>
  )
}

export default ProjectDetails