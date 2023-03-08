import { transition1 } from '@/utils/transitions'
import {motion} from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
function ProjectDetails({projectDetails,showDetails,setShowDetails}) {
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
  console.log({showDetails,projectDetails})
  return (
    <div className={`absolute ${showDetails === "hide" ? 'hide' : showDetails === "show" ? 'open bg-neutral-800/80' : "hidden"}  text-white backdrop-blur-sm  z-50 overflow-x-hidden overflow-y-auto p-10`}>
      <motion.div
        initial={{opacity:0,scale:0}}
        animate={{opacity:1,scale:1}}
        exit={{opacity:0,scale:.1}}
        transition={transition1}
        // onMouseEnter={mouseEnterHandler}
        // onMouseLeave={mouseLeaveHandler}
        className={``}>
          {/* close */}
          <div className="zoomIn cursor-pointer border p-2 rounded-full w-fit mx-auto my-4" onClick={ () => setShowDetails("hide") }>
            <span>X</span>
          </div>
          <div className='w-full flex items-center flex-wrap gap-x-6'>
            {/* image */}
            <motion.div
              initial={{opacity:0,scale:0}}
              animate={{opacity:1,scale:1}}
              exit={{opacity:0,scale:.1}}
              transition={transition1}
              // onMouseEnter={mouseEnterHandler}
              // onMouseLeave={mouseLeaveHandler}
              className="relative md:flex-1 w-full h-[200px] max-h-[300px] sm:h-[300px] "
              >
                <Image src={img} alt="image" fill={true} className='object-contain w-full h-full' />
            </motion.div>

            {/* details */}
            <motion.div
              initial={{opacity:0,scale:0}}
              animate={{opacity:1,scale:1}}
              exit={{opacity:0,scale:.1}}
              transition={transition1}
              // onMouseEnter={mouseEnterHandler}
              // onMouseLeave={mouseLeaveHandler}
              className="md:flex-1 w-full h-full"
              >
                <div className="md:text-3xl mt-5 sm:text-lg capitalize font-bold mb-3  "> {title} </div>
                <div className='text-sm my-5'>
                  <p className=""> {description?.p1} </p>
                  <p className=""> {description?.p2} </p>
                </div>
                <div className="flex flex-wrap gap-4 sm:mt-4">
                {techs?.map(item => <div key={item} className="select-none text-gray-400  text-md hover:text-gray-300 transition-all "> <span className='text-main_color font-bold'>{item[0]}</span>{item.slice(1)} </div>)}
                </div>
                {/* buttons */}
                <div className="flex flex-wrap my-6 gap-x-4">
                  {/* {demo && <div className="px-10 py-3 bg-white/95 backdrop-blur-xl text-main_color font-bold capitalize rounded-lg hover:bg-white/90 transition-all">demo</div>} */}
                  {demo && <Link href={demo} className="px-3 py-2 text-xs bg-white/95 backdrop-blur-xl text-main_color font-bold capitalize rounded-lg -skew-y-6 hover:bg-white/90 hover:-translate-y-2 transition-all">demo</Link>}
                  {code && <Link href={code} className="px-3 py-2 text-xs bg-white/95 backdrop-blur-xl text-main_color font-bold capitalize rounded-lg -skew-y-6 hover:bg-white/90 hover:-translate-y-2 transition-all">github</Link>}
                  {video && <Link href={video} className="px-3 py-2 text-xs bg-white/95 backdrop-blur-xl text-main_color font-bold capitalize rounded-lg -skew-y-6 hover:bg-white/90 hover:-translate-y-2 transition-all">youtube</Link>}
                </div>
            </motion.div>
          </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails