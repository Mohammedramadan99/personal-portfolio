import React from 'react'

function Name({nameSize,nameStyle,titleSize,titleStyle}) {
  return (
    <>
        <h1 className={`uppercase font-black text-lg ${nameSize ? nameSize:" lg:text-5xl"} leading-5 ${nameStyle && nameStyle} `}>
          mohammed <span className='text-main_color'>ramadan</span>
        </h1>
        <div className={`text-base lg:text-${titleSize ? titleSize : "4xl"} capitalize ${titleStyle}`}>
            <span className='text-neutral-300'>creative</span> <span className='ani inline-block font-black'> frontend developer </span>
        </div>
    </>
    
  )
}

export default Name