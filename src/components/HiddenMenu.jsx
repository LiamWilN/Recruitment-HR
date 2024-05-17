import React from 'react'
import { Globe, Telescope, PencilLine } from 'lucide-react'

const HiddenMenu = ({props}) => {
    
    const IconKeys = [<Globe />, <Telescope />, <PencilLine />];

  return (
    <div className='w-screen bg-slate-100 h-48 flex md:hidden flex-col items-center justify-center font-bold text-lg'>
        {
            props.items.map( (i) => {

                return (
                    <div className='py-2 flex w-3/5 justify-end items-center gap-4' key={i.id}>
                        {IconKeys[i.id]}
                        <a href="#" >{i.title}</a>
                    </div>
                )
            })
        }
    </div>
  )
}

export default HiddenMenu