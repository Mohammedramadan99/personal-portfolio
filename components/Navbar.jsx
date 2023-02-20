import React from 'react'

function Navbar() {
  return (
    <div className='p-5 flex justify-around items-center backdrop-blur-lg'>
        {/* logo */}
        <div className="font-semibold relative after:content-['Frontend'] after:absolute after:bottom-[-10px] after:left-0 after:text-xs after:text-red-600">
            Mohammed Ramadan 
        </div>

        {/* links */}
        <ul className="flex gap-x-5 font-semibold ">
            <li className='cursor-pointer capitalize hover:text-red-600 transition-all '>
                home
            </li>
            <li className='cursor-pointer capitalize hover:text-red-600 transition-all '>
                about
            </li>
            <li className='cursor-pointer capitalize hover:text-red-600 transition-all '>
                portfolio
            </li>
            <li className='cursor-pointer capitalize hover:text-red-600 transition-all '>
                contact
            </li>
            
        </ul>
    </div>
  )
}

export default Navbar