import React from 'react'

function Home() {
  return (
    <div className='animation-fadeUp w-full h-4/5 flex-center'>
        <div className="flex flex-col items-center">
            <h1 className='capitalize font-black text-5xl'>
                mohammed <span className='text-red-600'>ramadan</span>
            </h1>
            <div className="py-10 text-4xl capitalize text-center">
                <span className='text-gray-300'>creative</span> <span className='ani inline-block font-black'> frontend developer </span>
            </div>
            <button className='btn main-btn capitalize'> hire me </button>
        </div>
    </div>
  )
}

export default Home