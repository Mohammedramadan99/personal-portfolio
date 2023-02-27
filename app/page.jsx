// 1:14:00 m
'use client';

import { useContext, useEffect, useRef, useState } from "react"
import NET from 'vanta/dist/vanta.net.min'
import * as THREE from 'three'
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import './swiper/swiper.scss'
import Contact from "@/components/Contact";
import {CursorContext} from "@/context/CursorContext";
import {motion} from 'framer-motion'
import { transition1 } from "@/utils/transitions";
export default function Page() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [currentPage,setCurrentPage] = useState('home')
  
  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xff3f81,          
          backgroundColor: 0x0,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          points: 20.00,
          maxDistance: 21.00,
          spacing: 12.00
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destory();
    };
  }, [vantaEffect]);
  const {cursorVariants,cursorBG} = useContext(CursorContext)
  return (
    <div className='main' ref={vantaRef}>
      <div className="main-container h-screen bg-zinc-900/25 backdrop-blur-sm selection:bg-main_color selection:text-white">
        <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage}/>
        {
          currentPage === 'home' ? <Home/> :
          currentPage === 'about' ? <About/> :
          currentPage === 'portfolio' ? <Portfolio/> : 
          currentPage === 'contact' && <Contact currentPage={currentPage} setCurrentPage={setCurrentPage} />
        }
      </div>
      {/* cursor */}
      <motion.div
        variants={cursorVariants}
        animate={cursorBG}
        className="w-[32px] h-[32px] border border-main_color fixed top-0 left-0 pointer-events-none z-50 rounded-full flex-center"
        >
          <div className="w-1 h-1 bg-main_color rounded-full"></div>
        </motion.div>
    </div>
  )
}