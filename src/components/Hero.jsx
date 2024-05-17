import React from 'react'
import Sidebar from './Sidebar'
import Mainbar from './Mainbar'

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-start h-svh w-screen'>
        <Sidebar props={
            { panelOpen: `w-1/6`, panelClose: `w-w5p`, colHeight: `h-12`, hide:`hidden`, show:`flex`}} />
        <Mainbar props={
            { panelOpen: `w-5/6`, panelClose: `w-w95p` }} />
    </div>
  )
}

export default Hero