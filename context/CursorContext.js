'use client';
import {useState,useEffect,createContext, Children} from 'react'

export const CursorContext = createContext();

const CursorProvider = ({children}) => {
    const [cursorPos,setCursorPos] = useState({
        x:0,
        y:0
    });

    // cursor bg state
    const [cursorBG,setCursorBG] = useState('default');

    
    useEffect(() => {
        // const mobileViewportIsActive = ;
        if (window.innerWidth > 768) {
            const move = e => {
                setCursorPos({
                    x: e.clientX,
                    y: e.clientY
                });
            }
            window.addEventListener('mousemove',move )
            // on drag
            window.addEventListener('mouseover',move )
            window.addEventListener('mouseout',move )
    
            //   to remove event
            return () => {
                window.removeEventListener('mousemove', move)
                window.removeEventListener('mouseover', move)
                window.removeEventListener('mouseout', move)
            }
            
        } else {
            setCursorBG('none')
        }
    },[cursorBG])
    
    const cursorVariants = {
        default: {
            x: cursorPos.x - 16,
            y: cursorPos.y - 16,
        },
        text:{
            width:'150px',
            height:'150px',
            x: cursorPos.x - 72,
            y: cursorPos.y - 72,
            backgroundColor: '#fff',
            mixBlendMode:'difference'
        },
        none:{
            width:0,
            height:0,
            backgroundColor: "rgba(255,255,255,1)",
            opacity:0,
            display:"none"
        }

    }

    // mouse enter handler
    const mouseEnterHandler = () => {
        setCursorBG('text')
    }

    // mouse leave handler
    const mouseLeaveHandler = () => {
        setCursorBG('default')
    }
    return(
        <CursorContext.Provider
            value={{cursorVariants,cursorBG,mouseEnterHandler,mouseLeaveHandler}}>
            {children}
        </CursorContext.Provider>
    )
}

export default CursorProvider