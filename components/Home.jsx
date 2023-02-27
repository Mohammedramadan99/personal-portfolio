"use client";

import Button from './Button'
import Name from './Name'

function Home() {
  return (
    <div className='animation-fadeUp w-full h-[90vh] flex-center'>
        <div className="flex flex-col items-center">
            <Name titleStyle="py-10"/>
            <Button content="hire me" />
        </div>
    </div>
  )
}

export default Home