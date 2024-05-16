import React from 'react'
import { LogoImage } from './Image'
import LogoURL from '../assets/rmi_logo.png'
const LogoAlt = "Readyman, Inc."

export const HeadContainer = () => {
  return (
    <div className='container mx-auto'>
        <div className='flex h-full'>
            <LogoImage props = {
                {
                    URL: LogoURL,
                    ALT: LogoAlt
                }
            }  />
        </div>
    </div>
  )
}

