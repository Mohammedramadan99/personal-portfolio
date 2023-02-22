import React from 'react'
import Button from './Button'
import Name from './Name'

function Home() {
  return (
    <div className='animation-fadeUp w-full h-4/5 flex-center'>
        <div className="flex flex-col items-center">
            <Name titleStyle="py-10"/>
            <Button content="hire me" />
        </div>
    </div>
  )
}

export default Home