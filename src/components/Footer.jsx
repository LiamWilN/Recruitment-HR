import React from 'react'
import { Settings, Mail, Tent } from 'lucide-react'

const Footer = () => {

  

  return (
    <div className='w-svw h-16 border-t-2 border-slate-300 flex justify-between'>
        <div className='flex items-center ml-8 h-full text-slate-400 font-semibold'>
            Powered by RYS Property Holdings, Inc.
        </div>
        <div className='flex items-center mr-8 gap-4'>
            <Settings />
            <Mail />
            <Tent />
        </div>
    </div>
  )
}

export default Footer