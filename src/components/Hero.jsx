import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Hero = () => {
  return (
    <div className='flex flex-row justify-start h-svh w-screen'>
        <Sidebar />
        <Mainbar />
    </div>
  )
}

export default Hero