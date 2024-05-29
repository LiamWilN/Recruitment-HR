import React, { useState, useEffect } from 'react'
import RMILogo from '../assets/rmi_logo.png'
import { UserRound, KeyRound} from 'lucide-react'
import MainScreen from '../assets/login_img.png'
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const [user_name, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');
    const [user, getUser] = useState([]);

    useEffect(() => {
        fetch('https://api.dev.readymaninc.com/api/v1/recruiters/1')
            .then(response => response.json())
            .then(data => getUser(data.data))
            .catch(err => console.log(err));
        }, []);

        const navigate = useNavigate();

    const validateLogin = (item) => {
        item.preventDefault();


        if(String(user.employer_id) === user_name && user.user_name === password){
            navigate('/home')
        } else {
            alert("Incorrect Username or Password")
        }
        
    }


  return (
    <div className='h-svh w-svw flex justify-center items-center' style={{ backgroundImage: `URL(${MainScreen})`, height: "100vh", backgroundPosition: "center", backgroundSize: "cover"}}>
        <div className='h-1/2 bg-white/75 w-1/2 sm:1/6 rounded-xl shadow-2xl flex flex-col items-center justify-center'>
            <img src={RMILogo} alt="Readyman, Inc" className='size-24' />
            <h1 className='font-bold text-2xl font-sans'>Readyman, Inc.</h1>
            <form className='flex flex-col my-4 gap-2' onSubmit={validateLogin}>
                <div className='flex flex-row gap-4 p-2 items-center'>
                    <UserRound />
                    <input type="text" className='rounded-lg border-0 outline-none p-1 bg-neutral-200'
                        value={user_name} onChange={(item) => usernameupdate(item.target.value)}/>
                </div>
                <div className='flex flex-row gap-4 p-2 items-center'>
                    <KeyRound />
                    <input className='rounded-lg border-0 outline-none p-1 bg-neutral-200'
                        type="password" value={password} onChange={(item) => passwordupdate(item.target.value)}/>
                </div>    
                <button className='bg-sky-300 text-white rounded-lg p-2' type='submit'>
                    Login
                </button>
            </form>
        </div>
    </div>
  )
}

export default Login