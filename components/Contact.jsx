import React from 'react'
import {FaLocationArrow,FaPhone,FaLinkedin, FaGithub} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import Link from 'next/link'
function Contact() {
    const contactData = [
        {
            icon: <FaLocationArrow/>,
            title:"Cairo, Egypt",
            link: false
        },
        {
            icon: <FaPhone/>,
            title:"+201121090068",
            link: false
        },
        {
            icon: <AiFillMail/>,
            title:"ramadanmohammed502@gmail.com",
            link: false
        },
        {
            icon: <FaLinkedin/>,
            title:"mohammedramadan102104",
            link: true
        },
        {
            icon: <FaGithub/>,
            title:"mohammed ramadan",
            link: true
        },
    ]
  return (
    <div className='animation-fadeUp w-full h-[90vh] flex-center'>
        {/* Box */}
        <div className="flex">
            {/* Top */}
            <div className="flex gap-x-5">
                {contactData.map(item => {
                    if (item.link) {
                        return(
                            <Link href={`#`} key={item.title} className="group flex items-center gap-x-3">
                                <div className="text-main_color"> {item.icon} </div>
                                <div className="group-hover:text-main_color transition-all"> {item.title} </div>
                            </Link>
                        )
                    } else {
                        return (
                            <div key={item.title} className="group flex items-center gap-x-3">
                                <div className="text-main_color"> {item.icon} </div>
                                <div className="group-hover:text-main_color transition-all"> {item.title} </div>
                            </div>
                        )
                    }
                })}
            </div>
            {/* Bottom */}
            <div className=""></div>
        </div>
    </div>
  )
}

export default Contact