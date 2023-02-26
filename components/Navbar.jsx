import Link from 'next/link'
import React, { useState } from 'react'

function Navbar({currentPage,setCurrentPage}) {
    const [links,setLinks] = useState([
        {
            title:"home",
        },
        {
            title:"about",
        },
        {
            title:"portfolio",
        },
        {
            title:"contact",
        },
    ])
  return (
    <nav className='p-5 flex flex-col gap-y-5 md:flex-row  justify-around items-center backdrop-blur-lg '>
        {/* logo */}
        <div className="font-semibold relative w-40 after:content-['Frontend_dev.'] after:absolute after:bottom-[-10px] after:left-0 after:text-xs after:text-main_color">
            Mo
        </div>

        {/* links */}
        <div className="flex gap-x-5 font-medium flex-wrap ">
            {links.map(l => (
                <Link
                    key={l.title} 
                    href='#'
                    className={l.title === currentPage ?
                        `cursor-pointer text-main_color capitalize hover:text-main_color transition-all text-xs md:text-base` :
                        `cursor-pointer capitalize hover:text-main_color transition-all text-xs md:text-base`}
                    onClick={() => setCurrentPage(l.title)} >
                    {l.title}
                </Link>
            ))}
        </div>
    </nav>
  )
}

export default Navbar