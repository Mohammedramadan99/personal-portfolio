import React from 'react'

function Name({nameSize,nameStyle,titleSize,titleStyle}) {
  return (
    <>
        <h1 className={`uppercase font-black text-${nameSize ? nameSize : "5xl"}  leading-5 ${nameStyle}`}>
            mohammed <span className='text-main_color'>ramadan</span>
        </h1>
        <div className={`text-${titleSize ? titleSize : "4xl"} capitalize ${titleStyle}`}>
            <span className='text-neutral-300'>creative</span> <span className='ani inline-block font-black'> frontend developer </span>
        </div>
    </>
    
  )
}

export default Name