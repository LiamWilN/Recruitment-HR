import React from 'react'
import { Globe, Telescope, PencilLine } from 'lucide-react'

import SideNavigation from '../assets/contents.details.json'

export const HiddenMenu = ({props}) => {
    
    const IconKeys = [<Globe absoluteStrokeWidth />, <Telescope absoluteStrokeWidth />, <PencilLine absoluteStrokeWidth />];

  return (
    <div className='w-screen bg-slate-100 h-48 flex md:hidden flex-col items-center justify-center font-bold text-lg'>
        {
            props.items.map( (i) => {

                return (
                    <div className='py-2 flex w-3/5 justify-end items-center gap-4' key={i.id}>
                        {IconKeys[i.id]}
                        <button title={i.title} onSelect={() => { props={currentMenu: i.title}}} >{i.title}</button>
                        {console.log(currentMenu)}
                    </div>
                )
            })
        }
    </div>
  )
}

export const MainMenu = () => {
    return (
        <>
            {
                SideNavigation.NavigationLinks.map( (i) => {
                    return (
                        <button title={i.title} key={i.id} className='w-26 gap-2 mx-4 font-bold'>{i.title}</button>
                    )
                })
            }
        </>
    )
}


export const SideMenu = () => {
    return (
        <>

        </>
    )
}