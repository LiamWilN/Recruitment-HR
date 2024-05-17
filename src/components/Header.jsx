import React from 'react'
import { LogoImage } from './Image'
import LogoURL from '../assets/rmi_logo.png'
import { X, Menu } from 'lucide-react'
import DetailContents from '../assets/contents.details.json'
import { useState } from 'react'
import HiddenMenu from './HiddenMenu'


const Header = () => {

    const [currentMenu, menuState] = useState(false);

    const LogoAlt = "Readyman, Inc."

  return (
    <>
        <div className='w-full border-b-2 border-sky-400 h-20 md:h-24'>
            <div className='container mx-auto h-full flex items-center justify-between'>
                <div className='flex items-center gap-2 ml-4'>
                    <LogoImage props = {
                        {
                            URL: LogoURL,
                            ALT: LogoAlt
                        }
                    }  />

                    <h1 className='font-bold text-xl'>
                        Readyman, Inc.
                    </h1>
                </div>
                <div className='hidden md:flex items-center content-center'>
                    {
                        DetailContents.NavigationLinks.map( (i) => {
                            return (
                                <button key={i.id} className='w-26 gap-2 mx-4 font-bold'>{i.title}</button>
                            )
                        })
                    }
                </div>

                <div className='flex md:hidden'>
                    <button onClick={ () => { menuState(!currentMenu) }}>
                        {
                            currentMenu ? <X className='mr-6'/> : <Menu className='mr-6' />
                        }
                    </button>
                </div>
            </div>
        </div>
        {
            currentMenu  ? <HiddenMenu props={{  
                items: DetailContents.NavigationLinks }} /> : false
        }
    </>
  )
}

export default Header