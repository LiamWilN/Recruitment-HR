import React from 'react'
import { LogOut } from 'lucide-react'

const LogOutButton = () => {
  return (
    <>
        <button className='hidden md:flex items-center gap-2'>
            <LogOut /> 
            <h4 className='font-bold'>
                Logout
            </h4>
        </button>
    </>
  )
}

export const HiddenLogOutButton = () => {
    return (
      <>
          <button className='flex md:hidden items-center justify-center gap-2 w-full'>
              <LogOut /> 
          </button>
      </>
    )
  }

export default LogOutButton