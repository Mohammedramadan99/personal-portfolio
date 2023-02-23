import Image from 'next/image'
import React from 'react'
import Name from './Name'
import myImage from '../public/images/me_1.png'

function AboutModal({openModal,setOpenModal}) {
  return (
    <div className={`absolute ${openModal ? "open" : "close"} bg-black/80 text-white backdrop-blur-sm w-[90%] h-[90%]`}>
        <div className="relative w-full h-full p-10">
            <div
                className="cursor-pointer absolute t-10 -right-10"
                onClick={() => setOpenModal(false)}
            >X</div>
            {/* image */}
            <div className="flex items-center w-1/2 gap-x-5 mb-10">
                <div className=" relative flex-center w-14 h-14  rounded-2xl overflow-hidden">
                <Image src={myImage} className=" w-14 h-14 object-cover mix-blend-lighten rounded-full" alt="img" />
                </div>
                {/* text */}
                <div className="flex-1">
                <Name nameSize="text-2xl" nameStyle="pb-2" titleSize="lg" />
                </div>
            </div>
            <div className="py-5text-sm font-semibold leading-7 text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam delectus rerum sunt perferendis minus consectetur. Quia ab amet unde quidem, sunt mollitia commodi sit molestias officia beatae quod magni accusantium!</div>
        </div>
    </div>
  )
}

export default AboutModal