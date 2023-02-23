import React from 'react'
function Skills() {
    const skills = {
        frontend:["HTML","CSS","Sass","Tailwind CSS","Bootstrap","Javascript","React.js","Next.js"],
        backend:["Node.js","Express.js","MongoDb","Mongoose","Rest API"]
      }
  return (
    <>
        {/* Heading */}
        <h1 className="text-lg font-bold uppercase border-b border-gray-600 w-fit pb-2">Prog<span className='text-main_color'>ram</span>ming Sk<span className='text-main_color'>ill</span>s</h1>
        {/* Skills */}
        <div className="flex flex-col gap-y-7 flex-wrap my-5">
            <div className="group flex gap-x-5">
            <div className="capitalize font-bold"> fro<span className='group-hover:text-main_color transition-all'>nt</span>end </div> 
            <div className="flex flex-wrap gap-5">
                {skills.frontend.map(item => <div key={item} className="select-none text-gray-400  text-md hover:text-gray-300 transition-all "> <span className='text-main_color font-bold'>{item[0]}</span>{item.slice(1)} </div>)}
            </div>
            </div>
            <div className="group flex gap-x-5">
            <div className='capitalize font-bold '> ba<span className='group-hover:text-main_color transition-all'>ck</span>end </div>
            <div className="flex flex-wrap gap-5">
                {skills.backend.map(item => <div key={item} className="select-none text-gray-400  text-md hover:text-gray-300 transition-all "> <span className='text-main_color font-bold'>{item[0]}</span>{item.slice(1)} </div>)}
            </div>
            </div>
        </div>
    </>
  )
}

export default Skills