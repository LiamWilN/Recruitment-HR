import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-start h-h90p w-full'>
        <Sidebar />
        <Mainbar />
    </div>
  )
}

export default Hero