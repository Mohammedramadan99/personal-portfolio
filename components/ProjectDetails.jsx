import { transition1 } from '@/utils/transitions'
import {motion} from 'framer-motion'
function ProjectDetails({projectDetails}) {
  return (
    <motion.div
      initial={{opacity:0,scale:0}}
      animate={{opacity:1,scale:1}}
      exit={{opacity:0,scale:.1}}
      transition={transition1}
      // onMouseEnter={mouseEnterHandler}
      // onMouseLeave={mouseLeaveHandler}
      className={`absolute w-full h-full p-10 top-0 left-0 backdrop-blur-lg bg-neutral-800/80 z-50`}>
        {projectDetails?.description}
    </motion.div>
  )
}

export default ProjectDetails