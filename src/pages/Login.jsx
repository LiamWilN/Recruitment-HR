import React from 'react'
import RMILogo from '../assets/rmi_logo.png'
import { UserRound, KeyRound } from 'lucide-react'
import MainScreen from '../assets/login_img.png'


const Login = () => {
  return (
    <div className='h-svh w-svw flex justify-center items-center' style={{ backgroundImage: `URL(${MainScreen})`, height: "100vh", backgroundPosition: "center", backgroundSize: "cover"}}>
        <div className='h-1/2 bg-white/75 w-1/2 sm:1/6 rounded-xl shadow-2xl flex flex-col items-center justify-center'>
            <img src={RMILogo} alt="Readyman, Inc" className='size-24' />
            <h1 className='font-bold text-2xl font-sans'>Readyman, Inc.</h1>
            <div className='flex flex-col my-4 gap-2'>
                <div className='flex flex-row gap-4 p-2 items-center'>
                    <UserRound />
                    <input type="text" className='rounded-lg border-0 outline-none p-1 bg-neutral-200'/>
                </div>
                <div className='flex flex-row gap-4 p-2 items-center'>
                    <KeyRound />
                    <input type="text" className='rounded-lg border-0 outline-none p-1 bg-neutral-200'/>
                </div>
                <button className='bg-sky-300 text-white rounded-lg p-2'>
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Login