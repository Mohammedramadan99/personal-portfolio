import {useState,useEffect,createContext, Children} from 'react'

export const CursorContext = createContext();

const CursorProvider = ({children}) => {
    const [cursorPos,setCursorPos] = useState({
        x:0,
        y:0
    });

    // cursor bg state
    const [cursorBG,setCursorBG] = useState('default');

    const mobileViewportIsActive = window.innerWidth < 768;

    useEffect(() => {
        const move = e => {
            setCursorPos({
                x: e.clientX,
                y: e.clientY
            });
        }
        window.addEventListener('mousemove',move )

        //   to remove event
        return () => {
            window.removeEventListener('mousemove', move)
        }
        // if (!mobileViewportIsActive) {
            
        // } else {
        //     setCursorBG('none')
        // }
    })
    
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