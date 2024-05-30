import React from 'react'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom';

const LogOutButton = () => {

  const navigate = useNavigate();

  return (
    <>
        <button className='hidden md:flex items-center gap-2'
          onClick={() => navigate('/')}
        >
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