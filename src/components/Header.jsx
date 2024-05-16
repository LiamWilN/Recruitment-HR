import React from 'react'
import { LogoImage } from './Image'
import LogoURL from '../assets/rmi_logo.png'
const LogoAlt = "Readyman, Inc."
import { HeadContainer } from './Container'

const Header = () => {



  return (
    <div className='w-screen bg-blue-300 h-24'>
        <HeadContainer>
            <div className='flex items-center'>
                <LogoImage props = {
                    {
                        URL: LogoURL,
                        ALT: LogoAlt
                    }
                }  />
            </div>
        </HeadContainer>
    </div>
  )
}

export default Header