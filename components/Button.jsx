import React from 'react'

function Button({content,setOpenModal}) {
  return (
    <button className='btn main-btn capitalize hover:bg-white hover:text-main_color font-bold transition-all duration-300 ease-in' onClick={() => setOpenModal(true) }> {content} </button>
  )
}

export default Button