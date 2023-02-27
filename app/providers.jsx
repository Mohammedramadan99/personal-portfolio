'use client';
import { AnimatePresence } from "framer-motion";
import CursorProvider from '@/context/CursorContext';
function Providers({children,...rest}) {

    return (
        <AnimatePresence initial={true} mode="wait">
            <CursorProvider>
                {children}
            </CursorProvider>
        </AnimatePresence>
        
    )   
}
export default Providers
