'use client';
import { useEffect } from 'react'
import './globals.scss'
// import cursor context provider 
import Providers from './providers';

export default function RootLayout({ children }) {
  useEffect(() => {
    const threeScript = document.createElement('script')
    threeScript.setAttribute('id','threeScript')
    threeScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
    document.getElementsByTagName('head')[0].appendChild(threeScript)
    return () => {
      if (threeScript) threeScript?.remove();
    }
  }, [])
  return (
    <html lang="en">
      <head />
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
