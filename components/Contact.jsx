import React, { useEffect, useState } from 'react'
import {FaLocationArrow,FaPhone,FaLinkedin, FaGithub} from 'react-icons/fa'
import {AiFillMail} from 'react-icons/ai'
import Link from 'next/link'
import axios from 'axios'

const origin =
  typeof window !== "undefined" && window.location.origin
    ? window.location.origin
    : "";

function Contact({currentPage,setCurrentPage}) {
    const [formData,setFormData] = useState({
        name:"",
        email:"",
        message:"",
    })
    const [success, setSuccess] = useState(false)
    const [alert,setAlert] = useState('')
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
    // functions 
    const onChangeHandler = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value})
    }
    const submitHandler = async e => {
        e.preventDefault()
        try {
            const {email,name,message} = formData
            if(email === "" || name === "" || message === "" ){
                setAlert("please fill all fields")
            } else {
                const config = {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  };
                const {data} = await axios.post(`${origin}/api/contact`,formData,config)
                console.log({data})
                setSuccess(data.success)
                
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
      if (success) {
        setAlert("")
        setSuccess(false)
        setCurrentPage('home')
      }
    }, [success])
    
    
  return (
    <div className='animation-fadeUp w-full h-[90vh] flex-center p-5'>
        {/* Box */}
        <div className="flex flex-col gap-y-3">
            {/* Top */}
            <div className="flex flex-wrap gap-10 bg-slate-900/20 backdrop-blur-xl p-6">
                {contactData.map(item => {
                    if (item.link) {
                        return(
                            <Link href={`#`} key={item.title} className="group flex items-center gap-x-3 text-xs md:text-base">
                                <div className="text-main_color"> {item.icon} </div>
                                <div className="group-hover:text-main_color transition-all"> {item.title} </div>
                            </Link>
                        )
                    } else {
                        return (
                            <div key={item.title} className="group flex items-center gap-x-3 text-xs md:text-base">
                                <div className="text-main_color"> {item.icon} </div>
                                <div className="group-hover:text-main_color transition-all"> {item.title} </div>
                            </div>
                        )
                    }
                })}
            </div>
            {/* Bottom */}
            <div className="mt-5">
                {alert !== "" && <div className='absolute top-20 left-20 px-6 py-4 capitalize bg-main_color/50 text-slate-200 rounded-3xl'> {alert} </div>}
                <form className='flex flex-wrap items-center gap-5' onSubmit={submitHandler}>
                    <div className='flex flex-col gap-y-5'>
                        <input type="text" value={formData.name} name='name' className='p-3 text-slate-200 bg-slate-900/20 focus:bg-slate-900/50 transition-all focus:scale-x-105 backdrop-blur-xl rounded-xl md:w-72 w-full placeholder:text-slate-400 ' placeholder='name' onChange={onChangeHandler} />
                        <input type="text" value={formData.email} name='email' className='p-3 text-slate-200 bg-slate-900/20 focus:bg-slate-900/50 transition-all focus:scale-x-105 backdrop-blur-xl rounded-xl md:w-72 w-full placeholder:text-slate-400 ' placeholder='email' onChange={onChangeHandler} />
                    </div>
                    <div>
                        <textarea name='message' value={formData.message} className='h-full p-3 text-slate-200 bg-slate-900/20 focus:bg-slate-900/50 transition-all focus:scale-x-105 backdrop-blur-xl rounded-xl placeholder:text-slate-400  max-h-24 md:w-72 w-full' placeholder='message' onChange={onChangeHandler}/>
                    </div>
                    {success ? (
                        <div className='px-10 bg-green-500 text-green-900 rounded-lg capitalize'>Thanks</div>
                    ) : (
                        <input type="submit" value="send" className='px-10 bg-main_color/50 rounded-lg capitalize'/>
                    )}
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact