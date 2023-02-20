'use client'
import { useEffect, useState } from 'react'
import './globals.css'

export default function RootLayout({ children }) {
  useEffect(() => {
    const threeScript = document.createElement('script')
    threeScript.setAttribute('id','threeScript')
    threeScript.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js')
    document.getElementsByTagName('head')[0].appendChild(threeScript)
    return () => {
      if (threeScript) threeScript.remove();
    }
  }, [])
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
